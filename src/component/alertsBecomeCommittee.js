import React, { useEffect, useState, useContext} from 'react'
import '../styles/alerts_play.css'
import '../styles/alerts_become_committee.css'
import close_img from '../icons/close.svg'
import eth_log from '../icons/eth.png'
import unselect_img from '../icons/unselect.svg'
import select_img from '../icons/select.svg'
import AlertsCommitteeTerm from './alertsCommitteeTerm'
import {UnichainWallet} from '../store/unichain'
import Maincontext from './context'
import loading_img from '../icons/loading.gif'


const AlertsBecomeCommittee = ({setalertBecomeCommitteeStatus, getCommitteeInfo}) =>{

  const [readclicks, setReadclicks] = useState(false);
  const [alertCommitteeTermStatus, setalertCommitteeTermStatus] = useState(0);
  const [becomeStatus, setBecomeStatus] = useState(0);
  const [ethbalance, setEthbalance] = useState(0);
  const myContractInfo = useContext(Maincontext);


  function closePage(){
    setalertBecomeCommitteeStatus(0);
  }

  function clickRead(){
    setReadclicks(!readclicks);
  }

  function disPlayCommitteeTerm(){
    setalertCommitteeTermStatus(1);
  }

  async function getBalance() {
    try{
      let balance = await UnichainWallet.providers.getBalance(myContractInfo.address);
      setEthbalance((balance.toString()/(10**18)).toFixed(9));
    }catch(e){
      console.log(e);
    }
  }

  function caculateAddress(){
    if(myContractInfo.address.length > 0){
        let index = 0;
        for(let i = 0; i < myContractInfo.committee.length; i++){
          if(myContractInfo.committee[i].committee.toLowerCase() == '0x0000000000000000000000000000000000000000'){
            index = i;
            return index;
          }
        } 
        
        return 10000;
        
    }
  }

  async function  become_committee() {
    if(myContractInfo.address.length > 0){
      let _index = caculateAddress();
      if(_index < myContractInfo.committee.length){
        try{
          // const amount = 1 * (10**14);
          setBecomeStatus(1);
          // console.log('do insert');
          const tx = await UnichainWallet.committeescontract.become_committee_insert(_index, {value: myContractInfo.committee_price.toString()});
          let res = await tx.wait();
          if(res.status === 1){
            setBecomeStatus(2);
            getCommitteeInfo();
          }
        }catch(e){
            console.log(e)
        }

      }else{
        try{
          // const amount = 1 * (10**14);
          setBecomeStatus(1);
          // console.log('do become');
          // console.log(myContractInfo.committee_price.toString())
          const tx = await UnichainWallet.committeescontract.become_committee({value: myContractInfo.committee_price.toString()});
          let res = await tx.wait();
          if(res.status === 1){
            setBecomeStatus(2);
            getCommitteeInfo();
          }
        }catch(e){
            console.log(e)
        }

      }

    }else{
      alert('Pls Connect Wallet First')
    }
    
  }

  useEffect ( ()=>{
    if(myContractInfo.address.length > 0){
      getBalance();
    }
  }, [myContractInfo.address]);
    
    return(
      <div className='alert_con'>
        <div className='alerts_con'>  
          <div className='alert_title'>
            <div className='alert_title_title'>Become Committee Member</div>
            <img src={close_img} onClick={closePage}/>
          </div>   
          <div className='alert_stake_name'>Stake ETH to Become Committee Member</div>
          <div className='alert_stake_contain'>
              <li>{(myContractInfo.committee_price/(10**18)).toFixed(5)}</li>
              <div className='alert_stake_eth'>
                <img src={eth_log}/>
                <li>ETH</li>
              </div>
          </div>
          <div className='alert_stake_balance'>
            Balance 
            <li>{ethbalance} ETH</li>
          </div>
          <div className='alert_stake_read'>
            <img src={readclicks ? select_img: unselect_img} onClick={clickRead}/>
            <div className='alert_stake_read_contain'>
              <li className='alert_stake_read_contain_name'>I have read, understood, and agreed to</li>
              <li className='alert_stake_read_contain_term' onClick={disPlayCommitteeTerm}>Hashball Committee Rewards and Penalty Terms.</li>
            </div>
          </div>
          {becomeStatus === 1 ? <div className='alert_ball_button'>
            <img src={loading_img}/>
          </div> : (becomeStatus === 2 ? <div className='alert_ball_button'>
            Success!
          </div> : (readclicks ? <div className='alert_ball_button' onClick={become_committee}> Confirm </div>: <div className='alert_ball_button_disable'>Confirm</div>)
          )}
          
        </div>
        {alertCommitteeTermStatus === 1 && <AlertsCommitteeTerm setalertCommitteeTermStatus={setalertCommitteeTermStatus} setReadclicks={setReadclicks}/>}
      </div>
    )
  }

  export default AlertsBecomeCommittee
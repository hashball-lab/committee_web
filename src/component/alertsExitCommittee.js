import React, { useEffect, useState, useContext} from 'react'
import '../styles/alerts_play.css'
import '../styles/alerts_become_committee.css'
import close_img from '../icons/close.svg'
import eth_log from '../icons/eth.png'
import {UnichainWallet} from '../store/unichain'
import Maincontext from './context'
import loading_img from '../icons/loading.gif'


const AlertsExitCommittee = ({setalertExitCommitteeStatus, getCommitteeInfo}) =>{

  const [exitStatus, setExitStatus] = useState(0);
  const myContractInfo = useContext(Maincontext);


  function closePage(){
    setalertExitCommitteeStatus(0);
  }

  function caculateAddress(){
    if(myContractInfo.address.length > 0){
        for(let i = 0; i < myContractInfo.committee.length; i++){
          if(myContractInfo.committee[i].committee.toLowerCase() == myContractInfo.address.toLowerCase()){
            // console.log(myContractInfo.committee[i]);
            if(myContractInfo.committee[i].status < 2){
              return i;

            } 
          }
        }
        return 10000;
        // console.log(index)
        // if(myContractInfo.committeebeginIndex*1 + 12 < myContractInfo.committee.length){
        //   if(index < myContractInfo.committeebeginIndex*1 || index >= myContractInfo.committeebeginIndex*1 + 12){
        //      return index;
        //   }else{
        //      return 10000;
        //   }
        // }else{
        //   if(index < myContractInfo.committeebeginIndex*1 && index >= (myContractInfo.committeebeginIndex*1 + 12 - myContractInfo.committee.length)){
        //     return index;
        //   }else{
        //     return 10000;
        //  }
        // }
        
    }
  }

  async function exit_committee() {
    if(myContractInfo.address.length > 0){
     
        let _index = caculateAddress();
        if(_index < 10000){
          try{
              setExitStatus(1);
              // console.log(_index);
              const tx = await UnichainWallet.committeescontract.remove_committee(_index);
              let res = await tx.wait();
              if(res.status === 1){
                setExitStatus(2);
                getCommitteeInfo();
              }
          }catch(e){
              console.log(e)
          }

        }else{
          alert('You are in the task, pls do it in next epoch');
        }
        
    }else{
      alert('Pls Connect Wallet First');
    }
    
  }

    
    return(
      <div className='alert_con'>
        <div className='alerts_con'>  
          <div className='alert_title'>
            <div className='alert_title_title'>Exit The Committee</div>
            <img src={close_img} onClick={closePage}/>
          </div>   
          <div className='alert_stake_name'>Withdraw the deposit balance</div>
          <div className='alert_stake_contain'>
              <li>0.0001</li>
              <div className='alert_stake_eth'>
                <img src={eth_log}/>
                <li>ETH</li>
              </div>
          </div>
          
          {/* <div className='alert_ball_button' style={{marginTop: '90px'}}>
            Withdraw
          </div> */}
          {exitStatus === 1 ? <div className='alert_ball_button' style={{marginTop: '80px'}}>
            <img src={loading_img}/>
          </div> : (exitStatus === 2 ? <div className='alert_ball_button' style={{marginTop: '80px'}}>
            Success!
          </div> : <div className='alert_ball_button' onClick={exit_committee} style={{marginTop: '80px'}}>
            Withdraw
          </div>)}
          
        </div>
      </div>
    )
  }

  export default AlertsExitCommittee
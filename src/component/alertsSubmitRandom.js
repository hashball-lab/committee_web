import React, { useEffect, useState, useContext} from 'react'
import '../styles/alerts_submit_hash.css'
import '../styles/alerts_play.css'
import close_img from '../icons/close.svg'
import {UnichainWallet} from '../store/unichain'
import Maincontext from './context'
import loading_img from '../icons/loading.gif'
import * as ethers from "ethers";



const AlertsSubmitRandom = ({setalertSubmitRandomStatus, getInfo, setalreadyRandomSubmit}) =>{

  const myContractInfo = useContext(Maincontext);

  const [inputRandom, setInputRandom] = useState('');
  const [submitstatus, setSubmitstatus] = useState(0);
  const [hashRandom, setHashRandom] = useState('');
  const [typestatus, setTypestatus] = useState(0);
  const [submitIndex, setsubmitIndex] = useState(0);
  const [committeeIndex, setcommitteeIndex] = useState(0);

  function closePage(){
    setalertSubmitRandomStatus(0);
  }

  async function getHashrandom(){
    if(myContractInfo.attach.toLowerCase() == myContractInfo.address.toLowerCase()){
      setHashRandom(myContractInfo.attachHash);
      setTypestatus(3);
      return;
    }
    if(myContractInfo.developer.toLowerCase() == myContractInfo.address.toLowerCase()){
      setHashRandom(myContractInfo.developerHash);
      setTypestatus(4);
      return;
    }
    for(let i = 0; i < myContractInfo.committee.length; i++){
      if(myContractInfo.committee[i].committee.toLowerCase() == myContractInfo.address.toLowerCase()){
          if(myContractInfo.committee[i].status == 2){
            setTypestatus(1);
            let result = await UnichainWallet.currentsubmitcontract.get_current_submit_index(myContractInfo.epoch.toString(), myContractInfo.address);
            setHashRandom(myContractInfo.currentHashs[result.toString()]);
            setsubmitIndex(result.toString());
            setcommitteeIndex(i);
          }
          if(myContractInfo.committee[i].status == 3){
            setTypestatus(2);
            let result = await UnichainWallet.alternatesubmitcontract.get_alternate_submit_index(myContractInfo.epoch.toString(), myContractInfo.address);
            setHashRandom(myContractInfo.alternateHashs[result.toString()]);
            setsubmitIndex(result.toString());
            setcommitteeIndex(i);
          }
          break;
      }
    }


  }
  async function doSubmitRandom(){
    if(ethers.utils.solidityKeccak256(["string",], [inputRandom]) != hashRandom){
      alert('Pls input the right random');
    }else{
      if(typestatus === 1){
        try{
          setSubmitstatus(1);
          const tx = await UnichainWallet.currentsubmitcontract.commit_random(inputRandom, submitIndex, committeeIndex);
          let res = await tx.wait();
          if(res.status === 1){
            setSubmitstatus(2);
            setalreadyRandomSubmit(true);
            await getInfo();
          }
        }catch(e){
            console.log(e)
        }
      }else if(typestatus === 2){
        try{
          setSubmitstatus(1);
          const tx = await UnichainWallet.alternatesubmitcontract.alternate_commit_random(inputRandom, submitIndex, committeeIndex);
          let res = await tx.wait();
          if(res.status === 1){
            setSubmitstatus(2);
            setalreadyRandomSubmit(true);
            await getInfo();
          }
        }catch(e){
            console.log(e)
        }

      }else if(typestatus === 3){
        try{
          setSubmitstatus(1);
          const tx = await UnichainWallet.attachsubmitcontract.attach_commit_random(inputRandom);
          let res = await tx.wait();
          if(res.status === 1){
            setSubmitstatus(2);
            setalreadyRandomSubmit(true);
            await getInfo();
          }
        }catch(e){
            console.log(e)
        }

      }else if(typestatus === 4){
        try{
          setSubmitstatus(1);
          const tx = await UnichainWallet.developersubmitcontract.developer_commit_random(inputRandom);
          let res = await tx.wait();
          if(res.status === 1){
            setSubmitstatus(2);
            setalreadyRandomSubmit(true);
            await getInfo();
          }
        }catch(e){
            console.log(e)
        }

      }

    }
    

  }

  useEffect ( ()=>{
    if(myContractInfo.address.length > 0){
      getHashrandom();
    }
  }, [myContractInfo.address]);
    
    return(
      <div className='alert_con'>
        <div className='alerts_con_hash'>  
          <div className='alert_title'>
            <div className='alert_title_title'>Submit Random</div>
            <img src={close_img} onClick={closePage}/>
          </div>   
          <div className='alert_submit_hash'>
            <div className='alert_submit_hash_title'>Enter the corresponding random</div>
            <div className='alert_submit_hash_input'>
              <input value={inputRandom} placeholder='Enter your random here'
                onChange={(e)=>setInputRandom(e.target.value)}/>
            </div>
            <div className='alert_submit_hash_tip'>Enter the random you have saved in the previous step.</div>
            <div className='alert_submit_hash_title'>Already submitted hash random</div>
            <div className='alert_submit_hash_contain'>
              <div className='alert_submit_hash_contain_hash'>
                <div className='alert_submit_hash_contain_hash_title'>Hash Random</div>
                <div className='alert_submit_hash_contain_hash_hash'>{hashRandom}</div>
              </div>
            </div> 
            
          </div>
          
          
          {submitstatus === 1 ? <div className='alert_ball_button'><img src={loading_img}/>Submit... </div>
                                          : (submitstatus === 2 ? <div className='alert_ball_button' >Success!</div>
                                                              : <div className='alert_ball_button' onClick={doSubmitRandom}>
                                                                Submit Random
                                                              </div>) }
          
        </div>
      </div>
    )
  }

  export default AlertsSubmitRandom
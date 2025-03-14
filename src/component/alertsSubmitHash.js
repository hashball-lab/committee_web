import React, { useEffect, useState, useContext} from 'react'
import '../styles/alerts_submit_hash.css'
import '../styles/alerts_play.css'
import close_img from '../icons/close.svg'
import copy_alert_img from '../icons/copy_alert.svg'
import copied_img from '../icons/copied.png'
import unselect_img from '../icons/unselect.svg'
import select_img from '../icons/select.svg'
import submit_hash_grey from '../icons/submit_hash_grey.svg'
import * as ethers from "ethers";
import copy from  'copy-to-clipboard';
import {UnichainWallet} from '../store/unichain'
import Maincontext from './context'
import loading_img from '../icons/loading.gif'


const AlertsSubmitHash = ({setalertSubmitHashStatus, getInfo, setalreadyHashSubmit}) =>{
  const [readclicks, setReadclicks] = useState(false);
  const [copyclicks, setCopyclicks] = useState(false);
  const [hashrandomClicks, setHashrandomClicks] = useState(false);
  const [inputRandom, setInputRandom] = useState('');
  const [hashRandom, setHashRandom] = useState('');
  const [submitHashStatus, setsubmitHashStatus] = useState(0);
  const [midStatus, setmidStatus] = useState(0);
  const [updateBlockHashStatus, setUpdateBlockHashStatus] = useState(0);
  const [alreadySubmitHash, setAlreadySubmitHash] = useState(false);
  // const [typestatus, settypestatus] = useState(0);
  const myContractInfo = useContext(Maincontext);

  function closePage(){
    setalertSubmitHashStatus(0);
  }

  function clickRead(){
    setReadclicks(!readclicks);
  }
  function clickCopy(){
    setCopyclicks(!copyclicks);
  }
  function doHashRandom(){
    if(inputRandom.length > 0){
      setHashrandomClicks(true);
      // ethers.utils.solidityKeccak256(types, values)
      setHashRandom(ethers.utils.solidityKeccak256(["string",], [inputRandom]));
    }
    
  }

  function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  } 

  function doCopyInfo(){
    copy(inputRandom + ' '  + hashRandom);
    alert("copy success");
  }

  function caculateAddress(){
    if(myContractInfo.address.length > 0){
       
        for(let i = 0; i < myContractInfo.committee.length; i++){
          if(myContractInfo.committee[i].committee.toLowerCase() == myContractInfo.address.toLowerCase()){
            // settypestatus(myContractInfo.committee[i].status)
            return [i, myContractInfo.committee[i].status];
          }
        }
        
        return [10000, 0];
        
    }
  }

async function caculatecurrentHashSubmitIndex(){
    let result = await UnichainWallet.currentsubmitcontract.get_current_submit_index(myContractInfo.epoch.toString(), myContractInfo.address);
    // console.log(result.toString());
    return result.toString()/1;
    // if(result.length > 0 ){
    //   for(let i = 0; i < result[2].current_submit_hashrandom.length; i++){
    //     if(result[2].current_submit_hashrandom[i].toLowerCase() == myContractInfo.address.toLowerCase()){
    //       return i;
    //     }
    //   }
    // }
  }

async function caculatealternateHashSubmitIndex(){
  let result = await UnichainWallet.alternatesubmitcontract.get_alternate_submit_index(myContractInfo.epoch.toString(), myContractInfo.address);
  return result.toString();
    // if(result.length > 0 ){
    //   for(let i = 0; i < result[2].alternate_submit_hashrandom.length; i++){
    //     if(result[2].alternate_submit_hashrandom[i].toLowerCase() == myContractInfo.address.toLowerCase()){
    //       return i;
    //     }
    //   }
    // }
  }

  async function doSubmitHash() {
    if(myContractInfo.address.length > 0){
      if(myContractInfo.address.toLowerCase() == myContractInfo.developer.toLowerCase()){
        try{
              
          setsubmitHashStatus(1);
          // console.log('developer submit hash');
          const tx = await UnichainWallet.developersubmitcontract.developer_commit_hashrandom(hashRandom);
          let res = await tx.wait();
          if(res.status === 1){
            setsubmitHashStatus(2);
            getInfo();
            setAlreadySubmitHash(true);
            setmidStatus(1);
            while (true){
              // console.log('waiting for developer');
              await sleep(10*1000);
              const blockNumber = await UnichainWallet.providers.getBlockNumber();
              if(blockNumber > res.blockNumber + 3){
                // await dodeveloperHashConfirm();
                setmidStatus(0);
                setUpdateBlockHashStatus(3);
                break;
              }
            }
            
          }
        }catch(e){
            console.log(e)
        }

      }else if(myContractInfo.address.toLowerCase() == myContractInfo.attach.toLowerCase()){
        try{
              
          setsubmitHashStatus(1);
          // console.log('attach submit hash');
          const tx = await UnichainWallet.attachsubmitcontract.attach_commit_hashrandom(hashRandom);
          let res = await tx.wait();
          if(res.status === 1){
            setsubmitHashStatus(2);
            getInfo();
            setAlreadySubmitHash(true);
            setmidStatus(1);
            while (true){
              // console.log('waiting attach');
              await sleep(10*1000);
              const blockNumber = await UnichainWallet.providers.getBlockNumber();
              if(blockNumber > res.blockNumber + 3){
                // await doattachHashConfirm();
                setmidStatus(0);
                setUpdateBlockHashStatus(3);
                break;
              }
            }
          }
        }catch(e){
            console.log(e)
        }

      }else{
        let _index = caculateAddress();
        // console.log(_index)
        if (_index[0] < 10000){
          if(_index[1] === 3){
            try{
              
              setsubmitHashStatus(1);
              // console.log('alternate submit hash');
              const tx = await UnichainWallet.alternatesubmitcontract.alternate_commit_hashrandom(hashRandom, _index[0]);
              let res = await tx.wait();
              // console.log(res)
              if(res.status === 1){
                setsubmitHashStatus(2);
                await getInfo();
                setAlreadySubmitHash(true);
                setmidStatus(1);
                while (true){
                  // console.log('waiting for alternate');
                  await sleep(20*1000);
                  const blockNumber = await UnichainWallet.providers.getBlockNumber();
                  if(blockNumber > res.blockNumber + 13){
                    // await doalternateHashConfirm(_index[0]);
                    setmidStatus(0);
                    setUpdateBlockHashStatus(3);
                    break;
                  }
                }
              }
            }catch(e){
                console.log(e)
            }


          }else if(_index[1] === 2){
            try{
              setsubmitHashStatus(1);
              // console.log('current submit hash');
              const tx = await UnichainWallet.currentsubmitcontract.commit_hashrandom(hashRandom, _index[0]);
              let res = await tx.wait();
              // console.log('current',res)
              if(res.status === 1){
                setsubmitHashStatus(2);
                await getInfo();
                setAlreadySubmitHash(true);
                setmidStatus(1);
                while (true){
                  // console.log('waiting for current');
                  await sleep(20*1000);
                  const blockNumber = await UnichainWallet.providers.getBlockNumber();
                  if(blockNumber > res.blockNumber + 13){
                    // await docurrentHashConfirm(_index[0]);
                    setmidStatus(0);
                    setUpdateBlockHashStatus(3);
                    break;
                  }
                }
              }
            }catch(e){
                console.log(e)
            }

          }
          
        }

      }
      
    }
  }

  async function doConfirm() {
    if(myContractInfo.address.length > 0){
      if(myContractInfo.address.toLowerCase() == myContractInfo.developer.toLowerCase()){
          await dodeveloperHashConfirm();

      }else if(myContractInfo.address.toLowerCase() == myContractInfo.attach.toLowerCase()){
          await doattachHashConfirm();
      }else{
        let _index = caculateAddress();
        // console.log(_index[0])
        if (_index[0] < 10000){
          if(_index[1] === 3){
            await doalternateHashConfirm(_index[0]);
          }else{
            await docurrentHashConfirm(_index[0]);
          }
        }
      }
    }
    
  } 

  async function docurrentHashConfirm(_committee_index) {
    try{
      setUpdateBlockHashStatus(1);
      // console.log('do insert');
      let _index =await caculatecurrentHashSubmitIndex();
      console.log(_index[0]);
      const tx = await UnichainWallet.currentsubmitcontract.update_hashrandom_blockhash(_index, _committee_index);
      let res = await tx.wait();
      if(res.status === 1){
        setUpdateBlockHashStatus(2);
        setmidStatus(0);
        setalreadyHashSubmit(true);
        setAlreadySubmitHash(true);
        setHashrandomClicks(true);
        setsubmitHashStatus(3);
        await getInfo();
      }
    }catch(e){
        console.log(e)
    }
  }

  async function doalternateHashConfirm(_committee_index) {
    try{
      setUpdateBlockHashStatus(1);
      // console.log('do insert');
      let _index =await caculatealternateHashSubmitIndex();
      const tx = await UnichainWallet.alternatesubmitcontract.alternate_update_hashrandom_blockhash(_index, _committee_index);
      let res = await tx.wait();
      if(res.status === 1){
        setUpdateBlockHashStatus(2);
        setmidStatus(0);
        setsubmitHashStatus(3);
        setalreadyHashSubmit(true);
        setAlreadySubmitHash(true);
        setHashrandomClicks(true);
        await getInfo();
        
      }
    }catch(e){
        console.log(e)
    }
  }

  async function dodeveloperHashConfirm() {
    try{
                  
      setUpdateBlockHashStatus(1);
      const tx = await UnichainWallet.developersubmitcontract.developer_update_hashrandom_blockhash();
      let res = await tx.wait();
      if(res.status === 1){
        setUpdateBlockHashStatus(2);
        setsubmitHashStatus(3);
        setHashrandomClicks(true);
        setAlreadySubmitHash(true);
        setmidStatus(0);
        await getInfo();
      }
    }catch(e){
        console.log(e)
    }
  }

  async function doattachHashConfirm() {
    try{
                    
      setUpdateBlockHashStatus(1);
      const tx = await UnichainWallet.attachsubmitcontract.attach_update_hashrandom_blockhash();
      let res = await tx.wait();
      if(res.status === 1){
        setUpdateBlockHashStatus(2);
        setmidStatus(0);
        setsubmitHashStatus(3);
        setHashrandomClicks(true);
        setAlreadySubmitHash(true);
        await getInfo();
      }
    }catch(e){
        console.log(e)
    }
    
  }

  async function caculate(){
    for(let i = 0; i < myContractInfo.committee.length; i++){
      if(myContractInfo.committee[i].committee.toLowerCase() == myContractInfo.address.toLowerCase()){
          if(myContractInfo.committee[i].commit_status == 1){
            setsubmitHashStatus(2);
            setUpdateBlockHashStatus(3);
          }
          if(myContractInfo.committee[i].commit_status == 1 && myContractInfo.committee[i].status == 2){
            let result = await UnichainWallet.currentsubmitcontract.get_current_submit_index(myContractInfo.epoch.toString(), myContractInfo.address);
            setHashRandom(myContractInfo.currentHashs[result.toString()]);
          }
          if(myContractInfo.committee[i].commit_status == 1 && myContractInfo.committee[i].status == 3){
            let result = await UnichainWallet.alternatesubmitcontract.get_alternate_submit_index(myContractInfo.epoch.toString(), myContractInfo.address);
            setHashRandom(myContractInfo.alternateHashs[result.toString()]);

          }
      }
    }
    // if(myContractInfo.address.toLowerCase() == myContractInfo.developer.toLowerCase()){
    //   if(myContractInfo.developerHashrandom){
    //        setsubmitHashStatus(2);
    //        setUpdateBlockHashStatus(3);
    //        setHashRandom(myContractInfo.developerRandom);
    //   }

    // } can resubmit
    // if(myContractInfo.attach.toLowerCase() == myContractInfo.address.toLowerCase()){
    //   if(myContractInfo.attachHashrandom){
    //     setsubmitHashStatus(2);
    //     setUpdateBlockHashStatus(3);
    //     setHashRandom(myContractInfo.attachHash);
    //   }
    // }
    //  can resubmit
  }
  useEffect ( ()=>{
    if(myContractInfo.address.length > 0){
      caculate();
    }
  }, [myContractInfo.address]);
    
    return(
      <div className='alert_con'>
        <div className='alerts_con_hash'>  
          <div className='alert_title'>
            <div className='alert_title_title'>Submit Hash Random</div>
            <img src={close_img} onClick={closePage}/>
          </div>   
          <div className='alert_submit_hash'>
            <div className='alert_submit_hash_title'>Step1 Enter a random</div>
            <div className='alert_submit_hash_input'>
              <input value={inputRandom} placeholder='Enter a random here'
                onChange={(e)=>setInputRandom(e.target.value)}/>
            </div>
            <div className='alert_submit_hash_tip'>Enter a random, which could be any strings. You need to submit this random in the next step, so please save it anywhere you can find it.</div>
            <div className='alert_submit_hash_title'>Step2 Hash your random</div>
            {(hashrandomClicks || submitHashStatus === 2)? <div className='alert_submit_hash_contain'>
              <div className='alert_submit_hash_contain_hash'>
                <div className='alert_submit_hash_contain_hash_title'>Hash Random</div>
                <div className='alert_submit_hash_contain_hash_hash'>{hashRandom}</div>
              </div>
              <div className='alert_submit_hash_contain_copy'>
                <img src={copy_alert_img} onClick={doCopyInfo}/>
              </div>
            </div> 
              : <div className='alert_submit_hash_button' onClick={doHashRandom}>Hash Random</div>}
          </div>
          
          <div className='alert_submit_item_hash' onClick={clickRead}>
            <img src={readclicks ? select_img: unselect_img}/>
            <li>I have saved the above Random, And I know I will be punished if I cannot provide the random on the next step.</li>
          </div>
          <div className='alert_submit_button_contain'>
            {submitHashStatus === 1 ? <div className='alert_submit_button_submit'><img src={loading_img}/>Submit...</div>
                : (submitHashStatus === 2 ? <div className='alert_submit_button_submit_disable'><img src={loading_img}/>Wait Confirm...</div> 
                                          : (alreadySubmitHash ? <div className='alert_submit_button_submit'>Success!</div> 
                                                                : (readclicks ? <div className='alert_submit_button_submit' onClick={doSubmitHash}>Submit Hash Random</div>
                                                                              : <div className='alert_submit_button_submit_disable' >Submit Hash Random</div>)))}
            <div className='alert_submit_button_contain_img'>
              {midStatus === 1 ? <img src={loading_img}/> : <img src={submit_hash_grey}/>}
            </div>
            {updateBlockHashStatus === 0 ? <div className='alert_submit_button_confirm_disable'>Confirm</div> : 
              (updateBlockHashStatus === 1 ? <div className='alert_submit_button_confirm'><img src={loading_img}/>Confirm...</div> 
                                          : (updateBlockHashStatus === 2 ? <div className='alert_submit_button_confirm'>Success!</div> 
                                                                          : <div className='alert_submit_button_confirm' onClick={doConfirm}>Confirm</div>))}
          </div>
          
        </div>
      </div>
    )
  }

  export default AlertsSubmitHash
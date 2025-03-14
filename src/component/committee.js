import React, { useState, useContext, useEffect, useRef}  from 'react'
import '../styles/committee.css'
import success_img from '../icons/unsuccess.svg'
import record_img from '../icons/record.svg'
import AlertsSubmitHash from './alertsSubmitHash'
import AlertsSubmitRandom from './alertsSubmitRandom'
import AlertsBecomeCommittee from './alertsBecomeCommittee'
import AlertsExitCommittee from './alertsExitCommittee'
import AlertsCommitteeHistory from './alertsCommitteeHistory'
import Maincontext from './context'
import {UnichainWallet} from '../store/unichain'

const Current_Committee = () => {
    const myContractInfo = useContext(Maincontext);
    const [currentCommittees, setCurrentCommittees] = useState([]);


    function caculateAddress(){
        if(myContractInfo.committee.length > 0){
            let arr = [];

        for(let i = 0; i < myContractInfo.committee.length; i++){
            if(myContractInfo.committee[i].status.toString()*1 == 2){ //current committee
                if(myContractInfo.committee[i].commit_status.toString()*1 == 3){
                    arr.push({id: i + 1, address : HandString(myContractInfo.committee[i].committee), hashrandom: true, random: true});
                }else if(myContractInfo.committee[i].commit_status.toString()*1 == 2){
                    arr.push({id: i + 1, address : HandString(myContractInfo.committee[i].committee), hashrandom: true, random: false});
                }else{
                    arr.push({id: i + 1, address : HandString(myContractInfo.committee[i].committee), hashrandom: false, random: false});
                }
            }
        }
        setCurrentCommittees(arr);

        }
        
        
    }

    function HandString(data){
        if(data.length >12){
          let str = data;
          // console.log(names)
          let pre = str.substr(0,5);
          let end = str.substr(str.length - 5, 5);
          return pre+'......'+ end;
        }else{
          return data;
        }
  
      }

    useEffect ( ()=>{
        if(myContractInfo.address.length > 0){
            caculateAddress()
        }
      }, [myContractInfo.address]);

    return (
        <div className='current_committee_contain'>
            <div className='current_committee_title_contain'>
                <li>Address</li>
                <li>Hash Random</li>
                <li>Random</li>
            </div>
            {currentCommittees.map(item => <div className='current_committee_item_contain' key={item.id}>
                <li>{item.address}</li>
                {item.hashrandom ? <li style={{color: '#CC3100'}}>Commited</li> : <li>Not Yet</li>}
                {item.random ? <li style={{color: '#CC3100'}}>Commited</li> : <li>Not Yet</li>}
                </div>
                )}

        </div>
    )
}

const Alternate_Committee = () => {
    const myContractInfo = useContext(Maincontext);
    const [alternateCommittees, setAlternateCommittees] = useState([]);

    function HandString(data){
        if(data.length >12){
          let str = data;
          let pre = str.substr(0,5);
          let end = str.substr(str.length - 5, 5);
          return pre+'......'+ end;
        }else{
          return data;
        }
  
      }

    function caculateAddress(){
        if(myContractInfo.committee.length > 0){
            let arr = [];
            for(let i = 0; i < myContractInfo.committee.length; i++){
                if(myContractInfo.committee[i].status.toString()*1 == 3){ //alternate committee
                    if(myContractInfo.committee[i].commit_status.toString()*1 == 3){
                        arr.push({id: i + 1, address : HandString(myContractInfo.committee[i].committee), hashrandom: true, random: true});
                    }else if(myContractInfo.committee[i].commit_status.toString()*1 == 2){
                        arr.push({id: i + 1, address : HandString(myContractInfo.committee[i].committee), hashrandom: true, random: false});
                    }else{
                        arr.push({id: i + 1, address : HandString(myContractInfo.committee[i].committee), hashrandom: false, random: false});
                    }
                }
            }
            setAlternateCommittees(arr);
            
        }
        
    }


    useEffect ( ()=>{
        if(myContractInfo.address.length > 0){
            caculateAddress()
        }
      }, [myContractInfo.address]);

    return (
        <div className='current_committee_contain'>
            <div className='current_committee_title_contain'>
                <li>Address</li>
                <li>Hash Random</li>
                <li>Random</li>
            </div>
            {alternateCommittees.map(item => <div className='current_committee_item_contain' key={item.id}>
                <li>{item.address}</li>
                {item.hashrandom ? <li style={{color: '#CC3100'}}>Commited</li> : <li>Not Yet</li>}
                {item.random ? <li style={{color: '#CC3100'}}>Commited</li> : <li>Not Yet</li>}
                </div>
                )}

        </div>
    )
}

const AllCommittees = () => {
    const myContractInfo = useContext(Maincontext);
    const [committees, setCommittees] = useState([]);

    function caculateAddress(){
        let arr = [];
        for(let i = 0; i < myContractInfo.committee.length; i++){
            arr.push({id: i + 1, address : HandString(myContractInfo.committee[i].committee)})
        }

        setCommittees(arr);

    }

    function HandString(data){
        if(data.length >12){
          let str = data;
          // console.log(names)
          let pre = str.substr(0,5);
          let end = str.substr(str.length - 5, 5);
          return pre+'......'+ end;
        }else{
          return data;
        }
  
      }

    useEffect ( ()=>{
        if(myContractInfo.address.length > 0){
            caculateAddress()
        }
      }, [myContractInfo.address]);

    return (
        <div className='current_committee_contain'>
            <div className='current_committee_title_contain'>
                <div className='address_id'>#</div>
                <li>Address</li>
            </div>
            {committees.map(item => <div className='current_committee_item_contain' key={item.id}>
                <div className='address_id'>{item.id}</div>
                <li>{item.address}</li>
                </div>
                )}

        </div>
    )
}

const Committees = ({getInfo}) => {
    const myContractInfo = useContext(Maincontext)
    const [choose, setChoose] = useState(1);
    const [alreadyCommittee, setAlreadyCommittee] = useState(false);
    const [alertBecomeCommitteeStatus, setalertBecomeCommitteeStatus] = useState(0);
    const [alertExitCommitteeStatus, setalertExitCommitteeStatus] = useState(0);
    const [committeeNum, setCommitteeNum] = useState(0);
    const [alertCommitteeHistoryStatus, setalertCommitteeHistoryStatus] = useState(0);
    const [margin, setMargin] = useState(0);
    const [committeePool, setCommitteePool] = useState(0);
    

    function clickPool(data){
        setChoose(data);
    }
    function disPlaybecomeCommittee(){
        setalertBecomeCommitteeStatus(1);
    }

    function disPlayExitCommittee(){
        setalertExitCommitteeStatus(1);
    }

    function disPlayCommitteeHistory(){
        setalertCommitteeHistoryStatus(1);
    }

    function caculateAddress(){
        let num = 0;
        for(let i = 0; i < myContractInfo.committee.length; i++){
            if(myContractInfo.committee[i].margin.toString() != 0){
                num++;
            }
            if(myContractInfo.committee[i].committee.toLowerCase() == myContractInfo.address.toLowerCase()){
                setMargin(myContractInfo.committee[i].margin.toString());
            }

        }
        setCommitteeNum(num);
    }
    async function getCommitteePoolMoney() {
        let res =await UnichainWallet.drawwinnercontract.get_epoch_money(myContractInfo.epoch.toString());
        // console.log(res);
        // console.log(res.committee_money.toString()/(10**18));
        if(res.length > 0){
            setCommitteePool(res.committee_money.toString());
        }        
    }

    useEffect ( ()=>{
        if(myContractInfo.address.length > 0){
            caculateAddress();
            getCommitteePoolMoney();
            if(myContractInfo.isCommittee){
                setAlreadyCommittee(true)
            }
        }
      }, [myContractInfo.address, myContractInfo.isCommittee]);

    return (
        <div className='committees_contain'>
            <div className='committees_become'>
                {/* {alreadyCommittee ? <div className='committees_become_title'>You are committee member</div>
                                  : <div className='committees_become_title'>You are not committee member yet</div>} */}
                <div className='committees_become_contain'>
                    <div className='committees_become_contain_record'><img src={record_img} onClick={disPlayCommitteeHistory}/></div>
                    {alreadyCommittee ? <div className='committees_become_title'>You are committee member</div> : <div className='committees_become_title'>You are not committee member yet</div>}
                    {alreadyCommittee ? <div className='committees_become_button' onClick={disPlayExitCommittee}>Exit Committee</div>
                                      : <div className='committees_become_button' onClick={disPlaybecomeCommittee}>Become Committee Member</div>}
                </div>
                <div className='committees_become_contain' style={{marginLeft:'0px'}}>
                    <div className='committees_pool_title' style={{color: '#8a8a8a'}}>Current Committee Rewards Pool</div>
                    <div className='committees_pool_value'>{committeePool > 0 ? (committeePool/(10**18)).toFixed(8) : 0} ETH</div>
                    <div className='committees_become_contain_contain_parent'>
                        <div className='committees_become_contain_contain'>
                            <li style={{color: '#8a8a8a'}}>All Committees</li>
                            <li style={{color: '#CC3100'}}>{committeeNum}</li>
                        </div>
                        <div className='committees_become_contain_contain' style={{marginRight: '5px'}}>
                            <li style={{color: '#8a8a8a'}}>Committees Limited</li>
                            <li >100</li>
                        </div>
                    </div>
                </div>
            </div>
            <div className='committees_tab'>
                    <div className= {choose === 1 ? 'committees_tab_active' : 'committees_tab_normal'} onClick={()=>clickPool(1)}>
                        <div className='committees_tab_item'>Current Committee</div>
                    </div>
                    <div className= {choose === 2 ? 'committees_tab_active' : 'committees_tab_normal'} onClick={()=>clickPool(2)}>
                        <div className='committees_tab_item'>Alternate Committee</div>
                    </div>
                    <div className= {choose === 3 ? 'committees_tab_active' : 'committees_tab_normal'} onClick={()=>clickPool(3)}>
                        <div className='committees_tab_item'>Committees</div>
                    </div>
            </div>
            {choose === 1 && <Current_Committee />}
            {choose === 2 && <Alternate_Committee />}
            {choose === 3 && <AllCommittees />}
            {alertBecomeCommitteeStatus === 1 && <AlertsBecomeCommittee setalertBecomeCommitteeStatus={setalertBecomeCommitteeStatus} getCommitteeInfo={getInfo}/>}
            {alertExitCommitteeStatus === 1 && <AlertsExitCommittee setalertExitCommitteeStatus={setalertExitCommitteeStatus} getCommitteeInfo={getInfo}/>}
            {alertCommitteeHistoryStatus === 1 && <AlertsCommitteeHistory setalertCommitteeHistoryStatus={setalertCommitteeHistoryStatus} margin={margin}/>}
        </div>
    )

}


const Drawing = ({getInfo}) => {

    const myContractInfo = useContext(Maincontext)
    const [alertSubmitHashStatus, setalertSubmitHashStatus] = useState(0);
    const [alertSubmitRandomStatus, setalertSubmitRandomStatus] = useState(0);
    const [difftime, setDifftime] = useState(0);
    const [currentHashrandomnum, setCurrentHashrandomnum] = useState(0);
    const [currentRandomnum, setCurrentRandomnum] = useState(0);
    const [alternateHashrandomnum, setAlternateHashrandomnum] = useState(0);
    const [alternateRandomnum, setAlternateRandomnum] = useState(0);
    const [attachHashrandom, setAttachHashrandom] = useState(0);
    const [attachRandom, setAttachRandom] = useState(0);
    const [developerHashRandom, setDeveloperHashRandom] = useState(0);
    const [developerRandom, setDeveloperRandom] = useState(0);
    const [hashrandomtime, setHashrandomtime] = useState('');
    const [randomtime, setRandomtime] = useState('');
    const [alternateRandomtime, setAlternateRandomtime] = useState('');
    const [alreadyHashSubmit, setalreadyHashSubmit] = useState(false);
    const [alreadyRandomSubmit, setalreadyRandomSubmit] = useState(false);
    const [hashsubmitEligible, sethashsubmitEligible] = useState(false);
    const [currentrandomsubmitEligible, setcurrentrandomsubmitEligible] = useState(false);
    const [alternaterandomsubmitEligible, setalternaterandomsubmitEligible] = useState(false);
    const [attachrandomsubmitEligible, setattachrandomsubmitEligible] = useState(false);
    const [developersubmitEligible, setdevelopersubmitEligible] = useState(false);
    let timer=useRef();  


    function disPlaysubmithash() {
        setalertSubmitHashStatus(1);
    }
    function disPlaysubmitrandom() {
        setalertSubmitRandomStatus(1);
    }

    const countDownHash = (_time) => {
        const nowTime = +new Date(); 
        const times = (_time*1 + myContractInfo.bet_diff + myContractInfo.commit_diff - nowTime/1000);
        if(times > 0){
            let h = parseInt(`${(times / 60 / 60) % 24}`); 
            let m = parseInt(`${(times / 60) % 60}`); 
            let s = parseInt(`${times % 60}`); 
        
            if(h < 10){
            h = `0${h}`
            }
            if(m < 10){
            m = `0${m}`
            }
            if(s < 10){
            s = `0${s}`
            }
            let times_ = h + "h : " + m + "m : " + s + "s";

            setHashrandomtime(times_);
            
            if(times < 3){
                // setIsProcess(true);
                setHashrandomtime('End');
            }
            
        }else{
        
            if(times > -3){
                setHashrandomtime('End');
            }
        }
    }

    const countDownRandom = (_time) => {
        const nowTime = +new Date(); 
        const times_current_random = (_time*1 + myContractInfo.bet_diff + myContractInfo.commit_diff * 2 - nowTime/1000);

        if(times_current_random > 0){
            let h = parseInt(`${(times_current_random / 60 / 60) % 24}`); 
            let m = parseInt(`${(times_current_random / 60) % 60}`); 
            let s = parseInt(`${times_current_random % 60}`); 
        
            if(h < 10){
            h = `0${h}`
            }
            if(m < 10){
            m = `0${m}`
            }
            if(s < 10){
            s = `0${s}`
            }
            let times_current_ = h + "h : " + m + "m : " + s + "s";

            setRandomtime(times_current_);
            
            if(times_current_random < 3){
                // setIsProcess(true);
                setRandomtime('End');
            }
            
        }else{
        
            if(times_current_random > -3){
                setRandomtime('End');
            }
        }
    }

    const countDownAlternateRandom = (_time) => {
        const nowTime = +new Date(); 
        const times_current_random = (_time*1 + myContractInfo.bet_diff + myContractInfo.commit_diff * 3 - nowTime/1000);

        if(times_current_random > 0){
            let h = parseInt(`${(times_current_random / 60 / 60) % 24}`); 
            let m = parseInt(`${(times_current_random / 60) % 60}`); 
            let s = parseInt(`${times_current_random % 60}`); 
        
            if(h < 10){
            h = `0${h}`
            }
            if(m < 10){
            m = `0${m}`
            }
            if(s < 10){
            s = `0${s}`
            }
            let times_current_ = h + "h : " + m + "m : " + s + "s";

            setAlternateRandomtime(times_current_);
            
            if(times_current_random < 3){
                // setIsProcess(true);
                setAlternateRandomtime('End');
            }
            
        }else{
        
            if(times_current_random > -3){
                setAlternateRandomtime('End');
            }
        }
    }

    function caculate(){
        
        const nowTime = +new Date(); 
        const difftimes = parseInt(`${(nowTime/1000 - myContractInfo.starttime.toString()) }`);
        setDifftime(difftimes);
        // console.log(difftimes)
        
        let _currenthashrandomnum = 0;
        let _alternatehashrandomnum = 0;
        let _currentrandomnum = 0;
        let _alternaterandomnum = 0;
        for(let i = 0; i < myContractInfo.committee.length; i++){
            if(myContractInfo.committee[i].committee.toLowerCase() == myContractInfo.address.toLowerCase()){
                if(myContractInfo.committee[i].commit_status == 2){
                    setalreadyHashSubmit(true);

                }else if(myContractInfo.committee[i].commit_status == 3){
                    setalreadyHashSubmit(true);
                    setalreadyRandomSubmit(true);
                }
                if(myContractInfo.committee[i].status === 2 || myContractInfo.committee[i].status === 3){
                    sethashsubmitEligible(true)
                }
                if(myContractInfo.committee[i].status === 2){
                    setcurrentrandomsubmitEligible(true);
                }
                if(myContractInfo.committee[i].status === 3){
                    setalternaterandomsubmitEligible(true);
                }
            }
            if(myContractInfo.committee[i].commit_status == 2 && myContractInfo.committee[i].status === 2){
                _currenthashrandomnum++;
            }
            if(myContractInfo.committee[i].commit_status == 2 && myContractInfo.committee[i].status === 3){
                _alternatehashrandomnum++;
            }
            if(myContractInfo.committee[i].commit_status == 3 && myContractInfo.committee[i].status === 2){
                _currenthashrandomnum++;
                _currentrandomnum ++;
            }
            if(myContractInfo.committee[i].commit_status == 3 && myContractInfo.committee[i].status === 3){
                _alternatehashrandomnum++;
                _alternaterandomnum ++;
            }
        }
        setCurrentHashrandomnum(_currenthashrandomnum);
        setAlternateHashrandomnum(_alternatehashrandomnum);
        setCurrentRandomnum(_currentrandomnum);
        setAlternateRandomnum(_alternaterandomnum);
        if(myContractInfo.attachUpdateBlockHash){
            setAttachHashrandom(1);
            
            if(myContractInfo.attach.toLowerCase() == myContractInfo.address.toLowerCase()){
                setalreadyHashSubmit(true);
                setattachrandomsubmitEligible(true);
            }
        }      
        if(myContractInfo.attachRandom){
            setAttachRandom(1);
            if(myContractInfo.attach.toLowerCase() == myContractInfo.address.toLowerCase()){
                setalreadyRandomSubmit(true);
            }
        }          
       
        if(myContractInfo.developerUpdateBlockHash){
            setDeveloperHashRandom(1);
        }
        if(myContractInfo.developerRandom){
            setDeveloperRandom(1);
        }
        if(myContractInfo.attach.toLowerCase() == myContractInfo.address.toLowerCase()){
            sethashsubmitEligible(true);
        }
        if(myContractInfo.developer.toLowerCase() == myContractInfo.address.toLowerCase()){
            setdevelopersubmitEligible(true);
        }
        
        

    }

    useEffect ( ()=>{
        if(myContractInfo.address.length > 0 && myContractInfo.starttime > 0){
            caculate();
            if(myContractInfo.starttime){
                const nowTime = +new Date(); 
                const difftimes = parseInt(`${(nowTime/1000 - myContractInfo.starttime.toString()) }`);
                if(difftimes > myContractInfo.bet_diff ){
                    if(difftimes < myContractInfo.bet_diff + myContractInfo.commit_diff){
                        timer.current = setInterval(()=>{
                            countDownHash(myContractInfo.starttime.toString());
                        }, 1000);

                    }else{
                        setHashrandomtime('End');
                        
                    }

                    if((difftimes > myContractInfo.bet_diff + myContractInfo.commit_diff) && (difftimes < myContractInfo.bet_diff + myContractInfo.commit_diff*2)){
                        timer.current = setInterval(()=>{
                            countDownRandom(myContractInfo.starttime.toString());
                        }, 1000);

                    }else{
                        setRandomtime('End');
                        
                    }

                    if((difftimes > myContractInfo.bet_diff + myContractInfo.commit_diff*2) && (difftimes < myContractInfo.bet_diff + myContractInfo.commit_diff*3)){
                        timer.current = setInterval(()=>{
                            countDownAlternateRandom(myContractInfo.starttime.toString());
                        }, 1000);

                    }else{
                        setAlternateRandomtime('End');
                        
                    }
                    
    
                }else{
                    setHashrandomtime('Not Start Yet');
                    setRandomtime('Not Start Yet');
                }
            }
        }
        return()=>{
            // console.log('leave page------------');
            clearInterval(timer.current);
        }
      }, [myContractInfo.address, alertSubmitHashStatus, alertSubmitRandomStatus]);


    return (
        <div className='draw_contain'>
            <div className='draw_title'>Draw Process</div>
            <div className='draw_item'>
                <div className='draw_item_num'>
                    <li className= {difftime < myContractInfo.bet_diff ? 'draw_item_nums_disable' : 'draw_item_nums'}>1</li>
                    <li className= {difftime < myContractInfo.bet_diff ? 'draw_item_line_disable' : 'draw_item_line'}></li>
                </div>
                <div className= {(difftime < myContractInfo.bet_diff || difftime > myContractInfo.bet_diff + myContractInfo.commit_diff) ? 'draw_item_contain_disable' : 'draw_item_contain'}>
                    <div className='draw_item_contain_title'>
                        <li className='draw_item_contain_title_name'>Hash Random Submission</li>
                        {difftime < myContractInfo.bet_diff ? <li className='draw_item_contain_title_time'>Not Start Yet</li> 
                                            : ((difftime < myContractInfo.bet_diff + myContractInfo.commit_diff && difftime > myContractInfo.bet_diff) ? <li className='draw_item_contain_title_time'>End In {hashrandomtime}</li>
                                                                                                : <li className='draw_item_contain_title_time'>End </li>)}
                    </div>
                    <div className='draw_item_contain_info'>
                        <div className='draw_item_contain_info_contain'>
                            <div className='draw_item_contain_property'>
                                <li className='draw_item_contain_property_items'>Current Committee</li>
                                <div className='draw_item_contain_property_value'>
                                    <li className={difftime < myContractInfo.bet_diff ? 'draw_item_contain_property_value_child_disable': 'draw_item_contain_property_value_child'}>{currentHashrandomnum}</li>
                                    <li className='draw_item_contain_property_value_mather'>/ 10</li>
                                </div>
                            </div>
                            <div className='draw_item_contain_property'>
                                <li className='draw_item_contain_property_items'>Alternate Committee</li>
                                <div className='draw_item_contain_property_value'>
                                    <li className={difftime < myContractInfo.bet_diff ? 'draw_item_contain_property_value_child_disable' : 'draw_item_contain_property_value_child'}>{alternateHashrandomnum} </li>
                                    <li className='draw_item_contain_property_value_mather'>/ 10</li>
                                </div>
                            </div>
                            <div className='draw_item_contain_property'>
                                <li className='draw_item_contain_property_items'>Third Party</li>
                                <div className='draw_item_contain_property_value'>
                                    <li className={difftime < myContractInfo.bet_diff ? 'draw_item_contain_property_value_child_disable' : 'draw_item_contain_property_value_child'}>{attachHashrandom}</li>
                                    <li className='draw_item_contain_property_value_mather'>/ 1</li>
                                </div>
                            </div>
                        </div>
                        {(difftime < myContractInfo.bet_diff || difftime > myContractInfo.bet_diff + myContractInfo.commit_diff || !hashsubmitEligible) ? <div className='draw_item_contain_info_submit_disable'>
                                                                                Submit Hash Random
                                                                            </div> 
                                                                            : (alreadyHashSubmit ? <div className='draw_item_contain_info_submit_disable'>
                                                                                                     Already Submit
                                                                                                    </div> 
                                                                                                 : <div className= 'draw_item_contain_info_submit' onClick={disPlaysubmithash}>
                                                                                                     Submit Hash Random
                                                                                                    </div>)}
                    </div>
                </div>
            </div>
            <div className='draw_item'>
                <div className='draw_item_num'>
                    <li className={(difftime < myContractInfo.bet_diff + myContractInfo.commit_diff) ? 'draw_item_nums_disable' : 'draw_item_nums'}>2</li>
                    <li className={(difftime < myContractInfo.bet_diff + myContractInfo.commit_diff) ? 'draw_item_line_disable' : 'draw_item_line'}></li>
                </div>
                <div className= {((difftime < myContractInfo.bet_diff + myContractInfo.commit_diff) || (difftime > myContractInfo.bet_diff + myContractInfo.commit_diff*2)) ? 'draw_item_contain_disable' : 'draw_item_contain'}>
                    <div className='draw_item_contain_title'>
                        <li className='draw_item_contain_title_name'>Random Submission</li>
                        {(difftime < myContractInfo.bet_diff + myContractInfo.commit_diff) ? <li className='draw_item_contain_title_time'>Not Start Yet</li> 
                                            : (((difftime < myContractInfo.bet_diff + myContractInfo.commit_diff*2) && (difftime > myContractInfo.bet_diff + myContractInfo.commit_diff)) ? <li className='draw_item_contain_title_time'>End In {randomtime}</li>
                                                                                                : <li className='draw_item_contain_title_time'>End </li>)}
                    </div>
                    <div className='draw_item_contain_info'>
                        <div className='draw_item_contain_info_contain'>
                            <div className='draw_item_contain_property'>
                                <li className='draw_item_contain_property_items'>Current Committee</li>
                                <div className='draw_item_contain_property_value'>
                                <li className={(difftime < myContractInfo.bet_diff + myContractInfo.commit_diff) ? 'draw_item_contain_property_value_child_disable': 'draw_item_contain_property_value_child'}>{currentRandomnum}</li>
                                    <li className='draw_item_contain_property_value_mather'>/ 10</li>
                                </div>
                            </div>
                            <div className='draw_item_contain_property'>
                                <li className='draw_item_contain_property_items'>Third Party</li>
                                <div className='draw_item_contain_property_value'>
                                <li className={(difftime < myContractInfo.bet_diff + myContractInfo.commit_diff) ? 'draw_item_contain_property_value_child_disable' : 'draw_item_contain_property_value_child'}>{attachRandom}</li>
                                    <li className='draw_item_contain_property_value_mather'>/ 1</li>
                                </div>
                            </div>
                        </div>
                        {((difftime < myContractInfo.bet_diff + myContractInfo.commit_diff) || (difftime > myContractInfo.bet_diff + myContractInfo.commit_diff*2)) ? <div className='draw_item_contain_info_submit_disable'>
                            Submit Random
                        </div> : ((currentrandomsubmitEligible || attachrandomsubmitEligible) ? (alreadyRandomSubmit ? <div className='draw_item_contain_info_submit_disable' >
                            Already Submit
                        </div>: <div className='draw_item_contain_info_submit'  onClick={disPlaysubmitrandom}>
                            Submit Random
                        </div>) : <div className='draw_item_contain_info_submit_disable'>Submit Random</div>)}
                    </div>
                </div>
            </div>
            <div className='draw_item'>
                <div className='draw_item_num'>
                    <li className={(difftime < myContractInfo.bet_diff + myContractInfo.commit_diff*2) ? 'draw_item_nums_disable' : 'draw_item_nums'}>3</li>
                    <li className={(difftime < myContractInfo.bet_diff + myContractInfo.commit_diff*2) ? 'draw_item_line_disable' : 'draw_item_line'}></li>
                </div>
                <div className= {((difftime < myContractInfo.bet_diff + myContractInfo.commit_diff*2) || (difftime > myContractInfo.bet_diff + myContractInfo.commit_diff*3)) ? 'draw_item_contain_disable' : 'draw_item_contain'}>
                    <div className='draw_item_contain_title'>
                        <li className='draw_item_contain_title_name'>Alternate Random Submission</li>
                        {(difftime < myContractInfo.bet_diff + myContractInfo.commit_diff*2) ? <li className='draw_item_contain_title_time'>Not Start Yet</li> 
                                            : (((difftime < myContractInfo.bet_diff + myContractInfo.commit_diff*3) && (difftime > myContractInfo.bet_diff + myContractInfo.commit_diff*2)) ? <li className='draw_item_contain_title_time'>End In {alternateRandomtime}</li>
                                                                                                : <li className='draw_item_contain_title_time'>End </li>)}
                    </div>
                    <div className='draw_item_contain_info'>
                        <div className='draw_item_contain_info_contain'>
                            <div className='draw_item_contain_property'>
                                <li className='draw_item_contain_property_items'>Current Committee</li>
                                <div className='draw_item_contain_property_value'>
                                <li className={(difftime < myContractInfo.bet_diff + myContractInfo.commit_diff*2) ? 'draw_item_contain_property_value_child_disable': 'draw_item_contain_property_value_child'}>{(difftime > myContractInfo.bet_diff + myContractInfo.commit_diff*2) ? currentRandomnum : 0}</li>
                                    <li className='draw_item_contain_property_value_mather'>/ 10</li>
                                </div>
                            </div>
                            <div className='draw_item_contain_property'>
                                <li className='draw_item_contain_property_items'>Alternate Committee</li>
                                <div className='draw_item_contain_property_value'>
                                <li className={(difftime < myContractInfo.bet_diff + myContractInfo.commit_diff*2) ? 'draw_item_contain_property_value_child_disable': 'draw_item_contain_property_value_child'}>{alternateRandomnum}</li>
                                    <li className='draw_item_contain_property_value_mather'>/ 10</li>
                                </div>
                            </div>
                            <div className='draw_item_contain_property'>
                                <li className='draw_item_contain_property_items'>Third Party</li>
                                <div className='draw_item_contain_property_value'>
                                <li className={(difftime < myContractInfo.bet_diff + myContractInfo.commit_diff*2) ? 'draw_item_contain_property_value_child_disable' : 'draw_item_contain_property_value_child'}>{(difftime > myContractInfo.bet_diff + myContractInfo.commit_diff*2) ? attachRandom : 0}</li>
                                    <li className='draw_item_contain_property_value_mather'>/ 1</li>
                                </div>
                            </div>
                        </div>
                        {((difftime < myContractInfo.bet_diff + myContractInfo.commit_diff*2) || (difftime > myContractInfo.bet_diff + myContractInfo.commit_diff*3) || (!alternaterandomsubmitEligible && !attachrandomsubmitEligible)) ? <div className='draw_item_contain_info_submit_disable'>
                            Submit Random
                        </div> : (alreadyRandomSubmit ? <div className='draw_item_contain_info_submit_disable' >
                            Already Submit
                        </div>: <div className='draw_item_contain_info_submit'  onClick={disPlaysubmitrandom}>
                            Submit Random
                        </div>)}
                    </div>
                </div>
            </div>
            <div className='draw_item'>
                <div className='draw_item_num'>
                    <li className={(difftime < myContractInfo.bet_diff + myContractInfo.commit_diff*3) ? 'draw_item_nums_disable' : 'draw_item_nums'}>4</li>
                    <li className={(difftime < myContractInfo.bet_diff + myContractInfo.commit_diff*3) ? 'draw_item_line_disable' : 'draw_item_line'}></li>
                </div>
                <div className= {((difftime < myContractInfo.bet_diff + myContractInfo.commit_diff * 3)) ? 'draw_item_contain_disable' : 'draw_item_contain'}>
                    <div className='draw_item_contain_title'>
                        <li className='draw_item_contain_title_name'>Developer Random Submission</li>
                        {(difftime < myContractInfo.bet_diff + myContractInfo.commit_diff*3) ? <li className='draw_item_contain_title_time'>Not Start Yet</li> 
                                            : <li className='draw_item_contain_title_time'>Start</li>}
                    </div>
                    <div className='draw_item_contain_info'>
                        <div className='draw_item_contain_info_contain'>
                            <div className='draw_item_contain_property'>
                                <li className='draw_item_contain_property_items'>Hash Random Submission</li>
                                <div className='draw_item_contain_property_value'>
                                <li className={(difftime < myContractInfo.bet_diff + myContractInfo.commit_diff*3) ? 'draw_item_contain_property_value_child_disable': 'draw_item_contain_property_value_child'}>{developerHashRandom}</li>
                                    <li className='draw_item_contain_property_value_mather'>/ 1</li>
                                </div>
                            </div>
                            <div className='draw_item_contain_property'>
                                <li className='draw_item_contain_property_items'>Random Submission</li>
                                <div className='draw_item_contain_property_value'>
                                <li className={(difftime < myContractInfo.bet_diff + myContractInfo.commit_diff*3) ? 'draw_item_contain_property_value_child_disable': 'draw_item_contain_property_value_child'}>{developerRandom}</li>
                                    <li className='draw_item_contain_property_value_mather'>/ 1</li>
                                </div>
                            </div>
                        </div>
                        {(difftime < myContractInfo.bet_diff + myContractInfo.commit_diff*3 || !developersubmitEligible) ? <div className='draw_item_contain_info_submit_disable'>
                            Submit Random
                        </div>: (developerHashRandom === 1 ? <div className='draw_item_contain_info_submit' onClick={disPlaysubmitrandom}>
                                                                    Submit Random
                                                              </div>
                                                            : <div className='draw_item_contain_info_submit' onClick={disPlaysubmithash}>
                                                                    Submit Hash Random
                                                              </div>)}
                    </div>
                </div>
            </div>
            <div className='draw_item_success'>
                <div className='draw_success'>
                       <img src={success_img}/>
                </div>
                <div className='draw_success_name'>
                     Completed!
                </div>
            </div>
            {alertSubmitHashStatus === 1 && <AlertsSubmitHash setalertSubmitHashStatus={setalertSubmitHashStatus} setalreadyHashSubmit={setalreadyHashSubmit} getInfo={getInfo}/>}
            {alertSubmitRandomStatus === 1 && <AlertsSubmitRandom setalertSubmitRandomStatus={setalertSubmitRandomStatus} getInfo={getInfo} setalreadyRandomSubmit={setalreadyRandomSubmit}/>}
        </div>
    )

}

const Committee = ({getInfo}) => {

    const myContractInfo = useContext(Maincontext);

    const [choose, setChoose] = useState(1);

    function clickTab(data){
        setChoose(data);
    }

    return (
        <div className='committee_page'>
            <div className='committee_contain'>
                <div className='committee_tab'>
                    <div className= {choose === 1 ? 'committee_tab_active' : 'committee_tab_normal'} onClick={()=>clickTab(1)}>
                        <div className='committee_tab_draw_name'>Drawing</div>
                    </div>
                    <div className= {choose === 2 ? 'committee_tab_active' : 'committee_tab_normal'} onClick={()=>clickTab(2)}>
                        <div className='committee_tab_committee_name'>Committee</div>
                    </div>
                    <div className='committee_tab_epoch'>Current Epoch
                        <li>{myContractInfo.epoch.toString()}</li>
                    </div>
                </div>
                {choose === 1 && <Drawing getInfo={getInfo}/>}
                {choose === 2 && <Committees getInfo={getInfo}/>}
            </div>
        </div>
        
    )

}

export default Committee
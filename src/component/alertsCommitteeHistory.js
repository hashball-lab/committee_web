import React, { useEffect, useState, useRef, useContext} from 'react'
import '../styles/alerts_play.css'
import '../styles/alerts_community_history.css'
import close_img from '../icons/close.svg'
import axios from 'axios'
import Maincontext from './context'

const CommitteePunish = () =>{
  const myContractInfo = useContext(Maincontext);
  const committeePunishRef = useRef(); 
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [data, setData] = useState([]);

  const ParsTime=(time)=>{
    let timestamp = time
    let date = new Date(parseInt(timestamp) * 1000);
    let Year = date.getFullYear();
    let Month = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
    let Day = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate());
    let  GMT =  Month + '/' + Day + '/' +  Year;
    // console.log(GMT)  // 2022-09-07 15:56:07
    return GMT;
  }


  const getDatas = async(_pages) =>{
      
    try{
     
      // const res = await axios.get('http://localhost:3001/getmycommitteepunishrecord', {
        const res = await axios.get('https://api.hashball.xyz/getmycommitteepunishrecord', {
          params: {
            page_num: _pages,
            page_size: 10,
            address: myContractInfo.address,
          }
      })

      if(res.status == 200){
        if(res.data.paging.total%res.data.paging.page_size == 0){
          if(parseInt(res.data.paging.total/res.data.paging.page_size) > 0){
            setTotalPage(parseInt(res.data.paging.total/res.data.paging.page_size))
          }
        }else{
            setTotalPage(parseInt(res.data.paging.total/res.data.paging.page_size) + 1)
        }
        let arr = []
        for(let i = 0; i < res.data.data.length; i++){
          arr.push({id: (res.data.paging.page_num - 1)*10 + i, epoch: res.data.data[i].epoch, amount: res.data.data[i].amount, time: ParsTime(res.data.data[i].time)})
        }
        if(_pages == 1){
          setData(arr)
        }else{
          setData(data.concat(arr))
        }
        // settotalMember(res.data.paging.total);
        
       }
    }catch(e){
      console.log(e)
    }
  }

  const handleScroll = () =>{
    let res=committeePunishRef.current.scrollHeight - committeePunishRef.current.clientHeight- committeePunishRef.current.scrollTop;
    // console.log(res)
    if (res>1) {
      } else {
          // console.log('to bottom')
          if(page < totalPage){
            if(myContractInfo.address.length > 0){
              getDatas(page+1)
              setPage(page+1)
            }
          }
    }
  }

  useEffect ( ()=>{
    if(myContractInfo.address.length > 0){
        setPage(1);
        getDatas(1);
    }
    }, [myContractInfo.address]);

  return(
     <div className='alert_community_history_content' ref={committeePunishRef} onScroll={handleScroll}>
          <div className='alert_community_history_content_title'>
            <li>Date</li>
            <li>Epoch</li>
            <li>Punish</li>
          </div>
          {data.map(item => <div className='alert_community_history_content_item' key={item.id}> 
            <li>{item.time}</li>
            <li>{item.epoch}</li>
            <li>{(item.amount/(10**18)).toFixed(7)}ETH</li>
          </div> )}
          
        </div>
  )

}

const CommitteeRewards = ({settotalReward}) =>{
  const myContractInfo = useContext(Maincontext);
  const committeeRewardsRef = useRef(); 
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [data, setData] = useState([]);

  const ParsTime=(time)=>{
    let timestamp = time
    let date = new Date(parseInt(timestamp) * 1000);
    let Year = date.getFullYear();
    let Month = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
    let Day = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate());
    let  GMT =  Month + '/' + Day + '/' +  Year;
    // console.log(GMT)  // 2022-09-07 15:56:07
    return GMT;
  }

  const getDatas = async(_pages) =>{
      
    try{
     
      // const res = await axios.get('http://localhost:3001/getmycommitteeearnrecord', {
        const res = await axios.get('https://api.hashball.xyz/getmycommitteeearnrecord', {
          params: {
            page_num: _pages,
            page_size: 10,
            address: myContractInfo.address,
          }
      })

      if(res.status == 200){
        if(res.data.paging.total%res.data.paging.page_size == 0){
          if(parseInt(res.data.paging.total/res.data.paging.page_size) > 0){
            setTotalPage(parseInt(res.data.paging.total/res.data.paging.page_size))
          }
        }else{
            setTotalPage(parseInt(res.data.paging.total/res.data.paging.page_size) + 1)
        }
        let arr = []
        for(let i = 0; i < res.data.data.length; i++){
          arr.push({id: (res.data.paging.page_num - 1)*10 + i, epoch: res.data.data[i].epoch, amount: res.data.data[i].amount, time: ParsTime(res.data.data[i].time)})
        }
        if(_pages == 1){
          setData(arr)
        }else{
          setData(data.concat(arr))
        }
        settotalReward(res.data.paging.total_amount);
        
       }
    }catch(e){
      console.log(e)
    }
  }

  const handleScroll = () =>{
    let res=committeeRewardsRef.current.scrollHeight - committeeRewardsRef.current.clientHeight- committeeRewardsRef.current.scrollTop;
    // console.log(res)
    if (res>1) {
      } else {
          // console.log('to bottom')
          if(page < totalPage){
            if(myContractInfo.address.length > 0){
              getDatas(page+1)
              setPage(page+1)
            }
          }
    }
  }

  useEffect ( ()=>{
    if(myContractInfo.address.length > 0){
        setPage(1);
        getDatas(1);
    }
    }, [myContractInfo.address]);

  return(
        <div className='alert_community_history_content' ref={committeeRewardsRef} onScroll={handleScroll}>
          <div className='alert_community_history_content_title'>
            <li>Date</li>
            <li>Epoch</li>
            <li>Rewards</li>
          </div>
          {data.map(item => <div className='alert_community_history_content_item' key={item.id}> 
            <li>{item.time}</li>
            <li>{item.epoch}</li>
            <li>{(item.amount/(10**18)).toFixed(7)}ETH</li>
          </div>  )}
          
        </div>
  )

}

const AlertsCommitteeHistory = ({setalertCommitteeHistoryStatus, margin}) =>{

  const [clickItem, setclickItem] = useState(1);
  const [totalMember, settotalMember] = useState(0);
  const [totalReward, settotalReward] = useState(0);

  function closePage(){
    setalertCommitteeHistoryStatus(0);
  }

  function doClick(data){
    setclickItem(data);
  }
    
    return(
      <div className='alert_con'>
        <div className='alerts_con_hash'>  
          <div className='alert_title'>
            <div className='alert_title_title'>Committee</div>
            <img src={close_img} onClick={closePage}/>
          </div>   
          <div className='alert_community_history_title'>
            <div className='alert_community_history_title_contain'>
              <li className={clickItem === 1 ? 'alert_community_history_tab_active': 'alert_community_history_tab'} onClick={() => doClick(1)}>Committee Punish</li>
              <li className={clickItem === 2 ? 'alert_community_history_tab_active': 'alert_community_history_tab'} onClick={() => doClick(2)}>Committee Rewards</li>
            </div>
            {clickItem === 1 && <div className='alert_community_history_title_label'>Margin {margin > 0 ? (margin/(10**18)).toFixed(5) : 0}ETH</div>}
            {clickItem === 2 && <div className='alert_community_history_title_label'>Total Rewards {totalReward > 0 ? (totalReward/(10**18)).toFixed(7) : 0}ETH</div>}
          </div>
          {clickItem === 1 &&<CommitteePunish />}
          {clickItem === 2 && <CommitteeRewards settotalReward={settotalReward}/>}
        </div>
      </div>
    )
  }

  export default AlertsCommitteeHistory
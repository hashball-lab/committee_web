import React, { useEffect, useState, useContext} from 'react'
import '../styles/alertsnetwork.css'
import close_img from '../icons/close.svg'
import unichain_img from '../icons/unichain.svg'




const AlertsNetwork = ({setalertsNetworkstatus}) =>{


  function closePage(){
    setalertsNetworkstatus(0);
  }

    return(
      <div className='alert_con_network'>
        <div className='alerts_con_network'>  
          <div className='alert_title_network'>
            <div className='alert_title_title_network'>Network</div>
            <img src={close_img} onClick={closePage}/>
          </div>   
          
          <div className='alert_network'> 
              <img src={unichain_img}/>
              <li>Unichain Sepolia</li>
          </div>
          
        </div>
      </div>
    )
  }

  export default AlertsNetwork
import React, { useEffect, useState, useContext} from 'react'
import '../styles/alertsnetwork.css'
import close_img from '../icons/close.svg'
// import uniextension_img from '../icons/uniextension.svg'
import metamask_img from '../icons/metamask.svg'
import okxwallet_img from '../icons/okxwallet.svg'



const AlertsWallet = ({setalertsWalletstatus, connectAccount}) =>{


  function closePage(){
    setalertsWalletstatus(0);
  }
  function doconnectWallet(){
    connectAccount();
  }

    return(
      <div className='alert_con_network'>
        <div className='alerts_con_network'>  
          <div className='alert_title_network'>
            <div className='alert_title_title_network'>Connect a Wallet</div>
            <img src={close_img} onClick={closePage}/>
          </div>   
          
          {/* <div className='alert_wallets' onClick={doconnectWallet}>
              <img src={uniextension_img}/>
              <li>Unichain Extension</li>
          </div> */}
          <div className='alert_wallets' style={{marginTop:'50px'}} onClick={doconnectWallet}>
              <img src={metamask_img}/>
              <li>MetaMask</li>
          </div>
          <div className='alert_wallets' onClick={doconnectWallet}>
              <img src={okxwallet_img}/>
              <li>OKX Wallet</li>
          </div>
          
        </div>
      </div>
    )
  }

  export default AlertsWallet
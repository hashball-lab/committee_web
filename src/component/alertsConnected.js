import React, { useEffect, useState, useContext} from 'react'
import '../styles/alertsnetwork.css'
import close_img from '../icons/close.svg'
import copy_grey_img from '../icons/copy_grey.svg'
import copy_grey_check_img from '../icons/copy_grey_check.svg'
import disconnect_img from '../icons/Disconnect.svg'
import copy from  'copy-to-clipboard';



const AlertsConnected = ({setalertsConnectedstatus, disConnect, accounts}) =>{

  const [hascopy, sethascopy] = useState(false);


  function closePage(){
    setalertsConnectedstatus(0);
  }
  function dodisconnect(){
    disConnect();
  }
  function HandString(names){
    if(names.length >12){
      let str = names;
      // console.log(names)
      let pre = str.substr(0,6);
      let end = str.substr(str.length - 4, 4);
      return pre+'...'+ end;
    }else{
      return names;
    }

  }

  function doCopy(){
    copy(accounts);
    sethascopy(true);
  }

    return(
      <div className='alert_con_network'>
        <div className='alerts_con_network'>  
          <div className='alert_title_network'>
            <div className='alert_title_title_network'></div>
            <img src={close_img} onClick={closePage}/>
          </div>   
          
          <div className='alert_connected'>
              <li className='alert_connected_img'></li>
              <li>{HandString(accounts)}</li>
          </div>
          <div className='alert_wallets' style={{width:'50%'}} onClick={hascopy ? null : doCopy}>
              {hascopy ? <img src={copy_grey_check_img}/> : <img src={copy_grey_img} />}
              {hascopy ? <li>Copied</li> : <li>Copy Address</li>}
          </div>
          <div className='alert_wallets' onClick={dodisconnect} style={{width:'50%'}}>
              <img src={disconnect_img} style={{width:'18px', height: '18px'}}/>
              <li style={{marginLeft:'30px'}}>Disconnect</li>
          </div>
          
        </div>
      </div>
    )
  }

  export default AlertsConnected
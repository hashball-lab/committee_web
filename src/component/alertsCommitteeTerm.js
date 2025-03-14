import React, { useEffect, useState} from 'react'
import '../styles/alerts_committee_term.css'
import '../styles/alerts_play.css'
import close_img from '../icons/close.svg'
import unselect_img from '../icons/unselect.svg'
import select_img from '../icons/select.svg'



const AlertsCommitteeTerm = ({setalertCommitteeTermStatus, setReadclicks}) =>{

  const [readclicksterm, setReadclicksterm] = useState(false);

  function closePage(){
    setalertCommitteeTermStatus(0);
  }

  function clickRead(){
    setReadclicksterm(!readclicksterm);
  }
  function doNext(){
    setReadclicks(true);
    setalertCommitteeTermStatus(0);
  }
    
    return(
      <div className='alert_con'>
        <div className='alerts_con_hash'>  
          <div className='alert_title'>
            <div className='alert_title_title'>Become Committee Member</div>
            <img src={close_img} onClick={closePage}/>
          </div>   
          <div className='alert_committee_term_title'>About Committee Rewards and Penalty Term</div>
          <div className='alert_committee_term'>
           
            <div className='alert_committee_term_tip'>
            <li>1. Anyone who pledges a certain amount of ETH as a deposit can become a Committee Member. The system will select 10 members in turn to be included in the Current Committee list and the Alternate Committee list separately.</li>
            <li>2. Committee Members need to submit Hash random and Random according to the drawing processis when they are selected into the Current Committee list. After that they can share the Committee Rewards equally after the current Epoch drawing. The Committee Rewards for each Epoch accounts for 2% of the total sales amounts of Hash Ball play in current epoch.The rewards will be directly distributed to the Committee Members addresses after the drawing.</li>
            <li>3. Regarding the penalty, if the Current Committee Member does not complete the submission of Hash Random and Random according to the drawing process, 10% of the initial total deposit will be deducted.</li>
            <li>4. Regarding exiting the Committee, the Committee Member is allowed to exit the Committee by withdrawing the deposit when the member is not in the Current Committee list and the Current Alternate Committee list.</li>

            </div>
            
          </div>
          
          <div className='alert_stake_read_term' onClick={clickRead}>
            <img src={readclicksterm ? select_img: unselect_img} />
            <li>I have read, understood, and agreed to Hashball Committee Rewards and Penalty Terms.</li>
          </div>
          {readclicksterm ? <div onClick={doNext} className='alert_ball_button' style={{ background: '#CC3100' }}>
            Next
          </div>: <div className='alert_ball_button' style={{ background: '#CCCCCC' }} >
            Next
          </div>}
          
        </div>
      </div>
    )
  }

  export default AlertsCommitteeTerm
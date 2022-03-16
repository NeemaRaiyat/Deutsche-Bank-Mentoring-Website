import React, { useState } from 'react'
import ProfieImg  from './../images/ProfileIcon.jpg'
import  LogOutImg  from './../images/LogOutIcon.png'
import  FeedbackImg  from './../images/megaphone.png'
import Popup from './Popup'
import './../css/header.css'

/**
 * This is the header component for the home page.
 * @param {Trigger} setMyProfile Trigger that corresponds to opening the user's profile popup
 * @returns JSX
 */
const Header = ( {setMyProfile} ) => {
  const [devFeedbackTrigger, setDevFeedbackTrigger] = useState(false)
  const [logoutTrigger, setLogoutTrigger] = useState(false)
   
  return (
    <>
    {<Popup trigger={logoutTrigger} entryType={'LogOut'} setPopupTrigger={setLogoutTrigger}/>}

    {<Popup trigger={devFeedbackTrigger} entryType={'DevFeedback'} setPopupTrigger={setDevFeedbackTrigger}/>}

    
    <div className="header">
      <div className=' headerLeft'>
        <a className="logo">MENTO</a>
        <img className='feedbackImg' src={FeedbackImg} alt="Give Feedback" onClick={() => setDevFeedbackTrigger(true)} />
      </div>
      <div className='headerRight'> 
        <img className='profileImg' src={ProfieImg} alt="Go To Profile" onClick={() => setMyProfile(true)} />
        <img className='logOutImg' src={LogOutImg} alt="Go To LogOut" onClick={() => setLogoutTrigger(true)}/> 
      </div>
    </div>  
    </>
  )
}

export default Header

import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Pfp from './../images/Pfp.jpg'
import UserPfp from './../images/UserPfp.jpg'
import Popup from './Popup';

import { CgClose } from 'react-icons/cg'
import { FiEdit3 } from 'react-icons/fi'

/**
 * This is the profile popup component that appears when clicking on a particular user entry
 * @param {Object} user The user object storing relevant user details
 * @param {Boolean} isCurrentUser Boolean determining if the the profile poppiping up should be the current user's profile
 * @param {Object[]} userFeedback List of feedback object for the user
 * @param {Trigger} setMyProfile Popup trigger for the profile
 * @param {Boolean} isSuggestedMentor Determines if profile is a suggestedMentor (and not the user's own profile or an already assigned mentor)
 * @returns JSX
 */
const Profile = ( {user, isCurrentUser, userFeedback, setMyProfile, isSuggestedMentor, about, setAbout} ) => {

  const [popupTrigger, setPopupTrigger] = useState(false)

  const [editProfileTrigger, setEditProfileTrigger] = useState(false)

  return (
    <>
      {
        isCurrentUser ? (
          <>
            <Popup trigger={popupTrigger} entry={{user, userFeedback}} entryType={'ViewFeedback'} setPopupTrigger={setPopupTrigger} />
            <Popup trigger={editProfileTrigger} entry={{user, setAbout}} entryType={'EditProfile'} setPopupTrigger={setEditProfileTrigger} userAbout={user.bio} />
          </>
        )
        :
        (
          <Popup trigger={popupTrigger} entry={user} entryType={'GiveFeedback'} setPopupTrigger={setPopupTrigger}/>
        )
      }
      <div className="profile-container">
      <div className="profile-close-btn" style={{position: 'relative'}} onClick={() => setMyProfile(false)}><CgClose /></div>
        <div className="profile-box">          
          {
            isCurrentUser ? (
              <img className="profile-pfp" src={UserPfp} alt="Profile Picture"/>
            )
            :
            (
              <img className="profile-pfp" src={Pfp} alt="Profile Picture"/>
            )
          }

          <div className="profile-username" style={{color: 'white'}}>{user.name}</div>
          <span className="profile-email" style={{color: 'white'}}>{user.email}</span>
          <div className="profile-workarea" style={{color: 'white'}}>{user.workArea}</div>
          
          {
            isCurrentUser ? (
              <button type="button" className="profile-btn ViewFeedback" onClick={() => setPopupTrigger(true)}>View My Feedback</button>
            )
            :
            (
              !isSuggestedMentor ? (
                <button type="button" className="profile-btn GiveFeedback" onClick={() => setPopupTrigger(true)}>Give Feedback</button>
              )
              :
              (
                // ------------------------------ //
                // --- IMPLEMENT UPDATE QUERY --- //
                // ------------------------------ //
                // IMPLEMENT onClick TO SEND BACK-END QUERY THAT ASSIGNS THE USER THIS NEW MENTOR (at the moment it just closes the popup)
                <button type="button" className="profile-btn ViewFeedback" onClick={() => setMyProfile(false)}>Select Mentor</button>
              )
            )
          }

          <div className="profile-bottom"> 
            <div className="profile-skills">
              About&nbsp;&nbsp;&nbsp;
              {
                isCurrentUser ? (
                  <button type="button" className="edit-profile" onClick={() => setEditProfileTrigger(true)}><FiEdit3 /></button>
                )
                :
                (
                  ''
                )
              }
            </div>
            <div className="profile-bio">"{
              isCurrentUser ? (
                about
              )
              :
              (
                user.bio
              )
            }"
            </div>

            <div className= "profile-details">
              <div className="profile-skills">Skills </div>
              {
                user.skills.map((skill) => (
                  (skill != user.skills[user.skills.length - 1]) ? skill + ', ' : skill
                ))
              }
              <br />
              <div className="profile-interests">Personal Interests </div>
              {
                user.personalInterests.map((interest) => (
                  (interest != user.personalInterests[user.personalInterests.length - 1]) ? interest + ', ' : interest
                ))
              }
              <br />
              <div className="profile-interests">Looking to Learn </div>
              {
                user.skillsToLearn.map((skill) => (
                  (skill != user.skillsToLearn[user.skillsToLearn.length - 1]) ? skill + ', ' : skill
                ))
              }

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

Profile.propTypes = {
  user: PropTypes.object,
  isCurrentUser: PropTypes.bool,
  userFeedback: PropTypes.array
}

export default Profile
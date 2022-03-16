import React, { useState } from 'react'
import Popup from './Popup'
import Entry from './Entry'
import PropTypes from 'prop-types'
import { BiTask, BiTaskX } from 'react-icons/bi'

/**
 * This is the component for the "Your Mentees' Goals" panel on the home page
 * @param {Object[]} menteesGoals A list of the goals that belong to the mentees of the user
 * @param {Object[]} myMentees A list of the users' mentees
 * @returns JSX
 */
const YourMenteesGoals = ( { menteesGoals, myMentees } ) => {

  // Toggalable button to view completed mentee goals
  const [completedTrigger, setCompletedTrigger] = useState(false)           // Toggles incomplete/complete goals
  const [addMenteeGoalTrigger, setAddMenteeGoalTrigger] = useState(false)   // Popup form trigger when add button is clicked

  const incompleteMenteeGoals = []
  const completeMenteeGoals = []

  for (var i = 0; i < menteesGoals.length; i++) {
    if (!menteesGoals[i].isComplete) {
      incompleteMenteeGoals.push(<Entry key={menteesGoals[i].id + menteesGoals[i].goalName} entry={menteesGoals[i]} entryType={'MenteeGoal'}/>)
    }
    else {
      completeMenteeGoals.push(<Entry key={menteesGoals[i].id + menteesGoals[i].goalName} entry={menteesGoals[i]} entryType={'MenteeGoal'}/>)
    }
  }

  const [addedMenteeGoals, setAddedMenteeGoals] = useState(incompleteMenteeGoals)

  const addMenteeGoal = (menteeName, title, desc, deadline) => {
    const newMenteeGoal = {
      id: Math.floor(Math.random() * 10000) + 50,
      menteeName: menteeName,
      goalName: title,
      additionalNotes: desc,
      deadline: deadline.toLocaleDateString(),
      isComplete: false
    }
    const newMenteeGoalEntry = <Entry key={newMenteeGoal.id + newMenteeGoal.goalName} entry={newMenteeGoal} entryType={'MenteeGoal'}/>
    setAddedMenteeGoals([newMenteeGoalEntry, ...addedMenteeGoals])
    
    // Sort by date? Cant rly do atm with Example Data

    // -------- INSERT BACK-END UPDATE QUERY HERE TO ADD MENTEE GOAL -------- //
    // ------------------------------ //
    // --- IMPLEMENT UPDATE QUERY --- //
    // ------------------------------ //
  }

  return (
    <>
      <div className="card" >
        <Popup trigger={addMenteeGoalTrigger} entry={{myMentees, addMenteeGoal}} entryType={'AddMenteeGoalForm'} setPopupTrigger={setAddMenteeGoalTrigger} />
        <span className="card-header">
          <span>Your Mentees' Goals</span>
          <button className='add-btn' onClick={() => setAddMenteeGoalTrigger(true)}>+</button>
        </span>
        <span className="card-content" id="YourMenteesGoals"> {
            !completedTrigger ? (
              addedMenteeGoals.length > 0 ? (
                addedMenteeGoals
              )
              :
              <p className="empty-contents">Your Mentees have no goals</p>  
            )
            :
            (
              completeMenteeGoals.length > 0 ? (
                completeMenteeGoals
              )
              :
              <p className="empty-contents">Your Mentees have no completed goals</p>       
            ) 
          } 
        </span>
        <div className="card-footer"> {
            !completedTrigger ? (
              <button className="btn" onClick={() => setCompletedTrigger(true)}>View Completed Goals&nbsp;<BiTask /></button> 
            )
            : 
            (
              <button className="btn" onClick={() => setCompletedTrigger(false)}>View Incomplete Goals&nbsp;<BiTaskX /></button> 
            )
          }
        </div>
      </div>
    </>
  )
}

YourMenteesGoals.propTypes = {
  menteesGoals: PropTypes.array,
  myMentees: PropTypes.array
}

export default YourMenteesGoals

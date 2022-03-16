import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { BiTask, BiTaskX } from 'react-icons/bi'
import Popup from './Popup'
import Entry from './Entry'

/**
 * This is the component for the 'Your Goals' panel on the home page
 * @param {Object[]} yourGoals A list of the user's goals
 * @returns JSX
 */
const YourGoals = ( {yourGoals} ) => {

  const [completedTrigger, setCompletedTrigger] = useState(false)
  const [addGoalTrigger, setAddGoalTrigger] = useState(false)

  const yourIncompleteGoals = []
  const yourCompleteGoals = []

  const completeGoal = (entry) => {
    setAddedIncompleteGoals(addedIncompleteGoals.filter((goal) => goal.id !== entry.id))
    entry.isComplete = true
    setAddedCompleteGoals([entry, ...addedCompleteGoals])

    // ------------------------------ //
    // --- IMPLEMENT UPDATE QUERY --- //
    // ------------------------------ //
    // --------- INSERT BACK-END UPDATE TO COMPLETE THE GOAL HERE --------- //
    // entry is the goal
  }

  for (var i = 0; i < yourGoals.length; i++) {
    if (!yourGoals[i].isComplete) {
      yourIncompleteGoals.push(yourGoals[i])
    }
    else {
      yourCompleteGoals.push(yourGoals[i])
    }
  }

  const [addedIncompleteGoals, setAddedIncompleteGoals] = useState(yourIncompleteGoals)
  const [addedCompleteGoals, setAddedCompleteGoals] = useState(yourCompleteGoals)  

  const addGoal = (title, desc, deadline) => {
    const newGoal = {
      id: Math.floor(Math.random() * 10000) + 50,     // THIS SHOULD BE OBTAINED BY THE DATABASE??? Otherwise dont use it in the update query
      goalName: title,
      additionalNotes: desc,
      deadline: deadline.toLocaleDateString(),
      isComplete: false
    }
    setAddedIncompleteGoals([newGoal, ...addedIncompleteGoals])

    // ------------------------------ //
    // --- IMPLEMENT UPDATE QUERY --- //
    // ------------------------------ //
    // -------- INSERT BACK-END UPDATE QUERY HERE TO ADD GOAL -------- //
  }

  return (
    <>
      <div className="card">
        <Popup trigger={addGoalTrigger} entry={{addGoal}} entryType={'AddGoalForm'} setPopupTrigger={setAddGoalTrigger} />
        <span className="card-header">
          <span>Your Goals</span>
          <button className='add-btn' onClick={() => setAddGoalTrigger(true)}>+</button>
        </span>
        <span className="card-content" id="YourGoals"> {
          !completedTrigger ? (
            addedIncompleteGoals.length > 0 ? (
              addedIncompleteGoals.map((goal) => (
                <Entry key={goal.id + goal.goalName} entry={goal} completeGoal={completeGoal} entryType={'YourGoal'} />
              ))
            )
            :
            <p className="empty-contents" style={{paddingTop: '25%'}}>You have no goals</p>  
          )
          :
          (
            addedCompleteGoals.length > 0 ? (
              addedCompleteGoals.map((goal) => (
                <Entry key={goal.id + goal.goalName} entry={goal} completeGoal={completeGoal} entryType={'YourGoal'} />
              ))
            )
            :
            <p className="empty-contents" style={{paddingTop: '25%'}}>You have no completed goals</p>       
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

YourGoals.propTypes = {
  yourGoals: PropTypes.array
}

export default YourGoals
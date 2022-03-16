import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Entry from './Entry'
import Popup from './Popup'

/**
 * This is the component for the 'Suggestions' panel on the home page
 * @param {Object} data This object contains the lists: workshops, groupSessions, suggestedMentors, myMentors, myMentees
 * @returns JSX
 */
const Suggestions = ( { data } ) => {

  const [popupTrigger, setPopupTrigger] = useState(false)

  // Basic shuffling algorithm ------ REMOVE IF NECESSARY
  const shuffle = (array) => {
    let currentIndex = array.length
    let randomIndex
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex--
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
    }
    return array
  }

  const allEntries = []

  for (var i = 0; i < data.workshops.length; i++) {
    allEntries.push(<Entry key={data.workshops[i].id} entry={data.workshops[i]} entryType={'Workshop'} />)
  }
  for (var i = 0; i < data.groupSessions.length; i++) {
    allEntries.push(<Entry key={data.groupSessions[i].id} entry={data.groupSessions[i]} entryType={'GroupSession'} />)
  }
  for (var i = 0; i < data.suggestedMentors.length; i++) {
    allEntries.push(<Entry key={data.suggestedMentors[i].id} entry={data.suggestedMentors[i]} entryType={'SuggestedMentor'} />)
  }

  const myMentors = data.myMentors
  const myMentees = data.myMentees

  shuffle(allEntries);

  return (
    <>
      <div className="card">
        <Popup trigger={popupTrigger} entry={{myMentors, myMentees}} entryType={'myMents'} setPopupTrigger={setPopupTrigger}/>
        <span className="card-header">
          <span>Suggested Mentors / Events</span>
        </span>
        <span className="card-content" id="Suggestions"> {
            allEntries.length > 0 ? (
              allEntries
            )
            :
            <p className="empty-contents">You have no Suggestions</p>  
          } 
        </span>
        <div className="card-footer"> 
            <button className="btn" onClick={() => setPopupTrigger(true)}>View My Mentors/Mentees</button> 
        </div>     
      </div>
    </>
  )
}

Suggestions.propTypes = {
  data: PropTypes.object
}

export default Suggestions
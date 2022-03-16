import React, { useState, useEffect } from 'react'
import Popup from './Popup'
import Entry from './Entry'
import PropTypes from 'prop-types'

// import { getPreviousMeetings, getUpcomingMeetings } from '../api/client'

/**
 * This is the component for the 'Your Events' panel on the home page
 * @param {Object[]} myEvents A list of events that the user is attending/registered for
 * @returns JSX
 */
const YourEvents = ( { myEvents } ) => {

  const [viewPreviousTrigger, setViewPreviousTrigger] = useState(false)
  const [addEventTrigger, setAddEventTrigger] = useState(false)

  const [previous, setPrevious] = useState([])
  const [upcoming, setUpcoming] = useState([])

  // The criteria to decide whether a meeting is a previous meeting or upcoming should be changed
  // Here it is just a property of the meeting object, when in reality the meeting time should be compared
  // with the current time

  // TODO: Change comparison so that meeting time is compared with the current time

  const previousEvents = []     // THESE HAVE BEEN RENAMED
  const upcomingEvents = []     // THESE HAVE BEEN RENAMED

  for (var i = 0; i < myEvents.length; i++) {
    if (myEvents[i].isUpcoming) {     // <---- This should be changes
      upcomingEvents.push(myEvents[i])
    }
    else {
      previousEvents.push(myEvents[i])
    }
  }

  const [addedEvents, setAddedEvents] = useState(upcomingEvents)

  const cancelEvent = (event) => {
    if (event.type !== 'Meeting') {
      event.isRegistered = false
    }
    setAddedEvents(addedEvents.filter((e) => e.id !== event.id))

    // ------------------------------ //
    // --- IMPLEMENT UPDATE QUERY --- //
    // ------------------------------ //
    // --------- INSERT BACK-END QUERY TO DE-REGISTER FROM EVENT --------- //
  }

  const addEvent = (eventType, title, participants, notes, date, time, place) => {
    
    const id = Math.floor(Math.random() * 10000) + 50

    switch (eventType) {

      case 'Meeting':
          const newMeeting = {
            id: id,
            title: title,
            additionalNotes: notes,
            participants: participants.split(","),
            date: date.toLocaleDateString(),
            time: time,
            place: place,
            isUpcoming: true,
            type: 'Meeting'
          }
          setAddedEvents([newMeeting, ...addedEvents])
          break

      case 'Workshop':
          const newWorkshop = {
            id: id,
            title: title,
            tutors: participants.split(","),
            additionalNotes: notes,
            date: date.toLocaleDateString(),
            time: time,
            place: place,
            isRegistered: true,
            type: 'Workshop'
          }
          setAddedEvents([newWorkshop, ...addedEvents])
          break

      case 'Group Session':
          const newGS = {
            id: id,
            title: title,
            additionalNotes: notes,
            date: date.toLocaleDateString(),
            time: time,
            place: place,
            isRegistered: true,
            type: 'Group Session'
          }
          setAddedEvents([newGS, ...addedEvents])
          break
    }
    // ------------------------------ //
    // --- IMPLEMENT UPDATE QUERY --- //
    // ------------------------------ //
    // -------- INSERT BACK-END UPDATE QUERY HERE TO ADD EVENT -------- //

  }

  // useEffect(() => {
  //   getpreviousEvents().then(res => {
  //     setPrevious(res.data)
  //   })
  //   getupcomingEvents().then(res => {
  //     setUpcoming(res.data)
  //   })
  // }, [])

  // previous.map(meeting => {
  //   previousEvents.push(<Entry key={meeting.id} entry={meeting} entryType={'Meeting'}/>)
  // })

  // upcoming.map(meeting => {
  //   upcomingEvents.push(<Entry key={meeting.id} entry={meeting} entryType={'Meeting'}/>)
  // })

  return (
    <>
      <div className="card" >
        <Popup trigger={addEventTrigger} entry={{addEvent}} entryType={'AddEventForm'} setPopupTrigger={setAddEventTrigger} />
        <span className="card-header">
          <span>Your Events</span>
          <button className='add-btn' onClick={() => setAddEventTrigger(true)}>+</button>
        </span>
        <span className="card-content" id="Meetings"> {
            !viewPreviousTrigger ? (
              addedEvents.length > 0 ? (
                addedEvents.map((event) => (
                  event.type === 'Meeting' ? (
                    <Entry key={event.id} entry={event} entryType={'Meeting'} cancelEvent={cancelEvent} />
                  ) 
                  :
                  (
                    event.type === 'Workshop' ? (
                      <Entry key={event.id} entry={event} entryType={'Workshop'} cancelEvent={cancelEvent} />
                    )
                    :
                    (
                      <Entry key={event.id} entry={event} entryType={'GroupSession'} cancelEvent={cancelEvent} />
                    )
                  )
                ))
              )
              :
              <p className="empty-contents">You have no upcoming events</p>  
            )
            :
            (
              previousEvents.length > 0 ? (
                previousEvents.map((event) => (
                  event.type === 'Meeting' ? (
                    <Entry key={event.id} entry={event} entryType={'Meeting'} />
                  ) 
                  :
                  (
                    event.type === 'Workshop' ? (
                      <Entry key={event.id} entry={event} entryType={'Workshop'} />
                    )
                    :
                    (
                      <Entry key={event.id} entry={event} entryType={'Group Session'} />
                    )
                  )
                ))
              )
              :
              <p className="empty-contents">You have no previous events</p>       
            ) 
          } 
        </span>
        <div className="card-footer"> {
            !viewPreviousTrigger ? (
              <button className="btn" onClick={() => setViewPreviousTrigger(true)}>View Previous Events</button> 
            )
            : 
            (
              <button className="btn" onClick={() => setViewPreviousTrigger(false)}>View Upcoming Events</button> 
            )
          }
        </div>
      </div>
    </>
  )
}

export default YourEvents

YourEvents.propTypes = {
  meetings: PropTypes.array
}
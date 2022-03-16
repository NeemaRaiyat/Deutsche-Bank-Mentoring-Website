import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Rating } from 'react-simple-star-rating'

import Pfp from './../images/Pfp.jpg'
import MeetingPic from './../images/MeetingPic.jpg'
import WorkshopImg from './../images/Workshop.png'
import GroupSessionImg from './../images/GroupSession.png'

import Popup from './Popup'

import { AiOutlineCalendar, AiOutlineAim, AiOutlineClockCircle } from 'react-icons/ai'
import { BsListTask, BsFillPeopleFill, BsFillPersonFill } from 'react-icons/bs'
import { GoLocation, GoCommentDiscussion } from 'react-icons/go'
import { GiGraduateCap } from 'react-icons/gi'
import { FaQuoteLeft, FaQuoteRight, FaUserGraduate, FaChalkboardTeacher, FaSuitcase } from 'react-icons/fa'

/**
 * This component is each entry in the panels on the home page. E.g. a particular goal, a particular meeting etc.
 * @param {Object} entry Object that stores entry details, e.g. id, name etc.
 * @param {String} entryType Type of entry, e.g. goal, meeting, workshop etc.
 * @param {Function} onClick Function that passes state data to Menteeing/Mentoring form
 * @param {Function} completeGoal Function that allows a goal to be ticked off in the 'Your Goals' panel on the home page
 * @param {Function} cancelEvent Function handles the deregistration from an event
 * @returns JSX
 */
const Entry = ( {entry, entryType, onClick, completeGoal, cancelEvent} ) => {

  const [popupTrigger, setPopupTrigger] = useState(false)
  
  switch (entryType) {

    case 'MenteeGoal':

        const goal = entry
        const isOverdue = false
        return (
          <>
            <Popup trigger={popupTrigger} entry={goal} entryType={'MenteeGoal'} setPopupTrigger={setPopupTrigger}/>
            <div className="container" onClick={() => setPopupTrigger(true)}>
              <div className="menteeGoal">
                <img className="pfp" src={Pfp} alt="Profile Picture"/>
                <div className="menteeDetails">
                  <span className="menteeName"><BsFillPersonFill /> {goal.menteeName}</span>
                  <br />
                  <span className="goalName"><AiOutlineAim /> {goal.goalName}</span>
                  <br />

                  {/* CHANGE HOW isOverdue is CALCULATED */}
                  {/* CHANGE HOW isOverdue is CALCULATED */}
                  {/* CHANGE HOW isOverdue is CALCULATED */}
                  {/* CHANGE HOW isOverdue is CALCULATED */}
                  <span className="deadline" style={{color: isOverdue ? 'red' : ''}}><AiOutlineCalendar /> Deadline: {goal.deadline}</span>
                  <br />
                </div>
              </div>
              <span className="grey-line"></span>
            </div>
          </>
        )

    case 'Meeting':

        // // DAVID SECTION
        // const meeting = entry
        // const datetime = new Date(meeting.date)
        // const date = datetime.toLocaleDateString()
        // const time = datetime.toLocaleTimeString()

        // return (
        //   <>
        //     <Popup trigger={popupTrigger} entry={meeting} entryType={'Meeting'} setPopupTrigger={setPopupTrigger}/>
        //     <div className="container" onClick={() => setPopupTrigger(true)}>
        //       <div className="meeting">
        //         <img className="meetingPic" src={MeetingPic} alt="Meeting" align="absleft"/>
        //         <div className="meetingDetails">
        //           <span className="meetingTitle"><BsListTask /> {meeting.title}</span>
        //           <br />
        //           <span className="meetingParticipants"><BsFillPeopleFill /> {
        //               meeting.attendees.map((attendee) => (
        //                 attendee.user.first_name.charAt(0) + " " + attendee.user.last_name + ((attendee !== meeting.attendees[meeting.attendees.length - 1]) ? ", " : "")
        //               ))
        //             }
        //           </span>
        //           <br />
        //           <span className="meetingDatePlace"><AiOutlineCalendar /> {date}</span>
        //           <br />
        //           <span className="meetingDatePlace"><AiOutlineClockCircle /> {time}</span>
        //           <br />
        //           <span className="meetingDatePlace"><GoLocation /> {meeting.place}</span>
        //           <br />
        //         </div>
        //       </div>
        //       <span className="grey-line"></span>
        //     </div>
        //   </>
        // )
        const meeting = entry
        return (
          <>
            <Popup trigger={popupTrigger} entry={meeting} entryType={'Meeting'} setPopupTrigger={setPopupTrigger} cancelEvent={cancelEvent} />
            <div className="container" onClick={() => setPopupTrigger(true)}>
              <div className="meeting">
                <img className="meetingPic" src={MeetingPic} alt="Meeting" align="absleft"/>
                <div className="meetingDetails">
                  <span className="suggestionTitle">MEETING</span>
                  <br />
                  <span className="meetingTitle"><BsListTask /> {meeting.title}</span>
                  <br />
                  <span className="meetingParticipants"><BsFillPeopleFill /> {
                      meeting.participants.map((participant) => (
                        (participant != meeting.participants[meeting.participants.length - 1]) ? participant + ', ' : participant
                      ))
                    }
                  </span>
                  <br />
                  <span className="meetingDatePlace"><AiOutlineCalendar /> {meeting.date}</span>
                  <br />
                  <span className="meetingDatePlace"><AiOutlineClockCircle /> {meeting.time}</span>
                  <br />
                  <span className="meetingDatePlace"><GoLocation /> {meeting.place}</span>
                  <br />
                </div>
              </div>
              <span className="grey-line"></span>
            </div>
          </>
        )
    
    case 'YourGoal':
        
        const yourGoal = entry
        const isYourGoalOverdue = false
        return (
          <>
            <div className="your-goal-container">
              <div className="menteeGoal">
                {
                  yourGoal.isComplete ? (
                    <button className="completed-btn">&nbsp;&nbsp;&nbsp;</button>
                  )
                  :
                  (
                    <button className="complete-btn" onClick={() => completeGoal(entry)}>&nbsp;&nbsp;&nbsp;</button>
                  )
                }
                <div className="menteeDetails">
                  <span className="menteeName"><AiOutlineAim /> {yourGoal.goalName}</span>
                  <br />
                  <span className="goalName"><BsListTask /> {yourGoal.additionalNotes}</span>
                  <br />
                  {/* CHANGE HOW isYourGoalOverdue is CALCULATED */}
                  {/* CHANGE HOW isYourGoalOverdue is CALCULATED */}
                  {/* CHANGE HOW isYourGoalOverdue is CALCULATED */}
                  {/* CHANGE HOW isYourGoalOverdue is CALCULATED */}
                  <span className="deadline" style={{color: isYourGoalOverdue ? 'red' : ''}}><AiOutlineCalendar /> Deadline: {yourGoal.deadline}</span>
                  <br />
                </div>
              </div>
              <span className="grey-line"></span>
            </div>
          </>
        )   
    
    case 'Feedback':

        const feedback = entry
        return (
          <>
            <div className="containerNoHover" style={{color: '#333'}}>
              <div className="menteeGoal">
                <img className="pfp" src={Pfp} alt="Profile Picture"/>
                <div className="menteeDetails">

                  <span className="menteeName"><FaUserGraduate /> {feedback.from} </span>
                  <br />
                  <span className="goalName"><GiGraduateCap /> {feedback.skill}</span>
                  <br />
                  <div className="deadline" style={{marginTop: '3px', marginBottom: '-12px'}}><FaQuoteLeft style={{fontSize: '12px'}}/> {feedback.feedback} <FaQuoteRight style={{fontSize: '12px'}}/></div>
                  <br />
                  <span style={{marginLeft: 'auto', marginRight: 'auto', width: '50%', textAlign: 'center'}}>
                      <Rating initialValue={feedback.rating} readonly size={'14px'} />
                  </span>
                  <br />
                  <span className="meetingDatePlace"><AiOutlineCalendar /> {feedback.date}</span>
                  <br />
                </div>
              </div>
              <span className="grey-line"></span>
            </div>
          </>
        )    
    case 'Skill':
      const skill = entry

      const style= {
        fontWeight:'100'
      }
      return(
        <>
        <div className="content" style={style}>
          <input 
            style={style}
            type="checkbox" 
            id={skill.id} 
            name={skill.name} 
            value={skill.name} 
            onClick={onClick}/>
              {' ' + skill.name}<br />
        </div>
        </>
      )

    case 'Workshop':

      const workshop = entry
        return (
          <>
            <Popup trigger={popupTrigger} entry={workshop} entryType={'Workshop'} setPopupTrigger={setPopupTrigger} cancelEvent={cancelEvent} />
            <div className="container" style={{width: '97.5%'}} onClick={() => setPopupTrigger(true)}>
              <div className="meeting">
                <img className="meetingPic" style={{width: '50px'}} src={WorkshopImg} alt="Workshop" align="absleft"/>
                <div className="meetingDetails">
                  <span className="suggestionTitle">WORKSHOP</span>
                  <br />
                  <span className="meetingTitle"><FaChalkboardTeacher /> {workshop.title}</span>
                  <br />
                  <span className="meetingParticipants"><BsFillPeopleFill /> {
                      workshop.tutors.map((tutor) => (
                        (tutor != workshop.tutors[workshop.tutors.length - 1]) ? tutor + ', ' : tutor
                      ))
                    }
                  </span>
                  <br />
                  <span className="meetingDatePlace"><AiOutlineCalendar /> {workshop.date}</span>
                  <br />
                  <span className="meetingDatePlace"><AiOutlineClockCircle /> {workshop.time}</span>
                  <br />
                  <span className="meetingDatePlace"><GoLocation /> {workshop.place}</span>
                  <br />
                </div>
              </div>
              <span className="grey-line"></span>
            </div>
          </>
        )
    
    case 'GroupSession':

      const groupSession = entry
        return (
          <>
            <Popup trigger={popupTrigger} entry={groupSession} entryType={'GroupSession'} setPopupTrigger={setPopupTrigger} cancelEvent={cancelEvent} />
            <div className="container" style={{width: '97.5%'}} onClick={() => setPopupTrigger(true)}>
              <div className="meeting">
                <img className="meetingPic" style={{width: '50px'}} src={GroupSessionImg} alt="Group Session" align="absleft"/>
                <div className="meetingDetails">
                  <span className="suggestionTitle">GROUP SESSION</span>
                  <br />
                  <span className="meetingParticipants"><GoCommentDiscussion /> {groupSession.title}</span>
                  <br />
                  <span className="meetingDatePlace"><AiOutlineCalendar /> {groupSession.date}</span>
                  <br />
                  <span className="meetingDatePlace"><AiOutlineClockCircle /> {groupSession.time}</span>
                  <br />
                  <span className="meetingDatePlace"><GoLocation /> {groupSession.place}</span>
                  <br />
                </div>
              </div>
              <span className="grey-line"></span>
            </div>
          </>
        )
    
    case 'SuggestedMentor':

      const suggestedMentor = entry
        return (
          <>
            <Popup trigger={popupTrigger} entry={suggestedMentor} entryType={'MentorProfile'} setPopupTrigger={setPopupTrigger}/>
            <div className="container" style={{width: '97.5%'}} onClick={() => setPopupTrigger(true)}>
              <div className="meeting">
                <img className="meetingPic" style={{width: '50px'}} src={Pfp} alt="Mentor Profile Picture" align="absleft"/>
                <div className="meetingDetails">
                  <span className="suggestionTitle">MENTOR</span>
                  <br />
                  <span className="meetingTitle"><BsFillPersonFill /> {suggestedMentor.name}</span>
                  <br />
                  <span className="meetingDatePlace"><FaSuitcase /> {suggestedMentor.workArea}</span>
                  <br />
                  <span className="meetingParticipants"><BsListTask /> {
                      suggestedMentor.skills.map((skill) => (
                        (skill != suggestedMentor.skills[suggestedMentor.skills.length - 1]) ? skill + ', ' : skill
                      ))
                    }
                  </span>
                </div>
              </div>
              <span className="grey-line"></span>
            </div>
          </>
        )

    case 'MyMent':

      const ment = entry
        return (
          <>
            <Popup trigger={popupTrigger} entry={ment} entryType={'Ment'} setPopupTrigger={setPopupTrigger}/>
            <div className="container" style={{width: '97.5%'}} onClick={() => setPopupTrigger(true)}>
              <div className="meeting">
                <img className="meetingPic" style={{width: '50px'}} src={Pfp} alt="Profile Picture" align="absleft"/>
                <div className="meetingDetails">
                  <span className="meetingTitle"><BsFillPersonFill /> {ment.name}</span>
                  <br />
                  <span className="meetingDatePlace"><FaSuitcase /> {ment.workArea}</span>
                  <br />
                  <span className="meetingParticipants"><BsListTask /> {
                      ment.skills.map((skill) => (
                        (skill != ment.skills[ment.skills.length - 1]) ? skill + ', ' : skill
                      ))
                    }
                  </span>
                </div>
              </div>
              <span className="grey-line"></span>
            </div>
          </>
        )

  }
}

Entry.propTypes = {
  entry: PropTypes.object,
  entryType: PropTypes.string,
  onClick: PropTypes.func,
  completeGoal: PropTypes.func,
  cancelEvent: PropTypes.func,
}

export default Entry
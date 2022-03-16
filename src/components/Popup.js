import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { CgClose } from 'react-icons/cg'
import DatePicker from 'react-date-picker'
import TimePicker from 'react-time-picker'
import { Rating } from 'react-simple-star-rating'
import { MdDone, MdClose } from 'react-icons/md'

import Profile from './Profile'
import Entry from './Entry'

/**
 * This is the popup component that is used when clicking on a particular entry/button
 * @param {Boolean} trigger The popup trigger that determines whether the popup is current open or not
 * @param {Object} entry The entry object
 * @param {String} entryType The type of entry object
 * @param {Trigger} setPopupTrigger Trigger used for toggling popup trigger
 * @param {Function} cancelEvent Function handles the deregistration from an event
 * @param {String} userAbout The user's biography
 * @returns JSX
 */
const Popup = ( {trigger, entry, entryType, setPopupTrigger, cancelEvent, userAbout} ) => {

  const [viewMenteesTrigger, setViewMenteesTrigger] = useState(false)

  /*Manages what user can teach*/
  const [teaching,setTeaching] = useState([])

  /*Manages what user wants to learn*/
  const [learning,setLearning] = useState([])

  // Add goal/mentee goal/meeting form information
  const [addMenteeGoalNAME, setAddMenteeGoalNAME] = useState('Select')
  const [addMenteeGoalTITLE, setAddMenteeGoalTITLE] = useState('')
  const [addMenteeGoalDESC, setAddMenteeGoalDESC] = useState('')
  const [addMenteeGoalDEADLINE, setAddMenteeGoalDEADLINE] = useState(null)
  const [addMenteeGoalERROR, setAddMenteeGoalERROR] = useState(false)

  // Add Event Form information
  const [addEventTYPE, setAddEventTYPE] = useState('Meeting')
  const [addEventTITLE, setAddEventTITLE] = useState('')
  const [addEventPARTICIPANTS, setAddEventPARTICIPANTS] = useState('')
  const [addEventADDITIONALNOTES, setAddEventADDITIONALNOTES] = useState('')
  const [addEventDATE, setAddEventDATE] = useState(null)
  const now = new Date()
  const [addEventTIME, setAddEventTIME] = useState('' + (now.getHours() % 12) + ':' + now.getMinutes())
  const [addEventPLACE, setAddEventPLACE] = useState('')

  // Add Your Goal Form information
  const [addGoalTITLE, setAddGoalTITLE] = useState('')
  const [addGoalADDITIONALNOTES, setAddGoalADDITIONALNOTES] = useState('')
  const [addGoalDEADLINE, setAddGoalDEADLINE] = useState(null)

  // Dev / Mentor / Mentee Feedback
  const [feedbackSubject, setFeedbackSubject] = useState('')
  const [feedbackText, setFeedbackText] = useState('')
  const [rating, setRating] = useState(0) // initial rating value

  const [aboutForm, setAboutForm] = useState(userAbout)
  
  const cleanUpFeedback = () => {
    setFeedbackSubject('')
    setFeedbackText('')
    setRating(0)
    setPopupTrigger(false)
  }

  if (!trigger) {return ""}

  switch (entryType) {

    case 'MenteeGoal': 

        const goal = entry
        return (
          <div className="popup-window">

            <div className="popup-title"> 
              {goal.menteeName}
              <button className="close-btn" onClick={() => {setPopupTrigger(false)}}><CgClose /></button>
            </div>  

            <div className="popup-inner">
              Goal <br /><span className='contents'>{goal.goalName}</span>
            </div> 

            <div className="popup-inner">
              Additional Notes <br /><span className='contents'>{goal.additionalNotes}</span>
            </div> 

            <div className="popup-inner">
              Deadline <br /><span className='contents'>{goal.deadline}</span>
            </div> 

            <div className="popup-inner"> Status <br />
              {
                goal.isComplete ? (
                  <span className='contents' style={{color:'green'}}>Complete <span className="react-icon"><MdDone /></span></span>
                )
                :
                (
                  <span className='contents' style={{color:'red'}}>Incomplete <span className="react-icon"><MdClose /></span></span>
                )
              }
            </div> 

            <br />  
          </div>
        )
    
    case 'Meeting': 

        // const meeting = entry
        // const datetime = new Date(meeting.date)
        // const date = datetime.toLocaleDateString()
        // const time = datetime.toLocaleTimeString()

        // return (
        //   <div className="popup-window">
          
        //     <div className="popup-title"> 
        //       {meeting.title}
        //       <button className="close-btn" onClick={() => {setPopupTrigger(false)}}><CgClose /></button>
        //     </div>  

        //     <div className="popup-inner">
        //       Participants <br /><span className='contents'>{
        //           meeting.attendees.map((attendee) => (
        //             attendee.user.first_name.charAt(0) + " " + attendee.user.last_name + ((attendee !== meeting.attendees[meeting.attendees.length - 1]) ? ", " : "")
        //           ))
        //       }</span>
        //     </div> 

        //     <div className="popup-inner">
        //       Additional Notes <br /><span className='contents'>{meeting.description}</span>
        //     </div> 

        //     <div className="popup-inner">
        //       Date <br /><span className='contents'>{date}</span>
        //     </div> 

        //     <div className="popup-inner">
        //       Time <br /><span className='contents'>{time}</span>
        //     </div> 

        //     <div className="popup-inner">
        //       Location <br /><span className='contents'>{meeting.place}</span>
        //     </div> 

        //     <div className="popup-inner">
        //       Link <br /><span className='contents  link'>
        //               <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">
        //                 {meeting.link}
        //               </a>
        //             </span>
        //     </div>   
        //     <br />  
        //   </div>
        // )
        const meeting = entry
        return (
          <div className="popup-window" style={{maxHeight: '800px'}}>
          
            <div className="popup-title"> 
              MEETING
              <button className="close-btn" onClick={() => {setPopupTrigger(false)}}><CgClose /></button>
            </div>  

            <div className="popup-inner">
              Subject <br /><span className='contents'>{meeting.title}</span>
            </div> 

            <div className="popup-inner">
              Participants <br /><span className='contents'>{
                  meeting.participants.map((participant) => (
                    (participant != meeting.participants[meeting.participants.length - 1]) ? participant + ', ' : participant
                  ))
              }</span>
            </div> 

            <div className="popup-inner">
              Additional Notes <br /><span className='contents'>{meeting.additionalNotes}</span>
            </div> 

            <div className="popup-inner">
              Date <br /><span className='contents'>{meeting.date}</span>
            </div> 

            <div className="popup-inner">
              Time <br /><span className='contents'>{meeting.time}</span>
            </div> 

            <div className="popup-inner">
              Location <br /><span className='contents'>{meeting.place}</span>
            </div> 
            <br />

            <div className="popup-footer"> 
              <button className="cancel-btn" onClick={() => cancelEvent(entry)}>Cancel Event</button> 
            </div>
          </div>
        )
    
    // Deliberately no popup for 'YourGoals' Section as there is no more information to be shown in the popup that isn't already shown. Also the hitbox of the entry can clash with checkbox

    case 'GiveFeedback':

        const user = entry

        const processUserFeedbackForm = (e) => {
          e.preventDefault()    // Stop page refresh
          console.log([feedbackSubject, feedbackText, user.name, rating / 20])
          // MAKE SURE YOU DO 'rating / 20' so it ranges from 0 - 5 stars (inclusive)
          
          // ------------------------------ //
          // --- IMPLEMENT UPDATE QUERY --- //
          // ------------------------------ //
          // IMPLEMENT BACK-END UPDATE QUERY TO SEND FEEDBACK TO A PARTICULAR USER
          // Use 'user' object to get the user details

          cleanUpFeedback()
        }

        return (
          <div className="popup-window">
            <div className="popup-title">Feedback for {user.name}
              <button className="close-btn" onClick={() => cleanUpFeedback()}><CgClose /></button>
            </div>  
            <form onSubmit={processUserFeedbackForm} className="feedback-form">   
              <div style={{marginLeft: 'auto', marginRight: 'auto', width: '50%', textAlign: 'center'}}>
                <Rating onClick={setRating} ratingValue={rating} transition size={'27px'} />
              </div>
              <div className="feedback-input-box">
                <input type="text" placeholder="What skill did you/they teach?" required autoFocus value={feedbackSubject} onChange={(e) => setFeedbackSubject(e.target.value)} />
              </div>

              <div className="feedback-textarea">
                <textarea rows="5" type="text" placeholder="Enter your feedback here..." required value={feedbackText} onChange={(e) => setFeedbackText(e.target.value)} />
              </div>

              <div className="feedback-btn">
                <input type="Submit" value="Submit Feedback" className="btn" style={{borderRadius: 6}}/>
              </div>
            </form>
 
            <br />  
          </div>
        )

    case 'ViewFeedback':

        const currentUser = entry.user
        const userFeedback = entry.userFeedback
        return (
          <>
            <div className="popup-window">
              <div className="popup-title"> 
                Your Feedback
                <button className="close-btn" onClick={() => {setPopupTrigger(false)}}><CgClose /></button>
              </div>  
              <span className="card-content" id="feedbackPopup" style={{OverflowY: 'auto', OverflowX: 'hidden'}}> {
                userFeedback.length > 0 ? (
                  userFeedback.map((feedback) => (<Entry key={feedback.id} entry={feedback} entryType={'Feedback'}/>))
                )
                :
                (
                  <p id="emptyFeedback">You have no Feedback</p> 
                )
              } 
              </span>
              <br />  
            </div>
          </>
        )

    case 'LogOut':

      const logOut = () => {
        // ------------------------------- //
        // --- IMPLEMENT LOG OUT QUERY --- //
        // ------------------------------- //
      }
      
      return (
        <>
          <div className="popup-window">

            <div className="popup-title"> 
              Are You Sure You Want To Log Out?
              <button className="close-btn" onClick={() => {setPopupTrigger(false)}}><CgClose /></button>
            </div>  
            <div className="feedback-btn">
              <input type="Submit" value="Log Out" onClick={() => logOut()} className="btn" style={{borderRadius: 6, marginTop: '20px', marginBottom: '10px'}} />
            </div>      
            <br />  
          </div>
        </>
      )
          
    case 'DevFeedback':

        const processDevFeedbackForm = (e) => {
          e.preventDefault()    // Stop page refresh
          console.log([feedbackSubject, feedbackText, rating / 20])

          // ------------------------------ //
          // --- IMPLEMENT UPDATE QUERY --- //
          // ------------------------------ //
          // IMPLEMENT BACK-END UPDATE QUERY TO SEND USER FEEDBACK TO DEVS
          cleanUpFeedback()
        }
        
        return (
          <>
            <div className="popup-window">

              <div className="popup-title"> 
                Leave Feedback for the Developers
                <button className="close-btn" onClick={() => cleanUpFeedback()}><CgClose /></button>
              </div> 
              <form onSubmit={processDevFeedbackForm} className="feedback-form">   
                <div style={{marginLeft: 'auto', marginRight: 'auto', width: '50%', textAlign: 'center'}}>
                  <Rating onClick={setRating} ratingValue={rating} transition size={'27px'} />
                </div>
                <div className="feedback-input-box">
                  <input type="text" placeholder="What is your issue about?" required autoFocus value={feedbackSubject} onChange={(e) => setFeedbackSubject(e.target.value)} />
                </div>

                <div className="feedback-textarea">
                  <textarea rows="5" type="text" placeholder="Please give further detail..." required value={feedbackText} onChange={(e) => setFeedbackText(e.target.value)} />
                </div>

                <div className="feedback-btn">
                  <input type="Submit" value="Submit Feedback" className="btn" style={{borderRadius: 6}}/>
                </div>
              </form> 
              <br />  
            </div>
          </>
        )
          
    case 'FindMentor':
      const skill = entry
      const skillList = []

      const selectLearning = (learn) => {
        if (learning.includes(learn)) {
          setLearning(learning.filter((learning) => learning != learn))
        }
        else {
          setLearning([...learning, learn])
        }
      }

      for (var i = 0; i < skill.length; i++) {
        const LearningSkill=skill[i].name
        skillList.push(<Entry key={skill[i].id} entry={skill[i]} entryType={'Skill'} onClick={()=>selectLearning(LearningSkill)}/>)
       
      }
      return(
        <>
          <div className="popup-window">
            <div className="popup-title"> Areas I want to be mentored on
              <button className="close-btn" onClick={() => {setPopupTrigger(false)}}><CgClose /></button>
            </div>
            <div className="popup-inner" style={{marginBottom: '10px'}}>
              {skillList}
            </div>
            {
            
            /* IMPLEMENT SUBMISSION BUTTON */
            
            // ------------------------------ //
            // --- IMPLEMENT UPDATE QUERY --- //
            // ------------------------------ //
            
            }
            <button className="btn" onClick={() => {setPopupTrigger(false);console.log(learning)}} style={{marginBottom: '10px', paddingLeft: '60px', paddingRight: '60px'}}>Save</button>
          </div>
        </>
        
      )

      case 'BeMentor':
        const teachingSkill = entry
        const teachingList = []
        const style= {
          fontWeight:'100'
        }

        const selectTeaching = (skill) => {
          if (teaching.includes(skill)) {
            setTeaching(teaching.filter((teaching) => teaching != skill))
          }
          else {
            setTeaching([...teaching, skill])
          }
        }

        for (var t = 0; t < teachingSkill.length; t++) {
          const skill=teachingSkill[t].name
          teachingList.push(<Entry key={teachingSkill[t].name} entry={teachingSkill[t]} entryType={'Skill'} onClick={()=> selectTeaching(skill)}/>)
         
        }
        return(
          <>
            <div className="popup-window">
              <div className="popup-title"> Areas I would like to mentor in
                <button className="close-btn" onClick={() => {setPopupTrigger(false)}} ><CgClose /></button>
              </div>
              <div className="popup-inner" style={{marginBottom: '10px'}}>
                  <input 
                  style={style}
                  type="checkbox" 
                  id={-1} 
                  name={"Not Mentor"} 
                  value={"Not Mentor"}
                  onClick={()=> selectTeaching(1)} 
                  />
                  {" I do not want to receive any additional Mentees"}<br />                
                  {teachingList}
              </div>
              {
              
              /* IMPLEMENT SUBMISSION BUTTON */
              
              // ------------------------------ //
              // --- IMPLEMENT UPDATE QUERY --- //
              // ------------------------------ //
              
              }
              <button className="btn" onClick={() => {setPopupTrigger(false);console.log(teaching)}} style={{marginBottom: '10px', paddingLeft: '60px', paddingRight: '60px'}}>Save</button>
            </div>
          </>
          
        )

      case 'Workshop':

        const workshop = entry
        return (
          <div className="popup-window">
          
            <div className="popup-title"> 
              WORKSHOP
              <button className="close-btn" onClick={() => {setPopupTrigger(false)}}><CgClose /></button>
            </div>  

            <div className="popup-inner">
            Title <br /><span className='contents'>{workshop.title}</span>
            </div> 

            <div className="popup-inner">
              Tutors <br /><span className='contents'>{
                  workshop.tutors.map((tutor) => (
                    (tutor != workshop.tutors[workshop.tutors.length - 1]) ? tutor + ', ' : tutor
                  ))
              }</span>
            </div> 

            <div className="popup-inner">
              Additional Notes <br /><span className='contents'>{workshop.additionalNotes}</span>
            </div> 

            <div className="popup-inner">
              Date <br /><span className='contents'>{workshop.date}</span>
            </div> 

            <div className="popup-inner">
              Time <br /><span className='contents'>{workshop.time}</span>
            </div> 

            <div className="popup-inner">
              Location <br /><span className='contents'>{workshop.place}</span>
            </div> 

            <br />  
            {
              workshop.isRegistered ? (
                <div className="popup-footer"> 
                  <button className="cancel-btn" onClick={() => cancelEvent(entry)}>Cancel Event</button> 
                </div>
              )
              :
              (
                <div className="popup-footer"> 
                  <button className="btn" onClick={() => setPopupTrigger(false)}>Attend Event</button> 
                </div>
              )
            }
          </div>
        )

      case 'GroupSession':

        const groupSession = entry
        return (
          <div className="popup-window">
          
            <div className="popup-title"> 
              GROUP SESSION
              <button className="close-btn" onClick={() => {setPopupTrigger(false)}}><CgClose /></button>
            </div>  

            <div className="popup-inner">
            Topic of Discussion <br /><span className='contents'>{groupSession.title}</span>
            </div> 

            <div className="popup-inner">
              Additional Notes <br /><span className='contents'>{groupSession.additionalNotes}</span>
            </div> 

            <div className="popup-inner">
              Date <br /><span className='contents'>{groupSession.date}</span>
            </div> 

            <div className="popup-inner">
              Time <br /><span className='contents'>{groupSession.time}</span>
            </div> 

            <div className="popup-inner">
              Location <br /><span className='contents'>{groupSession.place}</span>
            </div> 
            <br />  
            {
              groupSession.isRegistered ? (
                <div className="popup-footer"> 
                  <button className="cancel-btn" onClick={() => cancelEvent(entry)}>Cancel Event</button> 
                </div>
              )
              :
              (
                <div className="popup-footer"> 
                  <button className="btn" onClick={() => {setPopupTrigger(false)}}>Attend Event</button> 
                </div>
              )
            }
          </div>
        )

      case 'MentorProfile':
        
        return (<Profile user={entry} isCurrentUser={false} setMyProfile={setPopupTrigger} isSuggestedMentor={true} />)

      case 'Ment':
      
        return (<Profile user={entry} isCurrentUser={false} setMyProfile={setPopupTrigger} isSuggestedMentor={false} />)

      case 'myMents':        
        
        const myMentors = entry.myMentors
        const myMentees = entry.myMentees
        
        const myMentorsJsx = []
        const myMenteesJsx = []

        for (var i = 0; i < myMentors.length; i++) {
          myMentorsJsx.push(<Entry key={myMentors[i].id} entry={myMentors[i]} entryType={'MyMent'}/>)
        }
        for (var i = 0; i < myMentees.length; i++) {
          myMenteesJsx.push(<Entry key={myMentees[i].id} entry={myMentees[i]} entryType={'MyMent'}/>)
        }

        return (
          <div className="popup-window">
          
            <div className="popup-title"> 
              {
                !viewMenteesTrigger ? (
                  'YOUR MENTORS'
                )
                :
                (
                  'YOUR MENTEES'
                )
              }
              <button className="close-btn" onClick={() => {setPopupTrigger(false)}}><CgClose /></button>
            </div>  
            <span className="card-content" id="feedbackPopup" style={{OverflowY: 'auto', OverflowX: 'hidden'}}> {
                !viewMenteesTrigger ? (
                  myMentorsJsx.length > 0 ? (
                    myMentorsJsx
                  )
                  :
                  <p className="empty-contents">You have no Mentors</p>  
                )
                :
                (
                  myMenteesJsx.length > 0 ? (
                    myMenteesJsx
                  )
                  :
                  <p className="empty-contents">You have no Mentees</p>       
                ) 
              } 
            </span>
            <div className="card-footer"> {
                !viewMenteesTrigger ? (
                  <button className="btn" onClick={() => setViewMenteesTrigger(true)}>View My Mentees</button> 
                )
                : 
                (
                  <button className="btn" onClick={() => setViewMenteesTrigger(false)}>View My Mentors</button> 
                )
              }
            </div>
          </div>
        ) 
      
      case 'AddMenteeGoalForm':

        const myMentees2 = entry.myMentees
        const myMenteesNames = [<option key={-1} value='Select'>Select</option>]
        for (var i = 0; i < myMentees2.length; i++) {
          myMenteesNames.push(<option key={myMentees2[i].id} value={myMentees2[i].name}>{myMentees2[i].name}</option>)
        }

        const processMenteeGoalForm = (e) => {
          e.preventDefault()        // THIS STOPS PAGE REFRESH
          if (addMenteeGoalNAME === 'Select') {
            setAddMenteeGoalERROR(true)
            console.log('INVALID FORM ERROR: Please select a mentee')
          }
          else {
            setAddMenteeGoalERROR(false)  // Do not remove, this will just change the border color back to normal if there was an error before in the dropdown field
            entry.addMenteeGoal(addMenteeGoalNAME, addMenteeGoalTITLE, addMenteeGoalDESC, addMenteeGoalDEADLINE)
            cleanUpMenteeGoalForm()
          }
        }

        const cleanUpMenteeGoalForm = () => {
          setAddMenteeGoalNAME('Select')
          setAddMenteeGoalTITLE('')
          setAddMenteeGoalDESC('')
          setAddMenteeGoalDEADLINE(null)
          setAddMenteeGoalERROR(false)
          setPopupTrigger(false)
        }

        return ( 
          <>
            <div className="popup-window">
              <div className="popup-title">Add a Goal for a Mentee
                <button className="close-btn" onClick={() => {cleanUpMenteeGoalForm()}}><CgClose /></button>
              </div>  
              
              <form onSubmit={processMenteeGoalForm} className="feedback-form">   
              
                <span className="dropdown-text">Select one of your Mentees:</span> {
                  !addMenteeGoalERROR ? (
                    <span className="feedback-input-box">
                      <select autoFocus onChange={(e) => setAddMenteeGoalNAME(e.target.value)}>
                        {myMenteesNames}
                      </select>
                    </span>
                  ) 
                  :
                  (
                    <span className="feedback-input-box">
                      <select autoFocus  style={{borderColor: 'red'}} onChange={(e) => setAddMenteeGoalNAME(e.target.value)}>
                        {myMenteesNames}
                      </select>
                    </span>
                  )
                }
                <div className="feedback-input-box">
                  <input type="text" placeholder="Goal Title" required value={addMenteeGoalTITLE} onChange={(e) => setAddMenteeGoalTITLE(e.target.value)} />
                </div>

                <div className="feedback-textarea">
                  <textarea rows="5" type="text" placeholder="Goal Description / Additional Notes" required value={addMenteeGoalDESC} onChange={(e) => setAddMenteeGoalDESC(e.target.value)} />
                </div>

                <div className="goal-deadline-picker">
                  Goal Deadline:&nbsp;&nbsp;
                  <DatePicker selected={addMenteeGoalDEADLINE} onChange={date => setAddMenteeGoalDEADLINE(date)} value={addMenteeGoalDEADLINE} required />
                </div>

                <div className="feedback-btn">
                  <input type="Submit" value="Add Goal"  className="btn" style={{borderRadius: 6, marginTop: '10px'}}/>
                </div>
              </form>
  
              <br />  
            </div>
          </>
        )   
  
      case 'AddEventForm':

        const processAddEventForm = (e) => {
          e.preventDefault()        // THIS STOPS PAGE REFRESH
          entry.addEvent(addEventTYPE, addEventTITLE, addEventPARTICIPANTS, addEventADDITIONALNOTES, addEventDATE, addEventTIME, addEventPLACE)
          console.log(addEventPARTICIPANTS.split(","))
          cleanAddEventForm(true)
        }

        const cleanAddEventForm = (closePopup) => {
          setAddEventTYPE('Meeting')
          setAddEventTITLE('')
          setAddEventPARTICIPANTS('')
          setAddEventADDITIONALNOTES('')
          setAddEventDATE(null)
          const nnow = new Date()
          setAddEventTIME('' + nnow.getHours() + ':' + nnow.getMinutes())
          setAddEventPLACE('')

          if (closePopup) {
            setPopupTrigger(false)
          }
        }

        return ( 
          <>
            <div className="popup-window"  style={{maxHeight: '800px'}}>
              <div className="popup-title">Create an Event
                <button className="close-btn" onClick={() => cleanAddEventForm(true)}><CgClose /></button>
              </div>  
              
              <form onSubmit={processAddEventForm} className="feedback-form">   
              
                <span className="dropdown-text">Select the type of your event:</span> 
                <span className="feedback-input-box" >
                  <select autoFocus onChange={(e) => setAddEventTYPE(e.target.value)}>
                    <option key={'Meeting'} value={'Meeting'}>Meeting</option>
                    <option key={'Workshop'} value={'Workshop'}>Workshop</option>
                    <option key={'Group Session'} value={'Group Session'}>Group Session</option>
                  </select>
                </span>
                
                {
                  addEventTYPE === 'Meeting' ? (
                    <>
                      <div className="feedback-input-box">
                        <input type="text" placeholder="Subject" required value={addEventTITLE} onChange={(e) => setAddEventTITLE(e.target.value)} />
                      </div>
                      <div className="feedback-input-box">
                        <input type="text" placeholder="Participants" required value={addEventPARTICIPANTS} onChange={(e) => setAddEventPARTICIPANTS(e.target.value)} />
                      </div>
                      <div className="feedback-textarea">
                        <textarea rows="5" type="text" value={addEventADDITIONALNOTES} onChange={(e) => setAddEventADDITIONALNOTES(e.target.value)} placeholder="Additional Notes" required />
                      </div>
                      <div className="goal-deadline-picker">
                        Date:&nbsp;&nbsp;
                        <DatePicker selected={addEventDATE} onChange={date => setAddEventDATE(date)} value={addEventDATE} required />
                        &nbsp;&nbsp;&nbsp;&nbsp;Time:&nbsp;&nbsp;
                        <TimePicker selected={addEventTIME} onChange={time => setAddEventTIME(time)} value={addEventTIME} amPmAriaLabel required />
                      </div>
                      <div className="feedback-input-box">
                        <input type="text" placeholder="Place / Link" required value={addEventPLACE} onChange={(e) => setAddEventPLACE(e.target.value)} />
                      </div>
                    </>
                  )
                  :
                  (
                    addEventTYPE === 'Workshop' ? (
                      <>
                        <div className="feedback-input-box">
                          <input type="text" placeholder="Title" required value={addEventTITLE} onChange={(e) => setAddEventTITLE(e.target.value)} />
                        </div>
                        <div className="feedback-input-box">
                          <input type="text" placeholder="Tutors" required value={addEventPARTICIPANTS} onChange={(e) => setAddEventPARTICIPANTS(e.target.value)} />
                        </div>
                        <div className="feedback-textarea">
                          <textarea rows="5" type="text" value={addEventADDITIONALNOTES} onChange={(e) => setAddEventADDITIONALNOTES(e.target.value)} placeholder="Additional Notes" required />
                        </div>
                        <div className="goal-deadline-picker">
                          Date:&nbsp;&nbsp;
                          <DatePicker selected={addEventDATE} onChange={date => setAddEventDATE(date)} value={addEventDATE} required />
                          &nbsp;&nbsp;&nbsp;&nbsp;Time:&nbsp;&nbsp;
                          <TimePicker selected={addEventTIME} onChange={time => setAddEventTIME(time)} value={addEventTIME} amPmAriaLabel required />
                        </div>
                        <div className="feedback-input-box">
                          <input type="text" placeholder="Location" required value={addEventPLACE} onChange={(e) => setAddEventPLACE(e.target.value)} />
                        </div>
                      </>
                    )
                    :
                    (   // Group session
                    <>
                      <div className="feedback-input-box">
                        <input type="text" placeholder="Topic of Discussion" required value={addEventTITLE} onChange={(e) => setAddEventTITLE(e.target.value)} />
                      </div>
                      <div className="feedback-textarea">
                        <textarea rows="5" type="text" value={addEventADDITIONALNOTES} onChange={(e) => setAddEventADDITIONALNOTES(e.target.value)} placeholder="Additional Notes" required />
                      </div>
                      <div className="goal-deadline-picker">
                        Date:&nbsp;&nbsp;
                        <DatePicker selected={addEventDATE} onChange={date => setAddEventDATE(date)} value={addEventDATE} required />
                        &nbsp;&nbsp;&nbsp;&nbsp;Time:&nbsp;&nbsp;
                        <TimePicker selected={addEventTIME} onChange={time => setAddEventTIME(time)} value={addEventTIME} amPmAriaLabel required />
                      </div>
                      <div className="feedback-input-box">
                        <input type="text" placeholder="Location" required value={addEventPLACE} onChange={(e) => setAddEventPLACE(e.target.value)} />
                      </div>
                    </>
                    )
                  )
                }

                <div className="feedback-btn">
                  <input type="Submit" value="Create Event"  className="btn" style={{borderRadius: 6, marginTop: '-10px', marginBottom: '-13px'}}/>
                </div>
              </form>
  
              <br />  
            </div>
          </>
        ) 
      
      case 'AddGoalForm':

          const processAddGoalForm = (e) => {
            e.preventDefault()        // THIS STOPS PAGE REFRESH
            entry.addGoal(addGoalTITLE, addGoalADDITIONALNOTES, addGoalDEADLINE)
            cleanUpAddGoalForm()
          }

          const cleanUpAddGoalForm = () => {
            setAddGoalTITLE('')
            setAddGoalADDITIONALNOTES('')
            setAddGoalDEADLINE(null)
            setPopupTrigger(false)
          }

          return ( 
            <>
              <div className="popup-window">
                <div className="popup-title">Add a Goal
                  <button className="close-btn" onClick={() => cleanUpAddGoalForm()}><CgClose /></button>
                </div>  
                
                <form onSubmit={processAddGoalForm} className="feedback-form">   
                
                  <div className="feedback-input-box">
                    <input type="text" placeholder="Goal Title" required autoFocus value={addGoalTITLE} onChange={(e) => setAddGoalTITLE(e.target.value)} />
                  </div>

                  <div className="feedback-textarea">
                    <textarea rows="5" type="text" placeholder="Goal Description / Additional Notes" required value={addGoalADDITIONALNOTES} onChange={(e) => setAddGoalADDITIONALNOTES(e.target.value)} />
                  </div>

                  <div className="goal-deadline-picker">
                    Goal Deadline:&nbsp;&nbsp;
                    <DatePicker selected={addGoalDEADLINE} onChange={date => setAddGoalDEADLINE(date)} value={addGoalDEADLINE} required />
                  </div>

                  <div className="feedback-btn">
                    <input type="Submit" value="Add Goal"  className="btn" style={{borderRadius: 6, marginTop: '10px'}}/>
                  </div>
                </form>
    
                <br />  
              </div>
            </>
          )   
      
      case 'EditProfile':

          const currUser = entry.user
          
          const processEditProfileForm = (e) => {
            e.preventDefault()
            entry.setAbout(aboutForm)
            console.log(aboutForm)

            // ----------------------------------- //
            // --- IMPLEMENT BIO CHANGE UPDATE --- //
            // ----------------------------------- //
            // user bio should be updated to 'aboutForm'

            setPopupTrigger(false)
          }

          const cleanEditProfileForm = () => {
            setAboutForm(aboutForm)
            setPopupTrigger(false)
          }
          
          return (
            <>
              <div className="popup-window">
                <div className="popup-title">Edit About
                  <button className="close-btn" onClick={() => cleanEditProfileForm()}><CgClose /></button>
                </div>  
                
                <form onSubmit={processEditProfileForm} className="feedback-form">   

                  <div className="feedback-textarea">
                    <textarea rows="5" type="text" placeholder="About" required value={aboutForm} onChange={(e) => setAboutForm(e.target.value)} />
                  </div>

                  <div className="feedback-btn">
                    <input type="Submit" value="Save Changes"  className="btn" style={{borderRadius: 6, marginTop: '10px'}}/>
                  </div>
                </form>
    
                <br />  
              </div>
            </>
          )
  }
}

Popup.propTypes = {
  trigger: PropTypes.bool,
  entry:PropTypes.oneOfType([PropTypes.object,PropTypes.array]), 
  entryType: PropTypes.string,
  setPopupTrigger: PropTypes.func
}


export default Popup
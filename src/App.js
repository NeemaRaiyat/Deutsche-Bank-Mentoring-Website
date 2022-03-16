import React, { useState } from 'react'

import YourEvents from './components/YourEvents'
import Menteeing from './components/Menteeing'
import Mentoring from './components/Mentoring'
import YourGoals from './components/YourGoals'
import YourMenteesGoals from './components/YourMenteesGoals'
import Suggestions from './components/Suggestions'
import Header from './components/Header'
import Profile from './components/Profile'
import Interests from './components/Interests'
import Popup from './components/Popup'

import Data from './ExampleData'

import './css/app.css'
import './css/mentee-goal.css'
import './css/your-goal.css'
import './css/meeting.css'
import './css/popups.css'
import './css/profile.css'
import './css/form.css'
import './css/interests.css'
import './css/signup-login.css'

/**
 * This is the component for the main home page / dashboard.
 * @returns JSX
 */
const App = () => {

  const menteesGoals = Data().menteesGoals
  const myEvents = Data().myEvents
  const yourGoals = Data().yourGoals
  const user = Data().user
  const userFeedback = Data().userFeedback
  const skillList = Data().skillList

  // Suggestions
  const workshops = Data().workshops
  const groupSessions = Data().groupSessions
  const suggestedMentors = Data().suggestedMentors
  const myMentors = Data().myMentors
  const myMentees = Data().myMentees

  // Header
  const [findMentor, setFindMentor] = useState(false)
  const [beMentor, setBeMentor] = useState(false)
  const [myProfile, setMyProfile] = useState(false)

  const [about, setAbout] = useState(user.bio)

  return (
    <>
      <Interests />
      
      {beMentor ? <Popup trigger={beMentor} entry={skillList} entryType='BeMentor' setPopupTrigger={setBeMentor} />:null}

      {findMentor ? <Popup trigger={findMentor} entry={skillList} entryType='FindMentor' setPopupTrigger={setFindMentor} />:null}

      {myProfile ? <Profile user={user} isCurrentUser={true} userFeedback={userFeedback} setMyProfile={setMyProfile} about={about} setAbout={setAbout} />:null}

      <Header setMyProfile={setMyProfile} />
      <section className="grid">
        <YourEvents myEvents={myEvents}/>
        <Mentoring setOpenState= {setFindMentor}/>
        <Menteeing setOpenState={setBeMentor}/>
        <YourGoals yourGoals={yourGoals}/>
        <YourMenteesGoals menteesGoals={menteesGoals} myMentees={myMentees} />
        <Suggestions data={{workshops, groupSessions, suggestedMentors, myMentors, myMentees}} />
      </section>
    </> 
  )
}

export default App    
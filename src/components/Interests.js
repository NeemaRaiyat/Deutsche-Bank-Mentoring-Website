import React, { useState } from 'react'
import Animals from './../images/interests-pics/animals.jpg'
import Art from './../images/interests-pics/art.jpg'
import Astronomy from './../images/interests-pics/astronomy.jpg'
import Baking from './../images/interests-pics/baking.jpg'
import Comedy from './../images/interests-pics/banana.jpg'
import Basketball from './../images/interests-pics/basketball.jpg'
import Camping from './../images/interests-pics/camping.jpg'
import Cars from './../images/interests-pics/cars.jpg'
import Drawing from './../images/interests-pics/drawing.jpg'
import Fashion from './../images/interests-pics/fashion.jpg'
import Fitness from './../images/interests-pics/fitness.jpg'
import Food from './../images/interests-pics/food.jpg'
import Garden from './../images/interests-pics/garden-design.jpg'
import Interior from './../images/interests-pics/interior-design.jpg'
import Movies from './../images/interests-pics/movies.jpg'
import Music from './../images/interests-pics/music.jpg'
import Photography from './../images/interests-pics/photography.jpg'
import Reading from './../images/interests-pics/reading.jpg'
import Travel from './../images/interests-pics/travel.jpg'
import Football from './../images/interests-pics/football.jpg'


const Interests = () => {

  const [interests, setInterests] = useState([])

  const selectInterest = (name) => {
    if (interests.includes(name)) {
      setInterests(interests.filter((interest) => interest != name))
    }
    else {
      setInterests([...interests, name])
    }
  }

  return (
    <>
      <div className="popup-window" style={{maxWidth: 900, maxHeight: 'fit-content'}}>
        <div className="popup-title">What are you interested in?</div>  
        <div className="photo-grid">

          <div className={`photo ${interests.includes('Interior-Design') ? 'interest-border' : ''}`} onClick={() => selectInterest('Interior-Design')} style={{backgroundImage:`url(${Interior})`}}>Interior Design</div>
          <div className={`photo ${interests.includes('Football') ? 'interest-border' : ''}`} onClick={() => selectInterest('Football')} style={{backgroundImage:`url(${Football})`}}>Football</div>
          <div className={`photo ${interests.includes('Art') ? 'interest-border' : ''}`} onClick={() => selectInterest('Art')} style={{backgroundImage:`url(${Art})`}}>Art</div>
          <div className={`photo ${interests.includes('Photography') ? 'interest-border' : ''}`} onClick={() => selectInterest('Photography')} style={{backgroundImage:`url(${Photography})`}}>Photography</div>
          <div className={`photo ${interests.includes('Animals') ? 'interest-border' : ''}`} onClick={() => selectInterest('Animals')} style={{backgroundImage:`url(${Animals})`}}>Animals</div>

          <div className={`photo ${interests.includes('Fitness') ? 'interest-border' : ''}`} onClick={() => selectInterest('Fitness')} style={{backgroundImage:`url(${Fitness})`}}>Fitness</div>
          <div className={`photo ${interests.includes('Astronomy') ? 'interest-border' : ''}`} onClick={() => selectInterest('Astronomy')} style={{backgroundImage:`url(${Astronomy})`}}>Astronomy</div>
          <div className={`photo ${interests.includes('Travel') ? 'interest-border' : ''}`} onClick={() => selectInterest('Travel')} style={{backgroundImage:`url(${Travel})`}}>Travel</div>
          <div className={`photo ${interests.includes('Garden-Design') ? 'interest-border' : ''}`} onClick={() => selectInterest('Garden-Design')} style={{backgroundImage:`url(${Garden})`}}>Garden Design</div>
          <div className={`photo ${interests.includes('Music') ? 'interest-border' : ''}`} onClick={() => selectInterest('Music')} style={{backgroundImage:`url(${Music})`}}>Music</div>

          <div className={`photo ${interests.includes('Camping') ? 'interest-border' : ''}`} onClick={() => selectInterest('Camping')} style={{backgroundImage:`url(${Camping})`}}>Camping</div>
          <div className={`photo ${interests.includes('Food') ? 'interest-border' : ''}`} onClick={() => selectInterest('Food')} style={{backgroundImage:`url(${Food})`}}>Food</div>
          <div className={`photo ${interests.includes('Movies') ? 'interest-border' : ''}`} onClick={() => selectInterest('Movies')} style={{backgroundImage:`url(${Movies})`}}>Movies</div>
          <div className={`photo ${interests.includes('Cars') ? 'interest-border' : ''}`} onClick={() => selectInterest('Cars')} style={{backgroundImage:`url(${Cars})`}}>Cars</div>
          <div className={`photo ${interests.includes('Fashion') ? 'interest-border' : ''}`} onClick={() => selectInterest('Fashion')} style={{backgroundImage:`url(${Fashion})`}}>Fashion</div>
          
          <div className={`photo ${interests.includes('Basketball') ? 'interest-border' : ''}`} onClick={() => selectInterest('Basketball')} style={{backgroundImage:`url(${Basketball})`}}>Basketball</div>
          <div className={`photo ${interests.includes('Baking') ? 'interest-border' : ''}`} onClick={() => selectInterest('Baking')} style={{backgroundImage:`url(${Baking})`}}>Baking</div>
          <div className={`photo ${interests.includes('Reading') ? 'interest-border' : ''}`} onClick={() => selectInterest('Reading')} style={{backgroundImage:`url(${Reading})`}}>Reading</div>
          <div className={`photo ${interests.includes('Comedy') ? 'interest-border' : ''}`} onClick={() => selectInterest('Comedy')} style={{backgroundImage:`url(${Comedy})`}}>Comedy</div>
          <div className={`photo ${interests.includes('Drawing') ? 'interest-border' : ''}`} onClick={() => selectInterest('Drawing')} style={{backgroundImage:`url(${Drawing})`}}>Drawing</div>
          
        </div>  

        <div className="feedback-btn" style={{marginBottom: '20px', padding: 0}}>
          {/* IMPLEMENT SUBMIT */}
          <input type="Submit" value="Ok" className="btn" style={{borderRadius: 6, paddingLeft: '45px', paddingRight: '45px'}} onClick={() => console.log(interests)}/>
        </div>

      </div>
    </>
  )
}

export default Interests
import React from 'react'
import MentoringPic from './../images/Mentoring.png'

/**
 * This component is the big 'Menteeing' button on the home page which 
 * allows users to update the skills that they want to learn
 * @param {Trigger} setOpenState 
 * @returns JSX
 */
const Menteeing = ({setOpenState}) => {

  const styles = {
    backgroundImage:`url(${MentoringPic})`,
    opacity: '95%'
  }

  return (
    <>
      <div className="card big-button"
          onClick={() => setOpenState(true)}
          style={styles}
          title="Menteeing">
      </div>
    </>
  )
}

export default Menteeing
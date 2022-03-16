import React from 'react'
import MenteeingPic from './../images/Menteeing.png'

/**
 * This component is the big 'Mentoring' button on the home page which 
 * allows users to update the skills that they can teach to mentees
 * @param {Trigger} setOpenState 
 * @returns JSX
 */
const Mentoring = ({setOpenState}) => {

    const styles = {
        backgroundImage:`url(${MenteeingPic})`,
        opacity: '95%',
    }

    return (
        <>
        
        <div className="card big-button"
            onClick={() => setOpenState(true)}
            style={styles}
            title="Mentoring">
        </div>

        </>
    )
}

export default Mentoring
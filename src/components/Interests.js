import React, { useState } from 'react'

/**
 * This component is where the user selects their personal interests e.g. music, art etc.
 * @returns JSX
 */
const Interests = ({ interests, onSubmit }) => {

  const [selectedInterests, setSelectedInterests] = useState(new Set())

  const selectInterest = (id) => {
    const newSelectedInterests = new Set(selectedInterests)

    if (selectedInterests.has(id)) {
      newSelectedInterests.delete(id)
    } else {
      newSelectedInterests.add(id)
    }

    setSelectedInterests(newSelectedInterests)
  }

  return (
    <>
      {/* <div className="popup-window" style={{maxWidth: 900, maxHeight: 'fit-content'}}> */}
        {/* <div className="popup-title">What are you interested in?</div>   */}
        <div className="photo-grid">
          {interests.map(interest =>
            <div
              key={`interest-${interest.id}`}
              className={`photo ${selectedInterests.has(interest.id) ? 'interest-border' : ''}`}
              onClick={() => selectInterest(interest.id)}
              style={{backgroundImage:`url(${interest.image})`}}
            >
              {interest.name}
            </div>
          )}
        </div>
        <div className="feedback-btn" style={{marginBottom: '20px', padding: 0}}>
          <input
            type="Submit"
            value="Next"
            readOnly
            className="btn"
            style={{borderRadius: 6, paddingLeft: '45px', paddingRight: '45px'}}
            onClick={() => onSubmit(selectedInterests)}
          />
        </div>

      {/* </div> */}
    </>
  )
}

export default Interests
import React, { Component } from 'react'
import MedicalSpecialtyChooser from './MedicalSpecialtyChooser'
import loveHealthcare from '../../img/love_healthcare.svg'

class LeaveYourReviewStory extends Component {
  render () {
    return (
      <div className="leave-your-review-container">
        <div className="leave-review">
          <div className='padded-multiline2'>
            <h3>
              <strong>
                Sarah leaves the dental office pain-free and satisfied. 
                She writes her review about the treatment on markmydoctor.com, too, conducive to the work of 
                doctors and the decision making of future patients 
              </strong>
            </h3>
          </div>
          <div>
            <img src={loveHealthcare} alt="Healthcare love"/>
          </div>
          <MedicalSpecialtyChooser/>
        </div>
      </div> 
    )
  }
}

export default LeaveYourReviewStory
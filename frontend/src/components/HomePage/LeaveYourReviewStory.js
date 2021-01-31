import React, { Component } from 'react'
import MedicalSpecialtyChooser from './MedicalSpecialtyChooser'
import investigator from '../../img/investigator.svg'
import loveHealthcare from '../../img/love_healthcare.svg'

class LeaveYourReviewStory extends Component {
  render () {
    return (
      <div className="LeaveYourReviewContainer">
        <div>
          <div>
            <p>Sarah was really satisfied ...</p>
          </div>
          <div>
            <img src={loveHealthcare}/>
          </div>
          <MedicalSpecialtyChooser/>
        </div>
      </div> 
    )
  }
}

export default LeaveYourReviewStory
import React, { Component } from 'react'
import investigator from '../../img/investigator.svg'
import scrollIcon from '../../img/Scroll-Down.gif'


class LookingForADoctorStory extends Component {
  render () {
    return (
      <div className="looking-for-a-doctor-container">
        <div>
          <div>
            <img className="looking-for-a-doctor-image" src={investigator} alt="Investigator"/>
          </div>
          <div>
            <p className="looking-for-a-doctor-text-1">Hello, are you looking for a doctor?</p>
            <p className="looking-for-a-doctor-text-2">Find the best with us!</p>
          </div>
          <div className="looking-for-a-doctor-icon">
            <img style={{width: 170}} src={scrollIcon} alt="Scroll icon"/>
          </div>
        </div>
      </div> 
    )
  }
}

export default LookingForADoctorStory
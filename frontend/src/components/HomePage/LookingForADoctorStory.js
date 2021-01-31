import React, { Component } from 'react'
import investigator from '../../img/investigator.svg'
import scrollIcon from '../../img/Scroll-Down.gif'

class LookingForADoctorStory extends Component {
  render () {
    return (
      <div className="LookingForADoctorContainer">
        <div>
          <div><img src={investigator}/></div>
          <div>
            <p className="LookingForADoctorText">Hello, are you looking for a doctor?</p>
            <p className="LookingForADoctorText2">Find the best with us!</p>
          </div>
          <div className="LookingForADoctorIcon">
            <img style={{width: 170}} src={scrollIcon}/>
          </div>
        </div>
      </div> 
    )
  }
}

export default LookingForADoctorStory
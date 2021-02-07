
import React, { Component } from 'react'
import girl from '../../img/girl_in_pain.svg'
import scrollIcon from '../../img/Scroll-Down.gif'

class GirlInPainStory extends Component {
  render () {
    return (
      <div className="in-pain-container">
        <div>
          <div>
            <img className='girl-image' src={girl} alt="Girl in pain"/>
          </div>
          <div className='padded-multiline'>
            <h3>
              <strong>
                Sarah suffers from toothache. 
                After moving to Budapest, her hometown dentist is not an option any more in cases like this.
              </strong>
            </h3>
          </div>
          <div className="looking-for-a-doctor-icon">
            <img style={{width: 170}} src={scrollIcon} alt="Scroll icon"/>
          </div>
        </div>
      </div> 
    )
  }
}

export default GirlInPainStory
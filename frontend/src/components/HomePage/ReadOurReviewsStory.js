
import React, { Component } from 'react'
import dentist from '../../img/dentist.svg'
import scrollIcon from '../../img/Scroll-Down.gif'

class ReadOurReviewsStory extends Component {
  render () {
    return (
      <div className="read-our-reviews-container">
        <div>
          <div><img className='dentist-image' src={dentist}/></div>
          <div className='padded-multiline'>
            <h3>
              <strong>
                She hears about markmydoctor.com, where based on others' review, she can find 
                the most appropriate doctor for herself. 
              </strong>
            </h3>
          </div>
          <div className="LookingForADoctorIcon">
            <img style={{width: 170, paddingTop: "50px"}} src={scrollIcon}/>
          </div>
        </div>
      </div> 
    )
  }
}

export default ReadOurReviewsStory
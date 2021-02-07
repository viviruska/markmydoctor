
import React, { Component } from 'react'
import dentist from '../../img/dentist.svg'
import scrollIcon from '../../img/Scroll-Down.gif'

class ReadOurReviewsStory extends Component {
  render () {
    return (
      <div className="read-our-reviews-container">
        <div>
          <div><img className='dentist-image' src={dentist} alt="Dentist"/></div>
          <div className='padded-multiline'>
            <h3>
              <strong>
                She hears about markmydoctor.com, where she can find 
                a doctor she likes based on other users' reviews. 
              </strong>
            </h3>
          </div>
          <div className="looking-for-a-doctor-icon">
            <img style={{width: 170, paddingTop: "50px"}} src={scrollIcon} alt="Scroll icon"/>
          </div>
        </div>
      </div> 
    )
  }
}

export default ReadOurReviewsStory
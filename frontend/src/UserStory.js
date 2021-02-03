import React, { Component } from 'react'
import LookingForADoctorStory from './components/HomePage/LookingForADoctorStory'
import LeaveYourReviewStory from './components/HomePage/LeaveYourReviewStory'
import GirlInPainStory from './components/HomePage/GirlInPainStory'
import ReadOurReviewsStory from './components/HomePage/ReadOurReviewsStory';


class UserStory extends Component {
    state = { active: 0 };

    componentDidMount() {
      window.addEventListener("scroll", this.handleScroll);
    }
  
    componentWillUnmount() {
      window.removeEventListener("scroll", this.handleScroll);
    }
  
    handleScroll = event => {
      const { pageYOffset } = window;
      const { active } = this.state;
  
      if (1900 < pageYOffset) {
        this.setState({ active: 2 });
      } else if (1000 < pageYOffset) {
        this.setState({active: 3})
      } else if (500 < pageYOffset) {
        this.setState({ active: 1 });
      } else if (pageYOffset <= 500) {
        this.setState({ active: 0 });
      }
      console.log(this.state.active)
    };

    showDiv = (active) => {
      switch (active) {
        case 0:
          return <LookingForADoctorStory/>
        case 1:
          return <GirlInPainStory/>
        case 2:
          return <LeaveYourReviewStory/>
        case 3:
          return <ReadOurReviewsStory/>        
        default:
          break;
      }
    }
  
    render() {
      const { active } = this.state;
      return (
        <div className="UserStoryContainer">
          {this.showDiv(this.state.active)}
        </div>
      )
    }
  }

  
export default UserStory

import React, { Component } from 'react'
import LookingForADoctorStory from './components/HomePage/LookingForADoctorStory'
import LeaveYourReviewStory from './components/HomePage/LeaveYourReviewStory'
import InPain from './InPain'


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
  
      if (pageYOffset >= 1500) {
        this.setState({ active: 2 });
      } else if (500 <= pageYOffset) {
        this.setState({ active: 1 });
      } else if (pageYOffset < 500) {
        this.setState({ active: 0 });
      }
    };

    showDiv = (active) => {
      switch (active) {
        case 0:
          return <LookingForADoctorStory/>
        case 1:
          return <div style={{
            height: "100%",
            width: "100%",
            backgroundColor: "blue"}}></div>
        case 2:
          return <LeaveYourReviewStory/>
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

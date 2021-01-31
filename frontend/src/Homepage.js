import React, { Component } from "react";
import UserStory from './UserStory';
import ScreenOne from './ScreenOne'
import Footer from './Footer'

class HomePage extends Component {
  render () {
    return (
      <div>
        <ScreenOne/>
        <UserStory/>
        <Footer>
          <p className="App-footer-TOF">Terms of Use  |  Privacy Policy</p>
          <p className="App-footer-license">© Vivien Faragone Ruska  2021</p>
        </Footer>
      </div>
    )
  }
}

export default HomePage
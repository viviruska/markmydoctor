import React, { Component } from "react";
import UserStory from './UserStory';
import Header from './Header'
import Footer from './Footer'

class HomePage extends Component {
  render () {
    return (
      <div>
        <Header/>
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
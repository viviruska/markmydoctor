import React, { Component } from 'react'
import markmydoctor from './markmydoctor.svg'


class Header extends Component {
  render () {
    return (
      <div>
      <header className="App-header">
        <div>
          <div>
            <img src={markmydoctor} className="App-logo" alt="logo" />
            <button color="#ffee93">About Us</button>
          </div>
        <p>
          Find the best doctor
        </p>          
        </div>
      </header>
      </div>
    )
  }
}

export default Header
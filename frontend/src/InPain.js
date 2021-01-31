
import React, { Component } from 'react'
import girl from './img/girl_in_pain.jpg'

class InPain extends Component {
  render () {
    return (
         <div className="InPainContainer">
             <div><img src={girl} style={{marginTop:50}}/></div>
             <div><p>Hello</p></div>
         </div> 
    )
  }
}

export default InPain
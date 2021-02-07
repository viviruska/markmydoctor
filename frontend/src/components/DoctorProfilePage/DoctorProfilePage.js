import React, { Component } from "react";
import ReviewTable from './ReviewTable'

class DoctorProfilePage extends Component {
  render () {
    return (
      <div>
        <div style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "0px 0px",
          paddingRight: "350px",
          borderBottom: "1px solid grey",
          backgroundColor: "#a0ced9"
        }}>
          <div>
            <img style={{
              width: "320px", 
              height: "320px", 
              borderRadius: "160px", 
              marginRight: "-200px"}} 
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" 
              alt="Doctor profile picture"/>
          </div>
          <div>
            <h4 style={{marginRight: "300px", fontFamily: "Neue Helvetica", fontSize: "30px"}}>
              Brigitta Pallagi
              <div style={{display: "flex", justifyContent:"space-between", width:"108%"}}>
                <h6>Budapest</h6>
                <h6>4 ratings</h6>
                <h6>40 posts</h6>
              </div>
            </h4>
            <button className="book-appointment-button">Book appointment</button>
          </div>
        </div>
        <div style={{display:"flex", justifyContent:"center", backgroundColor: "#ffc09f"}}>
          <ReviewTable/>
        </div>
        
      </div>
    )
  }
}

export default DoctorProfilePage
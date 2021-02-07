import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class MedicalSpecialtyPage extends Component {
  // TODO: state coming from API
  state = {
    doctorsOfSpecialty: [
      {
        "id": 1, 
        "firstName": "Brigitta",
        "lastName": "Pallagi",
        "averageRating": 4.59,
        "specialty": "dentist",
        "city": "Kotaj",
        "avatarURL": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
      },
      {
        "id": 2, 
        "firstName": "Timea",
        "lastName": "Szabó",
        "averageRating": 4.72,
        "specialty": "dentist",
        "city": "Budapest",
        "avatarURL": "https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjd8fHBlcnNvbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
      },
      {
        "id": 3, 
        "firstName": "Roland",
        "lastName": "Kiss",
        "averageRating": 4.7,
        "specialty": "dentist",
        "city": "Nyíregyháza",
        "avatarURL": "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
      },
      {
        "id": 4, 
        "firstName": "Mária",
        "lastName": "Finta",
        "averageRating": 4.2,
        "specialty": "dentist",
        "city": "Szombathely",
        "avatarURL": "https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
      }
    ],
  }

  capitalizeFirstLetter (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  render () {
    const spec  = this.props.specialty;

    return (
      <div className='list-doctors'>
        <h1 style={{marginLeft: "40px"}}>{this.capitalizeFirstLetter(spec)}s</h1>
        <div style={{display: "flex", justifyContent:"space-between", width:"100%", marginLeft: "40px"}}>
          <div>Name</div>
          <div>Rating Average</div>
          <div></div>
        </div>
        <ol className='doctor-list'>
        {this.state.doctorsOfSpecialty.map((doctor) => (
          <li key={doctor.id} className='doctor-list-item'>
            <div className='doctor-avatar' style={{backgroundImage: `url(${doctor.avatarURL})`}}>
            </div>
            <div className='doctor-details'>
              <Link 
                className='' 
                to='/specialties/dentist/1'
              >
                <p>{doctor.firstName}</p></Link>
              <p>{doctor.city}</p>
            </div>
            <div className='doctor-average-rating'>
              <p>{doctor.averageRating}</p>
            </div>
            <button className='doctor-message'>Send Message</button>
          </li>
        ))}
        </ol>
      </div>
      
    )
  }
}

export default MedicalSpecialtyPage
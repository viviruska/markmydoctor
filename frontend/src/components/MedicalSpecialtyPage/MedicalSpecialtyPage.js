import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class MedicalSpecialtyPage extends Component {
  // TODO: state coming from API
  state = {
    doctorsOfSpecialty: [
      {
        "id": 1, 
        "firstName": "Ágnes",
        "lastName": "Pallagi",
        "averageRating": 4.59,
        "specialty": "dentist",
        "city": "Kotaj",
        "avatarURL": ""
      },
      {
        "id": 2, 
        "firstName": "Timea",
        "lastName": "Szabó",
        "averageRating": 4.72,
        "specialty": "dentist",
        "city": "Budapest",
        "avatarURL": ""
      },
      {
        "id": 3, 
        "firstName": "Roland",
        "lastName": "Kiss",
        "averageRating": 4.7,
        "specialty": "dentist",
        "city": "Nyíregyháza",
        "avatarURL": ""
      }
    ],
  }

  render () {
    const spec  = this.props.specialty;

    return (
      <div className='list-doctors'>
        <h1>{spec}</h1>
        <div className='doctor-list'>
          <div>Column 1</div>
          <div>Column 2</div>
          <div>Column 3</div>
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
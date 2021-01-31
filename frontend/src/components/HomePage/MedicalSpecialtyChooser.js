import React, { Component } from 'react'
import * as Const from '../../Const'
import { Link } from 'react-router-dom'

class MedicalSpecialtyChooser extends Component {
  state = {
    selectedSpecialty: ''
  }

  handleChange = (event) => {
    const selectedSpecialty = event.target.value;

    console.log(selectedSpecialty);

    this.setState({selectedSpecialty})
    // history.push('/specialties/' + selectedSpecialty);
  }

  render () {
    const specialties = Const.specialties;

    return (
        <div className="book-shelf-changer">
        <p>I am looking for a(n) ...</p>
        <select onChange={(e) => this.handleChange(e)}>
          {/* For the option you want to be the default, React uses a value attribute on the root select tag */}
          <option value="select" disabled>I'm looking for a ...</option>
          {specialties.map((specialty) => (
            <option value={specialty.name} key={specialty.name}>{specialty.title}</option>
          ))}
        </select>
        <Link
            to="/specialties/internist"><button>Test</button>
        </Link>
      </div>
    )
  }
}

export default MedicalSpecialtyChooser
import './App.css';
import MedicalSpecialtyPage from './components/MedicalSpecialtyPage/MedicalSpecialtyPage';
import HomePage from './HomePage'
import { Component } from 'react';
import { Route } from 'react-router-dom';
import DoctorProfilePage from './components/DoctorProfilePage/DoctorProfilePage'

class App extends Component {
  state = {
    selectedSpecialty: 'dentist',
    doctorId: 1,
  }

  render () {
  return (
    <div className='App'>
      <Route exact path="/" render={({ history }) => (
        <HomePage/>
      )}/>
      <Route exact path="/specialties/:name" render={({ history }) => (
          <MedicalSpecialtyPage
            specialty={this.state.selectedSpecialty}

            // onChangeShelf={(book, shelf) => {this.changeShelf(book, shelf)}}
          />
        )}/>
      <Route exact path="/specialties/:name/:id" render={({ history }) => (
          <DoctorProfilePage
            id={this.state.doctorId}
          />
        )}/>
    </div>
  );
}}

export default App;

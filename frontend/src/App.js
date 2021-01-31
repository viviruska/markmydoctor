import './App.css';
// import UserStory from './UserStory';
// import ScreenOne from './ScreenOne'
// import Footer from './Footer'
import MedicalSpecialtyPage from './components/MedicalSpecialtyPage/MedicalSpecialtyPage';
import HomePage from './HomePage'
import { Component } from 'react';
import { Route } from 'react-router-dom';

class App extends Component {
  state = {
    selectedSpecialty: 'dentist'
  }

  render () {
  return (
    <div>
      {/* <ScreenOne/>
      <UserStory/>
      <Footer>
        <p className="App-footer-TOF">Terms of Use  |  Privacy Policy</p>
        <p className="App-footer-license">© Vivien Faragone Ruska  2021</p>
      </Footer> */}
      <Route exact path="/" render={({ history }) => (
        <HomePage/>
      )}/>
      <Route path="/specialties/:name" render={({ history }) => (
          <MedicalSpecialtyPage
            // specialty={this.state.selectedSpecialty}

            // onChangeShelf={(book, shelf) => {this.changeShelf(book, shelf)}}
          />
        )}/>
    </div>
  );
}}

export default App;

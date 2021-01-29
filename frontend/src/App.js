import logo from './logo.svg';
import markmydoctor from './markmydoctor.svg'
import './App.css';
import UserStory from './UserStory';
import HomePage from './Homepage';

function App() {
  return (
    <div>
      <header className="">
        <img src={markmydoctor} className="App-logo" alt="logo" />
        <p>
          Find the best doctor
        </p>
      </header>
      <UserStory/>
      <HomePage/>
    </div>
  );
}

export default App;

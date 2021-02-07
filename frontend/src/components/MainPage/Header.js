import React from 'react';
import WavyHeader from './WavyHeader';
import markmydoctor from '../../img/markmydoctor.svg'
import MedicalSpecialtyChooser from './MedicalSpecialtyChooser'


export default function Header() {

    const styles = {
    container: {
        backgroundColor: '#a0ced9'
    },
    headerContainer: {
        marginHorizontal: 10
    },
    headerText: {
        color: '#333',
        marginLeft: 50,
        marginTop: -50
    }
    };

  return (
    <div style={styles.container}>
      <WavyHeader customStyles={styles.svgCurve} />
      <header style={styles.headerContainer}>
        <div>
          <div></div>
          <div>
            <button className="AboutUsButton">About Us</button>
          </div>
          <div className="chooser" style={{marginTop: "-60px"}}><MedicalSpecialtyChooser/></div>
        </div>
        <div>
          <img src={markmydoctor} style={styles.headerText} alt="logo" />
        </div>
        
      </header>
    </div>
  );
}

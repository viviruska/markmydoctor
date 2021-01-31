import React from 'react';
import WavyHeader from './/WavyHeader';
import markmydoctor from './markmydoctor.svg'


export default function ScreenOne() {

    const styles = {
    container: {
        // flex: 1,
        backgroundColor: '#a0ced9'
    },
    headerContainer: {
        // marginTop: 5,
        marginHorizontal: 10
    },
    headerText: {
        // fontSize: 30,
        // fontWeight: 'bold',
        color: '#333',
        // textAlign: 'center',
        marginLeft: 50,
        marginTop: -50
    }
    };
//   const { innerWidth: width, innerHeight: height } = window

//   const styles = {
//     // rest of the styles
//     svgCurve: {
//       position: 'absolute',
//       width: 3000,  // Dimensions.get('window').width
//     },
//     headerText: {
//       fontSize: 30,
//       fontWeight: 'bold',
//       // change the color property for better output
//       color: '#fff',
//       textAlign: 'center',
//       marginTop: 35
//     }
//     }

  return (
    <div style={styles.container}>
      <WavyHeader customStyles={styles.svgCurve} />
      <header style={styles.headerContainer}>
        {/* <p style={styles.headerText}>Custom Header</p> */}
        <div>
          <div></div>
          <div>
            <button className="AboutUsButton">  About Us  </button>
          </div>
        </div>
        <div>
          <img src={markmydoctor} style={styles.headerText} alt="logo" />
        </div>
        
      </header>
    </div>
  );
}

import React from 'react';


export default function WavyHeader({ customStyles }) {
    return (
      <div style={customStyles}>
        <div style={{ backgroundColor: '#a0ced9', height: 128 }}>
          <svg
            height="60%"
            width="100%"
            viewBox="0 0 1440 320"
            style={{ position: 'absolute', top: 100 }}
          >
          <path 
            fill="#a0ced9" 
            // fill-opacity="1" 
            d="M0,96L48,122.7C96,149,192,203,288,213.3C384,224,480,192,576,149.3C672,107,768,53,864,48C960,43,1056,85,1152,96C1248,107,1344,85,1392,74.7L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z">
          </path>
          </svg>
        </div>
      </div>
    );
  }
"use client"

import MapEmbeded from './MapEmbeded.js';

const HomePage = () => {
  return (
    <div style={{ textAlign: 'center', backgroundColor: '#6883b2' }}>
      <br />
      <h1 style={{ fontSize: '36px' }}><b>Find Sport Companions in Your Local Neighbourhood!</b></h1>
      <br />
      <MapEmbeded />
      <br />
      <br />
      <button style={{ width: '260px', backgroundColor: '#99C43E', border: 'none', padding: '10px', color: 'white'}}>
          <a href="/embed" style={{ textDecoration: 'none', color: 'inherit' }}>Next!</a>
        </button>
      <br />
      <br />
      <br />
      
    </div>
  );
};

export default HomePage;

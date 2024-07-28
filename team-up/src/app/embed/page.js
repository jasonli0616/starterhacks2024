"use client"

import MatchingButton from '../components/MatchingButton.js';
import MapEmbeded from './MapEmbeded.js';

const HomePage = () => {
  return (
    <div style={{ textAlign: 'center', backgroundColor: '#6883b2' }}>
      <br />
      <h1 style={{ fontSize: '36px' }}><b>Find Sport Companions in Your Local Neighbourhood!</b></h1>
      <br />
      <MapEmbeded />

      <div className="flex justify-evenly items-center flex-col">
        <MatchingButton link="/calendar">Calendar</MatchingButton>
        <MatchingButton link="/match">Back to matches</MatchingButton>
      </div>

      <br />
      <br />
      <br />
      
    </div>
  );
};

export default HomePage;

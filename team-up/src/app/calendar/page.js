"use client"

import CalendarEmbeded from './CalendarEmbeded.js';
import "../index.css";
import MatchingButton from '../components/MatchingButton.js';

const HomePage = () => {
  return (
    <div style={{ textAlign: 'center', backgroundColor: '#6883b2' }}>
      <br />
      <h1 style={{ fontSize: '36px' }}><b>Find a date that works for both of you!</b></h1>
      <br />
      <CalendarEmbeded />
      
      <div className="flex justify-evenly items-center flex-col">
        <MatchingButton link="/embed">Map</MatchingButton>
        <MatchingButton link="/match">Back to matches</MatchingButton>
      </div>


    </div>
  );
};

export default HomePage;

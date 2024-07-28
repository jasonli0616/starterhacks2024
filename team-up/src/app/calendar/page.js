"use client"

import CalendarEmbeded from './CalendarEmbeded.js';
import "../index.css";

const HomePage = () => {
  return (
    <div style={{ textAlign: 'center', backgroundColor: '#6883b2' }}>
      <br />
      <h1 style={{ fontSize: '36px' }}><b>Find a date that works for both of you!</b></h1>
      <br />
      <CalendarEmbeded />
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

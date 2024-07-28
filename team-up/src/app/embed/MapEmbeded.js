import React from 'react';

const MapEmbed = () => {
  return (
    <div style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}>
      <iframe
        src="https://www.google.com/maps/d/u/0/embed?mid=1r2i0Pl-sbfuXsJ1K2-9iJZC8OOPMrsM&ehbc=2E312F&noprof=1"
        width="800"
        height="550"
        style={{ border: '0' }}
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default MapEmbed;

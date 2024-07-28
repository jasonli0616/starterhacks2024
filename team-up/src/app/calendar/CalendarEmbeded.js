import React from 'react';

const CalendarEmbed = () => {
    return (
      <div style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}>
        <iframe
          src="https://calendar.google.com/calendar/embed?src=a1507a5556b5eabded42957b1e5a269e10022f4b4c971a5cdc6e283505b319eb%40group.calendar.google.com&ctz=America%2FToronto"
          style={{ border: 0 }}
          width="800"
          height="600"
          frameBorder="0"
          scrolling="no"
        ></iframe>
      </div>
    );
  };
  
  export default CalendarEmbed;
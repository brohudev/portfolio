import React, { useState, useEffect } from 'react';


const Tagline = () => {
     // Array of taglines
     const taglines = [
          "Code warrior by trade, pun master by choice!",
          "Making the impossible possible, one bug at a time!",
          "Debugging life, one keystroke at a time!"
     ];

     // State to hold the current tagline
     const [tagline, setTagline] = useState("");

     // Effect to set a random tagline on mount
     useEffect(() => {
          const getRandomTagline = () => {
               const randomIndex = Math.floor(Math.random() * taglines.length);
               return taglines[randomIndex];
          };

          setTagline(getRandomTagline());
     }, []); // Empty dependency array to run only once

     return (
          <header className="header">
               <h1>Hitarth Thanki (aka "brohudev")</h1>
               <h2>{tagline}</h2>
          </header>
     );
};

export default Tagline;
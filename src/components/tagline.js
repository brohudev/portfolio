import React, { useState, useEffect } from 'react';

//Select a random tagline at every refresh, chosen from a static array
const Tagline = () => {
     const taglines = [
          "Code warrior by trade, pun master by choice!",
          "Making the impossible possible, one bug at a time!",
          "Debugging life, one keystroke at a time!"
     ];

     const [tagline, setTagline] = useState("");

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
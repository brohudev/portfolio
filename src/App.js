import React from 'react';
import About from './components/about';
import './app.css';

const App = () => {
  return (
    <div className="app" id='app'>
        <div className="content">
          <header className="header">
               <h1>Hitarth Thanki (aka "brohudev")</h1>
               <h2>Debugging life, one keystroke at a time</h2>
          </header>
          <About />
        </div>
    </div>
  );
    
};

export default App;

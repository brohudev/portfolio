import React from 'react';
import About from './components/about';
import Tagline from './components/tagline';
import './app.css';

const App = () => {
  return (
    <div className="app" id='app'>
        <div className="content">
            <Tagline />
            <About />
        </div>
    </div>
  );
    
};

export default App;

import React from 'react';
import About from './components/about';
import Tagline from './components/tagline';

const App = () => {
  return (
    <div className="app">
        <div className="content">
            <Tagline />
            <About />
        </div>
    </div>
  );
    
};

export default App;

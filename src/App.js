import React from 'react';
import About from './components/about';
import Contact from './components/contact';
import Tagline from './components/tagline';

const App = () => {
  return (
    <div className="app">
        <div className="content">
            <Tagline />
            <About />
            <Contact />
        </div>
    </div>
  );
    
};

export default App;

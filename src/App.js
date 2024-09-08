import React from 'react';
import About from './about';
import Footer from './footer';

const App = () => {
  return (
    <div className="app" id='app'>
        <div className="content">
          <About />
          <Footer />
        </div>
    </div>
  );
    
};

export default App;

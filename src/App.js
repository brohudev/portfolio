import React from 'react';
import { Route, Routes } from 'react-router-dom';

// import Header from './components/header';
// import About from './components/about';
// import WhatIDo from './components/whatido';
import {ProjectsSection} from './pages/projects';
import Home from './pages/Home';
// import Contact from './components/contact';
// import Footer from './components/footer';
// import NoiseCanvas from './components/utils/noisecanvas';

const App = () => {
    // return (
    //     <div className="app">
    //         <NoiseCanvas />
    //         <Header />
    //         <div className="content">
    //             <About />
    //             <WhatIDo />
    //             <ProjectsSection />
    //             <Contact />
    //         </div>
    //         <Footer />
    //     </div>
    // );
    return (
        <div className="App">
          {/* <Navbar /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<ProjectsSection />} />
            {/* <Route path="/experience" element={<Experience />} /> */}
            {/* <Route path="/mis-stuff" element={<MisStuff />} /> */}
          </Routes>
        </div>
      );
    
};

export default App;

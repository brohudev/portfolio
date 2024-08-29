import React from 'react';
import Header from './components/header';
import About from './components/about';
import WhatIDo from './components/whatido';
import {ProjectsSection} from './components/projects';
import Contact from './components/contact';
import Footer from './components/footer';
import NoiseCanvas from './components/utils/noisecanvas';

const App = () => {
    return (
        <div className="app">
            <NoiseCanvas />
            <Header />
            <div className="content">
                <About />
                <WhatIDo />
                <ProjectsSection />
                <Contact />
            </div>
            <Footer />
        </div>
    );
};

export default App;

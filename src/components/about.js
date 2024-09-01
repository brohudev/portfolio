import React from 'react';
import './css/about.css'; // Import component-specific CSS
//basic about me section. to be improved with a lot more later down the line when I'm done with bigger problems
const About = () => {
    
    return (
        <section id="about" className="about">
            <p>Hi! I'm a Computer Science major at the University of Houston. My interests are in Scientific Computing, Astrophysics, Cryptography, and Cybersecurity. You'll often find me discussing all things tech, cars, planes, rockets, and intriguing science topics!</p>
            <p>My Interest in programming stemmed from being a part of the Robotics team in High School and taking multiple CS courses, among which AP CSA was the course which made me switch from engineering to pure CS. </p>
        </section>
    );
};

export default About;
import React from 'react';
import './css/footer.css';

//todo: input the href for the drive link.
//self-explanatory. here have footer with its components
const Footer = () => {
    return (
        <footer className="footer">
            <section id="footer-button" className="footer-button">
                <h2><a href="mailto:thankihitarth@gmail.com">Contact</a></h2>
            </section>
            <section id="footer-button" className="footer-button">
                <h2><a href="">Resume</a></h2>
            </section>
            <section id="footer-button" className="footer-button">
                <h2><a href="https://www.linkedin.com/in/hitarth-thanki">linkedin</a></h2>
            </section>
            <section id="footer-button" className="footer-button">
                <h2><a href="https://github.com/brohudev/portfolio">Website Source</a></h2>
            </section>
            <section id="footer-button" className="footer-button">
                <h2><a href="mailto:thankihitarth@gmail.com">Discord</a></h2>
            </section>
        </footer>
    );
};

export default Footer;

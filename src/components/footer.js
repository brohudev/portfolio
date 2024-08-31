import React from 'react';
import './css/footer.css';
//todo: change the links to the relevant thing
//self-explanatory. here have footer with its components
const Footer = () => {
    return (
        <footer className="footer">
            <section id="footer" className="footer">
                <h2><a href="mailto:thankihitarth@gmail.com">Contact</a></h2>
            </section>
            <section id="footer" className="footer">
                <h2><a href="mailto:thankihitarth@gmail.com">Resume</a></h2>
            </section>
            <section id="footer" className="footer">
                <h2><a href="mailto:thankihitarth@gmail.com">linkedin</a></h2>
            </section>
            <section id="footer" className="footer">
                <h2><a href="mailto:thankihitarth@gmail.com">Website Source</a></h2>
            </section>
            <section id="footer" className="footer">
                <h2><a href="mailto:thankihitarth@gmail.com">Discord</a></h2>
            </section>
            &copy; 2024 Hitarth Thanki
        </footer>
    );
};

export default Footer;

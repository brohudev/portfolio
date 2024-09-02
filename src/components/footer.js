import React from 'react';
import './css/footer.css';
import { FaGithub, FaLinkedin,} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <footer class="footer glass">
      <a href="mailto:thankihtarth@gmail.com" className="footer-button">
        <MdEmail size={50} color='#26233a' />
      </a>
      <a href="https://github.com/brohudev" className="footer-button" target="_blank" rel="noopener noreferrer">
        <FaGithub size={50} color='#26233a' />
      </a>
      <a href="https://www.linkedin.com/in/hitarth-thanki" className="footer-button" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={50} color='#26233a' />
      </a>
    </footer>
  );
};

export default Footer;


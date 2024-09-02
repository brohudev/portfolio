import React from 'react';
import './css/footer.css';
import { FaGithub, FaLinkedin,} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <footer class="footer glass">
      <a href="mailto:thankihtarth@gmail.com" class="footer-button">
        <MdEmail size={50} color='#eb6f92' />
      </a>
      <a href="https://github.com/brohudev" class="footer-button" target="_blank" rel="noopener noreferrer">
        <FaGithub size={50} color='#eb6f92' />
      </a>
      <a href="https://www.linkedin.com/in/hitarth-thanki" class="footer-button" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={50} color='#eb6f92' />
      </a>
    </footer>
  );
};

export default Footer;


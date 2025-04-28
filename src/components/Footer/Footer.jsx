import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa"; // Import social icons
import "./Footer.css"; // Import the CSS file for Footer styles

const Footer = () => {
  return (
    <footer className="footer">
  <div>
        <p>© 2025 Ahmed Sherif. All rights reserved.</p>
  </div>
    <div>
        <div className="SocialLinks">
          <a href="https://www.linkedin.com/in/ahmed-sherif" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="social-icon" />
          </a>
          <a href="https://github.com/ahmed-sherif" target="_blank" rel="noopener noreferrer">
            <FaGithub className="social-icon" />
          </a>
          <a href="https://www.instagram.com/ahmed.sherif" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="social-icon" />
          </a>
        </div>
    </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import './footer.css';

function Footer({ theme }) {
  return (
    <footer className={`footer-container ${theme}`}>
      <div className="footer-columns">
        <div className="footer-column">
          <h3>About us</h3>
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Resources</h3>
          <ul>
            <li><a href="https://github.com">Github</a></li>
            <li><a href="https://www.figma.com">Figma</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Partnerships</h3>
          <ul>
            <li><a href="/partnerships/galleries">F&F for Galleries</a></li>
            <li><a href="/partnerships/events">F&F for Events</a></li>
            <li><a href="/partnerships/artworks">F&F for Artworks</a></li>
            <li><a href="/partnerships/product">F&F for Product</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-logo-section">
        <div className="footer-logo">
          <h1>F&F</h1>
          <p>Frame and Flourish</p>
        </div>
        <p className="footer-note">Note: Everything on this website is not real (except About)</p>
      </div>
    </footer>
  );
}

export default Footer;

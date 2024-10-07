import React from 'react';
import './footer.css';
import logo_light from '../../assets/logo-black.png'
import logo_dark from '../../assets/logo-white.png'
import search_icon_light from '../../assets/search-w.png'
import search_icon_dark from '../../assets/search-b.png'
import cart_icon_light from '../../assets/cart-w.png'
import cart_icon_dark from '../../assets/cart-b.png'
import user_icon_light from '../../assets/user-w.png'
import user_icon_dark from '../../assets/user-b.png'
import toogle_light from '../../assets/night.png'
import toogle_dark from '../../assets/day.png'
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
            <li><a href="https://github.com/anhbaonguyenle/e-commerce">Github</a></li>
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
        <img src={theme == 'light' ? logo_light : logo_dark} alt="" className='logo'/>
        </div>
        <p className="footer-note">Note: Everything on this website is not real (except About)</p>
      </div>
    </footer>
  );
}

export default Footer;

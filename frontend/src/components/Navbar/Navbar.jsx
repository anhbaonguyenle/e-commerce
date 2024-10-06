import React from 'react'
import './Navbar.css'
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
const Navbar = ({theme, setTheme}) => {
  const toggle_mode = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }
  return (
    <div className='navbar'>
        <img src={theme == 'light' ? logo_light : logo_dark} alt="" className='logo'/>
        <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/Products'>Products</a></li>
            <li><a href='/Galleries'>Galleries</a></li>
            <li><a href='/About'>About</a></li>
        </ul>
        <div className='search-box'>
            <input type='text' placeholder='Search...'/>
            <img src={theme == 'light' ? search_icon_light : search_icon_dark } alt="" className='search-icon'/>
        </div>
        <div className='cart'>
            <img src={theme == 'light' ? cart_icon_dark : cart_icon_light} alt="" className='cart-icon'/>
        </div>
        <div className='user'>
            <img src={theme == 'light' ? user_icon_dark : user_icon_light} alt="" className='user-icon'/>
        </div>
        <img onClick={()=>{toggle_mode()}} src={theme == 'light' ? toogle_light : toogle_dark} alt="" className='toggle-icon'/>
    </div>
  )
}

export default Navbar
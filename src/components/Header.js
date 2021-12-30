import React from 'react'
import './Header.css';
import punkLogo from '../assets/header/cryptopunk-logo.png';
import searchIcon from '../assets/header/search.png';
import themeSwitchIcon from '../assets/header/theme-switch.png';

const Header = () => {
  return (
    <div className='header'>
      <div className="logo_container">
        <img src= {punkLogo} alt='logo' className='punk_logo'/>
      </div>

      <div className="search_bar">
        <div className="search_icon_container">
          <img src={searchIcon} alt='search' />
        </div>
        <input type="text" className='search_input' placeholder='Collection, item or user ...' />
      </div>

      <div className="header_items">
        <p>Drops</p>
        <p>Marketplace</p>
        <p>Create</p>
      </div>

      <div className="header_actions">
        <div className="theme_switch_container">
          <img src={themeSwitchIcon} alt='theme_switch' />
        </div>
      </div>

      <div className="login_button">GET IN</div>
    </div>
  )
}

export default Header

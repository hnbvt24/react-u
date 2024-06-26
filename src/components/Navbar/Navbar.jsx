import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu-icon.png'
import close_icon from '../../assets/close-icon.png'
import { Link } from 'react-scroll'

const Navbar = () => {

  // by default the sticky bar state will be false
  const [sticky, setSticky] = useState(false);
  // this function will only be used once when the component is loaded
  useEffect(() => {
    // when we scroll the webpage, this function will be executed
    window.addEventListener('scroll', () => {
      // this will provide the value of the scroll position from the top
      window.scrollY > 50 ? setSticky(true) : setSticky(false)
    })
  },[])

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }

  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
        <Link to='hero' smooth={true} offset={0} duration={500}><img src={logo} alt="React U Logo" className='logo' /></Link>
        <ul className={mobileMenu?'':'hide-mobile-menu'}>
            <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='programs' smooth={true} offset={-260} duration={500}>Program</Link></li>
            <li><Link to='about' smooth={true} offset={-150} duration={500}>About Us</Link></li>
            <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
            <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
            <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>Contact Us</Link></li>
        </ul>
        <img 
          src={mobileMenu ? close_icon : menu_icon} 
          alt="Hamburger Menu icon" 
          className='menu-icon' 
          onClick={toggleMenu}
        />
    </nav>
  )
}

export default Navbar
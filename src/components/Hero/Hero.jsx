import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container' id='hero'>
        <div className='hero-text'>
            <h1>We ensure better education for a better world</h1>
            <p>Our cutting-edge curriculum empowers students with the latest skills and hands-on experiences crucial for success in coding, web design, and digital innovation.</p>
            <button className='btn'>
                Explore more <img src={dark_arrow} alt="Dark arrow pointing to the right" />
            </button>
        </div>
    </div>
  )
}

export default Hero
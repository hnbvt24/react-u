import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about' id='about'>
        <div className="about-left">
            <img src={about_img} alt="About us image" className='about-img'/>
            <img src={play_icon} alt="Play icon" className='play-icon' onClick={()=>{
                setPlayState(true)
            }}/>
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow&apos;s Leaders Today</h2>
            <p>Embark on a transformative journey at React University, 
                where we redefine education for the digital age. Our 
                innovative programs are meticulously designed to equip 
                students with cutting-edge skills and experiences 
                essential for success in technology, digital design, 
                and computer science.
            </p>
            <p>
                At React U, we prioritize hands-on learning and personalized 
                mentorship, ensuring our students thrive as digital 
                innovators and designers poised to shape tomorrow&apos;s digital 
                experiences. Whether you aspire to pioneer new technologies, 
                lead digital transformations, or create impactful digital 
                solutions, our diverse range of programs provides the perfect 
                pathway to unleash your full potential and make a lasting 
                impact in the tech world.
            </p>
        </div>
    </div>
  )
}

export default About
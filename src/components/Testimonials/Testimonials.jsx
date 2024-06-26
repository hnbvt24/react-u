import React, { useEffect, useRef, useState } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {

    const slider = useRef();
    const [tx, setTx] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
    const totalCards = 4;
    
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 600);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const maxTranslateX = isMobile ? -75 : -50;
    const step = isMobile ? 25 : 50;

    const slide = (direction) => {
        setTx((prevTx) => {
            const newTx = prevTx + direction * step;
            return Math.max(Math.min(newTx, 0), maxTranslateX);
        });
    };

    useEffect(() => {
        slider.current.style.transform = `translateX(${tx}%)`;
    }, [tx]);

  return (
    <div className='testimonials' id='testimonials'>
        <img src={next_icon} alt="Next arrow" className='next-btn' onClick={() => slide(-1)}/>
        <img src={back_icon} alt="Back arrow" className='back-btn' onClick={() => slide(1)}/>
        <div className='slider'>
            <ul ref={slider}>
                <li>
                    <div className='slide'>
                        <div className="user-info">
                            <img src={user_1} alt="User 1 Profile Image" />
                            <div>
                                <h3>
                                    Sophia Martinez
                                </h3>
                                <span>
                                    Java Springs, USA
                                </span>
                            </div>
                        </div>
                        <p>
                        The collaborative environment and cutting-edge resources 
                        at React U have made my learning experience exceptional.
                        I can&apos;t wait to apply what I&apos;ve learned in the tech world. 
                        </p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className="user-info">
                            <img src={user_2} alt="User 2 Profile Image" />
                            <div>
                                <h3>
                                    Michael Anderson
                                </h3>
                                <span>
                                    React City, USA
                                </span>
                            </div>
                        </div>
                        <p>
                        React U&apos;s innovative curriculum and dedicated mentors have 
                        inspired me to push my boundaries. I&apos;m grateful for the 
                        skills and knowledge I&apos;ve gained here. 
                        </p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className="user-info">
                            <img src={user_3} alt="User 3 Profile Image" />
                            <div>
                                <h3>
                                    Emily Roberts
                                </h3>
                                <span>
                                    Reactville, USA
                                </span>
                            </div>
                        </div>
                        <p>
                           Choosing to pursue my degree at React U was one of
                           the best decisions I&apos;ve ever made. The supportive
                           community, state-of-the-art facilities, and commitment
                           to academic excellence have truly exceeded my
                           expecations. 
                        </p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className="user-info">
                            <img src={user_4} alt="User 4 Profile Image" />
                            <div>
                                <h3>
                                    William Jackson
                                </h3>
                                <span>
                                    Javaville, USA
                                </span>
                            </div>
                        </div>
                        <p>
                        The hands-on projects and real-world applications at 
                        React U have been invaluable. I feel fully prepared 
                        to enter the tech industry with confidence.
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials
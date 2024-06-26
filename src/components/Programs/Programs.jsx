import React from 'react'
import './Programs.css'
import program_1 from '../../assets/program-1.png'
import program_2 from '../../assets/program-2.png'
import program_3 from '../../assets/program-3.png'
import program_icon_1 from '../../assets/program-icon-1.png'
import program_icon_2 from '../../assets/program-icon-2.png'
import program_icon_3 from '../../assets/program-icon-3.png'

const Programs = () => {
  return (
    <div className='programs' id='programs'>
        <div className='program'>
            <img src={program_1} alt="Program 1" />
            <div className="caption">
                <img src={program_icon_1} alt="Program icon 1" />
                <p>Graduation Degree</p>
            </div>
        </div>
        <div className='program'>
            <img src={program_2} alt="Program 2" />
            <div className="caption">
                <img src={program_icon_2} alt="Program icon 2" />
                <p>Master Degree</p>
            </div>
        </div>
        <div className='program'>
            <img src={program_3} alt="Program 3" />
            <div className="caption">
                <img src={program_icon_3} alt="Program icon 3" />
                <p>Post Graduation</p>
            </div>
        </div>
    </div>
  )
}

export default Programs
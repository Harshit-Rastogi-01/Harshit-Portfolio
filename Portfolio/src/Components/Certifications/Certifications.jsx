import React from 'react'
import './Certifications.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import arrow_icon from '../../assets/arrow_icon.svg'
import Certifications_Data from '../../assets/certifications_data'
const Certifications = () => {
  return (
    <div id='certifications' className='cerifications'>  
      <div className="certifications-title">
        <h1>My Certifications</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="certication-container">
        { Certifications_Data.map((certification,index) =>{
          return <div key={index} className="certifications-format">
            <h4 className='number'>{certification.c_no}</h4>
            <h3>{certification.c_name}</h3>
            <p className="desc">{certification.c_desc}</p>

            <div className="certifications-readmore">
            <a 
              href={certification.c_pdf} target="_blank" rel="noopener noreferrer" className="certifications-readmore">
              <p>Show Certificate</p>
              <img src={arrow_icon} alt="arrow icon" />
            </a>
            </div>
          </div>
        })}
      </div>
    </div>
  )
}

export default Certifications

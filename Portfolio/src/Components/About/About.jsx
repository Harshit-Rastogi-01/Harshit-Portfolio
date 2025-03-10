import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile_img.svg'
import Harshit from '../../assets/HARSHIT_Image.jpg'
const About = () => {
  return (
    <div className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">

        <div className="about-left">
          <img src={Harshit} alt="" />
        </div>

        <div className="about-right">
          <div className="about-para">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In ipsa ad facere similique dolore aliquid voluptate velit labore incidunt eius quos nemo, sapiente nulla.</p>
            <p>Consectetur adipisicing elit. In ipsa ad facere similique dolore aliquid voluptate velit labore incidunt eius quos nemo, sapiente nulla.</p>
          </div>
          <div className="about-skills">
            <div className="about-skill"><p>HTML & CSS</p><hr style={{width: "100%" }} /></div>
            <div className="about-skill"><p>REACT JS</p><hr style={{width: "75%" }} /></div>
            <div className="about-skill"><p>MONGO DB</p><hr style={{width: "60%" }} /></div>
            <div className="about-skill"><p>EXPRESS </p><hr style={{width: "75%" }} /></div>
            <div className="about-skill"><p>SQL </p><hr style={{width: "65%" }} /></div>
            <div className="about-skill"><p>C , C++ </p><hr style={{width: "90%" }} /></div>
          </div>
        </div>
      </div>

        <div className="about-achievements">
          <div className="about-achievement">
            <h1>10+</h1>
            <p>YEARS OF EXPERIENCE</p>
          </div>
          <hr />
          <div className="about-achievement">
            <h1>90+</h1>
            <p>PROJECTS COMPLETED</p>
          </div>
          <hr />
          <div className="about-achievement">
            <h1>15+</h1>
            <p>HAPPY CLIENTS</p>
          </div>
        </div>
      
    </div>
  )
}

export default About

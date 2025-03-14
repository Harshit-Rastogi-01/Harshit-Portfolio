import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Harshit from '../../assets/HARSHIT_Image1.jpg'
const About = () => {
  return (
    <div id='about' className='about'>
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
            <p>Hi , I’m Harshit , a 3rd year Computer Science student with a passion for Web Development and Problem-Solving. I specialize in the MERN stack and have built several web-based projects, showcasing my skills in building functional and scalable applications. Currently, I’ve built this portfolio website to showcase my journey, skills, and projects in one place. While web development is my forte, I’m also diving into Machine Learning soon.
            </p>
            <p>Beyond coding , I enjoy playing the guitar, painting, and solving cubes - a mix of creativity and logic that keeps me inspired.</p>
          </div>
          <div className="about-skills">
            <div className="about-skill"><p>HTML & CSS</p><hr style={{width: "100%" }} /></div>
            <div className="about-skill"><p>REACT JS</p><hr style={{width: "75%" }} /></div>
            <div className="about-skill"><p>MONGO DB</p><hr style={{width: "60%" }} /></div>
            <div className="about-skill"><p>BOOTSTRAP </p><hr style={{width: "95%" }} /></div>
            <div className="about-skill"><p>EXPRESS JS </p><hr style={{width: "75%" }} /></div>
            <div className="about-skill"><p>SQL </p><hr style={{width: "65%" }} /></div>
            <div className="about-skill"><p>GIT & GITHUB </p><hr style={{width: "95%" }} /></div>
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

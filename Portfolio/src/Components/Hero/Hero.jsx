import React from 'react'
import './Hero.css'
import Harshit from '../../assets/HARSHIT_Image1.jpg'
import AnchorLink from "react-anchor-link-smooth-scroll";
const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={Harshit} alt="" />
      {/* <h1>Hi, I'm <span>Harshit Rastogi</span>, Crafting Scalable & Efficient Digital Solutions.</h1> */}
      <h1>Hi, I'm <span>Harshit Rastogi</span>. I Design * Develop * Deliver </h1>
      <p>Empowering Ideas Through End-to-End Development <br/> Crafting Intutive & Seamless User Experiences. </p>
      <div className="hero-action">
        <AnchorLink className='anchor-link' offset={50} href='#contact'><button className="hero-connect"> Connect with Me</button></AnchorLink>
        <a href="https://www.linkedin.com/in/harshit-2003-rastogi/" target="_blank"><div className="hero-resume">My LinkedIn</div></a>
      </div>
    </div>
  )
}

export default Hero

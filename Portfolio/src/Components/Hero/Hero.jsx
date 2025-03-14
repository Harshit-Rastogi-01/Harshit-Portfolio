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
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora deserunt quasi at ipsum libero esse doloremque sint eum quae officia obcaecati, aspernatur ab ipsam ea. Natus mollitia eveniet dolorem id!</p>
      <div className="hero-action">
        <AnchorLink className='anchor-link' offset={50} href='#contact'><button className="hero-connect"> Connect with Me</button></AnchorLink>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  )
}

export default Hero

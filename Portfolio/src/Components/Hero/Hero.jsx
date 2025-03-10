import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import Harshit from '../../assets/HARSHIT_Image.jpg'
const Hero = () => {
  return (
    <div className='hero'>
      <img src={Harshit} alt="" />
      <h1>I am <span>Harshit Rastogi </span>, Fullstack Web Developer based in India .</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora deserunt quasi at ipsum libero esse doloremque sint eum quae officia obcaecati, aspernatur ab ipsam ea. Natus mollitia eveniet dolorem id!</p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  )
}

export default Hero

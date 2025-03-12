import React from 'react'
import './Contact.css'
import theme_pattern from "../../assets/theme_pattern.svg"
import mail_icon from "../../assets/mail_icon.svg"
import location_icon from "../../assets/location_icon.svg"
const Contact = () => {
  return (
    <div className='contact'>
      <div className="contact-title">
        <h1> Get In Touch</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>I'm currently available for work , so feel free to reach me out anytime</p>
          <div className="contact-details">

            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>harshitrastogi0206@gmail.com</p>
            </div>

            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>B-4/197, Bhoomiya Marg, Chitrakoot Scheme, Vaishali Nagar, Jaipur (Rajasthan) 302021 .</p>
            </div>
            {/* <div className="contact-detail">
              
            </div> */}
          </div>
        </div>
      {/* ------------------ right section of contact component -------------------- */}
         
            <form  className="contact-right">
              <label htmlFor="">Your Name </label>
              <input type="text" placeholder="Enter your name" name='name' />
              <label htmlFor="">Your Email</label>   
              <input type="email" placeholder='Enter your email' name='email' />
              <label htmlFor="">Write your message here </label>
              <textarea name="message" rows="8" placeholder='Enter your message' ></textarea>  
              <button type='submit' className="contact-submit">Submit now</button>         
            </form>
          
      </div>
      
    </div>
  )
}

export default Contact

import React from 'react'
import './Contact.css'
import theme_pattern from "../../assets/theme_pattern.svg"
import mail_icon from "../../assets/mail_icon.svg"
import location_icon from "../../assets/location_icon.svg"
import { ToastContainer, toast } from 'react-toastify';
const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "566c56ae-ec6c-42f4-a083-e856e39f9782");
//Web 3 forms is use to connect email response to our website

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      toast.success('Response Submitted');
      
    } else {
      console.log("Error", data);
      setResult(data.message);
      toast.error('Please try again');
    }

  };
  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1 className="heading"> Get In Touch</h1>
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
         
            <form  onSubmit={onSubmit} className="contact-right">
              <label htmlFor="name">Your Name </label>
              <input type="text" id="name" placeholder="Enter your name" name='name' />
              <label htmlFor="email">Your Email</label>   
              <input type="email" id="email" placeholder='Enter your email' name='email' />
              <label htmlFor="message">Write your message here </label>
              <textarea name="message" id="message" rows="8" placeholder='Enter your message' ></textarea>  
              <button type='submit' className="contact-submit">Submit Now</button>         
            </form>
          
      </div>
      
    </div>
  )
}

export default Contact

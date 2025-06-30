import React, { useState, useRef } from 'react';
import './Contact.css';
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import { ToastContainer, toast } from 'react-toastify';
import HCaptcha from '@hcaptcha/react-hcaptcha';
// import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null);
  const captchaRef = useRef(null);
  // const navigate = useNavigate();

  

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captchaValue) {
      alert('Please complete the CAPTCHA before submitting.');
      return;
    }

    setIsSubmitting(true);
    const formData = new FormData(e.target);
    formData.append('h-captcha-response', captchaValue);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        toast.success('Thank you for your message!');
        e.target.reset();
        captchaRef.current.resetCaptcha();
        setCaptchaValue(null);

        // setTimeout(() => {
        //   scrollToTop();
        //   navigate('/');
        // }, 1000);
      } else {
        toast.error(`Form Error: ${result.message}`);
      }
    } catch (error) {
      console.error('Submission error:', error);
      toast.error('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
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
          <p>I'm currently available for work, so feel free to reach me out anytime.</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>harshitrastogi0206@gmail.com</p>
            </div>

            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>B-4/197, Bhoomiya Marg, Chitrakoot Scheme, Vaishali Nagar, Jaipur (Rajasthan) 302021.</p>
            </div>
          </div>
        </div>

        {/* ------------------ right section of contact component -------------------- */}
        <form onSubmit={handleSubmit} className="contact-right">
          <input
            type="hidden"
            name="access_key"
            value="566c56ae-ec6c-42f4-a083-e856e39f9782"
          />
          <input type="hidden" name="form_source" value="Contact Page" />

          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" name="name" required placeholder="Enter your name" />

          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" name="email" required placeholder="Enter your email" />

          <label htmlFor="message">Write your message here</label>
          <textarea id="message" name="message" rows="8" required placeholder="Enter your message"></textarea>

          <div className="captcha-wrapper">
            <HCaptcha
              sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
              reCaptchaCompat={false}
              onVerify={(token) => setCaptchaValue(token)}
              ref={captchaRef}
            />
          </div>

          <button type="submit" className="contact-submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Submit Form'}
          </button>
        </form>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Contact;

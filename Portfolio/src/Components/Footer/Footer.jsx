import React from 'react'
import './Footer.css'


const Footer = () => {
  return (
    <div className='footer'>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">© 2025 Harshit Rastogi.  All rights reserved.</p>
        <div className="footer-bottom-right">
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
            {/* <p>Connect with me</p> */}
        </div>
      </div>
    </div>
  )
}

export default Footer

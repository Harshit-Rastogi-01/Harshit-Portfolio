import React, { useState ,useRef } from 'react';
import './Navbar.css';
import AnchorLink from "react-anchor-link-smooth-scroll";
import logo1 from '../../assets/logo1.png';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';
const Navbar = () => {
  const [isActive, setIsActive] = useState('home');
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right="0";
  }
  const closeMenu = () => {
    menuRef.current.style.right="-350px";
  }
  
  const handleClick = (menu) => {
    setIsActive(menu);
  };

  return (
    <div className='navbar'>
      <img src={logo1} alt="Logo" />
      <img src={menu_open}  onClick={openMenu} alt="" className="nav-mob-open"/>

      <ul ref={menuRef}  className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
        <li><AnchorLink className='anchor-link'  href='#home'><p onClick={() => handleClick("home")} className={isActive === "home" ? 'active' : ''}>Home</p></AnchorLink></li>

        <li><AnchorLink className='anchor-link'offset={50}  href='#about'> <p onClick={() => handleClick("about")} className={isActive === "about" ? 'active' : ''}>About Me</p></AnchorLink></li>

        <li><AnchorLink className='anchor-link' offset={50} href='#certifications'> <p onClick={() => handleClick("certification")} className={isActive === "certification" ? 'active' : ''}>Certifications</p></AnchorLink></li>

        <li><AnchorLink className='anchor-link' offset={50} href='#mywork'> <p onClick={() => handleClick("portfolio")} className={isActive === "portfolio" ? 'active' : ''}>Portfolio</p> </AnchorLink></li>

        <li><AnchorLink className='anchor-link' offset={50}  href='#contact'><p onClick={() => handleClick("contact")} className={isActive === "contact" ? 'active' : ''}>Contact</p> </AnchorLink></li>
      </ul>
      <button  className="nav-connect"> <AnchorLink className='anchor-link' offset={50} href='#contact'>Contact Me</AnchorLink></button>
    </div>
  );
}

export default Navbar;

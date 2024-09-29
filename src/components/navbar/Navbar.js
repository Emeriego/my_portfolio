import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { FaBars } from 'react-icons/fa';
import './Navbar.css';
import logo from './personalLogo.png';
import Theme from '../theme/Theme';

const Navbar = () => {
    const [mob, setMob] = useState(false);
    const [activeLink, setActiveLink] = useState('simple-header'); // Default active link

    const toggleMenu = () => {
        setMob(prev => !prev);
    };

    const handleLinkClick = (link) => {
        setActiveLink(link); // Set the clicked link as active
        setMob(false); // Close mobile menu after click
    };

    return (
        <div className='navbar'>
            <div className='navbar-container'>
                <div className='logo'>
                    <img src={logo} alt='site logo' />
                </div>
                <div className={mob ? "mob-menu" : "menu"}>
                    <HashLink to='#simple-header' className={activeLink === 'simple-header' ? 'active' : ''} onClick={() => handleLinkClick('simple-header')}>Header</HashLink>
                    <HashLink to='#about' className={activeLink === 'about' ? 'active' : ''} onClick={() => handleLinkClick('about')}>About</HashLink>
                    <HashLink to='#contact' className={activeLink === 'contact' ? 'active' : ''} onClick={() => handleLinkClick('contact')}>Contact</HashLink>
                    <HashLink to='#portfolio' className={activeLink === 'portfolio' ? 'active' : ''} onClick={() => handleLinkClick('portfolio')}>Portfolio</HashLink>
                    <HashLink to='#services' className={activeLink === 'services' ? 'active' : ''} onClick={() => handleLinkClick('services')}>Services</HashLink>
                    <HashLink to='#testimonials' className={activeLink === 'testimonials' ? 'active' : ''} onClick={() => handleLinkClick('testimonials')}>Testimonials</HashLink>
                    <div className="my-theme">
                        <Theme />
                    </div>
                </div>
                <div className="mob-bar" onClick={toggleMenu}>
                    <FaBars />
                </div>
            </div>
        </div>
    );
};

export default Navbar;

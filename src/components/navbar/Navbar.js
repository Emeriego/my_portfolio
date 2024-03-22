import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { FaBars, FaAngular } from 'react-icons/fa';
import './Navbar.css';
import logo from './personalLogo.png';
import Theme from '../theme/Theme'


const Navbar = () => {
        const [mob, setMob] = useState(false);

        const toggleMenu = () => {
                setMob(prev => !prev);
                // setMob(!mob); // this would also work
        }

        return (
                <div className='navbar'>
                        <div className='navbar-container'>
                                <div className='logo'>
                                        <img src={logo} alt='site logo' />
                                </div>
                                <div className={mob? "mob-menu" : "menu"} onClick={() => setMob(false)}>
                                        <HashLink to='#simple-header'>Header</HashLink>
                                        <HashLink to='#about'>About</HashLink>
                                        <HashLink to='#contact'>Contact</HashLink>
                                        <HashLink to='#portfolio'>Portfolio</HashLink>
                                        <HashLink to='#services'>Services</HashLink>
                                        <HashLink to='#testimonials'>Testimonials</HashLink>
                                       <div className="my-theme">
                                        <Theme />
                                       </div>

                                </div>
                                <div className="mob-bar" onClick={toggleMenu}>
                                        <FaBars />
                                </div>
                        </div>

                </div>


        )
}

export default Navbar;

import React, { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import { FaBars } from 'react-icons/fa';
import './Navbar.css';
import logo from './personalLogo.png';
import Theme from '../theme/Theme';

const Navbar = () => {
        const [mob, setMob] = useState(false);
        const [activeLink, setActiveLink] = useState('simple-header');

        const toggleMenu = () => {
                setMob(prev => !prev);
        };

        const handleLinkClick = (link) => {
                setActiveLink(link);
                setMob(false);
        };

        useEffect(() => {
                const sections = document.querySelectorAll('section'); // Select all sections

                const handleScroll = () => {
                        let closestSection = sections[0]; // Start by assuming the first section is closest
                        let minDistance = Number.POSITIVE_INFINITY;

                        sections.forEach((section) => {
                                const rect = section.getBoundingClientRect(); // Get the section’s position relative to the viewport
                                const sectionCenter = rect.top + rect.height / 2; // Calculate the center of the section
                                const windowCenter = window.innerHeight / 2; // Calculate the center of the viewport
                                const distance = Math.abs(windowCenter - sectionCenter); // Get the distance from the viewport center to the section center

                                if (distance < minDistance) {
                                        minDistance = distance;
                                        closestSection = section;
                                }
                        });

                        // Set the active link to the closest section's ID
                        setActiveLink(closestSection.id);
                };

                window.addEventListener('scroll', handleScroll); // Add scroll event listener

                // Clean up the event listener on component unmount
                return () => {
                        window.removeEventListener('scroll', handleScroll);
                };
        }, []);

        return (
                <div className='navbar'>
                        <div className='navbar-container'>
                                <div className='logo'>
                                        <img src={logo} alt='site logo' />
                                </div>
                                <div className={mob ? "mob-menu" : "menu"}>
                                        <HashLink to='#simple-header' className={activeLink === 'simple-header' ? 'active' : ''} onClick={() => handleLinkClick('simple-header')}>Header</HashLink>
                                        <HashLink to='#about' className={activeLink === 'about' ? 'active' : ''} onClick={() => handleLinkClick('about')}>About</HashLink>
                                        <HashLink to='#services' className={activeLink === 'services' ? 'active' : ''} onClick={() => handleLinkClick('services')}>Services</HashLink>
                                        <HashLink to='#resume' className={activeLink === 'resume' ? 'active' : ''} onClick={() => handleLinkClick('resume')}>Resume</HashLink>

                                        <HashLink to='#portfolio' className={activeLink === 'portfolio' ? 'active' : ''} onClick={() => handleLinkClick('portfolio')}>Portfolio</HashLink>
                                        <HashLink to='#faq' className={activeLink === 'faq' ? 'active' : ''} onClick={() => handleLinkClick('faq')}>FAQ</HashLink>
                                        <HashLink to='#contact' className={activeLink === 'contact' ? 'active' : ''} onClick={() => handleLinkClick('contact')}>Contact</HashLink>
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

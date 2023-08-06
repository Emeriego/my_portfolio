import React, {useState} from 'react';
import { HashLink } from 'react-router-hash-link';
import {Aiarrowleft, AiFillEdit} from 'react-icons/ai';
import { BrowserRouter, Link } from 'react-router-dom';
import './Navbar.css';
import Theme from '../theme/Theme'

    
const Navbar = () =>{
const [st, setSt] = useState('');
    
    
return (
   <div className='navbar'>
        <div className='navbar-container'>
                <div className='logo'>
                        <img src='' alt='site logo' />
                </div>
                <div className='menu'>
                        <HashLink to='#header'>Header</HashLink>
                        <HashLink to='#about'>About</HashLink>
                        <HashLink to='#contact'>Contact</HashLink>
                        <HashLink to='#portfolio'>Portfolio</HashLink>
                        <HashLink to='#services'>Services</HashLink>
                        <HashLink to='#testimonials'>Testimonials</HashLink>



                </div>
               <Theme />
        </div>

   </div>
  

)
}
    
export default Navbar;
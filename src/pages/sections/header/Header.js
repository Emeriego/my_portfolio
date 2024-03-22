import React, {useState} from 'react';
import headerImage from './Thumbnail.png';
import './Header.css';
    
const Header = () =>{
    
    
return (
    <section id='header' className='section header-section'>
        <div className='section-container-hdr'>
            <div className='img-container2'>
             <img src={headerImage} />

            </div>
            
        </div>
    </section>
)
}
    
export default Header;

import React, {useState} from 'react';
import headerImage from './Thumbnail.png';
import './Header.css';
    
const Header = () =>{
const [st, setSt] = useState('');
    
    
return (
    <section id='header' className='section header-section'>
        <div className='section-container'>
            <div className='img-container2'>
             <img src={headerImage} />

            </div>
            
        </div>
    </section>
)
}
    
export default Header;
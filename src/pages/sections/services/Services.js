import React, {useState} from 'react';
import {AiFillAlert, AiFillApple, AiFillBank} from 'react-icons/ai';
import './Services.css';

    
const Services = () =>{
const [st, setSt] = useState('');
    
    
return (
    <section id='services' className='section services-section'>
        <div className='section-container'>

        <div className='cards-container services-cards-container'>
                    <div className='card1 services-card1'>
                        <div className='icon services-icon'>< AiFillApple /></div>
                        <span className='tags services-tag'>
                            WEB DEVELOPMENT
                        </span>
                        <small className='tools'>
                            React. JAVASCRIPT. HTML. CSS.
                        </small>
                    </div>
                    <div className='card1 services-card1'>
                        <div className='icon services-icon'>< AiFillApple /></div>
                        <span className='tags services-tag'>
                            USER INTERFACE DESIGN (UI/UX)
                        </span>
                        <small className='tools'>
                            React. JAVASCRIPT. HTML. CSS.
                        </small>
                    </div>
                    <div className='card1 services-card1'>
                        <div className='icon services-icon'>< AiFillApple /></div>
                        <span className='tags services-tag'>
                            GRAPHICS DESIGN
                        </span>
                        <small className='tools'>
                            React. JAVASCRIPT. HTML. CSS.
                        </small>
                    </div>
                    <div className='card1 services-card1'>
                        <div className='icon services-icon'>< AiFillApple /></div>
                        <span className='tags services-tag'>
                            WEBFLOW
                        </span>
                        <small className='tools'>
                            React. JAVASCRIPT. HTML. CSS.
                        </small>
                    </div>

                </div>
        </div>
    </section>
)
}
    
export default Services;

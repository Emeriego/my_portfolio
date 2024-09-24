import React, { useState } from 'react';
import { AiFillAlert, AiFillApple, AiFillBank } from 'react-icons/ai';
import './Services.css';
import CircularProgress from '../../../components/circularProgress/circularProgress';


const Services = () => {
    const [st, setSt] = useState('');


    return (
        <section id='services' className='section services-section'>
            <div className='section-container'>
                <h2 className='section-title'>Services</h2>

                <div className='cards-container services-cards-container'>
                    
                    <div className='card1 services-card1'>
                        <div className='inner1'>
                        <div className='icon services-icon'>< AiFillApple /></div>
                        <span className='ta services-tag'>
                            FIGMA
                        </span>
                        <small className='tools'>
                            React. JAVASCRIPT. HTML. CSS.
                        </small>
                        </div>
                        
                        <div className='inner2'>
                            <CircularProgress fulfilled={90} total={100} />
                        </div>
                    </div>
                    

                    <div className='card1 services-card1'>
                        <div className='inner1'>
                        <div className='icon services-icon'>< AiFillApple /></div>
                        <span className='ta services-tag'>
                            FIGMA
                        </span>
                        <small className='tools'>
                            React. JAVASCRIPT. HTML. CSS.
                        </small>
                        </div>
                        
                        <div className='inner2'>
                            <CircularProgress fulfilled={67} total={100} />
                        </div>
                    </div>


                    <div className='card1 services-card1'>
                        <div className='inner1'>
                        <div className='icon services-icon'>< AiFillApple /></div>
                        <span className='ta services-tag'>
                            FIGMA
                        </span>
                        <small className='tools'>
                            React. JAVASCRIPT. HTML. CSS.
                        </small>
                        </div>
                        
                        <div className='inner2'>
                            <CircularProgress fulfilled={50} total={100} />
                        </div>
                    </div>


                    <div className='card1 services-card1'>
                        <div className='inner1'>
                        <div className='icon services-icon'>< AiFillApple /></div>
                        <span className='ta services-tag'>
                            FIGMA
                        </span>
                        <small className='tools'>
                            React. JAVASCRIPT. HTML. CSS.
                        </small>
                        </div>
                        
                        <div className='inner2'>
                            <CircularProgress fulfilled={78} total={100} />
                        </div>
                    </div>


                    <div className='card1 services-card1'>
                        <div className='inner1'>
                        <div className='icon services-icon'>< AiFillApple /></div>
                        <span className='ta services-tag'>
                            FIGMA
                        </span>
                        <small className='tools'>
                            React. JAVASCRIPT. HTML. CSS.
                        </small>
                        </div>
                        
                        <div className='inner2'>
                            <CircularProgress fulfilled={65} total={100} />
                        </div>
                    </div>



                    <div className='card1 services-card1'>
                        <div className='inner1'>
                        <div className='icon services-icon'>< AiFillApple /></div>
                        <span className='ta services-tag'>
                            FIGMA
                        </span>
                        <small className='tools'>
                            React. JAVASCRIPT. HTML. CSS.
                        </small>
                        </div>
                        
                        <div className='inner2'>
                            <CircularProgress fulfilled={70} total={100} />
                        </div>
                    </div>


                    <div className='card1 services-card1'>
                        <div className='inner1'>
                        <div className='icon services-icon'>< AiFillApple /></div>
                        <span className='ta services-tag'>
                            FIGMA
                        </span>
                        <small className='tools'>
                            React. JAVASCRIPT. HTML. CSS.
                        </small>
                        </div>
                        
                        <div className='inner2'>
                            <CircularProgress fulfilled={90} total={100} />
                        </div>
                    </div>


                    <div className='card1 services-card1'>
                        <div className='inner1'>
                        <div className='icon services-icon'>< AiFillApple /></div>
                        <span className='ta services-tag'>
                            FIGMA
                        </span>
                        <small className='tools'>
                            React. JAVASCRIPT. HTML. CSS.
                        </small>
                        </div>
                        
                        <div className='inner2'>
                            <CircularProgress fulfilled={78} total={100} />
                        </div>
                    </div>

                    <div className='card1 services-card1'>
                        <div className='inner1'>
                        <div className='icon services-icon'>< AiFillApple /></div>
                        <span className='ta services-tag'>
                            FIGMA
                        </span>
                        <small className='tools'>
                            React. JAVASCRIPT. HTML. CSS.
                        </small>
                        </div>
                        
                        <div className='inner2'>
                            <CircularProgress fulfilled={80} total={100} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;

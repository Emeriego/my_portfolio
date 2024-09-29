import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
    const [st, setSt] = useState('');


    return (
        <section id='footer' className='section footer-section'>
            <div className='my-footer1'>Powered By Godwin Chiemerie Ojukwu</div>

            <div className='my-footer'>All right reserved (2024)</div>
        </section>
    )
}

export default Footer;

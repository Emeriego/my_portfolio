import React, { useState } from 'react';
import './Contact.css';
import {
    AiFillFacebook,
    AiFillMessage,
    AiFillPhone,
    AiOutlineMail,
    AiOutlinePhone,
    AiOutlineLinkedin,
    AiOutlineRedEnvelope
} from 'react-icons/ai';
import {
    MdOutlineFacebook,
    MdWhatsapp
} from 'react-icons/md';

const Contact = () => {
    const [st, setSt] = useState('');

    return (
        <section id='contact' className='section contact-section'>
            <div className='section-container about-container'>
                <div className='header'>
                    <h2>Let's Talk!</h2>
                    <p>Whether you have a question, a project idea, or just want to chat about technology, feel free to reach out.</p>
                </div>
                <div className='contact-btns'>
                    <button className='contact-btn' onClick={() => window.open('mailto:emeriego@gmail.com')}>
                        <AiOutlineMail />
                    </button>
                    <button className='contact-btn' onClick={() => window.open('https://www.linkedin.com/in/ojukwugc', '_blank')}>
                        <AiOutlineLinkedin />
                    </button>
                    <button className='contact-btn' onClick={() => window.open('tel:+2348030761163')}>
                        <AiOutlinePhone />
                    </button>
                    <button className='contact-btn' onClick={() => window.open('https://wa.me/+2348030761163', '_blank')}>
                        <MdWhatsapp />
                    </button>
                </div>

            </div>
        </section>
    )
}

export default Contact;

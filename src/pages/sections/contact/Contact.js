import React, {useState} from 'react';
import './Contact.css';
import { 
    AiFillFacebook,
    AiFillMessage,
    AiFillPhone,
    AiOutlineMail,
    AiOutlinePhone,
    AiOutlineRedEnvelope 
} from 'react-icons/ai';
import {
    MdOutlineFacebook,
    MdWhatsapp
} from 'react-icons/md';
    
const Contact = () =>{
const [st, setSt] = useState('');
    
    
return (
    <section id='contact' className='section contact-section'>
        <div className='section-container about-container'>
            <div className='header'>
                <h2>Let's Talk!</h2>
                <p>I am only a hit of a button away. Lets take a look at that idea.</p>
            </div>
            <div className='contact-btns'>
                <button className='contact-btn'>
                    <AiOutlineMail />
                   
                </button>
                <button className='contact-btn'>
                    <MdOutlineFacebook />
                   
                </button>
                <button className='contact-btn'>
                   
                    <AiOutlinePhone />
                </button>
                <button className='contact-btn'>
                   
                    <MdWhatsapp />
                </button>
            </div>
        </div>
    </section>
)
}
    
export default Contact;
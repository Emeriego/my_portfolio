import React, {useState} from 'react';
import './About.css';
import Name from './name.png';
import AboutImg from './about.jpg';
import AboutImg2 from './hd3.png';
import AboutImg3 from './gco3.png';
import {AiFillAlert, AiFillApple} from 'react-icons/ai';
import {MdJavascript, MdDataObject, MdDesktopMac} from 'react-icons/md';


const About = () =>{
const [st, setSt] = useState('');
    
    
return (
    <section id='about' className='section about-section'>
        <div className='section-container'>
            <div className='about-left'>
                
                <img src={AboutImg3} alt='About image' />
            </div>
            <div className='about-right'>
                <div className='title'><h2>About Me,</h2><div className='godwin'><span>Godwin Ojukwu</span></div></div>
               <div className='about-body'>

               <div className='cards-container about-cards-container'>
                    <div className='card1 about-card1'>
                        <div className='icon about-icon'>< MdDataObject /></div>
                        <span className='tags about-tags'>
                            BACKEND
                        </span>
                        <small className='tools about-tools'>
                            Node.js. MongoDB. MySQL. Python. PHP
                        </small>
                    </div>
                    <div className='card1 about-card1'>
                        <div className='icon about-icon'>< MdJavascript /></div>
                        <span className='tags about-tags'>
                            FRONTEND
                        </span>
                        <small className='tools about-tools'>
                            React. Javascript. HTML. Boostrap. CSS. MUI.
                        </small>
                    </div>
                    <div className='card1 about-card1'>
                        <div className='icon about-icon'>< MdDesktopMac /></div>
                        <span className='tags about-tags'>
                            DESIGN
                        </span>
                        <small className='tools about-tools'>
                            Webflow. UI/UX. Figma. CorelDraw. Photoshop.
                        </small>
                    </div>

                </div>
                <div className='about-text'>
                    <p>Versatile Graphics Designer, proficient in the use of modern creative design tools like Corel Draw X7, Adobe Illustrator CS6,
Adobe Photoshop CS6 etc. I am also familiar with basic Web Development/Design fundamentals, ready to pursue a career in
a dynamic, competitive, challenging and social environment where my potentials shall be fully utilized, my career enhanced
and my dreams realized.</p>
                </div>
                <button className='btn download-btn'>Download CV</button>
            </div>
               </div>
                
        </div>
    </section>
)
}




// palette: {
//     mode: mode,
//     ...(mode === 'dark' ? {
//       primary: { main: colors.primary[500] },
//       secondary: { main: colors.green[500] },
//       neutral: { main: colors.blue[300] }
//     } : {
//       primary: { main: colors.primary[100] },
//       secondary: { main: colors.green[100] },
//       neutral: { main: colors.blue[100] }
//     })
//   }
  
// export const colorModeContext = createContext({toggleColorMode: () => {}}) 


export default About;

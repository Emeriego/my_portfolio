import React, {useState} from 'react';
import './About.css';
import Name from './name.png';
import AboutImg from './about.jpg';
import {AiFillAlert, AiFillApple, AiFillBank} from 'react-icons/ai';

const About = () =>{
const [st, setSt] = useState('');
    
    
return (
    <section id='about' className='section about-section'>
        <div className='section-container'>
            <div className='about-left'>
                <img src={AboutImg} alt='About image' />
            </div>
            <div className='about-right'>
                <div className='title'><h2></h2><div className='godwin'><img src={Name} /></div></div>
               <div className='about-body'>

               <div className='cards-container about-cards-container'>
                    <div className='card1 about-card1'>
                        <div className='icon about-icon'>< AiFillApple /></div>
                        <span className='tags about-tags'>
                            FRONTEND
                        </span>
                        <small className='tools about-tools'>
                            React. JAVASCRIPT. HTML. CSS.
                        </small>
                    </div>
                    <div className='card1 about-card1'>
                        <div className='icon about-icon'>< AiFillApple /></div>
                        <span className='tags about-tags'>
                            FRONTEND
                        </span>
                        <small className='tools about-tools'>
                            React. JAVASCRIPT. HTML. CSS.
                        </small>
                    </div>
                    <div className='card1 about-card1'>
                        <div className='icon about-icon'>< AiFillApple /></div>
                        <span className='tags about-tags'>
                            FRONTEND
                        </span>
                        <small className='tools about-tools'>
                            React. JAVASCRIPT. HTML. CSS.
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
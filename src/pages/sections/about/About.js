import React, { useState } from 'react';
import './About.css';
import AboutImg3 from './gco3.png';
import { AiFillAlert, AiFillApple } from 'react-icons/ai';
import { MdJavascript, MdDataObject, MdDesktopMac } from 'react-icons/md';


const About = () => {
    const [st, setSt] = useState('');
    const [feedback, setFeedback] = useState(null);
    const showMessage = (message, type) => {
        setFeedback({ message, type });

        setTimeout(() => {
            setFeedback(null);
        }, 6000);
    };

const showMyMessage =() => {
    showMessage("The Resume has been successfully downloaded", "success")
}
    return (
        <section id='about' className='section about-section'>
            {feedback && (
                <div
                class={`feedback ${feedback.type === 'success' ? 'feedback-success' : 'feedback-error'}`}                >
                    {feedback.message}
                </div>
            )}
            <div className='about-section-container'>
                <div className='about-left'>

                    <img src={AboutImg3} alt='About image' />
                    <button className='btn sm-download-btn'>Download CV</button>
                </div>
                <div className='about-right'>
                    <div className='title'><h2>About Me,</h2><div className='godwin'><span>Godwin Ojukwu</span></div></div>
                    <div className='about-body'>


                        <div className='cards-container about-cards-container'>
                            <div className='card13 about-card1'>
                                <div className='icon about-icon'>< MdDataObject /></div>
                                <span className='tags about-tags'>
                                    BACKEND
                                </span>
                                <small className='about-tools'>
                                    Node.js. Postgres, MySQL. Python. PHP, etc
                                </small>
                            </div>
                            <div className='card1 about-card1'>
                                <div className='icon about-icon'>< MdJavascript /></div>
                                <span className='tags about-tags'>
                                    FRONTEND
                                </span>
                                <small className='about-tools'>
                                    React. Javascript. HTML. Boostrap. CSS. Tailwind etc.
                                </small>
                            </div>
                            <div className='card1 about-card1'>
                                <div className='icon about-icon'>< MdDesktopMac /></div>
                                <span className='tags about-tags'>
                                    DESIGN
                                </span>
                                <small className='about-tools'>
                                    Webflow. UI/UX. Figma. CorelDraw. Photoshop.
                                </small>
                            </div>
                        </div>
                        <div className='about-text'>
                            <p>I am passionate about what I do, Fullstack Development. With the strong foundation earned through a 12 months rigorous training at ALX Africa and my background as a Computer Scientist, I am well equiped in both frontend and backend technologies. With expertise in creating seamless user experiences and robust, scalable backend systems, I specialize in using modern frameworks like React, Next.js, Node.js, and TypeScript to build dynamic web applications. I'm always excited to solve problems, learn new technologies, and contribute to projects that make a difference.</p>
                        </div>
                        <a href="./godwin-resume.pdf" download="godwin-ojukwu-resume.pdf">
                            <button onClick={showMyMessage} className='btn download-btn'>Download CV</button>
                        </a>
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

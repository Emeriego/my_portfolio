import React, {useState} from 'react';
import './SimpleHeader.css';
import AboutImg3 from './gco3.png';
import {AiFillAlert, AiFillApple} from 'react-icons/ai';
import {MdJavascript, MdDataObject, MdDesktopMac} from 'react-icons/md';


const SimpleHeader = () =>{
const [st, setSt] = useState('');
    
    
return (
    <section id='simple-header' className='section SimpleHeader-section'>
        <div className='SimpleHeader-section-container'>
            <div className='SimpleHeader-left'>
                
                <img src={AboutImg3} alt='SimpleHeader image' />
                <button className='btn sm-download-btn'>Download CV</button>
            </div>
            <div className='SimpleHeader-right'>
                <div className='title'>
                    <h2>My solutions are crafted to be,</h2>
                    <div className='SimpleHeader-godwin'><span>Secured, High-Performing and Simple</span></div></div>
               <div className='SimpleHeader-body'>
               
                <div className='SimpleHeader-text'>
                    <p>I embrace this philosophy in every line of code and design element, 
                    aiming to create elegant and intuitive solutions. Explore my work, 
                    and let's turn your ideas into captivating digital experiences.</p>
                </div>
                <button className='btn download-btn'>Explore My Work</button>
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


export default SimpleHeader;

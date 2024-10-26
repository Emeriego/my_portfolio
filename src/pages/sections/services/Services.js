import React, { useState } from 'react';
import { AiFillGithub, AiFillCustomerService, AiOutlineHtml5, AiFillAndroid, AiFillApi, AiOutlineJavaScript, AiFillAlert, AiOutlineSolution, AiOutlineGitlab, AiFillBuild } from 'react-icons/ai';
import { FaAppStoreIos, FaCodeBranch, FaDocker, FaPython, FaFigma, FaNodeJs, FaLinux} from "react-icons/fa6";
import { FaAtom } from "react-icons/fa6";
import { BiLogoTailwindCss, BiLogoPostgresql, BiLogoTypescript, BiArch} from "react-icons/bi";
import { DiIllustrator } from "react-icons/di";
import { DiPhotoshop, DiJavascript1, DiRedis} from "react-icons/di";
import { BiPowerOff } from 'react-icons/bi';






import { MdJavascript } from 'react-icons/md';
import './Services.css';
import CircularProgress from '../../../components/circularProgress/circularProgress';


const Services = () => {
    const [st, setSt] = useState('');


    return (
        <section id='services' className='section services-section'>
            <div className='section-container'>
                <h2 className='section-title'>Tools</h2>

                <div className='cards-container services-cards-container'>
                    
                <div className='card1 services-card1'>
                        <div className='inner1'>
                        <div className='icon services-icon'><AiFillAndroid /></div>
                        <span className='ta services-tag'>
                            PWA
                        </span>
                        {/* <small className='tools'>
                            React. JAVASCRIPT. HTML. CSS.
                        </small> */}
                        </div>
                        
                        <div className='inner2'>
                            <CircularProgress fulfilled={70} total={100} />
                        </div>
                    </div>

                    <div className='card1 services-card1'>
                        <div className='inner1'>
                        <div className='icon services-icon'><AiFillApi /></div>
                        <span className='ta services-tag'>
                            Micro-frontend
                        </span>
                        {/* <small className='tools'>
                            React. JAVASCRIPT. HTML. CSS.
                        </small> */}
                        </div>
                        
                        <div className='inner2'>
                            <CircularProgress fulfilled={75} total={100} />
                        </div>
                    </div>

                    <div className='card1 services-card1'>
                        <div className='inner1'>
                        <div className='icon services-icon'><AiFillAlert /></div>
                        <span className='ta services-tag'>
                            Sockets.io
                        </span>
                        {/* <small className='tools'>
                            React. JAVASCRIPT. HTML. CSS.
                        </small> */}
                        </div>
                        
                        <div className='inner2'>
                            <CircularProgress fulfilled={80} total={100} />
                        </div>
                    </div>

                    <div className='card1 services-card1'>
                        <div className='inner1'>
                        <div className='icon services-icon'><BiArch /></div>
                        <span className='ta services-tag'>
                            Chart.js
                        </span>
                        {/* <small className='tools'>
                            React. JAVASCRIPT. HTML. CSS.
                        </small> */}
                        </div>
                        
                        <div className='inner2'>
                            <CircularProgress fulfilled={70} total={100} />
                        </div>
                    </div>
                    <div className='card1 services-card1'>
                        <div className='inner1'>
                        <div className='icon services-icon'><AiOutlineSolution /></div>
                        <span className='ta services-tag'>
                            TDD
                        </span>
                        {/* <small className='tools'>
                            React. JAVASCRIPT. HTML. CSS.
                        </small> */}
                        </div>
                        
                        <div className='inner2'>
                            <CircularProgress fulfilled={90} total={100} />
                        </div>
                    </div>

                    <div className='card1 services-card1'>
                        <div className='inner1'>
                        <div className='icon services-icon'><AiOutlineGitlab /></div>
                        <span className='ta services-tag'>
                            CI/CD Pipiline
                        </span>
                        {/* <small className='tools'>
                            React. JAVASCRIPT. HTML. CSS.
                        </small> */}
                        </div>
                        
                        <div className='inner2'>
                            <CircularProgress fulfilled={87} total={100} />
                        </div>
                    </div>

                    <div className='card1 services-card1'>
                        <div className='inner1'>
                        <div className='icon services-icon'><AiFillBuild /></div>
                        <span className='ta services-tag'>
                            SEO
                        </span>
                        {/* <small className='tools'>
                            React. JAVASCRIPT. HTML. CSS.
                        </small> */}
                        </div>
                        
                        <div className='inner2'>
                            <CircularProgress fulfilled={70} total={100} />
                        </div>
                    </div>
                    <div className='card1 services-card1'>
                        <div className='inner1'>
                        <div className='icon services-icon'><FaFigma /></div>
                        <span className='ta services-tag'>
                            FIGMA
                        </span>
                        {/* <small className='tools'>
                            React. JAVASCRIPT. HTML. CSS.
                        </small> */}
                        </div>
                        
                        <div className='inner2'>
                            <CircularProgress fulfilled={60} total={100} />
                        </div>
                    </div>
                    

                    <div className='card1 services-card1'>
                        <div className='inner1'>
                        <div className='icon services-icon'><FaAppStoreIos /></div>
                        <span className='ta services-tag'>
                            REACT NATIVE
                        </span>
                        {/* <small className='tools'>
                            React. JAVASCRIPT. HTML. CSS.
                        </small> */}
                        </div>
                        
                        <div className='inner2'>
                            <CircularProgress fulfilled={67} total={100} />
                        </div>
                    </div>

                    <div className='card1 services-card1'>
                        <div className='inner1'>
                        <div className='icon services-icon'>< FaAtom /></div>
                        <span className='ta services-tag'>
                            REACT
                        </span>
                        {/* <small className='tools'>
                            React. JAVASCRIPT. HTML. CSS.
                        </small> */}
                        </div>
                        
                        <div className='inner2'>
                            <CircularProgress fulfilled={90} total={100} />
                        </div>
                    </div>


                    <div className='card1 services-card1'>
                        <div className='inner1'>
                        <div className='icon services-icon'><FaCodeBranch /></div>
                        <span className='ta services-tag'>
                            GIT
                        </span>
                        {/* <small className='tools'>
                            React. JAVASCRIPT. HTML. CSS.
                        </small> */}
                        </div>
                        
                        <div className='inner2'>
                            <CircularProgress fulfilled={88} total={100} />
                        </div>
                    </div>


                    <div className='card1 services-card1'>
                        <div className='inner1'>
                        <div className='icon services-icon'>< FaDocker /></div>
                        <span className='ta services-tag'>
                            DOCKER
                        </span>
                        {/* <small className='tools'>
                            React. JAVASCRIPT. HTML. CSS.
                        </small> */}
                        </div>
                        
                        <div className='inner2'>
                            <CircularProgress fulfilled={70} total={100} />
                        </div>
                    </div>



                    <div className='card1 services-card1'>
                        <div className='inner1'>
                        <div className='icon services-icon'><FaPython /></div>
                        <span className='ta services-tag'>
                            PYTHON
                        </span>
                        {/* <small className='tools'>
                            React. JAVASCRIPT. HTML. CSS.
                        </small> */}
                        </div>
                        
                        <div className='inner2'>
                            <CircularProgress fulfilled={80} total={100} />
                        </div>
                    </div>


                    <div className='card1 services-card1'>
                        <div className='inner1'>
                        <div className='icon services-icon'><BiLogoTailwindCss /></div>
                        <span className='ta services-tag'>
                            TAiLWIND CSS
                        </span>
                        {/* <small className='tools'>
                            React. JAVASCRIPT. HTML. CSS.
                        </small> */}
                        </div>
                        
                        <div className='inner2'>
                            <CircularProgress fulfilled={90} total={100} />
                        </div>
                    </div>

                    <div className='card1 services-card1'>
                        <div className='inner1'>
                        <div className='icon services-icon'><AiOutlineHtml5 /></div>
                        <span className='ta services-tag'>
                            HTML/CSS
                        </span>
                        {/* <small className='tools'>
                            React. JAVASCRIPT. HTML. CSS.
                        </small> */}
                        </div>
                        
                        <div className='inner2'>
                            <CircularProgress fulfilled={98} total={100} />
                        </div>
                    </div>
                    <div className='card1 services-card1'>
                        <div className='inner1'>
                        <div className='icon services-icon'><BiLogoPostgresql /></div>
                        <span className='ta services-tag'>
                            POSTGRES SQL
                        </span>
                        {/* <small className='tools'>
                            React. JAVASCRIPT. HTML. CSS.
                        </small> */}
                        </div>
                        
                        <div className='inner2'>
                            <CircularProgress fulfilled={90} total={100} />
                        </div>
                    </div>
                    <div className='card1 services-card1'>
                        <div className='inner1'>
                        <div className='icon services-icon'><DiRedis /></div>
                        <span className='ta services-tag'>
                            REDIS
                        </span>
                        {/* <small className='tools'>
                            React. JAVASCRIPT. HTML. CSS.
                        </small> */}
                        </div>
                        
                        <div className='inner2'>
                            <CircularProgress fulfilled={70} total={100} />
                        </div>
                    </div>
                    <div className='card1 services-card1'>
                        <div className='inner1'>
                        <div className='icon services-icon'><DiIllustrator /></div>
                        <span className='ta services-tag'>
                            CORELDRAW
                        </span>
                        {/* <small className='tools'>
                            React. JAVASCRIPT. HTML. CSS.
                        </small> */}
                        </div>
                        
                        <div className='inner2'>
                            <CircularProgress fulfilled={98} total={100} />
                        </div>
                    </div>
                    <div className='card1 services-card1'>
                        <div className='inner1'>
                        <div className='icon services-icon'><DiJavascript1 /></div>
                        <span className='ta services-tag'>
                            JAVASCRIPT
                        </span>
                        {/* <small className='tools'>
                            React. JAVASCRIPT. HTML. CSS.
                        </small> */}
                        </div>
                        
                        <div className='inner2'>
                            <CircularProgress fulfilled={90} total={100} />
                        </div>
                    </div>
                    <div className='card1 services-card1'>
                        <div className='inner1'>
                        <div className='icon services-icon'><BiLogoTypescript /></div>
                        <span className='ta services-tag'>
                            TYPESCRIPT
                        </span>
                        {/* <small className='tools'>
                            React. JAVASCRIPT. HTML. CSS.
                        </small> */}
                        </div>
                        
                        <div className='inner2'>
                            <CircularProgress fulfilled={70} total={100} />
                        </div>
                    </div>
                    <div className='card1 services-card1'>
                        <div className='inner1'>
                        <div className='icon services-icon'><DiPhotoshop /></div>
                        <span className='ta services-tag'>
                            PHOTOSHOP
                        </span>
                        {/* <small className='tools'>
                            React. JAVASCRIPT. HTML. CSS.
                        </small> */}
                        </div>
                        
                        <div className='inner2'>
                            <CircularProgress fulfilled={80} total={100} />
                        </div>
                    </div>
                    <div className='card1 services-card1'>
                        <div className='inner1'>
                        <div className='icon services-icon'><FaNodeJs /></div>
                        <span className='ta services-tag'>
                            NODEJS
                        </span>
                        {/* <small className='tools'>
                            React. JAVASCRIPT. HTML. CSS.
                        </small> */}
                        </div>
                        
                        <div className='inner2'>
                            <CircularProgress fulfilled={80} total={100} />
                        </div>
                    </div>
                    <div className='card1 services-card1'>
                        <div className='inner1'>
                        <div className='icon services-icon'><FaLinux /></div>
                        <span className='ta services-tag'>
                            BASH
                        </span>
                        {/* <small className='tools'>
                            React. JAVASCRIPT. HTML. CSS.
                        </small> */}
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

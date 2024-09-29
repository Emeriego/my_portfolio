import React, { useState } from 'react';
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Projects = ({ project }) => {
    const [showModal, setShowModal] = useState(false);
    const { title, repo, image, desc, category, tools, live } = project;

    // Function to open the modal
    const openModal = () => {
        setShowModal(true);
    };

    // Function to close the modal
    const closeModal = () => {
        setShowModal(false);
    };

    // Truncate description to first 10 words
    const truncatedDesc = desc.split(' ').slice(0, 10).join(' ');

    const handleExternalLink = (link) => {
        window.open(link, '_blank', 'noopener,noreferrer', 'target=_blank');
    };
    return (
        <>
            <div className='job-card'>
                <div className='image-placeholder'>
                    <img src={`../../images/${image}`} alt='job screenshot' />
                </div>
                <div className='job-details'>
                    <div className='job-title'><h3>{title}</h3></div>
                    <div className='tools-used'>
                        {
                            tools.map((tool, index) => {
                                return (
                                    <span key={index} className='tool'>{tool}</span>
                                );
                            }
                            )
                        }
                    </div>
                    <div className='job-desc'>
                        <p>{truncatedDesc}... <span onClick={openModal} className='read-more'>more</span></p>
                    </div>
                    <div className='job-cta'>
                        <button onClick={() => handleExternalLink(live)} className='btn2'>Demo</button>
                        <button onClick={() => handleExternalLink(repo)} className='git-icon'><FaGithub /> Github</button>
                    </div>
                </div>
            </div>

            {/* Modal Component */}
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        {/* <div className='image-placeholder'>
                            <img src={`../../images/${image}`} alt='job screenshot' />
                        </div> */}
                        <div className='job-details'>

                            <div className='job-title'><h3>{title}</h3></div>
                            <div className='job-desc'>

                                <p>{desc}</p>
                            </div>
                            <div className='tools-used'>
                                {
                                    tools.map((tool, index) => {
                                        return (
                                            <span key={index} className='tool'>{tool}</span>
                                        );
                                    }
                                    )
                                }
                            </div>
                            <div className='job-cta'>
                                <button onClick={() => handleExternalLink(live)} className='btn2'>Demo</button>
                                <button onClick={() => handleExternalLink(repo)} className='git-icon'><FaGithub /> Github</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Projects;

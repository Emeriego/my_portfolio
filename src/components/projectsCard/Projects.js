import React, {useState} from 'react';
    
const Projects = ({project}) =>{
const [st, setSt] = useState('');
const {title, repo, image, desc, category, tools} = project;
    
    
return (
    <div className='job-card'>
        <div className='image-placeholder'>
            <img src ={`../../images/${image}`} alt = 'job screenschot' />
        </div>
        <div className='job-details'>
        <div className='job-title'><h3>{title}</h3></div>
        <div className='job-desc'>
            <p>{desc}</p>
        </div>
        <div className='job-cta'>
            <button href={repo} className='secondary-btn demo-btn'>Demo</button>
            <button href={repo} className='btn git-btn'>Github</button>
        </div>
        </div>
        
    </div>
)
}
    
export default Projects;
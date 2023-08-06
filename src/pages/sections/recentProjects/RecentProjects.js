import React, {useEffect, useState} from 'react';
import Projects from '../../../components/projectsCard/Projects';
import Data from '../../../components/projectsCard/ProjectsData';
import './RecentProjects.css';
    
const RecentProjects = () =>{
const [jobsToShow, setJobsToShow] = useState([]);
const [categories, setCategories] = useState([])
// const [category, setCategory] = useState('All');
    
    
useEffect(()=>{
    setJobsToShow(Data);
    setCategories(prev =>{
        // return Data.map(cat => cat.category);
        /**
         * THIS FOLLOWING LINE RETRIEVES ONLY UNIQUE VALUES FROM THE DATA MAP
         */
        const uniqueCat = [...new Set( Data.map(cat => cat.category))];
        uniqueCat.push('All');
        return uniqueCat;
    })
},[])

const FilterJobs = (category)=>{
    // setCategory(category);
    const filteredData = Data.filter(job => job.category === category);
    category === 'All'? setJobsToShow(Data) : setJobsToShow(filteredData);
}
return (
    <section id='portfolio' className='section recentProjects-section'>
        <div className='section-container jobs-section'>
            <div className='jobs-header'>
                <h2>Recent Projects</h2>
                <p>How to hzx no sweiond jks jkkkjjkd sdhkkfjf is jhdk jored ka kill atheest sjkiooan no sweiond jks jkkkjjkd sdhkkfjf is jhdk jored ka kill atheest sjkiooan n</p>
            </div>
            <div className='filter-btns-container'>
            {
                
                categories.map(category=>{
                    return (
                        <button className='btn filter-btn' onClick={()=>FilterJobs(category)}>{category}</button>
                    )
                })
            }
            </div>
            <div className='jobs-container'>
            {
                jobsToShow.map(proj =>{
                    return (
                        <Projects 
                            project = {proj}    
                        />
                    )
                    

                })
            }
            </div>
            
            
        </div>
    </section>
)
}
    
export default RecentProjects;
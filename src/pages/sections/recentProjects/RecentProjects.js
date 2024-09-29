import React, {useEffect, useState} from 'react';
import Projects from '../../../components/projectsCard/Projects';
import Data from '../../../components/projectsCard/ProjectsData';
import './RecentProjects.css';
    
const RecentProjects = () =>{
const [jobsToShow, setJobsToShow] = useState([]);
const [categories, setCategories] = useState([]);
const [activeCategory, setActiveCategory] = useState("All");

// useEffect(()=>{
//     setJobsToShow(Data);
//     setCategories(prev =>{
//         const uniqueCat = [...new Set( Data.map(cat => cat.category))];
//         uniqueCat.push('All');
//         return uniqueCat;
//     })
// },[])

// const FilterJobs = (category)=>{
//     setActiveCategory(category);
//     const filteredData = Data.filter(job => job.category === category);
//     category === 'All'? setJobsToShow(Data) : setJobsToShow(filteredData);
// }

useEffect(() => {
    setJobsToShow(Data);
    setCategories(prev => {
        const uniqueCat = [...new Set(Data.flatMap(cat => cat.category))];  // Flatten the array of categories and remove duplicates
        uniqueCat.push('All');
        return uniqueCat;
    });
}, []);

const FilterJobs = (category) => {
    setActiveCategory(category);

    if (category === 'All') {
        setJobsToShow(Data);
    } else {
        const filteredData = Data.filter(job => job.category.includes(category));
        setJobsToShow(filteredData);
    }
};

return (
    <section id='portfolio' className='section recentProjects-section'>
        <div className='section-container jobs-section'>
            <div className='jobs-header'>
                <h2>Recent Projects</h2>
                <p>Here, you’ll find a showcase of my latest work, where I combine technical expertise and creative problem-solving to deliver innovative solutions.</p>
            </div>
            <div className='filter-btns-container'>
            {
                categories.map(category=>{
                    return (
                        <div className='btn-wrap'>
                        <a className={`filter-btn ${activeCategory == category? "btn-active" : ""} `} onClick={()=>FilterJobs(category)} >{category}</a>
                        <div className="btn-divider"></div>
                        </div>
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

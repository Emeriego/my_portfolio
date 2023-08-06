import React, {useState} from 'react';
import Header from '../sections/header/Header';
import About from '../sections/about/About';
import Contact from '../sections/contact/Contact';
import RecentProjects from '../sections/recentProjects/RecentProjects';
import Services from '../sections/services/Services';
import Testimonials from '../sections/testimonials/Testimonials';
import FAQ from '../sections/FAQ/FAQ';
    
const Home = () =>{
const [st, setSt] = useState('');
    



// document.documentElement.style.setProperty(`--product-color-${index+1}`, col);

    
return (
    <div className='home-container'>
        <Header />
        <About />
        <Services />
        <RecentProjects />
        <FAQ />
        <Contact />
        <Testimonials />

    </div>

)
}
    
export default Home;
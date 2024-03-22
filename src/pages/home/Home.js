import React, {useState} from 'react';
import SimpleHeader from '../sections/SimpleHeader/SimpleHeader';
import About from '../sections/about/About';
import Contact from '../sections/contact/Contact';
import RecentProjects from '../sections/recentProjects/RecentProjects';
import Services from '../sections/services/Services';
import Testimonials from '../sections/testimonials/TestimonialSlider';
import FAQ from '../sections/FAQ/FAQ';
import ScrollBtn from '../../components/scrollBtn/ScrollBtn'
    
const Home = () =>{
    



// document.documentElement.style.setProperty(`--product-color-${index+1}`, col);

    
return (
    <div className='home-container'>
        {/* <Header /> */}
        <SimpleHeader />
        <About />
        <Services />
        <RecentProjects />
        <FAQ />
        <Contact />
        <Testimonials />
        <ScrollBtn />

    </div>

)
}
    
export default Home;

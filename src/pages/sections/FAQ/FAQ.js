import React, {useState} from 'react';
import Data from './faqData';
import FaqCard from '../../../components/faqCard/FaqCard';
    
const FAQ = () =>{
const [st, setSt] = useState('');
    
    
return (
<section id='FAQ' className='section FAQ-section'>
        <div className='section-container faqs-container'>
                {
                        Data.map(faqitem =>{
                                return(
                                <FaqCard 
                                        faqitem = {faqitem}
                                />
                                )
                                

                        })
                }
        </div>
</section>
)
}
    
export default FAQ;
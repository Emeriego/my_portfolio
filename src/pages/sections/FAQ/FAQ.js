import React, { useState } from 'react';
import Data from './faqData';
import FaqCard from '../../../components/faqCard/FaqCard';
import './FAQ.css';

const FAQ = () => {
        const [st, setSt] = useState('');
        return (
                <section id='FAQ' className='section'>
                        <div className='faqs-header'>
                                <h2 className='section-title'>FAQ</h2>
                        </div>
                        <div className='section-container faqs-container'>
                                {
                                        Data.map(faqitem => {
                                                return (
                                                        <FaqCard
                                                                faqitem={faqitem}
                                                        />
                                                )
                                        })
                                }
                        </div>
                </section>
        )
}

export default FAQ;

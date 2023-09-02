import React, { useState } from "react";
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa'
import Data from './testimonialsData';
import TestimonialCard from '../../../components/card/TestimonialCard';
import './Testimonials.css';
 // Import the card data

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Data.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === Data.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentCard = Data[currentIndex];
  
  const prevCard = Data[
    (currentIndex - 1) < 0 ? Data.length - 1 : currentIndex - 1
  ];
  const nextCard = Data[
    currentIndex + 1 > Data.length - 1 ? 0 : currentIndex + 1
  ];

  return (
    <div className="card-slider">
      <div className="upper-line"></div>
      <div className="test-title">What They Say About Me</div>
      <div className="card-wrapper">
        <div className="test-cards">
        <div className="faded-card">
            <TestimonialCard
              Data = {prevCard}
            />
          </div>
        
          <div className="current-card">
            <TestimonialCard
              Data = {currentCard}
            />
          </div>
          <div className="faded-card">
            <TestimonialCard
              Data = {nextCard}
            />
          </div>
        </div> 
      
        
      <div className="test-btns">
        <div className="prev">
          <span onClick={handlePrevClick}><FaAngleLeft /></span>

        </div>
        <div className="next">
          <span onClick={handleNextClick}><FaAngleRight /></span>

      </div>
      </div>
      
      </div>
    </div>
  );
};

export default TestimonialSlider;

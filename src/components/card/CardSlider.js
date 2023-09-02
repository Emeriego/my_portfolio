import React, { useState } from "react";
import Data from '../../pages/sections/testimonials/testimonialsData';
import TestimonialCard from './TestimonialCard';
 // Import the card data

const CardSlider = () => {
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

  return (
    <div className="card-slider">
      <button onClick={handlePrevClick}>Previous</button>
      <TestimonialCard
        Data = {currentCard}
      />
      <button onClick={handleNextClick}>Next</button>
    </div>
  );
};

export default CardSlider;

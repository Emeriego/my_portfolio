import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import Data from './testimonialsData';
import TestimonialCard from '../../../components/card/TestimonialCard';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import './Testimonials.css';
// Import the card data

const TestimonialSlider = () => {
  // const [currentIndex, setCurrentIndex] = useState(0);

  // const handlePrevClick = () => {
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex === 0 ? Data.length - 1 : prevIndex - 1
  //   );
  // };

  // const handleNextClick = () => {
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex === Data.length - 1 ? 0 : prevIndex + 1
  //   );
  // };

  // const currentCard = Data[currentIndex];

  // const prevCard = Data[
  //   (currentIndex - 1) < 0 ? Data.length - 1 : currentIndex - 1
  // ];
  // const nextCard = Data[
  //   currentIndex + 1 > Data.length - 1 ? 0 : currentIndex + 1
  // ];
  return (
    <section id='testimonials' className='section testimonials-section'>
      <div id="testimonials" className="card-slider">
        <div className="upper-line"></div>
        <div className="testimonial-title">What They Say About Me</div>
        <div className="cards">
          <Carousel
            // centerMode
            // centerSlidePercentage={70}
            emulateTouch={true}
            showArrows={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            interval={3100}
          >
            {
              Data.map((testy, index) => {
                return (
                  <TestimonialCard
                    testy={testy}
                    index={index + 1}
                  />
                )
              })
            }

            {/* <div className="faded-card slide">
            <TestimonialCard
              
              Data = {prevCard}
            />
          </div> */}

            {/* <div className="current-card slide">
            <TestimonialCard
              
              Data = {currentCard}
            />
          </div> */}
            {/* <div className="faded-card slide">
            <TestimonialCard
              
              Data = {nextCard}
            />
          </div> */}



          </Carousel>

        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;

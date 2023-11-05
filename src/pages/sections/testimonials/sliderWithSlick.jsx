// npm install react-slick slick-carousel

/* src/index.css */
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";



// src/components/Slider.js
// import React from "react";
// import Slider from "react-slick";

// const SliderComponent = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3, // Customize as needed
//     slidesToScroll: 1,
//     // Add more settings as per your requirements
//   };

//   return (
//     <Slider {...settings}>
//       <div>
//         <img src="image1.jpg" alt="Image 1" />
//       </div>
//       <div>
//         <img src="image2.jpg" alt="Image 2" />
//       </div>
//       <div>
//         <img src="image3.jpg" alt="Image 3" />
//       </div>
//       {/* Add more slides as needed */}
//     </Slider>
//   );
// };

// export default SliderComponent;




const settings = {
    dots: true,            // Show dots navigation
    infinite: true,        // Infinite loop of slides
    speed: 500,            // Transition speed (milliseconds)
    slidesToShow: 3,       // Number of slides to show at once
    slidesToScroll: 1,     // Number of slides to scroll
    initialSlide: 0,       // Initial slide to display
    autoplay: false,       // Autoplay the slider
    autoplaySpeed: 3000,   // Autoplay interval (milliseconds)
    pauseOnHover: true,    // Pause autoplay on hover
    arrows: true,          // Show prev/next arrows
    centerMode: false,     // Center the current slide
    variableWidth: false,  // Variable width of slides
    adaptiveHeight: false, // Adjust slide height to the tallest slide
    lazyLoad: "ondemand",  // Lazy load images ("ondemand", "progressive", "ondemand-inviewport")
    draggable: true,       // Enable mouse drag
    swipe: true,           // Enable touch swipe
    touchMove: true,       // Enable touch swipe/move
    responsive: [          // Custom responsive settings
      {
        breakpoint: 1024,  // Viewport width
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }
    ],
    customPaging: (i) => (  // Custom dot element
      <div>Custom Dot {i + 1}</div>
    ),
    prevArrow: <button>Previous</button>, // Custom previous arrow
    nextArrow: <button>Next</button>,     // Custom next arrow
    beforeChange: (current, next) => {    // Callback before slide change
      console.log("Before change", current, next);
    },
    afterChange: (current) => {           // Callback after slide change
      console.log("After change", current);
    },
  };
  


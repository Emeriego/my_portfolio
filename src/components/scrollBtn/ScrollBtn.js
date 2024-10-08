import React from "react";
import { HashLink } from 'react-router-hash-link';
import { useState, useEffect } from "react";
import { FaArrowAltCircleUp, FaArrowAltCircleDown } from "react-icons/fa";
import './ScrollBtn.css'

const ScrollBtn = () => {
    const [scrollHeight, setScrollHeight] = useState(0);

    const handleScroll = () => {
        const scrollPosition = window.scrollY; // => scroll position
        setScrollHeight(scrollPosition);
        // console.log(scrollPosition);
    };
    useEffect(()=>{
        window.addEventListener("scroll", handleScroll);
        return () => {
        window.removeEventListener("scroll", handleScroll);
    };
    }, [])
    return (
        <>
        {scrollHeight > 2000?
        <HashLink to='#simple-header'>
            <div className="float-btn">
                <FaArrowAltCircleUp />
            </div>
        </HashLink>
        :
        <HashLink to='#testimonials'>
            <div className="float-btn">
                <FaArrowAltCircleDown />
            </div>
        </HashLink>
        }
        </>
    )
} 
export default ScrollBtn;

import React, {useState} from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import { Outlet } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
    
const PageLayout = () =>{
const [st, setSt] = useState('');
    
    
return (
    <>
        <Navbar />
        <Outlet />
        <Footer />

    </>
)
}
    
export default PageLayout;
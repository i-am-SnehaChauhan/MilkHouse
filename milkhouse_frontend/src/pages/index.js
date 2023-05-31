import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import Testimonial from '../components/Testimonial';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
           {/* <Sidebar isOpen={isOpen} toggle={toggle}/>*/}
            <Navbar toggle={toggle}/>
            <HeroSection/>
            <Testimonial/>
            <Footer/>
        </>
    )
}

export default Home;
import React from 'react';
import Header from '../components/common/Header';
import Top from '../components/section/Top';
import Footer from '../components/common/Footer';
import About from '../components/section/About';
import Skills from '../components/section/Skills';
import Projects from '../components/section/Projects';
import Contact from '../components/section/Contact';

const MainPage = () => {
    return (
        <>
            <Header/>
            <Top/>
            <About/>
            <Skills/>
            <Projects/>
            <Contact/>
            <Footer/>
        </>
    );
};

export default MainPage;
import React, {useState, useRef, useEffect} from 'react';
import Header from '../components/common/Header';
import Top from '../components/section/Top';
import Footer from '../components/common/Footer';
import About from '../components/section/About';
import Skills from '../components/section/Skills';
import Projects from '../components/section/Projects';

const MainPage = () => {
    const [aboutTop, setAboutTop] = useState(null);

    const aboutRef = useRef();

    useEffect(() => {
        setAboutTop(aboutRef);
    }, []);

    console.log(aboutTop);

    return (
        <>
            <Header/>
            <Top/>
            <About ref={aboutRef}/>
            <Skills/>
            <Projects/>
            <Footer/>
        </>
    );
};

export default MainPage;
import React, {useRef} from 'react';
import Header from '../components/common/Header';
import Top from '../components/section/Top';
import Footer from '../components/common/Footer';
import About from '../components/section/About';
import Skills from '../components/section/Skills';
import Projects from '../components/section/Projects';

const scrollToRef = ref => {
    window.scrollTo({left: 0, top: ref.current.offsetTop, behavior: "smooth"});
};

const MainPage = () => {
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const skillsRef = useRef(null);
    const projectsRef = useRef(null);

    const scrollToHome = () => scrollToRef(homeRef);
    const scrollToAbout = () => scrollToRef(aboutRef);
    const scrollToSkills = () => scrollToRef(skillsRef);
    const scrollToProjects = () => scrollToRef(projectsRef);

    return (
        <>
            <div ref={homeRef}>
                <Header
                    home={scrollToHome}
                    about={scrollToAbout}
                    skills={scrollToSkills}
                    projects={scrollToProjects}/>
            </div>
            <Top/>
            <div ref={aboutRef}><About/></div>
            <div ref={skillsRef}><Skills/></div>
            <div ref={projectsRef}><Projects/></div>
            <Footer/>
        </>
    );
};

export default MainPage;
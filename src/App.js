 //eslint-disable-next-line 
import React from 'react';
import Navbar from './components/NavBar/navbar';
import Intro from './components/Intro/intro';
import AboutMe from './components/AboutMe/aboutme';
import Skills from './components/Skills/skills';
import Projects from './components/Projects/projects';
import Education from './components/Education/education';
import ExtraCurricular from './components/ExtraCurricular/extracur';
import Certificates from './components/Certificates/cert';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <AboutMe/>
      <Skills/>
      <Projects/>
      <Education/>
      <Certificates/>
      <ExtraCurricular/>
    </div>
  );
}

export default App;


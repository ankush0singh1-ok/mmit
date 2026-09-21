import React, { use, useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import './App.css';
import CommonMenu from './components/nav.jsx'
import 'aos/dist/aos.css';
import Aos from 'aos';
import Home from './components/home.jsx';
import Footer from './components/Footer.jsx';
import VisionMission from './components/vision-mission.jsx';
import MandatoryDisclosure from './components/AICTE/mandatory.jsx';
import EoaLetter from './components/AICTE/EOA_letter.jsx';
import Accreditation from './components/AICTE/Accrediation.jsx';
import AicteCollaboration from './components/AICTE/collaboration.jsx';
import AcademicsProgramme from './components/Academics/Academics_p.jsx';
import AcademicsSyllabus from './components/Academics/Academic_sy.jsx';

const App = () => {
  return (
    <>
      <CommonMenu />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<VisionMission/>} />
        <Route path='/aicte/mandatory-disclosure' element={<MandatoryDisclosure/>} />
        <Route path='/aicte/eoa-letter' element={<EoaLetter/>} />
        <Route path='/aicte/accreditation' element={<Accreditation/>} />
        <Route path='/aicte/collaboration' element={<AicteCollaboration/>} />
        <Route path='/academics/programme' element={<AcademicsProgramme/>} />
        <Route path='/academics/syllabus' element={<AcademicsSyllabus/>} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
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
import AcademicsAdmission from './components/Academics/admission.jsx';
import AcademicsFeeStructure from './components/Academics/fee_struct.jsx';
import AdminLogin from './components/adminlogin.jsx';
import FacultyLogin from './components/facultylogin.jsx';
import FacultySignUp from './components/facultyreg.jsx';
import FacultyDashboard from './components/faculty-dash.jsx';
import AdminDashboard from './components/admin-dash.jsx';
import DepartmentPage from './components/department.jsx';
import NotFound from './components/notfound.jsx';
import ContactUs from './components/contactus.jsx';
import Gallery from './components/gallery.jsx';

const App = () => {
  window.alert("Welcome to MMITH Gorakhpur ");
  return (
    <>
      <CommonMenu />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<VisionMission />} />
        <Route path='/aicte/mandatory-disclosure' element={<MandatoryDisclosure />} />
        <Route path='/aicte/eoa-letter' element={<EoaLetter />} />
        <Route path='/aicte/accreditation' element={<Accreditation />} />
        <Route path='/aicte/collaboration' element={<AicteCollaboration />} />
        <Route path='/academics/programme' element={<AcademicsProgramme />} />
        <Route path='/academics/syllabus' element={<AcademicsSyllabus />} />
        <Route path='/academics/admission' element={<AcademicsAdmission />} />
        <Route path='/academics/fee' element={<AcademicsFeeStructure />} />
        <Route path='/login-mmit-admin' element={<AdminLogin />} />
        <Route path='/login-faculty' element={<FacultyLogin />} />
        <Route path='/sign-up-faculty' element={<FacultySignUp />} />
        <Route path='/faculty/dashboard' element={<FacultyDashboard />} />
        <Route path='/admin/dashboard' element={<AdminDashboard />} />
        <Route path="/departments/:branchId" element={<DepartmentPage />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
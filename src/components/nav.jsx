import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './App.css'; // Make sure this path is correct for your project

const CommonMenu = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger the shrink animation after scrolling down 20px
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className={`flux-header-container ${isScrolled ? 'is-scrolled' : ''}`}>
      
      {/* Top Info Bar (Smoothly hides on scroll) */}
      <div className="flux-top-bar">
        <div className="container-fluid px-4">
          <div className="d-flex justify-content-between align-items-center py-2 text-dark" style={{ fontSize: '12px' }}>
            <div className="d-flex gap-3">
              <span>📍 Hariharpur, Gorakhpur</span>
              <span className="d-none d-md-inline">|</span>
              <a href="mailto:mmitgorakhpur@gmail.com" className="text-dark text-decoration-none flux-glow-link">
                mmitgorakhpur@gmail.com
              </a>
            </div>
            <div className="d-flex gap-2">
              <button className="btn btn-warning btn-sm py-0 px-3 fw-bold rounded-pill" style={{ fontSize: '10px' }}>GRIEVANCE</button>
            </div>
          </div>
        </div>
      </div>

      {/* Brand Area (Smoothly hides on scroll) */}
      <div className="brand-area pt-3 pb-2 px-4 d-flex justify-content-between align-items-center">
        <Link className="d-flex align-items-center gap-3 text-decoration-none" to="/" onClick={closeMenu}>
          <div className="flux-logo rounded-circle d-flex align-items-center justify-content-center">
            <img src="./images/logo-removebg-preview-120x117.png" alt="MMIT Logo" className='logo' style={{ width: '60px' }} />
          </div>
          <span className="brand-text text-dark fw-bold ms-2" style={{ fontSize: '22px', lineHeight: '1.2' }}>
            MAHAMAYA POLYTECHNIC <br />
            <span className="text-warning" style={{ fontSize: '16px' }}> OF IT HARIHARPUR</span>
          </span>
        </Link>

        <div className="d-none d-lg-flex align-items-center gap-4 bg-white px-4 py-2 rounded-pill shadow-sm">
          <img src="./images/digital-india.png" alt="Digital India" style={{ height: '45px', objectFit: 'contain' }} />
          <div style={{ width: '2px', height: '30px', backgroundColor: '#e0e0e0' }}></div>
          <img src="./images/swach-bharat.png" alt="Swachh Bharat" style={{ height: '45px', objectFit: 'contain' }} />
        </div>
      </div>

      {/* Glassmorphism Navigation Area (Sticks to Top) */}
      <div className="flux-nav-wrapper">
        <nav className="navbar navbar-expand-lg flux-navbar w-100">
          <div className="container-fluid position-relative z-index-2 d-flex justify-content-between align-items-center">
            
            {/* React Mobile Toggler */}
            <button className="navbar-toggler border-0 flux-toggler shadow-none px-2 d-lg-none" type="button" onClick={toggleMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#333" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
              </svg>
            </button>

            {/* Mobile Badges */}
            <div className="d-lg-none d-flex gap-2">
              <a href="https://bteup.ac.in/" target="_blank" rel="noreferrer" className="badge bg-primary text-light text-decoration-none px-2 py-1 shadow-sm">BTEUP</a>
              <a href="https://urise.up.gov.in/" target="_blank" rel="noreferrer" className="badge bg-info text-dark text-decoration-none px-2 py-1 shadow-sm">URISE</a>
            </div>

            {/* Menu Container */}
            <div className={`justify-content-center w-100 ${isOpen ? 'd-block mt-4' : 'd-none d-lg-flex'}`} id="fluxNav">
            
              {/* Main Nav Links */}
              <ul className="navbar-nav align-items-lg-center col-sm-12 gap-2 gap-xl-4 flex-column flex-lg-row">
                <li className="nav-item me-4">
                  <NavLink className="nav-link flux-link fw-medium" to="/" onClick={closeMenu}>Home</NavLink>
                </li>

                <li className="nav-item ms-lg-4 me-lg-3 dropdown flux-nav-item">
                  <NavLink className="nav-link flux-link fw-medium dropdown-toggle" to="#" data-bs-toggle="dropdown">About</NavLink>
                  <ul className="dropdown-menu flux-dropdown glass-dropdown">
                    <li><Link className="dropdown-item" to="/about" onClick={closeMenu}>Vision & Mission</Link></li>
                  </ul>
                </li>

                <li className="nav-item ms-lg-4 me-lg-3 dropdown flux-nav-item">
                  <NavLink className="nav-link flux-link fw-medium dropdown-toggle" to="#" data-bs-toggle="dropdown">AICTE</NavLink>
                  <ul className="dropdown-menu flux-dropdown glass-dropdown">
                    <li><Link className="dropdown-item" to="/aicte/mandatory-disclosure" onClick={closeMenu}>Mandatory Disclosure</Link></li>
                    <li><a className="dropdown-item" href="https://aicte.gov.in/">AICTE Feedback</a></li>
                    <li><Link className="dropdown-item" to="/aicte/collaboration" onClick={closeMenu}>AICTE Collaboration</Link></li>
                    <li><Link className="dropdown-item" to="/aicte/eoa-letter" onClick={closeMenu}>EOA Letter</Link></li>
                    <li><Link className="dropdown-item" to="/aicte/accreditation" onClick={closeMenu}>Accreditation</Link></li>
                  </ul>
                </li>

                <li className="nav-item ms-lg-4 me-lg-3 dropdown flux-nav-item">
                  <NavLink className="nav-link flux-link fw-medium dropdown-toggle" to="#" data-bs-toggle="dropdown">Academics</NavLink>
                  <ul className="dropdown-menu flux-dropdown glass-dropdown">
                    <li><Link className="dropdown-item" to="/academics/programme" onClick={closeMenu}>Academics Programme</Link></li>
                    <li><Link className="dropdown-item" to="/academics/syllabus" onClick={closeMenu}>Syllabus</Link></li>
                    <li><Link className="dropdown-item" to="/academics/admission" onClick={closeMenu}>Admission</Link></li>
                    <li><Link className="dropdown-item" to="/academics/fee" onClick={closeMenu}>Fee Structure</Link></li>
                  </ul>
                </li>

                <li className="nav-item ms-lg-4 me-lg-3 dropdown flux-nav-item">
                  <NavLink className="nav-link flux-link fw-medium dropdown-toggle" to="#" data-bs-toggle="dropdown">Departments</NavLink>
                  <ul className="dropdown-menu flux-dropdown glass-dropdown">
                    <li><Link className="dropdown-item" to="/departments/electronics" onClick={closeMenu}>Electronics Engineering</Link></li>
                    <li><Link className="dropdown-item" to="/departments/computer-science" onClick={closeMenu}>Computer Science</Link></li>
                    <li><Link className="dropdown-item" to="/departments/information-technology" onClick={closeMenu}>Information Technology</Link></li>
                  </ul>
                </li>

                <li className="nav-item ms-lg-4 me-lg-3 dropdown flux-nav-item">
                  <NavLink className="nav-link flux-link fw-medium dropdown-toggle" to="#" data-bs-toggle="dropdown">Login</NavLink>
                  <ul className="dropdown-menu flux-dropdown glass-dropdown">
                    <li><Link className="dropdown-item" to="/login-faculty" onClick={closeMenu}>Faculty</Link></li>
                    <li><Link className="dropdown-item" to="/login-mmit-admin" onClick={closeMenu}>Admin</Link></li>
                  </ul>
                </li>

                <li className="nav-item me-4">
                  <NavLink className="nav-link flux-link fw-medium" to="/gallery" onClick={closeMenu}>Gallery</NavLink>
                </li>

                <li className="nav-item me-4">
                  <NavLink className="nav-link flux-link fw-medium" to="/contact-us" onClick={closeMenu}>Contact Us</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        
        {/* Animated Flag Scrolling Bar */}
        <div className="flag-scroll-bar"></div>
      </div>
    </header>
  );
}

export default CommonMenu;
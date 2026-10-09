import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../App.css';

const CommonMenu = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Triggers the shrinking animation after scrolling down 20px
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
      
      {/* Top Info Bar (Hides on Scroll) */}
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

      {/* Brand Area (Hides on Scroll) */}
      <div className="brand-area pt-3 pb-1 px-4 d-flex justify-content-between align-items-center">
        <Link className="d-flex align-items-center gap-3 text-decoration-none" to="/" onClick={closeMenu}>
          <div className="flux-logo rounded-circle d-flex align-items-center justify-content-center">
            <img src="./images/logo-removebg-preview-120x117.png" alt="MMIT Logo" className='logo' />
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

      {/* Navigation Links Area (Sticks to Top) */}
      <div className="container-fluid px-2 px-lg-4 mt-2 mb-2">
        <nav className="navbar navbar-expand-lg flux-navbar w-100">
          
          {/* Glassmorphism & Flag Background Layer */}
          <div className="flux-navbar-background"></div>

          <div className="container-fluid position-relative z-index-2 d-flex justify-content-between align-items-center">
            
            {/* React Mobile Toggler */}
            <button className="navbar-toggler border-0 flux-toggler shadow-none px-2 d-lg-none" type="button" onClick={toggleMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#ffffff" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
              </svg>
            </button>

            {/* Mobile Badges */}
            <div className="d-lg-none d-flex gap-2">
              <a href="https://bteup.ac.in/" target="_blank" rel="noreferrer" className="badge bg-primary text-light text-decoration-none px-2 py-1 shadow-sm">BTEUP</a>
              <a href="https://urise.up.gov.in/" target="_blank" rel="noreferrer" className="badge bg-info text-dark text-decoration-none px-2 py-1 shadow-sm">URISE</a>
            </div>

            {/* Menu Container: Conditionally rendered on mobile, always visible on desktop */}
            <div className={`justify-content-center w-100 ${isOpen ? 'd-block mt-4' : 'd-none d-lg-flex'}`} id="fluxNav">
              
              {/* Mobile-Only Links Section */}
              <div className="d-lg-none w-100 mb-3 pb-3 border-bottom border-secondary text-center text-light">
                <div className="d-flex flex-column align-items-center gap-2 mb-4 mt-2">
                  <a href="mailto:mmitgorakhpur@gmail.com" className="fw-medium text-decoration-none text-light small">
                    <i className="bi bi-envelope text-warning me-2"></i>mmitgorakhpur@gmail.com
                  </a>
                  <button className="btn btn-warning btn-sm py-1 px-4 fw-bold rounded-pill shadow-sm">GRIEVANCE</button>
                </div>
                
                <h6 className="fw-bold mb-3 small text-uppercase letter-spacing-1 text-light">Other Important Links</h6>
                <div className="d-flex flex-wrap justify-content-center gap-2 px-2">
                  <a href="https://up.gov.in/en" className="badge bg-success text-light text-decoration-none p-2">UP GOVT</a>
                  <a href="https://www.aicte.gov.in/" className="badge bg-warning text-dark text-decoration-none p-2">AICTE</a>
                  <a href="https://jeecup.admissions.nic.in/" className="badge bg-danger text-light text-decoration-none p-2">JEECUP</a>
                </div>
              </div>

              {/* Main Nav Links */}
              <ul className="navbar-nav align-items-lg-center col-sm-12 gap-2 gap-xl-4 flex-column flex-lg-row">
                <li className="nav-item me-4">
                  <NavLink className="nav-link flux-link fw-medium" to="/" onClick={closeMenu}>Home</NavLink>
                </li>

                <li className="nav-item ms-lg-4 me-lg-3 dropdown flux-nav-item">
                  <NavLink className="nav-link flux-link fw-medium dropdown-toggle" to="#" data-bs-toggle="dropdown">About</NavLink>
                  <ul className="dropdown-menu flux-dropdown">
                    <li><Link className="dropdown-item" to="/about" onClick={closeMenu}>Vision & Mission</Link></li>
                  </ul>
                </li>

                <li className="nav-item ms-lg-4 me-lg-3 dropdown flux-nav-item">
                  <NavLink className="nav-link flux-link fw-medium dropdown-toggle" to="#" data-bs-toggle="dropdown">AICTE</NavLink>
                  <ul className="dropdown-menu flux-dropdown">
                    <li><Link className="dropdown-item" to="/aicte/mandatory-disclosure" onClick={closeMenu}>Mandatory Disclosure</Link></li>
                    <li><a className="dropdown-item" href="https://aicte.gov.in/">AICTE Feedback</a></li>
                    <li><Link className="dropdown-item" to="/aicte/collaboration" onClick={closeMenu}>AICTE Collaboration</Link></li>
                    <li><Link className="dropdown-item" to="/aicte/eoa-letter" onClick={closeMenu}>EOA Letter</Link></li>
                    <li><Link className="dropdown-item" to="/aicte/accreditation" onClick={closeMenu}>Accreditation</Link></li>
                  </ul>
                </li>

                <li className="nav-item ms-lg-4 me-lg-3 dropdown flux-nav-item">
                  <NavLink className="nav-link flux-link fw-medium dropdown-toggle" to="#" data-bs-toggle="dropdown">Academics</NavLink>
                  <ul className="dropdown-menu flux-dropdown">
                    <li><Link className="dropdown-item" to="/academics/programme" onClick={closeMenu}>Academics Programme</Link></li>
                    <li><Link className="dropdown-item" to="/academics/syllabus" onClick={closeMenu}>Syllabus</Link></li>
                    <li><Link className="dropdown-item" to="/academics/admission" onClick={closeMenu}>Admission</Link></li>
                    <li><Link className="dropdown-item" to="/academics/fee" onClick={closeMenu}>Fee Structure</Link></li>
                  </ul>
                </li>

                <li className="nav-item ms-lg-4 me-lg-3 dropdown flux-nav-item">
                  <NavLink className="nav-link flux-link fw-medium dropdown-toggle" to="#" data-bs-toggle="dropdown">Departments</NavLink>
                  <ul className="dropdown-menu flux-dropdown">
                    <li><Link className="dropdown-item" to="/departments/electronics" onClick={closeMenu}>Department of Electronics Engineering</Link></li>
                    <li><Link className="dropdown-item" to="/departments/computer-science" onClick={closeMenu}>Department of Computer Science</Link></li>
                    <li><Link className="dropdown-item" to="/departments/information-technology" onClick={closeMenu}>Department of Information Technology</Link></li>
                  </ul>
                </li>

                <li className="nav-item ms-lg-4 me-lg-3 dropdown flux-nav-item">
                  <NavLink className="nav-link flux-link fw-medium dropdown-toggle" to="#" data-bs-toggle="dropdown">Login</NavLink>
                  <ul className="dropdown-menu flux-dropdown">
                    <li><Link className="dropdown-item" to="/login-faculty" onClick={closeMenu}>Faculty</Link></li>
                    <li><Link className="dropdown-item" to="/login-mmit-admin" onClick={closeMenu}>Admin</Link></li>
                  </ul>
                </li>

                <li className="nav-item ms-lg-4 me-lg-3 dropdown flux-nav-item">
                  <NavLink className="nav-link flux-link fw-medium dropdown-toggle" to="#" data-bs-toggle="dropdown">Training & Placement</NavLink>
                  <ul className="dropdown-menu flux-dropdown">
                    <li><Link className="dropdown-item" to="/placement/placed-students" onClick={closeMenu}>Placed Students Detail</Link></li>
                    <li><Link className="dropdown-item" to="/placement/mass-placed" onClick={closeMenu}>Mass Placed Students Detail</Link></li>
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
      </div>
    </header>
  );
}

export default CommonMenu;
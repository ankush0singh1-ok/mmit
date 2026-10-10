import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../App.css';
import IndianClock from './indianclock';
import { Typewriter } from 'react-simple-typewriter';
const CommonMenu = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className={`flux-header-container ${isScrolled ? 'is-scrolled' : ''}`}>
      
      {/* Top Info Bar */}
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
            <div><IndianClock/></div>
          </div>
        </div>
      </div>

      {/* Brand Area */}
      <div className="brand-area pt-3 pb-1 px-4 d-flex justify-content-between align-items-center">
        <Link className="d-flex align-items-center gap-3 text-decoration-none" to="/" onClick={closeMenu}>
          <div className="flux-logo rounded-circle d-flex align-items-center justify-content-center">
            <img src="./images/logo-removebg-preview-120x117.png" alt="MMIT Logo" className='logo' />
          </div>

          <span className="brand-text text-dark fw-bold ms-2" style={{ fontSize: '22px', lineHeight: '1.2' }}>
             <Typewriter
          words={['MAHAMAYA POLYTECHNIC']}
          loop={1}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
            <br />
            <span className="text-warning" style={{ fontSize: '16px' }}>
               <Typewriter
          words={['OF I.T. HARIHARPUR GORAKHPUR']}
          loop={1}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        /></span>
          </span>
        </Link>

        <div className="d-none d-lg-flex align-items-center gap-4 bg-white px-4 py-2 rounded-pill shadow-sm">
          <img src="./images/digital-india.png" alt="Digital India" style={{ height: '45px', objectFit: 'contain' }} />
          <div style={{ width: '2px', height: '30px', backgroundColor: '#e0e0e0' }}></div>
          <img src="./images/swach-bharat.png" alt="Swachh Bharat" style={{ height: '45px', objectFit: 'contain' }} />
        </div>
      </div>

      {/* Navigation Links Area */}
      <div className="container-fluid px-2 px-lg-4 mt-2 mb-2">
        <nav className="navbar navbar-expand-lg flux-navbar w-100">
          <div className="flux-navbar-background"></div>

          <div className="container-fluid position-relative z-index-2 d-flex justify-content-between align-items-center">
            
            <button className="navbar-toggler border-0 flux-toggler shadow-none px-2 d-lg-none" type="button" onClick={toggleMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#ffffff" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
              </svg>
            </button>

            <div className="d-lg-none d-flex gap-2">
              <a href="https://bteup.ac.in/" target="_blank" rel="noreferrer" className="badge bg-primary text-light text-decoration-none px-2 py-1 shadow-sm">BTEUP</a>
              <a href="https://urise.up.gov.in/" target="_blank" rel="noreferrer" className="badge bg-info text-dark text-decoration-none px-2 py-1 shadow-sm">URISE</a>
            </div>

            <div className={`justify-content-center w-100 ${isOpen ? 'd-block mt-4' : 'd-none d-lg-flex'}`} id="fluxNav">
              
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

              <ul className="navbar-nav align-items-lg-center col-sm-12 gap-2 gap-xl-3 flex-column flex-lg-row">
                
                {/* 🟢 ALWAYS VISIBLE ON ALL SCREENS */}
                <li className="nav-item me-xl-2">
                  <NavLink className="nav-link flux-link fw-medium" to="/" onClick={closeMenu}>Home</NavLink>
                </li>
                <li className="nav-item mx-lg-1 dropdown flux-nav-item">
                  <NavLink className="nav-link flux-link fw-medium dropdown-toggle" to="#" data-bs-toggle="dropdown">About</NavLink>
                  <ul className="dropdown-menu flux-dropdown">
                    <li><Link className="dropdown-item" to="/about" onClick={closeMenu}>Vision & Mission</Link></li>
                  </ul>
                </li>
                <li className="nav-item mx-lg-1 dropdown flux-nav-item">
                  <NavLink className="nav-link flux-link fw-medium dropdown-toggle" to="#" data-bs-toggle="dropdown">AICTE</NavLink>
                  <ul className="dropdown-menu flux-dropdown">
                    <li><Link className="dropdown-item" to="/aicte/mandatory-disclosure" onClick={closeMenu}>Mandatory Disclosure</Link></li>
                    <li><a className="dropdown-item" href="https://aicte.gov.in/">AICTE Feedback</a></li>
                    <li><Link className="dropdown-item" to="/aicte/collaboration" onClick={closeMenu}>AICTE Collaboration</Link></li>
                    <li><Link className="dropdown-item" to="/aicte/eoa-letter" onClick={closeMenu}>EOA Letter</Link></li>
                    <li><Link className="dropdown-item" to="/aicte/accreditation" onClick={closeMenu}>Accreditation</Link></li>
                  </ul>
                </li>
                <li className="nav-item mx-lg-1 dropdown flux-nav-item">
                  <NavLink className="nav-link flux-link fw-medium dropdown-toggle" to="#" data-bs-toggle="dropdown">Academics</NavLink>
                  <ul className="dropdown-menu flux-dropdown">
                    <li><Link className="dropdown-item" to="/academics/programme" onClick={closeMenu}>Programme</Link></li>
                    <li><Link className="dropdown-item" to="/academics/syllabus" onClick={closeMenu}>Syllabus</Link></li>
                    <li><Link className="dropdown-item" to="/academics/admission" onClick={closeMenu}>Admission</Link></li>
                    <li><Link className="dropdown-item" to="/academics/fee" onClick={closeMenu}>Fee Structure</Link></li>
                  </ul>
                </li>

                {/* 🔴 COLLAPSIBLE LINKS: Shows on Mobile & Desktop(XL). Hides on Laptop(LG) to prevent wrapping. */}
                <li className="nav-item mx-lg-1 dropdown flux-nav-item d-lg-none d-xl-block">
                  <NavLink className="nav-link flux-link fw-medium dropdown-toggle" to="#" data-bs-toggle="dropdown">Departments</NavLink>
                  <ul className="dropdown-menu flux-dropdown">
                    <li><Link className="dropdown-item" to="/departments/electronics" onClick={closeMenu}>Electronics</Link></li>
                    <li><Link className="dropdown-item" to="/departments/computer-science" onClick={closeMenu}>Computer Science</Link></li>
                    <li><Link className="dropdown-item" to="/departments/information-technology" onClick={closeMenu}>Information Technology</Link></li>
                  </ul>
                </li>
                <li className="nav-item mx-lg-1 dropdown flux-nav-item d-lg-none d-xl-block">
                  <NavLink className="nav-link flux-link fw-medium dropdown-toggle" to="#" data-bs-toggle="dropdown">Login</NavLink>
                  <ul className="dropdown-menu flux-dropdown">
                    <li><Link className="dropdown-item" to="/login-faculty" onClick={closeMenu}>Faculty</Link></li>
                    <li><Link className="dropdown-item" to="/login-mmit-admin" onClick={closeMenu}>Admin</Link></li>
                  </ul>
                </li>
                <li className="nav-item mx-lg-1 dropdown flux-nav-item d-lg-none d-xl-block">
                  <NavLink className="nav-link flux-link fw-medium dropdown-toggle" to="#" data-bs-toggle="dropdown">Placement</NavLink>
                  <ul className="dropdown-menu flux-dropdown">
                    <li><Link className="dropdown-item" to="/placement/placed-students" onClick={closeMenu}>Placed Students</Link></li>
                    <li><Link className="dropdown-item" to="/placement/mass-placed" onClick={closeMenu}>Mass Placed</Link></li>
                  </ul>
                </li>
                <li className="nav-item mx-lg-1 d-lg-none d-xl-block">
                  <NavLink className="nav-link flux-link fw-medium" to="/gallery" onClick={closeMenu}>Gallery</NavLink>
                </li>
                <li className="nav-item mx-lg-1 d-lg-none d-xl-block">
                  <NavLink className="nav-link flux-link fw-medium" to="/contact-us" onClick={closeMenu}>Contact Us</NavLink>
                </li>

                {/* 🟡 THE "MORE" MENU: Appears ONLY on Laptop(LG) screens to absorb the overflow. */}
                <li className="nav-item mx-lg-1 dropdown flux-nav-item d-none d-lg-block d-xl-none">
                  <NavLink className="nav-link flux-link fw-medium dropdown-toggle" to="#" data-bs-toggle="dropdown">More</NavLink>
                  <ul className="dropdown-menu flux-dropdown" style={{ minWidth: '220px' }}>
                    
                    <li><h6 className="dropdown-header text-warning fw-bold mb-0">Departments</h6></li>
                    <li><Link className="dropdown-item py-1" to="/departments/electronics" onClick={closeMenu}>Electronics Engineering</Link></li>
                    <li><Link className="dropdown-item py-1" to="/departments/computer-science" onClick={closeMenu}>Computer Science</Link></li>
                    <li><Link className="dropdown-item py-1" to="/departments/information-technology" onClick={closeMenu}>Information Technology</Link></li>
                    
                    <li><hr className="dropdown-divider border-secondary my-2" /></li>
                    
                    <li><h6 className="dropdown-header text-warning fw-bold mb-0">Login</h6></li>
                    <li><Link className="dropdown-item py-1" to="/login-faculty" onClick={closeMenu}>Faculty Login</Link></li>
                    <li><Link className="dropdown-item py-1" to="/login-mmit-admin" onClick={closeMenu}>Admin Login</Link></li>
                    
                    <li><hr className="dropdown-divider border-secondary my-2" /></li>
                    
                    <li><h6 className="dropdown-header text-warning fw-bold mb-0">Placement</h6></li>
                    <li><Link className="dropdown-item py-1" to="/placement/placed-students" onClick={closeMenu}>Placed Students Detail</Link></li>
                    <li><Link className="dropdown-item py-1" to="/placement/mass-placed" onClick={closeMenu}>Mass Placed Detail</Link></li>

                    <li><hr className="dropdown-divider border-secondary my-2" /></li>

                    <li><Link className="dropdown-item fw-bold" to="/gallery" onClick={closeMenu}>Gallery</Link></li>
                    <li><Link className="dropdown-item fw-bold" to="/contact-us" onClick={closeMenu}>Contact Us</Link></li>
                  </ul>
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
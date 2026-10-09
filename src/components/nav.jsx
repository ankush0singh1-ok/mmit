import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../App.css';

const CommonMenu = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* 
        UPDATED CSS: Uses a dark glass effect to match your navbar 
        and forces all text inside the mobile menu to be white for visibility.
      */}
      <style>
        {`
          @media (max-width: 991px) {
            #fluxNav {
              background: rgba(33, 37, 41, 0.95);
              backdrop-filter: blur(25px);
              -webkit-backdrop-filter: blur(25px);
              border-radius: 1rem;
              padding: 1.5rem;
              margin-top: 1rem;
              border: 1px solid rgba(255, 255, 255, 0.1);
              box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
            }
            /* Force links to be white when collapse is open */
            #fluxNav .nav-link, 
            #fluxNav .dropdown-item, 
            #fluxNav .text-dark,
            #fluxNav h6 {
              color: #ffffff !important;
            }
            #fluxNav .nav-link:hover, 
            #fluxNav .dropdown-item:hover {
              color: #ffc107 !important;
              background-color: transparent !important;
            }
          }
        `}
      </style>

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
              <div className="d-flex gap-2">
                <button className="btn btn-warning btn-sm py-0 px-3 fw-bold rounded-pill" style={{ fontSize: '10px' }}>GRIEVANCE</button>
              </div>
            </div>
          </div>
        </div>

        {/* Brand Area */}
        <div className="brand-area pt-3 pb-1 px-4 d-flex justify-content-between align-items-center">
          <Link className="d-flex align-items-center gap-3 text-decoration-none" to="/">
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

        {/* Navigation Links Area */}
        <div className="container-fluid px-2 px-lg-4 mt-2 mb-2">
          <nav className="navbar navbar-expand-lg flux-navbar w-100">
            <div className="flux-navbar-background"></div>

            {/* Changed to flex layout to align toggler and mobile badges side-by-side */}
            <div className="container-fluid position-relative z-index-2 d-flex justify-content-between align-items-center">
              
              <button className="navbar-toggler border-0 flux-toggler shadow-none px-2" type="button" data-bs-toggle="collapse" data-bs-target="#fluxNav">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#ffffff" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>
              </button>

              {/* NEW: Quick Badges on the dark bar for mobile only */}
              <div className="d-lg-none d-flex gap-2">
                <a href="https://bteup.ac.in/" target="_blank" rel="noreferrer" className="badge bg-primary text-light text-decoration-none px-2 py-1 shadow-sm">BTEUP</a>
                <a href="https://urise.up.gov.in/" target="_blank" rel="noreferrer" className="badge bg-info text-dark text-decoration-none px-2 py-1 shadow-sm">URISE</a>
              </div>

              <div className="collapse navbar-collapse justify-content-center mt-3 mt-lg-0" id="fluxNav">
                
                {/* Mobile Dropdown Contact & Remaining Links */}
                <div className="d-lg-none w-100 mb-3 pb-3 border-bottom border-secondary text-center">
                  <div className="d-flex flex-column align-items-center gap-2 mb-4 mt-2">
                    <a href="mailto:mmitgorakhpur@gmail.com" className="fw-medium text-decoration-none small">
                      <i className="bi bi-envelope text-warning me-2"></i>mmitgorakhpur@gmail.com
                    </a>
                    <button className="btn btn-warning btn-sm py-1 px-4 fw-bold rounded-pill shadow-sm">GRIEVANCE</button>
                  </div>
                  
                  <h6 className="fw-bold mb-3 small text-uppercase letter-spacing-1">Other Important Links</h6>
                  <div className="d-flex flex-wrap justify-content-center gap-2 px-2">
                    <a href="https://up.gov.in/en" target="_blank" rel="noreferrer" className="badge bg-success text-light text-decoration-none p-2 shadow-sm transition-hover">UP GOVT</a>
                    <a href="https://www.aicte.gov.in/" target="_blank" rel="noreferrer" className="badge bg-warning text-dark text-decoration-none p-2 shadow-sm transition-hover">AICTE</a>
                    <a href="https://jeecup.admissions.nic.in/" target="_blank" rel="noreferrer" className="badge bg-danger text-light text-decoration-none p-2 shadow-sm transition-hover">JEECUP</a>
                    <a href="http://upted.gov.in/" target="_blank" rel="noreferrer" className="badge bg-secondary text-light text-decoration-none p-2 shadow-sm transition-hover">UP TED</a>
                  </div>
                </div>

                <ul className="navbar-nav align-items-lg-center col-sm-12 gap-2 gap-xl-4">
                  <li className="nav-item me-4">
                    <NavLink className="nav-link flux-link fw-medium" to="/">Home</NavLink>
                  </li>

                  <li className="nav-item ms-lg-4 me-lg-3 dropdown">
                    <NavLink className="nav-link flux-link fw-medium dropdown-toggle" to="#" data-bs-toggle="dropdown">About</NavLink>
                    <ul className="dropdown-menu flux-dropdown">
                      <li><Link className="dropdown-item" to="/about">Vision & Mission</Link></li>
                    </ul>
                  </li>

                  <li className="nav-item ms-lg-4 me-lg-3 dropdown">
                    <NavLink className="nav-link flux-link fw-medium dropdown-toggle" to="#" data-bs-toggle="dropdown">AICTE</NavLink>
                    <ul className="dropdown-menu flux-dropdown">
                      <li><Link className="dropdown-item" to="/aicte/mandatory-disclosure">Mandatory Disclosure</Link></li>
                      <li><a className="dropdown-item" href="https://aicte.gov.in/">AICTE Feedback</a></li>
                      <li><Link className="dropdown-item" to="/aicte/collaboration">AICTE Collaboration</Link></li>
                      <li><Link className="dropdown-item" to="/aicte/eoa-letter">EOA Letter</Link></li>
                      <li><Link className="dropdown-item" to="/aicte/accreditation">Accreditation</Link></li>
                    </ul>
                  </li>

                  <li className="nav-item ms-lg-4 me-lg-3 dropdown">
                    <NavLink className="nav-link flux-link fw-medium dropdown-toggle" to="#" data-bs-toggle="dropdown">Academics</NavLink>
                    <ul className="dropdown-menu flux-dropdown">
                      <li><Link className="dropdown-item" to="/academics/programme">Academics Programme</Link></li>
                      <li><Link className="dropdown-item" to="/academics/syllabus">Syllabus</Link></li>
                      <li><Link className="dropdown-item" to="/academics/admission">Admission</Link></li>
                      <li><Link className="dropdown-item" to="/academics/fee">Fee Structure</Link></li>
                    </ul>
                  </li>

                  <li className="nav-item ms-lg-4 me-lg-3 dropdown">
                    <NavLink className="nav-link flux-link fw-medium dropdown-toggle" to="#" data-bs-toggle="dropdown">Departments</NavLink>
                    <ul className="dropdown-menu flux-dropdown">
                      <li><Link className="dropdown-item" to="/departments/electronics">Department of Electronics Engineering</Link></li>
                      <li><Link className="dropdown-item" to="/departments/computer-science">Department of Computer Science</Link></li>
                      <li><Link className="dropdown-item" to="/departments/information-technology">Department of Information Technology</Link></li>
                    </ul>
                  </li>

                  <li className="nav-item ms-lg-4 me-lg-3 dropdown">
                    <NavLink className="nav-link flux-link fw-medium dropdown-toggle" to="#" data-bs-toggle="dropdown">Login</NavLink>
                    <ul className="dropdown-menu flux-dropdown">
                      <li><Link className="dropdown-item" to="/login-faculty">Faculty</Link></li>
                      <li><Link className="dropdown-item" to="/login-mmit-admin">Admin</Link></li>
                    </ul>
                  </li>

                  <li className="nav-item ms-lg-4 me-lg-3 dropdown">
                    <NavLink className="nav-link flux-link fw-medium dropdown-toggle" to="#" data-bs-toggle="dropdown">Training & Placement</NavLink>
                    <ul className="dropdown-menu flux-dropdown">
                      <li><Link className="dropdown-item" to="/placement/placed-students">Placed Students Detail</Link></li>
                      <li><Link className="dropdown-item" to="/placement/mass-placed">Mass Placed Students Detail</Link></li>
                    </ul>
                  </li>

                  <li className="nav-item me-4">
                    <NavLink className="nav-link flux-link fw-medium" to="/gallery">Gallery</NavLink>
                  </li>

                  <li className="nav-item me-4">
                    <NavLink className="nav-link flux-link fw-medium" to="/contact-us">Contact Us</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default CommonMenu;
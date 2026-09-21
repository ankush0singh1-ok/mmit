import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../App.css';

const CommonMenu = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll event listener
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
    <header className={`flux-header-container ${isScrolled ? 'is-scrolled' : ''}`}>
      
      {/* 1. Top Info Bar (Fades out on scroll) */}
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
      

      {/* 2. Brand Area (Logo, Title, and Government Logos) */}
      <div className="brand-area pt-3 pb-1 px-4 d-flex justify-content-between align-items-center">
        
        {/* Left Side: College Logo & Name */}
        <Link className="d-flex align-items-center gap-3 text-decoration-none" to="/">
          <div className="flux-logo rounded-circle d-flex align-items-center justify-content-center">
            <img src="./images/logo-removebg-preview-120x117.png" alt="MMIT Logo" className='logo' />
          </div>
          <span className="brand-text text-dark fw-bold ms-2" style={{ fontSize: '22px', lineHeight: '1.2' }}>
            MAHAMAYA POLYTECHNIC <br/>
            <span className="text-warning" style={{ fontSize: '16px' }}> OF IT HARIHARPUR</span>
          </span>
        </Link>

        {/* Right Side: Digital India & Swachh Bharat Logos */}
        {/* Hidden on mobile (d-none) and visible on large screens (d-lg-flex) */}
        <div className="d-none d-lg-flex align-items-center gap-4 bg-white px-4 py-2 rounded-pill shadow-sm">
          <img 
            src="./images/digital-india.png" 
            alt="Digital India" 
            style={{ height: '45px', objectFit: 'contain' }} 
          />
          
          {/* A small vertical divider line between the two logos */}
          <div style={{ width: '2px', height: '30px', backgroundColor: '#e0e0e0' }}></div>
          
          <img 
            src="./images/swach-bharat.png" 
            alt="Swachh Bharat" 
            style={{ height: '45px', objectFit: 'contain' }} 
          />
        </div>
        
      </div>

      {/* 3. Navigation Links Area */}
      <div className="container-fluid px-2 px-lg-4 mt-2 mb-2">
        <nav className="navbar navbar-expand-lg flux-navbar w-100">
          
          {/* THE SEPARATE BACKGROUND LAYER (Contains the glass effect and animation) */}
          <div className="flux-navbar-background"></div>

          <div className="container-fluid position-relative z-index-2">
            
            {/* Mobile Menu Toggle */}
            <button className="navbar-toggler border-0 flux-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#fluxNav">
              <span className="navbar-toggler-icon" style={{ filter: 'invert(1)' }} />
            </button>

            {/* Links Area */}
            <div className="collapse navbar-collapse justify-content-center" id="fluxNav">
              <ul className="navbar-nav align-items-lg-center col-sm-12 gap-2 gap-xl-4 text-danger">
                <li className="nav-item text-danger me-4">
                  <NavLink className="nav-link flux-link" to="/">Home</NavLink>
                </li>
                
                <li className="nav-item text-danger ms-4 me-3 dropdown">
                  <NavLink className="nav-link flux-link dropdown-toggle" to="#" data-bs-toggle="dropdown">About</NavLink>
                  <ul className="dropdown-menu flux-dropdown">
                    <li><Link className="dropdown-item" to="/about" >Vision & Mission</Link></li>
                  </ul>
                </li>

                <li className="nav-item text-danger ms-4 me-3 dropdown">
                  <NavLink className="nav-link flux-link dropdown-toggle" to="#" data-bs-toggle="dropdown">AICTE</NavLink>
                  <ul className="dropdown-menu flux-dropdown">
                    <li><Link className="dropdown-item" to="/aicte/mandatory-disclosure">Mandatory Disclosure</Link></li>
                    <li><a className="dropdown-item" href="https://aicte.gov.in/">AICTE Feedback</a></li>
                    <li><Link className="dropdown-item" to="/aicte/collaboration">AICTE Collaboration</Link></li>
                    <li><Link className="dropdown-item" to="/aicte/eoa-letter">EOA Letter</Link></li>
                    <li><Link className="dropdown-item" to="/aicte/accreditation">Accreditation</Link></li>
                  </ul>
                </li>

                <li className="nav-item text-danger ms-4 me-3 dropdown">
                  <NavLink className="nav-link flux-link dropdown-toggle" to="#" data-bs-toggle="dropdown">Academics</NavLink>
                  <ul className="dropdown-menu flux-dropdown">
                    <li><Link className="dropdown-item" to="/academics/programme">Academics Programme</Link></li>
                    <li><Link className="dropdown-item" to="/academics/syllabus">Syllabus</Link></li>
                    <li><Link className="dropdown-item" to="/academics/admission">Admission</Link></li>
                    <li><Link className="dropdown-item" to="/academics/fee-structure">Fee Structure</Link></li>
                  </ul>
                </li>

                <li className="nav-item text-danger ms-4 me-3 dropdown">
                  <NavLink className="nav-link flux-link dropdown-toggle" to="#" data-bs-toggle="dropdown">Departments</NavLink>
                  <ul className="dropdown-menu flux-dropdown">
                    <li><Link className="dropdown-item" to="/departments/electronics">Department of Electronics Engineering</Link></li>
                    <li><Link className="dropdown-item" to="/departments/computer-science">Department of Computer Science</Link></li>
                    <li><Link className="dropdown-item" to="/departments/information-technology">Department of Information Technology</Link></li>
                    <li><Link className="dropdown-item" to="/departments/applied-science">Department of Applied Science & Humanity</Link></li>
                    <li><Link className="dropdown-item" to="/departments/administrative-staff">Department of Administrative Staff</Link></li>
                  </ul>
                </li>

                <li className="nav-item text-danger ms-4 me-3 dropdown">
                  <NavLink className="nav-link flux-link dropdown-toggle" to="#" data-bs-toggle="dropdown">Study Materials</NavLink>
                  <ul className="dropdown-menu flux-dropdown">
                    <li><Link className="dropdown-item" to="/study-materials/e-books">E-Books</Link></li>
                  </ul>
                </li>
                
                <li className="nav-item text-danger ms-4 me-3 dropdown">
                  <NavLink className="nav-link flux-link dropdown-toggle" to="#" data-bs-toggle="dropdown">Training & Placement</NavLink>
                  <ul className="dropdown-menu flux-dropdown">
                    <li><Link className="dropdown-item" to="/placement/placed-students">Placed Students Detail</Link></li>
                    <li><Link className="dropdown-item" to="/placement/mass-placed">Mass Placed Students Detail</Link></li>
                  </ul>
                </li>

                <li className="nav-item text-danger ms-4 me-3 dropdown">
                  <NavLink className="nav-link flux-link dropdown-toggle" to="#" data-bs-toggle="dropdown">Photogallery</NavLink>
                  <ul className="dropdown-menu flux-dropdown">
                    <li><Link className="dropdown-item" to="/gallery/social-emotional-learning">Social Emotional Learning</Link></li>
                  </ul>
                </li>

                <li className="nav-item text-danger ms-4 me-3 dropdown">
                  <NavLink className="nav-link flux-link dropdown-toggle" to="#" data-bs-toggle="dropdown">Contact Us</NavLink>
                  <ul className="dropdown-menu flux-dropdown">
                    <li><Link className="dropdown-item" to="/contact/address">Address</Link></li>
                    <li><Link className="dropdown-item" to="/contact/map">Map & Location</Link></li>
                    <li><Link className="dropdown-item" to="/contact/reach">How to Reach</Link></li>
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
import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../App.css';
import IndianClock from './indianclock';
import { Typewriter } from 'react-simple-typewriter';

const CommonMenu = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 120);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="flux-header-top">
        <div className="flux-top-bar">
          <div className="container-fluid px-4">
            <div className="d-flex justify-content-between align-items-center py-2 text-dark" style={{ fontSize: '12px' }}>
              <div className="d-flex gap-3">
                <span>📍 Hariharpur, Gorakhpur</span>
                <a href="mailto:mmithgorakhpur@gmail.com" className="text-dark text-decoration-none flux-glow-link">
                  mmithgorakhpur@gmail.com
                </a>
              </div>
              <div><IndianClock /></div>
            </div>
          </div>
        </div>

        <div className="brand-area pt-3 pb-1 px-4 d-flex justify-content-between align-items-center">
          <Link className="d-flex align-items-center gap-3 text-decoration-none" to="/">
            <div className="flux-logo rounded-circle d-flex align-items-center justify-content-center">
              <img src="./images/logo-removebg-preview-120x117.png" alt="MMIT Logo" className="logo" />
            </div>

            <span className="brand-text text-dark fw-bold ms-2" style={{ fontSize: '22px', lineHeight: '1.2' }}>
              <Typewriter
                words={['MAHAMAYA POLYTECHNIC']}
                loop={1}
                cursor=""
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
              <br />
              <span className="text-warning" style={{ fontSize: '16px' }}>
                <Typewriter
                  words={['OF I.T. HARIHARPUR GORAKHPUR']}
                  loop={1}
                  cursor=""
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </span>
          </Link>

          <div className="d-none d-lg-flex align-items-center gap-4 bg-white px-4 py-2 rounded-pill shadow-sm">
            <img src="./images/digital-india.png" alt="Digital India" style={{ height: '45px', objectFit: 'contain' }} />
            <div style={{ width: '2px', height: '30px', backgroundColor: '#e0e0e0' }}></div>
            <img src="./images/swach-bharat.png" alt="Swachh Bharat" style={{ height: '45px', objectFit: 'contain' }} />
          </div>
        </div>
      </div>

      <div className={`flux-nav-sticky-wrapper container-fluid px-2 px-lg-4 ${isScrolled ? 'is-scrolled' : ''}`}>
        <nav className="navbar navbar-expand flux-navbar w-100">
          <div className="flux-navbar-background"></div>

          <div className="container-fluid position-relative z-index-2 justify-content-center">
            <ul className="navbar-nav flux-no-collapse-nav">
              <li className="nav-item">
                <NavLink className="nav-link flux-link fw-medium" to="/">Home</NavLink>
              </li>

              <li className="nav-item dropdown flux-nav-item">
                <NavLink className="nav-link flux-link fw-medium dropdown-toggle" to="#" data-bs-toggle="dropdown">About</NavLink>
                <ul className="dropdown-menu flux-dropdown">
                  <li><Link className="dropdown-item" to="/about">Vision & Mission</Link></li>
                </ul>
              </li>

              <li className="nav-item dropdown flux-nav-item">
                <NavLink className="nav-link flux-link fw-medium dropdown-toggle" to="#" data-bs-toggle="dropdown">AICTE</NavLink>
                <ul className="dropdown-menu flux-dropdown">
                  <li><Link className="dropdown-item" to="/aicte/mandatory-disclosure">Mandatory Disclosure</Link></li>
                  <li><a className="dropdown-item" href="https://aicte.gov.in/">AICTE Feedback</a></li>
                  <li><Link className="dropdown-item" to="/aicte/collaboration">AICTE Collaboration</Link></li>
                  <li><Link className="dropdown-item" to="/aicte/eoa-letter">EOA Letter</Link></li>
                  <li><Link className="dropdown-item" to="/aicte/accreditation">Accreditation</Link></li>
                </ul>
              </li>

              <li className="nav-item dropdown flux-nav-item">
                <NavLink className="nav-link flux-link fw-medium dropdown-toggle" to="#" data-bs-toggle="dropdown">Academics</NavLink>
                <ul className="dropdown-menu flux-dropdown">
                  <li><Link className="dropdown-item" to="/academics/programme">Programme</Link></li>
                  <li><Link className="dropdown-item" to="/academics/syllabus">Syllabus</Link></li>
                  <li><Link className="dropdown-item" to="/academics/admission">Admission</Link></li>
                  <li><Link className="dropdown-item" to="/academics/fee">Fee Structure</Link></li>
                </ul>
              </li>

              <li className="nav-item dropdown flux-nav-item">
                <NavLink className="nav-link flux-link fw-medium dropdown-toggle" to="#" data-bs-toggle="dropdown">Departments</NavLink>
                <ul className="dropdown-menu flux-dropdown">
                  <li><Link className="dropdown-item" to="/departments/electronics">Electronics</Link></li>
                  <li><Link className="dropdown-item" to="/departments/computer-science">Computer Science</Link></li>
                  <li><Link className="dropdown-item" to="/departments/information-technology">Information Technology</Link></li>
                </ul>
              </li>

              <li className="nav-item dropdown flux-nav-item">
                <NavLink className="nav-link flux-link fw-medium dropdown-toggle" to="#" data-bs-toggle="dropdown">Login</NavLink>
                <ul className="dropdown-menu flux-dropdown">
                  <li><Link className="dropdown-item" to="/login-faculty">Faculty</Link></li>
                  <li><Link className="dropdown-item" to="/login-mmit-admin">Admin</Link></li>
                </ul>
              </li>

              <li className="nav-item dropdown flux-nav-item">
                <NavLink className="nav-link flux-link fw-medium dropdown-toggle" to="#" data-bs-toggle="dropdown">Placement</NavLink>
                <ul className="dropdown-menu flux-dropdown">
                  <li><Link className="dropdown-item" to="/placement/placed-students">Placed Students</Link></li>
                  <li><Link className="dropdown-item" to="/placement/mass-placed">Mass Placed</Link></li>
                </ul>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link flux-link fw-medium" to="/gallery">Gallery</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link flux-link fw-medium" to="/contact-us">Contact Us</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default CommonMenu;

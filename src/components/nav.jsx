import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../App.css'; 

const CommonMenu = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Detects when the user scrolls past the top logo area (approx 120px)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 120);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style>
        {`
          /* Custom Flexbox Header */
          .mmit-header {
            width: 100%;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #ffffff;
          }
          
          .mmit-top-bar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0.5rem 1.5rem;
            background-color: #f8f9fa;
            font-size: 0.8rem;
            color: #333;
            flex-wrap: wrap;
            gap: 10px;
          }

          .mmit-brand-area {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1.5rem 2rem;
            background-color: #ffffff;
            flex-wrap: wrap;
            gap: 1rem;
          }

          .mmit-logo-group {
            display: flex;
            align-items: center;
            gap: 1rem;
            text-decoration: none;
          }

          .mmit-logo-text {
            color: #2b2e32;
            font-weight: 800;
            font-size: 1.4rem;
            line-height: 1.2;
          }

          /* Sticky Navigation Box */
          .mmit-nav-container {
            position: sticky;
            top: 0;
            z-index: 1050;
            background-color: rgba(43, 46, 50, 0.98);
            margin: 0 1rem 1rem 1rem;
            border-radius: 8px;
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }

          /* STICKY SCROLL STATE - Glassmorphism Blur Effect */
          .mmit-nav-container.scrolled {
            margin: 0; /* Stretches to edge */
            border-radius: 0;
            background-color: rgba(30, 33, 37, 0.75); /* More transparent for blur */
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          }

          /* Indian Flag Gradient Line */
          .tiranga-bar {
            height: 4px;
            width: 100%;
            background: linear-gradient(90deg, #FF9933 0%, #FFFFFF 50%, #138808 100%);
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
            transition: all 0.4s ease;
          }

          .mmit-nav-container.scrolled .tiranga-bar {
            border-radius: 0; /* Removes curves when snapped to top */
          }

          /* Pure Flexbox Wrapping List */
          .mmit-nav-content {
            padding: 1rem;
          }

          .mmit-nav-list {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            gap: 1.5rem;
            list-style: none;
            margin: 0;
            padding: 0;
          }

          .mmit-nav-item {
            position: relative;
          }

          .mmit-nav-link {
            color: #ffffff;
            text-decoration: none;
            font-weight: 600;
            font-size: 1rem;
            padding: 0.5rem 0;
            transition: color 0.2s ease-in-out;
            cursor: pointer;
            white-space: nowrap;
          }

          /* Hover Saffron Theme */
          .mmit-nav-link:hover, 
          .mmit-nav-link.active {
            color: #FF9933; 
          }

          /* Pure CSS Hover Dropdowns */
          .mmit-dropdown-menu {
            display: none;
            position: absolute;
            top: 100%;
            left: 50%;
            transform: translateX(-50%);
            background-color: rgba(255, 255, 255, 0.98);
            backdrop-filter: blur(10px);
            min-width: 230px;
            border-radius: 6px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.15);
            z-index: 1000;
            padding: 0.5rem 0;
            list-style: none;
            margin-top: 0.5rem;
            border-top: 3px solid #000080; /* Ashoka Chakra Navy Accent */
          }

          .mmit-dropdown-menu::before {
            content: "";
            position: absolute;
            top: -9px;
            left: 50%;
            transform: translateX(-50%);
            border-width: 0 6px 6px 6px;
            border-style: solid;
            border-color: transparent transparent #000080 transparent;
          }

          .mmit-nav-item:hover .mmit-dropdown-menu {
            display: block;
            animation: fadeIn 0.2s ease-in;
          }

          @keyframes fadeIn {
            from { opacity: 0; transform: translate(-50%, 10px); }
            to { opacity: 1; transform: translate(-50%, 0); }
          }

          .mmit-dropdown-item {
            display: block;
            padding: 0.7rem 1.2rem;
            color: #2b2e32;
            text-decoration: none;
            font-size: 0.9rem;
            font-weight: 600;
            transition: all 0.2s;
          }

          /* Hover Green Theme */
          .mmit-dropdown-item:hover {
            background-color: #f0fdf4;
            color: #138808; 
            padding-left: 1.5rem; /* Slight indent on hover */
          }

          /* Mobile Adjustments */
          @media (max-width: 768px) {
            .mmit-brand-area {
              justify-content: center;
              text-align: center;
            }
            .mmit-top-bar {
              justify-content: center;
            }
            .mmit-nav-list {
              gap: 1rem;
            }
            .mmit-nav-link {
              font-size: 0.9rem;
            }
          }
        `}
      </style>

      <header className="mmit-header">
        
        {/* Top Info Bar */}
        <div className="mmit-top-bar">
          <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
            <span>📍 Hariharpur, Gorakhpur</span>
            <span style={{ color: '#ccc' }}>|</span>
            <a href="mailto:mmitgorakhpur@gmail.com" style={{ color: '#333', textDecoration: 'none', fontWeight: '500' }}>
              mmitgorakhpur@gmail.com
            </a>
          </div>
          <div>
            <button style={{ backgroundColor: '#FF9933', color: '#fff', border: 'none', padding: '4px 14px', borderRadius: '20px', fontWeight: 'bold', fontSize: '11px', cursor: 'pointer', boxShadow: '0 2px 5px rgba(255,153,51,0.4)' }}>
              GRIEVANCE
            </button>
          </div>
        </div>

        {/* Brand Area */}
        <div className="mmit-brand-area">
          <Link className="mmit-logo-group" to="/">
            <img src="./images/logo-removebg-preview-120x117.png" alt="MMIT Logo" style={{ width: '65px', height: 'auto' }} />
            <div>
              <div className="mmit-logo-text">MAHAMAYA POLYTECHNIC</div>
              <div style={{ color: '#138808', fontSize: '1.05rem', fontWeight: '700' }}>OF IT HARIHARPUR</div>
            </div>
          </Link>

          {/* Govt Badges */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }} className="d-none d-lg-flex">
            <img src="./images/digital-india.png" alt="Digital India" style={{ height: '40px' }} />
            <div style={{ width: '2px', height: '30px', backgroundColor: '#e0e0e0' }}></div>
            <img src="./images/swach-bharat.png" alt="Swachh Bharat" style={{ height: '40px' }} />
          </div>
        </div>

        {/* The Sticky Navigation Box */}
        <div className={`mmit-nav-container ${isScrolled ? 'scrolled' : ''}`}>
          {/* Saffron, White, Green Line */}
          <div className="tiranga-bar"></div>
          
          <div className="mmit-nav-content">
            <ul className="mmit-nav-list">
              
              <li className="mmit-nav-item">
                <NavLink className="mmit-nav-link" to="/">Home</NavLink>
              </li>

              <li className="mmit-nav-item">
                <span className="mmit-nav-link">About ▼</span>
                <ul className="mmit-dropdown-menu">
                  <li><Link className="mmit-dropdown-item" to="/about">Vision & Mission</Link></li>
                </ul>
              </li>

              <li className="mmit-nav-item">
                <span className="mmit-nav-link">AICTE ▼</span>
                <ul className="mmit-dropdown-menu">
                  <li><Link className="mmit-dropdown-item" to="/aicte/mandatory-disclosure">Mandatory Disclosure</Link></li>
                  <li><a className="mmit-dropdown-item" href="https://aicte.gov.in/">AICTE Feedback</a></li>
                  <li><Link className="mmit-dropdown-item" to="/aicte/collaboration">AICTE Collaboration</Link></li>
                  <li><Link className="mmit-dropdown-item" to="/aicte/eoa-letter">EOA Letter</Link></li>
                  <li><Link className="mmit-dropdown-item" to="/aicte/accreditation">Accreditation</Link></li>
                </ul>
              </li>

              <li className="mmit-nav-item">
                <span className="mmit-nav-link">Academics ▼</span>
                <ul className="mmit-dropdown-menu">
                  <li><Link className="mmit-dropdown-item" to="/academics/programme">Academics Programme</Link></li>
                  <li><Link className="mmit-dropdown-item" to="/academics/syllabus">Syllabus</Link></li>
                  <li><Link className="mmit-dropdown-item" to="/academics/admission">Admission</Link></li>
                  <li><Link className="mmit-dropdown-item" to="/academics/fee">Fee Structure</Link></li>
                </ul>
              </li>

              <li className="mmit-nav-item">
                <span className="mmit-nav-link">Departments ▼</span>
                <ul className="mmit-dropdown-menu">
                  <li><Link className="mmit-dropdown-item" to="/departments/electronics">Electronics Engineering</Link></li>
                  <li><Link className="mmit-dropdown-item" to="/departments/computer-science">Computer Science</Link></li>
                  <li><Link className="mmit-dropdown-item" to="/departments/information-technology">Information Technology</Link></li>
                </ul>
              </li>

              <li className="mmit-nav-item">
                <span className="mmit-nav-link">Login ▼</span>
                <ul className="mmit-dropdown-menu">
                  <li><Link className="mmit-dropdown-item" to="/login-faculty">Faculty Login</Link></li>
                  <li><Link className="mmit-dropdown-item" to="/login-mmit-admin">Admin Login</Link></li>
                </ul>
              </li>

              <li className="mmit-nav-item">
                <span className="mmit-nav-link">Placement ▼</span>
                <ul className="mmit-dropdown-menu">
                  <li><Link className="mmit-dropdown-item" to="/placement/placed-students">Placed Students Detail</Link></li>
                  <li><Link className="mmit-dropdown-item" to="/placement/mass-placed">Mass Placed Detail</Link></li>
                </ul>
              </li>

              <li className="mmit-nav-item">
                <NavLink className="mmit-nav-link" to="/gallery">Gallery</NavLink>
              </li>

              <li className="mmit-nav-item">
                <NavLink className="mmit-nav-link" to="/contact-us">Contact Us</NavLink>
              </li>

            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default CommonMenu;
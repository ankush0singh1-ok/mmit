import React, { useState, useEffect } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  // 1. Dynamic Stats State
  const [stats, setStats] = useState({ visitors: 12717, lastUpdated: null });

  // 2. Fetch Live Stats from Backend
  useEffect(() => {
    const fetchStats = async () => {
      try {
<<<<<<< HEAD
        const response = await fetch('http://localhost:5000/api/stats');
=======
        const response = await fetch('https://api-pl5i.onrender.com/api/stats');
>>>>>>> 193eab8 (new)
        if (response.ok) {
          const data = await response.json();
          setStats(data);
        }
      } catch (error) {
        console.error("Failed to fetch site stats:", error);
      }
    };
    fetchStats();
  }, []);

  // 3. Date Formatter
  const formatLastUpdated = (dateString) => {
    if (!dateString) return 'July 18th, 2026';
    return new Date(dateString).toLocaleDateString('en-US', { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    });
  };

  // Reusable Link Icon Component based on the reference image
  const LinkIcon = () => (
    <svg className="footer-icon me-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width: '16px', height: '16px'}}>
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
    </svg>
  );

  return (
    <footer className="footer-bg pt-5 pb-3 bg-dark text-white-50">
      <div className="container-fluid px-4 px-md-5">
        <div className="row g-4 mb-4">
          
          {/* Column 1: Courses */}
          <div className="col-12 col-sm-6 col-lg-3">
            <h5 className="footer-heading mb-4 text-white">Courses</h5>
            <ul className="list-unstyled footer-list">
              <li className="mb-2"><Link to="/departments/electronics" className="text-white-50 text-decoration-none"><LinkIcon />Electronics Engineering</Link></li>
              <li className="mb-2"><Link to="/departments/computer-science" className="text-white-50 text-decoration-none"><LinkIcon />Computer Science</Link></li>
              <li className="mb-2"><Link to="/departments/information-technology" className="text-white-50 text-decoration-none"><LinkIcon />Information Technology</Link></li>
            </ul>
          </div>

          {/* Column 2: Website Links */}
          <div className="col-12 col-sm-6 col-lg-3">
            <h5 className="footer-heading mb-4 text-white">Website Links</h5>
            <ul className="list-unstyled footer-list">
              <li className="mb-2"><Link to="/about" className="text-white-50 text-decoration-none"><LinkIcon />About College</Link></li>
              <li className="mb-2"><Link to="/academics/admission" className="text-white-50 text-decoration-none"><LinkIcon />Admission</Link></li>
              <li className="mb-2"><Link to="/contact-us" className="text-white-50 text-decoration-none"><LinkIcon />Contact</Link></li>
              <li className="mb-2"><a href="https://scholarship.up.gov.in/" className="text-white-50 text-decoration-none" target="_blank" rel="noreferrer"><LinkIcon />Scholarship</a></li>
            </ul>
          </div>

          {/* Column 3: Important Links */}
          <div className="col-12 col-sm-6 col-lg-3">
            <h5 className="footer-heading mb-4 text-white">Important Links</h5>
            <ul className="list-unstyled footer-list">
              <li className="mb-2"><a href="https://bteup.ac.in/webapp/home.aspx#" className="text-white-50 text-decoration-none" target="_blank" rel="noreferrer"><LinkIcon />BTEUP</a></li>
              <li className="mb-2"><a href="https://up.gov.in/en" className="text-white-50 text-decoration-none" target="_blank" rel="noreferrer"><LinkIcon />UP GOVT</a></li>
              <li className="mb-2"><a href="http://upted.gov.in/" className="text-white-50 text-decoration-none" target="_blank" rel="noreferrer"><LinkIcon />UP TED</a></li>
              <li className="mb-2"><a href="https://www.aicte.gov.in/" className="text-white-50 text-decoration-none" target="_blank" rel="noreferrer"><LinkIcon />AICTE</a></li>
              <li className="mb-2"><a href="https://urise.up.gov.in/" className="text-white-50 text-decoration-none" target="_blank" rel="noreferrer"><LinkIcon />URISE</a></li>
              <li className="mb-2"><a href="https://jeecup.admissions.nic.in/" className="text-white-50 text-decoration-none" target="_blank" rel="noreferrer"><LinkIcon />JEECUP</a></li>
            </ul>
          </div>

          {/* Column 4: Reach out here */}
          <div className="col-12 col-sm-6 col-lg-3">
            <h5 className="footer-heading mb-4 text-white">Reach out here</h5>
            
            {/* Map iframe placeholder for Hariharpur Gorakhpur */}
            <div className="map-container bg-light rounded mb-3 overflow-hidden" style={{ height: '180px' }}>
              <iframe 
                title="College Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14275.562250472058!2d83.23577615!3d26.5557834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399114b99ffb4bc9%3A0x67df7573d8f3259a!2sMahamaya%20Polytechnic%20Of%20Information%20Technology%2C%20Hariharpur%2CGorakhpur!5e0!3m2!1sen!2sin!4v1789995366905!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>

            <div className="footer-contact-info text-white-50 small">
              <p className="mb-2"><strong className="text-white">Address :</strong> Hariharpur, Khajini, Gorakhpur, Uttar Pradesh, India 273212</p>
              <p className="mb-0"><strong className="text-white">Email :</strong> mmitgorakhpur@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Developer Credit */}
        <div className="developer-credit text-center py-3 mb-3 border-top border-bottom border-secondary">
          <p className="m-0 text-warning fw-bold" style={{ letterSpacing: '0.5px' }}>
           This site is developed by <b className=" text-white px-1 rounded"> Ankush Singh </b> and <b className=" text-white px-1 rounded"> Tushar Kapoor </b>, Computer Science II<sup>nd</sup> year students <br/>
           This Site is under Development
          </p>
        </div>

        {/* Bottom Bar with Dynamic Stats */}
        <div className="row align-items-center text-white-50 small pt-2">
          <div className="col-md-6 mb-2 mb-md-0">
            <p className="mb-1">Copyright©{new Date().getFullYear()} Mahamaya Polytechnic of IT Hariharpur, Gorakhpur.</p>
            <p className="mb-0">All Rights Reserved</p>
          </div>
          <div className="col-md-6 text-md-end">
            <p className="mb-1">Last Updated on: {formatLastUpdated(stats.lastUpdated)}</p>
            <p className="mb-0 d-inline-block me-3">Total Visitors: {stats.visitors.toLocaleString()}</p>
            
            {/* Scroll to top button */}
            <button className="btn btn-dark btn-sm rounded-0 border border-secondary p-2 ms-2" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
              </svg>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
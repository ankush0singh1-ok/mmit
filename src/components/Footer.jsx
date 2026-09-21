import React from 'react';
import '../App.css';

const Footer = () => {
  // Reusable Link Icon Component based on the reference image
  const LinkIcon = () => (
    <svg className="footer-icon me-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
    </svg>
  );

  return (
    <footer className="footer-bg pt-5 pb-3">
      <div className="container-fluid px-4 px-md-5">
        <div className="row g-4 mb-4">
          
          {/* Column 1: Courses */}
          <div className="col-12 col-sm-6 col-lg-3">
            <h5 className="footer-heading mb-4">Courses</h5>
            <ul className="list-unstyled footer-list">
              <li><a href="#/"><LinkIcon />Electronics Engineering</a></li>
              <li><a href="#/"><LinkIcon />Computer Science</a></li>
              <li><a href="#/"><LinkIcon />Applied Science & Humanity</a></li>
              <li><a href="#/"><LinkIcon />Information Technology</a></li>
            </ul>
          </div>

          {/* Column 2: Website Links */}
          <div className="col-12 col-sm-6 col-lg-3">
            <h5 className="footer-heading mb-4">Website Links</h5>
            <ul className="list-unstyled footer-list">
              <li><a href="#/"><LinkIcon />About College</a></li>
              <li><a href="#/"><LinkIcon />Admission</a></li>
              <li><a href="#/"><LinkIcon />Scholarship</a></li>
              <li><a href="#/"><LinkIcon />Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Important Links */}
          <div className="col-12 col-sm-6 col-lg-3">
            <h5 className="footer-heading mb-4">Important Links</h5>
            <ul className="list-unstyled footer-list">
              <li><a href="#/"><LinkIcon />UP BTE</a></li>
              <li><a href="#/"><LinkIcon />UP GOVT</a></li>
              <li><a href="#/"><LinkIcon />UP TED</a></li>
              <li><a href="#/"><LinkIcon />AICTE</a></li>
              <li><a href="#/"><LinkIcon />URISE</a></li>
              <li><a href="#/"><LinkIcon />JEECUP</a></li>
            </ul>
          </div>

          {/* Column 4: Reach out here */}
          <div className="col-12 col-sm-6 col-lg-3">
            <h5 className="footer-heading mb-4">Reach out here</h5>
            
            {/* Map iframe placeholder for Hariharpur Gorakhpur */}
            <div className="map-container bg-light rounded mb-3 overflow-hidden" style={{ height: '180px' }}>
              <iframe 
                title="College Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113911.26871587593!2d83.2981308!3d26.7499808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3991446a0c332489%3A0x1fd336217435ea68!2sKhajni%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
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
           This site is developed by<b> Ankush Singh </b>, A Computer Science II<sup>nd</sup> year student <br/>
           This Site is under Development
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="row align-items-center text-white-50 small pt-2">
          <div className="col-md-6 mb-2 mb-md-0">
            <p className="mb-1">Copyright©2025 Mahamaya Polytechnic of IT Hariharpur, Gorakhpur.</p>
            <p className="mb-0">All Rights Reserved</p>
          </div>
          <div className="col-md-6 text-md-end">
            <p className="mb-1">Last Updated on: July 18th, 2026</p>
            <p className="mb-0 d-inline-block me-3">Total Visitors: 12717</p>
            
            {/* Scroll to top button */}
            <button className="btn btn-dark btn-sm rounded-0 border border-secondary p-2" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
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
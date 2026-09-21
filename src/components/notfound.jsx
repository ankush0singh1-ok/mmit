import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const NotFound = () => {
  return (
    <section className="py-5 flux-section-bg min-vh-100 d-flex align-items-center">
      <div className="container px-4 text-center">
        <div className="row justify-content-center position-relative z-index-2">
          <div className="col-12 col-md-8 col-lg-6">
            <div className="flux-card p-5">
              
              <div className="mb-4">
                <h1 className="display-1 fw-bold text-danger mb-0" style={{ fontSize: '6rem' }}>404</h1>
                <h2 className="fw-bold text-dark mt-2 mb-3">Page Not Found</h2>
              </div>
              
              <p className="text-muted mb-4">
                Oops! The page you are looking for does not exist, has been removed, or is temporarily unavailable.
              </p>
              
              <Link to="/" className="btn btn-warning fw-bold px-5 py-3 rounded-pill shadow-sm">
                RETURN TO HOMEPAGE
              </Link>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
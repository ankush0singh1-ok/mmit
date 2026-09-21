import React from 'react';
import '../../App.css';

const MandatoryDisclosure = () => {
  return (
    <section className="py-5 flux-section-bg min-vh-100">
      <div className="container px-4">
        
        {/* Page Header */}
        <div className="text-center mb-5 position-relative z-index-2">
          <h1 className="fw-bold text-dark custom-heading">
            MANDATORY <span className="text-warning">DISCLOSURE</span>
          </h1>
          <p className="text-muted">As per the regulations of the All India Council for Technical Education (AICTE)</p>
        </div>

        {/* Content Card */}
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <div className="flux-card p-4 p-md-5 text-center">
              
              <div className="flux-icon-box rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4" style={{ width: '70px', height: '70px' }}>
                {/* Document Icon */}
                <svg width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"/>
                  <path d="M4.5 10a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5z"/>
                </svg>
              </div>

              <h3 className="fw-bold text-dark mb-3 position-relative z-index-2">Latest Mandatory Disclosure Report</h3>
              <p className="text-muted fs-6 lh-lg mb-4 position-relative z-index-2">
                The Mandatory Disclosure is updated annually to provide complete transparency regarding the institution's infrastructure, faculty, fee structure, and academic programs as mandated by AICTE, New Delhi.
              </p>

              {/* Download / View Button */}
              <div className="position-relative z-index-2">
                <a 
                  href="/documents/mandatory-disclosure.pdf" /* Replace with actual PDF path */
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-warning px-5 py-3 fw-bold rounded-pill shadow-sm"
                >
                  VIEW FULL DOCUMENT (PDF)
                </a>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default MandatoryDisclosure;
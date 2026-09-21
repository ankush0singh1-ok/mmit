import React from 'react';
import '../../App.css';

const EoaLetter = () => {
  return (
    <section className="py-5 flux-section-bg min-vh-100">
      <div className="container px-4">
        
        {/* Page Header */}
        <div className="text-center mb-5 position-relative z-index-2">
          <h1 className="fw-bold text-dark custom-heading">
            EOA <span className="text-warning">LETTER</span>
          </h1>
          <p className="text-muted">Extension of Approval by AICTE, New Delhi</p>
        </div>

        {/* Content Card */}
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <div className="flux-card p-4 p-md-5 text-center">
              
              <div className="flux-icon-box rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4" style={{ width: '70px', height: '70px' }}>
                {/* Certificate/Letter Icon */}
                <svg width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                  <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                </svg>
              </div>

              <h3 className="fw-bold text-dark mb-3 position-relative z-index-2">Current Academic Year EOA</h3>
              <p className="text-muted fs-6 lh-lg mb-4 position-relative z-index-2">
                The Extension of Approval (EOA) is officially granted by the All India Council for Technical Education (AICTE) annually. This letter certifies our compliance with national technical education standards and authorizes the intake capacity for our various engineering diploma programs.
              </p>

              {/* Download / View Button */}
              <div className="position-relative z-index-2">
                <a 
                  href="/documents/eoa-letter-current.pdf" /* Replace with actual EOA PDF path */
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-warning px-5 py-3 fw-bold rounded-pill shadow-sm"
                >
                  VIEW EOA LETTER (PDF)
                </a>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default EoaLetter;
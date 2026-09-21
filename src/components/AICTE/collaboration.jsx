import React from 'react';
import '../../App.css';

const AicteCollaboration = () => {
  return (
    <section className="py-5 flux-section-bg min-vh-100">
      <div className="container px-4">
        
        {/* Page Header */}
        <div className="text-center mb-5 position-relative z-index-2">
          <h1 className="fw-bold text-dark custom-heading">
            AICTE <span className="text-warning">COLLABORATION</span>
          </h1>
          <p className="text-muted">Industry and Institutional Partnerships</p>
        </div>

        {/* Content Card */}
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <div className="flux-card p-4 p-md-5 text-center">
              
              <div className="flux-icon-box rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4" style={{ width: '70px', height: '70px' }}>
                {/* Handshake/Network Icon */}
                <svg width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8.5 10.5a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 1 0v3zm0-5a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 1 0v1z"/>
                  <path d="M2.5 2a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V2zm1 0v12h9V2h-9z"/>
                </svg>
              </div>

              <h3 className="fw-bold text-dark mb-3 position-relative z-index-2">Collaborative Initiatives & MoUs</h3>
              <p className="text-muted fs-6 lh-lg mb-4 position-relative z-index-2">
                To bridge the gap between academia and industry, our institution actively participates in collaborative frameworks sanctioned by AICTE. These Memorandums of Understanding (MoUs) facilitate student internships, expert guest lectures, and faculty development programs.
              </p>

              {/* Download / View Button */}
              <div className="position-relative z-index-2">
                <a 
                  href="/documents/collaborations-mou.pdf" /* Replace with actual MoU PDF path */
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-warning px-5 py-3 fw-bold rounded-pill shadow-sm"
                >
                  VIEW ACTIVE COLLABORATIONS
                </a>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default AicteCollaboration;
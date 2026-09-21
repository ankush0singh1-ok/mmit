import React from 'react';
import '../../App.css';

const Accreditation = () => {
  return (
    <section className="py-5 flux-section-bg min-vh-100">
      <div className="container px-4">
        
        {/* Page Header */}
        <div className="text-center mb-5 position-relative z-index-2">
          <h1 className="fw-bold text-dark custom-heading">
            PROGRAMME <span className="text-warning">ACCREDITATION</span>
          </h1>
          <p className="text-muted">Quality Assurance & Institutional Standards</p>
        </div>

        {/* Content Card */}
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <div className="flux-card p-4 p-md-5 text-center">
              
              <div className="flux-icon-box rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4" style={{ width: '70px', height: '70px' }}>
                {/* Shield/Badge Icon */}
                <svg width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z"/>
                </svg>
              </div>

              <h3 className="fw-bold text-dark mb-3 position-relative z-index-2">Institutional Accreditation Status</h3>
              <p className="text-muted fs-6 lh-lg mb-4 position-relative z-index-2">
                Accreditation represents our ongoing commitment to delivering world-class technical education. Below you will find the comprehensive status report regarding the accreditation of our diploma programs by the relevant statutory bodies recognized by AICTE.
              </p>

              {/* Download / View Button */}
              <div className="position-relative z-index-2">
                <a 
                  href="/documents/accreditation-status.pdf" /* Replace with actual PDF path */
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-warning px-5 py-3 fw-bold rounded-pill shadow-sm"
                >
                  VIEW ACCREDITATION DETAILS
                </a>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Accreditation;
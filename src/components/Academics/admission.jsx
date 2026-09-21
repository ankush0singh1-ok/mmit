import React from 'react';
import '../App.css';

const AcademicsAdmission = () => {
  return (
    <section className="py-5 flux-section-bg min-vh-100">
      <div className="container px-4">
        
        {/* Page Header */}
        <div className="text-center mb-5 position-relative z-index-2">
          <h1 className="fw-bold text-dark custom-heading">
            ADMISSION <span className="text-warning">PROCEDURE</span>
          </h1>
          <p className="text-muted">Complete details for enrolling in our AICTE-approved diploma programs.</p>
        </div>

        {/* Main Content Row */}
        <div className="row g-4 align-items-stretch">
          
          {/* LEFT COLUMN: Admission Process (JEECUP) */}
          <div className="col-12 col-lg-7">
            <div className="flux-card h-100 p-4 p-md-5">
              <div className="d-flex align-items-center mb-4 position-relative z-index-2">
                <div className="flux-icon-box rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0" style={{ width: '50px', height: '50px' }}>
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 7a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2 1H6a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2z"/>
                  </svg>
                </div>
                <h3 className="fw-bold text-dark m-0">How to Apply</h3>
              </div>
              
              <p className="text-muted fs-6 lh-lg mb-4 position-relative z-index-2">
                Admissions to all diploma courses at Mahamaya Polytechnic of IT are strictly conducted through the Joint Entrance Examination Council, Uttar Pradesh (JEECUP). Candidates must follow the state-level counseling process.
              </p>

              {/* Step-by-Step Process */}
              <div className="position-relative z-index-2 d-flex flex-column gap-3">
                <div className="bg-light p-3 rounded-3 border d-flex align-items-start gap-3">
                  <span className="badge bg-warning text-dark fs-6 rounded-circle p-2">1</span>
                  <div>
                    <h6 className="fw-bold text-dark mb-1">Online Registration</h6>
                    <p className="text-muted small mb-0">Apply online for the UPJEE (Polytechnic) entrance exam via the official JEECUP portal.</p>
                  </div>
                </div>
                
                <div className="bg-light p-3 rounded-3 border d-flex align-items-start gap-3">
                  <span className="badge bg-warning text-dark fs-6 rounded-circle p-2">2</span>
                  <div>
                    <h6 className="fw-bold text-dark mb-1">Entrance Examination</h6>
                    <p className="text-muted small mb-0">Download the admit card and appear for the computer-based UPJEE examination.</p>
                  </div>
                </div>

                <div className="bg-light p-3 rounded-3 border d-flex align-items-start gap-3">
                  <span className="badge bg-warning text-dark fs-6 rounded-circle p-2">3</span>
                  <div>
                    <h6 className="fw-bold text-dark mb-1">Web Counseling & Choice Filling</h6>
                    <p className="text-muted small mb-0">Qualifying candidates must register for online counseling and select "Mahamaya Polytechnic of IT Hariharpur" as their preferred institute.</p>
                  </div>
                </div>

                <div className="bg-light p-3 rounded-3 border d-flex align-items-start gap-3">
                  <span className="badge bg-warning text-dark fs-6 rounded-circle p-2">4</span>
                  <div>
                    <h6 className="fw-bold text-dark mb-1">Seat Allotment & Document Verification</h6>
                    <p className="text-muted small mb-0">Report to the institute with the allotment letter and original documents to finalize admission.</p>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-4 pt-3 border-top position-relative z-index-2">
                <a href="https://jeecup.admissions.nic.in/" target="_blank" rel="noopener noreferrer" className="btn btn-dark fw-bold rounded-pill px-4 py-2">
                  Visit JEECUP Portal
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Eligibility & Documents */}
          <div className="col-12 col-lg-5 d-flex flex-column gap-4">
            
            {/* Eligibility Card */}
            <div className="flux-card flex-grow-1 p-4">
              <h5 className="fw-bold text-dark mb-3 position-relative z-index-2 border-bottom pb-2">Eligibility Criteria</h5>
              <ul className="text-muted fs-6 lh-lg mb-0 position-relative z-index-2 ps-3">
                <li className="mb-2"><strong>Academic Qualification:</strong> Must have passed the 10th standard (High School) examination or equivalent from a recognized board.</li>
                <li className="mb-2"><strong>Minimum Marks:</strong> Minimum 35% aggregate marks in the qualifying examination.</li>
                <li><strong>Age Limit:</strong> Must be at least 14 years old as of July 1st of the admission year. There is no upper age limit.</li>
              </ul>
            </div>

            {/* Required Documents Card */}
            <div className="flux-card flex-grow-1 p-4">
              <h5 className="fw-bold text-dark mb-3 position-relative z-index-2 border-bottom pb-2">Required Documents</h5>
              <div className="position-relative z-index-2">
                <p className="text-muted small mb-3">Bring original copies plus two sets of photocopies during physical reporting:</p>
                <ul className="text-muted small lh-lg mb-0 ps-3">
                  <li>JEECUP Seat Allotment Letter</li>
                  <li>JEECUP Admit Card & Rank Card</li>
                  <li>10th Marksheet and Passing Certificate</li>
                  <li>Transfer Certificate (TC) / Migration Certificate</li>
                  <li>Character Certificate from the last attended institute</li>
                  <li>Caste Certificate (if applicable)</li>
                  <li>Income & Domicile Certificate</li>
                  <li>Aadhar Card</li>
                  <li>6 Recent Passport Size Photographs</li>
                </ul>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default AcademicsAdmission;
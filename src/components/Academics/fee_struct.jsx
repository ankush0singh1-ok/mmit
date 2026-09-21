import React from 'react';
import '../../App.css';

const AcademicsFeeStructure = () => {
  return (
    <section className="py-5 flux-section-bg min-vh-100">
      <div className="container px-4">
        
        {/* Page Header */}
        <div className="text-center mb-5 position-relative z-index-2">
          <h1 className="fw-bold text-dark custom-heading">
            FEE <span className="text-warning">STRUCTURE</span>
          </h1>
          <p className="text-muted">Detailed breakdown of academic and accommodation fees for the current session.</p>
        </div>

        <div className="row g-4 align-items-stretch justify-content-center">
          
          {/* LEFT COLUMN: Academic Fees */}
          <div className="col-12 col-lg-6">
            <div className="flux-card h-100 p-4 p-md-5">
              
              <div className="d-flex align-items-center mb-4 position-relative z-index-2">
                <div className="flux-icon-box rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0" style={{ width: '50px', height: '50px' }}>
                  {/* Graduation Cap Icon */}
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5Z"/>
                    <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Z"/>
                  </svg>
                </div>
                <h3 className="fw-bold text-dark m-0">Academic Fees</h3>
              </div>

              <div className="table-responsive position-relative z-index-2">
                <table className="table table-borderless mb-0">
                  <thead className="border-bottom border-dark">
                    <tr>
                      <th className="text-muted fw-bold pb-3">Fee Category</th>
                      <th className="text-muted fw-bold pb-3 text-end">Amount (₹)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-bottom" style={{ borderColor: 'rgba(0,0,0,0.05)' }}>
                      <td className="py-3 text-dark fw-medium">Institute Fee (Per Year)</td>
                      <td className="py-3 text-dark text-end">7,466.00</td>
                    </tr>
                    <tr className="border-bottom" style={{ borderColor: 'rgba(0,0,0,0.05)' }}>
                      <td className="py-3 text-dark fw-medium">Student Fund</td>
                      <td className="py-3 text-dark text-end">2,000.00</td>
                    </tr>
                    <tr className="border-bottom" style={{ borderColor: 'rgba(0,0,0,0.05)' }}>
                      <td className="py-3 text-dark fw-medium">Examination Fee</td>
                      <td className="py-3 text-dark text-end">420.00</td>
                    </tr>
                    <tr className="bg-light rounded-3">
                      <td className="py-3 text-dark fw-bold rounded-start px-2">Total Estimated Fees</td>
                      <td className="py-3 text-warning fw-bold text-end rounded-end px-2 fs-5">₹ 9886.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-muted small mt-3 mb-0 position-relative z-index-2">
                * Note: The above fees are indicative for government institutions and are subject to change as per BTEUP/state government directives.
              </p>

            </div>
          </div>

          {/* RIGHT COLUMN: Hostel & Mess Fees */}
          <div className="col-12 col-lg-6">
            <div className="flux-card h-100 p-4 p-md-5">
              
              <div className="d-flex align-items-center mb-4 position-relative z-index-2">
                <div className="flux-icon-box rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0" style={{ width: '50px', height: '50px' }}>
                  {/* Building/Hostel Icon */}
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H4zm5 0a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H9zm-5 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H4zm5 0a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H9zm-5 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H4zm5 0a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H9z"/>
                  </svg>
                </div>
                <h3 className="fw-bold text-dark m-0">Hostel & Mess</h3>
              </div>

              <div className="table-responsive position-relative z-index-2">
                <table className="table table-borderless mb-0">
                  <thead className="border-bottom border-dark">
                    <tr>
                      <th className="text-muted fw-bold pb-3">Fee Category</th>
                      <th className="text-muted fw-bold pb-3 text-end">Amount (₹)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-bottom" style={{ borderColor: 'rgba(0,0,0,0.05)' }}>
                      <td className="py-3 text-dark fw-medium">Hostel Room Rent (Yearly)</td>
                      <td className="py-3 text-dark text-end">2300.00</td>
                    </tr>
                    <tr className="border-bottom" style={{ borderColor: 'rgba(0,0,0,0.05)' }}>
                      <td className="py-3 text-dark fw-medium">Electricity & Water Charges</td>
                      <td className="py-3 text-dark text-end">00.00</td>
                    </tr>
                    <tr className="border-bottom" style={{ borderColor: 'rgba(0,0,0,0.05)' }}>
                      <td className="py-3 text-dark fw-medium">Security Fee (Refundable)</td>
                      <td className="py-3 text-dark text-end">1,500.00</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-dark fw-medium">Mess Advance (Per Month)</td>
                      <td className="py-3 text-dark text-end">3,000.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="bg-light p-3 rounded-3 mt-4 border position-relative z-index-2">
                <h6 className="fw-bold text-dark mb-1">Hostel Dietary Guidelines</h6>
                <p className="text-muted small mb-0">
                  Mess charges cover a strictly vegetarian daily menu designed to accommodate standard hostel living constraints (note: paneer and mushroom are excluded from standard meal plans). Fees are coordinated based on the weekly meal schedule.
                </p>
              </div>

            </div>
          </div>

        </div>
        
        {/* Payment Instructions */}
        <div className="row mt-5 position-relative z-index-2 justify-content-center">
          <div className="col-12 col-lg-8 text-center">
            <h5 className="fw-bold text-dark mb-3">Payment Instructions</h5>
            <p className="text-muted fs-6 lh-lg mb-0">
              All academic and hostel fees must be deposited exclusively through the official state government treasury portal or via a Demand Draft (DD) in favor of the Principal, Mahamaya Polytechnic of IT, Hariharpur. Cash transactions are strictly not accepted for tuition and accommodation fees.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default AcademicsFeeStructure;
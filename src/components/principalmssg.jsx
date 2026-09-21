import React from 'react';
import '../App.css';

const PrincipalMessage = () => {
  return (
    <section className="py-5 flux-section-bg">
      <div className="container-fluid px-4">
        
        {/* We use the same flux-card style from the Mission section for consistency */}
        <div className="flux-card p-4 p-md-5">
          <div className="row align-items-center g-5">
            
            {/* LEFT COLUMN: Dedicated Space for Principal's Photo */}
            <div className="col-12 col-lg-4 text-center">
              <div className="principal-photo-wrapper position-relative d-inline-block">
                
                {/* The Image Tag - Update the src when you have the real photo */}
                <img
                  src="./images/principal.png" 
                  alt="Shri B. N. Chaudhari - Principal"
                  className="principal-photo img-fluid rounded-4 "
                  onError={(e) => { e.target.src = 'https://via.placeholder.com/350x450?text=Principal+Photo' }}
                />
                
                {/* Decorative Flux Background Accent */}
                <div className="photo-accent-bg rounded-4"></div>
              </div>
            </div>

            {/* RIGHT COLUMN: The Message */}
            <div className="col-12 col-lg-8">
              
              {/* Header */}
              <div className="d-flex align-items-center mb-4 position-relative z-index-2">
                <div className="flux-icon-box rounded-circle d-flex align-items-center justify-content-center me-3">
                  {/* Quote Icon */}
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"/>
                  </svg>
                </div>
                <h2 className="m-0 fw-bold text-dark custom-heading">PRINCIPAL <span className="text-warning">MESSAGE</span></h2>
              </div>

              {/* Message Content */}
              <div className="position-relative z-index-2">
                <p className="text-muted fs-6 lh-lg mb-4">
                  Welcome to Mahamaya Polytechnic of Information Technology. As a premier educational establishment in the Gorakhpur region, our core focus lies in nurturing human intelligence, creativity, patience, and innovation. We firmly believe that robust technical education is the fundamental building block of national progress.
                </p>
                <p className="text-muted fs-6 lh-lg mb-4">
                  Our primary objective is to empower students with unparalleled knowledge, discernment, and hands-on experience. Through our highly skilled teaching faculty and state-of-the-art facilities—including well-equipped laboratories, a modern computer center, and a comprehensive library—we ensure our students achieve the highest standards in professional skills to succeed in today&apos;s fiercely competitive global industrial and engineering markets.
                </p>
                <p className="text-muted fs-6 lh-lg mb-5">
                  It brings me immense pleasure to welcome you to our institution. I hope that our staff, parents, and students find this digital platform highly informative and useful.
                </p>

                {/* Signature Area */}
                <div className="principal-signature text-end border-top pt-4">
                  <h5 className="fw-bold text-dark mb-1">- SHRI. B N Chaudhari. (Principal)</h5>
                  <p className="text-muted small mb-0">(Mahamaya Polytechnic of Information Technology Hariharpur, Gorakhpur, U.P.)</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PrincipalMessage;
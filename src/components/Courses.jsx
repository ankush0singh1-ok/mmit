import React from 'react';
import '../App.css'; 

const Courses = () => {
  return (
    <section className="py-5 flux-section-bg">
      <div className="container-fluid px-4">
        
        <div className="flux-card p-4 p-md-5">
          <div className="row align-items-center g-5 flex-lg-row-reverse">
            
            {/* RIGHT COLUMN: Dedicated Space for Course/Campus Photo */}
            <div className="col-12 col-lg-5 text-center">
              <div className="image-photo-wrapper position-relative d-inline-block">
                <img
                  src="./images/course-photo.jpg" 
                  alt="Students learning in lab"
                  className="section-photo img-fluid rounded-4 shadow-lg"
                  onError={(e) => { e.target.src = 'https://via.placeholder.com/450x450?text=Computer+Lab+Photo' }}
                />
                <div className="photo-accent-bg rounded-4"></div>
              </div>
            </div>

            {/* LEFT COLUMN: The Course Details */}
            <div className="col-12 col-lg-7">
              
              {/* Header */}
              <div className="d-flex align-items-center mb-4 position-relative z-index-2">
                <div className="flux-icon-box rounded-circle d-flex align-items-center justify-content-center me-3">
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 2.153l5.854 2.89a.5.5 0 0 1 0 .898L8 8.83l-5.854-2.89a.5.5 0 0 1 0-.898L8 2.153z"/>
                    <path d="M7.657 9.77a.5.5 0 0 0 .686 0l5.157-2.545v4.296c0 .248-.124.478-.332.617l-4.5 3a.5.5 0 0 1-.555 0l-4.5-3A.75.75 0 0 1 3 11.52V7.225l5.157 2.545z"/>
                  </svg>
                </div>
                <h2 className="m-0 fw-bold text-dark custom-heading">ACADEMIC <span className="text-warning">COURSES</span></h2>
              </div>

              {/* Message Content */}
              <div className="position-relative z-index-2">
                <p className="text-muted fs-6 lh-lg mb-4">
                  At Mahamaya Polytechnic of Information Technology, we offer industry-aligned diploma programs designed to transform aspiring students into skilled technocrats. Admissions are available for regular 3-year programs as well as lateral entry.
                </p>
                
                {/* Course List / Badges */}
                <div className="row g-3 mb-4">
                  
                  {/* Computer Science & Engineering */}
                  <div className="col-md-12">
                    <div className="course-item p-3 border rounded-3 bg-light">
                      <div className="d-flex align-items-center mb-2">
                        <div className="course-bullet bg-warning rounded-circle me-3"></div>
                        <h5 className="m-0 fw-bold text-dark">Computer Science and Engineering (CS)</h5>
                      </div>
                      <div className="ms-4 ps-3 border-start border-warning border-3">
                        <p className="mb-1 text-muted small"><strong>First Year (Regular):</strong> BTEUP Branch Code 355</p>
                        <p className="mb-0 text-muted small"><strong>Second Year (Lateral Entry):</strong> BTEUP Branch Code 389</p>
                      </div>
                    </div>
                  </div>

                  {/* Information Technology */}
                  <div className="col-md-12">
                    <div className="course-item p-3 border rounded-3 bg-light">
                      <div className="d-flex align-items-center mb-2">
                        <div className="course-bullet bg-warning rounded-circle me-3"></div>
                        <h5 className="m-0 fw-bold text-dark">Information Technology (IT)</h5>
                      </div>
                      <div className="ms-4 ps-3 border-start border-warning border-3">
                        <p className="mb-1 text-muted small"><strong>First Year (Regular):</strong> BTEUP Branch Code 356</p>
                        <p className="mb-0 text-muted small"><strong>Second Year (Lateral Entry):</strong> BTEUP Branch Code 390</p>
                      </div>
                    </div>
                  </div>

                  {/* Electronics Engineering */}
                  <div className="col-md-12">
                    <div className="course-item p-3 border rounded-3 bg-light">
                      <div className="d-flex align-items-center mb-2">
                        <div className="course-bullet bg-warning rounded-circle me-3"></div>
                        <h5 className="m-0 fw-bold text-dark">Electronics Engineering</h5>
                      </div>
                      <div className="ms-4 ps-3 border-start border-warning border-3">
                        <p className="mb-1 text-muted small"><strong>First Year (Regular):</strong> BTEUP Branch Code 330</p>
                        <p className="mb-0 text-muted small"><strong>Second Year (Lateral Entry):</strong> BTEUP Branch Code 380</p>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Call to Action */}
                <div className="border-top pt-4 mt-2">
                  <p className="text-muted small mb-0">
                    * All courses are approved by AICTE and affiliated with BTEUP, Lucknow. Practical labs and modern computer centers are available for all branches.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Courses;
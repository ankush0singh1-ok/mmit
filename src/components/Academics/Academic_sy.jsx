import React from 'react';
import '../../App.css';

const AcademicsSyllabus = () => {
  // Syllabus data structure for the 3 main branches
  const syllabusData = [
    {
      id: 1,
      branch: "Computer Science & Engg ",
      icon: (
        <svg width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM2.04 4.326c.325 1.329 2.532 2.524 5.842 2.533V1.6c-2.316.273-4.49 1.442-5.842 2.726zm10.88 2.726c-1.352-1.284-3.526-2.453-5.842-2.726v5.259c3.31-.009 5.517-1.204 5.842-2.533zm0 1.896c-.325 1.329-2.532 2.524-5.842 2.533v5.259c2.316-.273 4.49-1.442 5.842-2.726zm-10.88 2.726c1.352 1.284 3.526 2.453 5.842 2.726V6.414c-3.31.009-5.517 1.204-5.842 2.533z"/>
        </svg>
      ),
      files: [
        { year: "First Year (Sem 1 & 2)", link: "/documents/cs-1st-year.pdf" },
        { year: "Second Year (Sem 3 & 4)", link: "/documents/cs-2nd-year.pdf" },
        { year: "Third Year (Sem 5 & 6)", link: "/documents/cs-3rd-year.pdf" }
      ]
    },
    {
      id: 2,
      branch: "Information Technology",
      icon: (
        <svg width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
          <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
        </svg>
      ),
      files: [
        { year: "First Year (Sem 1 & 2)", link: "/documents/it-1st-year.pdf" },
        { year: "Second Year (Sem 3 & 4)", link: "/documents/it-2nd-year.pdf" },
        { year: "Third Year (Sem 5 & 6)", link: "/documents/it-3rd-year.pdf" }
      ]
    },
    {
      id: 3,
      branch: "Electronics Engineering",
      icon: (
        <svg width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
          <path d="M1 2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2zm12 11h1V2H2v11h11z"/>
          <path d="M4.5 5a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5h-7zm.5 1h6v4H5V6z"/>
        </svg>
      ),
      files: [
        { year: "First Year (Sem 1 & 2)", link: "/documents/el-1st-year.pdf" },
        { year: "Second Year (Sem 3 & 4)", link: "/documents/el-2nd-year.pdf" },
        { year: "Third Year (Sem 5 & 6)", link: "/documents/el-3rd-year.pdf" }
      ]
    }
  ];

  return (
    <section className="py-5 flux-section-bg min-vh-100">
      <div className="container px-4">
        
        {/* Page Header */}
        <div className="text-center mb-5 position-relative z-index-2">
          <h1 className="fw-bold text-dark custom-heading">
            ACADEMIC <span className="text-warning">SYLLABUS</span>
          </h1>
          <p className="text-muted">Download the official BTEUP curriculum for your respective diploma courses.</p>
        </div>

        {/* Syllabus Grid */}
        <div className="row g-4 align-items-stretch justify-content-center">
          {syllabusData.map((dept) => (
            <div key={dept.id} className="col-12 col-md-6 col-lg-4">
              <div className="flux-card h-100 p-4 d-flex flex-column">
                
                {/* Department Header */}
                <div className="d-flex flex-column align-items-center text-center mb-4 position-relative z-index-2">
                  <div className="flux-icon-box rounded-circle d-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                    {dept.icon}
                  </div>
                  <h4 className="fw-bold text-dark m-0">{dept.branch}</h4>
                </div>

                {/* Download Links Container */}
                <div className="d-flex flex-column gap-3 position-relative z-index-2 flex-grow-1">
                  {dept.files.map((file, index) => (
                    <a 
                      key={index}
                      href={file.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-outline-dark d-flex justify-content-between align-items-center rounded-3 p-3 text-start"
                      style={{ transition: 'all 0.3s ease' }}
                    >
                      <span className="fw-medium" style={{ fontSize: '15px' }}>{file.year}</span>
                      
                      {/* Small Download Icon */}
                      <svg width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                        <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                      </svg>
                    </a>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Common Subjects / Applied Science Note */}
        <div className="row justify-content-center mt-5">
          <div className="col-12 col-lg-8">
            <div className="flux-card p-4 text-center">
              <h5 className="fw-bold text-dark position-relative z-index-2">Department of Applied Science & Humanity</h5>
              <p className="text-muted small mb-0 position-relative z-index-2">
                *Note: The syllabus for First-Year common subjects (Applied Mathematics, Physics, Chemistry, and Communication Skills) is identical across all engineering branches.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default AcademicsSyllabus;
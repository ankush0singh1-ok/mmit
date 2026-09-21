import React from 'react';
import '../../App.css';

const AcademicsProgramme = () => {
  // Array of diploma programs based on your navigation menu
  const programs = [
    {
      id: 1,
      title: "Diploma in Computer Science",
      intake: "70 Seats",
      duration: "3 Years (6 Semesters)",
      description: "Focuses on programming, software development, database management, and computer networks to prepare students for the modern IT industry.",
      icon: (
        <svg width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
          <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"/>
        </svg>
      )
    },
    {
      id: 2,
      title: "Diploma in Information Technology",
      intake: "70 Seats",
      duration: "3 Years (6 Semesters)",
      description: "Emphasizes web technologies, information security, networking, and modern software tools required for IT infrastructure and management.",
      icon: (
        <svg width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
          <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z"/>
        </svg>
      )
    },
    {
      id: 3,
      title: "Diploma in Electronics Engineering",
      intake: "70 Seats",
      duration: "3 Years (6 Semesters)",
      description: "Covers digital electronics, microprocessors, communication systems, and embedded systems for careers in hardware and telecommunications.",
      icon: (
        <svg width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
          <path d="M4.5 1a.5.5 0 0 0-.5.5v1.05c-.71.18-1.3.77-1.48 1.48h-1.05a.5.5 0 0 0 0 1h1.05c.07.26.18.5.31.73l-.74.74a.5.5 0 0 0 .7.7l.74-.74c.23.13.47.24.73.31v1.05a.5.5 0 0 0 1 0v-1.05c.26-.07.5-.18.73-.31l.74.74a.5.5 0 0 0 .7-.7l-.74-.74c.13-.23.24-.47.31-.73h1.05a.5.5 0 0 0 0-1h-1.05c-.18-.71-.77-1.3-1.48-1.48V1.5a.5.5 0 0 0-.5-.5zm-.5 3a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0z"/>
          <path d="M13.5 9a.5.5 0 0 0-.5.5v1.05c-.71.18-1.3.77-1.48 1.48h-1.05a.5.5 0 0 0 0 1h1.05c.07.26.18.5.31.73l-.74.74a.5.5 0 0 0 .7.7l.74-.74c.23.13.47.24.73.31v1.05a.5.5 0 0 0 1 0v-1.05c.26-.07.5-.18.73-.31l.74.74a.5.5 0 1 0 .7-.7l-.74-.74c.13-.23.24-.47.31-.73h1.05a.5.5 0 0 0 0-1h-1.05c-.18-.71-.77-1.3-1.48-1.48V9.5a.5.5 0 0 0-.5-.5zm-.5 3a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0z"/>
        </svg>
      )
    }
  ];

  return (
    <section className="py-5 flux-section-bg min-vh-100">
      <div className="container px-4">
        
        {/* Page Header */}
        <div className="text-center mb-5 position-relative z-index-2">
          <h1 className="fw-bold text-dark custom-heading">
            ACADEMICS <span className="text-warning">PROGRAMME</span>
          </h1>
          <p className="text-muted">Explore our AICTE-approved diploma courses designed for future innovators.</p>
        </div>

        {/* Programs Grid */}
        <div className="row g-4 align-items-stretch justify-content-center">
          {programs.map((prog) => (
            <div key={prog.id} className="col-12 col-md-6 col-lg-4">
              <div className="flux-card h-100 p-4 d-flex flex-column">
                
                {/* Icon & Title */}
                <div className="d-flex align-items-center mb-4 position-relative z-index-2">
                  <div className="flux-icon-box rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0" style={{ width: '55px', height: '55px' }}>
                    {prog.icon}
                  </div>
                  <h4 className="fw-bold text-dark m-0 lh-base">{prog.title}</h4>
                </div>

                {/* Course Details */}
                <div className="bg-light p-3 rounded-3 mb-3 position-relative z-index-2 border">
                  <div className="d-flex justify-content-between mb-2">
                    <span className="text-muted fw-bold small">Duration:</span>
                    <span className="text-dark fw-medium small">{prog.duration}</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span className="text-muted fw-bold small">Intake Capacity:</span>
                    <span className="text-dark fw-medium small">{prog.intake}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted fs-6 lh-lg mb-0 position-relative z-index-2 flex-grow-1">
                  {prog.description}
                </p>

                {/* Optional: Learn More Button */}
                <div className="mt-4 pt-3 border-top position-relative z-index-2">
                  <a href={`/departments/${prog.title.split(' ').slice(-2).join('-').toLowerCase()}`} className="text-warning fw-bold text-decoration-none d-flex align-items-center">
                    View Department Details 
                    <svg className="ms-2" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                    </svg>
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default AcademicsProgramme;
import React from 'react';
import '../App.css'; 

const MissionNewsSection = () => {
  const newsItems = [
    { id: 1, date: "Aug 25, 2026", text: "Semester exams schedule released for all IT and CS departments." },
    { id: 2, date: "Aug 22, 2026", text: "Registrations open for the upcoming State-Level Hackathon 2026." },
    { id: 3, date: "Aug 18, 2026", text: "Campus placement drive by top tech MNCs begins next week." },
    { id: 4, date: "Aug 10, 2026", text: "New AI & Machine Learning lab inaugurated in the main block." },
    { id: 5, date: "Aug 05, 2026", text: "Reminder: Final date for scholarship application submission is approaching." }
  ];

  return (
    <section className="py-5 flux-section-bg">
      <div className="container-fluid px-4">
        {/* align-items-stretch forces both columns to be the exact same height */}
        <div className="row g-4 align-items-stretch">
          
          {/* LEFT COLUMN: Mission & Vision */}
          <div className="col-12 col-lg-8 d-flex flex-column gap-4">
            
            {/* Mission Card */}
            <div className="flux-card flex-grow-1 p-4 p-md-5 d-flex flex-column justify-content-center">
              <div className="d-flex align-items-center mb-3 position-relative z-index-2">
                <div className="flux-icon-box rounded-circle d-flex align-items-center justify-content-center me-3">
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M8 13A5 5 0 1 1 8 3a5 5 0 0 1 0 10zm0 1A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/>
                    <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                  </svg>
                </div>
                <h2 className="m-0 fw-bold text-dark custom-heading">OUR <span className="text-warning">MISSION</span></h2>
              </div>
              <p className="text-muted fs-6 lh-lg mb-0 position-relative z-index-2">
                To cultivate a dynamic and innovative learning ecosystem that bridges the gap between theoretical computing and industry demands. We are deeply committed to empowering our students with cutting-edge technical skills, fostering a culture of continuous research, and promoting sustainable technological solutions to lead the digital transformation of tomorrow.
              </p>
            </div>

            {/* Vision Card */}
            <div className="flux-card flex-grow-1 p-4 p-md-5 d-flex flex-column justify-content-center">
              <div className="d-flex align-items-center mb-3 position-relative z-index-2">
                <div className="flux-icon-box rounded-circle d-flex align-items-center justify-content-center me-3">
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77c-.094-.219-.25-.423-.453-.618A5.984 5.984 0 0 1 2 6zm6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1z"/>
                  </svg>
                </div>
                <h2 className="m-0 fw-bold text-dark custom-heading">OUR <span className="text-warning">VISION</span></h2>
              </div>
              <p className="text-muted fs-6 lh-lg mb-0 position-relative z-index-2">
                To emerge as a premier, globally recognized hub of technical excellence. We envision producing adaptable, forward-thinking technocrats and engineers who are equipped with the competent skills necessary to drive global innovation and contribute meaningfully to the betterment of society.
              </p>
            </div>

          </div>

          {/* RIGHT COLUMN: News & Announcements */}
          <div className="col-12 col-lg-4">
            <div className="flux-news-container h-100 d-flex flex-column overflow-hidden position-relative">
              
              {/* Header (Kept dark text-white because the background is orange) */}
              <div className="news-header d-flex align-items-center p-3 position-relative z-index-2">
                <svg className="text-white me-2" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                  <path d="M4.5 4a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7zm0 3a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3z"/>
                </svg>
                <h5 className="m-0 text-white fw-bold">News & Announcements</h5>
              </div>

              {/* Scrolling Content Area */}
              <div className="news-ticker-window position-relative flex-grow-1 p-3 z-index-2">
                <div className="news-scroller">
                  {[...newsItems, ...newsItems].map((item, index) => (
                    <div key={index} className="news-item mb-4 pb-3 border-bottom">
                      <span className="badge bg-warning text-dark mb-2">{item.date}</span>
                      <p className="text-dark mb-0 fw-medium" style={{ fontSize: '14px', lineHeight: '1.5' }}>
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Fade Gradient */}
              <div className="flux-news-fade-bottom z-index-2"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MissionNewsSection;
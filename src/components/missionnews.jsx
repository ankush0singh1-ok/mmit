import React, { useState, useEffect } from 'react';
import '../App.css';

const MissionNewsSection = () => {
  const [newsItems, setNewsItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('https://api-pl5i.onrender.com/api/news');
        if (response.ok) {
          const data = await response.json();
          // Slice the array to ensure only the first 10 items are displayed on the homepage
          setNewsItems(data.slice(0, 10));
        }
      } catch (error) {
        console.error("Failed to fetch news updates:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <section className="py-5 flux-section-bg">
      <div className="container px-4">
        <div className="row g-4 position-relative z-index-2">
          
          {/* LEFT COLUMN: Mission & Vision */}
          <div className="col-12 col-lg-7">
            <div className="flux-card h-100 p-4 p-md-5">
              <h2 className="fw-bold text-dark mb-4">Our <span className="text-warning">Mission & Vision</span></h2>
              
              <div className="mb-4">
                <div className="d-flex align-items-center mb-2">
                  <div className="flux-icon-box rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '40px', height: '40px' }}>
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                    </svg>
                  </div>
                  <h4 className="fw-bold text-dark m-0">Vision</h4>
                </div>
                <p className="text-muted ms-5">
                  To be a premier technical institution that nurtures innovative professionals and dynamic leaders capable of contributing to the socio-economic and technological development of the nation.
                </p>
              </div>

              <div>
                <div className="d-flex align-items-center mb-2">
                  <div className="flux-icon-box rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '40px', height: '40px', background: 'linear-gradient(135deg, #002060, #0040a0)' }}>
                    <svg width="20" height="20" fill="white" viewBox="0 0 16 16">
                      <path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 0 0 1.349-.476l.019-.007.004-.002h.001M14 1.221c-.22.078-.48.167-.766.255-.81.252-1.872.523-2.734.523-.886 0-1.592-.286-2.203-.534l-.008-.003C7.66 1.21 7.139 1 6.5 1c-.669 0-1.606.229-2.415.478A21.294 21.294 0 0 0 3 1.845v6.433c.22-.078.48-.167.766-.255C4.576 7.77 5.638 7.5 6.5 7.5c.847 0 1.548.28 2.158.525l.028.01C9.32 8.29 9.86 8.5 10.5 8.5c.668 0 1.606-.229 2.415-.478A21.317 21.317 0 0 0 14 7.655V1.222z"/>
                    </svg>
                  </div>
                  <h4 className="fw-bold text-dark m-0">Mission</h4>
                </div>
                <ul className="text-muted ms-4">
                  <li className="mb-2">To impart high-quality, practical-oriented engineering education.</li>
                  <li className="mb-2">To bridge the gap between academia and industry requirements.</li>
                  <li className="mb-2">To instill strong ethical values and foster a culture of continuous learning.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Latest Announcements (Max 10) */}
          <div className="col-12 col-lg-5">
            <div className="flux-card h-100 p-4 p-md-5 d-flex flex-column">
              <h4 className="fw-bold text-dark mb-4 border-bottom pb-3">Latest <span className="text-warning">Announcements</span></h4>
              
              <div className="flex-grow-1 overflow-auto pe-2" style={{ maxHeight: '400px' }}>
                {isLoading ? (
                  <div className="text-center py-5">
                    <div className="spinner-border text-warning" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                ) : newsItems.length === 0 ? (
                  <p className="text-muted text-center py-4">No recent announcements at this time.</p>
                ) : (
                  newsItems.map((item) => (
                    <div key={item._id} className="bg-light p-3 rounded-3 mb-3 border position-relative">
                      <span className="badge bg-warning text-dark mb-2">{item.date}</span>
                      <p className="text-dark mb-0 fw-medium small" style={{ lineHeight: '1.5' }}>{item.text}</p>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MissionNewsSection;
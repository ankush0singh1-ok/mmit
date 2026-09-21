import React from 'react';
import '../App.css';

const FeaturesFacilities = () => {
  const features = [
    {
      title: "Quality Education",
      // Open book / reading icon
      icon: <svg viewBox="0 0 24 24"><path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/></svg>
    },
    {
      title: "Talented Teachers",
      // Teacher / whiteboard icon
      icon: <svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 20H4v-4h4v4zm0-6H4v-4h4v4zm0-6H4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4z"/></svg>
    },
    {
      title: "Great Infrastructure", 
      // Building icon
      icon: <svg viewBox="0 0 24 24"><path d="M12 2L2 22h20L12 2zm0 3.82L19.09 20H4.91L12 5.82zM11 10h2v5h-2zm0 6h2v2h-2z"/></svg>
    },
    {
      title: "Innovation Support",
      // Brain / mind icon
      icon: <svg viewBox="0 0 24 24"><path d="M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61l-1.32 1.32c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l1.32-1.32C7.93 20.26 9.88 21 12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zm-1-11h2v4h-2zm0 6h2v2h-2z"/></svg>
    },
    {
      title: "Sports Facility",
      // Ball icon
      icon: <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-13h-2v4h2V7zm0 6h-2v2h2v-2z"/></svg>
    },
    {
      title: "Extra Curricular",
      // Disc / Circle icon
      icon: <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-12.5c-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5-2.01-4.5-4.5-4.5zm0 7c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
    },
    {
      title: "Library",
      // Book icon
      icon: <svg viewBox="0 0 24 24"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4zm0 15l1.5-1.5L9 19l1.5-1.5L12 19l1.5-1.5L15 19l1.5-1.5L18 19v1H6v-1zm12-2h-3l-1.5 1.5L12 17l-1.5 1.5L9 17l-1.5 1.5L6 17V4h12v13z"/></svg>
    },
    {
      title: "Laboratory",
      // Microscope/Flask shape representation
      icon: <svg viewBox="0 0 24 24"><path d="M21 21H3c-.55 0-1-.45-1-1s.45-1 1-1h18c.55 0 1 .45 1 1s-.45 1-1 1zM7.5 18c-.28 0-.5-.22-.5-.5v-4.14c0-.65-.39-1.23-.97-1.52L3.6 10.6C2.6 10.1 2 9.1 2 8V4c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v4c0 1.1-.6 2.1-1.6 2.6l-2.43 1.22c-.58.29-.97.87-.97 1.52v4.16c0 .28-.22.5-.5.5h-9zm1.5-1.5h6v-3.64c0-1.07.65-2.03 1.62-2.51l2.43-1.22c.5-.25.95-.75.95-1.3V4H5v3.83c0 .55.45 1.05.95 1.3l2.43 1.22c.97.48 1.62 1.44 1.62 2.51v3.64z"/></svg>
    }
  ];

  return (
    <section className="py-5 bg-white">
      <div className="container-fluid px-4 px-md-5">
        <h2 className="mb-4 fw-bold text-dark text-uppercase fs-3" style={{ letterSpacing: '0.5px' }}>
          FEATURES & FACILITIES
        </h2>
        
        {/* Bootstrap Grid: 1 col on mobile, 2 on tablet, 4 on desktop */}
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
          {features.map((feature, index) => (
            <div key={index} className="col">
              <div className="facility-card p-4 text-center d-flex flex-column align-items-center justify-content-center h-100">
                <div className="facility-icon mb-3">
                  {feature.icon}
                </div>
                <h6 className="fw-bold m-0 text-dark">{feature.title}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesFacilities;
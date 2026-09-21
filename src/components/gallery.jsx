import React, { useState, useEffect } from 'react';
import '../App.css';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [filter, setFilter] = useState('All');
  const [isLoading, setIsLoading] = useState(true);

  const categories = ['All', 'Campus', 'Events', 'Labs', 'Sports', 'Nature & Flora'];

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/gallery');
        if (response.ok) {
          const data = await response.json();
          // Reverse so newest uploads show first
          setImages(data.reverse());
        }
      } catch (error) {
        console.error("Failed to fetch gallery:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchGallery();
  }, []);

  const filteredImages = filter === 'All' 
    ? images 
    : images.filter(img => img.category === filter);

  return (
    <section className="py-5 flux-section-bg min-vh-100">
      <div className="container px-4 position-relative z-index-2">
        
        {/* Page Header */}
        <div className="text-center mb-5">
          <h1 className="fw-bold text-dark custom-heading">
            PHOTO <span className="text-warning">GALLERY</span>
          </h1>
          <p className="text-muted max-w-600 mx-auto">
            Explore the latest moments, campus facilities, and vibrant student life at MMIT GKP.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`btn fw-bold rounded-pill px-4 py-2 transition-hover ${
                filter === cat ? 'btn-warning shadow-sm' : 'btn-outline-dark bg-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        {isLoading ? (
          <div className="text-center py-5">
            <div className="spinner-border text-warning" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : filteredImages.length === 0 ? (
          <div className="flux-card p-5 text-center shadow-sm">
            <i className="bi bi-camera text-muted opacity-50" style={{ fontSize: '3rem' }}></i>
            <h5 className="text-dark fw-bold mt-3">No images found for this category.</h5>
            <p className="text-muted small mb-0">
              Check back soon for high-resolution campus shots, close-up insect photography, and highlights from our volleyball and long jump competitions.
            </p>
          </div>
        ) : (
          <div className="row g-4">
            {filteredImages.map((img) => (
              <div key={img._id} className="col-12 col-md-6 col-lg-4">
                <div className="flux-card h-100 overflow-hidden shadow-sm transition-hover border-0">
                  <div className="position-relative bg-dark" style={{ height: '250px' }}>
                    <img 
                      src={img.imageUrl} 
                      alt={img.title} 
                      className="w-100 h-100 object-fit-cover"
                      loading="lazy"
                    />
                    <span className="badge bg-dark text-warning position-absolute top-0 end-0 m-3 shadow-sm border border-secondary">
                      {img.category}
                    </span>
                  </div>
                  <div className="p-3 bg-white">
                    <h6 className="fw-bold text-dark mb-0">{img.title}</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
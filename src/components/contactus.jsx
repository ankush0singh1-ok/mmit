import React, { useState } from 'react';
import '../App.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can later connect a backend route to receive messages.
    // For now, we will just show a success message on the frontend.
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <section className="py-5 flux-section-bg min-vh-100 d-flex align-items-center">
      <div className="container px-4">
        
        {/* Page Header */}
        <div className="text-center mb-5 position-relative z-index-2">
          <div className="badge bg-danger mb-3 px-3 py-2 rounded-pill shadow-sm">
            Get In Touch
          </div>
          <h1 className="fw-bold text-dark custom-heading m-0">
            CONTACT <span className="text-warning">US</span>
          </h1>
          <p className="text-muted mt-2">We are here to help and answer any questions you might have.</p>
        </div>

        <div className="row g-4 position-relative z-index-2 align-items-stretch">
          
          {/* LEFT COLUMN: Contact Information */}
          <div className="col-12 col-lg-5">
            <div className="flux-card h-100 p-4 p-md-5 d-flex flex-column justify-content-center">
              <h4 className="fw-bold text-dark mb-4 border-bottom pb-3">Institute Details</h4>
              
              <div className="d-flex align-items-start mb-4">
                <div className="flux-icon-box rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0" style={{ width: '50px', height: '50px', background: 'linear-gradient(135deg, #002060, #0040a0)' }}>
                  <svg width="24" height="24" fill="white" viewBox="0 0 16 16">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                  </svg>
                </div>
                <div>
                  <h6 className="fw-bold text-dark mb-1">Campus Location</h6>
                  <p className="text-muted small mb-0">
                    Mahamaya Polytechnic of Information Technology<br />
                    Hariharpur, Gorakhpur<br />
                    Uttar Pradesh, India
                  </p>
                </div>
              </div>

              <div className="d-flex align-items-start mb-4">
                <div className="flux-icon-box rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0" style={{ width: '50px', height: '50px', background: 'linear-gradient(135deg, #002060, #0040a0)' }}>
                  <svg width="24" height="24" fill="white" viewBox="0 0 16 16">
                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                  </svg>
                </div>
                <div>
                  <h6 className="fw-bold text-dark mb-1">Email Support</h6>
                  <p className="text-muted small mb-0">info@mmitgkp.ac.in<br />admin@mmitgkp.ac.in</p>
                </div>
              </div>

              <div className="d-flex align-items-start">
                <div className="flux-icon-box rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0" style={{ width: '50px', height: '50px', background: 'linear-gradient(135deg, #002060, #0040a0)' }}>
                  <svg width="24" height="24" fill="white" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                  </svg>
                </div>
                <div>
                  <h6 className="fw-bold text-dark mb-1">Phone</h6>
                  <p className="text-muted small mb-0">+91 XXXXX XXXXX<br />Mon-Fri, 9:00 AM - 5:00 PM</p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: Contact Form */}
          <div className="col-12 col-lg-7">
            <div className="flux-card h-100 p-4 p-md-5">
              <h4 className="fw-bold text-dark mb-4">Send us a Message</h4>
              
              {isSubmitted && (
                <div className="alert alert-success py-2 text-center small" role="alert">
                  Thank you! Your message has been sent successfully. We will get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="row g-3 mb-3">
                  <div className="col-md-6 position-relative" style={{ zIndex: 10 }}>
                    <label className="form-label text-muted fw-bold small">Full Name</label>
                    <input 
                      type="text" 
                      name="name"
                      className="form-control p-3 bg-light border-0" 
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  <div className="col-md-6 position-relative" style={{ zIndex: 10 }}>
                    <label className="form-label text-muted fw-bold small">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      className="form-control p-3 bg-light border-0" 
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                </div>

                <div className="mb-3 position-relative" style={{ zIndex: 10 }}>
                  <label className="form-label text-muted fw-bold small">Subject</label>
                  <input 
                    type="text" 
                    name="subject"
                    className="form-control p-3 bg-light border-0" 
                    placeholder="How can we help you?"
                    value={formData.subject}
                    onChange={handleChange}
                    required 
                  />
                </div>

                <div className="mb-4 position-relative" style={{ zIndex: 10 }}>
                  <label className="form-label text-muted fw-bold small">Message</label>
                  <textarea 
                    name="message"
                    className="form-control p-3 bg-light border-0" 
                    placeholder="Write your message here..."
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required 
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-warning w-100 fw-bold py-3 rounded-3 shadow-sm position-relative" style={{ zIndex: 10 }}>
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactUs;
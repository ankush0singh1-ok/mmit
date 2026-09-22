import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
<<<<<<< HEAD
      const response = await fetch('http://localhost:5000/api/auth/admin/login', {
=======
      const response = await fetch('https://api-pl5i.onrender.com/api/auth/admin/login', {
>>>>>>> 193eab8 (new)
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      // Save token and user details to localStorage
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));

      // Redirect to the admin dashboard
      navigate('/admin/dashboard');

    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-5 flux-section-bg min-vh-100 d-flex align-items-center">
      <div className="container px-4">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-5">
            <div className="flux-card p-4 p-md-5">

              <div className="text-center mb-4 position-relative z-index-2">
                <div className="flux-icon-box rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '60px', height: '60px' }}>
                  <svg width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                  </svg>
                </div>
                <h2 className="fw-bold text-dark m-0">ADMIN <span className="text-warning">PORTAL</span></h2>
                <p className="text-muted small mt-2">Secure access for authorized administrators only.</p>
              </div>

              {/* Error Message Display */}
              {error && (
                <div className="alert alert-danger py-2 text-center small position-relative z-index-2" role="alert">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="position-relative z-index-2">
                <div className="mb-3">
                  <label className="form-label text-muted fw-bold small">Admin ID / Email</label>
                  <input
                    type="text"
                    name="username"
                    className="form-control p-3 bg-light border-0"
                    placeholder="Enter your Admin ID"
                    value={credentials.username}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label text-muted fw-bold small">Password</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control p-3 bg-light border-0"
                    placeholder="Enter your password"
                    value={credentials.password}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-warning w-100 fw-bold py-3 rounded-3 shadow-sm mb-3" disabled={isLoading}>
                  {isLoading ? 'VERIFYING...' : 'SECURE LOGIN'}
                </button>
              </form>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminLogin;
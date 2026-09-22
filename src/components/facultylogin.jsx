import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';

const FacultyLogin = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    // Clear the error message as soon as the user starts correcting their input
    if (error) setError(null);
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      // Use an environment variable for the API base URL
      // Vite uses import.meta.env, Create React App uses process.env
      const apiUrl = process.env.REACT_APP_API_URL || 'https://api-pl5i.onrender.com';
      
      const response = await fetch(`${apiUrl}/api/auth/login-faculty`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials)
      });

      // Check if the response is actually JSON before parsing to prevent crashes
      const contentType = response.headers.get("content-type");
      let data = {};
      if (contentType && contentType.indexOf("application/json") !== -1) {
        data = await response.json();
      }

      if (!response.ok) {
        throw new Error(data.message || 'Invalid credentials. Please try again.');
      }

      // Store auth data
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));

      // Redirect on success
      navigate('/faculty/dashboard'); 
      
    } catch (err) {
      // Differentiate between network errors and API errors
      if (err.name === 'TypeError') {
        setError('Unable to connect to the server. Please check your internet connection.');
      } else {
        setError(err.message);
      }
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
                <div className="flux-icon-box rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '60px', height: '60px', background: 'linear-gradient(135deg, #002060, #0040a0)' }}>
                  <svg width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                    <path fillRule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/>
                    <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
                  </svg>
                </div>
                <h2 className="fw-bold text-dark m-0">FACULTY <span className="text-warning">LOGIN</span></h2>
                <p className="text-muted small mt-2">Access the academic and grading dashboard.</p>
              </div>

              {error && (
                <div className="alert alert-danger py-2 text-center small position-relative z-index-2" role="alert">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="position-relative z-index-2">
                <div className="mb-3">
                  <label className="form-label text-muted fw-bold small">Official Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    className="form-control p-3 bg-light border-0" 
                    placeholder="faculty@mmit.ac.in"
                    value={credentials.email}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="mb-4">
                  <div className="d-flex justify-content-between">
                    <label className="form-label text-muted fw-bold small">Password</label>
                    <a href="#" className="text-warning small text-decoration-none">Forgot Password?</a>
                  </div>
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

                <button type="submit" className="btn btn-dark w-100 fw-bold py-3 rounded-3 shadow-sm mb-3" disabled={isLoading}>
                  {isLoading ? 'LOGGING IN...' : 'LOG IN'}
                </button>
                
                <div className="text-center mt-3">
                  <span className="text-muted small">New Faculty Member? </span>
                  <Link to="/sign-up-faculty" className="text-warning fw-bold text-decoration-none">
                    Register Here
                  </Link>
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacultyLogin;
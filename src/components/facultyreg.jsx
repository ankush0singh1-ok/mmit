import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';

const FacultySignUp = () => {
  const [formData, setFormData] = useState({
    fullName: '', employeeId: '', department: '', email: '', password: '', confirmPassword: ''
  });
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:5000/api/sign-up-faculty', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // Exclude confirmPassword from the payload sent to the backend
        body: JSON.stringify({
          fullName: formData.fullName,
          employeeId: formData.employeeId,
          department: formData.department,
          email: formData.email,
          password: formData.password
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Registration failed');
      }

      alert("Registration successful! Please log in.");
      navigate('/login-faculty');
      
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
          <div className="col-12 col-md-10 col-lg-7">
            <div className="flux-card p-4 p-md-5">
              
              <div className="text-center mb-4 position-relative z-index-2">
                <h2 className="fw-bold text-dark m-0">FACULTY <span className="text-warning">REGISTRATION</span></h2>
                <p className="text-muted small mt-2">Create your official academic portal account.</p>
              </div>

              {error && (
                <div className="alert alert-danger py-2 text-center small position-relative z-index-2" role="alert">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="position-relative z-index-2">
                <div className="row g-3 mb-3">
                  <div className="col-md-6">
                    <label className="form-label text-muted fw-bold small">Full Name</label>
                    <input 
                      type="text" 
                      name="fullName"
                      className="form-control p-3 bg-light border-0" 
                      placeholder="e.g. Dr. Ramesh Kumar"
                      value={formData.fullName}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label text-muted fw-bold small">Employee ID</label>
                    <input 
                      type="text" 
                      name="employeeId"
                      className="form-control p-3 bg-light border-0" 
                      placeholder="e.g. MMIT-F042"
                      value={formData.employeeId}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label text-muted fw-bold small">Department</label>
                  <select 
                    name="department" 
                    className="form-select p-3 bg-light border-0 text-muted"
                    value={formData.department}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select your department...</option>
                    <option value="CS">Computer Science</option>
                    <option value="IT">Information Technology</option>
                    <option value="EC">Electronics Engineering</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label text-muted fw-bold small">Official Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    className="form-control p-3 bg-light border-0" 
                    placeholder="name@mmit.ac.in"
                    value={formData.email}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="row g-3 mb-4">
                  <div className="col-md-6">
                    <label className="form-label text-muted fw-bold small">Password</label>
                    <input 
                      type="password" 
                      name="password"
                      className="form-control p-3 bg-light border-0" 
                      placeholder="Create password"
                      value={formData.password}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label text-muted fw-bold small">Confirm Password</label>
                    <input 
                      type="password" 
                      name="confirmPassword"
                      className="form-control p-3 bg-light border-0" 
                      placeholder="Confirm password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                </div>

                <button type="submit" className="btn btn-warning w-100 fw-bold py-3 rounded-3 shadow-sm mb-3" disabled={isLoading}>
                  {isLoading ? 'REGISTERING...' : 'REGISTER ACCOUNT'}
                </button>
                
                <div className="text-center mt-3">
                  <span className="text-muted small">Already have an account? </span>
                  <Link to="/login-faculty" className="text-dark fw-bold text-decoration-none">
                    Log In Here
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

export default FacultySignUp;
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const FacultyDashboard = () => {
  const [facultyData, setFacultyData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // 1. Check for authentication token and user data
    const token = localStorage.getItem('token');
    const userStr = localStorage.getItem('user');

    if (!token || !userStr) {
      // Not logged in, send back to login page
      navigate('/faculty/login');
      return;
    }

    const user = JSON.parse(userStr);

    // 2. Ensure the user is actually faculty, not an admin
    if (user.role !== 'faculty') {
      navigate('/faculty/login');
      return;
    }

    setFacultyData(user);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/faculty/login');
  };

  if (!facultyData) return null; // Prevent UI flash before redirect

  return (
    <section className="py-5 flux-section-bg min-vh-100">
      <div className="container px-4">
        
        {/* Dashboard Header */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-5 position-relative z-index-2">
          <div>
            <h1 className="fw-bold text-dark custom-heading m-0">
              FACULTY <span className="text-warning">DASHBOARD</span>
            </h1>
            <p className="text-muted mt-2 mb-0">
              Welcome back, <strong>{facultyData.fullName}</strong> 
              {facultyData.department && ` | ${facultyData.department} Department`}
            </p>
          </div>
          <button onClick={handleLogout} className="btn btn-outline-dark fw-bold rounded-pill px-4 mt-3 mt-md-0">
            Log Out
          </button>
        </div>

        {/* Dashboard Action Cards Grid */}
        <div className="row g-4 align-items-stretch position-relative z-index-2">
          
          {/* Card 1: Timetable & Classes */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="flux-card h-100 p-4 text-center d-flex flex-column align-items-center justify-content-center">
              <div className="flux-icon-box rounded-circle d-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                <svg width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
                  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                </svg>
              </div>
              <h5 className="fw-bold text-dark mb-2">My Timetable</h5>
              <p className="text-muted small mb-4">View your assigned classes and lecture schedule for the current semester.</p>
              <button className="btn btn-dark w-100 mt-auto rounded-3">View Schedule</button>
            </div>
          </div>

          {/* Card 2: Upload Study Materials */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="flux-card h-100 p-4 text-center d-flex flex-column align-items-center justify-content-center">
              <div className="flux-icon-box rounded-circle d-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                <svg width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                  <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z"/>
                </svg>
              </div>
              <h5 className="fw-bold text-dark mb-2">Study Materials</h5>
              <p className="text-muted small mb-4">Upload E-Books, PDF notes, and assignments for your students to access.</p>
              <button className="btn btn-dark w-100 mt-auto rounded-3">Manage Files</button>
            </div>
          </div>

          {/* Card 3: Grade Entry */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="flux-card h-100 p-4 text-center d-flex flex-column align-items-center justify-content-center">
              <div className="flux-icon-box rounded-circle d-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                <svg width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 1.5v-2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1v2z"/>
                  <path d="M11.146 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.793 9.793l2.647-2.647a.5.5 0 0 1 .708 0z"/>
                </svg>
              </div>
              <h5 className="fw-bold text-dark mb-2">Student Grades</h5>
              <p className="text-muted small mb-4">Update internal assessment marks and laboratory evaluations.</p>
              <button className="btn btn-warning w-100 mt-auto rounded-3 fw-bold">Update Marks</button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default FacultyDashboard;
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';

const DepartmentPage = () => {
  const { branchId } = useParams();
  const [faculties, setFaculties] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Map the new long URL parameters to the short codes saved in your database
  const departmentInfo = {
    'electronics': { name: 'Electronics Engineering', color: 'success', dbKey: 'EC' },
    'computer-science': { name: 'Computer Science', color: 'primary', dbKey: 'CS' },
    'information-technology': { name: 'Information Technology', color: 'info', dbKey: 'IT' }
  };

  const currentDept = departmentInfo[branchId?.toLowerCase()] || { name: 'Department', color: 'dark', dbKey: '' };

  useEffect(() => {
    const fetchFaculties = async () => {
      try {
<<<<<<< HEAD
        const response = await fetch('http://localhost:5000/api/faculty');
=======
        const response = await fetch('https://api-pl5i.onrender.com/api/faculty');
>>>>>>> 193eab8 (new)
        if (response.ok) {
          const data = await response.json();
          // Filter using the dbKey (e.g., 'CS') instead of the URL string
          const branchFaculty = data.filter(
            faculty => faculty.department === currentDept.dbKey
          );
          setFaculties(branchFaculty);
        }
      } catch (error) {
        console.error("Failed to fetch faculty data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFaculties();
  }, [branchId, currentDept.dbKey]); 

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  return (
    <section className="py-5 flux-section-bg min-vh-100">
      <div className="container px-4">
        
        <div className="text-center mb-5 position-relative z-index-2">
          <div className={`badge bg-${currentDept.color} mb-3 px-3 py-2 rounded-pill shadow-sm`}>
            Department Overview
          </div>
          <h1 className="fw-bold text-dark custom-heading m-0 text-uppercase">
            {currentDept.name}
          </h1>
        </div>

        <div className="row g-4 position-relative z-index-2">
          {isLoading ? (
            <div className="col-12 text-center py-5">
              <div className="spinner-border text-warning" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : faculties.length === 0 ? (
            <div className="col-12 text-center py-5">
              <div className="flux-card p-5 d-inline-block">
                <p className="text-muted m-0">No Lecturers registered for {currentDept.name} yet.</p>
              </div>
            </div>
          ) : (
            faculties.map((faculty) => (
              <div key={faculty._id} className="col-12 col-md-6 col-lg-4">
                <div className={`flux-card h-100 p-4 text-center d-flex flex-column align-items-center transition-hover border-top border-4 border-${currentDept.color}`}>
                  
                  <div className="flux-icon-box rounded-circle d-flex align-items-center justify-content-center mb-3 shadow-sm" style={{ width: '80px', height: '80px', background: 'linear-gradient(135deg, #f8f9fa, #e9ecef)' }}>
                    <svg width="40" height="40" fill="#6c757d" viewBox="0 0 16 16">
                      <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                      <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                    </svg>
                  </div>
                  
                  <h5 className="fw-bold text-dark mb-1">{faculty.fullName}</h5>
                  <span className="badge bg-dark mb-3 px-3 py-2 rounded-pill">Lecturer</span>

                  <div className="w-100 text-start bg-light p-3 rounded-3 mt-auto border">
                    <div className="mb-2 d-flex justify-content-between border-bottom pb-2">
                      <span className="text-muted small fw-bold">Emp ID:</span>
                      <span className="text-dark small">{faculty.employeeId}</span>
                    </div>
                    <div className="mb-2 d-flex justify-content-between border-bottom pb-2">
                      <span className="text-muted small fw-bold">Joined:</span>
                      <span className="text-dark small">{formatDate(faculty.createdAt)}</span>
                    </div>
                    <div className="d-flex justify-content-between pt-1">
                      <span className="text-muted small fw-bold">Email:</span>
                      <span className="text-dark small text-truncate ms-2" title={faculty.email}>
                        {faculty.email}
                      </span>
                    </div>
                  </div>

                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default DepartmentPage;
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const AdminDashboard = () => {
  const [adminData, setAdminData] = useState(null);
  const [newsItems, setNewsItems] = useState([]);
  const [facultyList, setFacultyList] = useState([]);
  
  // News Form State
  const [formData, setFormData] = useState({ date: '', text: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  
  // Gallery Upload State
  const [uploadMethod, setUploadMethod] = useState('file'); // 'file' or 'url'
  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const fileInputRef = useRef(null);

  const navigate = useNavigate();

  // 1. Authenticate Admin and Load Data
  useEffect(() => {
    const token = localStorage.getItem('token');
    const userStr = localStorage.getItem('user');

    if (!token || !userStr) {
      navigate('/admin/login');
      return;
    }

    const user = JSON.parse(userStr);
    if (user.role !== 'admin') {
      navigate('/admin/login');
      return;
    }

    setAdminData(user);
    fetchNews();
    fetchFaculties();
  }, [navigate]);

  // 2. Fetch Live News
  const fetchNews = async () => {
    try {
      const response = await fetch('https://api-pl5i.onrender.com/api/news');
      if (response.ok) {
        const data = await response.json();
        setNewsItems(data);
      }
    } catch (error) {
      console.error("Failed to fetch news:", error);
    }
  };

  // 3. Fetch Faculty Accounts
  const fetchFaculties = async () => {
    try {
      const response = await fetch('https://api-pl5i.onrender.com/api/faculty');
      if (response.ok) {
        const data = await response.json();
        setFacultyList(data);
      }
    } catch (error) {
      console.error("Failed to fetch faculty:", error);
    }
  };

  // 4. Handle Form Inputs for News
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 5. Upload New Announcement
  const handleUpload = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage({ type: '', text: '' });

    try {
      const response = await fetch('https://api-pl5i.onrender.com/api/news', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) throw new Error('Failed to publish announcement.');

      setMessage({ type: 'success', text: 'Announcement published successfully!' });
      setFormData({ date: '', text: '' }); 
      fetchNews(); 
    } catch (error) {
      setMessage({ type: 'danger', text: error.message });
    } finally {
      setIsLoading(false);
    }
  };

  // 6. Delete Announcement
  const handleDeleteNews = async (id) => {
    if (!window.confirm("Are you sure you want to delete this announcement?")) return;
    try {
      const response = await fetch(`https://api-pl5i.onrender.com/api/news/${id}`, { method: 'DELETE' });
      if (!response.ok) throw new Error('Failed to delete announcement.');
      fetchNews(); 
    } catch (error) {
      alert(error.message);
    }
  };

  // 7. Delete Faculty Member
  const handleDeleteFaculty = async (id) => {
    if (!window.confirm("CRITICAL WARNING: Are you sure you want to permanently delete this faculty account?")) return;
    try {
      const response = await fetch(`https://api-pl5i.onrender.com/api/faculty/${id}`, { method: 'DELETE' });
      if (!response.ok) throw new Error('Failed to delete faculty member.');
      fetchFaculties(); 
    } catch (error) {
      alert(error.message);
    }
  };

  // 8. Logout
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/admin/login');
  };

  // --- DRAG AND DROP HANDLERS ---
  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") setDragActive(true);
    else if (e.type === "dragleave") setDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileSelect(e.dataTransfer.files[0]);
    }
  };

  const handleFileSelect = (file) => {
    setSelectedFile(file);
    setPreviewUrl(URL.createObjectURL(file));
  };

  // 9. Dual-Mode Gallery Submit
  const handleGallerySubmit = async (e) => {
    e.preventDefault();

    try {
      let response;
      const title = e.target.title.value;
      const category = e.target.category.value;

      if (uploadMethod === 'file') {
        if (!selectedFile) return alert("Please select or drag an image first!");
        
        const submitData = new FormData();
        submitData.append('title', title);
        submitData.append('category', category);
        submitData.append('image', selectedFile);

        // FormData request (No headers needed)
        response = await fetch('https://api-pl5i.onrender.com/api/gallery', {
          method: 'POST',
          body: submitData 
        });
      } else {
        const imageUrl = e.target.imageUrl.value;
        if (!imageUrl) return alert("Please enter an image URL!");

        // JSON request (Headers required)
        response = await fetch('https://api-pl5i.onrender.com/api/gallery', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ title, category, imageUrl })
        });
      }
      
      if (response.ok) {
        alert('Image successfully uploaded to gallery!');
        e.target.reset();
        setSelectedFile(null);
        setPreviewUrl(null);
      } else {
        const errorData = await response.json();
        alert(`Upload failed: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Network error:", error);
      alert('Upload failed due to a network error.');
    }
  };

  if (!adminData) return null;

  return (
    <section className="py-5 flux-section-bg min-vh-100">
      <div className="container px-4">
        
        {/* Header */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-5 position-relative z-index-2">
          <div>
            <h1 className="fw-bold text-dark custom-heading m-0">
              ADMIN <span className="text-warning">CONTROL PANEL</span>
            </h1>
            <p className="text-muted mt-2 mb-0">System Administrator: <strong>{adminData.fullName}</strong></p>
          </div>
          <button onClick={handleLogout} className="btn btn-outline-dark fw-bold rounded-pill px-4 mt-3 mt-md-0">
            Secure Logout
          </button>
        </div>

        {/* TOP ROW: News Management */}
        <div className="row g-4 align-items-stretch position-relative z-index-2 mb-5">
          <div className="col-12 col-lg-5">
            <div className="flux-card h-100 p-4 p-md-5">
              <h4 className="fw-bold text-dark mb-4">Post Announcement</h4>
              
              {message.text && (
                <div className={`alert alert-${message.type} py-2 text-center small`} role="alert">
                  {message.text}
                </div>
              )}
              
              <form onSubmit={handleUpload}>
                <div className="mb-3 position-relative" style={{ zIndex: 10 }}>
                  <label className="form-label text-muted fw-bold small">Display Date</label>
                  <input type="text" name="date" className="form-control p-3 bg-light border-0" placeholder="e.g. Aug 25, 2026" value={formData.date} onChange={handleChange} required />
                </div>
                
                <div className="mb-4 position-relative" style={{ zIndex: 10 }}>
                  <label className="form-label text-muted fw-bold small">Announcement Text</label>
                  <textarea 
                    name="text"
                    className="form-control p-3 bg-light border-0" 
                    placeholder="Write the news update here..."
                    rows="4"
                    value={formData.text}
                    onChange={handleChange}
                    required 
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-warning w-100 fw-bold py-3 rounded-3 shadow-sm position-relative" style={{ zIndex: 10 }} disabled={isLoading}>
                  {isLoading ? 'PUBLISHING...' : 'PUBLISH TO FRONTEND'}
                </button>
              </form>
            </div>
          </div>

          <div className="col-12 col-lg-7">
            <div className="flux-card h-100 p-4 p-md-5">
              <h4 className="fw-bold text-dark mb-4 border-bottom pb-3">Live Announcements</h4>
              
              <div className="overflow-auto pe-2 position-relative" style={{ maxHeight: '400px', zIndex: 10 }}>
                {newsItems.length === 0 ? (
                  <p className="text-muted text-center py-4">No announcements uploaded yet.</p>
                ) : (
                  newsItems.map((item) => (
                    <div key={item._id} className="bg-light p-3 rounded-3 mb-3 d-flex justify-content-between align-items-start border">
                      <div>
                        <span className="badge bg-warning text-dark mb-2">{item.date}</span>
                        <p className="text-dark mb-0 fw-medium small" style={{ lineHeight: '1.5' }}>{item.text}</p>
                      </div>
                      <button onClick={() => handleDeleteNews(item._id)} className="btn btn-sm btn-outline-danger border-0 ms-3 flex-shrink-0">
                        Delete
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>

        {/* MIDDLE ROW: Faculty Management */}
        <div className="row position-relative z-index-2 mb-5">
          <div className="col-12">
            <div className="flux-card p-4 p-md-5">
              <h4 className="fw-bold text-dark mb-4 border-bottom pb-3">Manage Faculty Accounts</h4>
              
              <div className="table-responsive position-relative" style={{ zIndex: 10 }}>
                <table className="table table-hover align-middle">
                  <thead className="table-light">
                    <tr>
                      <th>Name</th>
                      <th>Employee ID</th>
                      <th>Department</th>
                      <th>Email</th>
                      <th className="text-end">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {facultyList.length === 0 ? (
                      <tr><td colSpan="5" className="text-center py-4 text-muted">No faculty accounts found.</td></tr>
                    ) : (
                      facultyList.map((faculty) => (
                        <tr key={faculty._id}>
                          <td className="fw-bold">{faculty.fullName}</td>
                          <td><span className="badge bg-secondary">{faculty.employeeId}</span></td>
                          <td>{faculty.department || 'N/A'}</td>
                          <td>{faculty.email}</td>
                          <td className="text-end">
                            <button onClick={() => handleDeleteFaculty(faculty._id)} className="btn btn-sm btn-danger fw-bold rounded-pill px-3">
                              Remove
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
              
            </div>
          </div>
        </div>

        {/* BOTTOM ROW: Dual-Mode Gallery Upload */}
        <div className="row position-relative z-index-2 mt-4 mb-5">
          <div className="col-12">
            <div className="flux-card p-4 p-md-5">
              <h4 className="fw-bold text-dark mb-4 border-bottom pb-3">Upload Gallery Image</h4>
              
              {/* Method Toggle */}
              <div className="btn-group mb-4 position-relative" style={{ zIndex: 10 }}>
                <button 
                  type="button" 
                  className={`btn fw-bold px-4 ${uploadMethod === 'file' ? 'btn-warning' : 'btn-outline-secondary'}`} 
                  onClick={() => setUploadMethod('file')}
                >
                  <i className="bi bi-upload me-2"></i>Drag & Drop File
                </button>
                <button 
                  type="button" 
                  className={`btn fw-bold px-4 ${uploadMethod === 'url' ? 'btn-warning' : 'btn-outline-secondary'}`} 
                  onClick={() => setUploadMethod('url')}
                >
                  <i className="bi bi-link-45deg me-2"></i>Direct URL
                </button>
              </div>

              <form onSubmit={handleGallerySubmit}>
                <div className="row g-4 mb-4">
                  
                  {/* Common Fields: Title & Category */}
                  <div className="col-md-6 position-relative" style={{ zIndex: 10 }}>
                    <label className="form-label text-muted fw-bold small">Image Title</label>
                    <input type="text" name="title" className="form-control p-3 bg-light border-0 mb-3" placeholder="e.g. Volleyball Match" required />
                    
                    <label className="form-label text-muted fw-bold small">Category</label>
                    <select name="category" className="form-select p-3 bg-light border-0 text-muted" required>
                      <option value="">Select Category...</option>
                      <option value="Campus">Campus</option>
                      <option value="Events">Events</option>
                      <option value="Labs">Labs</option>
                      <option value="Sports">Sports</option>
                      <option value="Nature & Flora">Nature & Flora</option>
                    </select>
                  </div>

                  {/* Dynamic Upload Zone based on Toggle */}
                  <div className="col-md-6 position-relative" style={{ zIndex: 10 }}>
                    {uploadMethod === 'file' ? (
                      <>
                        <label className="form-label text-muted fw-bold small">Image File</label>
                        <div 
                          className={`border-2 border-dashed rounded-3 p-4 text-center transition-hover h-100 d-flex flex-column justify-content-center align-items-center ${dragActive ? 'border-warning bg-warning bg-opacity-10' : 'border-secondary bg-light'}`}
                          onDragEnter={handleDrag}
                          onDragLeave={handleDrag}
                          onDragOver={handleDrag}
                          onDrop={handleDrop}
                          onClick={() => fileInputRef.current.click()}
                          style={{ cursor: 'pointer', minHeight: '150px' }}
                        >
                          <input type="file" ref={fileInputRef} onChange={(e) => { if(e.target.files && e.target.files[0]) handleFileSelect(e.target.files[0]) }} accept="image/*" className="d-none" />
                          
                          {previewUrl ? (
                            <div className="position-relative w-100 h-100">
                              <img src={previewUrl} alt="Preview" className="img-fluid rounded shadow-sm object-fit-cover" style={{ maxHeight: '120px' }} />
                              <div className="mt-2 text-success small fw-bold"><i className="bi bi-check-circle me-1"></i>File Selected</div>
                            </div>
                          ) : (
                            <>
                              <div className="text-muted mb-2">
                                <svg width="40" height="40" fill="currentColor" viewBox="0 0 16 16">
                                  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                                  <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z"/>
                                </svg>
                              </div>
                              <p className="m-0 text-muted small fw-medium">Drag & drop your shot here, or click to browse</p>
                            </>
                          )}
                        </div>
                      </>
                    ) : (
                      <>
                        <label className="form-label text-muted fw-bold small">Direct Link</label>
                        <div className="h-100 d-flex flex-column justify-content-center">
                           <input type="url" name="imageUrl" className="form-control p-3 bg-light border-0" placeholder="https://example.com/image.jpg" />
                           <p className="text-muted small mt-2"><i className="bi bi-info-circle me-1"></i>Ensure the URL points directly to an image file (.jpg, .png, etc.)</p>
                        </div>
                      </>
                    )}
                  </div>
                </div>
                
                <button type="submit" className="btn btn-warning fw-bold py-3 px-5 rounded-3 shadow-sm position-relative w-100" style={{ zIndex: 10 }}>
                  PUBLISH TO GALLERY
                </button>
              </form>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AdminDashboard;
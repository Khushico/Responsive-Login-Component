import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css';

const Profile = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Get user data from localStorage
    const storedUser = localStorage.getItem('popx_user');
    if (storedUser) {
      setUserData(JSON.parse(storedUser));
    } else {
      // Redirect to landing if no user data
      navigate('/');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('popx_user');
    navigate('/');
  };

  if (!userData) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1 className="profile-title">Account Settings</h1>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
      
      <div className="profile-card">
        <div className="profile-image-section">
          <div className="profile-image">
            <img 
              src="https://ui-avatars.com/api/?name=User&background=6C5CE7&color=fff&size=150" 
              alt="" 
            />
          </div>
          <div className="profile-info">
            <h2 className="profile-name">
              {userData.fullName || userData.email?.split('@')[0] || 'User'}
            </h2>
            <p className="profile-email">
              {userData.email}
            </p>
          </div>
        </div>
        
        <div className="profile-description">
          <p>
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing
            Elit, Sed Diam Nonumy Eirmod Tempor Invidunt Ut
            Labore Et Dolore Magna Aliquyam Erat, Sed Diam
          </p>
        </div>

        {userData.fullName && (
          <div className="profile-details">
            <div className="detail-item">
              <span className="detail-label">Full Name:</span>
              <span className="detail-value">{userData.fullName}</span>
            </div>
            
            {userData.phoneNumber && (
              <div className="detail-item">
                <span className="detail-label">Phone:</span>
                <span className="detail-value">{userData.phoneNumber}</span>
              </div>
            )}
            
            {userData.companyName && (
              <div className="detail-item">
                <span className="detail-label">Company:</span>
                <span className="detail-value">{userData.companyName}</span>
              </div>
            )}
            
            <div className="detail-item">
              <span className="detail-label">Agency:</span>
              <span className="detail-value">
                {userData.isAgency ? 'Yes' : 'No'}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;

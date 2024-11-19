import React, { useState } from "react";
import '../styles/Profile.css'; // Create a CSS file for styling

const Profile = () => {
  const [username, setUsername] = useState("JohnDoe"); // Example username
  const [email, setEmail] = useState("johndoe@example.com"); // Example email
  const [age, setAge] = useState(25); // Example age
  const [isEditing, setIsEditing] = useState(false); // State to toggle editing mode

  const handleSave = () => {
    // Implement save functionality here (e.g., API call to save changes)
    setIsEditing(false);
    alert("Profile updated successfully!");
  };

  return (
    <div className="profile-container">
      <h1>User Profile</h1>
      {isEditing ? (
        <div className="profile-edit">
          <label>
            Username:
            <input 
              type="text" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
            />
          </label>
          <label>
            Email:
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </label>
          <label>
            Age:
            <input 
              type="number" 
              value={age} 
              onChange={(e) => setAge(e.target.value)} 
            />
          </label>
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <div className="profile-info">
          <p><strong>Username:</strong> {username}</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Age:</strong> {age}</p>
          <button onClick={() => setIsEditing(true)}>Edit Profile</button>
        </div>
      )}
    </div>
  );
};

export default Profile;
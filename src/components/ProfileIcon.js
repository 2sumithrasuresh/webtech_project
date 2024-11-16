import React from "react";
import profilePic from "../files/cutepfp.jpg";

const ProfileIcon = () => {
  return (
    <div className="profile-icon">
      <img
        src={profilePic}
        alt="Profile"
        className="profile-image"
      />
    </div>
  );
};

export default ProfileIcon;

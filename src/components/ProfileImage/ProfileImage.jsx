import React from "react";
import "./ProfileImage.css";

function ProfileImage({ image, width, height, border_radius }) {
  return (
    <div className="flex profile" style={{ width: width, height: height }}>
      <div
        className="profile-outer-circle flex"
        style={{
          width: width,
          height: width,
          borderRadius: border_radius,
        }}
      />
      <div
        className="profile-image-outer"
        style={{
          width: width,
          height: height,
          borderBottomLeftRadius: border_radius,
          borderBottomRightRadius: border_radius,
        }}
      >
        <img src={image} alt="Anirudh" />
      </div>
    </div>
  );
}

export default ProfileImage;

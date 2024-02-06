import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./IconButton.css";

function IconButton({ icon, link, icon_button_color, icon_color }) {
  return (
    <div
      className="flex items-center justify-center icon-button"
      style={{
        backgroundColor: icon_button_color ? icon_button_color : "#fff",
      }}
    >
      <a href={link} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon
          icon={icon}
          size="lg"
          style={{ color: icon_color ? icon_color : "#fff" }}
        />
      </a>
    </div>
  );
}

export default IconButton;

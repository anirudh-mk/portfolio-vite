import React from "react";
import "./TextButton.css";

function TextButton({ button_text, link, text_button_color, font_color }) {
  return (
    <div
      className="flex items-center justify-center text-button"
      style={{
        backgroundColor: text_button_color ? text_button_color : "#fff",
      }}
    >
      <a href={link}>
        <p style={{ color: font_color ? font_color : "#fff" }}>{button_text}</p>
      </a>
    </div>
  );
}

export default TextButton;

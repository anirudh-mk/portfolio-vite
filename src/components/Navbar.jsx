import React from "react";
import style from "../styles/navbar.module.css";

function Navbar() {
  return (
    <div id="navbar" className={style.image}>
      <a href="navbar">
        <h1>Anirudh MK</h1>
      </a>
      <div className={style.buttonContainer}>
        <a href="home"><h1>Home</h1></a>
        <a href="about"><h1>About</h1></a>
        <a href="projects"><h1>Projects</h1></a>
        <a href="contact"><h1>Contact</h1></a>
      </div>
    </ div>
  );
}

export default Navbar;

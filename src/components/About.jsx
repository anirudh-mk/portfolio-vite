import React from "react";
import style from '../styles/about.module.css'
import ProfileImage from "./ProfileImage/ProfileImage";
import AnirudhImage from "../assets/images/anirudh.png";

function About() {
  return (
    <div id="about" className={style.about}>
      <h1 className={style.headding}>About</h1>
      <div className={style.container}>
        <div className={style.image}>
          <ProfileImage
            image={AnirudhImage}
            width={117}
            height={138}
            border_radius={58}
          />
        </div>
        <div className={style.description}>
          <p>Hey, I'm Anirudh MK, a backend web developer at G-tech Mulearn,
            immersed in Django and Python. Pursuing a degree in Electronics and
            Communication Engineering, I'm passionate about app and web
            development, as well as robotics. Let's connect</p>
          <br />
          <i>
            -I'm eager to collaborate and discuss tech innovations.
          </i>
        </div>
      </div>
    </div>
  );
}

export default About;

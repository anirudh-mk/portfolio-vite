import React from "react";
import "./Home.css";
import ProfileImage from "../ProfileImage/ProfileImage";
import AnirudhImage from "../../assets/images/anirudh.png";
import TextButton from "../TextButton/TextButton";
import IconButton from "../IconButton/IconButton";
import {
  faGithubAlt,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <div className="home grid grid-row-2 gap-[30px] pb-[80px]">
      <div className="flex justify-center pt-[30px]">
        <ProfileImage
          image={AnirudhImage}
          width={300}
          height={351}
          border_radius={172}
        />
      </div>
      <div className="flex justify-center grid grid-row-2 gap-[30px]">
        <h1 className="text-[30px] leading-[3.5rem] font-bold">
          Hi <br />
          I'am Anirudh MK
          <br />
          Web Developer
        </h1>
        <div className="grid grid-row-2 gap-[30px]">
          <div className="flex justify-center">
            <TextButton
              button_text="Download CV"
              link="https://drive.google.com/uc?export=download&id=1-4GLCPY6f3s-t-zt0tmb95Kg-2hHJ0B3"
              text_button_color="#6E6F64"
            />
          </div>
          <div className="flex justify-center grid-cols-4 gap-[20px]">
            <IconButton
              icon={faGithubAlt}
              link="https://github.com/anirudh-mk"
              icon_button_color="#6E6F64"
            />
            <IconButton
              icon={faEnvelope}
              link="https://mail.google.com/mail/u/0/?fs=0&to=anirudhmk123@gmail.com&tf=cm"
              icon_button_color="#6E6F64"
            />
            <IconButton
              icon={faLinkedinIn}
              link="https://www.linkedin.com/in/anirudh-mk"
              icon_button_color="#6E6F64"
            />
            <IconButton icon={faTwitter} icon_button_color="#6E6F64" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

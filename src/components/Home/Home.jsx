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
    <div className="home grid grid-row-2 gap-[30px] pb-[80px] pt-[100px] md:grid-cols-2 md:gap-[20px] md:px-[80px] lg:w-[1192px] lg:mx-auto">
      <div className="flex justify-center pt-[30px] md:hidden">
        <ProfileImage
          image={AnirudhImage}
          width={300}
          height={351}
          border_radius={172}
        />
      </div>
      <div className="flex justify-center grid grid-row-2 gap-[30px]">
        <h1 className="text-[30px] leading-[3.5rem] font-bold md:px-[30px] md:text-[40px] md:leading-[5rem]">
          Hi <br />
          I'am Anirudh MK
          <br />
          Web Developer
        </h1>
        <div className="grid grid-row-2 gap-[30px] md:grid-cols-2 md:gap-0 md:justify-end">
          <div className="flex justify-center">
            <TextButton
              button_text="Download CV"
              link="https://drive.google.com/uc?export=download&id=1-4GLCPY6f3s-t-zt0tmb95Kg-2hHJ0B3"
              text_button_color="#6E6F64"
            />
          </div>
          <div className="flex justify-center grid-cols-4 gap-[20px] md:justify-start">
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
      <div className="hidden justify-center pt-[30px] md:flex">
        <ProfileImage
          image={AnirudhImage}
          width={344}
          height={403}
          border_radius={172}
        />
      </div>
    </div>
  );
}

export default Home;

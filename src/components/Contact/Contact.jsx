import React from "react";
import TextButton from "../TextButton/TextButton";
import IconButton from "../IconButton/IconButton";
import {
  faGithubAlt,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
function Contact() {
  return (
    <div className="bg-[#6E6F64] pt-[28px] pb-[60px]">
      <h1 className="text-white text-[22px] font-bold pl-[20px] pb-[10px]">
        Contact
      </h1>
      <div className="grid grid-row-2 gap-[30px] py-[40px]">
        <div className="flex justify-center">
          <TextButton
            button_text="Download CV"
            link="https://drive.google.com/uc?export=download&id=1-4GLCPY6f3s-t-zt0tmb95Kg-2hHJ0B3"
            font_color="#6E6F64"
          />
        </div>
        <div className="flex justify-center grid-cols-4 gap-[20px]">
          <IconButton
            icon={faGithubAlt}
            link="https://github.com/anirudh-mk"
            icon_color="#6E6F64"
          />
          <IconButton
            icon={faEnvelope}
            link="https://mail.google.com/mail/u/0/?fs=0&to=anirudhmk123@gmail.com&tf=cm"
            icon_color="#6E6F64"
          />
          <IconButton
            icon={faLinkedinIn}
            link="https://www.linkedin.com/in/anirudh-mk"
            icon_color="#6E6F64"
          />
          <IconButton icon={faTwitter} icon_color="#6E6F64" />
        </div>
      </div>
      <h1 className="text-center text-white text-[16px] font-medium">
        &copy; Anirudh MK
      </h1>
    </div>
  );
}

export default Contact;

import React from "react";
import ProfileImage from "../ProfileImage/ProfileImage";
import AnirudhImage from "../../assets/images/anirudh.png";

function About() {
  return (
    <div className="bg-[#6E6F64] pt-[28px] pb-[80px]">
      <h1 className="text-[22px] font-bold text-white pl-[20px]">About</h1>
      <div className="grid grid-row-2">
        <div className="flex justify-center py-[20px]">
          <ProfileImage
            image={AnirudhImage}
            width={117}
            height={138}
            border_radius={58}
          />
        </div>
        <div className="py-[20px]">
          <p className="text-white text-[18px] font-semibold px-[40px]">
            Hey, I'm Anirudh MK, a backend web developer at G-tech Mulearn,
            immersed in Django and Python. Pursuing a degree in Electronics and
            Communication Engineering, I'm passionate about app and web
            development, as well as robotics. Let's connect
            <br />
            <br />
            <i className="font-normal">
              -I'm eager to collaborate and discuss tech innovations.
            </i>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;

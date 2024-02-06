import React from "react";
import "./Home.css";
import ProfileImage from "../ProfileImage/ProfileImage";
import AnirudhImage from "../../assets/images/anirudh.png";

function Home() {
  return (
    <div className="home">
      <div className="flex justify-center pt-[40px]">
        <ProfileImage
          image={AnirudhImage}
          width={300}
          height={351}
          border_radius={172}
        />
      </div>
      <div className="flex justify-center pt-[20px]">
        <h1 className="text-[30px] leading-[3.5rem] font-bold">
          Hi <br />
          I'am Anirudh MK
          <br />
          Web Developer
        </h1>
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Home;

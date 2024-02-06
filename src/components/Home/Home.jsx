import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="flex justify-center">
        <div className="w-[300px] h-[300px] bg-[tomato]"></div>
      </div>
      <div className="flex justify-center">
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

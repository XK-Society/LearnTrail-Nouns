import React from "react";
import Guild from "../assets/Guild.png";
const Content = () => {
  return (
    <div className="w-full bg-[#FBF6E2] py-16 px-4">
      <div className="max-w-[1280px] mx-auto grid md:grid-cols-2">
        <img className="max-w-[500px] mx-auto my-4" src={Guild} alt="/" />
        <div className="flex flex-col justify center">
          <p className="text-[#E68369] md:text-xl font-normal text-xl font-presstart pt-28">
            COURSE LEARNING GUILD
          </p>
          <h1 className="md:text-xl sm:text-xl font-normal py-2 pt-10 font-presstart tracking-tight text-[#131842]">
            All courses listed
          </h1>
          <p className="text-lg font-play font-normal">
            At Learn Trail, we believe in transforming the learning experience
            by combining education with gamification. Our mission is to onboard
            and empower the next generation of Web3 developers, artists, and
            entrepreneurs through interactive and engaging courses.
          </p>
          <button className="bg-[#E68369] text-[#FBF6E2] w-[200px] rounded-md font-bold my-6 mx-auto py-3 font-play hover:bg-[#131842] ">
            Learn with us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Content;

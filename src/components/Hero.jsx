import React from "react";
import { Link } from "react-router-dom";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className="text-[#FBF6E2] bg-[url('/src/assets/herobg.png')] bg-contain bg-center bg-no-repeat relative mt-10 z-1">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#ECCEAE] p-2 font-semibold text-3xl font-play">GROWING WITH LEARNING</p>
        <h1 className="md:py-6 font-presstart md:text-5xl sm:text-6xl tracking-tighter">
          Learn to the max
        </h1>
        <div className="flex justify-center items-center font-play">
          <p className="md:text-4xl sm:text-3xl font-bold py-4">
            Easy, flexible learning for
          </p>
          <ReactTyped
            className="md:text-4xl sm:text-3xl font-bold md:pl-4 pl-2"
            strings={["Student", "Artist", "Business"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-[#FBF6E2] font-play">
          We will guide to the end of your journey
        </p>
        <button className="bg-[#E68369] w-[200px] rounded-md my-6 mx-auto py-3 font-play font-bold hover:bg-[#FBF6E2] hover:text-[#131842]">
          <Link to="/coursepage">Enroll now</Link>
        </button>
      </div>
    </div>
  );
};

export default Hero;

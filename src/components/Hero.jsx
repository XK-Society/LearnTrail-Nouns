import React from "react";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2">GROWING WITH LEARNING</p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Learn to the max
        </h1>
        <div className='flex justify-center items-center'>
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Easy, flexible learning for 
          </p>
          <ReactTyped
          className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
            strings={['Student','Artist','Business']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>We will guide to the end of your journey</p>
        <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3' >Enroll now</button>
      </div>
    </div>
  );
};

export default Hero;

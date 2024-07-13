import React from "react";
import Navbar from "../../../components/Navbar";

const CourseDetails = () => {
  return (
    <div>
      <Navbar/>

      {/* player character */}
      <div className="flex justify-center items-center mt-4">
        <img src="src/assets/character/player.jpg" className="w-52 h-52"/>  
      </div>

      {/* player HP */}
      <div className="flex justify-center items-center">
        <img src="src/assets/character/hp.png" className="w-52 ml-1"/>
      </div>

      {/* learning information */}
      <div className="flex items-center justify-center m-10">
        <p className="text-left text-balance text-white mb-4 text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus finibus ex justo, at viverra eros pellentesque in. Praesent fermentum venenatis nunc, vitae rutrum tellus scelerisque at. Donec aliquam cursus sem, at placerat magna tristique non. Praesent aliquam ultricies ornare. Morbi turpis arcu, fringilla ut tortor in, lobortis convallis quam. Cras porta mollis tellus in rutrum. Nullam vitae pellentesque quam. Nullam congue ullamcorper nulla, nec tristique nulla bibendum suscipit.
        </p>
      </div>

      {/* back next button */}
      <div className="flex items-center justify-center space-x-4 mt-4 mb-4">
        <button type="button" className="styled border-0 leading-10 px-5 font-semibold text-base text-center text-black rounded-lg bg-[#E68369] custom-gradient custom-box-shadow hover:bg-[#ECCEAE] active:custome-active-box-shadow text-shadow w-36 h-15">Back</button>
        <button type="button" className="styled border-0 leading-10 px-5 font-semibold text-base text-center text-black rounded-lg bg-[#E68369] custom-gradient custom-box-shadow hover:bg-[#ECCEAE] active:custome-active-box-shadow text-shadow w-36 h-15">Next</button>
      </div>
    </div>
  );
};

export default CourseDetails;
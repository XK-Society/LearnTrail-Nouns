import React from "react";
import Navbar from "../../../components/Navbar";

const CourseContent = () => {
  return (
    <div>
      <Navbar/>
      
      <div className="flex justify-center">
        <h1 className="text-white text-lg font-bold">Read the content to earn the weapon</h1>
      </div>

      <div className="flex m-10">
        {/* left section */}
        <div className="w-1/2 p-4">

          {/* player's character */}
          <div>
            <img src="src/assets/character/player.jpg" className="w-52 h-52"/>
          </div>

          {/* player's HP */}
          <div>
            <img src="src/assets/character/hp.png" className="w-52 ml-1"/>
          </div>

          {/* learning information */}
          <div className="flex items-center justify-center ">
            <p className="text-white mb-4 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus finibus ex justo, at viverra eros pellentesque in. Praesent fermentum venenatis nunc, vitae rutrum tellus scelerisque at. Donec aliquam cursus sem, at placerat magna tristique non. Praesent aliquam ultricies ornare. Morbi turpis arcu, fringilla ut tortor in, lobortis convallis quam. Cras porta mollis tellus in rutrum. Nullam vitae pellentesque quam. Nullam congue ullamcorper nulla, nec tristique nulla bibendum suscipit.
            </p>
          </div>
        </div>

        {/* right section */}
        <div className="w-1/2 p-4">

          {/* player's weapon */}
          <div>
            <img src="src/assets/character/weapon.jpg" className="w-36 h-36"/>
          </div>

          {/* learning information */}
          <div className="flex items-center justify-center mt-36">
            <p className="text-white mb-4 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus finibus ex justo, at viverra eros pellentesque in. Praesent fermentum venenatis nunc, vitae rutrum tellus scelerisque at. Donec aliquam cursus sem, at placerat magna tristique non. Praesent aliquam ultricies ornare. Morbi turpis arcu, fringilla ut tortor in, lobortis convallis quam. Cras porta mollis tellus in rutrum. Nullam vitae pellentesque quam. Nullam congue ullamcorper nulla, nec tristique nulla bibendum suscipit.
            </p>
          </div>
        </div>
      </div>

      {/* back next button */}
      <div className="flex items-center justify-center space-x-4 mt-4 mb-4">
        <button type="button" className="styled border-0 leading-10 px-5 font-semibold text-base text-center text-black rounded-lg bg-[#E68369] custom-gradient custom-box-shadow hover:bg-[#ECCEAE] active:custome-active-box-shadow text-shadow w-36 h-15">Back</button>
        <button type="button" className="styled border-0 leading-10 px-5 font-semibold text-base text-center text-black rounded-lg bg-[#E68369] custom-gradient custom-box-shadow hover:bg-[#ECCEAE] active:custome-active-box-shadow text-shadow w-36 h-15">Next</button>
      </div>
    </div>
  );
};

export default CourseContent;
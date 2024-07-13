import React from "react";
import Navbar from "../../../components/Navbar";
import { Link } from "react-router-dom";
const CourseEnding = () => {
  return (
    <div>
      <Navbar />

      <div className="text-white">
        <h1>Congratulations</h1>
        <p className="text-justify">
          Question: <br></br>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          finibus ex justo, at viverra eros pellentesque in
        </p>
      </div>

      <div className="flex justify-between ml-24">
        <div className="">
          {/* player's character */}
          <div>
            <img src="src/assets/character/player.jpg" className="w-52 h-52" />
          </div>
          {/* player's HP */}
          <div>
            <img src="src/assets/character/hp.png" className="w-52 ml-1" />
          </div>
        </div>
        <div className="">
          {/* player's weapon */}
          <div>
            <img src="src/assets/character/weapon.jpg" className="w-24 h-24" />
          </div>
        </div>
      </div>

      <div className="text-white text-center">
        <h1>Click this link to explore the details</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      </div>

      {/* back next button */}
      <div className="flex items-center justify-center space-x-4 mt-4 mb-4">
        <Link to="/coursedetails">
          <button
            type="button"
            className="styled border-0 leading-10 px-5 font-semibold text-base text-center text-black rounded-lg bg-[#E68369] custom-gradient custom-box-shadow hover:bg-[#ECCEAE] active:custome-active-box-shadow text-shadow w-36 h-15"
          >
            Back
          </button>
        </Link>
        <Link to="/coursequest">
          <button
            type="button"
            className="styled border-0 leading-10 px-5 font-semibold text-base text-center text-black rounded-lg bg-[#E68369] custom-gradient custom-box-shadow hover:bg-[#ECCEAE] active:custome-active-box-shadow text-shadow w-36 h-15"
          >
            End Course
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CourseEnding;

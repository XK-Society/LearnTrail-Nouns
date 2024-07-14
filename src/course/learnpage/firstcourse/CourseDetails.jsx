import React from "react";
import Navbar from "../../../components/Navbar";
import { Link } from "react-router-dom";
const CourseDetails = () => {
  return (
    <div className="fixed bg-[url('/src/assets/pagebg.png')] bg-center bg-contain h-screen">
      <Navbar />

      <div className="">
      {/* player character */}
      <div className="flex justify-center items-center mt-10">
        <img src="src/assets/character/avatar.png" className="w-52 h-52" />
      </div>

      {/* player HP */}
      <div className="flex justify-center items-center">
        <img src="src/assets/character/hp.png" className="w-48 ml-4" />
      </div>

      {/* learning information */}
      <div className=" items-center justify-center -mt-8 text-justify text-balance text-white mb-4 text-xl font-play mx-52 p-10">
        <h1 className="font-presstart text-lg">Course Overview:</h1>
        <p className="mt-4">
        This course is designed to provide a comprehensive understanding of 
        Ethereum and Web3 development. It covers fundamental concepts, hands-on coding, 
        and real-world applications to prepare learners for building decentralized 
        applications (dApps) on the Ethereum blockchain.
        </p>
      </div>

      {/* back next button */}
      <div className="flex items-center justify-center space-x-4 mt-4 mb-4 font-play">
        <Link to="/coursepage">
          <button
            type="button"
            className="styled border-0 leading-10 px-5 font-semibold text-base text-center text-black rounded-lg bg-[#E68369] custom-gradient custom-box-shadow hover:bg-[#ECCEAE] active:custome-active-box-shadow text-shadow w-36 h-15"
          >
            Back
          </button>
        </Link>
        <Link to="/coursecontent">
          <button
            type="button"
            className="styled border-0 leading-10 px-5 font-semibold text-base text-center text-black rounded-lg bg-[#E68369] custom-gradient custom-box-shadow hover:bg-[#ECCEAE] active:custome-active-box-shadow text-shadow w-36 h-15"
          >
            Next
          </button>
        </Link>
      </div>
      </div>
    </div>
  );
};

export default CourseDetails;

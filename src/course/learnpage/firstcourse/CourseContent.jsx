import React from "react";
import Navbar from "../../../components/Navbar";
import { Link } from "react-router-dom";
const CourseContent = () => {
  return (
    <div className="fixed bg-[url('/src/assets/pagebg.png')] bg-center bg-contain h-screen">
      <Navbar />

      <div className="flex justify-center pt-5 ">
        <h1 className="text-white text-base tracking-tighter font-presstart">
          Read the content to earn the weapon
        </h1>
      </div>

      <div className="flex m-10 ">
        {/* left section */}
        <div className="w-1/2 p-4">
          {/* player's character */}
          <div className="mx-48">
            <img src="src/assets/character/avatar.png" className="w-52 h-52" />
          </div>

          {/* player's HP */}
          <div className="mx-48 -mt-2">
            <img src="src/assets/character/hp.png" className="w-28 ml-14" />
          </div>

          {/* learning information */}
          <div className="flex items-center justify-center font-play mt-2">
            <p className="text-white text-lg">
            This course will gamify the learning experience by allowing users to earn weapons 
            and fight bosses upon completing each module. Learners will read through educational 
            content and engage in interactive challenges to unlock weapons, which they can use in 
            a final boss battle at the end of each module.
            </p>
          </div>
        </div>

        {/* right section */}
        <div className="w-1/2 p-4">
          {/* player's weapon */}
          <div>
            <img src="src/assets/character/sword.png" className="w-36 h-36" />
            <h1 className="font-presstart text-white ml-10 mt-2 text-xs">Weapon</h1>
          </div>

          {/* learning information */}
          <div className="items-center justify-center mt-20 font-play text-white">
            <h1 className="font-presstart text-lg">Course Structure:</h1>
            <p className=" text-lg">
            1. Introduction and Setup<br />
            2. Fundamentals of Blockchain and Ethereum<br />
            3. Smart Contracts and Solidity Basics<br />
            4. Advanced Solidity Programming<br />
            5. Building and Deploying dApps<br />
            6. Real-World Projects<br />
            7. Final Boss Battle
            </p>
          </div>
        </div>
      </div>

      {/* back next button */}
      <div className="flex items-center justify-center space-x-4 mb-7 -mt-7 font-play">
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
            Next
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CourseContent;

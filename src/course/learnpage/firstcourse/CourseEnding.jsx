import React from "react";
import Navbar from "../../../components/Navbar";
import { Link } from "react-router-dom";
const CourseEnding = () => {
  return (
    <div className="bg-[url('/src/assets/pagebg.png')] bg-center bg-contain h-screen">
      <Navbar />

      <div className="text-white pl-28 text-xl mt-4 font-presstart">
        <h1 className="text-center">Congratulations! <br/>You've Defeated the Boss!</h1>
      </div>

      <div className="flex mt-10 -ml-2">
      <div className="text-white pl-28 text-xl font-presstart">
        <p className="text-left text-xl font-play mt-8">
        You've successfully conquered the <br/>challenge and demonstrated  
        your <br/>knowledge and skills. Your determination <br/>and hard work 
        have paid off, and <br/>you've earned your weapon for this module.
        </p>
      </div>

        <div className="block ml-28">
          {/* player's character */}
          <div>
            <img src="src/assets/character/avatar.png" className="w-52 h-52" />
          </div>
          {/* player's HP */}
          <div>
            <img src="src/assets/character/hp.png" className="w-52 ml-1" />
          </div>
        </div>
          {/* player's weapon */}
          <div>
            <img src="src/assets/character/sword.png" className="w-24 h-24 mt-6" />
            <h1 className="text-white text-center font-play">Weapon</h1>
          </div>
      </div>

      <div className="text-white text-center font-play ">
        <h1 className="text-xl">To further enhance your understanding and delve deeper into 
          Ethereum development,<br/> we highly recommend checking the official 
          Ethereum documentation.<br/> It offers comprehensive resources and 
          guides for developers at all levels.</h1>
        <p className="mt-4 hover:text-[#E68369] text-sm tracking-tighter font-presstart"><Link to="https://ethereum.org/en/developers/">https://ethereum.org/en/developers/</Link></p>
      </div>

      {/* back next button */}
      <div className="flex items-center justify-center space-x-4 mt-10 mb-4 font-play">
        <Link to="/coursequest">
          <button
            type="button"
            className="styled border-0 leading-10 px-5 font-semibold text-base text-center text-black rounded-lg bg-[#E68369] custom-gradient custom-box-shadow hover:bg-[#ECCEAE] active:custome-active-box-shadow text-shadow w-36 h-15"
          >
            Back
          </button>
        </Link>
        <Link to="/">
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

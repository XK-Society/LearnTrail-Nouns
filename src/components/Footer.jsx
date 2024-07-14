import React from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
  FaGithubSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-[#FBF6E2]">
      <div>
        <h1 className="w-full text-2xl font-normal text-[#ECCEAE]  font-presstart">
          Learn Trail
        </h1>
        <p className="py-4 font-normal text-l font-play">
          Join Learn Trail today and take the first step towards mastering Web3
          development, business, and art
        </p>
        <div className="flex justify-between md:w-[75%] my-6 ">
          {/* <FaFacebookSquare size={45} className="hover:text-[#ECCEAE]" />
          <FaInstagram size={45} className="hover:text-[#ECCEAE]" />
          <FaTwitterSquare size={45} className="hover:text-[#ECCEAE]" /> */}
          <Link to ="https://github.com/XK-Society/LearnTrail-Nouns" ><FaGithubSquare size={45} className="hover:text-[#ECCEAE]" /></Link>
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6 font-normal">
        <div>
          <h6 className="font-normal text-[#ECCEAE] font-presstart">
            
          </h6>
          <ul className="font-play text-l ">
            <li className="py-2 hover:text-[#ECCEAE]"></li>
            <li className="py-2 hover:text-[#ECCEAE]"></li>
            <li className="py-2 hover:text-[#ECCEAE]"></li>
            <li className="py-2 hover:text-[#ECCEAE]"></li>
          </ul>
        </div>
        <div>
          <h6 className="font-normal text-[#ECCEAE] font-presstart"></h6>
          <ul className="font-play text-l">
            <li className="py-2 hover:text-[#ECCEAE]"></li>
            <li className="py-2 hover:text-[#ECCEAE]"></li>
            <li className="py-2 hover:text-[#ECCEAE]"></li>
            <li className="py-2 hover:text-[#ECCEAE]"></li>
          </ul>
        </div>
        <div>
          <h6 className="font-normal text-[#ECCEAE] font-presstart"></h6>
          <ul className="font-play text-l">
            <li className="py-2 hover:text-[#ECCEAE]"></li>
            <li className="py-2 hover:text-[#ECCEAE]"></li>
            <li className="py-2 hover:text-[#ECCEAE]"></li>
            <li className="py-2 hover:text-[#ECCEAE]"></li>
            <li className="py-2 hover:text-[#ECCEAE]"></li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-[#ECCEAE] font-presstart"></h6>
          <ul className="font-play text-l">
            <li className="py-2 hover:text-[#ECCEAE]"></li>
            <li className="py-2 hover:text-[#ECCEAE]"></li>
            <li className="py-2 hover:text-[#ECCEAE]"></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

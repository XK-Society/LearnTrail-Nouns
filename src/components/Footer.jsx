import React from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
  FaGithubSquare,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-[#FBF6E2]">
      <div>
        <h1 className="w-full text-2xl font-normal text-[#ECCEAE]  font-presstart">
          Learn Trail
        </h1>
        <p className="py-4 font-normal text-l font-play">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Integer consectetur est rutrum bibendum viverra. 
        Integer luctus nunc sed tempus maximus.
        </p>
        <div className="flex justify-between md:w-[75%] my-6 ">
          <FaFacebookSquare size={45} className="hover:text-[#ECCEAE]"/>
          <FaInstagram size={45} className="hover:text-[#ECCEAE]"/>
          <FaTwitterSquare size={45} className="hover:text-[#ECCEAE]"/>
          <FaGithubSquare size={45} className="hover:text-[#ECCEAE]" />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6 font-normal">
        <div>
          <h6 className="font-normal text-[#ECCEAE] font-presstart">Solutions</h6>
          <ul className="font-play text-l ">
            <li className="py-2 hover:text-[#ECCEAE]">Marketing</li>
            <li className="py-2 hover:text-[#ECCEAE]">Business</li>
            <li className="py-2 hover:text-[#ECCEAE]">Marketing</li>
            <li className="py-2 hover:text-[#ECCEAE]">Marketing</li>
          </ul>
        </div>
        <div>
          <h6 className="font-normal text-[#ECCEAE] font-presstart">Support</h6>
          <ul className="font-play text-l">
            <li className="py-2 hover:text-[#ECCEAE]">Pricing</li>
            <li className="py-2 hover:text-[#ECCEAE]">Documentation</li>
            <li className="py-2 hover:text-[#ECCEAE]">Guides</li>
            <li className="py-2 hover:text-[#ECCEAE]">API Status</li>
          </ul>
        </div>
        <div>
          <h6 className="font-normal text-[#ECCEAE] font-presstart">Company</h6>
          <ul className="font-play text-l">
            <li className="py-2 hover:text-[#ECCEAE]">About</li>
            <li className="py-2 hover:text-[#ECCEAE]">Blog</li>
            <li className="py-2 hover:text-[#ECCEAE]">Jobs</li>
            <li className="py-2 hover:text-[#ECCEAE]">Press</li>
            <li className="py-2 hover:text-[#ECCEAE]">Careers</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-[#ECCEAE] font-presstart">Legal</h6>
          <ul className="font-play text-l">
            <li className="py-2 hover:text-[#ECCEAE]">Claim</li>
            <li className="py-2 hover:text-[#ECCEAE]">Policy</li>
            <li className="py-2 hover:text-[#ECCEAE]">Terms</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

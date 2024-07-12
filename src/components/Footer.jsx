import React from "react";
import {  FaFacebookSquare, FaInstagram, FaTwitterSquare , FaGithubSquare} from 'react-icons/fa';
const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-[#FBF6E2]">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#ECCEAE]">
          Learn Trail
        </h1>
        <p className="py-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
        </p>
        <div className='flex justify-between md:w-[75%] my-6'>
          <FaFacebookSquare size={45} />
          <FaInstagram size={45} />
          <FaTwitterSquare size={45} />
          <FaGithubSquare size={45} />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
      <div>
        <h6 className='font-medium text-[#ECCEAE]'>Solutions</h6>
        <ul>
          <li className='py-2 text-sm'>Marketing</li>
          <li className='py-2 text-sm'>Business</li>
          <li className='py-2 text-sm'>Marketing</li>
          <li className='py-2 text-sm'>Marketing</li>
        </ul>
      </div> 
      <div>
        <h6 className='font-medium text-[#ECCEAE]'>Support</h6>
        <ul>
            <li className='py-2 text-sm'>Pricing</li>
            <li className='py-2 text-sm'>Documentation</li>
            <li className='py-2 text-sm'>Guides</li>
            <li className='py-2 text-sm'>API Status</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-[#ECCEAE]'>Company</h6>
        <ul>
            <li className='py-2 text-sm'>About</li>
            <li className='py-2 text-sm'>Blog</li>
            <li className='py-2 text-sm'>Jobs</li>
            <li className='py-2 text-sm'>Press</li>
            <li className='py-2 text-sm'>Careers</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-[#ECCEAE]'>Legal</h6>
        <ul>
            <li className='py-2 text-sm'>Claim</li>
            <li className='py-2 text-sm'>Policy</li>
            <li className='py-2 text-sm'>Terms</li>
        </ul>
    </div>
      </div>
    </div>
  );
};

export default Footer;

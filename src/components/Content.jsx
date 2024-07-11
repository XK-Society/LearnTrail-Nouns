import React from "react";
import Guild from "../assets/Guild.png";
const Content = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1280px] mx-auto grid md:grid-cols-2">
        <img className="max-w-[500px] mx-auto my-4" src={Guild} alt="/" />
        <div className="flex flex-col justify center">
          <p className='text-[#00df9a] font-bold' >COURSE LEARNING GUILD</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>All courses listed</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            consectetur est rutrum bibendum viverra. Integer luctus nunc sed
            tempus maximus. Donec at feugiat felis. Duis lectus tortor, auctor
            sed lacus non, volutpat ornare lacus. Proin eu sem eu nulla volutpat
            iaculis. Nulla et neque orci. Nulla facilisi. Fusce non tortor a
            magna molestie pretium. Integer nec lectus laoreet, elementum ex
            eget, molestie risus.
          </p>
          <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 '>Learn with us</button>
        </div>
      </div>
    </div>
  );
};

export default Content;

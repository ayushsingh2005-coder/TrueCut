import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";

const Header = () => {

    const {removeBg} = useContext(AppContext);

  return (
    <div className="flex items-center justify-between max-sm:flex-col-reverse gap-y-10 px-4 mt-10 lg:px-44 sm:mt-20">
      {/* ----Left portion */}
      <div className="flex-1 max-w-lg">
        <h1 className="text-3xl sm:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-neutral-700 leading-tight mb-6">
          Remove the
          <br />
          <span className="bg-gradient-to-r from-purple-600 via-blue-700 to-cyan-900 bg-clip-text text-transparent">
            background {" "}
          </span>
          from <br /> images for free.
        </h1>
        
        <div className="space-y-4 my-6">
          <div className="bg-gradient-to-r from-zinc-200 to-gray-200 font-semibold text-gray-800 px-4 py-3 sm:px-6 sm:py-4 text-sm sm:text-base rounded-full inline-block">
            Say goodbye to messy backgrounds!
          </div>
          
          <div className="bg-gradient-to-r from-zinc-200 to-gray-200 text-gray-800 px-4 py-3 sm:px-6 sm:py-4 text-sm sm:text-base rounded-full font-semibold inline-block">
            Upload your image, and <br /> 
            get a transparent, ready-to-use result in seconds.
          </div>
        </div>
        
        <div className="mt-8">
          <input onChange={e => removeBg(e.target.files[0])} type="file" accept="image/*" id="upload1" hidden />
          <label
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full cursor-pointer 
               bg-blue-700 text-white font-medium
               hover:bg-indigo-700 hover:scale-105 transition-all duration-300"
            htmlFor="upload1"
          >
            <img width={20} src={assets.upload_btn_icon} alt="" />
            <span>Upload your image</span>
          </label>
        </div>
      </div>

      {/* --right portion */}
      <div className="flex-1 flex justify-center max-sm:mb-10">
        <img 
          className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl" 
          src={assets.header_img} 
          alt="" 
        />
      </div>
    </div>
  );
};

export default Header;
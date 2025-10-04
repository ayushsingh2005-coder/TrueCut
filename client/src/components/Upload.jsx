import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";

const Upload = () => {

  const {removeBg} = useContext(AppContext);


  return (
    <div className="pb-16">
      {/* title */}
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent py-6 md:py-16">
        See the magic . Try now
      </h1>

      <div className="text-center mb-24">
        <input onChange={e => removeBg(e.target.files[0])} type="file" accept="image/*" id="upload2" hidden />
        <label
          className="inline-flex items-center gap-3 px-6 py-3 rounded-full cursor-pointer 
                     bg-blue-700 text-white font-medium
                     hover:bg-indigo-700 hover:scale-105 transition-all duration-300"
          htmlFor="upload2"
        >
          <img width={20} src={assets.upload_btn_icon} alt="" />
          <span>Upload your image</span>
        </label>
      </div>
    </div>
  );
};

export default Upload;

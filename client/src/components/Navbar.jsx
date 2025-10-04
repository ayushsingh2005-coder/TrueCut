import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const { openSignIn } = useClerk();
  const { isSignedIn, user } = useUser();
  const {credit , loadCreditsData} = useContext(AppContext);

  useEffect(()=>{
    // first we check whether a user is signed in or not (if--> signedIn => call loadCreditsData and if not don't call)

    if(isSignedIn){
      loadCreditsData();
    }

  })

  return (
    <>
      {/* CSS Animation */}
      <style>{`
        @keyframes gradient-flow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-border {
          background: linear-gradient(90deg, #4f46e5, #3b82f6, #6366f1, #3b82f6, #4f46e5);
          background-size: 300% 300%;
          animation: gradient-flow 3s ease infinite;
        }
      `}</style>

      <div className="flex items-center justify-between mx-4 py-3 lg:mx-44">
        {/* Logo with animated border */}
        <Link to="/">
          <div className="p-1 rounded-full animate-gradient-border">
            <img
              className="w-32 sm:w-44 bg-gradient-to-r from-zinc-100 to-gray-100 drop-shadow-lg rounded-full"
              src={assets.logo}
              alt=""
            />
          </div>
        </Link>

        {isSignedIn ? (
          <div className="flex items-center gap-2 sm:gap-3">
            <button className="flex items-center gap-2 bg-indigo-100 px-4 sm:px-7 py-1.5 sm:py-2.5 rounded-full hover:scale-105 transition-all duration-400">
              <img className="w-5" src={assets.credit_icon} alt="" />
              <p className="text-xs sm:text-sm font-medium text-gray-700">Credits : {credit}</p>
            </button>
            <p className="text-gray-700 font-semibold max-sm:hidden">Hi , {user.fullName}</p>
            <UserButton/>
          </div>
        ) : (
          <button
            onClick={() => openSignIn({})}
            className="bg-gradient-to-tr from-purple-700 via-blue-500 to-blue-300 text-white flex items-center gap-4 px-4 py-2 sm:px-8 sm:py-3 text-base rounded-full cursor-pointer hover:scale-105 transition-transform duration-300"
          >
            Get Started
            <img className="w-3 sm:w-4" src={assets.arrow_icon} alt="" />
          </button>
        )}

      </div>
    </>
  );
};

export default Navbar;

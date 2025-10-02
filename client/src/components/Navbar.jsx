import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";

const Navbar = () => {
  const { openSignIn } = useClerk();
  const { isSignedIn, user } = useUser();

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
          <div>
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

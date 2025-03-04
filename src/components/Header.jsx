import React from "react";
import myGifLogo from "../assets/logo/heave.gif";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between items-center mb-8 bg-white/70 backdrop-blur-md rounded-2xl p-4 shadow-lg shadow-indigo-100/30 relative z-50">
      {" "}
      <div className="flex items-center">
        <h1 className="text-3xl font-bold relative overflow-hidden group">
          <span className="relative z-10 inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 hover:from-blue-600 hover:via-purple-600 hover:to-indigo-700 transition-all duration-500 font-bold text-lg tracking-wider transform hover:scale-105 shadow-lg hover:shadow-xl hover:rotate-1 border-b-2 border-transparent hover:border-purple-400 uppercase">
            <Link
              to="/"
              className="hover:text-blue-600 transition-colors duration-200 hover:border-b-2 hover:border-blue-500"
            >
              HeaveNeural
            </Link>
          </span>
          <span className="absolute -left-2 -bottom-1 w-[calc(100%+1rem)] h-0.5 bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-700 ease-in-out rounded-full"></span>
          <span className="absolute -right-2 top-0 w-[6px] h-[6px] rounded-full bg-blue-400 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-500"></span>
          <span className="absolute -left-2 top-0 w-[6px] h-[6px] rounded-full bg-indigo-400 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-500 delay-300"></span>
          <span className="absolute blur-sm -z-10 inset-0 bg-gradient-to-r from-blue-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg transform scale-110"></span>
        </h1>
        <img
          src={myGifLogo}
          alt="logo animation"
          className="w-10 h-10 ml-3 rounded-full object-cover shadow-md"
        />
        <div className="ml-4 px-3 py-1 bg-blue-100 rounded-full text-sm font-medium text-blue-800 hover:bg-blue-200 transition-all duration-300 transform hover:scale-105 cursor-pointer">
          Beta
        </div>
      </div>
      <nav className="hidden md:flex space-x-6 text-gray-700">
        <Link
          to="/neural-spirit"
          className="hover:text-blue-600 transition-colors duration-200 hover:border-b-2 hover:border-blue-500"
        >
          Neural Spirit
        </Link>
        <Link
          to="/neural-odyssey"
          className="hover:text-blue-600 transition-colors duration-200 hover:border-b-2 hover:border-blue-500"
        >
          Neural Odyssey
        </Link>

        <a
          href="#"
          className="hover:text-blue-600 transition-colors duration-200 hover:border-b-2 hover:border-blue-500"
        >
          AI Lab
        </a>
        <div className="relative group">
          <a
            href="#"
            className="hover:text-blue-600 transition-colors duration-200 hover:border-b-2 hover:border-blue-500 flex items-center"
          >
            Challenges{" "}
            <span className="material-symbols-outlined ml-1 text-sm text-gray-400">
              expand_more
            </span>
          </a>
          <div className="absolute left-0 mt-2 w-64 bg-white/90 backdrop-blur-md rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
            <a
              href="#"
              className="block px-4 py-2 hover:bg-blue-50 transition-colors rounded-t-lg text-gray-400"
            >
              Intro to AI
            </a>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-blue-50 transition-colors text-gray-400"
            >
              Neural Crafting
            </a>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-blue-50 transition-colors text-gray-400"
            >
              MathCraft
            </a>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-blue-50 transition-colors text-gray-400"
            >
              Data Alchemy
            </a>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-blue-50 transition-colors text-gray-400"
            >
              Algo Crypt
            </a>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-blue-50 transition-colors text-gray-400"
            >
              Black Box
            </a>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-blue-50 transition-colors text-gray-400"
            >
              Chaos Trials
            </a>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-blue-50 transition-colors rounded-b-lg text-gray-400"
            >
              History Reloaded
            </a>
          </div>
        </div>
        <a
          href="#"
          className="hover:text-blue-600 transition-colors duration-200 hover:border-b-2 hover:border-blue-500"
        >
          Dark Room
        </a>
        <a
          href="#"
          className="hover:text-blue-600 transition-colors duration-200 hover:border-b-2 hover:border-blue-500"
        >
          AGI Think Tank
        </a>
        <div className="relative group">
          <Link
            to="/community"
            className="hover:text-blue-600 transition-colors duration-200 hover:border-b-2 hover:border-blue-500"
          >
            Community
          </Link>
        </div>
      </nav>
      <div className="flex items-center space-x-4">
        <div className="relative cursor-pointer group">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white transform transition-transform group-hover:scale-110 group-hover:rotate-12 shadow-md shadow-indigo-300/40 relative z-10">
            <span className="material-symbols-outlined">person</span>
          </div>
          <div className="absolute right-0 mt-2 w-72 bg-white/90 backdrop-blur-md rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 z-50">
            <div className="py-3 px-4 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-purple-50 rounded-t-lg">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white shadow-md shadow-indigo-300/40">
                  <span className="material-symbols-outlined text-2xl">
                    person
                  </span>
                </div>
                <div className="ml-3">
                  <p className="font-medium">Guest User</p>
                  <div className="flex items-center text-xs text-gray-500">
                    <span className="flex items-center bg-blue-100 text-blue-800 rounded-full px-2 py-0.5 mr-2">
                      <span className="material-symbols-outlined text-[14px] mr-1">
                        trending_up
                      </span>
                      Level: Novice
                    </span>
                    <span className="flex items-center text-purple-600">
                      <span className="material-symbols-outlined text-[14px] mr-0.5">
                        stars
                      </span>
                      0 pts
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-2 grid grid-cols-3 gap-1 text-xs">
                <div className="bg-blue-100/60 rounded p-1 text-center">
                  <p className="text-blue-800 font-medium">0</p>
                  <p className="text-gray-500">Challenges</p>
                </div>
                <div className="bg-purple-100/60 rounded p-1 text-center">
                  <p className="text-purple-800 font-medium">0</p>
                  <p className="text-gray-500">Debates</p>
                </div>
                <div className="bg-indigo-100/60 rounded p-1 text-center">
                  <p className="text-indigo-800 font-medium">0</p>
                  <p className="text-gray-500">Daystreak</p>
                </div>
              </div>
            </div>
            <div className="py-1">
              <a
                href="#"
                className="block px-4 py-2 hover:bg-blue-50 transition-colors flex items-center"
              >
                <span className="material-symbols-outlined mr-2 text-blue-500">
                  account_circle
                </span>
                Profile
              </a>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-blue-50 transition-colors flex items-center"
              >
                <span className="material-symbols-outlined mr-2 text-purple-500">
                  military_tech
                </span>
                Achievements
              </a>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-blue-50 transition-colors flex items-center"
              >
                <span className="material-symbols-outlined mr-2 text-indigo-500">
                  history
                </span>
                Activity
              </a>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-blue-50 transition-colors flex items-center"
              >
                <span className="material-symbols-outlined mr-2 text-gray-500">
                  settings
                </span>
                Settings
              </a>
            </div>
            <a
              href="#"
              className="block px-4 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-b-lg hover:from-blue-600 hover:to-indigo-700 transition-colors flex items-center justify-center"
            >
              <span className="material-symbols-outlined mr-2">login</span>
              Login / Sign Up
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

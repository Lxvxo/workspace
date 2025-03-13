import React from "react";
import myGifLogo from "../assets/logo/logo_robot.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-8 py-4 bg-white/70 backdrop-blur-md shadow-lg shadow-indigo-100/30 sticky top-0 z-50 w-full">
  <div className="flex items-center justify-between w-full md:w-auto">
    <div className="flex items-center">
      <h1 className="text-2xl sm:text-3xl font-bold relative overflow-hidden group">
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
        className="w-8 h-8 sm:w-10 sm:h-10 ml-2 sm:ml-3 rounded-full object-cover shadow-md"
      />
      <div className="ml-2 sm:ml-4 px-2 sm:px-3 py-1 bg-blue-100 rounded-full text-xs sm:text-sm font-medium text-blue-800 hover:bg-blue-200 transition-all duration-300 transform hover:scale-105 cursor-pointer">
        Beta
      </div>
    </div>
    
    <details className="md:hidden relative">
      <summary className="list-none flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 cursor-pointer hover:shadow-md transition-all duration-300 focus:outline-none">
        <span className="block w-5 h-0.5 bg-gray-600 rounded-sm before:content-[''] before:block before:absolute before:w-5 before:h-0.5 before:-translate-y-1.5 before:bg-gray-600 before:rounded-sm after:content-[''] after:block after:absolute after:w-5 after:h-0.5 after:translate-y-1.5 after:bg-gray-600 after:rounded-sm"></span>
      </summary>
      <nav className="absolute right-0 top-12 w-48 bg-white shadow-xl rounded-lg py-2 mt-1 z-50 border border-gray-100">
        <Link
          to="/neural-odyssey"
          className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
        >
          Learn
        </Link>
        <Link
          to="/challenges"
          className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
        >
          Challenges
        </Link>
        <Link
          to="/neural-spirit"
          className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
        >
          Neural Spirit
        </Link>
        <span className="block px-4 py-2 text-gray-500">AI Lab</span>
        <span className="block px-4 py-2 text-gray-500">Community</span>
        <a
          href="#"
          className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
        >
          About
        </a>
        <hr className="my-2 border-gray-100" />
        <div className="px-4 py-2 space-y-2">
          <a
            href="#"
            className="block w-full text-center px-3 py-1.5 text-sm font-medium text-blue-600 hover:text-blue-700 border border-blue-300 transition-all duration-300 hover:bg-blue-50 hover:shadow-md transform hover:scale-105"
          >
            LOGIN
          </a>
          <a
            href="#"
            className="block w-full text-center px-3 py-1.5 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-indigo-600 shadow-md hover:shadow-lg transition-all duration-300 hover:from-blue-600 hover:to-indigo-700 transform hover:scale-105"
          >
            REGISTER
          </a>
        </div>
      </nav>
    </details>
  </div>
  
  <nav className="hidden md:flex space-x-4 lg:space-x-6 text-gray-700 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
    <Link
      to="/neural-odyssey"
      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
    >
      Learn
    </Link>
    <Link
          to="/challenges"
          className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
        >
          Challenges
        </Link>
    <Link
      to="/neural-spirit"
      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
    >
      Neural Spirit
    </Link>
    <span className="block px-4 py-2 text-gray-500 text-sm lg:text-base">AI Lab</span>
    <span className="block px-4 py-2 text-gray-500 text-sm lg:text-base">Community</span>
    <a
      href="#"
      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
    >
      About
    </a>
  </nav>
  
  <div className="hidden md:flex items-center space-x-3 lg:space-x-4 mt-4 md:mt-0">
    <a
      href="#"
      className="px-3 py-1.5 lg:px-4 lg:py-2 text-xs lg:text-sm font-medium text-blue-600 hover:text-blue-700 border border-blue-300 transition-all duration-300 hover:bg-blue-50 hover:shadow-md transform hover:scale-105"
    >
      LOGIN
    </a>
    <a
      href="#"
      className="px-3 py-1.5 lg:px-4 lg:py-2 text-xs lg:text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-indigo-600 shadow-md hover:shadow-lg transition-all duration-300 hover:from-blue-600 hover:to-indigo-700 transform hover:scale-105 hover:-rotate-1"
    >
      REGISTER
    </a>
  </div>
</header>
  );
};

export default Header;

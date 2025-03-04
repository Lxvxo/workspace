import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto mt-auto">
      <div className="bg-white/30 backdrop-blur-sm rounded-xl py-2 px-3 shadow-sm">
        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-500">
          <div className="flex items-center space-x-1.5 mb-1.5 md:mb-0">
            <span className="text-[9px] bg-blue-100/50 px-1.5 py-0.5 rounded-full text-blue-700 hover:bg-blue-100 transition-colors cursor-pointer">
              v0.9.2 Beta
            </span>
            <span className="hidden md:inline">•</span>
            <a
              href="#"
              className="hover:text-blue-600 transition-colors duration-200 flex items-center"
            >
              <span className="material-symbols-outlined text-[12px] mr-0.5">
                shield
              </span>
              Privacy
            </a>
            <a
              href="#"
              className="hover:text-blue-600 transition-colors duration-200 flex items-center"
            >
              <span className="material-symbols-outlined text-[12px] mr-0.5">
                gavel
              </span>
              Terms
            </a>
            <a
              href="#"
              className="hover:text-blue-600 transition-colors duration-200 flex items-center"
            >
              <span className="material-symbols-outlined text-[12px] mr-0.5">
                cookie
              </span>
              Cookies
            </a>
          </div>

          <div className="flex items-center space-x-2">
            <div className="flex items-center group relative">
              <button className="hover:text-blue-600 transition-colors duration-200">
                <span className="material-symbols-outlined text-[14px]">
                  language
                </span>
              </button>
              <div className="absolute bottom-full mb-1.5 left-1/2 -translate-x-1/2 w-28 bg-white/90 backdrop-blur-md rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-0.5">
                  <a
                    href="#"
                    className="block px-2.5 py-1 hover:bg-blue-50 transition-colors text-center text-gray-700 text-[9px] rounded-t-lg"
                  >
                    English
                  </a>
                  <a
                    href="#"
                    className="block px-2.5 py-1 hover:bg-blue-50 transition-colors text-center text-gray-700 text-[9px]"
                  >
                    Français
                  </a>
                  <a
                    href="#"
                    className="block px-2.5 py-1 hover:bg-blue-50 transition-colors text-center text-gray-700 text-[9px]"
                  >
                    Español
                  </a>
                  <a
                    href="#"
                    className="block px-2.5 py-1 hover:bg-blue-50 transition-colors text-center text-gray-700 text-[9px] rounded-b-lg"
                  >
                    日本語
                  </a>
                </div>
              </div>
            </div>

            <div className="h-2.5 w-px bg-gray-300"></div>

            <div className="flex space-x-1.5">
              <a
                href="#"
                className="hover:text-blue-600 transition-all duration-200 transform hover:scale-110"
              >
                <span className="material-symbols-outlined text-[14px]">
                  help
                </span>
              </a>
              <a
                href="#"
                className="hover:text-blue-600 transition-all duration-200 transform hover:scale-110"
              >
                <span className="material-symbols-outlined text-[14px]">
                  mail
                </span>
              </a>
              <a
                href="#"
                className="hover:text-blue-600 transition-all duration-200 transform hover:scale-110"
              >
                <span className="material-symbols-outlined text-[14px]">
                  favorite
                </span>
              </a>
            </div>

            <div className="h-2.5 w-px bg-gray-300"></div>

            <div className="flex space-x-1.5">
              <a
                href="#"
                className="hover:text-blue-600 transition-all duration-200 transform hover:scale-110"
                title="Twitter"
              >
                <i className="fa-brands fa-twitter text-[14px]"></i>
              </a>
              <a
                href="#"
                className="hover:text-blue-600 transition-all duration-200 transform hover:scale-110"
                title="Facebook"
              >
                <i className="fa-brands fa-facebook text-[14px]"></i>
              </a>
              <a
                href="#"
                className="hover:text-blue-600 transition-all duration-200 transform hover:scale-110"
                title="LinkedIn"
              >
                <i className="fa-brands fa-linkedin text-[14px]"></i>
              </a>
              <a
                href="#"
                className="hover:text-blue-600 transition-all duration-200 transform hover:scale-110"
                title="Github"
              >
                <i className="fa-brands fa-github text-[14px]"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="text-center text-[8px] text-gray-400 mt-1.5 opacity-60 hover:opacity-100 transition-opacity duration-300">
          HeaveNeural © 2023 • The Neural Revolution • All data is ephemeral and
          experimental
        </div>
      </div>
    </footer>
  );
};
export default Footer;

import React from "react";
import "../styles/styles.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export const App = () => {
  return (
    <div id="webcrumbs">
      <div className="w-screen h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-100 p-4 md:p-8 font-sans">
        <main className="flex bg-slate-50 rounded-2xl overflow-hidden shadow-xl">
          <div className="w-[280px] bg-white border-r border-gray-200 shadow-md flex flex-col transition-all duration-300 transform hover:shadow-xl">
            <div className="p-4 flex items-center justify-between border-b border-gray-100">
              <span className="material-symbols-outlined text-indigo-500 cursor-pointer hover:rotate-180 transition-transform hover:text-purple-600">
                menu
              </span>
            </div>

            <div className="overflow-y-auto flex-grow">
              <div className="px-4 py-3">
                <h2 className="text-md font-semibold flex items-center text-indigo-600">
                  <span className="material-symbols-outlined mr-2">
                    psychology
                  </span>
                  Neural Models
                </h2>
              </div>

              <div className="px-3 space-y-2">
                <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-3 rounded-xl shadow-md flex items-center justify-between group hover:shadow-lg transition-all duration-300 transform hover:translate-x-1 hover:-translate-y-0.5 cursor-pointer">
                  <div className="flex items-center">
                    <span className="material-symbols-outlined mr-3 text-white/80 group-hover:text-white group-hover:rotate-12 transition-all duration-300">
                      smart_toy
                    </span>
                    <span className="font-medium">Neural Spirit 1.0</span>
                  </div>
                  <span className="px-2 py-0.5 bg-white/20 rounded-full text-xs">
                    Active
                  </span>
                </div>

                <div className="bg-white p-3 rounded-xl border border-gray-200 hover:border-indigo-200 shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-between group transform hover:translate-x-1 hover:-translate-y-0.5 cursor-pointer">
                  <div className="flex items-center">
                    <span className="material-symbols-outlined mr-3 text-gray-400 group-hover:text-indigo-500 transition-all duration-300">
                      neurology
                    </span>
                    <span className="font-medium text-gray-700">
                      Cognitive Alpha
                    </span>
                  </div>
                  <span className="px-2 py-0.5 bg-amber-100 text-amber-700 rounded-full text-xs">
                    Premium
                  </span>
                </div>

                <div className="bg-white p-3 rounded-xl border border-gray-200 hover:border-indigo-200 shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-between group transform hover:translate-x-1 hover:-translate-y-0.5 cursor-pointer">
                  <div className="flex items-center">
                    <span className="material-symbols-outlined mr-3 text-gray-400 group-hover:text-indigo-500 transition-all duration-300">
                      apps
                    </span>
                    <span className="font-medium text-gray-700">
                      Math Master
                    </span>
                  </div>
                  <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded-full text-xs">
                    Free
                  </span>
                </div>

                <div className="bg-white p-3 rounded-xl border border-gray-200 hover:border-indigo-200 shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-between group transform hover:translate-x-1 hover:-translate-y-0.5 cursor-pointer">
                  <div className="flex items-center">
                    <span className="material-symbols-outlined mr-3 text-gray-400 group-hover:text-indigo-500 transition-all duration-300">
                      code
                    </span>
                    <span className="font-medium text-gray-700">
                      Code Whisperer
                    </span>
                  </div>
                  <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full text-xs">
                    Beta
                  </span>
                </div>

                <div className="bg-white p-3 rounded-xl border border-gray-200 hover:border-indigo-200 shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-between group transform hover:translate-x-1 hover:-translate-y-0.5 cursor-pointer">
                  <div className="flex items-center">
                    <span className="material-symbols-outlined mr-3 text-gray-400 group-hover:text-indigo-500 transition-all duration-300">
                      brush
                    </span>
                    <span className="font-medium text-gray-700">
                      Creative Muse
                    </span>
                  </div>
                  <span className="px-2 py-0.5 bg-purple-100 text-purple-700 rounded-full text-xs">
                    Beta
                  </span>
                </div>
              </div>

              <div className="px-4 py-3 mt-2">
                <h3 className="text-md font-semibold text-gray-700">
                  Advanced Settings
                </h3>
              </div>

              <div className="px-3 space-y-3">
                <div className="flex items-center justify-between group hover:bg-gray-50 p-2 rounded-lg transition-all">
                  <div className="flex items-center text-gray-700">
                    <span className="material-symbols-outlined mr-2 text-gray-500 group-hover:text-indigo-500 transition-colors">
                      memory
                    </span>
                    <span>Memory Usage</span>
                  </div>
                  <div className="w-24 h-2 bg-gray-200 rounded-full relative overflow-hidden group-hover:bg-gray-300 transition-colors">
                    <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 to-indigo-600 w-3/4 rounded-full group-hover:animate-pulse"></div>
                  </div>
                </div>

                <div className="flex items-center justify-between group hover:bg-gray-50 p-2 rounded-lg transition-all">
                  <div className="flex items-center text-gray-700">
                    <span className="material-symbols-outlined mr-2 text-gray-500 group-hover:text-indigo-500 transition-colors">
                      auto_awesome
                    </span>
                    <span>Creative Mode</span>
                  </div>
                  <div className="w-12 h-6 bg-gray-200 rounded-full p-1 flex items-center cursor-pointer group-hover:bg-gray-300 transition-colors">
                    <div className="w-4 h-4 bg-white rounded-full shadow-md transform translate-x-6 group-hover:scale-110 transition-all"></div>
                  </div>
                </div>

                <div className="flex items-center justify-between group hover:bg-gray-50 p-2 rounded-lg transition-all">
                  <div className="flex items-center text-gray-700">
                    <span className="material-symbols-outlined mr-2 text-gray-500 group-hover:text-indigo-500 transition-colors">
                      bolt
                    </span>
                    <span>Turbo Mode</span>
                  </div>
                  <div className="w-12 h-6 bg-indigo-100 rounded-full p-1 flex items-center cursor-pointer group-hover:bg-indigo-200 transition-colors">
                    <div className="w-4 h-4 bg-indigo-600 rounded-full shadow-md transform translate-x-0 group-hover:scale-110 transition-all"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 border-t border-gray-200">
              <div className="flex items-center text-gray-700 cursor-pointer hover:text-indigo-600 transition-colors hover:bg-gray-50 p-2 rounded-lg">
                <span className="material-symbols-outlined mr-2">help</span>
                <span>Help & Support</span>
              </div>
            </div>
          </div>

          <div className="flex-1 flex flex-col">
            <header className="h-14 border-b border-gray-200 bg-white flex items-center px-4 justify-between">
              <div className="flex items-center space-x-4">
                <div className="h-8 w-8 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 cursor-pointer hover:bg-indigo-200 transition-colors hover:scale-110 transform">
                  <span className="material-symbols-outlined text-sm">add</span>
                </div>
                <div className="text-gray-700 font-medium">New Chat</div>
              </div>

              <div className="flex items-center space-x-3">
                <details className="relative group">
                  <summary className="list-none cursor-pointer">
                    <div className="h-8 px-3 bg-gray-100 rounded-full flex items-center text-gray-700 text-sm font-medium hover:bg-gray-200 transition-colors">
                      <span className="material-symbols-outlined text-sm mr-1 text-indigo-500">
                        tune
                      </span>
                      Neural Spirit 1.0
                      <span className="material-symbols-outlined text-sm ml-1">
                        expand_more
                      </span>
                    </div>
                  </summary>
                  <div className="absolute right-0 top-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 w-72 p-3 text-sm">
                    <div className="font-medium text-gray-800 mb-2">
                      Neural Spirit 3.0
                    </div>
                    <div className="text-gray-600 mb-3">
                      Advanced language model specialized in creative and
                      analytical tasks.
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-700">Capabilities:</span>
                      <span className="text-indigo-600 font-medium">
                        Advanced
                      </span>
                    </div>
                    <div className="space-y-2 mb-3">
                      <div className="flex items-center text-gray-700">
                        <span className="material-symbols-outlined text-indigo-500 mr-2 text-sm">
                          check_circle
                        </span>
                        Code generation & analysis
                      </div>
                      <div className="flex items-center text-gray-700">
                        <span className="material-symbols-outlined text-indigo-500 mr-2 text-sm">
                          check_circle
                        </span>
                        Complex reasoning
                      </div>
                      <div className="flex items-center text-gray-700">
                        <span className="material-symbols-outlined text-indigo-500 mr-2 text-sm">
                          check_circle
                        </span>
                        Creative content generation
                      </div>
                    </div>
                    <div className="bg-indigo-50 p-2 rounded-md text-xs text-gray-700">
                      Knowledge cut-off: to define
                    </div>
                  </div>
                </details>
                <Link to="/">
                  <div className="h-9 w-9 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 cursor-pointer hover:bg-indigo-200 transition-colors hover:scale-110 transform">
                    <span className="material-symbols-outlined">home</span>
                  </div>
                </Link>
              </div>
            </header>

            <div className="flex-1 overflow-hidden flex flex-col">
              <div className="flex-1 overflow-y-auto p-4 space-y-6 bg-gray-50">
                <div className="flex items-start gap-4 max-w-3xl mx-auto">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-md flex-shrink-0 hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-xs">
                      psychology
                    </span>
                  </div>
                  <div className="bg-white rounded-2xl rounded-tl-none p-4 shadow-sm hover:shadow-md transition-all">
                    <p className="text-gray-700 text-xs">
                      Hello! I'm Neural Spirit, your AI assistant. I am currently in implementation. I'm coming soon !
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 max-w-3xl mx-auto justify-end">
                  <div className="bg-indigo-50 rounded-2xl rounded-tr-none p-4 shadow-sm hover:shadow-md transition-all">
                    <p className="text-gray-700 text-xs">
                      ...
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 shadow-sm flex-shrink-0 hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-xs">
                      person
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4 max-w-3xl mx-auto">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-md flex-shrink-0 hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-xs">
                      psychology
                    </span>
                  </div>
                  <div className="bg-white rounded-2xl rounded-tl-none p-4 shadow-sm hover:shadow-md transition-all animate-pulse">
                    <div className="flex space-x-2">
                      <div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
                      <div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
                      <div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 bg-white p-4">
                <div className="max-w-3xl mx-auto">
                  <div className="flex items-center gap-2 mb-2">
                    <button className="p-2 rounded-md hover:bg-gray-100 text-gray-600 transition-colors group">
                      <span className="material-symbols-outlined group-hover:text-indigo-600 group-hover:scale-110 transition-all text-sm">
                        refresh
                      </span>
                    </button>

                    <details className="relative">
                      <summary className="list-none">
                        <button className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 transition-colors rounded-md text-gray-700 text-xs flex items-center gap-1.5 cursor-pointer">
                          <span className="material-symbols-outlined text-indigo-500 text-xs">
                            history
                          </span>
                          Recent Conversations
                          <span className="material-symbols-outlined text-xs">
                            expand_more
                          </span>
                        </button>
                      </summary>
                      <div className="absolute left-0 bottom-full mb-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 w-72 p-2 max-h-80 overflow-y-auto">
                        <div className="divide-y divide-gray-100">
                          <div className="py-2 px-3 hover:bg-gray-50 rounded-md cursor-pointer">
                            <div className="text-xs font-medium text-gray-800">
                              Neural Networks Basics
                            </div>
                            <div className="text-[10px] text-gray-500">
                              Today, 2:30 PM
                            </div>
                          </div>
                          <div className="py-2 px-3 hover:bg-gray-50 rounded-md cursor-pointer">
                            <div className="text-xs font-medium text-gray-800">
                              Creative Writing Help
                            </div>
                            <div className="text-[10px] text-gray-500">
                              Yesterday, 4:15 PM
                            </div>
                          </div>
                          <div className="py-2 px-3 hover:bg-gray-50 rounded-md cursor-pointer">
                            <div className="text-xs font-medium text-gray-800">
                              Python Code Debugging
                            </div>
                            <div className="text-[10px] text-gray-500">
                              Jul 12, 2023
                            </div>
                          </div>
                        </div>
                      </div>
                    </details>

                    <span className="mx-1 h-6 w-px bg-gray-200"></span>

                    <button className="px-3 py-1.5 bg-indigo-50 hover:bg-indigo-100 transition-colors rounded-md text-gray-700 text-xs flex items-center gap-1.5 hover:shadow-sm transform hover:scale-105">
                      <span className="material-symbols-outlined text-indigo-500 text-xs">
                        save
                      </span>
                      Save Chat
                    </button>

                    <button className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 transition-colors rounded-md text-gray-700 text-xs flex items-center gap-1.5 hover:shadow-sm transform hover:scale-105">
                      <span className="material-symbols-outlined text-gray-500 text-xs">
                        share
                      </span>
                      Share
                    </button>
                  </div>

                  <div className="relative">
                    <textarea
                      className="w-full h-[60px] rounded-xl border border-gray-200 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-3 pr-12 resize-none text-xs"
                      placeholder="Type your message here..."
                    ></textarea>

                    <div className="absolute top-1/2 right-2 transform -translate-y-1/2 flex gap-1">
                      <button className="w-7 h-7 rounded-md bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 transition-colors hover:scale-110 transform duration-200">
                        <span className="material-symbols-outlined text-xs">
                          mic
                        </span>
                      </button>
                      <button className="w-7 h-7 rounded-md bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 transition-colors hover:scale-110 transform duration-200">
                        <span className="material-symbols-outlined text-xs">
                          attach_file
                        </span>
                      </button>
                      <button className="w-7 h-7 rounded-md bg-indigo-500 hover:bg-indigo-600 flex items-center justify-center text-white transition-colors shadow-sm hover:shadow-md hover:scale-110 transform duration-200">
                        <span className="material-symbols-outlined text-xs">
                          send
                        </span>
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-2 px-1 text-[10px] text-gray-500">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                        Neural Spirit is not ready
                      </div>
                      <div className="h-3 w-px bg-gray-200"></div>
                      <div className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[10px] text-amber-500">
                          bolt
                        </span>
                        Turbo Mode: Off
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <button className="hover:text-indigo-600 transition-colors flex items-center gap-1">
                        <span className="material-symbols-outlined text-[10px]">
                          info
                        </span>
                        Usage Guidelines
                      </button>
                      <button className="hover:text-indigo-600 transition-colors flex items-center gap-1">
                        <span className="material-symbols-outlined text-[10px]">
                          settings
                        </span>
                        Advanced Options
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;

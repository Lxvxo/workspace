import React from "react";
import "../styles/styles.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

import GD from "../assets/courses/gradient_descent.png";
import computer_vision from "../assets/courses/computer_vision.png";
import DNN from "../assets/courses/deep_neural.png";
import baby from "../assets/courses/baby.png";
import cost_function from "../assets/courses/cost_function.png";
import exemple from "../assets/courses/exemple.png";

export const App = () => {
  return (
    <div id="webcrumbs">
      <div className="w-full min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-100 p-8 font-sans">
        <Header></Header>
        <main className="flex flex-col">
          {/* Course Grid Section */}
          <section className="mb-8 mt-8 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {/* Course 1: Thinking Machine */}
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group">
                <div className="h-32 bg-gradient-to-r from-blue-50 to-indigo-50 flex items-center justify-center relative overflow-hidden">
                  <img
                    src={baby}
                    alt="Baby robot"
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <span className="material-symbols-outlined text-6xl text-blue-200 group-hover:scale-110 transition-transform duration-500">
                    psychology
                  </span>
                  <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors duration-300"></div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                    Thinking Machine
                  </h3>

                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-1 bg-blue-50 rounded-full text-xs font-medium text-blue-600">
                      Beginner
                    </span>
                    <span className="text-xs text-gray-500">9/20</span>
                  </div>
                  <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full w-[45%]"></div>
                  </div>
                </div>
              </div>

              {/* Course 2: Perceptrons */}
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group">
                <div className="h-32 bg-gradient-to-r from-blue-50 to-indigo-50 flex items-center justify-center relative overflow-hidden">
                  <img
                    src={exemple}
                    alt="robot watering plants"
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <span className="material-symbols-outlined text-6xl text-blue-200 group-hover:scale-110 transition-transform duration-500">
                    neurology
                  </span>
                  <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors duration-300"></div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                    Artificial Neural
                  </h3>

                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-1 bg-blue-50 rounded-full text-xs font-medium text-blue-600">
                      Intermediate
                    </span>
                    <span className="text-xs text-gray-500">18/25</span>
                  </div>
                  <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full w-[72%]"></div>
                  </div>
                </div>
              </div>

              {/* Course 3: Linear Algebra */}
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group">
                <div className="h-32 bg-gradient-to-r from-blue-50 to-indigo-50 flex items-center justify-center relative overflow-hidden">
                  <span className="material-symbols-outlined text-6xl text-blue-200 group-hover:scale-110 transition-transform duration-500">
                    functions
                  </span>
                  <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors duration-300"></div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                    Linear Algebra for AI
                  </h3>

                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-1 bg-blue-50 rounded-full text-xs font-medium text-blue-600">
                      Advanced
                    </span>
                    <span className="text-xs text-gray-500">6/20</span>
                  </div>
                  <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full w-[30%]"></div>
                  </div>
                </div>
              </div>

              {/* Course 4: Gradient Descent */}
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group">
                <div className="h-32 bg-gradient-to-r from-blue-50 to-indigo-50 flex items-center justify-center relative overflow-hidden">
                  <img
                    src={GD} // Remplace par le chemin réel de ton image
                    alt="Gradient Descent"
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <span className="material-symbols-outlined text-6xl text-blue-200 group-hover:scale-110 transition-transform duration-500">
                    trending_down
                  </span>
                  <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors duration-300"></div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                    Gradient Descent
                  </h3>

                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-1 bg-blue-50 rounded-full text-xs font-medium text-blue-600">
                      Advanced
                    </span>
                    <span className="text-xs text-gray-500">3/20</span>
                  </div>
                  <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full w-[15%]"></div>
                  </div>
                </div>
              </div>

              {/* Course 5: Cost Functions */}
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group">
                <div className="h-32 bg-gradient-to-r from-blue-50 to-indigo-50 flex items-center justify-center relative overflow-hidden">
                  <img
                    src={cost_function}
                    alt="Cost function"
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <span className="material-symbols-outlined text-6xl text-blue-200 group-hover:scale-110 transition-transform duration-500">
                    monitoring
                  </span>
                  <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors duration-300"></div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                    Cost Functions
                  </h3>

                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-1 bg-blue-50 rounded-full text-xs font-medium text-blue-600">
                      Intermediate
                    </span>
                    <span className="text-xs text-gray-500">12/20</span>
                  </div>
                  <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full w-[60%]"></div>
                  </div>
                </div>
              </div>

              {/* Course 6: Deep Learning - Completed with Crown */}
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group">
                <div className="h-32 bg-gradient-to-r from-blue-50 to-indigo-50 flex items-center justify-center relative overflow-hidden">
                  <img
                    src={DNN}
                    alt="Deep learning"
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <span className="material-symbols-outlined text-6xl text-blue-200 group-hover:scale-110 transition-transform duration-500">
                    data_object
                  </span>
                  <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors duration-300"></div>
                  <div className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-yellow-400"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 1L9 9H2L7 14.5L5 22L12 17.5L19 22L17 14.5L22 9H15L12 1Z" />
                    </svg>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                    Deep Learning
                  </h3>

                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-1 bg-blue-50 rounded-full text-xs font-medium text-blue-600">
                      Expert
                    </span>
                    <span className="text-xs text-gray-500 flex items-center">
                      15/15
                      <span className="material-symbols-outlined text-yellow-500 ml-1 text-sm">
                        military_tech
                      </span>
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full w-full"></div>
                  </div>
                </div>
              </div>

              {/* Course 7: Natural Language Processing */}
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group">
                <div className="h-32 bg-gradient-to-r from-blue-50 to-indigo-50 flex items-center justify-center relative overflow-hidden">
                  <span className="material-symbols-outlined text-6xl text-blue-200 group-hover:scale-110 transition-transform duration-500">
                    chat
                  </span>
                  <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors duration-300"></div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                    Natural Language Processing
                  </h3>

                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-1 bg-blue-50 rounded-full text-xs font-medium text-blue-600">
                      Advanced
                    </span>
                    <span className="text-xs text-gray-500">4/18</span>
                  </div>
                  <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full w-[22%]"></div>
                  </div>
                </div>
              </div>

              {/* Course 8: Computer Vision - Completed with Crown */}
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group">
                <div className="h-32 bg-gradient-to-r from-blue-50 to-indigo-50 flex items-center justify-center relative overflow-hidden">
                  <img
                    src={computer_vision}
                    alt="Computer Vision"
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <span className="material-symbols-outlined text-6xl text-blue-200 group-hover:scale-110 transition-transform duration-500">
                    visibility
                  </span>
                  <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors duration-300"></div>
                  <div className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-yellow-400"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 1L9 9H2L7 14.5L5 22L12 17.5L19 22L17 14.5L22 9H15L12 1Z" />
                    </svg>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                    Computer Vision
                  </h3>

                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-1 bg-blue-50 rounded-full text-xs font-medium text-blue-600">
                      Expert
                    </span>
                    <span className="text-xs text-gray-500 flex items-center">
                      22/22
                      <span className="material-symbols-outlined text-yellow-500 ml-1 text-sm">
                        military_tech
                      </span>
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full w-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="mb-8 mt-8 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {/* Course 1: Thinking Machine */}
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group">
                <div className="h-32 bg-gradient-to-r from-blue-50 to-indigo-50 flex items-center justify-center relative overflow-hidden">
                  <img
                    src={baby}
                    alt="Baby robot"
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <span className="material-symbols-outlined text-6xl text-blue-200 group-hover:scale-110 transition-transform duration-500">
                    psychology
                  </span>
                  <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors duration-300"></div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                    Thinking Machine
                  </h3>

                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-1 bg-blue-50 rounded-full text-xs font-medium text-blue-600">
                      Beginner
                    </span>
                    <span className="text-xs text-gray-500">9/20</span>
                  </div>
                  <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full w-[45%]"></div>
                  </div>
                </div>
              </div>

              {/* Course 2: Perceptrons */}
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group">
                <div className="h-32 bg-gradient-to-r from-blue-50 to-indigo-50 flex items-center justify-center relative overflow-hidden">
                  <img
                    src={exemple}
                    alt="robot watering plants"
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <span className="material-symbols-outlined text-6xl text-blue-200 group-hover:scale-110 transition-transform duration-500">
                    neurology
                  </span>
                  <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors duration-300"></div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                    Artificial Neural
                  </h3>

                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-1 bg-blue-50 rounded-full text-xs font-medium text-blue-600">
                      Intermediate
                    </span>
                    <span className="text-xs text-gray-500">18/25</span>
                  </div>
                  <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full w-[72%]"></div>
                  </div>
                </div>
              </div>

              {/* Course 3: Linear Algebra */}
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group">
                <div className="h-32 bg-gradient-to-r from-blue-50 to-indigo-50 flex items-center justify-center relative overflow-hidden">
                  <span className="material-symbols-outlined text-6xl text-blue-200 group-hover:scale-110 transition-transform duration-500">
                    functions
                  </span>
                  <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors duration-300"></div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                    Linear Algebra for AI
                  </h3>

                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-1 bg-blue-50 rounded-full text-xs font-medium text-blue-600">
                      Advanced
                    </span>
                    <span className="text-xs text-gray-500">6/20</span>
                  </div>
                  <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full w-[30%]"></div>
                  </div>
                </div>
              </div>

              {/* Course 4: Gradient Descent */}
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group">
                <div className="h-32 bg-gradient-to-r from-blue-50 to-indigo-50 flex items-center justify-center relative overflow-hidden">
                  <img
                    src={GD} // Remplace par le chemin réel de ton image
                    alt="Gradient Descent"
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <span className="material-symbols-outlined text-6xl text-blue-200 group-hover:scale-110 transition-transform duration-500">
                    trending_down
                  </span>
                  <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors duration-300"></div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                    Gradient Descent
                  </h3>

                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-1 bg-blue-50 rounded-full text-xs font-medium text-blue-600">
                      Advanced
                    </span>
                    <span className="text-xs text-gray-500">3/20</span>
                  </div>
                  <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full w-[15%]"></div>
                  </div>
                </div>
              </div>

              {/* Course 5: Cost Functions */}
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group">
                <div className="h-32 bg-gradient-to-r from-blue-50 to-indigo-50 flex items-center justify-center relative overflow-hidden">
                  <img
                    src={cost_function}
                    alt="Cost function"
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <span className="material-symbols-outlined text-6xl text-blue-200 group-hover:scale-110 transition-transform duration-500">
                    monitoring
                  </span>
                  <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors duration-300"></div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                    Cost Functions
                  </h3>

                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-1 bg-blue-50 rounded-full text-xs font-medium text-blue-600">
                      Intermediate
                    </span>
                    <span className="text-xs text-gray-500">12/20</span>
                  </div>
                  <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full w-[60%]"></div>
                  </div>
                </div>
              </div>

              {/* Course 6: Deep Learning - Completed with Crown */}
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group">
                <div className="h-32 bg-gradient-to-r from-blue-50 to-indigo-50 flex items-center justify-center relative overflow-hidden">
                  <img
                    src={DNN}
                    alt="Deep learning"
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <span className="material-symbols-outlined text-6xl text-blue-200 group-hover:scale-110 transition-transform duration-500">
                    data_object
                  </span>
                  <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors duration-300"></div>
                  <div className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-yellow-400"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 1L9 9H2L7 14.5L5 22L12 17.5L19 22L17 14.5L22 9H15L12 1Z" />
                    </svg>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                    Deep Learning
                  </h3>

                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-1 bg-blue-50 rounded-full text-xs font-medium text-blue-600">
                      Expert
                    </span>
                    <span className="text-xs text-gray-500 flex items-center">
                      15/15
                      <span className="material-symbols-outlined text-yellow-500 ml-1 text-sm">
                        military_tech
                      </span>
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full w-full"></div>
                  </div>
                </div>
              </div>

              {/* Course 7: Natural Language Processing */}
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group">
                <div className="h-32 bg-gradient-to-r from-blue-50 to-indigo-50 flex items-center justify-center relative overflow-hidden">
                  <span className="material-symbols-outlined text-6xl text-blue-200 group-hover:scale-110 transition-transform duration-500">
                    chat
                  </span>
                  <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors duration-300"></div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                    Natural Language Processing
                  </h3>

                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-1 bg-blue-50 rounded-full text-xs font-medium text-blue-600">
                      Advanced
                    </span>
                    <span className="text-xs text-gray-500">4/18</span>
                  </div>
                  <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full w-[22%]"></div>
                  </div>
                </div>
              </div>

              {/* Course 8: Computer Vision - Completed with Crown */}
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group">
                <div className="h-32 bg-gradient-to-r from-blue-50 to-indigo-50 flex items-center justify-center relative overflow-hidden">
                  <img
                    src={computer_vision}
                    alt="Computer Vision"
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <span className="material-symbols-outlined text-6xl text-blue-200 group-hover:scale-110 transition-transform duration-500">
                    visibility
                  </span>
                  <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors duration-300"></div>
                  <div className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-yellow-400"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 1L9 9H2L7 14.5L5 22L12 17.5L19 22L17 14.5L22 9H15L12 1Z" />
                    </svg>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                    Computer Vision
                  </h3>

                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-1 bg-blue-50 rounded-full text-xs font-medium text-blue-600">
                      Expert
                    </span>
                    <span className="text-xs text-gray-500 flex items-center">
                      22/22
                      <span className="material-symbols-outlined text-yellow-500 ml-1 text-sm">
                        military_tech
                      </span>
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full w-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Special Blocks Section */}
          <section className="mt-8 mb-10 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Julia Block */}
              <div className="bg-gradient-to-br from-purple-50 to-indigo-100 rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
                <div className="flex flex-col md:flex-row h-full">
                  <div className="w-full md:w-2/5 p-6 flex flex-col justify-between">
                    <div>
                      <div className="bg-purple-500/10 w-fit p-2 rounded-lg mb-4">
                        <span className="material-symbols-outlined text-3xl text-purple-600 group-hover:scale-110 transition-transform duration-300">
                          code_blocks
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-purple-800 mb-2 group-hover:text-purple-700 transition-colors">
                        Julia
                      </h3>
                      <p className="text-sm text-purple-700/80">
                        Master the high-performance language designed for
                        scientific computing
                      </p>
                    </div>
                    <button className="mt-4 bg-white text-purple-700 px-4 py-2 rounded-lg text-sm font-medium transform transition-all duration-300 flex items-center group-hover:bg-purple-600 group-hover:text-white shadow-md hover:shadow-lg">
                      Explore
                      <span className="material-symbols-outlined ml-1 text-base transition-transform duration-300 group-hover:translate-x-1">
                        arrow_forward
                      </span>
                    </button>
                  </div>
                  <div className="w-full md:w-3/5 bg-purple-100/50 p-4 flex items-center justify-center relative overflow-hidden">
                    <svg
                      className="w-full h-56 text-purple-200 opacity-50 group-hover:opacity-70 transition-opacity duration-300"
                      viewBox="0 0 200 200"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="70" cy="70" r="30" fill="#9061F9" />
                      <circle cx="130" cy="70" r="30" fill="#4F46E5" />
                      <circle cx="100" cy="130" r="30" fill="#818CF8" />
                      <path
                        d="M70,70 L130,70 L100,130 Z"
                        fill="none"
                        stroke="white"
                        strokeWidth="3"
                      />
                    </svg>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-100/80 to-transparent pointer-events-none"></div>
                  </div>
                </div>
              </div>

              {/* Cryptography to AI Block */}
              <div className="bg-gradient-to-br from-rose-50 to-amber-100 rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
                <div className="flex flex-col md:flex-row h-full">
                  <div className="w-full md:w-2/5 p-6 flex flex-col justify-between">
                    <div>
                      <div className="bg-rose-500/10 w-fit p-2 rounded-lg mb-4">
                        <span className="material-symbols-outlined text-3xl text-rose-600 group-hover:scale-110 transition-transform duration-300">
                          enhanced_encryption
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-rose-800 mb-2 group-hover:text-rose-700 transition-colors">
                        Cryptography to AI
                      </h3>
                      <p className="text-sm text-rose-700/80">
                        Explore the intersection of encryption techniques and
                        artificial intelligence
                      </p>
                    </div>
                    <button className="mt-4 bg-white text-rose-700 px-4 py-2 rounded-lg text-sm font-medium transform transition-all duration-300 flex items-center group-hover:bg-rose-600 group-hover:text-white shadow-md hover:shadow-lg">
                      Explore
                      <span className="material-symbols-outlined ml-1 text-base transition-transform duration-300 group-hover:translate-x-1">
                        arrow_forward
                      </span>
                    </button>
                  </div>
                  <div className="w-full md:w-3/5 bg-rose-100/50 p-4 flex items-center justify-center relative overflow-hidden">
                    <svg
                      className="w-full h-56 text-rose-200 opacity-50 group-hover:opacity-70 transition-opacity duration-300"
                      viewBox="0 0 200 200"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100,50 L50,80 L50,140 L100,170 L150,140 L150,80 Z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                      />
                      <path
                        d="M100,50 L100,170"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                      />
                      <path
                        d="M50,80 L150,80"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                      />
                      <path
                        d="M50,140 L150,140"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                      />
                      <circle
                        cx="100"
                        cy="100"
                        r="20"
                        fill="#FBBF24"
                        opacity="0.7"
                      />
                      <path
                        d="M85,85 L115,115 M85,115 L115,85"
                        stroke="#FB7185"
                        strokeWidth="4"
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 bg-gradient-to-r from-rose-100/80 to-transparent pointer-events-none"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
      <Footer></Footer>
    </div>
  );
};
export default App;

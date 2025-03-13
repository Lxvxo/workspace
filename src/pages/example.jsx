import React from "react";
import "../styles/styles.css";

export const App = () => {
  return (
    <div id="webcrumbs" className="w-screen">
      <div className="flex min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 font-[Poppins,sans-serif] relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-[500px] h-[500px] bg-gradient-to-r from-blue-400/10 to-indigo-400/10 -top-60 -right-60 animate-pulse"></div>
          <div
            className="absolute w-[300px] h-[300px] bg-gradient-to-r from-purple-400/10 to-pink-400/10 bottom-20 -left-20 animate-pulse"
            style={{ animationDuration: "8s" }}
          ></div>
          <div
            className="absolute w-[200px] h-[200px] bg-gradient-to-r from-yellow-400/10 to-amber-400/10 top-1/2 right-1/3 animate-pulse"
            style={{ animationDuration: "7s" }}
          ></div>
          <div className="absolute top-0 left-0 w-full h-full bg-white/40 backdrop-blur-[80px] z-0"></div>
        </div>

        {/* Vertical Navbar */}
        <div className="w-16 bg-white/80 backdrop-blur-md shadow-lg shadow-indigo-100/50 flex flex-col items-center py-6 z-10 relative">
          <div className="mb-10 p-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-md shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-110">
            <span className="material-symbols-outlined">school</span>
          </div>

          <div className="flex flex-col items-center space-y-8">
            <a
              href="#"
              className="p-2 hover:bg-blue-100 transition-all duration-300 text-blue-600 group"
            >
              <span className="material-symbols-outlined group-hover:scale-110 transition-all">
                home
              </span>
            </a>

            <a
              href="#"
              className="p-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-600 group shadow-sm"
            >
              <span className="material-symbols-outlined group-hover:scale-110 transition-all">
                menu_book
              </span>
            </a>

            <a
              href="#"
              className="p-2 hover:bg-blue-100 transition-all duration-300 text-gray-600 group"
            >
              <span className="material-symbols-outlined group-hover:scale-110 transition-all">
                emoji_events
              </span>
            </a>

            <a
              href="#"
              className="p-2 hover:bg-blue-100 transition-all duration-300 text-gray-600 group"
            >
              <span className="material-symbols-outlined group-hover:scale-110 transition-all">
                forum
              </span>
            </a>

            <a
              href="#"
              className="p-2 hover:bg-blue-100 transition-all duration-300 text-gray-600 group"
            >
              <span className="material-symbols-outlined group-hover:scale-110 transition-all">
                info
              </span>
            </a>
          </div>

          <div className="mt-auto p-2 hover:bg-blue-100 transition-all duration-300 text-gray-600 group">
            <span className="material-symbols-outlined group-hover:scale-110 transition-all">
              settings
            </span>
          </div>
        </div>

        {/* Course Navigation Arrows */}
        <div className="flex items-center absolute left-24 top-1/2 transform -translate-y-1/2 z-10">
          <button className="bg-white/90 backdrop-blur-xl p-3 shadow-lg shadow-indigo-100/40 text-blue-600 hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-600 hover:text-white transition-all duration-300 group">
            <span className="material-symbols-outlined group-hover:scale-110 transition-transform">
              chevron_left
            </span>
          </button>
        </div>

        <div className="flex items-center absolute right-8 top-1/2 transform -translate-y-1/2 z-10">
          <button className="bg-white/90 backdrop-blur-xl p-3 shadow-lg shadow-indigo-100/40 text-blue-600 hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-600 hover:text-white transition-all duration-300 group">
            <span className="material-symbols-outlined group-hover:scale-110 transition-transform">
              chevron_right
            </span>
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8 relative z-10">
          {/* Progress Tracker */}
          <div className="max-w-3xl mx-auto mb-6 bg-white/70 backdrop-blur-xl shadow-md overflow-hidden">
            <div className="h-1.5 bg-gray-100 w-full">
              <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 w-[25%]"></div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center px-4 py-2 text-xs font-medium text-gray-600">
                <span>Intro to AI</span>
                <div className="flex items-center gap-2"></div>
              </div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto bg-white/80 backdrop-blur-xl p-5 shadow-xl shadow-indigo-100/30 mb-8 border border-white/50">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-800 flex items-center mx-auto"></h2>
            </div>

            <div className="relative flex justify-center">
              <div className="bg-white/90 p-5 shadow-md border border-blue-50 hover:border-blue-100 transition-all duration-300 relative max-w-4xl">
                <div className="flex items-center justify-between mb-4 pb-2 border-b-2 border-indigo-100 relative">
                  <h3 className="text-lg font-bold text-gray-800 font-[Georgia,serif] relative">
                    What is{" "}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600 font-extrabold hover:from-indigo-600 hover:to-blue-500 transition-all duration-300">
                      Artificial Intelligence
                    </span>
                    ?
                  </h3>
                  <div className="flex items-center">
                    <div className="flex items-center gap-1.5 bg-gradient-to-r from-green-50 to-emerald-50 px-3 py-1 border border-emerald-100 shadow-sm relative">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5 text-emerald-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-xs font-medium text-emerald-700 group-hover:text-emerald-800">
                        +15 points earned
                      </span>
                    </div>
                  </div>
                </div>

                <p className="mb-4 text-gray-700 leading-relaxed font-[Source Sans Pro,sans-serif] text-[14px]">
                  Artificial Intelligence (AI) refers to computer systems that
                  can perform tasks normally requiring human intelligence. These
                  tasks include{" "}
                  <span className="font-medium text-indigo-600">learning</span>,{" "}
                  <span className="font-medium text-indigo-600">reasoning</span>
                  ,{" "}
                  <span className="font-medium text-indigo-600">
                    problem-solving
                  </span>
                  ,{" "}
                  <span className="font-medium text-indigo-600">
                    perception
                  </span>
                  , and{" "}
                  <span className="font-medium text-indigo-600">
                    language understanding
                  </span>
                  .
                </p>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-3 mb-5 border-l-4 border-blue-400 shadow-md transform transition-all relative">
                  <h4 className="font-bold text-blue-800 mb-2 flex items-center font-[Montserrat,sans-serif] text-sm">
                    <span className="material-symbols-outlined mr-2 text-blue-500 text-base">
                      lightbulb
                    </span>
                    Key Concept: Types of AI
                  </h4>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1 font-[Source Sans Pro,sans-serif] text-[13px]">
                    <li>
                      <span className="font-semibold text-indigo-600">
                        Narrow AI:
                      </span>{" "}
                      Designed for specific tasks (e.g., virtual assistants)
                    </li>
                    <li>
                      <span className="font-semibold text-indigo-600">
                        General AI:
                      </span>{" "}
                      Human-level intelligence across various domains
                    </li>
                    <li>
                      <span className="font-semibold text-indigo-600">
                        Superintelligent AI:
                      </span>{" "}
                      Systems surpassing human intelligence
                    </li>
                  </ul>
                </div>

                <div className="border-l-4 border-yellow-400 bg-gradient-to-r from-yellow-50 to-amber-50 p-3 mb-5 transform transition-all relative">
                  <div className="flex items-start">
                    <span className="material-symbols-outlined text-yellow-500 mr-3 text-lg animate-pulse">
                      tips_and_updates
                    </span>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1 font-[Montserrat,sans-serif] text-sm">
                        A priori
                      </h4>
                      <p className="text-gray-700 font-[Source Sans Pro,sans-serif] text-[13px]">
                        While AI systems can perform impressive tasks, they
                        fundamentally operate based on{" "}
                        <span className="font-medium text-amber-600">
                          patterns in data
                        </span>{" "}
                        and{" "}
                        <span className="font-medium text-amber-600">
                          statistical models
                        </span>{" "}
                        rather than true understanding or consciousness.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center mb-5 gap-4"></div>

                <div className="mt-6 bg-gradient-to-br from-purple-200 via-indigo-200 to-blue-200 p-5 shadow-lg hover:shadow-xl transition-all duration-500 transform border border-indigo-200/80 relative">
                  <p className="mb-3 text-gray-700 font-medium bg-white/60 p-2.5 font-[Montserrat,sans-serif] text-[13px] text-center">
                    Example of questions:
                  </p>
                  <div className="bg-white/90 p-4 mb-3 shadow-md backdrop-blur-sm border border-indigo-100 hover:border-indigo-300 transition-all duration-300 confetti-container">
                    <div id="answer-area" className="relative">
                      <textarea
                        id="answer-input"
                        className="w-full min-h-[100px] p-3 border-2 border-indigo-100 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 outline-none resize-y text-gray-700 transition-all shadow-inner font-[Source Sans Pro,sans-serif] text-[13px]"
                        placeholder="Type your answer here..."
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            const answerArea =
                              document.getElementById("answer-area");
                            const input = e.target;
                            const isCorrect =
                              input.value.trim() === "neural{flag}";

                            // Create response message
                            const responseMsg = document.createElement("div");
                            responseMsg.className = isCorrect
                              ? "p-3 bg-green-100 border border-green-300 text-green-700 rounded shadow-inner mt-2 font-medium"
                              : "p-3 bg-red-100 border border-red-300 text-red-700 rounded shadow-inner mt-2 font-medium";
                            responseMsg.textContent = isCorrect
                              ? "Success!"
                              : "Wrong response. Try again.";

                            // Replace or add message
                            const existingMsg =
                              answerArea.querySelector(".response-message");
                            if (existingMsg) {
                              answerArea.replaceChild(responseMsg, existingMsg);
                            } else {
                              answerArea.appendChild(responseMsg);
                            }

                            responseMsg.classList.add("response-message");

                            // Create confetti for correct answer
                            if (isCorrect) {
                              input.disabled = true;
                              input.style.backgroundColor = "#f0fff4";
                              input.style.borderColor = "#68d391";

                              // Find all confetti containers in the document
                              const confettiContainers =
                                document.querySelectorAll(
                                  ".confetti-container"
                                );

                              confettiContainers.forEach((container) => {
                                // Create confetti wrapper
                                const confettiWrapper =
                                  document.createElement("div");
                                confettiWrapper.className =
                                  "absolute inset-0 overflow-hidden pointer-events-none z-10";
                                container.appendChild(confettiWrapper);

                                // Create confetti pieces
                                for (let i = 0; i < 100; i++) {
                                  const confetti =
                                    document.createElement("div");
                                  confetti.className =
                                    "absolute w-2 h-2 rounded-full animate-confetti";
                                  confetti.style.backgroundColor = [
                                    "#ff6b6b",
                                    "#4ecdc4",
                                    "#ffe66d",
                                    "#6a0dad",
                                    "#ff9a3c",
                                  ][Math.floor(Math.random() * 5)];
                                  confetti.style.left = `${
                                    Math.random() * 100
                                  }%`;
                                  confetti.style.top = `${
                                    Math.random() * 100
                                  }%`;
                                  confetti.style.transform = `rotate(${
                                    Math.random() * 360
                                  }deg)`;
                                  confetti.style.animation = `confetti ${
                                    1 + Math.random() * 2
                                  }s ease-out forwards`;
                                  confettiWrapper.appendChild(confetti);
                                }
                              });

                              // Remove confetti after animation
                              setTimeout(() => {
                                document
                                  .querySelectorAll(
                                    ".confetti-container .absolute.inset-0"
                                  )
                                  .forEach((el) => el.remove());
                              }, 3000);
                            }
                          }
                        }}
                      ></textarea>
                      <style jsx>{`
                        @keyframes confetti {
                          0% {
                            transform: translateY(0) rotate(0deg);
                            opacity: 1;
                            scale: 0;
                          }
                          100% {
                            transform: translateY(-100px) rotate(720deg);
                            opacity: 0;
                            scale: 1;
                          }
                        }
                        .animate-confetti {
                          animation: confetti 1.5s ease-out forwards;
                        }
                      `}</style>
                    </div>

                    <div className="flex justify-center mt-2.5 space-x-2.5 relative">
                      <button className="px-3 py-2 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all duration-300 flex items-center group text-xs border border-indigo-200 hover:border-indigo-600 font-[Roboto,sans-serif] font-medium relative overflow-hidden hover:shadow-md">
                        <span className="material-symbols-outlined text-xs mr-1.5 group-hover:rotate-12 transition-transform">
                          code
                        </span>
                        <span className="font-medium">Code Editor</span>
                        <span className="absolute w-full h-0.5 bg-indigo-300 bottom-0 left-0 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                      </button>

                      <button
                        className="px-3 py-2 text-green-600 hover:bg-green-600 hover:text-white transition-all duration-300 flex items-center group text-xs border border-green-200 hover:border-green-600 font-[Roboto,sans-serif] font-medium relative overflow-hidden hover:shadow-md"
                        onClick={(e) => {
                          const mathEditorSection = document.getElementById(
                            "math-editor-section"
                          );
                          if (mathEditorSection) {
                            mathEditorSection.classList.toggle("hidden");
                          }
                        }}
                      >
                        <span className="material-symbols-outlined text-xs mr-1.5 group-hover:rotate-12 transition-transform">
                          functions
                        </span>
                        <span className="font-medium">Math Editor</span>
                        <span className="absolute w-full h-0.5 bg-green-300 bottom-0 left-0 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                      </button>
                    </div>

                    {/* Math Editor Section - Reduced size */}
                    <div
                      id="math-editor-section"
                      className="hidden mt-4 bg-gray-800 text-gray-200 p-3 rounded-md shadow-xl border border-gray-700 transition-all duration-300 max-w-md mx-auto"
                    >
                      <div className="flex justify-between items-center mb-2 pb-1 border-b border-gray-600">
                        <h4 className="text-xs font-bold text-gray-200">
                          Math Formula Editor
                        </h4>
                        <button
                          className="text-gray-400 hover:text-gray-200 transition-colors"
                          onClick={(e) => {
                            const mathEditorSection = document.getElementById(
                              "math-editor-section"
                            );
                            mathEditorSection.classList.add("hidden");
                          }}
                        >
                          <span className="material-symbols-outlined text-xs">
                            close
                          </span>
                        </button>
                      </div>

                      <div className="grid grid-cols-8 gap-1 mb-2 text-xs">
                        {/* Basic Operators */}
                        <button className="bg-gray-700 hover:bg-gray-600 p-1 rounded text-center transition-colors">
                          +
                        </button>
                        <button className="bg-gray-700 hover:bg-gray-600 p-1 rounded text-center transition-colors">
                          −
                        </button>
                        <button className="bg-gray-700 hover:bg-gray-600 p-1 rounded text-center transition-colors">
                          ×
                        </button>
                        <button className="bg-gray-700 hover:bg-gray-600 p-1 rounded text-center transition-colors">
                          ÷
                        </button>
                        <button className="bg-gray-700 hover:bg-gray-600 p-1 rounded text-center transition-colors">
                          ±
                        </button>
                        <button className="bg-gray-700 hover:bg-gray-600 p-1 rounded text-center transition-colors">
                          =
                        </button>
                        <button className="bg-gray-700 hover:bg-gray-600 p-1 rounded text-center transition-colors">
                          ≠
                        </button>
                        <button className="bg-gray-700 hover:bg-gray-600 p-1 rounded text-center transition-colors">
                          ≈
                        </button>
                      </div>

                      <div className="flex justify-between items-center pt-1.5 border-t border-gray-600">
                        <div className="flex space-x-1">
                          <button className="bg-gray-700 hover:bg-gray-600 p-1.5 rounded text-center transition-colors text-[10px]">
                            f(x)
                          </button>
                          <button className="bg-gray-700 hover:bg-gray-600 p-1.5 rounded text-center transition-colors text-[10px]">
                            π
                          </button>
                        </div>
                        <button className="bg-green-600 hover:bg-green-700 px-2 py-1 rounded text-white text-[10px] transition-colors">
                          Insert
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-4 right-4">
                    <div className="group relative">
                      <div className="flex items-center justify-center"></div>

                      <div className="absolute right-0 bottom-12 bg-white/95 backdrop-blur-sm shadow-xl p-3 w-60 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10 border border-blue-100">
                        <h5 className="font-bold text-gray-800 mb-1.5 border-b border-blue-100 pb-1 font-[Montserrat,sans-serif] text-xs">
                          Quick Question Prompts
                        </h5>
                        <ul className="text-xs text-gray-700 space-y-1.5 font-[Source Sans Pro,sans-serif]">
                          <li className="hover:text-blue-600 cursor-pointer transition-colors">
                            What is the difference between AI and ML?
                          </li>
                          <li className="hover:text-blue-600 cursor-pointer transition-colors">
                            How do neural networks work?
                          </li>
                          <li className="hover:text-blue-600 cursor-pointer transition-colors">
                            What are ethical concerns about AI?
                          </li>
                          <li className="hover:text-blue-600 cursor-pointer transition-colors">
                            Is consciousness possible in AI?
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <svg
                  className="absolute top-20 right-8 w-24 h-24 text-blue-200 opacity-20 -z-10"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M30,20 C40,10 60,10 70,20 C80,30 80,50 70,60 C60,70 40,70 30,60 C20,50 20,30 30,20Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                  <path
                    d="M40,40 L60,60 M40,60 L60,40"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M50,30 V35 M50,65 V70"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M30,50 H35 M65,50 H70"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>

            <div className="flex justify-between items-center mt-6 pt-3 border-t border-gray-200 max-w-4xl mx-auto">
              <button className="py-1.5 px-3 bg-white hover:bg-gray-50 text-gray-700 shadow-md border border-gray-200 flex items-center transition-all duration-300 hover:translate-x-[-2px] group text-xs font-medium font-[Roboto,sans-serif]">
                <span className="material-symbols-outlined mr-1.5 text-sm group-hover:rotate-[-12deg] transition-transform">
                  arrow_back
                </span>
                Course Overview
              </button>

              <div className="flex space-x-2">
                <span className="w-2 h-2 bg-blue-500 animate-pulse"></span>
                <span className="w-2 h-2 bg-gray-300 hover:bg-gray-400 cursor-pointer transition-colors"></span>
                <span className="w-2 h-2 bg-gray-300 hover:bg-gray-400 cursor-pointer transition-colors"></span>
                <span className="w-2 h-2 bg-gray-300 hover:bg-gray-400 cursor-pointer transition-colors"></span>
              </div>

              <button className="py-1.5 px-3 bg-white hover:bg-gray-50 text-gray-700 shadow-md border border-gray-200 flex items-center transition-all duration-300 hover:translate-x-[2px] group text-xs font-medium font-[Roboto,sans-serif]">
                Machine Learning Basics
                <span className="material-symbols-outlined ml-1.5 text-sm group-hover:rotate-[12deg] transition-transform">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

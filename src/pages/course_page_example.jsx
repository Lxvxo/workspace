import React from "react";
import "../styles/styles.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const App = () => {
  return (
    <div id="webcrumbs">
      <div className="w-full min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-100 p-8 font-sans">
        <div className="max-w-7xl mx-auto bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg shadow-indigo-100/30 mb-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 flex items-center transition-all duration-300 hover:scale-[1.01]">
              <span className="material-symbols-outlined mr-3 text-blue-500 text-4xl animate-pulse">
                school
              </span>
              <span>
                Introduction to{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                  Artificial Intelligence
                </span>
              </span>
              <span className="ml-4 px-3 py-1 bg-blue-100 rounded-full text-sm font-medium text-blue-800 transform transition-all hover:scale-105">
                Module 1/8
              </span>
            </h2>
            <div className="flex space-x-2">
              <div className="flex items-center text-sm font-medium rounded-full bg-green-50 px-4 py-2 shadow-sm">
                <span className="material-symbols-outlined mr-2 text-green-500 animate-bounce">
                  check_circle
                </span>
                <span>
                  Progress:{" "}
                  <span className="text-green-600 font-bold">25%</span>
                </span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-blue-50 hover:border-blue-100 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 border-indigo-100 pb-2">
                What is{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600">
                  Artificial Intelligence
                </span>
                ?
              </h3>

              <p className="mb-6 text-gray-700 leading-relaxed text-lg">
                Artificial Intelligence (AI) refers to computer systems that can
                perform tasks normally requiring human intelligence. These tasks
                include{" "}
                <span className="font-medium text-indigo-600">learning</span>,{" "}
                <span className="font-medium text-indigo-600">reasoning</span>,{" "}
                <span className="font-medium text-indigo-600">
                  problem-solving
                </span>
                ,{" "}
                <span className="font-medium text-indigo-600">perception</span>,
                and{" "}
                <span className="font-medium text-indigo-600">
                  language understanding
                </span>
                .
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-5 mb-7 border-l-4 border-blue-400 shadow-sm transform transition-all hover:scale-[1.01] hover:shadow-md">
                <h4 className="font-bold text-blue-800 mb-3 text-lg flex items-center">
                  <span className="material-symbols-outlined mr-2 text-blue-500">
                    lightbulb
                  </span>
                  Key Concept: Types of AI
                </h4>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 text-lg">
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

              <div className="flex justify-center mb-8">
                <div className="relative w-full max-w-2xl h-80 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl overflow-hidden shadow-lg group transition-all duration-500 hover:shadow-xl">
                  <div className="absolute w-52 h-52 bg-blue-200/50 rounded-full -top-16 -left-16 animate-pulse"></div>
                  <div
                    className="absolute w-40 h-40 bg-purple-200/50 rounded-full -bottom-10 -right-10 animate-pulse"
                    style={{ animationDelay: "1s" }}
                  ></div>

                  <div className="relative z-10 flex items-center justify-center h-full">
                    <div className="flex flex-wrap justify-center gap-6 p-6">
                      <div className="bg-white/90 backdrop-blur-sm px-5 py-3 rounded-xl shadow-md flex items-center transform transition-all duration-300 hover:scale-110 hover:shadow-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 group">
                        <span className="material-symbols-outlined text-blue-500 mr-3 text-2xl group-hover:rotate-12 transition-transform">
                          psychology
                        </span>
                        <span className="text-md font-bold">
                          Machine Learning
                        </span>
                      </div>
                      <div className="bg-white/90 backdrop-blur-sm px-5 py-3 rounded-xl shadow-md flex items-center transform transition-all duration-300 hover:scale-110 hover:shadow-lg hover:bg-gradient-to-r hover:from-purple-50 hover:to-indigo-50 group">
                        <span className="material-symbols-outlined text-purple-500 mr-3 text-2xl group-hover:rotate-12 transition-transform">
                          hub
                        </span>
                        <span className="text-md font-bold">
                          Neural Networks
                        </span>
                      </div>
                      <div className="bg-white/90 backdrop-blur-sm px-5 py-3 rounded-xl shadow-md flex items-center transform transition-all duration-300 hover:scale-110 hover:shadow-lg hover:bg-gradient-to-r hover:from-indigo-50 hover:to-blue-50 group">
                        <span className="material-symbols-outlined text-indigo-500 mr-3 text-2xl group-hover:rotate-12 transition-transform">
                          language
                        </span>
                        <span className="text-md font-bold">NLP</span>
                      </div>
                      <div className="bg-white/90 backdrop-blur-sm px-5 py-3 rounded-xl shadow-md flex items-center transform transition-all duration-300 hover:scale-110 hover:shadow-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 group">
                        <span className="material-symbols-outlined text-blue-400 mr-3 text-2xl group-hover:rotate-12 transition-transform">
                          visibility
                        </span>
                        <span className="text-md font-bold">
                          Computer Vision
                        </span>
                      </div>
                      <div className="bg-white/90 backdrop-blur-sm px-5 py-3 rounded-xl shadow-md flex items-center transform transition-all duration-300 hover:scale-110 hover:shadow-lg hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 group">
                        <span className="material-symbols-outlined text-purple-400 mr-3 text-2xl group-hover:rotate-12 transition-transform">
                          smart_toy
                        </span>
                        <span className="text-md font-bold">Robotics</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p className="mb-7 text-gray-700 leading-relaxed text-lg">
                The field of AI has seen{" "}
                <span className="font-medium text-indigo-600">
                  remarkable advances
                </span>{" "}
                in recent years, with applications ranging from virtual
                assistants and recommendation systems to autonomous vehicles and
                medical diagnosis tools.
              </p>

              <div className="border-l-4 border-yellow-400 bg-gradient-to-r from-yellow-50 to-amber-50 p-5 rounded-r-xl mb-8 transform transition-all hover:scale-[1.01] hover:shadow-md">
                <div className="flex items-start">
                  <span className="material-symbols-outlined text-yellow-500 mr-3 text-2xl animate-pulse">
                    tips_and_updates
                  </span>
                  <div>
                    <h4 className="font-bold text-gray-800 text-lg mb-2">
                      Important Insight
                    </h4>
                    <p className="text-gray-700 text-lg">
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

              <h3 className="text-2xl font-bold mb-4 text-gray-800 border-b-2 border-indigo-100 pb-2">
                Historical{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600">
                  Context
                </span>
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                The term "Artificial Intelligence" was coined in 1956 at the{" "}
                <span className="font-medium text-indigo-600">
                  Dartmouth Conference
                </span>
                , but the journey to create intelligent machines began much
                earlier with philosophical questions about the nature of
                knowledge and reasoning.
              </p>

              <div className="flex items-center justify-center mb-8 gap-6">
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-800 transition-colors flex items-center px-5 py-3 bg-blue-50 hover:bg-blue-100 rounded-xl shadow-sm transform transition-all duration-300 hover:scale-105 hover:shadow-md group"
                >
                  <span className="material-symbols-outlined mr-2 text-2xl group-hover:rotate-12 transition-transform">
                    menu_book
                  </span>
                  <span className="font-bold">Further Reading</span>
                </a>
                <a
                  href="#"
                  className="text-indigo-600 hover:text-indigo-800 transition-colors flex items-center px-5 py-3 bg-indigo-50 hover:bg-indigo-100 rounded-xl shadow-sm transform transition-all duration-300 hover:scale-105 hover:shadow-md group"
                >
                  <span className="material-symbols-outlined mr-2 text-2xl group-hover:rotate-12 transition-transform">
                    play_circle
                  </span>
                  <span className="font-bold">Watch Video Introduction</span>
                </a>
              </div>

              <div className="mt-12 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-7 shadow-md transform transition-all hover:shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
                  <span className="material-symbols-outlined mr-3 text-indigo-500 text-2xl">
                    quiz
                  </span>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 text-2xl">
                    Practice Question
                  </span>
                </h3>

                <p className="mb-5 text-gray-700 text-lg font-medium">
                  Explain how artificial intelligence can assist in healthcare
                  diagnostics:
                </p>

                <div className="bg-white/90 rounded-xl p-5 mb-6 shadow-md">
                  <textarea
                    className="w-full min-h-[150px] p-4 rounded-xl border-2 border-indigo-100 focus:border-indigo-300 focus:ring-4 focus:ring-indigo-200 outline-none resize-y text-gray-700 transition-all text-lg"
                    placeholder="Type your answer here..."
                  ></textarea>

                  <div className="flex justify-end mt-3 space-x-3">
                    <button
                      className="p-2.5 text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all duration-300 flex items-center group"
                      onClick={(e) => {
                        const codeEditorEl = document.getElementById(
                          "codeEditorContainer"
                        );
                        if (codeEditorEl)
                          codeEditorEl.classList.toggle("hidden");
                      }}
                    >
                      <span className="material-symbols-outlined text-lg mr-2 group-hover:rotate-12 transition-transform">
                        code
                      </span>
                      <span className="font-bold">Open Code editor</span>
                    </button>

                    <button
                      className="p-2.5 text-green-600 hover:bg-green-50 rounded-xl transition-all duration-300 flex items-center group"
                      onClick={(e) => {
                        const mathEditorEl = document.getElementById(
                          "mathEditorContainer"
                        );
                        if (mathEditorEl)
                          mathEditorEl.classList.toggle("hidden");
                      }}
                    >
                      <span className="material-symbols-outlined text-lg mr-2 group-hover:rotate-12 transition-transform">
                        functions
                      </span>
                      <span className="font-bold">Open Math editor</span>
                    </button>
                  </div>
                </div>

                <div
                  id="codeEditorContainer"
                  className="mb-6 transition-all duration-500 rounded-xl overflow-hidden hidden transform origin-top shadow-xl"
                >
                  <div className="bg-gray-800 text-white px-5 py-3 flex justify-between items-center">
                    <div className="flex items-center">
                      <span className="material-symbols-outlined mr-2 text-blue-400 text-xl">
                        terminal
                      </span>
                      <span className="font-bold text-lg">Code Editor</span>
                    </div>
                    <div className="flex space-x-3">
                      <div className="flex space-x-1.5">
                        <span className="w-4 h-4 rounded-full bg-red-400 inline-block hover:bg-red-500 transition-colors cursor-pointer"></span>
                        <span className="w-4 h-4 rounded-full bg-yellow-400 inline-block hover:bg-yellow-500 transition-colors cursor-pointer"></span>
                        <span className="w-4 h-4 rounded-full bg-green-400 inline-block hover:bg-green-500 transition-colors cursor-pointer"></span>
                      </div>
                      <button
                        className="text-gray-400 hover:text-white transition-colors"
                        onClick={(e) => {
                          const codeEditorEl = document.getElementById(
                            "codeEditorContainer"
                          );
                          if (codeEditorEl)
                            codeEditorEl.classList.add("hidden");
                        }}
                      >
                        <span className="material-symbols-outlined">close</span>
                      </button>
                    </div>
                  </div>

                  <div className="bg-gray-900 p-5 overflow-auto">
                    <div className="flex mb-4">
                      <div className="w-10 text-right pr-3 text-gray-500 select-none border-r border-gray-700 mr-3">
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                        <div>5</div>
                        <div>6</div>
                        <div>7</div>
                        <div>8</div>
                        <div>9</div>
                        <div>10</div>
                      </div>
                      <div className="flex-1">
                        <pre className="text-white font-mono text-md">
                          <code>
                            <span className="text-blue-400">import</span>{" "}
                            <span className="text-green-300">numpy</span>{" "}
                            <span className="text-blue-400">as</span>{" "}
                            <span className="text-green-300">np</span>
                            <br />
                            <span className="text-blue-400">import</span>{" "}
                            <span className="text-green-300">pandas</span>{" "}
                            <span className="text-blue-400">as</span>{" "}
                            <span className="text-green-300">pd</span>
                            <br />
                            <span className="text-blue-400">import</span>{" "}
                            <span className="text-green-300">
                              matplotlib.pyplot
                            </span>{" "}
                            <span className="text-blue-400">as</span>{" "}
                            <span className="text-green-300">plt</span>
                            <br />
                            <br />
                            <span className="text-blue-400">def</span>{" "}
                            <span className="text-yellow-300">
                              train_healthcare_model
                            </span>
                            (<span className="text-orange-300">data</span>,{" "}
                            <span className="text-orange-300">labels</span>):
                            <br />
                            <span className="text-gray-500 pl-4">
                              # Create a simple neural network for medical image
                              classification
                            </span>
                            <br />
                            <span className="pl-4">
                              <span className="text-purple-400">model</span> ={" "}
                              <span className="text-yellow-300">
                                NeuralNetwork
                              </span>
                              ()
                            </span>
                            <br />
                            <span className="pl-4">
                              <span className="text-purple-400">model</span>.
                              <span className="text-yellow-300">train</span>(
                              <span className="text-orange-300">data</span>,{" "}
                              <span className="text-orange-300">labels</span>,{" "}
                              <span className="text-orange-300">epochs</span>=
                              <span className="text-purple-300">100</span>)
                            </span>
                            <br />
                            <span className="pl-4">
                              <span className="text-blue-400">return</span>{" "}
                              <span className="text-purple-400">model</span>
                            </span>
                            <br />
                          </code>
                        </pre>
                      </div>
                    </div>

                    <div className="flex justify-between mt-3">
                      <div className="flex space-x-3">
                        <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-xl text-white text-sm flex items-center transition-all duration-300 hover:shadow-lg font-bold">
                          <span className="material-symbols-outlined text-sm mr-2">
                            play_arrow
                          </span>
                          Run
                        </button>
                        <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-xl text-white text-sm flex items-center transition-all duration-300 hover:shadow-lg font-bold">
                          <span className="material-symbols-outlined text-sm mr-2">
                            save
                          </span>
                          Save
                        </button>
                      </div>
                      <div className="text-sm text-gray-400 font-mono">
                        Python 3.9.5
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-800 text-white p-4 border-t border-gray-700">
                    <div className="text-sm text-gray-400 mb-2 font-bold">
                      Console Output:
                    </div>
                    <div className="bg-black/30 p-3 rounded font-mono text-sm text-green-400 h-20 overflow-auto">
                      <div>{">"} Training model on m213, accuracy=0.89</div>
                      <div>{">"} Epoch 100/100: loss=0.edical data...</div>
                      <div>{">"} Epoch 1/100: loss=0.723, accuracy=0.65</div>
                      <div>{">"} Epoch 50/100: loss=0.089, accuracy=0.97</div>
                      <div>
                        {">"} Model trained successfully. Ready for diagnostics.
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-700 p-3 flex justify-end">
                    <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-xl text-white text-sm flex items-center transition-all duration-300 hover:shadow-lg font-bold transform hover:translate-y-[-2px]">
                      <span className="material-symbols-outlined text-sm mr-2">
                        add_circle
                      </span>
                      Insert Code to Answer
                    </button>
                  </div>
                </div>

                <div
                  id="mathEditorContainer"
                  className="mb-6 transition-all duration-500 rounded-xl overflow-hidden hidden transform origin-top shadow-xl"
                >
                  <div className="bg-gray-800 text-white px-5 py-3 flex justify-between items-center">
                    <div className="flex items-center">
                      <span className="material-symbols-outlined mr-2 text-green-400 text-xl">
                        functions
                      </span>
                      <span className="font-bold text-lg">
                        Math Formula Editor
                      </span>
                    </div>
                    <div className="flex space-x-3">
                      <div className="flex space-x-1.5">
                        <span className="w-4 h-4 rounded-full bg-red-400 inline-block hover:bg-red-500 transition-colors cursor-pointer"></span>
                        <span className="w-4 h-4 rounded-full bg-yellow-400 inline-block hover:bg-yellow-500 transition-colors cursor-pointer"></span>
                        <span className="w-4 h-4 rounded-full bg-green-400 inline-block hover:bg-green-500 transition-colors cursor-pointer"></span>
                      </div>
                      <button
                        className="text-gray-400 hover:text-white transition-colors"
                        onClick={(e) => {
                          const mathEditorEl = document.getElementById(
                            "mathEditorContainer"
                          );
                          if (mathEditorEl)
                            mathEditorEl.classList.add("hidden");
                        }}
                      >
                        <span className="material-symbols-outlined">close</span>
                      </button>
                    </div>
                  </div>

                  <div className="bg-gray-900 p-5">
                    <div className="flex flex-wrap gap-3 mb-5">
                      <button className="h-10 w-10 bg-gray-700 hover:bg-gray-600 rounded-lg text-white flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:scale-110 text-lg">
                        Σ
                      </button>
                      <button className="h-10 w-10 bg-gray-700 hover:bg-gray-600 rounded-lg text-white flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:scale-110 text-lg">
                        ∫
                      </button>
                      <button className="h-10 w-10 bg-gray-700 hover:bg-gray-600 rounded-lg text-white flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:scale-110 text-lg">
                        ∂
                      </button>
                      <button className="h-10 w-10 bg-gray-700 hover:bg-gray-600 rounded-lg text-white flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:scale-110 text-lg">
                        √
                      </button>
                      <button className="h-10 w-10 bg-gray-700 hover:bg-gray-600 rounded-lg text-white flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:scale-110 text-lg">
                        π
                      </button>
                      <button className="h-10 w-10 bg-gray-700 hover:bg-gray-600 rounded-lg text-white flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:scale-110 text-lg">
                        θ
                      </button>
                      <button className="h-10 w-10 bg-gray-700 hover:bg-gray-600 rounded-lg text-white flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:scale-110 text-lg">
                        ∞
                      </button>
                      <button className="h-10 w-10 bg-gray-700 hover:bg-gray-600 rounded-lg text-white flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:scale-110 text-lg">
                        ≈
                      </button>
                      <button className="h-10 w-10 bg-gray-700 hover:bg-gray-600 rounded-lg text-white flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:scale-110 text-lg">
                        ≠
                      </button>
                      <button className="h-10 w-10 bg-gray-700 hover:bg-gray-600 rounded-lg text-white flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:scale-110 text-lg">
                        ≤
                      </button>
                      <button className="h-10 w-10 bg-gray-700 hover:bg-gray-600 rounded-lg text-white flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:scale-110 text-lg">
                        ≥
                      </button>
                      <button className="h-10 px-3 bg-gray-700 hover:bg-gray-600 rounded-lg text-white flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:scale-110 text-sm">
                        x²
                      </button>
                      <button className="h-10 px-3 bg-gray-700 hover:bg-gray-600 rounded-lg text-white flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:scale-110 text-sm">
                        x₁
                      </button>
                      <button className="h-10 px-3 bg-gray-700 hover:bg-gray-600 rounded-lg text-white flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:scale-110 text-sm">
                        frac
                      </button>
                    </div>

                    <textarea
                      className="w-full bg-gray-800 text-white font-mono p-4 rounded-xl border-2 border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-500 h-28 outline-none resize-y text-md"
                      placeholder="Enter LaTeX formula (e.g., \frac{d}{dx}f(x) = \lim_{h \to 0}\frac{f(x+h)-f(x)}{h})"
                    ></textarea>

                    <div className="bg-gray-800 p-5 my-4 rounded-xl border-2 border-gray-700 flex items-center justify-center min-h-[120px]">
                      <div className="text-white text-center font-serif">
                        <p className="text-xl"></p>
                        <p className="text-sm mt-3 text-gray-400">
                          Bayes' Theorem - Formula Preview
                        </p>
                      </div>
                    </div>

                    <div className="flex space-x-3 mt-4">
                      <div className="flex-1">
                        <div className="text-sm text-gray-400 mb-2 font-bold">
                          Common AI Formulas:
                        </div>
                        <select className="w-full bg-gray-800 text-white p-3 rounded-xl border-2 border-gray-700 focus:border-green-400 focus:outline-none text-md">
                          <option>Select a formula template</option>
                          <option>Sigmoid Function: σ(x) = 1/(1+e^(-x))</option>
                          <option>
                            Cost Function: J(θ) = -1/m ∑
                            [y⁽ⁱ⁾log(h_θ(x⁽ⁱ⁾))+(1-y⁽ⁱ⁾)log(1-h_θ(x⁽ⁱ⁾))]
                          </option>
                          <option>
                            Softmax Function: σ(z)_j = e^(z_j)/∑(e^(z_k))
                          </option>
                          <option>
                            Gradient Descent: θ_j := θ_j - α ∂/∂θ_j J(θ)
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-700 p-3 flex justify-end">
                    <button className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-xl text-white text-sm flex items-center transition-all duration-300 hover:shadow-lg font-bold transform hover:translate-y-[-2px]">
                      <span className="material-symbols-outlined text-sm mr-2">
                        add_circle
                      </span>
                      Insert Formula to Answer
                    </button>
                  </div>
                </div>

                <button className="w-full py-3.5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl font-bold hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg text-lg flex items-center justify-center">
                  <span className="material-symbols-outlined mr-2 text-xl">
                    send
                  </span>
                  Submit Answer
                </button>
              </div>
            </div>

            <button className="absolute -right-5 top-1/2 transform -translate-y-1/2 w-14 h-14 rounded-full bg-white/90 shadow-lg flex items-center justify-center text-blue-500 hover:bg-blue-50 transition-all duration-300 hover:scale-110 z-10 group">
              <span className="material-symbols-outlined text-2xl group-hover:rotate-12 transition-transform">
                arrow_forward
              </span>
            </button>
          </div>

          <div className="flex justify-between items-center mt-10 pt-4 border-t border-gray-200">
            <button className="py-3 px-5 bg-white hover:bg-gray-50 text-gray-700 rounded-xl shadow-sm border border-gray-200 flex items-center transition-all duration-300 hover:translate-x-[-2px] group font-medium">
              <span className="material-symbols-outlined mr-2 group-hover:rotate-[-12deg] transition-transform">
                arrow_back
              </span>
              Previous: Course Overview
            </button>

            <div className="flex space-x-2">
              <span className="w-3 h-3 rounded-full bg-blue-500 animate-pulse"></span>
              <span className="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 cursor-pointer transition-colors"></span>
              <span className="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 cursor-pointer transition-colors"></span>
              <span className="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 cursor-pointer transition-colors"></span>
              <span className="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 cursor-pointer transition-colors"></span>
            </div>

            <button className="py-3 px-5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl shadow-lg flex items-center transition-all duration-300 hover:translate-x-[2px] hover:shadow-xl group font-medium">
              Next: Machine Learning Basics
              <span className="material-symbols-outlined ml-2 group-hover:rotate-12 transition-transform">
                arrow_forward
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

import React from "react";
import "../styles/styles.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const App = () => {
  return (
    <div id="webcrumbs">
      <div className="w-full min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-100 p-8 font-sans">
        <Header></Header>
        <main className="relative z-10 h-full">
          <div className="mb-6">
            <div className="flex items-center space-x-4 mb-4"></div>
          </div>

          <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg overflow-hidden">
            <div className="border-b border-gray-100">
              <nav className="flex">
                <button className="px-6 py-5 text-blue-600 font-medium border-b-2 border-blue-500 hover:bg-blue-50 transition-colors flex items-center gap-2">
                  <span className="material-symbols-outlined">forum</span>
                  Forum
                </button>
                <button className="px-6 py-5 text-gray-600 hover:text-blue-600 font-medium border-b-2 border-transparent hover:border-blue-500 hover:bg-blue-50 transition-colors flex items-center gap-2">
                  <span className="material-symbols-outlined">balance</span>
                  Debate Arena
                </button>
                <button className="px-6 py-5 text-gray-600 hover:text-blue-600 font-medium border-b-2 border-transparent hover:border-blue-500 hover:bg-blue-50 transition-colors flex items-center gap-2">
                  <span className="material-symbols-outlined">vault</span>
                  Legacy Vault
                </button>
                <button className="px-6 py-5 text-gray-600 hover:text-blue-600 font-medium border-b-2 border-transparent hover:border-blue-500 hover:bg-blue-50 transition-colors flex items-center gap-2">
                  <span className="material-symbols-outlined">leaderboard</span>
                  Leaderboard
                </button>
              </nav>
            </div>

            <div className="flex flex-col gap-4">
              <div className="p-8">
                <div className="flex justify-between items-center mb-8">
                  <div className="flex items-center">
                    <h2 className="text-2xl font-bold text-gray-800">
                      Forum Discussions
                    </h2>
                    <div className="ml-6 inline-flex rounded-md shadow-sm">
                      <button className="py-2 px-4 bg-white text-gray-600 border border-gray-300 rounded-l-md hover:bg-gray-50 transition-colors flex items-center gap-1.5 text-sm">
                        <span className="material-symbols-outlined text-sm">
                          rocket_launch
                        </span>
                        Latest
                      </button>
                      <button className="py-2 px-4 bg-indigo-500 text-white border border-indigo-500 hover:bg-indigo-600 transition-colors flex items-center gap-1.5 text-sm">
                        <span className="material-symbols-outlined text-sm">
                          trending_up
                        </span>
                        Trending
                      </button>
                      <button className="py-2 px-4 bg-white text-gray-600 border border-gray-300 rounded-r-md hover:bg-gray-50 transition-colors flex items-center gap-1.5 text-sm">
                        <span className="material-symbols-outlined text-sm">
                          new_releases
                        </span>
                        New
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Search discussions..."
                        className="py-2.5 pl-10 pr-4 border border-gray-300 rounded-lg w-72 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all"
                      />
                      <span className="material-symbols-outlined absolute left-3 top-3 text-gray-400">
                        search
                      </span>
                    </div>
                    <button className="ml-4 px-5 py-2.5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2 transform hover:translate-y-[-2px]">
                      <span className="material-symbols-outlined">add</span>
                      New Topic
                    </button>
                  </div>
                </div>

                <div className="flex gap-5 mb-8 overflow-x-auto py-3 px-2">
                  <button className="whitespace-nowrap px-5 py-2 bg-indigo-100 text-indigo-700 rounded-full hover:bg-indigo-200 transition-colors flex items-center gap-1.5 text-sm font-medium shadow-sm hover:shadow">
                    <span className="material-symbols-outlined text-sm">
                      tag
                    </span>
                    All Topics
                  </button>
                  <button className="whitespace-nowrap px-5 py-2 bg-white text-gray-600 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors flex items-center gap-1.5 text-sm font-medium shadow-sm hover:shadow">
                    <span className="material-symbols-outlined text-sm">
                      school
                    </span>
                    Neural Odyssey
                  </button>
                  <button className="whitespace-nowrap px-5 py-2 bg-white text-gray-600 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors flex items-center gap-1.5 text-sm font-medium shadow-sm hover:shadow">
                    <span className="material-symbols-outlined text-sm">
                      science
                    </span>
                    AI Lab
                  </button>
                  <button className="whitespace-nowrap px-5 py-2 bg-white text-gray-600 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors flex items-center gap-1.5 text-sm font-medium shadow-sm hover:shadow">
                    <span className="material-symbols-outlined text-sm">
                      military_tech
                    </span>
                    Challenges
                  </button>
                  <button className="whitespace-nowrap px-5 py-2 bg-white text-gray-600 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors flex items-center gap-1.5 text-sm font-medium shadow-sm hover:shadow">
                    <span className="material-symbols-outlined text-sm">
                      tips_and_updates
                    </span>
                    Announcements
                  </button>
                  <button className="whitespace-nowrap px-5 py-2 bg-white text-gray-600 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors flex items-center gap-1.5 text-sm font-medium shadow-sm hover:shadow">
                    <span className="material-symbols-outlined text-sm">
                      help
                    </span>
                    Help & Support
                  </button>
                  <button className="whitespace-nowrap px-5 py-2 bg-white text-gray-600 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors flex items-center gap-1.5 text-sm font-medium shadow-sm hover:shadow">
                    <span className="material-symbols-outlined text-sm">
                      lightbulb
                    </span>
                    Ideas
                  </button>
                </div>

                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100 hover:shadow-lg transition-all duration-300 transform hover:scale-[1.01] cursor-pointer group">
                    <div className="flex items-start gap-5">
                      <div className="bg-gradient-to-br from-blue-500 to-indigo-600 h-14 w-14 rounded-full flex items-center justify-center text-white shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                        <span className="material-symbols-outlined text-2xl">
                          psychology
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <h3 className="font-semibold text-xl text-gray-800 group-hover:text-indigo-700 transition-colors">
                            Are Transformer architectures overrated for certain
                            NLP tasks?
                          </h3>
                          <div className="flex items-center gap-1 text-indigo-600 font-medium bg-indigo-100 px-3 py-1 rounded-full text-sm">
                            <span className="material-symbols-outlined text-[18px]">
                              local_fire_department
                            </span>
                            Hot
                          </div>
                        </div>
                        <p className="text-gray-600 mt-2 line-clamp-2 text-base">
                          I've been working with different model architectures
                          for sentiment analysis and found that in some cases,
                          simpler RNN models perform better than Transformers.
                          Wanted to get the community's thoughts on when
                          Transformers might be overpowered for the job...
                        </p>
                        <div className="flex justify-between items-center mt-4">
                          <div className="flex items-center gap-6">
                            <div className="flex -space-x-2">
                              <img
                                src="https://randomuser.me/api/portraits/men/32.jpg"
                                className="w-8 h-8 rounded-full border-2 border-white"
                                alt="User"
                              />
                              <img
                                src="https://randomuser.me/api/portraits/women/44.jpg"
                                className="w-8 h-8 rounded-full border-2 border-white"
                                alt="User"
                              />
                              <img
                                src="https://randomuser.me/api/portraits/men/86.jpg"
                                className="w-8 h-8 rounded-full border-2 border-white"
                                alt="User"
                              />
                              <div className="w-8 h-8 rounded-full border-2 border-white bg-indigo-100 flex items-center justify-center text-xs font-medium text-indigo-600">
                                +8
                              </div>
                            </div>
                            <div className="flex items-center gap-1.5 text-sm text-gray-500">
                              <span className="material-symbols-outlined text-blue-500 text-[18px]">
                                chat
                              </span>
                              47 replies
                            </div>
                            <div className="flex items-center gap-1.5 text-sm text-gray-500">
                              <span className="material-symbols-outlined text-indigo-500 text-[18px]">
                                visibility
                              </span>
                              389 views
                            </div>
                          </div>
                          <div className="flex items-center gap-3 text-sm">
                            <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-700">
                              Neural Odyssey
                            </span>
                            <span className="px-3 py-1 rounded-full bg-green-100 text-green-700">
                              Debate
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:scale-[1.01] cursor-pointer group">
                    <div className="flex items-start gap-5">
                      <div className="bg-gradient-to-br from-green-500 to-emerald-600 h-14 w-14 rounded-full flex items-center justify-center text-white shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                        <span className="material-symbols-outlined text-2xl">
                          science
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <h3 className="font-semibold text-xl text-gray-800 group-hover:text-green-700 transition-colors">
                            Step-by-step approach to optimizing a GAN for image
                            generation
                          </h3>
                          <div className="flex items-center gap-1 text-green-600 font-medium bg-green-100 px-3 py-1 rounded-full text-sm">
                            <span className="material-symbols-outlined text-[18px]">
                              verified
                            </span>
                            Solved
                          </div>
                        </div>
                        <p className="text-gray-600 mt-2 line-clamp-2 text-base">
                          Hey everyone, I've been struggling with mode collapse
                          in my GAN implementation for the AI Lab's Creative
                          Generation module. I'll share what I've tried and
                          would appreciate any guidance on how to make my
                          discriminator training more stable...
                        </p>
                        <div className="flex justify-between items-center mt-4">
                          <div className="flex items-center gap-6">
                            <div className="flex -space-x-2">
                              <img
                                src="https://randomuser.me/api/portraits/women/23.jpg"
                                className="w-8 h-8 rounded-full border-2 border-white"
                                alt="User"
                              />
                              <img
                                src="https://randomuser.me/api/portraits/men/53.jpg"
                                className="w-8 h-8 rounded-full border-2 border-white"
                                alt="User"
                              />
                              <img
                                src="https://randomuser.me/api/portraits/women/72.jpg"
                                className="w-8 h-8 rounded-full border-2 border-white"
                                alt="User"
                              />
                              <div className="w-8 h-8 rounded-full border-2 border-white bg-green-100 flex items-center justify-center text-xs font-medium text-green-600">
                                +5
                              </div>
                            </div>
                            <div className="flex items-center gap-1.5 text-sm text-gray-500">
                              <span className="material-symbols-outlined text-blue-500 text-[18px]">
                                chat
                              </span>
                              22 replies
                            </div>
                            <div className="flex items-center gap-1.5 text-sm text-gray-500">
                              <span className="material-symbols-outlined text-indigo-500 text-[18px]">
                                visibility
                              </span>
                              206 views
                            </div>
                          </div>
                          <div className="flex items-center gap-3 text-sm">
                            <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700">
                              AI Lab
                            </span>
                            <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-700">
                              Question
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:scale-[1.01] cursor-pointer group">
                    <div className="flex items-start gap-5">
                      <div className="bg-gradient-to-br from-violet-500 to-purple-600 h-14 w-14 rounded-full flex items-center justify-center text-white shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                        <span className="material-symbols-outlined text-2xl">
                          military_tech
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <h3 className="font-semibold text-xl text-gray-800 group-hover:text-purple-700 transition-colors">
                            Sharing my approach to solving the Algo Crypt
                            Challenge Level 5
                          </h3>
                        </div>
                        <p className="text-gray-600 mt-2 line-clamp-2 text-base">
                          After a week of struggling, I finally cracked Level 5
                          of the Algo Crypt Challenge! The trick was to use
                          dynamic programming with memoization rather than the
                          greedy approach I was trying initially. Here's my
                          detailed walkthrough with complexity analysis...
                        </p>
                        <div className="flex justify-between items-center mt-4">
                          <div className="flex items-center gap-6">
                            <div className="flex -space-x-2">
                              <img
                                src="https://randomuser.me/api/portraits/men/45.jpg"
                                className="w-8 h-8 rounded-full border-2 border-white"
                                alt="User"
                              />
                              <img
                                src="https://randomuser.me/api/portraits/women/65.jpg"
                                className="w-8 h-8 rounded-full border-2 border-white"
                                alt="User"
                              />
                              <img
                                src="https://randomuser.me/api/portraits/men/19.jpg"
                                className="w-8 h-8 rounded-full border-2 border-white"
                                alt="User"
                              />
                              <div className="w-8 h-8 rounded-full border-2 border-white bg-purple-100 flex items-center justify-center text-xs font-medium text-purple-600">
                                +12
                              </div>
                            </div>
                            <div className="flex items-center gap-1.5 text-sm text-gray-500">
                              <span className="material-symbols-outlined text-blue-500 text-[18px]">
                                chat
                              </span>
                              35 replies
                            </div>
                            <div className="flex items-center gap-1.5 text-sm text-gray-500">
                              <span className="material-symbols-outlined text-indigo-500 text-[18px]">
                                visibility
                              </span>
                              278 views
                            </div>
                          </div>
                          <div className="flex items-center gap-3 text-sm">
                            <span className="px-3 py-1 rounded-full bg-violet-100 text-violet-700">
                              Challenges
                            </span>
                            <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-700">
                              Tutorial
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl p-6 border border-amber-100 hover:shadow-lg transition-all duration-300 transform hover:scale-[1.01] cursor-pointer group">
                    <div className="flex items-start gap-5">
                      <div className="bg-gradient-to-br from-amber-500 to-orange-600 h-14 w-14 rounded-full flex items-center justify-center text-white shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                        <span className="material-symbols-outlined text-2xl">
                          tips_and_updates
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <h3 className="font-semibold text-xl text-gray-800 group-hover:text-amber-700 transition-colors">
                            [ANNOUNCEMENT] Debate Arena: New weekly topic on
                            foundation models
                          </h3>
                          <div className="flex items-center gap-1 text-amber-600 font-medium bg-amber-100 px-3 py-1 rounded-full text-sm">
                            <span className="material-symbols-outlined text-[18px]">
                              campaign
                            </span>
                            Official
                          </div>
                        </div>
                        <p className="text-gray-600 mt-2 line-clamp-2 text-base">
                          📢 This week's Debate Arena focuses on "Are foundation
                          models the future of AI or a temporary trend?" Join us
                          for a structured debate starting tomorrow at 18:00
                          UTC. NeuralSpirit will analyze the arguments and
                          provide a synthesis at the end...
                        </p>
                        <div className="flex justify-between items-center mt-4">
                          <div className="flex items-center gap-6">
                            <div className="flex -space-x-2">
                              <div className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-xs font-medium text-white">
                                HN
                              </div>
                            </div>
                            <div className="flex items-center gap-1.5 text-sm text-gray-500">
                              <span className="material-symbols-outlined text-blue-500 text-[18px]">
                                chat
                              </span>
                              18 replies
                            </div>
                            <div className="flex items-center gap-1.5 text-sm text-gray-500">
                              <span className="material-symbols-outlined text-indigo-500 text-[18px]">
                                visibility
                              </span>
                              412 views
                            </div>
                          </div>
                          <div className="flex items-center gap-3 text-sm">
                            <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-700">
                              Announcement
                            </span>
                            <span className="px-3 py-1 rounded-full bg-green-100 text-green-700">
                              Debate Arena
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <div className="px-3 py-1 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 rounded-full text-sm font-medium animate-pulse shadow-sm">
                      427 members online now
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        ;
      </div>
      <Footer></Footer>
    </div>
  );
};

export default App;

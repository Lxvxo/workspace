import React from "react";
import "../styles/styles.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import black_robot from "../assets/home/black_robot.png";
import asleep_robot from "../assets/home/asleep_robot.png";
import community_robot from "../assets/home/community_robot.png";
import { Link } from "react-router-dom";

export const App = () => {
  return (
    <body>
       <Header></Header>
       <div className='w-full min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-100 p-4 sm:p-8 font-sans'>
  <section className='max-w-7xl mx-auto space-y-6'>
    {/* Hero Section */}
    <div className='flex flex-col md:flex-row w-full gap-6 md:gap-10 p-4 md:p-8 h-auto md:h-[600px] overflow-hidden'>
      <div className='w-full md:w-1/2 relative group min-h-[400px] md:min-h-0'>
        <div className='absolute w-full h-full bg-gradient-to-bl from-indigo-400/30 to-blue-500/40 rounded-[30%_70%_70%_30%/50%_40%_60%_50%] animate-[morphRight_18s_ease-in-out_infinite_alternate] backdrop-blur-sm shadow-xl hover:shadow-2xl hover:from-indigo-400/50 hover:to-blue-500/60 transition-all duration-700 group-hover:scale-[1.03] group-hover:-rotate-1'></div>
        <div className='absolute w-[85%] h-[85%] top-[7.5%] left-[7.5%] bg-white/50 backdrop-blur-md rounded-[40%_60%_50%_50%/40%_50%_50%_60%] animate-[morphRightInner_22s_ease-in-out_infinite_alternate] p-4 md:p-8 flex items-center justify-center transform transition-all duration-700 group-hover:scale-105 group-hover:rotate-1 overflow-hidden'>
          <div className='relative group overflow-hidden'>
            <img
              src={asleep_robot}
              alt='Neural Network Visualization'
              className='object-cover w-full h-full rounded-[30%_60%_40%_50%/40%_40%_60%_50%] shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:rounded-[40%_50%_50%_40%/50%_40%_50%_40%] hover:shadow-xl filter saturate-[1.2] contrast-[1.1]'
            />
            <div className='absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-indigo-600 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-md whitespace-nowrap text-xs md:text-sm font-medium'>
              Explore AI Technology
            </div>
          </div>
          <div className='relative inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 mix-blend-overlay rounded-[40%_60%_50%_50%/40%_50%_50%_60%] group-hover:opacity-80 transition-opacity duration-500 z-50'></div>

          <div className='absolute -bottom-5 -left-5 w-24 md:w-36 h-24 md:h-36 bg-blue-400/30 rounded-full blur-3xl animate-pulse'></div>
          <div className='absolute -top-10 -right-10 w-20 md:w-32 h-20 md:h-32 bg-purple-400/30 rounded-full blur-2xl animate-pulse delay-1000'></div>
        </div>

      </div>

      <div className='w-full md:w-1/2 relative group min-h-[400px] md:min-h-0 mt-12 md:mt-0'>
        <div className='absolute w-full h-full bg-gradient-to-br from-purple-500/40 to-blue-400/30 rounded-[70%_30%_70%_30%/30%_60%_40%_70%] animate-[morphLeft_15s_ease-in-out_infinite_alternate] backdrop-blur-sm shadow-xl hover:shadow-2xl hover:from-purple-500/60 hover:to-blue-400/50 transition-all duration-700 group-hover:scale-[1.03] group-hover:rotate-1'></div>
        <div className='absolute w-[90%] h-[80%] top-[10%] left-[5%] bg-white/60 backdrop-blur-md rounded-[60%_40%_60%_40%/30%_70%_30%_70%] animate-[morphLeftInner_20s_ease-in-out_infinite_alternate] p-4 md:p-8 flex flex-col justify-center transform transition-all duration-700 group-hover:scale-105 group-hover:-rotate-1'>
          <h2 className='text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-700 via-indigo-600 to-blue-600 tracking-tight leading-tight'>
            Discover the world of AI
          </h2>
          <div className='flex flex-col sm:flex-row gap-4 mt-4 md:mt-6 justify-center'>
            <Link
              to='/neural-odyssey'
              className='px-4 py-2.5 md:px-6 md:py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center group text-sm md:text-base'
            >
              <span className='material-symbols-outlined mr-2 group-hover:animate-bounce text-base md:text-lg'>
                rocket_launch
              </span>
              Start the adventure
            </Link>
            <button className='px-4 py-2.5 md:px-8 md:py-3 bg-white/80 backdrop-blur-sm border border-purple-200 text-gray-700 font-semibold hover:bg-white transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-purple-200/50 flex items-center justify-center gap-2 text-sm md:text-base mt-2 sm:mt-0'>
              <span className='material-symbols-outlined text-base md:text-lg'>explore</span>
              <span>Tour</span>
            </button>
          </div>

          <div className='absolute -bottom-8 -right-8 w-24 md:w-36 h-24 md:h-36 bg-white rounded-full blur-3xl transition-all duration-300 ease-in-out hover:scale-110 hover:opacity-80 hover:shadow-lg'></div>
          <div className='absolute -top-4 -left-4 w-16 md:w-24 h-16 md:h-24 bg-purple-400/30 rounded-full blur-2xl animate-pulse delay-700'></div>
        </div>
      </div>
    </div>

    <div className='flex flex-col md:flex-row w-full gap-6 md:gap-10 p-4 md:p-8 h-auto md:h-[600px] overflow-hidden'>
      <div className='w-full md:w-1/2 relative group min-h-[400px] md:min-h-0'>
        <div className='absolute w-full h-full bg-gradient-to-br from-blue-400/30 to-purple-500/40 rounded-[70%_30%_70%_30%/30%_60%_40%_70%] animate-[morphLeft_15s_ease-in-out_infinite_alternate] backdrop-blur-sm shadow-xl hover:shadow-2xl hover:from-blue-400/50 hover:to-purple-500/60 transition-all duration-700 group-hover:scale-[1.03] group-hover:rotate-1'></div>
        <div className='absolute w-[90%] h-[80%] top-[10%] left-[5%] bg-white/60 backdrop-blur-md rounded-[60%_40%_60%_40%/30%_70%_30%_70%] animate-[morphLeftInner_20s_ease-in-out_infinite_alternate] p-4 md:p-8 flex flex-col justify-center transform transition-all duration-700 group-hover:scale-105 group-hover:-rotate-1'>
          <h2 className='text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 tracking-tight leading-tight'>
            Experiment with many tools
          </h2>
          <div className='flex flex-col sm:flex-row gap-4 mt-4 md:mt-6 justify-center'>
            <button className='px-4 py-2.5 md:px-8 md:py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold hover:from-blue-700 hover:to-indigo-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/40 flex items-center justify-center gap-2 group/btn text-sm md:text-base'>
              <span>Dive into Challenges</span>
              <span className='material-symbols-outlined transform group-hover/btn:translate-x-1 transition-transform text-base md:text-lg'>
                arrow_forward
              </span>
            </button>
            <button className='px-4 py-2.5 md:px-8 md:py-3 bg-white/80 backdrop-blur-sm border border-blue-200 text-gray-700 font-semibold hover:bg-white transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-indigo-200/50 flex items-center justify-center gap-2 text-sm md:text-base mt-2 sm:mt-0'>
              Try Neural Spirit
              <span></span>
            </button>
          </div>

          <div className='absolute -bottom-8 -right-8 w-24 md:w-36 h-24 md:h-36 bg-white rounded-full blur-3xl transition-all duration-300 ease-in-out hover:scale-110 hover:opacity-80 hover:shadow-lg'></div>
          <div className='absolute -top-4 -left-4 w-16 md:w-24 h-16 md:h-24 bg-blue-400/30 rounded-full blur-2xl animate-pulse delay-700'></div>
        </div>
      
      </div>

      <div className='w-full md:w-1/2 relative group min-h-[400px] md:min-h-0 mt-12 md:mt-0'>
        <div className='absolute w-full h-full bg-gradient-to-bl from-indigo-400/30 to-blue-500/40 rounded-[30%_70%_70%_30%/50%_40%_60%_50%] animate-[morphRight_18s_ease-in-out_infinite_alternate] backdrop-blur-sm shadow-xl hover:shadow-2xl hover:from-indigo-400/50 hover:to-blue-500/60 transition-all duration-700 group-hover:scale-[1.03] group-hover:-rotate-1'></div>
        <div className='absolute w-[85%] h-[85%] top-[7.5%] left-[7.5%] bg-white/50 backdrop-blur-md rounded-[40%_60%_50%_50%/40%_50%_50%_60%] animate-[morphRightInner_22s_ease-in-out_infinite_alternate] p-4 md:p-8 flex items-center justify-center transform transition-all duration-700 group-hover:scale-105 group-hover:rotate-1 overflow-hidden'>
          <div className='relative group overflow-hidden'>
            <img
              src={black_robot}
              alt='Neural Network Visualization'
              className='object-cover w-full h-full rounded-[30%_60%_40%_50%/40%_40%_60%_50%] shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:rounded-[40%_50%_50%_40%/50%_40%_50%_40%] hover:shadow-xl filter saturate-[1.2] contrast-[1.1]'
            />
            <div className='absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-indigo-600 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-md whitespace-nowrap text-xs md:text-sm font-medium'>
              Try AI Lab soon
            </div>
          </div>
          <div className='relative inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 mix-blend-overlay rounded-[40%_60%_50%_50%/40%_50%_50%_60%] group-hover:opacity-80 transition-opacity duration-500 z-50'></div>

          <div className='absolute -bottom-5 -left-5 w-24 md:w-36 h-24 md:h-36 bg-blue-400/30 rounded-full blur-3xl animate-pulse'></div>
          <div className='absolute -top-10 -right-10 w-20 md:w-32 h-20 md:h-32 bg-purple-400/30 rounded-full blur-2xl animate-pulse delay-1000'></div>
        </div>
      </div>
    </div>

    <div className='relative w-full min-h-[600px] lg:h-[500px] mb-12 overflow-hidden group'>
      <div className='absolute w-full h-full bg-gradient-to-br from-indigo-400/20 to-purple-500/30 rounded-[20px] md:rounded-[40px] backdrop-blur-sm shadow-xl hover:shadow-2xl hover:from-indigo-400/40 hover:to-purple-500/50 transition-all duration-700 group-hover:scale-[1.01] overflow-hidden'>
        <div className='absolute inset-0 overflow-hidden'>
          <img
            src={community_robot}
            alt='AI Technology Showcase'
            className='object-cover w-full h-full opacity-90 scale-110 group-hover:scale-105 transition-transform duration-1000 ease-in-out'
          />
          <div className='absolute inset-0 bg-gradient-to-r from-indigo-900/70 to-purple-900/60 mix-blend-multiply'></div>
        </div>

        <div className='absolute inset-0 flex flex-col lg:flex-row lg:items-center justify-between px-6 md:px-10 lg:px-16 py-8 lg:py-0 z-10'>
          <div className='max-w-full lg:max-w-2xl'>
            <div className='mb-2 inline-flex px-3 py-1 rounded-full bg-indigo-400/30 backdrop-blur-md text-white text-xs font-medium tracking-wider uppercase'>
              Join the AI Revolution
            </div>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight leading-tight'>
              Become Part of Our{" "}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300'>
                Neural Community
              </span>
            </h2>
            <p className='text-base md:text-lg text-blue-100 mb-6 md:mb-8 max-w-xl'>
              Connect with like-minded AI enthusiasts, share your projects,
              learn from experts, and explore the fascinating world of neural
              networks together.
            </p>
            <div className='flex flex-col sm:flex-row gap-4'>
              <button className='px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-indigo-600/40 flex items-center justify-center gap-2 group/btn text-sm md:text-base'>
                <span>Join Community</span>
                <span className='material-symbols-outlined transform group-hover/btn:translate-x-1 transition-transform'>
                  arrow_forward
                </span>
              </button>
              <button className='px-6 py-3 md:px-8 md:py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold hover:bg-white/20 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-purple-600/20 flex items-center justify-center gap-2 text-sm md:text-base mt-2 sm:mt-0'>
                <span className='material-symbols-outlined'>play_circle</span>
                <span>Watch Demo</span>
              </button>
            </div>
          </div>

          <div className='bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 transform hover:scale-105 w-full sm:w-96 lg:w-80 mt-8 lg:mt-0'>
            <h3 className='text-xl font-bold text-white mb-4'>
              Community Highlights
            </h3>

            <div className='space-y-4'>
              <div className='flex items-center gap-3 p-3 bg-white/10 hover:bg-white/20 transition-all duration-300 cursor-pointer'>
                <div className='w-10 md:w-12 h-10 md:h-12 bg-indigo-500/30 flex items-center justify-center flex-shrink-0'>
                  <span className='material-symbols-outlined text-white'>
                    groups
                  </span>
                </div>
                <div>
                  <h4 className='text-white font-medium'>passionate Members</h4>
                  <p className='text-blue-100 text-xs md:text-sm'>Available everywhere</p>
                </div>
              </div>

              <div className='flex items-center gap-3 p-3 bg-white/10 hover:bg-white/20 transition-all duration-300 cursor-pointer'>
                <div className='w-10 md:w-12 h-10 md:h-12 bg-purple-500/30 flex items-center justify-center flex-shrink-0'>
                  <span className='material-symbols-outlined text-white'>
                    event
                  </span>
                </div>
                <div>
                  <h4 className='text-white font-medium'>Weekly Events</h4>
                  <p className='text-blue-100 text-xs md:text-sm'>
                    Workshops, hackathons & more
                  </p>
                </div>
              </div>

              <div className='flex items-center gap-3 p-3 bg-white/10 hover:bg-white/20 transition-all duration-300 cursor-pointer'>
                <div className='w-10 md:w-12 h-10 md:h-12 bg-blue-500/30 flex items-center justify-center flex-shrink-0'>
                  <span className='material-symbols-outlined text-white'>
                    school
                  </span>
                </div>
                <div>
                  <h4 className='text-white font-medium'>Learning Resources</h4>
                  <p className='text-blue-100 text-xs md:text-sm'>
                    Many tutorials and courses
                  </p>
                </div>
              </div>

              <a
                href='#'
                className='block text-center text-blue-200 hover:text-white text-sm font-medium mt-2 hover:underline transition-all duration-300'
              >
                View all community benefits →
              </a>
            </div>
          </div>
        </div>

        <div className='absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-indigo-900/30 to-transparent'></div>
        <div className='absolute -bottom-8 -left-8 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl animate-pulse'></div>
        <div className='absolute -top-12 -right-12 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl animate-pulse delay-1000'></div>
      </div>
    </div>

    <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-12'></div>

    <style jsx>{`
      @keyframes morphLeft {
        0% { border-radius: 70% 30% 70% 30% / 30% 60% 40% 70%; }
        25% { border-radius: 60% 40% 60% 40% / 40% 50% 50% 60%; }
        50% { border-radius: 50% 50% 50% 50% / 50% 40% 60% 50%; }
        75% { border-radius: 40% 60% 40% 60% / 60% 30% 70% 40%; }
        100% { border-radius: 30% 70% 30% 70% / 70% 20% 80% 30%; }
      }
      @keyframes morphLeftInner {
        0% { border-radius: 60% 40% 60% 40% / 30% 70% 30% 70%; }
        25% { border-radius: 50% 50% 50% 50% / 40% 60% 40% 60%; }
        50% { border-radius: 40% 60% 40% 60% / 50% 50% 50% 50%; }
        75% { border-radius: 30% 70% 30% 70% / 60% 40% 60% 40%; }
        100% { border-radius: 20% 80% 20% 80% / 70% 30% 70% 30%; }
      }
      @keyframes morphRight {
        0% { border-radius: 30% 70% 70% 30% / 50% 40% 60% 50%; }
        25% { border-radius: 40% 60% 60% 40% / 40% 50% 50% 60%; }
        50% { border-radius: 50% 50% 50% 50% / 30% 60% 40% 70%; }
        75% { border-radius: 60% 40% 40% 60% / 40% 70% 30% 60%; }
        100% { border-radius: 70% 30% 30% 70% / 60% 80% 20% 40%; }
      }
      @keyframes morphRightInner {
        0% { border-radius: 40% 60% 50% 50% / 40% 50% 50% 60%; }
        25% { border-radius: 50% 50% 40% 60% / 50% 40% 60% 50%; }
        50% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
        75% { border-radius: 70% 30% 20% 80% / 70% 20% 80% 30%; }
        100% { border-radius: 80% 20% 10% 90% / 80% 10% 90% 20%; }
      }
    `}</style>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div
              className="bg-white/70 backdrop-blur-md p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] group animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              <span className="material-symbols-outlined text-4xl bg-blue-100 text-blue-600 p-3 rounded-xl mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 group-hover:rotate-12">
                school
              </span>
              <h3 className="text-xl font-bold mb-2">
                Learning with roadmap
              </h3>
              <p className="text-gray-600 mb-4">
                Follows structured courses for all levels.
              </p>
              <Link
                to="/neural-odyssey"
                className="text-blue-600 font-medium flex items-center group-hover:underline"
              >
                Explorer routes
                <span className="material-symbols-outlined ml-1 transform group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
            </div>

            <div
              className="bg-white/70 backdrop-blur-md p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] group animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              <span className="material-symbols-outlined text-4xl bg-purple-100 text-purple-600 p-3 rounded-xl mb-4 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 group-hover:rotate-12">
                extension
              </span>
              <h3 className="text-xl font-bold mb-2">Experiment with challenges</h3>
              <p className="text-gray-600 mb-4">
                Try our different contextual challenges. A Dark room will be added for experts.
              </p>
              <a
                href="#"
                className="text-purple-600 font-medium flex items-center group-hover:underline"
              >
                See all the challenges
                <span className="material-symbols-outlined ml-1 transform group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </a>
            </div>

            <div
              className="bg-white/70 backdrop-blur-md p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] group animate-fade-in"
              style={{ animationDelay: "0.5s" }}
            >
              <span className="material-symbols-outlined text-4xl bg-indigo-100 text-indigo-600 p-3 rounded-xl mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 group-hover:rotate-12">
                forum
              </span>
              <h3 className="text-xl font-bold mb-2">Collaborative community</h3>
              <p className="text-gray-600 mb-4">
              Join passionate people in the field of AI and learn from them.
              </p>
              <a
                href="#"
                className="text-indigo-600 font-medium flex items-center group-hover:underline"
              >
                Join the community
                <span className="material-symbols-outlined ml-1 transform group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>

          {/* News Section */}
          <div className="flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-gray-800 relative group">
                AI news in live
                <span className="absolute -bottom-1 left-0 w-1/3 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
              </h2>
              <div className="flex space-x-2">
                <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white transition-all duration-300 flex items-center shadow-md hover:shadow-lg transform hover:scale-105">
                  <span className="material-symbols-outlined mr-1 text-sm">
                    filter_list
                  </span>
                  Filter
                </button>
                <button className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white transition-all duration-300 flex items-center shadow-md hover:shadow-lg transform hover:scale-105">
                  <span className="material-symbols-outlined mr-1 text-sm">
                    tune
                  </span>
                  Preferences
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-300 via-purple-300 to-indigo-300 rounded-full z-10"></div>

              <div className="overflow-hidden pb-4 relative z-20">
                <div className="flex space-x-8 animate-marquee hover:pause">
                  <div
                    className="bg-gradient-to-br from-white/90 to-blue-50/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 transform hover:-translate-y-2 hover:scale-105 group relative min-w-[320px] md:min-w-[380px] animate-fade-in"
                    style={{ animationDelay: "0.2s" }}
                  >
                    <div className="absolute -left-6 top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 border-4 border-white shadow-lg z-20 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500"></div>
                    <div className="absolute right-5 top-3 text-xs text-blue-500 opacity-70">
                      <span className="material-symbols-outlined animate-pulse text-lg">
                        autorenew
                      </span>
                    </div>
                    <span className="bg-gradient-to-r from-blue-200 to-blue-100 text-blue-800 text-xs font-semibold px-3 py-1.5 rounded-full inline-block mb-3 shadow-sm"> 
                      Artificial Intelligence
                    </span>
                    <h3 className="font-extrabold text-xl mb-3 group-hover:text-blue-700 transition-colors tracking-tight">
                      DeepMind Revolutionizes Protein Structure Prediction
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      A major breakthrough in understanding protein folding could significantly accelerate drug discovery and revolutionize structural biology.
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500 flex items-center bg-gray-100/80 px-2 py-1 rounded-full">
                        <span className="material-symbols-outlined text-sm mr-1">
                          calendar_today
                        </span>
                        June 12, 2023
                      </span>
                      <button className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center group-hover:font-bold relative overflow-hidden">
                        <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-300">
                          Read more
                        </span>
                        <span className="material-symbols-outlined text-sm ml-1 transform group-hover:translate-x-2 transition-transform duration-300">
                          arrow_forward
                        </span>
                        <span className="absolute h-0.5 w-0 bg-blue-600 bottom-0 left-0 group-hover:w-full transition-all duration-300"></span>
                      </button>
                    </div>
                  </div>

                  <div
                    className="bg-gradient-to-br from-white/90 to-purple-50/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 transform hover:-translate-y-2 hover:scale-105 group relative min-w-[320px] md:min-w-[380px] animate-fade-in"
                    style={{ animationDelay: "0.4s" }}
                  >
                    <div className="absolute -left-6 top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-purple-400 to-purple-600 border-4 border-white shadow-lg z-20 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500"></div>
                    <div className="absolute right-5 top-3 text-xs text-purple-500 opacity-70">
                      <span className="material-symbols-outlined animate-pulse text-lg">
                        autorenew
                      </span>
                    </div>
                    <span className="bg-gradient-to-r from-purple-200 to-purple-100 text-purple-800 text-xs font-semibold px-3 py-1.5 rounded-full inline-block mb-3 shadow-sm">
                      Machine Learning
                    </span>
                    <h3 className="font-extrabold text-xl mb-3 group-hover:text-purple-700 transition-colors tracking-tight">
                      GPT-5: Human-Like Reasoning Capabilities
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      OpenAI's new model demonstrates unprecedented complex reasoning capabilities, raising questions about the boundary between artificial and human intelligence.
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500 flex items-center bg-gray-100/80 px-2 py-1 rounded-full">
                        <span className="material-symbols-outlined text-sm mr-1">
                          calendar_today
                        </span>
                        May 28, 2023
                      </span>
                      <button className="text-purple-600 hover:text-purple-800 text-sm font-medium flex items-center group-hover:font-bold relative overflow-hidden">
                        <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-300">
                          Read more
                        </span>
                        <span className="material-symbols-outlined text-sm ml-1 transform group-hover:translate-x-2 transition-transform duration-300">
                          arrow_forward
                        </span>
                        <span className="absolute h-0.5 w-0 bg-purple-600 bottom-0 left-0 group-hover:w-full transition-all duration-300"></span>
                      </button>
                    </div>
                  </div>

                  <div
                    className="bg-gradient-to-br from-white/90 to-indigo-50/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 transform hover:-translate-y-2 hover:scale-105 group relative min-w-[320px] md:min-w-[380px] animate-fade-in"
                    style={{ animationDelay: "0.6s" }}
                  >
                    <div className="absolute -left-6 top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-indigo-400 to-indigo-600 border-4 border-white shadow-lg z-20 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500"></div>
                    <div className="absolute right-5 top-3 text-xs text-indigo-500 opacity-70">
                      <span className="material-symbols-outlined animate-pulse text-lg">
                        autorenew
                      </span>
                    </div>
                    <span className="bg-gradient-to-r from-indigo-200 to-indigo-100 text-indigo-800 text-xs font-semibold px-3 py-1.5 rounded-full inline-block mb-3 shadow-sm">
                      Generative AI
                    </span>
                    <h3 className="font-extrabold text-xl mb-3 group-hover:text-indigo-700 transition-colors tracking-tight">
                      A New Era for Artistic Creation
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      The rise of generative models is radically transforming visual arts, music, and writing, redefining the boundaries between human and artificial creativity.
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500 flex items-center bg-gray-100/80 px-2 py-1 rounded-full">
                        <span className="material-symbols-outlined text-sm mr-1">
                          calendar_today
                        </span>
                        May 15, 2023
                      </span>
                      <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium flex items-center group-hover:font-bold relative overflow-hidden">
                        <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-300">
                          Read more
                        </span>
                        <span className="material-symbols-outlined text-sm ml-1 transform group-hover:translate-x-2 transition-transform duration-300">
                          arrow_forward
                        </span>
                        <span className="absolute h-0.5 w-0 bg-indigo-600 bottom-0 left-0 group-hover:w-full transition-all duration-300"></span>
                      </button>
                    </div>
                  </div>

                  <div
                    className="bg-gradient-to-br from-white/90 to-blue-50/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 transform hover:-translate-y-2 hover:scale-105 group relative min-w-[320px] md:min-w-[380px] animate-fade-in"
                    style={{ animationDelay: "0.8s" }}
                  >
                    <span className="bg-gradient-to-r from-blue-200 to-blue-100 text-blue-800 text-xs font-semibold px-3 py-1.5 rounded-full inline-block mb-3 shadow-sm">
                      Medical AI
                    </span>
                    <h3 className="font-extrabold text-xl mb-3 group-hover:text-blue-700 transition-colors tracking-tight">
                      AI Surpasses Experts in Early Diagnosis
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      An international study shows that deep learning algorithms now outperform specialist doctors in early identification of certain diseases.
                    </p>
                    <span className="text-xs text-gray-500 flex items-center bg-gray-100/80 px-2 py-1 rounded-full">
                        <span className="material-symbols-outlined text-sm mr-1">
                          calendar_today
                        </span>
                        May 5, 2023
                      </span>
                  </div>
                </div>
              </div>
            </div>

            <style jsx>{`
              @keyframes marquee {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-180%);
                }
              }
              .animate-marquee {
                animation: marquee 30s linear infinite;
              }
              .hover\:pause:hover {
                animation-play-state: paused;
              }
            `}</style>
          </div>
        </section>
        
       
      </div>
      <Footer></Footer>
   </body>
  );
};      

export default App;

import React from "react";
import "../styles/styles.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import algo_crypt from "../assets/challenges/algo_crypt.png";
import black_box from "../assets/challenges/black_box.png";
import chaos_trials from "../assets/challenges/chaos_trials.png";
import data_alchemy from "../assets/challenges/data_alchemy.png";

import history_reloaded from "../assets/challenges/history_reloaded.png";
import intro_to_ai from "../assets/challenges/intro_to_ai.png";
import math_craft from "../assets/challenges/math_craft.png";
import neural_crafting from "../assets/challenges/neural_crafting.png";

                export const App = () => {
  return (
    <div id="webcrumbs">
       <Header></Header>
      <div className="w-full min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-100 p-8 font-sans">
       
      <main className='flex flex-col'>
    {/* Core Courses Section */}
    <section className='mb-8 mt-4 md:mt-8 w-full max-w-7xl mx-auto'>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-5'>
        {/* Course 1: Thinking Machine */}
        <div className='bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group'>
          <div className='h-24 md:h-32 bg-gradient-to-r from-blue-50 to-indigo-50 flex items-center justify-center relative overflow-hidden'>
          <img
                    src={intro_to_ai}
                    alt="Intro to AI"
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                  />
           

            <div className='absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors duration-300'></div>
          
          </div>
          <div className='p-3 md:p-4'>
            <h3 className='font-semibold text-sm md:text-base text-gray-800 mb-1 group-hover:text-blue-600 transition-colors duration-300 truncate'>
             Intro to AI
            </h3>

            <div className='flex items-center justify-between mb-2'>
              <span className='px-2 py-1 bg-blue-50 rounded-full text-xs font-medium text-blue-600'>
                Beginner
              </span>
              <span className='text-xs text-gray-500'>9/20</span>
            </div>
            <div className='w-full h-1.5 bg-gray-100 rounded-full overflow-hidden'>
              <div className='h-full bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full w-[45%]'></div>
            </div>
          </div>
        </div>

        {/* Course 2: Artificial Neural */}
        <div className='bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group'>
          <div className='h-24 md:h-32 bg-gradient-to-r from-blue-50 to-indigo-50 flex items-center justify-center relative overflow-hidden'>
          <img
                    src={neural_crafting}
                    alt="Neural Crafting"
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                  />
           
            <div className='absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors duration-300'></div>
          </div>
          <div className='p-3 md:p-4'>
            <h3 className='font-semibold text-sm md:text-base text-gray-800 mb-1 group-hover:text-blue-600 transition-colors duration-300 truncate'>
              Neural Crafting
            </h3>

            <div className='flex items-center justify-between mb-2'>
              <span className='px-2 py-1 bg-blue-50 rounded-full text-xs font-medium text-blue-600'>
                Intermediate
              </span>
              <span className='text-xs text-gray-500'>18/25</span>
            </div>
            <div className='w-full h-1.5 bg-gray-100 rounded-full overflow-hidden'>
              <div className='h-full bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full w-[72%]'></div>
            </div>
          </div>
        </div>

        {/* Course 3: Linear Algebra */}
        <div className='bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group'>
          <div className='h-24 md:h-32 bg-gradient-to-r from-blue-50 to-indigo-50 flex items-center justify-center relative overflow-hidden'>
          <img
                    src={math_craft}
                    alt="Math Craft"
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                  />
           
            <div className='absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors duration-300'></div>
          </div>
          <div className='p-3 md:p-4'>
            <h3 className='font-semibold text-sm md:text-base text-gray-800 mb-1 group-hover:text-blue-600 transition-colors duration-300 truncate'>
            Math Craft
            </h3>

            <div className='flex items-center justify-between mb-2'>
              <span className='px-2 py-1 bg-blue-50 rounded-full text-xs font-medium text-blue-600'>
                Advanced
              </span>
              <span className='text-xs text-gray-500'>6/20</span>
            </div>
            <div className='w-full h-1.5 bg-gray-100 rounded-full overflow-hidden'>
              <div className='h-full bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full w-[30%]'></div>
            </div>
          </div>
        </div>

        {/* Course 4: Cost Functions */}
        <div className='bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group'>
          <div className='h-24 md:h-32 bg-gradient-to-r from-blue-50 to-indigo-50 flex items-center justify-center relative overflow-hidden'>
            

<img
src={data_alchemy}
alt="Data Alchemy"
className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-300"
/>
            <div className='absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors duration-300'></div>
          </div>
          <div className='p-3 md:p-4'>
            <h3 className='font-semibold text-sm md:text-base text-gray-800 mb-1 group-hover:text-blue-600 transition-colors duration-300 truncate'>
              Data Alchemy
            </h3>

            <div className='flex items-center justify-between mb-2'>
              <span className='px-2 py-1 bg-blue-50 rounded-full text-xs font-medium text-blue-600'>
                Intermediate
              </span>
              <span className='text-xs text-gray-500'>12/20</span>
            </div>
            <div className='w-full h-1.5 bg-gray-100 rounded-full overflow-hidden'>
              <div className='h-full bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full w-[60%]'></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className='mb-8 mt-4 md:mt-8 w-full max-w-7xl mx-auto'>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-5'>
        {/* Course 1: Thinking Machine */}
        <div className='bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group'>
          <div className='h-24 md:h-32 bg-gradient-to-r from-blue-50 to-indigo-50 flex items-center justify-center relative overflow-hidden'>
          <img
                    src={algo_crypt}
                    alt="Algo crypt"
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                  />
            
           

            <div className='absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors duration-300'></div>
          
          </div>
          <div className='p-3 md:p-4'>
            <h3 className='font-semibold text-sm md:text-base text-gray-800 mb-1 group-hover:text-blue-600 transition-colors duration-300 truncate'>
              algo_crypt
            </h3>

            <div className='flex items-center justify-between mb-2'>
              <span className='px-2 py-1 bg-blue-50 rounded-full text-xs font-medium text-blue-600'>
                Intermediate
              </span>
              <span className='text-xs text-gray-500'>9/20</span>
            </div>
            <div className='w-full h-1.5 bg-gray-100 rounded-full overflow-hidden'>
              <div className='h-full bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full w-[45%]'></div>
            </div>
          </div>
        </div>

        {/* Course 2: Artificial Neural */}
        <div className='bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group'>
          <div className='h-24 md:h-32 bg-gradient-to-r from-blue-50 to-indigo-50 flex items-center justify-center relative overflow-hidden'>
          <img
                    src={black_box}
                    alt="Black Box"
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                  />
            
           
            <div className='absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors duration-300'></div>
          </div>
          <div className='p-3 md:p-4'>
            <h3 className='font-semibold text-sm md:text-base text-gray-800 mb-1 group-hover:text-blue-600 transition-colors duration-300 truncate'>
              Black Box
            </h3>

            <div className='flex items-center justify-between mb-2'>
              <span className='px-2 py-1 bg-blue-50 rounded-full text-xs font-medium text-blue-600'>
                Advanced
              </span>
              <span className='text-xs text-gray-500'>18/25</span>
            </div>
            <div className='w-full h-1.5 bg-gray-100 rounded-full overflow-hidden'>
              <div className='h-full bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full w-[72%]'></div>
            </div>
          </div>
        </div>

        {/* Course 3: Linear Algebra */}
        <div className='bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group'>
          <div className='h-24 md:h-32 bg-gradient-to-r from-blue-50 to-indigo-50 flex items-center justify-center relative overflow-hidden'>
          <img
                    src={chaos_trials}
                    alt="Chaos Trials"
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                  />
            
           
            <div className='absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors duration-300'></div>
          </div>
          <div className='p-3 md:p-4'>
            <h3 className='font-semibold text-sm md:text-base text-gray-800 mb-1 group-hover:text-blue-600 transition-colors duration-300 truncate'>
              Chaos Trials
            </h3>

            <div className='flex items-center justify-between mb-2'>
              <span className='px-2 py-1 bg-blue-50 rounded-full text-xs font-medium text-blue-600'>
                Advanced
              </span>
              <span className='text-xs text-gray-500'>6/20</span>
            </div>
            <div className='w-full h-1.5 bg-gray-100 rounded-full overflow-hidden'>
              <div className='h-full bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full w-[30%]'></div>
            </div>
          </div>
        </div>

        {/* Course 4: Cost Functions */}
        <div className='bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group'>
          <div className='h-24 md:h-32 bg-gradient-to-r from-blue-50 to-indigo-50 flex items-center justify-center relative overflow-hidden'>
            

<img
src={history_reloaded}
alt="History reloaded"
className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-300"
/>

            <div className='absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors duration-300'></div>
          </div>
          <div className='p-3 md:p-4'>
            <h3 className='font-semibold text-sm md:text-base text-gray-800 mb-1 group-hover:text-blue-600 transition-colors duration-300 truncate'>
              History reloaded
            </h3>

            <div className='flex items-center justify-between mb-2'>
              <span className='px-2 py-1 bg-blue-50 rounded-full text-xs font-medium text-blue-600'>
                Intermediate
              </span>
              <span className='text-xs text-gray-500'>12/20</span>
            </div>
            <div className='w-full h-1.5 bg-gray-100 rounded-full overflow-hidden'>
              <div className='h-full bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full w-[60%]'></div>
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

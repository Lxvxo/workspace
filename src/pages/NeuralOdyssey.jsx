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

import algebra_linear from "../assets/courses/algebra_linear.png";
import artificial_neural from "../assets/courses/artificial_neural.png";
import ia_doctor from "../assets/courses/ia_doctor.png";
import nlp from "../assets/courses/nlp.png";
import reinforcement_ai from "../assets/courses/reinforcement_ai.png";
import robot_judge from "../assets/courses/robot_judge.png";
import ai_generative from "../assets/courses/ai_generative.png";

export const App = () => {
  return (
    <div id="webcrumbs">
       <Header></Header>
      <div className="w-full min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-100 p-8 font-sans">
       
      <main className='flex flex-col'>
    {/* Core Courses Section */}
    <section className='mb-8 mt-4 md:mt-8 w-full max-w-7xl mx-auto'>
      <h2 className='text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6 px-2 md:px-4'>Core Courses</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-5'>
        {/* Course 1: Thinking Machine */}
        <div className='bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group'>
          <div className='h-24 md:h-32 bg-gradient-to-r from-blue-50 to-indigo-50 flex items-center justify-center relative overflow-hidden'>
          <img
                    src={baby}
                    alt="Baby robot"
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                  />
            <span className='material-symbols-outlined text-4xl md:text-6xl text-blue-200 group-hover:scale-110 transition-transform duration-500'>
              psychology
            </span>
           

            <div className='absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors duration-300'></div>
          
          </div>
          <div className='p-3 md:p-4'>
            <h3 className='font-semibold text-sm md:text-base text-gray-800 mb-1 group-hover:text-blue-600 transition-colors duration-300 truncate'>
              Thinking Machine
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
                    src={artificial_neural}
                    alt="Artificial Neural"
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                  />
            <span className='material-symbols-outlined text-4xl md:text-6xl text-blue-200 group-hover:scale-110 transition-transform duration-500'>
              neurology
            </span>
            <div className='absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors duration-300'></div>
          </div>
          <div className='p-3 md:p-4'>
            <h3 className='font-semibold text-sm md:text-base text-gray-800 mb-1 group-hover:text-blue-600 transition-colors duration-300 truncate'>
              Artificial Neural
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
                    src={algebra_linear}
                    alt="Algebra Linear"
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                  />
            <span className='material-symbols-outlined text-4xl md:text-6xl text-blue-200 group-hover:scale-110 transition-transform duration-500'>
              functions
            </span>
            <div className='absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors duration-300'></div>
          </div>
          <div className='p-3 md:p-4'>
            <h3 className='font-semibold text-sm md:text-base text-gray-800 mb-1 group-hover:text-blue-600 transition-colors duration-300 truncate'>
              Linear Algebra for AI
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
src={cost_function}
alt="Cost function"
className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-300"
/>

            <span className='material-symbols-outlined text-4xl md:text-6xl text-blue-200 group-hover:scale-110 transition-transform duration-500'>
              monitoring
            </span>
            <div className='absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors duration-300'></div>
          </div>
          <div className='p-3 md:p-4'>
            <h3 className='font-semibold text-sm md:text-base text-gray-800 mb-1 group-hover:text-blue-600 transition-colors duration-300 truncate'>
              Cost Functions
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

    {/* Advanced Applied Courses Section - Redesigned */}
    <section className='mb-8 mt-8 md:mt-12 w-full max-w-7xl mx-auto'>
      <h2 className='text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6 px-2 md:px-4'>Advanced Applied Courses</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-5'>
        {/* Course 1: Gradient Descent */}
        <div className='bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group'>
          <div className='h-24 md:h-32 bg-gradient-to-br from-violet-50 to-indigo-100 flex items-center justify-center relative overflow-hidden'>
             
          <img
                  src={GD} 
                  alt="Gradient Descent"
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                />
            <span className='material-symbols-outlined text-4xl md:text-6xl text-violet-300 group-hover:scale-110 transition-transform duration-500 group-hover:rotate-6'>
              trending_down
            </span>
            <div className='absolute inset-0 bg-indigo-500/5 group-hover:bg-indigo-500/10 transition-colors duration-300'></div>
          </div>
          <div className='p-3 md:p-4'>
            <h3 className='font-semibold text-sm md:text-base text-gray-800 mb-1 group-hover:text-violet-600 transition-colors duration-300 truncate'>
              Gradient Descent
            </h3>

            <div className='flex items-center justify-between mb-2'>
             
              <span className='px-2 py-1 bg-violet-50 rounded-full text-xs font-medium text-violet-600'>
                Advanced
              </span>
              <span className='text-xs text-gray-500'>3/20</span>
            </div>
            <div className='w-full h-1.5 bg-gray-100 rounded-full overflow-hidden'>
              <div className='h-full bg-gradient-to-r from-violet-400 to-indigo-500 rounded-full w-[15%]'></div>
            </div>
          </div>
        </div>

        {/* Course 2: Deep Learning */}
        <div className='bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group'>
          <div className='h-24 md:h-32 bg-gradient-to-br from-indigo-50 to-blue-100 flex items-center justify-center relative overflow-hidden'>
          <img
                    src={DNN}
                    alt="Deep learning"
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                  />
            <span className='material-symbols-outlined text-4xl md:text-6xl text-indigo-300 group-hover:scale-110 transition-transform duration-500 group-hover:rotate-12'>
              data_object
            </span>
            <div className='absolute inset-0 bg-indigo-500/5 group-hover:bg-indigo-500/10 transition-colors duration-300'></div>
            <div className='absolute top-2 right-2 w-5 h-5 md:w-7 md:h-7 flex items-center justify-center'>
              <svg
                className='w-5 h-5 md:w-7 md:h-7 text-yellow-400 drop-shadow-md transform rotate-12 group-hover:rotate-45 transition-transform duration-500'
                viewBox='0 0 24 24'
                fill='currentColor'
              >
                <path d='M12 1L9 9H2L7 14.5L5 22L12 17.5L19 22L17 14.5L22 9H15L12 1Z' />
              </svg>
            </div>
          </div>
          <div className='p-3 md:p-4'>
            <h3 className='font-semibold text-sm md:text-base text-gray-800 mb-1 group-hover:text-indigo-600 transition-colors duration-300 truncate'>
              Deep Learning
            </h3>

            <div className='flex items-center justify-between mb-2'>
           

              <span className='px-2 py-1 bg-indigo-50 rounded-full text-xs font-medium text-indigo-600'>
                Expert
              </span>
              <span className='text-xs text-gray-500 flex items-center'>
                15/15
                <span className='material-symbols-outlined text-yellow-500 ml-1 text-xs md:text-sm'>
                  military_tech
                </span>
              </span>
            </div>
            <div className='w-full h-1.5 bg-gray-100 rounded-full overflow-hidden'>
              <div className='h-full bg-gradient-to-r from-yellow-300 to-amber-500 rounded-full w-full shadow-inner'></div>
            </div>
          </div>
        </div>

        {/* Course 3: Natural Language Processing */}
        <div className='bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group'>
          <div className='h-24 md:h-32 bg-gradient-to-br from-purple-50 to-fuchsia-100 flex items-center justify-center relative overflow-hidden'>
          <img
                    src={nlp}
                    alt="NLP"
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                  />
            <span className='material-symbols-outlined text-4xl md:text-6xl text-purple-300 group-hover:scale-110 transition-transform duration-500 group-hover:rotate-6'>
              chat
            </span>
            <div className='absolute inset-0 bg-purple-500/5 group-hover:bg-purple-500/10 transition-colors duration-300'></div>
          </div>
          <div className='p-3 md:p-4'>
            <h3 className='font-semibold text-sm md:text-base text-gray-800 mb-1 group-hover:text-purple-600 transition-colors duration-300 truncate'>
              Natural Language Processing
            </h3>

            <div className='flex items-center justify-between mb-2'>
              <span className='px-2 py-1 bg-purple-50 rounded-full text-xs font-medium text-purple-600'>
                Advanced
              </span>
              <span className='text-xs text-gray-500'>4/18</span>
            </div>
            <div className='w-full h-1.5 bg-gray-100 rounded-full overflow-hidden'>
              <div className='h-full bg-gradient-to-r from-purple-400 to-fuchsia-500 rounded-full w-[22%]'></div>
            </div>
          </div>
        </div>

        {/* Course 4: Computer Vision */}
        <div className='bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group'>
          <div className='h-24 md:h-32 bg-gradient-to-br from-sky-50 to-cyan-100 flex items-center justify-center relative overflow-hidden'>
          <img
src={computer_vision}
alt="Computer Vision"
className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-300"
/>

            <span className='material-symbols-outlined text-4xl md:text-6xl text-sky-300 group-hover:scale-110 transition-transform duration-500 group-hover:rotate-12'>
              visibility
            </span>
            <div className='absolute inset-0 bg-sky-500/5 group-hover:bg-sky-500/10 transition-colors duration-300'></div>
            <div className='absolute top-2 right-2 w-5 h-5 md:w-7 md:h-7 flex items-center justify-center'>
              <svg
                className='w-5 h-5 md:w-7 md:h-7 text-yellow-400 drop-shadow-md transform rotate-12 group-hover:rotate-45 transition-transform duration-500'
                viewBox='0 0 24 24'
                fill='currentColor'
              >
                <path d='M12 1L9 9H2L7 14.5L5 22L12 17.5L19 22L17 14.5L22 9H15L12 1Z' />
              </svg>
            </div>
          </div>
          <div className='p-3 md:p-4'>
            <h3 className='font-semibold text-sm md:text-base text-gray-800 mb-1 group-hover:text-sky-600 transition-colors duration-300 truncate'>
              Computer Vision
            </h3>

            <div className='flex items-center justify-between mb-2'>
          
              <span className='px-2 py-1 bg-sky-50 rounded-full text-xs font-medium text-sky-600'>
                Expert
              </span>
              <span className='text-xs text-gray-500 flex items-center'>
                22/22
                <span className='material-symbols-outlined text-yellow-500 ml-1 text-xs md:text-sm'>
                  military_tech
                </span>
              </span>
            </div>
            <div className='w-full h-1.5 bg-gray-100 rounded-full overflow-hidden'>
              <div className='h-full bg-gradient-to-r from-yellow-300 to-amber-500 rounded-full w-full shadow-inner'></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Related Courses Section - New Addition */}
    <section className='mb-8 mt-8 md:mt-12 w-full max-w-7xl mx-auto'>
      <h2 className='text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6 px-2 md:px-4'>Related Courses</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-5'>
        {/* Course 1: Reinforcement Learning */}
        <div className='bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group'>
          <div className='h-24 md:h-32 bg-gradient-to-br from-emerald-50 to-teal-100 flex items-center justify-center relative overflow-hidden'>
          <img
                    src={reinforcement_ai}
                    alt="Reinforcement AI"
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                  />
            <span className='material-symbols-outlined text-4xl md:text-6xl text-emerald-300 group-hover:scale-110 transition-transform duration-500 group-hover:rotate-6'>
              model_training
            </span>
            <div className='absolute inset-0 bg-emerald-500/5 group-hover:bg-emerald-500/10 transition-colors duration-300'></div>
          </div>
          <div className='p-3 md:p-4'>
            <h3 className='font-semibold text-sm md:text-base text-gray-800 mb-1 group-hover:text-emerald-600 transition-colors duration-300 truncate'>
              Reinforcement Learning
            </h3>

            <div className='flex items-center justify-between mb-2'>
              <span className='px-2 py-1 bg-emerald-50 rounded-full text-xs font-medium text-emerald-600'>
                Advanced
              </span>
              <span className='text-xs text-gray-500'>7/24</span>
            </div>
            <div className='w-full h-1.5 bg-gray-100 rounded-full overflow-hidden'>
              <div className='h-full bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full w-[29%]'></div>
            </div>
          </div>
        </div>

        {/* Course 2: Generative AI */}
        <div className='bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group'>
          <div className='h-24 md:h-32 bg-gradient-to-br from-rose-50 to-pink-100 flex items-center justify-center relative overflow-hidden'>
          <img
                    src={ai_generative}
                    alt="AI generative"
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                  />
            <span className='material-symbols-outlined text-4xl md:text-6xl text-rose-300 group-hover:scale-110 transition-transform duration-500 group-hover:rotate-12'>
              auto_awesome
            </span>
            <div className='absolute inset-0 bg-rose-500/5 group-hover:bg-rose-500/10 transition-colors duration-300'></div>
            <div className='absolute top-2 right-2 px-1.5 py-0.5 md:px-2 md:py-1 bg-blue-100 rounded-full'>
              <span className='text-[0.65rem] md:text-xs font-medium text-blue-600'>New</span>
            </div>
          </div>
          <div className='p-3 md:p-4'>
            <h3 className='font-semibold text-sm md:text-base text-gray-800 mb-1 group-hover:text-rose-600 transition-colors duration-300 truncate'>
              Generative AI
            </h3>

            <div className='flex items-center justify-between mb-2'>
              <span className='px-2 py-1 bg-rose-50 rounded-full text-xs font-medium text-rose-600'>
                Intermediate
              </span>
              <span className='text-xs text-gray-500'>2/18</span>
            </div>
            <div className='w-full h-1.5 bg-gray-100 rounded-full overflow-hidden'>
              <div className='h-full bg-gradient-to-r from-rose-400 to-pink-500 rounded-full w-[11%]'></div>
            </div>
          </div>
        </div>

        {/* Course 3: AI Ethics */}
        <div className='bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group'>
          <div className='h-24 md:h-32 bg-gradient-to-br from-amber-50 to-yellow-100 flex items-center justify-center relative overflow-hidden'>
          <img
                    src={robot_judge}
                    alt="Judge Robot"
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                  />
            <span className='material-symbols-outlined text-4xl md:text-6xl text-amber-300 group-hover:scale-110 transition-transform duration-500 group-hover:rotate-6'>
              balance
            </span>
            <div className='absolute inset-0 bg-amber-500/5 group-hover:bg-amber-500/10 transition-colors duration-300'></div>
          </div>
          <div className='p-3 md:p-4'>
            <h3 className='font-semibold text-sm md:text-base text-gray-800 mb-1 group-hover:text-amber-600 transition-colors duration-300 truncate'>
              AI Ethics & Governance
            </h3>

            <div className='flex items-center justify-between mb-2'>
              <span className='px-2 py-1 bg-amber-50 rounded-full text-xs font-medium text-amber-600'>
                Beginner
              </span>
              <span className='text-xs text-gray-500'>5/12</span>
            </div>
            <div className='w-full h-1.5 bg-gray-100 rounded-full overflow-hidden'>
              <div className='h-full bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full w-[42%]'></div>
            </div>
          </div>
        </div>

        {/* Course 4: AI in Healthcare */}
        <div className='bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group'>
          <div className='h-24 md:h-32 bg-gradient-to-br from-red-50 to-rose-100 flex items-center justify-center relative overflow-hidden'>
          <img
                    src={ia_doctor}
                    alt="Doctor AI"
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                  />
            <span className='material-symbols-outlined text-4xl md:text-6xl text-red-300 group-hover:scale-110 transition-transform duration-500 group-hover:rotate-12'>
              health_and_safety
            </span>
            <div className='absolute inset-0 bg-red-500/5 group-hover:bg-red-500/10 transition-colors duration-300'></div>
            <div className='absolute top-2 right-2 px-1.5 py-0.5 md:px-2 md:py-1 bg-green-100 rounded-full'>
              <span className='text-[0.65rem] md:text-xs font-medium text-green-600'>Popular</span>
            </div>
          </div>
          <div className='p-3 md:p-4'>
            <h3 className='font-semibold text-sm md:text-base text-gray-800 mb-1 group-hover:text-red-600 transition-colors duration-300 truncate'>
              AI in Healthcare
            </h3>

            <div className='flex items-center justify-between mb-2'>
              <span className='px-2 py-1 bg-red-50 rounded-full text-xs font-medium text-red-600'>
                Intermediate
              </span>
              <span className='text-xs text-gray-500'>14/20</span>
            </div>
            <div className='w-full h-1.5 bg-gray-100 rounded-full overflow-hidden'>
              <div className='h-full bg-gradient-to-r from-red-400 to-rose-500 rounded-full w-[70%]'></div>
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

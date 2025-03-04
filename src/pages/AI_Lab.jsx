import React from "react";
import "../styles/styles.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const App = () => {
  return (
    <div id='webcrumbs'>
        <Header></Header>
      <div className='w-full max-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-100 p-0 font-sans'>
      
        <div className='flex justify-between items-center px-8 py-4'>
          <h1 className='text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 tracking-tight transform hover:scale-[1.01] transition-transform duration-300'>
            AI Lab - Adaptive Canvas
          </h1>

          <div className='flex space-x-4'>
            <div className='px-4 py-2 bg-white/70 hover:bg-indigo-100 transition-all duration-300 cursor-pointer rounded-xl text-indigo-700 font-medium flex items-center gap-2 group shadow-md hover:shadow-indigo-200/50'>
              <span className='material-symbols-outlined text-indigo-500 group-hover:rotate-12 transition-all duration-500 text-xl'>
                bookmark
              </span>
              <span className='group-hover:translate-x-0.5 transition-all duration-300'>
                Save Project
              </span>
            </div>
            <div className='px-4 py-2 bg-white/70 hover:bg-purple-100 transition-all duration-300 cursor-pointer rounded-xl text-purple-700 font-medium flex items-center gap-2 group shadow-md hover:shadow-purple-200/50'>
              <span className='material-symbols-outlined text-purple-500 group-hover:rotate-12 transition-all duration-500 text-xl'>
                share
              </span>
              <span className='group-hover:translate-x-0.5 transition-all duration-300'>
                Share Project
              </span>
            </div>
          </div>
        </div>

        <div className='flex w-screen h-screen'>
          <div className='w-[72px] bg-white/80 backdrop-blur-md shadow-lg rounded-r-xl flex flex-col items-center py-6 gap-6 h-full'>
            <div className='w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600 hover:bg-indigo-200 transition-all duration-300 cursor-pointer group shadow-sm'>
              <span className='material-symbols-outlined group-hover:rotate-12 transition-all duration-300'>
                input
              </span>
            </div>
            <div className='w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600 hover:bg-purple-200 transition-all duration-300 cursor-pointer group shadow-sm'>
              <span className='material-symbols-outlined group-hover:rotate-12 transition-all duration-300'>
                layers
              </span>
            </div>
            <div className='w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 hover:bg-blue-200 transition-all duration-300 cursor-pointer group shadow-sm'>
              <span className='material-symbols-outlined group-hover:rotate-12 transition-all duration-300'>
                output
              </span>
            </div>
            <div className='w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center text-green-600 hover:bg-green-200 transition-all duration-300 cursor-pointer group shadow-sm'>
              <span className='material-symbols-outlined group-hover:rotate-12 transition-all duration-300'>
                data_array
              </span>
            </div>
            <div className='w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600 hover:bg-amber-200 transition-all duration-300 cursor-pointer group shadow-sm'>
              <span className='material-symbols-outlined group-hover:rotate-12 transition-all duration-300'>
                filter_alt
              </span>
            </div>
            <div className='w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center text-red-600 hover:bg-red-200 transition-all duration-300 cursor-pointer group shadow-sm'>
              <span className='material-symbols-outlined group-hover:rotate-12 transition-all duration-300'>
                functions
              </span>
            </div>
            <div className='border-t border-gray-200 w-10 my-2'></div>
            <div className='w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-all duration-300 cursor-pointer group shadow-sm'>
              <span className='material-symbols-outlined group-hover:rotate-12 transition-all duration-300'>
                help
              </span>
            </div>
          </div>

          <div className='flex-1 p-4 relative overflow-hidden bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md rounded-lg mx-4'>
            <div className='absolute top-4 left-4 right-4 flex justify-between items-center'>
              <div className='text-sm text-gray-500 font-medium px-3 py-1.5 bg-white/70 backdrop-blur-sm rounded-lg shadow-sm flex items-center space-x-2'>
                <span className='material-symbols-outlined text-indigo-500 text-sm'>
                  tune
                </span>
                <span>Model Sandbox</span>
              </div>

              <div className='flex space-x-2'>
                <div className='px-3 py-1.5 bg-white/70 backdrop-blur-sm rounded-lg shadow-sm flex items-center space-x-2 cursor-pointer hover:bg-white/90 transition-all duration-300'>
                  <span className='material-symbols-outlined text-gray-500 text-sm'>
                    grid_view
                  </span>
                  <span className='text-sm text-gray-500 font-medium'>
                    Grid
                  </span>
                </div>
                <div className='px-3 py-1.5 bg-indigo-100/70 backdrop-blur-sm rounded-lg shadow-sm flex items-center space-x-2 cursor-pointer hover:bg-indigo-100/90 transition-all duration-300'>
                  <span className='material-symbols-outlined text-indigo-500 text-sm'>
                    schema
                  </span>
                  <span className='text-sm text-indigo-600 font-medium'>
                    Flowchart
                  </span>
                </div>
                <div className='px-3 py-1.5 bg-white/70 backdrop-blur-sm rounded-lg shadow-sm flex items-center space-x-2 cursor-pointer hover:bg-white/90 transition-all duration-300'>
                  <span className='material-symbols-outlined text-gray-500 text-sm'>
                    code
                  </span>
                  <span className='text-sm text-gray-500 font-medium'>
                    Code
                  </span>
                </div>
              </div>
            </div>

            <div className='h-full w-full flex items-center justify-center'>
              <div className='relative w-full h-full'>
                <div className='absolute left-[10%] top-[15%] w-[200px] h-[100px] bg-white rounded-xl shadow-lg p-4 hover:shadow-xl transition-all duration-300 cursor-move transform hover:scale-[1.02] border-2 border-blue-200 group'>
                  <div className='flex items-center mb-2'>
                    <div className='w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3 group-hover:rotate-12 transition-all duration-500'>
                      <span className='material-symbols-outlined text-sm'>
                        input
                      </span>
                    </div>
                    <h3 className='text-sm font-medium'>Input Layer</h3>
                    <div className='ml-auto'>
                      <span className='material-symbols-outlined text-gray-400 text-sm group-hover:text-indigo-500'>
                        drag_indicator
                      </span>
                    </div>
                  </div>
                  <p className='text-xs text-gray-500'>Shape: [None, 784]</p>
                  <div className='absolute inset-x-0 bottom-0 h-1 bg-blue-500 rounded-b-lg'></div>
                </div>

                <div className='absolute left-[15%] top-[35%] w-[200px] h-[100px] bg-white rounded-xl shadow-lg p-4 hover:shadow-xl transition-all duration-300 cursor-move transform hover:scale-[1.02] border-2 border-indigo-200 group'>
                  <div className='flex items-center mb-2'>
                    <div className='w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 mr-3 group-hover:rotate-12 transition-all duration-500'>
                      <span className='material-symbols-outlined text-sm'>
                        layers
                      </span>
                    </div>
                    <h3 className='text-sm font-medium'>Dense Layer</h3>
                    <div className='ml-auto'>
                      <span className='material-symbols-outlined text-gray-400 text-sm group-hover:text-indigo-500'>
                        drag_indicator
                      </span>
                    </div>
                  </div>
                  <p className='text-xs text-gray-500'>
                    Units: 128, Activation: ReLU
                  </p>
                  <div className='absolute inset-x-0 bottom-0 h-1 bg-indigo-500 rounded-b-lg'></div>
                </div>

                <div className='absolute left-[20%] top-[55%] w-[200px] h-[100px] bg-white rounded-xl shadow-lg p-4 hover:shadow-xl transition-all duration-300 cursor-move transform hover:scale-[1.02] border-2 border-purple-200 group'>
                  <div className='flex items-center mb-2'>
                    <div className='w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mr-3 group-hover:rotate-12 transition-all duration-500'>
                      <span className='material-symbols-outlined text-sm'>
                        output
                      </span>
                    </div>
                    <h3 className='text-sm font-medium'>Output Layer</h3>
                    <div className='ml-auto'>
                      <span className='material-symbols-outlined text-gray-400 text-sm group-hover:text-indigo-500'>
                        drag_indicator
                      </span>
                    </div>
                  </div>
                  <p className='text-xs text-gray-500'>
                    Units: 10, Activation: Softmax
                  </p>
                  <div className='absolute inset-x-0 bottom-0 h-1 bg-purple-500 rounded-b-lg'></div>
                </div>

                <svg className='absolute inset-0 pointer-events-none w-full h-full'>
                  <path
                    d='M180,165 L230,235'
                    stroke='#94a3b8'
                    strokeWidth='2'
                    fill='none'
                    strokeDasharray='4'
                  />
                  <path
                    d='M230,235 L320,355'
                    stroke='#94a3b8'
                    strokeWidth='2'
                    fill='none'
                    strokeDasharray='4'
                  />
                  <circle cx='180' cy='165' r='4' fill='#3b82f6' />
                  <circle cx='230' cy='235' r='4' fill='#6366f1' />
                  <circle cx='320' cy='355' r='4' fill='#a855f7' />
                </svg>

                <div className='absolute right-[20%] top-[30%] w-[240px] p-4 bg-indigo-50/80 rounded-xl border border-dashed border-indigo-200 transition-all duration-300 hover:bg-indigo-50'>
                  <div className='flex items-start'>
                    <div className='w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 mr-3'>
                      <span className='material-symbols-outlined text-sm'>
                        lightbulb
                      </span>
                    </div>
                    <div className='flex-1'>
                      <h4 className='font-medium text-indigo-800 mb-1 text-sm'>
                        NeuralSpirit Suggestion
                      </h4>
                      <p className='text-xs text-gray-700'>
                        Try adding a Dropout layer after Dense to prevent
                        overfitting.
                      </p>
                      <button className='mt-2 px-3 py-1 bg-indigo-200 rounded-lg text-indigo-700 text-xs hover:bg-indigo-300 transition-all duration-300'>
                        Apply
                      </button>
                    </div>
                  </div>
                </div>

                <div className='absolute right-[40%] top-[15%] w-[140px] h-[80px] bg-amber-50/80 rounded-xl border border-amber-200 p-3 flex flex-col items-center justify-center hover:bg-amber-50 transition-all cursor-grab transform hover:scale-105 group'>
                  <div className='w-7 h-7 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 mb-1 group-hover:rotate-12 transition-all duration-500'>
                    <span className='material-symbols-outlined text-sm'>
                      filter_alt
                    </span>
                  </div>
                  <p className='text-xs font-medium text-amber-800'>
                    Dropout Layer
                  </p>
                  <p className='text-[10px] text-amber-600'>Rate: 0.2</p>
                </div>

                <div className='absolute right-[50%] top-[45%] w-[140px] h-[80px] bg-green-50/80 rounded-xl border border-green-200 p-3 flex flex-col items-center justify-center hover:bg-green-50 transition-all cursor-grab transform hover:scale-105 group'>
                  <div className='w-7 h-7 rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-1 group-hover:rotate-12 transition-all duration-500'>
                    <span className='material-symbols-outlined text-sm'>
                      data_array
                    </span>
                  </div>
                  <p className='text-xs font-medium text-green-800'>
                    Batch Normalization
                  </p>
                  <p className='text-[10px] text-green-600'>Axis: -1</p>
                </div>
              </div>
            </div>

            <div className='absolute left-0 right-0 bottom-0 py-4 px-6 flex justify-between items-center bg-white/70 backdrop-blur-md rounded-t-xl shadow-lg'>
              <div className='flex space-x-4'>
                <div className='flex items-center'>
                  <span className='text-sm font-medium text-gray-700 mr-2'>
                    Dataset:
                  </span>
                  <div className='relative'>
                    <select className='pl-3 pr-8 py-1.5 bg-white rounded-lg border border-gray-200 text-sm appearance-none cursor-pointer'>
                      <option>MNIST Handwritten Digits</option>
                      <option>CIFAR-10 Images</option>
                      <option>Fashion MNIST</option>
                    </select>
                    <span className='material-symbols-outlined absolute right-2 top-1.5 text-gray-400 pointer-events-none text-sm'>
                      expand_more
                    </span>
                  </div>
                </div>

                <div className='flex items-center'>
                  <span className='text-sm font-medium text-gray-700 mr-2'>
                    Optimizer:
                  </span>
                  <div className='relative'>
                    <select className='pl-3 pr-8 py-1.5 bg-white rounded-lg border border-gray-200 text-sm appearance-none cursor-pointer'>
                      <option>Adam (lr=0.001)</option>
                      <option>SGD (lr=0.01)</option>
                      <option>RMSprop (lr=0.001)</option>
                    </select>
                    <span className='material-symbols-outlined absolute right-2 top-1.5 text-gray-400 pointer-events-none text-sm'>
                      expand_more
                    </span>
                  </div>
                </div>

                <div className='flex items-center'>
                  <span className='text-sm font-medium text-gray-700 mr-2'>
                    Loss:
                  </span>
                  <div className='relative'>
                    <select className='pl-3 pr-8 py-1.5 bg-white rounded-lg border border-gray-200 text-sm appearance-none cursor-pointer'>
                      <option>Categorical Crossentropy</option>
                      <option>Binary Crossentropy</option>
                      <option>Mean Squared Error</option>
                    </select>
                    <span className='material-symbols-outlined absolute right-2 top-1.5 text-gray-400 pointer-events-none text-sm'>
                      expand_more
                    </span>
                  </div>
                </div>
              </div>

              <div className='flex space-x-3'>
                <button className='px-4 py-2 bg-white border border-gray-200 rounded-xl text-gray-700 hover:bg-gray-50 transition-all duration-300 shadow-sm hover:shadow flex items-center gap-2 transform hover:-translate-y-0.5'>
                  <span className='material-symbols-outlined text-gray-500'>
                    file_download
                  </span>
                  Export
                </button>

                <button className='px-5 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl text-white hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-xl flex items-center gap-2 transform hover:-translate-y-0.5'>
                  <span className='material-symbols-outlined'>play_arrow</span>
                  Train Model
                </button>
              </div>
            </div>
          </div>

          <div className='w-[300px] bg-white/80 backdrop-blur-md shadow-lg rounded-l-xl p-4 flex flex-col'>
            <h3 className='text-lg font-semibold text-gray-800 mb-4 border-b border-gray-100 pb-3 flex items-center gap-2'>
              <span className='material-symbols-outlined text-indigo-500'>
                tune
              </span>
              Configuration
            </h3>

            <div className='overflow-y-auto flex-1'>
              <details className='mb-3' open>
                <summary className='font-medium text-gray-700 mb-2 flex items-center justify-between cursor-pointer hover:text-indigo-600 transition-colors'>
                  <span className='flex items-center gap-2'>
                    <span className='material-symbols-outlined text-indigo-500 text-sm'>
                      input
                    </span>
                    Input Layer
                  </span>
                  <span className='material-symbols-outlined text-sm text-gray-400'>
                    expand_more
                  </span>
                </summary>
                <div className='pl-6 pr-2 pt-2 pb-1 bg-indigo-50/50 rounded-lg mb-2'>
                  <div className='mb-3'>
                    <label className='block text-xs font-medium text-gray-600 mb-1'>
                      Input Shape
                    </label>
                    <input
                      type='text'
                      className='w-full p-2 bg-white rounded border border-gray-200 text-sm'
                      value='784'
                    />
                  </div>
                  <div className='mb-2'>
                    <label className='block text-xs font-medium text-gray-600 mb-1'>
                      Batch Size
                    </label>
                    <input
                      type='text'
                      className='w-full p-2 bg-white rounded border border-gray-200 text-sm'
                      value='32'
                    />
                  </div>
                </div>
              </details>

              <details className='mb-3' open>
                <summary className='font-medium text-gray-700 mb-2 flex items-center justify-between cursor-pointer hover:text-indigo-600 transition-colors'>
                  <span className='flex items-center gap-2'>
                    <span className='material-symbols-outlined text-indigo-500 text-sm'>
                      layers
                    </span>
                    Dense Layer
                  </span>
                  <span className='material-symbols-outlined text-sm text-gray-400'>
                    expand_more
                  </span>
                </summary>
                <div className='pl-6 pr-2 pt-2 pb-1 bg-indigo-50/50 rounded-lg mb-2'>
                  <div className='mb-3'>
                    <label className='block text-xs font-medium text-gray-600 mb-1'>
                      Units
                    </label>
                    <input
                      type='number'
                      className='w-full p-2 bg-white rounded border border-gray-200 text-sm'
                      value='128'
                    />
                  </div>
                  <div className='mb-3'>
                    <label className='block text-xs font-medium text-gray-600 mb-1'>
                      Activation
                    </label>
                    <select className='w-full p-2 bg-white rounded border border-gray-200 text-sm'>
                      <option>ReLU</option>
                      <option>Sigmoid</option>
                      <option>Tanh</option>
                      <option>Linear</option>
                    </select>
                  </div>
                  <div className='mb-2'>
                    <label className='block text-xs font-medium text-gray-600 mb-1'>
                      Use Bias
                    </label>
                    <div className='flex items-center'>
                      <input
                        type='checkbox'
                        className='w-4 h-4 text-indigo-600 rounded'
                        checked
                      />
                      <span className='ml-2 text-sm text-gray-600'>
                        Enable bias term
                      </span>
                    </div>
                  </div>
                </div>
              </details>

              <details className='mb-3'></details>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default App
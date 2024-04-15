import React from 'react'

const Main = () => {
  return (
   <main>
    <div id="hero" className='min-h-screen bg-gradient-to-b from-purple-50 via-orange-50 to transparent px-4'> 
    <div id="hero-container" className='max-w-4xl mx-auto  pb-32 pt-6 flex flex-col sm:items-center sm:text-center sm:pt-12 '>
      <div id="version-text " className='flex items-center my-6 gap-2 border border-yellow-300 bg-yellow-50 rounded-lg px-3 py-1 w-fit shadow-md hover:shadow-lg hover:-translate-y-1 transition '>
        <div className="w-2 h-2 bg-yellow-400 rounded-full border border-yellow-600"></div>
        <p className='  '>v0.21.1: <span>Find-in-page bug fixes</span></p>

        <i class="ri-arrow-right-line text-yellow-600 group-hover:translate-x-1"></i>
      </div>



      <div id="hero-feature" className=' justify-center  text-gray-500 gap-6 my-6 hidden sm:flex'>
      <div className='flex justify-center gap-2 items-center text-gray'  >
      <i class="ri-file-chart-fill"></i>
      <p>Code Optional</p>
      </div>
      <div className='flex justify-center gap-2 items-center text-gray' >
      <i class="ri-file-chart-fill"></i>
      <p>Code Optional</p>
      </div>
      <div  className='flex justify-center gap-2 items-center text-gray'>
      <i class="ri-file-chart-fill"></i>
      <p>Code Optional</p>
      </div>
      
      </div>
      
    <h1 className='text-4xl sm:text-7xl  font-semibold leading-snug mt-8'>
        Web app to desktop app in minutes 
    </h1>

   <p className='text-xl mt-8 sm:text-2xl sm:mt-6 text-gray-800'>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto neque voluptates reiciendis deleniti laborum, mollitia quaerat veritatis eligendi unde. Reiciendis.
   </p>
   <div id="buttons-container" className='mt-12 flex flex-col sm:flex-row  gap-4'>
    <button className='px-3 py-4 rounded-lg text-white font-semibold rounded-lg text-white bg-primary shadow-sm  border border-2 hover:border-gray-800' >Download now</button>
    <button className='px-3 py-4 rounded-lg text-white font-semibold rounded-lg text-black bg-gray-500 border bottom-2  shadow-sm  hover:border-gray-800'>Read Docs</button>
   </div>
    </div>
    </div>
   </main>
  ) 
}

export default Main
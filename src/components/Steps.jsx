import React from 'react'
import assest66 from '../assest/asset 66.svg'
const Steps = () => {
  return (
   <div id="steps" className='container'>

    <h2 className='text-5xl sm:font-semibold mb-14'>
        How it work

    </h2>

    <div id="step1" className='rounded-xl border px-8 py-12 flex flex-col lg:flex-row '>

        <div className="section1 flex flex-col gap-6  lg:w-1/2 ">
        <span className=' mb-4 px-2 py-1 border rounded-md w-fit border border-yellow-300 text-yellow-800 rounded-lg font-medium font-display bg-yellow-50' >
    Step1
 </span>
 <h1 className='mb-4 text-4xl '>
    Bootstrap straight from your web app
 </h1 >
 <p className='font-light mb-4 text-lg '>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. At aliquid magni vel deserunt, quod aut in cum quasi!
 </p>
<ul className='grid grid-cols-2 gap-2'>
    <li className='flex  gap-4 '>
    <i class="ri-check-line"></i>
    <a href="/">Multiple windowa</a>
    </li>
    <li className='flex gap-4'>
    <i class="ri-check-line"></i>
    <a href="/">Multiple windowa</a>
    </li>
    <li className='flex gap-4'>
    <i class="ri-check-line"></i>
    <a href="/">Multiple windowa</a>
    </li>
    <li className='flex gap-4'>
    <i class="ri-check-line"></i>
    <a href="/">Multiple windowa</a>
    </li>
    <li className='flex gap-4'>
    <i class="ri-check-line"></i>
    <a href="/">Multiple windowa</a>
    </li>
    <li className='flex gap-4'>
    <i class="ri-check-line"></i>
    <a href="/">Multiple windowa</a>
    </li>

</ul>
        </div>



<div className='pt-4'>
    <img src={assest66} alt="" />
</div>



    </div>

   </div>
  )
}

export default Steps
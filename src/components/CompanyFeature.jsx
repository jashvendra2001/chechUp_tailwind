import React from 'react'
import assest44 from '../assest/asset 44.svg'
import assest45 from '../assest/asset 45.jpeg'
import assest46 from '../assest/asset 46.png'
import CompanyCards from './CompanyCards'


const CompanyFeature = () => {
  return (
    <div id="testimonial" className='container'>
        <h2 className="text-5xl sm:font-semibold mb-14">
         Customer stories
        </h2>
        <div className="rounded-xl border flex flex-col lg:flex-row item-end">
   <div id="left" className='flex flex-col gap-12 p-8'>

    <div className="clickup h-4 w-fit">
        <img src={assest44} alt="logo" />
        </div>
        <h3 className='text-xl leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eligendi ex maxime ut fugit repudiandae.</h3>
    <div className="tagcontainer flex gap-3 flex-wrap ">

       <div className="flex gap-2 items-center justify-center bg-yellow-50 w-fit border border-yellow-300 px-3 py-1 rounded-medium text-yellow-800">

       <i class="ri-check-line"></i>
       <span className='font-display'>Chrome U
       I</span>
        </div> 
        <div className="flex gap-2 items-center justify-center bg-yellow-50 w-fit border border-yellow-300 px-3 py-1 rounded-medium text-yellow-800">

<i class="ri-check-line"></i>
<span className='font-display'>Chrome U
I</span>
 </div> 
 <div className="flex gap-2 items-center justify-center bg-yellow-50 w-fit border border-yellow-300 px-3 py-1 rounded-medium text-yellow-800">

<i class="ri-check-line"></i>
<span className='font-display'>Chrome U
I</span>
 </div> 
 <div className="flex gap-2 items-center justify-center bg-yellow-50 w-fit border border-yellow-300 px-3 py-1 rounded-medium text-yellow-800">

<i class="ri-check-line"></i>
<span className='font-display'>Chrome U
I</span>
 </div> 
 <div className="flex gap-2 items-center justify-center bg-yellow-50 w-fit border border-yellow-300 px-3 py-1 rounded-medium text-yellow-800">

<i class="ri-check-line"></i>
<span className='font-display'>Chrome U
I</span>
 </div> 


    </div>

    <p className='text-lg font-light text-gray-400' >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, dicta quas perspiciatis fugit sunt quae nostrum provident incidunt sit maiores odio ipsam! Asperiores beatae minima praesentium laborum voluptatem voluptatibus optio.</p>

    <div id="user-card" className='flex gap-2 '>
        <div className="w-12   ">
            
            <img className='rounded-full'  src={assest45} alt="" />
            </div>
            <div className="detail-card ">
                <h3  className='font-dark '>Jashvendra Singh Chauhan</h3>
                <p className='text-gray-500'>Founder & CEO,ClickUp</p>
            </div>
        

    </div>



   </div>
   <div id="right " className='p-3'>
    <img src={assest46} alt="" />
   </div>



        </div>

<CompanyCards/>
    </div>
  )
}

export default CompanyFeature
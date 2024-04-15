import React,{useState} from 'react'
import assest0 from "../assest/asset 0.png"
const MobileMenu = (props) => {

    
  return (
    <div className="mobile-menu fixed bg-white inset-0 p-3 ">
    <div className="nav-bar  flex justify-between ">
    <a href="/" id="brand" className='flex gap-2 items-center' >
            <img  className=" object-cover max-w-12 "  src={assest0} alt="" />
            <span className='text-lg font-display font-medium'>ToDesktop</span>
        </a>
    
    
        <button onClick={props.handleClick}  >
        <i class="ri-twitter-x-line"></i>
    
    </button>
    
    
    </div>
    
    <div className="mt-6 hover:bg-gray-500 p-2 ">
        <a href="/" className='font-medium hover:text-primary mr-11 '>Pricing</a>
    
    </div>
    <div className="mt-6 hover:bg-gray-500 p-2 ">
        <a href="/" className='font-medium hover:text-primary mr-11 '>About</a>
    
    </div>
    <div className="mt-6 hover:bg-gray-500 p-2 ">
        <a href="/" className='font-medium hover:text-primary mr-11 '>Contact</a>
    
    </div>
    <div className="mt-6 hover:bg-gray-500 p-2 ">
        <a href="/" className='font-medium hover:text-primary mr-11 '>Career</a>
    
    </div>
    
    </div>
  )
}

export default MobileMenu
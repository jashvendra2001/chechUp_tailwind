import React from 'react'
import menu from "../assest/menu-line.png"
import assest0 from "../assest/asset 0.png"
import assest1 from "../assest/asset 1.svg"
import { useRef,useState } from 'react';
import MobileMenu from './MobileMenu';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const[mobile,setMobileMenu]=useState(true);

    

    const handleMenu=()=>{
    setMobileMenu(!mobile);

    }
  return (

    <>
    
    {
        mobile?
    
    <nav className=' bg-white flex justify-between items-center py-4 sticky top-0 w-[100%] mx-auto px-4'>
    <Link to="/" id="brand" className='flex gap-2 items-center ' >
        <img  className=" object-cover max-w-12 "  src={assest0} alt="" />
        <span className='text-lg font-display font-medium'>ToDesktop</span>
    </Link>


    <div id="nav-menu  " className='hidden md:flex gap:12'>
    
    <Link className='mr-2' to={"/about"}> About</Link>
    <Link className='mr-2' to={"/contact"}> Contact</Link>
    <Link  to={"/career"}> Career</Link>
    </div>

 <button className='hidden   md:flex gap-2 items-center border border-gray-400  px-6 py-2 hover:border-gray-600 '>
    <img src={assest1} alt="" />
    Electron Developer
    &rarr;
 </button>
<button onClick={handleMenu} className='md:hidden' >
<img className='text-grey-600 p-2' src={menu} alt="" />
</button>



    </nav>
    :
  <MobileMenu handleClick={handleMenu}/>
}
    </>
  )
}

export default Navbar
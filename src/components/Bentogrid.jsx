import React from 'react'
import assest37 from '../assest/asset 37.png'
const Bentogrid = () => {
  return (
    <div id="bento-grid" className='container'>
       <h2 className='text-5xl sm:font-semibold mb-14'>
        ToDesktop handles the details
       </h2>
        
        <div id="grid-container" className='flex flex-col gap-6 lg:grid lg:grid-cols-3' style={{ gridAutoRows: '96px' }}>
        <div className=" row-start-1 row-end-3 group rounded-2xl p-[1px] bg-slate-100 hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-yellow-200 hover:to-yellow-200 ">
            <div className="rounded-2xl  w-full h-full p-6 flex flex-col item center text-center  group-hover:bg-gradient-to-br group-hover:from-red-50 group- hover:via-purple-yellow-50 hover:to-yellow-50 gradient-hover-inner ">
                <h3 className='text-2xl'>
                    Native Notification
                </h3>
                <img src={assest37} alt="" />
            </div>

        </div>
        <div className="row-start-1 row-end-4 group rounded-2xl p-[1px] bg-slate-100 hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-yellow-200 hover:to-yellow-200">
            <div className="rounded-2xl  w-full h-full p-6 flex flex-col item center text-center  group-hover:bg-gradient-to-br group-hover:from-red-50 group- hover:via-purple-yellow-50 hover:to-yellow-50 lg:justify-center gradient-hover-inner ">
                
                
                <h3 className='text-2xl'>
                    Native Notification
                </h3>
                <p className='text-lg text-center front-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias alias ipsum ?</p>
                <img src={assest37} alt="" />
            </div>

        </div>
        <div className="row-start-1 row-end-3 group rounded-2xl p-[1px] bg-slate-100 hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-yellow-200 hover:to-yellow-200">
            <div className="rounded-2xl  w-full h-full p-6 flex flex-col item center text-center  group-hover:bg-gradient-to-br group-hover:from-red-50 group- hover:via-purple-yellow-50 hover:to-yellow-50 gradient-hover-inner ">
                <h3 className='text-2xl'>
                    Native Notification
                </h3>
                <img src={assest37} alt="" />
            </div>

        </div>
        <div className=" row-start-3 row-end-6  group rounded-2xl p-[1px] bg-slate-100 hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-yellow-200 hover:to-yellow-200">
            <div className="rounded-2xl  w-full h-full p-6 flex flex-col item center text-center  group-hover:bg-gradient-to-br group-hover:from-red-50 group- hover:via-purple-yellow-50 hover:to-yellow-50 lg:justify-center gradient-hover-inner">
                <h3 className='text-2xl'>
                    Native Notification
                </h3>
                <p className='text-lg text-center front-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias alias ipsum ?</p>

                <img src={assest37} alt="" />
            </div>

        </div>
        <div className=" row-start-4 row-end-6  group rounded-2xl p-[1px] bg-slate-100 hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-yellow-200 hover:to-yellow-200">
            <div className="rounded-2xl  w-full h-full p-6 flex flex-col item center text-center  group-hover:bg-gradient-to-br group-hover:from-red-50 group- hover:via-purple-yellow-50 hover:to-yellow-50 ">
                <h3 className='text-2xl'>
                    Native Notification
                </h3>
                <img src={assest37} alt="" />
            </div>

        </div>
        <div className="row-start-3 row-end-6  group rounded-2xl p-[1px] bg-slate-100 hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-yellow-200 hover:to-yellow-200">
            <div className="rounded-2xl  w-full h-full p-6 flex flex-col item center text-center  group-hover:bg-gradient-to-br group-hover:from-red-50 group- hover:via-purple-yellow-50 hover:to-yellow-50 lg:justify-center ">
                <h3 className='text-2xl'>
                    Native Notification
                </h3>
                <p className='text-lg text-center front-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias alias ipsum ?</p>

                <img src={assest37} alt="" />
            </div>

        </div>
        </div>

        </div>
  )
}

export default Bentogrid
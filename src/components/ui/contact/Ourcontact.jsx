import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";

function Ourcontact() {
    return (
        <section className='bg-white'>
           <div  className='p-4 mt-[64px] flex justify-center  text-[#0C6967]  w[400px] leading-[1.2] align-middle'>
            <h2  className='font-[Allura] text-4xl' > Our Contact</h2>
           </div>
           <div >
            <h2 className='text-[#6B788E] flex justify-center mt-[16px]'>GET IN TOUCH </h2>
            <p className='flex justify-center font-bold'> <span className='text-[#D95103]'> Our Friendly Team </span>would love to hear from you</p>
           </div>

           <div className='flex  mt-4  ml-40'> 
            <div className='   w-90 ml-40  gap-[40px]   mt-2    rounded-[16px]   z-10 shadow-md  ' >
            <h1 className=' flex p-[40px]  gap-0.5'> <span className='  p-1 text-orange-600'>{<FaLocationDot />}</span><span className=' text-[#101828]  font-semibold  font-[Inter]' >Location</span></h1>
            <p  className='p-2 text-center -mt-2 font-[Inter] italic font-semibold'> New Baneshwor -41201, Kathmandu, Bagmati, Nepal</p>
           </div>

             <div className='  ml-40  gap-[40px] opacity-100  mt-2   h-[233px] w-90  rounded-[16px]  relative z-10 shadow-md  ' >
            <h1 className=' flex p-[40px]  gap-0.5'> <span className='  p-1 text-orange-600'>{<FaPhoneVolume />}</span><span className=' ml-2 text-[#101828]  font-semibold  font-[Inter]' >Mobile</span></h1>
            <h2 className='text-[#0C6967] font-bold p-2 ml-10' >Mobile: <span className='ml-10 relative text-black '>  (+977) 980 5689789 <br/> <span className='ml-25'> (+977) 9841 275897</span> </span> </h2>
            <h2 className='text-[#0C6967] font-bold p-2 ml-10' >Tel: <span className='ml-19 relative text-black '> 01-4783972 </span> </h2>
           </div>


           <div className='  ml-40  gap-[40px] opacity-100  mt-2   h-[233px] w-90  rounded-[16px]  relative z-10 shadow-md  ' >
            <h1 className=' flex p-[40px]  gap-0.5'> <span className='  p-1 text-orange-600'>{<FaClock  />}</span><span className='ml-2 text-[#101828]  font-semibold  font-[Inter]' >Service Time</span></h1>
             <h2 className='text-[#0C6967] font-bold p-2 ml-10' >MON-FRI: <span className='ml-10 relative text-black '> 8 am - 8pm  </span> </h2>
            <h2 className='text-[#0C6967] font-bold p-2 ml-10' >SAT-SUN: <span className='ml-10 relative text-black '>  Closed  </span> </h2>
            
           </div>

           </div>
           
           
        </section>
    )
}

export default Ourcontact

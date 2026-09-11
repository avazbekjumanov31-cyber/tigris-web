import React from 'react'
import { BsHandbag } from "react-icons/bs";
import { CiCirclePlus } from "react-icons/ci";
import imgg from "../../assets/tigris.png";
function Navbar() {
  return (
    <>
    <div className='relative w-full h-screen'>
     <img src={imgg} alt="Tigris" />
      <div className='absolute top-0   left-7 text-5xl text-white  flex'>
       <h1  className='cursor-pointer font-semibold mt-2'>TIGRIS</h1>
       <BsHandbag className='ml-300 mt-4'/>
       <CiCirclePlus className='text-7xl ml-7 mt-2'/>
      </div>
      <div className='absolute top-30'>
        <h1 className='left-7 text-8xl text-white gap-0 text-8xl scale-x-75 origin-left font-bold ml-80'>BOUNDLESS ENERGY,</h1>
        <div className='flex '><button className='ml-100 p-3 pl-20 pr-20 text-2xl scale-x-75 origin-left font-bold text-white bg-black rounded-4xl hover:bg-white hover:text-black'>SHOP</button>
        <h1 className='left-7 text-8xl text-white gap-0 text-8xl scale-x-75 origin-left font-bold'>LIMITLESS YOU.</h1></div>
      </div>
    </div>
    
    </>
  )
}

export default Navbar
import React from 'react'
import { TbInfinity } from "react-icons/tb";
function Footer() {
  return (
    <>
     <div className='bg-green-950 h-60 text-white font-bold flex justify-around gap-100'>
      <div>
          <img className='w-50' src="https://cdn.prod.website-files.com/66ae6d5d335aaf4dfce34142/66b50b6f5aa3ae6e80a0c19e_Frame%201034.avif" alt="" />
          <p className='mt-3'>Energize your life, the Tigris way</p>

          <div className='flex gap-10 mt-5'>
            <button className='border w-12 h-12 rounded-full cursor-pointer'>CS</button>
            <button className='border w-12 h-12 rounded-full cursor-pointer'><TbInfinity className='ml-4 '/></button>
            <button className='border w-12 h-12 rounded-full cursor-pointer'>IT</button>
          </div>
          <p className='mt-10'>Powered by Webflow</p>
      </div>
      <div className='flex gap-10 '>
 
 <div >
        <h1 className='text-2xl'>Pages</h1>
        <ul className='mt-5 cursor-pointer'>
          <li className='mt-2'>Home</li>
          <li className='mt-2'>Flavors</li>
          <li className='mt-2'>Contact</li>
        </ul>
      </div>
      <div>
        <h1 className='text-2xl'>CMS</h1>
        <ul className='mt-5 cursor-pointer'>
          <li className='mt-2'>Product Page</li>
          <li className='mt-2'>Product Categories</li>
          <li className='mt-2'>Mixes</li>
        </ul>
      </div>
       <div>
        <h1 className='text-2xl'>Admin</h1>
        <ul className='mt-5 cursor-pointer'>
          <li className='mt-2'>Style Guide</li>
          <li className='mt-2'>Licenses</li>
          <li className='mt-2'>Changelog</li>
        </ul>
      </div>
      </div>
      

    </div>
    </>
   
  )
}

export default Footer
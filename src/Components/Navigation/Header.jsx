import React from 'react'
import { MdOutlineLiveHelp } from "react-icons/md";
import { PiBellRingingBold } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import { IoIosSearch } from "react-icons/io";

function Header() {
  return (
    <div className='w-full border-b border-purple-200 h-20 flex items-center justify-center'>
        <div className='w-11/12 flex flex-row justify-between gap-4 mx-auto p-2'>

        {/* <div className='text-center justify-center text-3xl font-semibold text-purple-800'>
          CrackIt
        </div> */}
        
        <div className='flex items-center  gap-4 bg-gray-200  rounded-3xl px-6  w-96 py-3'>
          <span className='text-xl text-gray-600'><IoIosSearch /></span>
          <input type="text" placeholder='search for any topic' className='text-base  outline-none placeholder:text-gray-400' />
        </div>

        <div className='items-center justify-center flex flex-row gap-3'> 
          <div className='text-center text-xl text-white bg-purple-500 w-fit h-fit rounded-full p-2'><PiBellRingingBold /></div>
        
          <div className='flex items-center  justify-center text-white gap-2 bg-purple-500 p-2  px-4 rounded-full'><span><MdOutlineLiveHelp /></span>Get help</div>

          <div>
            <div className='text-xl bg-purple-500 text-white w-fit h-fit rounded-full p-2 '><CgProfile /></div>
          </div>
          </div>
        </div>

    </div>
  )
}

export default Header


import { useState, useEffect, useRef } from 'react';
import BannerImage from '../assets/crackit1.jpeg'

import { Routes, Route, useLocation , Link} from 'react-router-dom';

import { IoMdArrowDropdown } from "react-icons/io"; 

function LandingPage() {
  const [showStudyToolsDropdown, setShowStudyToolsDropDown] = useState(false);

  return (
    <div className='w-full h-lvh'>
        <div className='flex items-center justify-center py-4 border-b-2 border-gray-100 bg-purple-300'>
          <div className='w-10/12 flex justify-between items-center mx-auto'>
            <div className='text-3xl font-semibold text-purple-700'>CrackIt</div>

            <div className='flex w-3/16 justify-between'>
              
              <div className="relative">
                <div
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={() => setShowStudyToolsDropDown(!showStudyToolsDropdown)}
                >
                  Study tools
                  <span className="text-xl"><IoMdArrowDropdown /></span>
                </div>

                {showStudyToolsDropdown && (
                  <div className="absolute top-full mt-2 w-40 bg-white border rounded shadow-md z-10">
                    <ul className="text-sm">
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Flashcards</li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Mock Tests</li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Boosters</li>
                    </ul>
                  </div>
                )}
              </div>

              <div className='relative'>
                <div className='flex items-center gap-2 cursor-pointer'>Faculty<span className='text-xl'><IoMdArrowDropdown/></span></div>

              </div>
            </div>

            <div className='flex justify-between w-3/20'>
            <Link to={"/login"}>

              <button className='w-fit h-fit rounded-2xl p-2 border-1 border-gray-500 bg-white hover:bg-gray-300 hover:text-white cursor-pointer'>Login</button>
            </Link>
            <Link to={'/SignUp'}>
              <button className='w-fit h-fit rounded-2xl p-2 border-1 bg-purple-500 text-white hover:bg-purple-700 cursor-pointer'>Sign Up</button>
            </Link>
            </div>
          </div>
        </div>

     
        <div className="relative w-full h-screen">
          <img
            src={BannerImage}
            alt="banner"
            className="absolute inset-0 w-full h-full object-cover opacity-80"
          />

          <div className="absolute inset-0 flex flex-col gap-4 items-center justify-center mb-20 text-center text-black px-4 ">
            <h1 className="text-5xl font-bold mb-4">Turn your prep into power</h1>
            <p className="text-xl mb-4">with flashcards, mock tests, and study boosters</p>
            <p className="text-lg mb-6 italic">"Crack every exam with confidence"</p>
           <Link to={"/SignUpForm"}>
            <button className="bg-purple-600 hover:bg-purple-900 cursor-pointer text-white px-6 py-2 rounded-2xl text-lg">Get started</button>
           </Link>
          </div>
        </div>
      </div>
  )
}

export default LandingPage

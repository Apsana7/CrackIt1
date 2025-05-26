import { useState, useEffect, useRef } from 'react';
import BannerImage from '../assets/crackit1.jpeg';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import { IoMdArrowDropdown } from "react-icons/io";

function LandingPage() {
  const [showStudyToolsDropdown, setShowStudyToolsDropDown] = useState(false);
  const [showFacultyDropdown, setShowFacultyDropdown] = useState(false);

  const facultyRef = useRef(null);
  const studyToolsRef = useRef(null);


  useEffect(() => {
    function handleClickOutside(event) {
      if (facultyRef.current && !facultyRef.current.contains(event.target)) {
        setShowFacultyDropdown(false);
      }
      if (studyToolsRef.current && !studyToolsRef.current.contains(event.target)) {
        setShowStudyToolsDropDown(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='w-full h-lvh'>
      <div className='flex  fixed top-4 w-10/12 px-5 right-0 left-0 mx-auto z-10 items-center justify-center py-6 rounded-md border-b-2 border-gray-100 bg-purple-100'>
        <div className='w-full  flex justify-between items-center mx-auto'>
          <div className='text-3xl font-semibold text-purple-700'>CrackIt</div>

          <div className='flex w-3/16 justify-between gap-6'>
        
            <div className="relative" ref={studyToolsRef}>
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => setShowStudyToolsDropDown(prev => !prev)}
              >
                Study tools
                <span className="text-xl"><IoMdArrowDropdown /></span>
              </div>

              {showStudyToolsDropdown && (
                <div className="absolute top-full mt-2 w-40 bg-white border rounded shadow-md z-10">
                  <ul className="text-sm">
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Quiz</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Flashcards</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Ask Ai</li>
                  </ul>
                </div>
              )}
            </div>

           
            <div className='relative' ref={facultyRef}>
              <div
                className='flex items-center gap-2 cursor-pointer text-lg font-medium'
                onClick={() => setShowFacultyDropdown(prev => !prev)}
              >
                Faculty
                <span className='text-xl'><IoMdArrowDropdown /></span>
              </div>

              {showFacultyDropdown && (
                <div className="absolute top-full mt-2 w-40 bg-white border rounded shadow-md z-10">
                  <ul className="text-sm">
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">IOE</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">IOM</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">IAAS</li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          <div className='flex gap-4'>
            <Link to={"/login"}>
              <button className='w-fit h-12 overflow-clip rounded-2xl px-10 border border-purple-500 bg-transparent  group hover:bg-purple-600 hover:text-white transition-all duration-1000 delay-75 ease-in-out text-purple-500 cursor-pointer'>
                <div className='translate-y-3 group-hover:-translate-y-96 transition-all duration-1000 delay-75 ease-in-out'>Login</div>
                <div className='translate-y-96 group-hover:-translate-y-3 transition-all duration-700 delay-75 ease-in-out'>Logins</div>

                
              </button>
            </Link>
            <Link to={'/SignUp'}>
              <button className='w-fit h-fit rounded-2xl p-3 px-10 bg-purple-500 text-white hover:bg-purple-700 cursor-pointer'>
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </div>

   
      <div className="relative w-full h-full">
        <img
          src={BannerImage}
          alt="banner"
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 flex flex-col bg-black/30 gap-4 items-center justify-center  text-center text-black px-4">
          <h1 className="text-5xl font-bold mb-4">Turn your prep into power</h1>
          <p className="text-xl mb-4">with flashcards, mock tests, and study boosters</p>
          <p className="text-lg mb-6 italic">"Crack every exam with confidence"</p>
          <Link to={"/SignUp"}>
            <button className="bg-purple-600 hover:bg-purple-900 cursor-pointer text-white px-6 py-2 rounded-2xl text-lg">
              Get started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;

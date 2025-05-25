import React from 'react'
import { GiTeacher } from "react-icons/gi";
import { FcReadingEbook } from "react-icons/fc";
import { RiAdminFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import image from '../assets/crackit2.jpg'

function ChooseRole() {
  return (
    <div className='relative h-lvh w-full'>

      <img src={image} alt="" className='absolute top-0 left-0 w-full h-full object-cover' />

<<<<<<< HEAD
      <div className='absolute top-0 left-0 w-full h-full bg-opacity-60 flex items-center justify-center'>
=======
      <div className='absolute top-0 left-0 w-full h-full bg-opacity-60 flex items-center justify-center '>
>>>>>>> d489f9b7653f56ad4d8ed0a595da3765537316c9
        <div className='w-9/12 flex flex-col gap-10 mx-auto items-center justify-center'>

          <div className='flex flex-col items-center justify-center gap-4'>
            <div className='text-4xl font-bold text-purple-700'>CrackIt</div>
            <div className='text-2xl font-semibold text-white'>Please select your role</div>
          </div>

          <div className='grid grid-cols-3 gap-16'>
            <Link to="/SignUpForm">
              <div className='group flex flex-col gap-5 items-center border-2 py-8 px-12 rounded-2xl bg-white border-purple-500 cursor-pointer transform transition-transform duration-300 hover:scale-110'>
                <div className='text-6xl'><GiTeacher /></div>
                <div className='font-medium'>Teacher</div>
              </div>
            </Link>

            <Link to="/SignUpForm">
              <div className='group flex flex-col gap-5 items-center border-2 py-8 px-12 rounded-2xl bg-white border-purple-500 cursor-pointer transform transition-transform duration-300 hover:scale-110'>
                <div className='text-6xl'><FcReadingEbook /></div>
                <div className='font-medium'>Student</div>
              </div>
            </Link>

            <Link to="/SignUpForm">
              <div className='group flex flex-col gap-5 items-center border-2 py-8 px-12 rounded-2xl bg-white border-purple-500 cursor-pointer transform transition-transform duration-300 hover:scale-110'>
                <div className='text-6xl'><RiAdminFill /></div>
                <div className='font-medium'>Admin</div>
              </div>
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ChooseRole

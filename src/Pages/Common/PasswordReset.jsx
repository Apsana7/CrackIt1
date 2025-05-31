import React from 'react';
import image1 from '../../assets/forPass.png';
import image from '../../assets/crackit2.jpg'

function PasswordReset() {
  return (
    <div className='relative h-screen w-full'>
     
      <img
        src={image}
        alt="Background"
        className='absolute top-0 left-0 w-full h-full object-cover z-0'
      />
      
      
      <div className='absolute top-0 left-0 w-full h-full bg-opacity-60 flex items-center justify-center z-10 '>
        <div className='flex flex-col items-center justify-center gap-6 bg-white w-1/4 py-8 rounded-lg shadow-lg'>
          <div className='flex flex-col gap-2 items-center'>
            <div className="text-2xl font-bold text-purple-500">Forget Password</div>
          <div className="text-sm text-gray-500">Enter your email account to reset password</div>
          </div>
          <img src={image1} alt="" className='h-44 w-44 object-cover' />
          <input
            type="email"
            placeholder='Enter your email'
            className='px-4 py-2 border rounded-md w-9/12 border-gray-400'
          />
          <button className='bg-purple-500 cursor-pointer hover:bg-purple-700  text-white px-4 py-2 w-9/12 rounded-md'>Send Email</button>
          <div className='text-sm text-gray-600 cursor-pointer'>
            <span className="font-semibold text-blue-600">Logo</span> &nbsp;|&nbsp; Back to Login
          </div>
        </div>
      </div>
    </div>
  );
}

export default PasswordReset;

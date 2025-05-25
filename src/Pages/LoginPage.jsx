import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as yup from "yup"
import image from '../assets/crackit2.jpg'
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';


function LoginPage() {
  const Forms = [
    {
      name: "UserOrEmail", type: "text", placeholder: "Username / Email"
    },
    {
      name: "Password", type: "password", placeholder: "Password"
    },
  ]

  const schemas = yup.object().shape({
    UserOrEmail: yup.string().required("Username or Email is required"),
    Password: yup.string().min(8, "Password must have at least 8 characters").required("Password is required"),
  })

  return (
    <div className='relative h-lvh w-full'>

      <img src={image} alt="" className='absolute top-0 left-0 w-full h-full object-cover' />


      <div className='absolute top-0 left-0 w-full h-full bg-opacity-60 flex items-center justify-center'>

        <Formik
          initialValues={{ UserOrEmail: "", Password: "" }}
          validationSchema={schemas}
          onSubmit={(values) => {
            console.log(values)
          }}
        >
          <Form className='h-fit bg-white  w-3/12 flex items-center justify-center flex-col gap-4 p-4 py-8 shadow-lg rounded-xl'>

            <h1 className='text-purple-500 font-semibold text-3xl'>Welcome</h1>

            <div className='flex flex-col gap-8 w-10/12 mt-6'>
              {Forms.map((val, i) => (
                <div key={i} className='flex flex-col gap-3'>
                  <label className='font-medium text-sm'>{val.placeholder}</label>
                  <Field
                    className='bg-white w-full rounded-md p-2 py-3 outline-none border-2 border-gray-200  focus:border-0 focus:ring focus:ring-purple-900 placeholder:text-sm ' 
                    name={val.name}
                    type={val.type}
                    placeholder={val.placeholder}
                  />
                  <ErrorMessage name={val.name} component="div" className='text-red-600 text-sm' />
                </div>
              ))}
            </div>
            <div className='text-purple-500 cursor-pointer  text-sm  w-10/12 text-right'>Forget password?</div>

            <Link to={'/app'} className=' w-full flex items-center justify-center'>
              <button
                className='  text-white border-2 bg-purple-500  rounded-lg p-3 w-10/12 shadow-lg hover:bg-white hover:text-purple-500 transition-all duration-300 cursor-pointer hover:font-bold delay-75 ease-in-out'
                type="submit"
              >
                Log in
              </button>
            </Link>


            <div className="w-10/12 h-[1px] bg-black mt-4 relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-sm">
                or
              </div>
            </div>



            <div className='flex gap-4 text-2xl cursor-pointer'>
              <div className='text-blue-700'><FaFacebook /></div>
              <div><FaApple /></div>
              <div><FcGoogle /></div>
            </div>


            <Link to={"/SignUp"}>

              <div className='mt-8 flex gap-3'>Don't have an account? <span className='underline text-purple-600 cursor-pointer'>Sign Up</span></div>
            </Link>





          </Form>
        </Formik>
      </div>
    </div>
  )
}

export default LoginPage

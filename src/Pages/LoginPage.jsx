import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as yup from "yup"
import image from '../assets/crackit2.jpg'
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link} from 'react-router-dom';


function LoginPage() {
  const Forms = [
    {
      name: "UserOrEmail", type: "text", placeholder: "Username or Email"
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
          <Form className='h-fit bg-white border-purple-600 border-2 w-11/12 sm:w-8/12 md:w-6/12 lg:w-4/12 xl:w-3/12 flex items-center justify-center flex-col gap-4 p-4 py-8 shadow-lg rounded-xl'>


            <h1 className='text-black font-medium text-3xl sm:text-4xl md:text-5xl'>Welcome</h1>

            <div className='flex flex-col gap-3 w-10/12 mt-6'>
              {Forms.map((val, i) => (
                <div key={i} className='flex flex-col gap-1'>
                  <label className='font-medium'>{val.placeholder}</label>
                  <Field
                    className='bg-white w-full rounded-md p-2 py-3 outline-none border-2 border-purple-600  focus:ring-2 focus:ring-purple-900'
                    name={val.name}
                    type={val.type}
                    placeholder={val.placeholder}
                  />
                  <ErrorMessage name={val.name} component="div" className='text-red-600 text-sm' />
                </div>
              ))}
            </div>
            <div className='text-red-700 cursor-pointer  w-10/12 text-right'>Forgot password?</div>
          
          
            <button
              className='bg-white  text-black border-2 border-purple-500  rounded-lg p-3 w-10/12 shadow-lg hover:bg-purple-400 hover:text-white transition'
              type="submit"
            >
              <Link to={'/app'}>
              Log in
              </Link>
            </button>
          
           


            <div className="w-10/12 h-[1px] bg-gray-600 mt-4 relative">
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

            <div className='mt-8 flex gap-3'>Don't have an account? <span className='underline text-purple-600 cursor-pointer'>Sing Up</span></div>
              </Link>





          </Form>
        </Formik>
      </div>
    </div>
  )
}

export default LoginPage

import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as yup from "yup"
import image from '../assets/crackit2.jpg'


const SignUpPage = () => {
    const Forms = [
        { name: "Username", type: "text", placeholder: "Username" },
        { name: "Email", type: "text", placeholder: "Email" },
        { name: "Password", type: "password", placeholder: "Password" },
        { name: "ConfirmPassword", type: "password", placeholder: "Confirm Password" }
    ];

    const schemas = yup.object().shape({
        Username: yup.string().required("Username is required"),
        Email: yup.string().email("Please provide a valid email").required("Email is required"),
        Password: yup.string().min(8, "Password must have at least 8 characters").required("Password is required"),
        ConfirmPassword: yup.string()
            .oneOf([yup.ref('Password')], "Passwords must match")
            .required("Confirm Password is required")
    });

    return (
        <div className='relative h-lvh w-full'>
            <img src={image} alt="" className='absolute top-0 left-0 w-full h-full object-cover' />
            
               <div className='absolute top-0 left-0 w-full h-full bg-opacity-60 flex items-center justify-center'>

            <Formik
                initialValues={{ Username: "", Email: "", Password: "", ConfirmPassword: "" }}
                validationSchema={schemas}
                onSubmit={(values) => console.log(values)}
            >
                <Form className='bg-white w-3/12 flex flex-col gap-6 p-6 shadow-lg rounded-xl border-2 border-purple-500'>

                    <h1 className=' font-bold text-3xl text-center text-purple-700'>CrackIt</h1>

                    <div className='flex flex-col gap-4'>
                        {Forms.map((val, i) => (
                            <div key={i} className='flex flex-col'>
                                <Field
                                    className='bg-gray-100 rounded-md p-3 outline-none focus:ring-2 focus:ring-purple-900 border-2 border-purple-500'
                                    name={val.name}
                                    type={val.type}
                                    placeholder={val.placeholder}
                                />
                                <ErrorMessage name={val.name} component="div" className='text-red-600 text-sm mt-1' />
                            </div>
                        ))}
                    </div>

                  
                     <div className='flex  gap-2'>
                        <Field type="checkbox" name="Terms" className="mt-1" />
                        <p className='text-sm'>
                            By signing up, you agree to Crackit's <span className='text-purple-700 underline'>Terms of Service</span> and <span className='text-purple-700 underline'>Privacy Policy</span>.
                        </p>
                    </div>
                    <ErrorMessage name="Terms" component="div" className='text-red-600 text-sm -mt-4 mb-2' />

                    <button
                        type="submit"
                        className='bg-purple-500 text-black rounded-lg py-3 w-full shadow-md hover:bg-purple-900 hover:text-white transition duration-300'
                    >
                        Sign Up
                    </button>

                </Form>
            </Formik>
        </div>
        </div>
        
    );
};

export default SignUpPage;

import React, { useState } from 'react';
import Header from './Header';

const Login = () => {
  const [IsSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!IsSignInForm);
  }

  return (
    <>
    <div>
      <Header/>
      <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/c7f07b68-7989-4ff7-a31e-11c17dcc2fea/fcf685b8-3f9f-42d8-9af3-4bb86fa5a3b8/IN-en-20240422-popsignuptwoweeks-perspective_alpha_website_large.jpg' 
            alt='background' />
      </div>
      <form className='w-4/12 absolute p-12 bg-black my-24 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
        <h1 className='font-bold text-3xl py-2'>{IsSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!IsSignInForm && (
          <input
          type='text'
          placeholder='Full Name'
          className='p-4 my-4 w-full bg-black bg-opacity-10 border-2 border-gray-500 rounded'
          />
        )}
        <input
          type='text'
          placeholder='Email Address'
          className='p-4 my-4 w-full bg-black bg-opacity-10 border-2 border-gray-500 rounded'
        />
        <input  
          type='password'
          placeholder='Password'
          className='p-4 my-4 w-full bg-black bg-opacity-10 border-2 border-gray-500 rounded'
        />
        <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>{IsSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className='py-6 cursor-pointer' onClick={toggleSignInForm}>{IsSignInForm ? "New to Netflix?  Sign Up Now" : "Already Registered? Sign In Now"}</p>
      </form>
    </div>
    </>
  )
}

export default Login
//Use Formik Website to make Form having large number of field because it's hard to manage validation & errors of somany feilds..
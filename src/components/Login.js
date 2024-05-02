import React, { useState, useRef } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/validate';

// For toggeling the content of the Form on clicking whether to SignIN/SignUp..
const Login = () => {
  const [IsSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!IsSignInForm);
  }

  //For the Validation of email & password...
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    // Storing Error message 
    const message = checkValidData(name.current.value, email.current.value, password.current.value);
    setErrorMessage(message);
  }    

  return (
    <>
    <div>
      <Header/>
      <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/c7f07b68-7989-4ff7-a31e-11c17dcc2fea/fcf685b8-3f9f-42d8-9af3-4bb86fa5a3b8/IN-en-20240422-popsignuptwoweeks-perspective_alpha_website_large.jpg' 
            alt='background' />
      </div>
      <form 
        onSubmit={(e) => e.preventDefault()}
        className='w-4/12 absolute p-12 bg-black my-24 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
        <h1 className='font-bold text-3xl py-2'>{IsSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!IsSignInForm && (
          <input
          ref={name}
          type='text'
          placeholder='Full Name'
          className='p-4 my-4 w-full bg-black bg-opacity-10 border-2 border-gray-500 rounded'
          />
        )}
        <input
          ref={email}
          type='text'
          placeholder='Email Address'
          className='p-4 my-4 w-full bg-black bg-opacity-10 border-2 border-gray-500 rounded'
        />
        <input  
          ref={password}
          type='password'
          placeholder='Password'
          className='p-4 my-4 w-full bg-black bg-opacity-10 border-2 border-gray-500 rounded'
        />
        <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>
        <button className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>
          {IsSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className='py-6 cursor-pointer' onClick={toggleSignInForm}>
          {IsSignInForm 
            ? "New to Netflix?  Sign Up Now" 
            : "Already Registered? Sign In Now"}
        </p>
      </form>
    </div>
    </>
  )
}

export default Login
//Use Formik Website to make Form having large number of field because it's hard to manage validation & errors of somany feilds..
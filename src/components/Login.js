import React, { useRef, useState } from 'react'
import Header from "./Header"
import {checkValidData} from '../Utils/validate'

const Login = () => {
  const [isSignInForm,setIsSignForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null)

  const email = useRef(null);
  const password = useRef(null);

  const handelButtonClick = ()=>{
    //validate the form data
    // console.log(email.current.value, password.current.value);
    const message = checkValidData(email.current.value, password.current.value)
    setErrorMessage(message);
    console.log(message);
  }
  const toggleSignInForm = ()=>{
    setIsSignForm(!isSignInForm)
  }
  return (
    <div>
      <Header />
      <div>
      <img 
      className='absolute'
      src='https://assets.nflxext.com/ffe/siteui/vlv3/2bcf01ee-7ef6-4930-b0d5-c6863853c461/web/IN-en-20241125-TRIFECTA-perspective_a47db038-756f-4f26-b1f7-cfc882b98746_large.jpg'
      alt='bg' />
      </div>
      <form 
      onSubmit={(e) => e.preventDefault()}
      class='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>

      <h1 className='font-bold text-3xl py-4'>
        {isSignInForm? 'Sign In' : 'Sign Up'}</h1>

        <input 
        ref={email}
        type='text' placeholder='Email Address' class='p-4 my-4 w-full bg-gray-700'
        />

        {!isSignInForm && <input type='text' placeholder='Name' class='p-4 my-4 w-full bg-gray-700'/>}
        {/* if not a sign in Form(ie isSignInForm is false) Then show the name input */}
        <input
        ref={password}
         type='password' placeholder='Password' class='p-4 my-4 w-full bg-gray-700'
         />

         <p className='text-red-500 font-bold text-lg py-4'>{errorMessage}</p>


        <button class='p-4 my-6 w-full bg-red-700 text-white rounded-lg' onClick={handelButtonClick}>{isSignInForm? 'Sign In' : 'Sign Up'}</button>

        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}> 
        {isSignInForm? 'New to Netflix? Sign Up Now' : 'Already registered? Sign In Now'}</p>
      </form>

    </div>
  )
}

export default Login
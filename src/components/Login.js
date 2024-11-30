import React from 'react'
import Header from "./Header"

const Login = () => {
  return (
    <div>
      <Header />
      <div>
      <img 
      className='absolute'
      src='https://assets.nflxext.com/ffe/siteui/vlv3/2bcf01ee-7ef6-4930-b0d5-c6863853c461/web/IN-en-20241125-TRIFECTA-perspective_a47db038-756f-4f26-b1f7-cfc882b98746_large.jpg'
      alt='bg' />
      </div>
      <form class='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0'>
      <h1 className='font-bold text-3xl'>Sign In</h1>
        <input type='text' placeholder='Email Address' class='p-2 my-2 w-full'/>
        <input type='password' placeholder='Password' class='p-2 my-2 w-full'/>
        <button class='p-4 my-2 w-full bg-red-700 text-white'>Sign In</button>
      </form>

    </div>
  )
}

export default Login
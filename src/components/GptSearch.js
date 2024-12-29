import React from 'react'
import GptMovieSuggestion from './GptMovieSuggestion'
import GptBar from './GptBar';
import { NETFLIX_BG } from '../utils/constants'

const GptSearch = () => {
  return (
    <>
    <div className='fixed -z-10 '>
      <img 
      className='h-screen md:h-full  object-cover'
      src={NETFLIX_BG}
      alt='bg' 
      />
      </div>
        <div className=''>
      <GptBar />
      <GptMovieSuggestion />
    </div>
      </>
  )
}

export default GptSearch



// In JSX, multiple sibling elements cannot exist at the same level without being wrapped in a single parent. React expects your component to return a single root node.

// You need to wrap the sibling elements in either:
// A single parent element (like a <div>) or
// A React Fragment (<>...</>).

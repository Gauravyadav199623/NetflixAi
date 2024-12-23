import React from 'react'
import GptMovieSuggestion from './GptMovieSuggestion'
import GptBar from './GptBar';
import { NETFLIX_BG } from '../utils/constants'

const GptSearch = () => {
  return (
    <div>
      <div className='absolute -z-10 '>
      <img
      src={NETFLIX_BG}
      alt='bg' 
      />
      </div>
      <GptBar />
      <GptMovieSuggestion />
    </div>
  )
}

export default GptSearch
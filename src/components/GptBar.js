import React from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'

const GptBar = () => {
  
  const langKey = useSelector(store=> store.config.lang) // the value we get here is the value which we have store in our redux store
  // console.log(lang[langKey]);
  return (
    <div className='pt-[10%] flex justify-center'>
        <form className='w-1/2 bg-black grid grid-cols-12'>
            <input  className="p-4 m-4 col-span-9" 
            type='text' 
            placeholder={lang[langKey].gptSearchPlaceholder} />
            <button className=' m-4 py-2 px-4 bg-red-700 text-white rounded-lg col-span-3'>{lang[langKey].search}</button>

        </form>
    </div>
  )
}

export default GptBar
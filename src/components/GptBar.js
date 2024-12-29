import React, { useRef } from 'react'
import lang from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import openai from '../utils/openAi'
import { API_OPTIONS } from '../utils/constants'
import { addGptMovieResults } from '../utils/gptSlice'

const GptBar = () => {
  const searchText = useRef(null)
  const dispatch = useDispatch()
  
  const langKey = useSelector(store=> store.config.lang) // the value we get here is the value which we have store in our redux store
  // console.log(lang[langKey]);

// search movie in tmdb data base 
const SearchMovieTMDB = async(movie) =>{
  const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', API_OPTIONS)
    const json = await data.json()

    console.log(json);
    return json.results

}


  const gptQuery = "Act as a movie recommendation system and suggest some movies for the query" + searchText?.current?.value + ". only give me name of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholey, Don, Golmal, koi Mil Gaya";
  console.log(searchText?.current?.value);
  //todo the more clearer the query the better the result

  const handleGptSearchClick = async()=>{
    console.log(searchText?.current?.value +"searchText");

    //! Make an api call to open Ai to get movies result
    const gptresults= await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',
    });
    // we are calling from the clint side and not the server side
    console.log(gptresults.choices?.[0]?.message?.content);

    // gptresults = [Chupke Chupke, Gol Maal, Jaane Bhi Do Yaaro, Padosan, Angoor]
    const gptMovies = gptresults.choices?.[0]?.message?.content.split(',');
    console.log(gptMovies);

    const promiseArray = gptMovies.map(movie =>SearchMovieTMDB(movie));
    //it will return [promise, promise. promise, promise, promise]

    const TMDBResults = await Promise.all(promiseArray)
    console.log(TMDBResults);
    dispatch(addGptMovieResults({moviesNames:gptMovies,movieResults: TMDBResults}))



  }
  return (
    <div className='pt-[45%] md:pt-[10%] flex justify-center'>
        <form className='w-full  md:w-1/2 bg-black grid grid-cols-12' onSubmit={(e)=>e.preventDefault()}>
            <input  
            ref={searchText}
            className="p-4 m-4 col-span-9" 
            type='text' 
            placeholder={lang[langKey].gptSearchPlaceholder} />
            <button className=' m-4 py-2 px-4 bg-red-700 text-white rounded-lg col-span-3'
            onClick={handleGptSearchClick}>{lang[langKey].search}</button>

        </form>
    </div>
  )
}

export default GptBar
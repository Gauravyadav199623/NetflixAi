import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";



 const useNowPlayingMovies = ()=>{
    //fetching the data from TMDB API and putting and update the store 
  const dispatch = useDispatch()
  const getNowPlayingMovies = async()=>{
    const data =await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
    const json = await data.json()
     //i will add this json.result in to my movieSlice using dispatch
    dispatch(addNowPlayingMovies(json.results))
    //putting json.result in the store
  }
  useEffect(()=>{
    getNowPlayingMovies()
  },[])
 }

 export default useNowPlayingMovies
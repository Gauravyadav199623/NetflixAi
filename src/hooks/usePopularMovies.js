import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";



 const usePopularMovies = ()=>{
    //fetching the data from TMDB API and putting and update the store 
  const dispatch = useDispatch()
  const getPopularMovies = async()=>{
    const data =await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS)
    ;
    const json = await data.json()
     //i will add this json.result in to my movieSlice using dispatch
    dispatch(addPopularMovies(json.results))
    //putting json.result in the store
  }
  useEffect(()=>{
    getPopularMovies()
  },[])
 }

 export default usePopularMovies
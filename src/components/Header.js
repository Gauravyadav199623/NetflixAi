import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import {auth} from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGE } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';




const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const user = useSelector(store =>store.user)
  const showGptSearch = useSelector(store => store.gpt.showGptSearch)


  const handleSignOut = ()=>{
    signOut(auth)
    .then(() => {
      // Sign-out successful.
      // "onAuthStateChanged" will take care of the sign out navigation also

    })
    .catch((error) => {
      // An error happened.
      navigate('/error')
    });
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // when unsubscribe is called it will unmount / remove the "onAuthStateChanged" function from our browser
      // ie  when our header component is unload it will unsubscribe this event
        if (user) {
          // User is signed in
          const {uid, email, displayName, photoURL} = user;

          dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL})
        );
        navigate('/browse')

        } else {
          // User is signed out
          dispatch(removeUser());
          navigate('/') 
          // ? the header is inside the route provider so navigate will work here
        }
      });


      return()=> unsubscribe()
},[])

  const handleGptSearchClick = () =>{
    //toggle gpt search button (use redux store to store that toggle value)
    // use logical sepration for each slice

    dispatch(toggleGptSearchView())
  }

const handleLanguageChange = (e)=>{
// console.log(e.target.value);/
dispatch(changeLanguage(e.target.value))
}

  return (
    <div className='absolute w-screen px-8 py-4 bg-gradient-to-b from black z-10 flex justify-between'> 
        <img
        className='w-44' 
        src={LOGO}
        alt='logo'></img>
        {user && (
          <div className='flex p-2'>
            {showGptSearch && (
              <select className='p-2 m-2 bg-gray-800 text-white rounded-lg' 
              onChange={handleLanguageChange}
               >
              {SUPPORTED_LANGUAGE.map(lang => <option kay={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
            </select>)}
            <button className='py-2 px-4 my-2 mx-4 bg-purple-700 text-white rounded-lg' 
            onClick={handleGptSearchClick}
            >{showGptSearch? "Home Page" : "GPT Search"}  </button>
            <img 
            className='w-12 h-12'
            alt="userIcon" 
            src={user?.photoURL} />
            
            <button onClick={handleSignOut} className='font-bold text-white'>(Sign Out)</button>
        </div>)}{/* when user is present then only load this */}
    </div>
  )
}

export default Header
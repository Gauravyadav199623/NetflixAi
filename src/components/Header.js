import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import {auth} from '../Utils/firebase';
import { useNavigate } from 'react-router-dom';
import { addUser, removeUser } from '../Utils/userSlice';
import { LOGO } from '../Utils/constants';



const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const user = useSelector(store =>store.user)
  console.log(user, "user in header");


  const handleSignOut = ()=>{
    signOut(auth)
    .then(() => {
      // Sign-out successful.
      // "onAuthStateChanged" will take care of the sign out navigation also
      console.log('Sign-out successful');

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
          console.log(user, 'in header')
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

  return (
    <div className='absolute w-screen px-8 py-4 bg-gradient-to-b from black z-10 flex justify-between'> 
        <img
        className='w-44' 
        src={LOGO}
        alt='logo'></img>
        {user && (<div className='flex p-2'>
            <img 
            className='w-12 h-12'
            alt="userIcon" 
            src={user?.photoURL} />
            
            <button onClick={handleSignOut} className='font-bold text-black'>(Sign Out)</button>
        </div>)}{/* when user is present then only load this */}
    </div>
  )
}

export default Header
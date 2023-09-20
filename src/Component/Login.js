import React, { useState,useRef } from 'react'
import Header from './Header'
import { Validate } from '../Utils/constants';
import {createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../Utils/firebase';
const Login = () => {

    const Email=useRef(null);
    const Password=useRef(null);
    const [errorMessage,setErrorMessage]=useState()

     const [isLogin,setisLogin]=useState(true);
     //validation
     const checkValidation=()=>{
       console.log(Email)
       console.log(Password)
        const message=Validate(Email.current.value,Password.current.value);


        setErrorMessage(message);

        //if authentication sucessfully done than user can sign in or sign up

        if(!isLogin){
                
          // isLogin is false that means user is trying to sign up by creating a new account
          
          createUserWithEmailAndPassword(auth, Email.current.value, Password.current.value)
            .then((userCredential) => {
              // Signed in 
              const user = userCredential.user;
              console.log(user);
              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              // ..
               setErrorMessage(errorCode+" "+errorMessage)
            });

          
           
        }
       
        else{
          //else block will execute in case of login

         
          signInWithEmailAndPassword(auth, Email.current.value, Password.current.value)
            .then((userCredential) => {
              // Signed in 
              const user = userCredential.user;
              console.log(user);
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMessage("Email or password is wrong")
            });


        }


     }
     const ontoggle=()=>{
        
        setisLogin(!isLogin);



     }


 

  return (
    <div>
          
        <Header></Header>
        <div className='absolute '>

        <img className='brightness-75 ' src="https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="" />

        </div>
        
         
        <form onSubmit={(e)=>e.preventDefault()} className='absolute left-0 rounded right-0 h-auto flex flex-col w-1/3 bg-black bg-opacity-80 text-white my-36 mx-auto'>
              <h1 className='mt-16 mx-16 font-medium text-4xl' >
                {
                    isLogin?"Sign In":"Sign Up"
                }
              </h1>
              {   !isLogin && <input className='mx-16 mt-10 p-2 rounded bg-gray-500' type="text" placeholder='Name' name="" id="" />
                
              }
              <input ref={Email} className='mx-16 mt-4 rounded p-2 bg-gray-500' type="Email" placeholder='Email' name="" id="" />
              <input ref={Password} className='mx-16 mt-4 rounded p-2 bg-gray-500' type="Password" placeholder='Password' name="" id="" />
              <p className='text-red-600 ml-16'>{errorMessage}</p>
              <button className='mx-16 mt-10 px-4 py-3 rounded bg-red-600 font-medium text-lg'
               
               onClick={checkValidation}
              
              >
                {
                    isLogin?"Sign In":"Sign Up"
                }
              </button>
                
                <div className='flex mt-10 mb-10 mx-16 items-center tracking-normal'>
                  {
                    isLogin?<p className='text-gray-400'>New to Netflix?</p>:<p className='text-gray-400'>Already a Customer?</p>
                  }
                   
                     <p className='text-lg font-medium cursor-pointer' onClick={ontoggle}>
                        {
                            isLogin?"Sign Up Now":"Sign In"
                        }
                     </p>
                </div>

         </form>


         




    </div>
  )
}

export default Login
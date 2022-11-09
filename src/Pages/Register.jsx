import React from 'react'
import Avatar from '../Image/Avatar.png'
import {createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../firebase"


const Register =() => {

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(e.target[0].value)
    
    const displayName= e.target[0].value
    const email= e.target[1].value
    const password= e.target[2].value
    const file= e.target[3].file[0];

  


createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
   
    const user = userCredential.user;
    console.log(user)
  
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

  });

  }

    return(
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Mem Chat</span>
                <span className="Register">Register</span>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='display name'/>
                    <input type="email" placeholder='email'/>
                    <input type="password" placeholder='password'/>
                    <input style={{display:"none"}} type="file" id="file" />
                    <label htmlfor="file">
                       <img src={Avatar} alt="" />
                       <span>Add an Avatar</span>
                    </label>
                    <button>Sign Up</button>
                </form>
                <p>You Do Have An Account? Login</p>
            </div>
        </div>
    );
};



export default Register;

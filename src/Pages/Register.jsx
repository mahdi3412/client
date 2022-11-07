import React from 'react'
import Avatar from "./Image/Avatar.png"


const Register =() => {
    return(
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Mem Chat</span>
                <span className="Register">Register</span>
                <form>
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

import React from 'react'



const Login =() => {
    return(
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Mem Chat</span>
                <span className="Register">Login</span>
                <form>
                   
                    <input type="email" placeholder='email'/>
                    <input type="password" placeholder='password'/>
                    <button>Sign in</button>
                </form>
                <p>You Don't Have An Account? Register</p>
            </div>
        </div>
    );
};



export default Login;

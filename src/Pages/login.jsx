import React, { useState } from "react"
import { Link } from "react-router-dom"
import './login.css'


const Login = () => {

    return (

        <div className="login">
            <h3>
                Login
            </h3>

            <div className="login-input">

                <label>Email ID.: </label>
                <input type='email' placeholder="Email" /><br />
                <label>Password: </label>
                <input type='text' placeholder="Password" /><br /><br />
                <button>Login</button>
            </div>



            <Link to="/getBook" >Login</Link>
        </div>

    )

}

export default Login
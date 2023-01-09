import React, { useState } from "react"
import { Link } from "react-router-dom"
import './signup.css'


const SignUp = () => {

    return (

        <div className="signup">
            <h3>
                SignUp
            </h3>

            <div className="signup-input">
                <label>Name: </label>
                <input placeholder="Name" /><br />
                <label>Email ID.: </label>
                <input type='email' placeholder="Email" /><br />
                <label>Phone No.: </label>
                <input placeholder="Phone" /><br />
                <label>Password: </label>
                <input type='text' placeholder="Password" /><br /><br />
                <button>SignUp</button>
            </div>



            <Link to="/login" >Submit</Link>
        </div>
    )

}

export default SignUp
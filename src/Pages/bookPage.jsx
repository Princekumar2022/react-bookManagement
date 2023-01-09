import React, { useState } from "react"
import { Link } from "react-router-dom"


const Books = () => {

    return (

        <div>
            <h3>
                Get All Books
            </h3>

            <div>
                <ul>
                    <li>Title</li>
                    <li>Book Name</li>
                    <li>Body</li>

                </ul>
            </div>


            <Link to="/" >LogOut</Link>

        </div>
    )

}

export default Books
import React from 'react'
import {Link} from 'react-router-dom'
import '../stylesheets/stylesheet.css'

const Navigation =({loggedInUser, activateUser})=>{
    function logout(e){
        e.preventDefault()
        console.log("logout")
        activateUser("")
    }

    return(
        <div className='nav'>
            <Link to="/messages">Home</Link>
            <Link to="/about">About</Link>
            {loggedInUser ? 
                <>
                    {loggedInUser}
                    <Link to="/newmessage">Post a new message</Link>
                    <Link to="/messages" onClick={logout}>Logout</Link>
                </> 
            :   <>
                    <Link to="/login">Login</Link>
                    <Link to="/login">Sign up</Link>
                    Guest
                </>
            }
        </div>
    )
}

export default Navigation
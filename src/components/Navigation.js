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
            <ul className="navul">
            <li><Link to="/messages">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            {loggedInUser ? 
                <>
                    {loggedInUser}
                    <Link to="/newmessage">Post a new message</Link>
                    <Link to="/messages" onClick={logout}>Logout</Link>
                </> 
            :   <>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/login">Sign up</Link></li>
                    <li>User</li>
                </>   
            } 
            </ul>
        </div>
    )
}

export default Navigation
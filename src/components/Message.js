import React from 'react'
import {Link} from 'react-router-dom'
import '../stylesheets/stylesheet.css'

const Message =({message})=>{
    return(
        <div className='user'>
            {message? 
            <>
                <Link to={`/messages/${message.id}`} ><h4>{message.text}</h4></Link>
                <br></br>
                <h2>{message.user}</h2>
                <h3>{message.title}</h3>
                <h4>{message.body}</h4>
                <a href={message.image}>Image</a>
                <br></br>
                <a href={message.youtube}>Video Footage</a>
                <p></p>
            </>
            :
                <>
                    <p>That looks like an invalid message partner!</p>
                    <Link to="/messages">Go back home</Link>
                </>
            }
        </div>
        
    )
}

export default Message
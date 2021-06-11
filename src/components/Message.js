import React from 'react'
import {Link} from 'react-router-dom'

const Message =({message})=>{
    return(
        <div>
            {message? 
            <>
                <Link to={`/messages/${message.id}`} ><h4>{message.text}</h4></Link>
                <p>{message.user}</p>
                <p>{message.title}</p>
                <p>{message.body}</p>
                <p>{message.image}</p>
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
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
                <img src={message.image} alt="Image" height={200} width={200} />
                <br></br>
                <iframe
                width="400"
                height="200"
                src={message.youtube}
                frameBorder="100px"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
    />
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
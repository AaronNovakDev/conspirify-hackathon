import React from 'react'
import Message from './Message'

const Messages =({messageList})=>{
    console.log(messageList)
    return(
        <div className="messages">
            <h1>Messages</h1>
            {messageList.map((message, index)=>
                <Message key={index} message={message}/>
            )}
        </div>
    )
}

export default Messages
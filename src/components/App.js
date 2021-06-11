import React, { useEffect, useReducer } from 'react'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import About from './About'
import NotFound from './NotFound'
import Navigation from './Navigation'
import LoginForm from './LoginForm'
import MessageForm from './MessageForm'
import Messages from './Messages'
import Message from './Message'
import initialMessageList from '../data/theory-data.json'
import reducer from '../utils/reducer'  
import '../stylesheets/stylesheet.css'

const App = () => {
  const initialState ={
    messageList: [],
    loggedInUser: ""
  }

  const [store, dispatch] = useReducer(reducer, initialState)
  const {messageList, loggedInUser} = store

  function activateUser(name){
    dispatch({
      type: "setLoggedInUser",
      data: name
    })
  }

  function addMessage(text){
    const message = {
      id: getNextId(),
      text: text, 
      user: loggedInUser
    }

    dispatch({
      type: "addMessage",
      data: message
    })
  }

  useEffect(()=>{
    dispatch({
      type: "setMessageList",
      data: initialMessageList
    })
  },[])

  function getMessage(id){
    return messageList.find(m=> m.id === parseInt(id))
  }

  function getNextId(){
    const ids = messageList.map(m => m.id)
    return ids.sort()[ids.length -1] ++
  }

  return (
    <div >
      <h1 className='primary'>CONSPIRIFY</h1>
      
      <BrowserRouter>
        <Navigation loggedInUser={loggedInUser} activateUser={activateUser}/>
        <Switch>
          <Route exact path="/">
            <Redirect to="messages" />
          </Route>
          <Route exact path="/messages" 
            render={()=> <Messages messageList={messageList}/> } 
          />
          <Route exact path="/messages/:id" 
            render={(props)=> <Message {...props} 
              message={getMessage(props.match.params.id)}/>}
          />
          <Route exact path="/about" component={About}/>
          <Route exact path="/login" 
            render={(props)=> <LoginForm {...props} activateUser={activateUser}/>}
          />
          <Route exact path="/newmessage" 
            render={(props)=> <MessageForm {...props} loggedInUser={loggedInUser} addMessage={addMessage}/>}
          />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
          
    </div>
  )
}

export default App

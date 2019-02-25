import React, { Component } from 'react';
import classes from './App.css'
import PageTitle from './components/pageTitle/PageTitle'
import MessagesList from './components/MessagesList/MessagesList'
import SendMessageForm from './components/SendMessageForm/SendMessageForm'
import { ChatManager, TokenProvider } from '@pusher/chatkit-client'


const testToken = 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/133362ff-badf-481f-9341-9236aae21bfd/token'
const instanceLocator = 'v1:us1:133362ff-badf-481f-9341-9236aae21bfd'
const UserName = 'trent'
const room = '28445549'

localStorage.setItem('userId', 'trent')
class App extends Component {

  state = {
    localUserName: 'Mefiisto',
    messages: [
    ]
  }


  submitHandler(event, value) {
    event.preventDefault()
    this.sendMessage(value)
    console.log(this.state.messages)
  }

  componentDidMount() {
    const chatManager = new ChatManager({
      instanceLocator: instanceLocator,
      userId: UserName,
      tokenProvider: new TokenProvider({ url: testToken })
    })

    chatManager.connect()
    .then(currentUser => {
      this.currentUser = currentUser
      this.currentUser.subscribeToRoom({
        roomId: room,
        hooks: {
          onMessage: message => {
            this.setState({
              messages: [...this.state.messages, message]
            })
          }
        },
        messageLimit: 5
      })
    })
  }

  sendMessage(text) {
    this.currentUser.sendMessage({
      text,
      roomId: room
    })
  }


  render() {
    return (
      <div className={classes.App}>
        <PageTitle title={'Hello, i"m React chat'} />
        <MessagesList messages={this.state.messages} />
        <SendMessageForm 
          placeholder="Enter here your message"
          onSubmit={this.submitHandler.bind(this)}
        />
      </div>
    );
  }
}

export default App;

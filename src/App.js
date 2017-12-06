import React, { Component } from 'react';
import * as firebase from 'firebase';
import './App.css';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';
import User from './components/User';

var config = {
    apiKey: "AIzaSyCA8NzP-STkW28rgLrNf28paSqWX3KbkoI",
    authDomain: "bloc-chat-cddc0.firebaseapp.com",
    databaseURL: "https://bloc-chat-cddc0.firebaseio.com",
    projectId: "bloc-chat-cddc0",
    storageBucket: "bloc-chat-cddc0.appspot.com",
    messagingSenderId: "1033317448758"
  };

firebase.initializeApp(config);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeRoom: 'No Room Selected Yet',
      activeUser: 'Guest'
    };
  }

  setActiveRoom(e) {
    this.setState({ activeRoom: e.target.value })
  }

  setUser(user) {
    this.setState( {activeUser: user.displayName} )
  }

  render() {
    return (
      <div>
      <User
        firebase={firebase}
        setUser={(user) => this.setUser(user)}
        activeUser={this.state.activeUser}
      />
      <RoomList
        firebase={firebase}
        activeRoom={this.state.activeRoom}
        setActiveRoom={(e) => this.setActiveRoom(e)}
      />
      <h1>Active Room: {this.state.activeRoom} </h1>
      <MessageList
        firebase={firebase}
        activeRoom={this.state.activeRoom}
        activeUser={this.state.activeUser}
      />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import * as firebase from 'firebase';
import './App.css';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';

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
      activeRoom: 'No Room Selected Yet'
    };
  }

  setActiveRoom(e) {
    this.setState({ activeRoom: e.target.value })
  }

  render() {
    return (
      <div>
      <RoomList
        firebase={firebase}
        activeRoom={this.state.activeRoom}
        setActiveRoom={(e) => this.setActiveRoom(e)}
      />
      <h1>Active Room: {this.state.activeRoom} </h1>
      <MessageList
        firebase={firebase}
        activeRoom={this.state.activeRoom}
      />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import * as firebase from 'firebase';
import './App.css';
import RoomList from './components/RoomList';

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
  render() {
    return (
      <RoomList firebase={firebase}/>
    );
  }
}

export default App;

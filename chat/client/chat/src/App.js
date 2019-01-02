import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {connectWs, addWsListener, removeWsListener} from "./utils/ws";
import MessageForm from "./MessageForm";

const {emit} = connectWs('ws://localhost:3000');

addWsListener("connected_new_user", (data) => {
  console.log(data);
})

addWsListener("disconnected_user", (data) => {
  console.log(data);
})

setTimeout(() => {
  emit(`User: ${+new Date}`)
}, 1000)

setTimeout(() => {
  emit(`Message: ${+new Date}`)
}, 3000)


class App extends Component {

  render() {
    return (
      <MessageForm onEmit={message => emit(message)} />
    );
  }
}

export default App;

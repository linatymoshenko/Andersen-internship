import React, {Component} from "react";
import {addWsListener} from "./utils/ws";
import MessageList from "./MessageList";

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      messageList: []
    };
    addWsListener("message", (data) => {
      console.log(data);
      this.state.messageList.push(data);
      this.setState({messageList: this.state.messageList})
    });

    this.handleChangeMessageForm = this.handleChangeMessageForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeMessageForm(event) {
    this.setState({message: event.target.value});
  }

  handleSubmit(event) {
    this.props.onEmit(this.state.message);
    this.setState({message: ""});
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <MessageList messages={this.state.messageList}/>
        <form className="App" onSubmit={this.handleSubmit}>
          <label>
            Message:
          </label>
          <input
            type="text"
            placeholder="Type your message"
            value={this.state.message}
            onChange={this.handleChangeMessageForm}
          />
          <input type="submit" value="Send"/>
        </form>
      </div>
    );
  }
}

export default MessageForm;

import React, {Component} from "react";


class MessageList extends Component {
    render() {
        return (
          <div>
            {this.props.messages.map(message => (
              <div className="message" key={message.time}>{message.text}</div>
            ))
            }
          </div>
        )
    }
    
}

export default MessageList;

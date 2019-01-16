function getShortMessages(messages) {
  return messages.map(item => item["message"]).filter(message => message.length < 50)
}

module.exports = getShortMessages;

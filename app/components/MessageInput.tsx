// components/MessageInput.js

import React, { useState } from 'react';

const MessageInput = () => {
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    // Implement logic to send the message
    console.log('Message sent:', message);
    // You'd want to send this message to the backend
    setMessage(''); // Clear the input field after sending the message
  };

  return (
    <div className="message-input">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message"
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default MessageInput;

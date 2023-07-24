import React, { useState } from 'react';
import './inbox.css';

const Inbox= () => {
    const [messages, setMessages] = useState([
        { id: 1, sender: 'User', content: 'Hello' },
        { id: 2, sender: 'Bot', content: 'Hi there! How can I assist you?' },
      ]);
    
      const [inputValue, setInputValue] = useState('');
    
      const handleInputChange = (event) => {
        setInputValue(event.target.value);
      };
    
      const handleSendMessage = () => {
        if (inputValue.trim() !== '') {
          const newMessage = { id: messages.length + 1, sender: 'User', content: inputValue };
          setMessages([...messages, newMessage]);
          setInputValue('');
        }
      };
    
      return (
        <div className="chatbox">
          <div className="chatbox-header">Chat Box</div>
          <div className="chatbox-messages">
            {messages.map((message) => (
              <div key={message.id} className={`message ${message.sender === 'User' ? 'user-message' : 'bot-message'}`}>
                <div className="sender">{message.sender}</div>
                <div className="content">{message.content}</div>
              </div>
            ))}
          </div>
          <div className="chatbox-input">
            <input
              type="text"
              placeholder="Type a message..."
              value={inputValue}
              onChange={handleInputChange}
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      );
    };

export default Inbox;

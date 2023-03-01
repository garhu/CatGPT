import { useEffect, useState, useRef } from 'react';
import { Box, Container, TextField } from '@mui/material';
import axios from 'axios';
import Message from './Message';
import { v4 as uuidv4 } from 'uuid';

function Messaging() {
  const [messages, setMessages] = useState([]);
  const [userMessage, setUserMessage] = useState('');

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleMessageChange = (e) => {
    setUserMessage(e.target.value);
  };

  const handleMessageSend = (e) => {
    e.preventDefault();
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setUserMessage('');
    handleCatResponse();
  };

  let isUser = false;
  const renderedMessages = messages.map((message) => {
    isUser = !isUser;
    return <Message isUser={isUser} key={uuidv4()} message={message}></Message>;
  });

  const handleCatResponse = async () => {
    await axios
      .post('http://localhost:4000/chat', {
        query: userMessage,
      })
      .then((response) => {
        console.log('Chatbot responded successfully: ', response.data);
        setMessages((prevMessages) => [...prevMessages, response.data]);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  };

  return (
    <Container
      disableGutters
      sx={{
        backgroundColor: '#eff6e0',
        height: '85%',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          width: '100%',
          overflowY: 'auto',
          marginBottom: '1.5em',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {renderedMessages}
        <div ref={messagesEndRef} />
      </Box>
      <Box
        component="form"
        onSubmit={handleMessageSend}
        sx={{ marginTop: 'auto', width: '95%', marginBottom: '1.5em' }}
      >
        <TextField
          fullWidth
          placeholder="Ask CatGPT!"
          value={userMessage}
          onChange={handleMessageChange}
        />
      </Box>
    </Container>
  );
}

export default Messaging;

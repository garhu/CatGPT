import './Messaging.css';
import { useEffect, useState, useRef } from 'react';
import { Input, Button, Box, Container, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import Avatar from '@mui/material/Avatar';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import { pink, deepPurple } from '@mui/material/colors';
import Message from './Message';
import { v4 as uuidv4 } from 'uuid';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

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
    setMessages([...messages, userMessage]);
    setUserMessage('');
    // handleCatResponse();
  };

  let isUser = true;
  const renderedMessages = messages.map((message) => {
    isUser = !isUser;
    return <Message isUser={isUser} key={message} message={message}></Message>;
  });

  // const handleCatResponse = async () => {
  //   const req = {
  //     query: userMessage,
  //   };

  //   await axios
  //     .post('http://localhost:4000/chat', req)
  //     .then((response) => {
  //       console.log('Chatbot responded successfully: ', response.data);
  //       setMessages((prevMessage) => [...prevMessage, { isUser: false, message: response.data }]);
  //     })
  //     .catch((error) => {
  //       console.log('Error:', error);
  //     });
  // };

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

  // return (
  //   <div className="messaging-outline">
  //     <div>
  //       <Box
  //         sx={{
  //           marginTop: '0vh',
  //           width: '100%',
  //           height: '70vh',
  //           marginBottom: '5vh',
  //           backgroundColor: '#EFF6E0',
  //           overflowY: 'auto',
  //           overflowX: 'hidden',
  //           scrollbarWidth: 'none',
  //         }}
  //       >
  //         {messages.map((item) =>
  //           item.isUser ? (
  //             <div>
  //               <div className="user-message" key={Math.random() * 9999999}>
  //                 <p style={{ marginRight: '2vh' }} key={item.key}>
  //                   {item.message}
  //                 </p>
  //                 <Avatar sx={{ bgcolor: deepPurple[500] }}>U</Avatar>
  //               </div>
  //             </div>
  //           ) : (
  //             <div>
  //               <div className="cat-message" key={Math.random() * 9999999}>
  //                 <StyledBadge
  //                   overlap="circular"
  //                   anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
  //                   variant="dot"
  //                 >
  //                   <Avatar
  //                     sx={{ bgcolor: pink[500] }}
  //                     alt="CatGPT"
  //                     src={catAvi}
  //                     variant="rounded"
  //                   />
  //                 </StyledBadge>
  //                 <p style={{ marginLeft: '2vh' }}>{item.message}</p>
  //               </div>
  //             </div>
  //           )
  //         )}
  //       </Box>
  //     </div>
  //     <form className="messaging-input" onSubmit={handleSendMessage}>
  //       <Input
  //         placeholder="Ask CatGPT!"
  //         sx={{ width: '93%' }}
  //         onChange={handleMessageChange}
  //         value={userMessage}
  //       ></Input>
  //       <Button
  //         variant="contained"
  //         sx={{ marginLeft: '2%', width: '5%' }}
  //         onClick={handleSendMessage}
  //       >
  //         <SendIcon />
  //       </Button>
  //     </form>
  //   </div>
  // );
}

export default Messaging;

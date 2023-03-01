import { Box, Avatar, Typography, Paper } from '@mui/material';
import catAvatar from '../assets/kitten1.png';

function Message({ message, isUser }) {
  console.log(message);

  return (
    <Box
      sx={{
        display: 'flex',
        width: '95%',
        paddingTop: '1.5em',
        paddingBottom: '0.5em',
        height: '3em',
        alignItems: 'center',
        flexDirection: () => (isUser ? 'row-reverse' : 'row'),
        // flexDirection: 'row-reverse',
      }}
    >
      <Avatar src={catAvatar} alt="cat avatar" sx={{ marginRight: '0.5em' }} />
      <Paper sx={{ display: 'flex', alignItems: 'center', padding: '1em' }}>
        <Typography>{message}</Typography>
      </Paper>
    </Box>
  );
}

export default Message;

import { Box, Avatar, Typography, Paper } from '@mui/material';
import { green } from '@mui/material/colors';
import catAvatar from '../assets/kitten1.png';

function Message({ message, isUser }) {
  console.log(message);

  const renderedAvatar = isUser ? (
    <Avatar sx={{ bgcolor: green[500], marginLeft: '0.5em' }}>U</Avatar>
  ) : (
    <Avatar src={catAvatar} alt="cat avatar" sx={{ marginRight: '0.5em' }} />
  );

  return (
    <Box
      sx={{
        display: 'flex',
        width: '95%',
        marginTop: '2em',
        marginBottom: '1em',
        height: '2em',
        alignItems: 'center',
        flexDirection: () => (isUser ? 'row-reverse' : 'row'),
      }}
    >
      {renderedAvatar}
      <Paper sx={{ display: 'flex', alignItems: 'center', padding: '1em' }}>
        <Typography>{message}</Typography>
      </Paper>
    </Box>
  );
}

export default Message;

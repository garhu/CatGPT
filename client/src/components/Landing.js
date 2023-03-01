import { Link } from 'react-router-dom';
import { Grid, Button, Card, CardContent, Typography, CardActions } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import kitten from '../assets/kitten1.png';

function Landing() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={1}></Grid>
      <Grid item xs={5}>
        <Card sx={{ backgroundColor: '#AEC3B0', width: '100%' }}>
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              CatGPT
              <br />
            </Typography>
            <Typography variant="body2" color="text.secondary">
              CatGPT responds to greetings, thanks, and goodbyes. <br />
              In addition, CatGPT can give you:
              <br />- cat jokes!
              <br />- cat facts!
              <br />- summaries of specific cat breeds!
              <br />
              <br />
              Examples:
              <br />- "Hello!"
              <br />- "Goodbye!"
              <br />- "Thank you!"
              <br />- "Tell me a cat joke"
              <br />- "I want a cat fact"
              <br />- "What can you tell me about the Ragdoll cat?"
            </Typography>
          </CardContent>
          <CardActions style={{ display: 'flex', justifyContent: 'center' }}>
            <Link to="/chat" style={{ textDecoration: 'none' }}>
              <Button endIcon={<ArrowOutwardIcon />}>Go to Chat</Button>
            </Link>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={5}>
        <img src={kitten} alt="small kitten" />
      </Grid>
      <Grid item xs={1}></Grid>
    </Grid>
  );
}

export default Landing;

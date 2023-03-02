import { Link } from 'react-router-dom';
import { Grid, Button, Typography, Box } from '@mui/material';
import kitten from '../assets/kitten1.png';

function HeroSection() {
  return (
    <Grid
      container
      spacing={8}
      sx={{ borderBottom: '1px solid #e1e1e1', paddingBottom: '3em', marginBottom: '5em' }}
    >
      <Grid item xs={1}></Grid>
      <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ color: '#eff6e0' }}>
          <Typography gutterBottom variant="h2" component="div" sx={{ fontWeight: '600' }}>
            My name is CatGPT
          </Typography>
          <Typography gutterBottom variant="h4" component="div" sx={{ marginBottom: '1em' }}>
            The first chatbot made specifically for your cat inquiries.
          </Typography>
          <Link to="/chat" style={{ textDecoration: 'none' }}>
            <Button
              variant="outlined"
              sx={{
                color: '#eff6e0',
                borderColor: '#eff6e0',
                '&:hover': { borderColor: '#eff6e0' },
              }}
            >
              <Typography>Get Started</Typography>
            </Button>
          </Link>
        </Box>
      </Grid>
      <Grid item xs={5}>
        <img src={kitten} alt="small kitten" />
      </Grid>
    </Grid>
  );
}

export default HeroSection;

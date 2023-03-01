import { Grid, Typography, Box } from '@mui/material';

function Feature({ feature, stagger }) {
  return (
    <Grid
      container
      spacing={3}
      sx={{
        marginBottom: '5em',
        display: 'flex',
        flexDirection: () => (stagger ? 'row-reverse' : 'row'),
      }}
    >
      <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ width: '80%' }}>
          <Typography
            gutterBottom
            variant="h4"
            component="div"
            sx={{ color: '#eff6e0', fontWeight: '600' }}
          >
            {feature.header}
          </Typography>
          <Typography
            gutterBottom
            variant="body1"
            component="div"
            sx={{ color: '#eff6e0', marginBottom: '1em' }}
          >
            {feature.description}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box sx={{ width: '80%' }}>
          <img src={feature.image} alt={feature.header} className="feature-image" />
        </Box>
      </Grid>
    </Grid>
  );
}

export default Feature;

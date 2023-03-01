import { Typography, Container } from '@mui/material';
import wetCatImage from '../assets/wet-cat.png';
import surprisedCatImage from '../assets/surprised-cat.png';
import rareCatImage from '../assets/rare-cat.png';
import wavingCatImage from '../assets/cedric-waving.png';
import Feature from './Feature';

function FeaturesSection() {
  const features = [
    {
      header: 'Cat Jokes',
      description: 'CatGPT can tell you funny cat jokes! Try something like "tell me a joke"',
      image: wetCatImage,
    },
    {
      header: 'Cat Facts',
      description:
        'Get CatGPT to tell you a random cat fact! Try something like "give me a cat fact"',
      image: surprisedCatImage,
    },
    {
      header: 'Cat Breed Information',
      description:
        'Want to know more about your favorite breed? Try something like "what can you tell me about the sphynx cat?"',
      image: rareCatImage,
    },
    {
      header: 'Small Talk',
      description: 'Just want to say hi? CatGPT responds to greetings, farewells, and thank yous!',
      image: wavingCatImage,
    },
  ];

  let stagger = true;
  const renderedFeatures = features.map((feature) => {
    stagger = !stagger;
    return <Feature feature={feature} stagger={stagger}></Feature>;
  });

  return (
    <Container sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
      <Typography variant="h3" sx={{ color: '#eff6e0', marginBottom: '2em' }}>
        Features
      </Typography>
      {renderedFeatures}
    </Container>
  );
}

export default FeaturesSection;

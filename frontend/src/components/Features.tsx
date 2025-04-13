import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import ImageIcon from '@mui/icons-material/Image';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import EmailIcon from '@mui/icons-material/Email';

const features = [
  {
    title: 'Text to Image',
    description: 'Transform your text descriptions into stunning visual art with our advanced AI image generation.',
    icon: <ImageIcon sx={{ fontSize: 40 }} />,
  },
  {
    title: 'Text to Speech',
    description: 'Convert any text into natural-sounding speech with multiple voice options and languages.',
    icon: <RecordVoiceOverIcon sx={{ fontSize: 40 }} />,
  },
  {
    title: 'Email Agents',
    description: 'Automate your email communications with AI-powered agents that understand context and tone.',
    icon: <EmailIcon sx={{ fontSize: 40 }} />,
  },
];

const Features = () => {
  return (
    <Box sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h2" align="center" gutterBottom>
          Powerful AI Tools
        </Typography>
        <Typography variant="subtitle1" align="center" color="text.secondary" paragraph>
          Transform your ideas into reality with our suite of AI-powered tools
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Paper
                  sx={{
                    p: 4,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                  }}
                >
                  <Box sx={{ mb: 2 }}>{feature.icon}</Box>
                  <Typography variant="h6" gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {feature.description}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Features; 
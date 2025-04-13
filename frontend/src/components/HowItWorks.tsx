import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import ImageIcon from '@mui/icons-material/Image';

const steps = [
  {
    title: 'Enter Your Prompt',
    description: 'Describe the image you want to generate in detail.',
    icon: <CodeIcon sx={{ fontSize: 40 }} />,
  },
  {
    title: 'Choose Style',
    description: 'Select from various artistic styles to match your vision.',
    icon: <CloudUploadIcon sx={{ fontSize: 40 }} />,
  },
  {
    title: 'Generate & Download',
    description: 'Get your AI-generated image and download it in high resolution.',
    icon: <ImageIcon sx={{ fontSize: 40 }} />,
  },
];

const HowItWorks = () => {
  return (
    <Box sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h2" align="center" gutterBottom>
          How It Works
        </Typography>
        <Typography variant="subtitle1" align="center" color="text.secondary" paragraph>
          Create stunning AI-generated images in three simple steps
        </Typography>
        <Grid container spacing={4}>
          {steps.map((step) => (
            <Grid item xs={12} md={4} key={step.title}>
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
                  <Box sx={{ mb: 2 }}>{step.icon}</Box>
                  <Typography variant="h6" gutterBottom>
                    {step.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {step.description}
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

export default HowItWorks; 
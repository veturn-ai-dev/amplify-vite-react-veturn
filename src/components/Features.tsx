import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { Image, Mic, Mail } from '@mui/icons-material';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <Image sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: 'Text to Image',
    description: 'Transform your text descriptions into stunning visuals with our advanced AI image generation technology.',
  },
  {
    icon: <Mic sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: 'Text to Speech',
    description: 'Convert your text into natural-sounding speech with multiple voice options and customization features.',
  },
  {
    icon: <Mail sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: 'Email Agents',
    description: 'Automate your email communications with intelligent agents that can handle various tasks and responses.',
  },
];

export default function Features() {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: 'white',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              fontSize: { xs: '2rem', md: '2.5rem' },
              mb: 2,
            }}
          >
            Powerful AI Tools
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ maxWidth: '800px', mx: 'auto' }}
          >
            Discover our suite of AI-powered tools designed to enhance your creative workflow
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    backgroundColor: (theme) => theme.palette.grey[50],
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                    },
                  }}
                >
                  <Box sx={{ mb: 3 }}>{feature.icon}</Box>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      mb: 2,
                    }}
                  >
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
} 
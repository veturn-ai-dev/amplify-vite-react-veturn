import React from 'react';
import { Box, Container, Typography, Button, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const MotionBox = motion(Box);

export default function Home() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const handleGetStarted = () => {
    if (isAuthenticated) {
      navigate('/dashboard');
    } else {
      navigate('/auth/signup');
    }
  };

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          pt: { xs: 8, md: 12 },
          pb: { xs: 6, md: 8 },
          backgroundColor: 'white',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    fontWeight: 800,
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    mb: 2,
                    lineHeight: 1.2,
                  }}
                >
                  Your AI-Powered Creative Suite
                </Typography>
                <Typography
                  variant="h5"
                  color="text.secondary"
                  sx={{ mb: 4, maxWidth: '600px' }}
                >
                  Transform your ideas into reality with our powerful AI tools. Generate images, convert text to speech, and manage email communications with ease.
                </Typography>
                <Button
                  variant="contained"
                  size="large"
                  onClick={handleGetStarted}
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                  }}
                >
                  Get Started
                </Button>
              </MotionBox>
            </Grid>
            <Grid item xs={12} md={6}>
              <MotionBox
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                sx={{
                  position: 'relative',
                  '&:hover': {
                    transform: 'scale(1.02)',
                    transition: 'transform 0.3s ease',
                  },
                }}
              >
                <Paper
                  elevation={6}
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    overflow: 'hidden',
                  }}
                >
                  <Box
                    component="img"
                    src="/hero-image.png"
                    alt="AI Creative Suite"
                    sx={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: 1,
                    }}
                  />
                </Paper>
              </MotionBox>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          backgroundColor: 'grey.50',
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
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
              Our suite of AI tools helps you bring your creative vision to life
            </Typography>
          </Box>

          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
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
                    backgroundColor: 'white',
                    borderRadius: 2,
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                    },
                  }}
                >
                  <Box
                    component="img"
                    src="/text-to-image-icon.png"
                    alt="Text to Image"
                    sx={{ width: 64, height: 64, mb: 3 }}
                  />
                  <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                    Text to Image
                  </Typography>
                  <Typography color="text.secondary">
                    Transform your text descriptions into stunning visual art with our advanced AI image generation.
                  </Typography>
                </Paper>
              </MotionBox>
            </Grid>

            <Grid item xs={12} md={4}>
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
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
                    backgroundColor: 'white',
                    borderRadius: 2,
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                    },
                  }}
                >
                  <Box
                    component="img"
                    src="/text-to-speech-icon.png"
                    alt="Text to Speech"
                    sx={{ width: 64, height: 64, mb: 3 }}
                  />
                  <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                    Text to Speech
                  </Typography>
                  <Typography color="text.secondary">
                    Convert your written content into natural-sounding speech with our AI-powered voice synthesis.
                  </Typography>
                </Paper>
              </MotionBox>
            </Grid>

            <Grid item xs={12} md={4}>
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
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
                    backgroundColor: 'white',
                    borderRadius: 2,
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                    },
                  }}
                >
                  <Box
                    component="img"
                    src="/email-agent-icon.png"
                    alt="Email Agent"
                    sx={{ width: 64, height: 64, mb: 3 }}
                  />
                  <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                    Email Agent
                  </Typography>
                  <Typography color="text.secondary">
                    Automate and enhance your email communications with our intelligent email management system.
                  </Typography>
                </Paper>
              </MotionBox>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
} 
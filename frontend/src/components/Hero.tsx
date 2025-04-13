import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { ArrowRight } from '@mui/icons-material';

export default function Hero() {
  return (
    <Box
      sx={{
        pt: { xs: 8, md: 12 },
        pb: { xs: 6, md: 8 },
        backgroundColor: (theme) => theme.palette.grey[50],
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
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
                sx={{ mb: 4, fontSize: { xs: '1.25rem', md: '1.5rem' } }}
              >
                Transform your ideas into reality with our powerful AI tools. Generate images, convert text to speech, and manage email communications with ease.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<ArrowRight />}
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                  }}
                >
                  Get Started
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                  }}
                >
                  Learn More
                </Button>
              </Box>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Box
                component="img"
                src="/hero-image.png"
                alt="AI Creative Suite"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 2,
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.02)',
                  },
                }}
              />
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
} 
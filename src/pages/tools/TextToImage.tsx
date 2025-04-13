import React, { useState } from 'react';
import { Box, Container, Typography, TextField, Button, Grid, Paper, CircularProgress } from '@mui/material';
import { useAuth } from '../../contexts/AuthContext';

export default function TextToImage() {
  const { user } = useAuth();
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    
    setLoading(true);
    try {
      // TODO: Implement image generation logic
      // This is a placeholder for the actual API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setGeneratedImage('https://via.placeholder.com/512');
    } catch (error) {
      console.error('Error generating image:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{
            fontWeight: 800,
            fontSize: { xs: '2rem', md: '2.5rem' },
            mb: 2,
          }}
        >
          Text to Image
        </Typography>
        <Typography
          variant="h5"
          color="text.secondary"
          sx={{ mb: 6 }}
        >
          Transform your text descriptions into stunning images for your veterinary practice.
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                backgroundColor: (theme) => theme.palette.grey[50],
                borderRadius: 2,
                height: '100%',
              }}
            >
              <Typography variant="h6" sx={{ mb: 3 }}>
                Enter your prompt
              </Typography>
              <TextField
                fullWidth
                multiline
                rows={4}
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Describe the image you want to generate..."
                sx={{ mb: 3 }}
              />
              <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={handleGenerate}
                disabled={!prompt.trim() || loading}
                sx={{ width: '100%' }}
              >
                {loading ? (
                  <CircularProgress size={24} color="inherit" />
                ) : (
                  'Generate Image'
                )}
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                backgroundColor: (theme) => theme.palette.grey[50],
                borderRadius: 2,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {generatedImage ? (
                <Box
                  component="img"
                  src={generatedImage}
                  alt="Generated"
                  sx={{
                    maxWidth: '100%',
                    height: 'auto',
                    borderRadius: 2,
                  }}
                />
              ) : (
                <Typography color="text.secondary" align="center">
                  Your generated image will appear here
                </Typography>
              )}
            </Paper>
          </Grid>
        </Grid>

        <Box sx={{ mt: 8 }}>
          <Typography variant="h4" sx={{ mb: 3 }}>
            Tips for Better Results
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  backgroundColor: (theme) => theme.palette.grey[50],
                  borderRadius: 2,
                  height: '100%',
                }}
              >
                <Typography variant="h6" sx={{ mb: 1 }}>
                  Be Specific
                </Typography>
                <Typography color="text.secondary">
                  Provide detailed descriptions including colors, style, and composition for better results.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  backgroundColor: (theme) => theme.palette.grey[50],
                  borderRadius: 2,
                  height: '100%',
                }}
              >
                <Typography variant="h6" sx={{ mb: 1 }}>
                  Use Keywords
                </Typography>
                <Typography color="text.secondary">
                  Include relevant veterinary terms and medical concepts to generate accurate images.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  backgroundColor: (theme) => theme.palette.grey[50],
                  borderRadius: 2,
                  height: '100%',
                }}
              >
                <Typography variant="h6" sx={{ mb: 1 }}>
                  Experiment
                </Typography>
                <Typography color="text.secondary">
                  Try different variations of your prompt to find the perfect image for your needs.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
} 
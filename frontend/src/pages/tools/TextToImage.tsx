import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { post } from '@aws-amplify/api-rest';
import { Amplify } from '@aws-amplify/core';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Grid,
  CircularProgress,
} from '@mui/material';

// Configure Amplify (should be in a separate config file)
Amplify.configure({
  API: {
    REST: {
      imageGenerationApi: {
        endpoint: import.meta.env.VITE_API_GATEWAY_URL,
        region: import.meta.env.VITE_AWS_REGION,
      },
    },
  },
});

const TextToImage = () => {
  const { user } = useAuth();
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      setError('Please log in to use this feature');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const token = await user.getIdToken();
      const { body } = await post({
        apiName: 'imageGenerationApi',
        path: '/generate-image',
        options: {
          body: { prompt },
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        },
      });

      const data = await body.json();
      setImageUrl(data.imageUrl);
    } catch (err) {
      setError('Failed to generate image. Please try again.');
      console.error('API Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Text to Image
        </Typography>
        <Paper sx={{ p: 3 }}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Enter your prompt"
                  variant="outlined"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={loading}
                  fullWidth
                >
                  {loading ? <CircularProgress size={24} /> : 'Generate Image'}
                </Button>
              </Grid>
              {error && (
                <Grid item xs={12}>
                  <Typography color="error">{error}</Typography>
                </Grid>
              )}
              {imageUrl && (
                <Grid item xs={12}>
                  <Box sx={{ mt: 2 }}>
                    <img
                      src={imageUrl}
                      alt="Generated"
                      style={{ maxWidth: '100%', height: 'auto' }}
                    />
                  </Box>
                </Grid>
              )}
            </Grid>
          </form>
        </Paper>
      </Box>
    </Container>
  );
};

export default TextToImage;
import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
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
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/generate-image`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate image');
      }

      const data = await response.json();
      setImageUrl(data.imageUrl);
    } catch (err) {
      setError('Failed to generate image. Please try again.');
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
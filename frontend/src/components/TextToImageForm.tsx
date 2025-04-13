import { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Typography,
  CircularProgress,
  Grid,
  Paper,
} from '@mui/material';
import { generateImage } from '../services/aiService';

const styles = {
  realistic: 'Realistic',
  artistic: 'Artistic',
  anime: 'Anime',
};

export default function TextToImageForm() {
  const [prompt, setPrompt] = useState('');
  const [style, setStyle] = useState<'realistic' | 'artistic' | 'anime'>('realistic');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [generatedImages, setGeneratedImages] = useState<string[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await generateImage({
        prompt,
        style,
        num_outputs: 1,
        image_dimensions: '512x512',
      });

      setGeneratedImages(response.images);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to generate image');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', p: 3 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          Text to Image Generation
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Transform your text descriptions into stunning images using AI
        </Typography>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Enter your prompt"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                multiline
                rows={4}
                required
                placeholder="Describe the image you want to generate..."
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Style</InputLabel>
                <Select
                  value={style}
                  label="Style"
                  onChange={(e) => setStyle(e.target.value as typeof style)}
                >
                  {Object.entries(styles).map(([key, label]) => (
                    <MenuItem key={key} value={key}>
                      {label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                size="large"
                disabled={loading || !prompt}
                sx={{ minWidth: 200 }}
              >
                {loading ? <CircularProgress size={24} /> : 'Generate Image'}
              </Button>
            </Grid>

            {error && (
              <Grid item xs={12}>
                <Typography color="error">{error}</Typography>
              </Grid>
            )}

            {generatedImages.length > 0 && (
              <Grid item xs={12}>
                <Typography variant="h6" gutterBottom>
                  Generated Images
                </Typography>
                <Grid container spacing={2}>
                  {generatedImages.map((imageUrl, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                      <Paper elevation={2} sx={{ p: 2 }}>
                        <Box
                          component="img"
                          src={imageUrl}
                          alt={`Generated image ${index + 1}`}
                          sx={{
                            width: '100%',
                            height: 'auto',
                            borderRadius: 1,
                          }}
                        />
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            )}
          </Grid>
        </form>
      </Paper>
    </Box>
  );
} 
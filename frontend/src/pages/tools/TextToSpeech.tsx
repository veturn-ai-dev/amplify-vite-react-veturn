import React, { useState, useRef } from 'react';
import { Box, Container, Typography, TextField, Button, Grid, Paper, CircularProgress, Slider, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { useAuth } from '../../contexts/AuthContext';

// Voice options from ElevenLabs
const voiceOptions = [
  { id: '21m00Tcm4TlvDq8ikWAM', name: 'Rachel' },
  { id: 'AZnzlk1XvdvUeBnXmlld', name: 'Domi' },
  { id: 'EXAVITQu4vr4xnSDxMaL', name: 'Bella' },
  { id: 'ErXwobaYiN019PkySvjV', name: 'Antoni' },
  { id: 'MF3mGyEYCl7XYWbV9V6O', name: 'Elli' },
  { id: 'TxGEqnHWrfWFTfGW9XjX', name: 'Josh' },
  { id: 'VR6AewLTigWG4xSOukaG', name: 'Arnold' },
  { id: 'pNInz6obpgDQGcFmaJgB', name: 'Adam' },
  { id: 'yoZ06aMxZJJ28mfd3POQ', name: 'Sam' },
];

export default function TextToSpeech() {
  const { user } = useAuth();
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectedVoice, setSelectedVoice] = useState(voiceOptions[0].id);
  const [stability, setStability] = useState(0.5);
  const [similarityBoost, setSimilarityBoost] = useState(0.75);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleGenerate = async () => {
    if (!text.trim()) return;
    
    setLoading(true);
    try {
      const response = await fetch('https://api.elevenlabs.io/v1/text-to-speech/' + selectedVoice, {
        method: 'POST',
        headers: {
          'Accept': 'audio/mpeg',
          'Content-Type': 'application/json',
          'xi-api-key': import.meta.env.VITE_ELEVENLABS_API_KEY,
        },
        body: JSON.stringify({
          text: text,
          model_id: 'eleven_monolingual_v1',
          voice_settings: {
            stability: stability,
            similarity_boost: similarityBoost,
          },
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate speech');
      }

      const audioBlob = await response.blob();
      const audioUrl = URL.createObjectURL(audioBlob);
      
      if (audioRef.current) {
        audioRef.current.src = audioUrl;
        audioRef.current.play();
      }
    } catch (error) {
      console.error('Error generating speech:', error);
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
          Text to Speech
        </Typography>
        <Typography
          variant="h5"
          color="text.secondary"
          sx={{ mb: 6 }}
        >
          Convert your text into natural-sounding speech for your veterinary practice.
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
                Enter your text
              </Typography>
              <TextField
                fullWidth
                multiline
                rows={4}
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter the text you want to convert to speech..."
                sx={{ mb: 3 }}
              />
              
              <FormControl fullWidth sx={{ mb: 3 }}>
                <InputLabel>Voice</InputLabel>
                <Select
                  value={selectedVoice}
                  label="Voice"
                  onChange={(e) => setSelectedVoice(e.target.value)}
                >
                  {voiceOptions.map((voice) => (
                    <MenuItem key={voice.id} value={voice.id}>
                      {voice.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <Typography gutterBottom>Stability</Typography>
              <Slider
                value={stability}
                onChange={(_, value) => setStability(value as number)}
                min={0}
                max={1}
                step={0.01}
                sx={{ mb: 3 }}
              />

              <Typography gutterBottom>Similarity Boost</Typography>
              <Slider
                value={similarityBoost}
                onChange={(_, value) => setSimilarityBoost(value as number)}
                min={0}
                max={1}
                step={0.01}
                sx={{ mb: 3 }}
              />

              <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={handleGenerate}
                disabled={!text.trim() || loading}
                sx={{ width: '100%' }}
              >
                {loading ? (
                  <CircularProgress size={24} color="inherit" />
                ) : (
                  'Generate Speech'
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
              <audio
                ref={audioRef}
                controls
                style={{ width: '100%' }}
              >
                Your browser does not support the audio element.
              </audio>
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
                  Voice Selection
                </Typography>
                <Typography color="text.secondary">
                  Choose the voice that best matches your content and audience. Each voice has unique characteristics.
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
                  Stability
                </Typography>
                <Typography color="text.secondary">
                  Higher values make the voice more stable but less expressive. Lower values make it more dynamic.
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
                  Similarity Boost
                </Typography>
                <Typography color="text.secondary">
                  Higher values make the voice more similar to the original voice, while lower values allow for more variation.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
} 
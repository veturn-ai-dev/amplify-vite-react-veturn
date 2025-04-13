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
import { Settings as SettingsIcon, Mail as MailIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { IconButton } from '@mui/material';

const EmailAgents = () => {
  const { user } = useAuth();
  const [subject, setSubject] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [generatedEmail, setGeneratedEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      setError('Please log in to use this feature');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/generate-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ subject, content }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate email');
      }

      const data = await response.json();
      setGeneratedEmail(data.email);
    } catch (err) {
      setError('Failed to generate email. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              fontSize: { xs: '2rem', md: '2.5rem' },
              mb: 2,
              textAlign: 'center',
            }}
          >
            Email Agents
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ mb: 6, textAlign: 'center' }}
          >
            Intelligent email management and automation
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {/* Create Agent Card */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  backgroundColor: (theme) => theme.palette.grey[50],
                  borderRadius: 2,
                  height: '100%',
                }}
              >
                <Typography variant="h5" sx={{ mb: 1 }}>
                  Create New Agent
                </Typography>
                <Typography color="text.secondary" sx={{ mb: 3 }}>
                  Set up a new email agent with custom rules and behaviors
                </Typography>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <TextField
                    fullWidth
                    label="Subject"
                    variant="outlined"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                  />
                  <TextField
                    fullWidth
                    multiline
                    rows={4}
                    label="Content"
                    variant="outlined"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={loading}
                    fullWidth
                  >
                    {loading ? <CircularProgress size={24} /> : 'Generate Email'}
                  </Button>
                </form>
              </Paper>
            </motion.div>
          </Grid>

          {/* Active Agents */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  backgroundColor: (theme) => theme.palette.grey[50],
                  borderRadius: 2,
                  height: '100%',
                }}
              >
                <Typography variant="h5" sx={{ mb: 1 }}>
                  Active Agents
                </Typography>
                <Typography color="text.secondary" sx={{ mb: 3 }}>
                  Manage your existing email agents
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {/* Support Agent */}
                  <Paper
                    elevation={0}
                    sx={{
                      p: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      backgroundColor: 'white',
                      borderRadius: 1,
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <MailIcon color="primary" />
                      <Box>
                        <Typography variant="subtitle1" fontWeight="medium">
                          Support Agent
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          support@company.com
                        </Typography>
                      </Box>
                    </Box>
                    <IconButton>
                      <SettingsIcon />
                    </IconButton>
                  </Paper>

                  {/* Sales Agent */}
                  <Paper
                    elevation={0}
                    sx={{
                      p: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      backgroundColor: 'white',
                      borderRadius: 1,
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <MailIcon color="primary" />
                      <Box>
                        <Typography variant="subtitle1" fontWeight="medium">
                          Sales Agent
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          sales@company.com
                        </Typography>
                      </Box>
                    </Box>
                    <IconButton>
                      <SettingsIcon />
                    </IconButton>
                  </Paper>
                </Box>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>

        {error && (
          <Grid item xs={12}>
            <Typography color="error">{error}</Typography>
          </Grid>
        )}

        {generatedEmail && (
          <Grid item xs={12}>
            <Box sx={{ mt: 2 }}>
              <Typography variant="h6" gutterBottom>
                Generated Email:
              </Typography>
              <Paper sx={{ p: 2, bgcolor: 'grey.100' }}>
                <Typography>{generatedEmail}</Typography>
              </Paper>
            </Box>
          </Grid>
        )}
      </Container>
    </Box>
  );
};

export default EmailAgents; 
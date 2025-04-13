import React, { useState } from 'react';
import { Box, Container, Typography, TextField, Button, Paper, Link, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { motion } from 'framer-motion';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useAuth();
  const auth = getAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      setUser(result.user);
      navigate('/');
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setError('');
    setLoading(true);

    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      navigate('/');
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        py: 8,
        backgroundColor: (theme) => theme.palette.grey[50],
      }}
    >
      <Container maxWidth="sm">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Paper
            elevation={0}
            sx={{
              p: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: 'white',
              borderRadius: 2,
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: 800,
                mb: 2,
              }}
            >
              Welcome Back
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: 4 }}
            >
              Sign in to your account to continue
            </Typography>

            {error && (
              <Alert severity="error" sx={{ width: '100%', mb: 3 }}>
                {error}
              </Alert>
            )}

            <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{ mb: 2 }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                sx={{ mb: 3 }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                size="large"
                disabled={loading}
                sx={{ mb: 2 }}
              >
                {loading ? 'Signing in...' : 'Sign In'}
              </Button>
              <Button
                fullWidth
                variant="outlined"
                size="large"
                onClick={handleGoogleSignIn}
                disabled={loading}
                sx={{ mb: 2 }}
              >
                Sign in with Google
              </Button>
            </Box>

            <Box sx={{ mt: 3, textAlign: 'center' }}>
              <Typography variant="body2" color="text.secondary">
                Don't have an account?{' '}
                <Link
                  component="button"
                  variant="body2"
                  onClick={() => navigate('/auth/signup')}
                  sx={{ fontWeight: 600 }}
                >
                  Sign up
                </Link>
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                <Link
                  component="button"
                  variant="body2"
                  onClick={() => navigate('/auth/forgot-password')}
                >
                  Forgot password?
                </Link>
              </Typography>
            </Box>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
} 
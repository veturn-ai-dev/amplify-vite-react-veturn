import React from 'react';
import { Box, Container, Typography, Grid, TextField, Button, Paper } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

export default function Contact() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: Implement form submission logic
  };

  return (
    <Box sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                fontSize: { xs: '2rem', md: '2.5rem' },
                mb: 2,
              }}
            >
              Get in Touch
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ mb: 4 }}
            >
              Have questions about Veturn AI? We'd love to hear from you.
            </Typography>
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" sx={{ mb: 1 }}>
                Email
              </Typography>
              <Typography color="text.secondary">
                support@veturn.ai
              </Typography>
            </Box>
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" sx={{ mb: 1 }}>
                Phone
              </Typography>
              <Typography color="text.secondary">
                (555) 123-4567
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6" sx={{ mb: 1 }}>
                Address
              </Typography>
              <Typography color="text.secondary">
                123 Vet Street, Suite 100
                <br />
                San Francisco, CA 94107
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                backgroundColor: (theme) => theme.palette.grey[50],
                borderRadius: 2,
              }}
            >
              <Typography variant="h5" sx={{ mb: 3 }}>
                Send us a Message
              </Typography>
              <Box component="form" onSubmit={handleSubmit} noValidate>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      name="firstName"
                      autoComplete="given-name"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      autoComplete="family-name"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="subject"
                      label="Subject"
                      name="subject"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="message"
                      label="Message"
                      name="message"
                      multiline
                      rows={4}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="large"
                      endIcon={<SendIcon />}
                      sx={{ mt: 2 }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
} 
import React from 'react';
import { Box, Container, Typography, Link as MuiLink, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) => theme.palette.grey[100],
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Veturn AI
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Empowering veterinary practices with AI-powered tools for better patient care and practice management.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <MuiLink component={Link} to="/tools/text-to-image" color="inherit">
                Text to Image
              </MuiLink>
              <MuiLink component={Link} to="/tools/text-to-speech" color="inherit">
                Text to Speech
              </MuiLink>
              <MuiLink component={Link} to="/tools/email-agents" color="inherit">
                Email Agents
              </MuiLink>
              <MuiLink component={Link} to="/pricing" color="inherit">
                Pricing
              </MuiLink>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Contact
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email: support@veturn.ai
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Phone: (555) 123-4567
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Address: 123 Vet Street, Suite 100
            </Typography>
          </Grid>
        </Grid>
        <Box sx={{ mt: 4, pt: 2, borderTop: 1, borderColor: 'divider' }}>
          <Typography variant="body2" color="text.secondary" align="center">
            © {new Date().getFullYear()} Veturn AI. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
} 
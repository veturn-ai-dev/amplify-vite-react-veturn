import { Box, Container, Typography, Link, Grid } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Veturn AI
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Transform your ideas into reality with our suite of AI-powered tools.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Link component={RouterLink} to="/" color="inherit">
                Home
              </Link>
              <Link component={RouterLink} to="/pricing" color="inherit">
                Pricing
              </Link>
              <Link component={RouterLink} to="/faq" color="inherit">
                FAQ
              </Link>
              <Link component={RouterLink} to="/contact" color="inherit">
                Contact
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Legal
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Link href="#" color="inherit">
                Privacy Policy
              </Link>
              <Link href="#" color="inherit">
                Terms of Service
              </Link>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ mt: 5 }}>
          <Typography variant="body2" color="text.secondary" align="center">
            {'© '}
            {new Date().getFullYear()}
            {' Veturn AI. All rights reserved.'}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 
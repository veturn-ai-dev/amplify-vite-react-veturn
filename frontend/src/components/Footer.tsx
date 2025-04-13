import { Box, Container, Grid, Typography, Link, IconButton } from '@mui/material';
import {
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  LinkedIn as LinkedInIcon,
  Instagram as InstagramIcon,
} from '@mui/icons-material';

const footerLinks = [
  {
    title: 'Product',
    links: [
      { text: 'Features', href: '#features' },
      { text: 'Pricing', href: '#pricing' },
      { text: 'How It Works', href: '#how-it-works' },
    ],
  },
  {
    title: 'Company',
    links: [
      { text: 'About Us', href: '/about' },
      { text: 'Contact', href: '#contact' },
      { text: 'Careers', href: '/careers' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { text: 'Blog', href: '/blog' },
      { text: 'Documentation', href: '/docs' },
      { text: 'Support', href: '/support' },
    ],
  },
];

const socialLinks = [
  { icon: <FacebookIcon />, href: 'https://facebook.com' },
  { icon: <TwitterIcon />, href: 'https://twitter.com' },
  { icon: <LinkedInIcon />, href: 'https://linkedin.com' },
  { icon: <InstagramIcon />, href: 'https://instagram.com' },
];

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'background.paper',
        py: 6,
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              Veturn
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              AI-powered veterinary practice management software to streamline your
              clinic operations and improve patient care.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              {socialLinks.map((social, index) => (
                <IconButton
                  key={index}
                  component="a"
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>
          {footerLinks.map((column) => (
            <Grid item xs={12} sm={4} md={2} key={column.title}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                {column.title}
              </Typography>
              <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                {column.links.map((link) => (
                  <Box component="li" key={link.text} sx={{ mb: 1 }}>
                    <Link
                      href={link.href}
                      color="text.secondary"
                      underline="hover"
                    >
                      {link.text}
                    </Link>
                  </Box>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>
        <Box
          sx={{
            mt: 4,
            pt: 4,
            borderTop: '1px solid',
            borderColor: 'divider',
            textAlign: 'center',
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Veturn. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
} 
import React from 'react';
import { Box, Container, Typography, Grid, Paper, Button, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Check as CheckIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';

const tiers = [
  {
    title: 'Starter',
    price: '9',
    description: 'Perfect for individuals and small projects',
    features: [
      '10 Image generations per month',
      '5 Text to Speech conversions',
      'Basic Email Agent features',
      'Standard support',
      'Community access',
    ],
    buttonText: 'Get Started',
    buttonVariant: 'outlined',
  },
  {
    title: 'Professional',
    subheader: 'Most Popular',
    price: '29',
    description: 'For professionals and growing teams',
    features: [
      '100 Image generations per month',
      '50 Text to Speech conversions',
      'Advanced Email Agent features',
      'Priority support',
      'API access',
      'Custom voice models',
    ],
    buttonText: 'Start Free Trial',
    buttonVariant: 'contained',
  },
  {
    title: 'Enterprise',
    price: '99',
    description: 'For large organizations and high-volume needs',
    features: [
      'Unlimited Image generations',
      'Unlimited Text to Speech',
      'Full Email Agent capabilities',
      '24/7 dedicated support',
      'Custom integrations',
      'Team management',
      'Advanced analytics',
    ],
    buttonText: 'Contact Sales',
    buttonVariant: 'outlined',
  },
];

export default function Pricing() {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: 'white',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              fontSize: { xs: '2rem', md: '2.5rem' },
              mb: 2,
            }}
          >
            Simple, Transparent Pricing
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ maxWidth: '800px', mx: 'auto' }}
          >
            Choose the plan that's right for you. All plans include access to our full suite of AI tools.
          </Typography>
        </Box>

        <Grid container spacing={4} alignItems="flex-start">
          {tiers.map((tier, index) => (
            <Grid item xs={12} md={4} key={tier.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Paper
                  elevation={tier.subheader ? 6 : 0}
                  sx={{
                    p: 4,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: tier.subheader ? 'primary.main' : 'white',
                    color: tier.subheader ? 'white' : 'text.primary',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                    },
                  }}
                >
                  {tier.subheader && (
                    <Typography
                      variant="subtitle2"
                      sx={{
                        backgroundColor: 'white',
                        color: 'primary.main',
                        py: 0.5,
                        px: 2,
                        borderRadius: 1,
                        display: 'inline-block',
                        mb: 2,
                        fontWeight: 600,
                      }}
                    >
                      {tier.subheader}
                    </Typography>
                  )}
                  <Typography
                    component="h2"
                    variant="h4"
                    sx={{
                      fontWeight: 700,
                      mb: 1,
                    }}
                  >
                    {tier.title}
                  </Typography>
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 800,
                      mb: 2,
                    }}
                  >
                    ${tier.price}
                    <Typography
                      component="span"
                      variant="h6"
                      sx={{ ml: 1, fontWeight: 400 }}
                    >
                      /month
                    </Typography>
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{ mb: 3, opacity: 0.8 }}
                  >
                    {tier.description}
                  </Typography>
                  <List sx={{ mb: 3 }}>
                    {tier.features.map((feature) => (
                      <ListItem key={feature} sx={{ px: 0, py: 0.5 }}>
                        <ListItemIcon sx={{ minWidth: 32 }}>
                          <CheckIcon
                            sx={{
                              color: tier.subheader ? 'white' : 'primary.main',
                            }}
                          />
                        </ListItemIcon>
                        <ListItemText primary={feature} />
                      </ListItem>
                    ))}
                  </List>
                  <Button
                    fullWidth
                    variant={tier.buttonVariant as 'outlined' | 'contained'}
                    size="large"
                    sx={{
                      mt: 'auto',
                      color: tier.subheader ? 'primary.main' : 'white',
                      backgroundColor: tier.subheader ? 'white' : 'primary.main',
                      '&:hover': {
                        backgroundColor: tier.subheader
                          ? 'rgba(255, 255, 255, 0.9)'
                          : 'primary.dark',
                      },
                    }}
                  >
                    {tier.buttonText}
                  </Button>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
} 
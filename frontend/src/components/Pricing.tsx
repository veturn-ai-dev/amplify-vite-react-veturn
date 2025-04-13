import { Box, Typography, Container, Grid, Card, CardContent, Button, List, ListItem, ListItemIcon } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

const plans = [
  {
    title: 'Starter',
    price: '$49',
    period: '/month',
    features: [
      'Up to 5 users',
      'Basic appointment scheduling',
      'Patient records management',
      'Email support',
    ],
    buttonText: 'Get Started',
    popular: false,
  },
  {
    title: 'Professional',
    price: '$99',
    period: '/month',
    features: [
      'Up to 15 users',
      'Advanced appointment scheduling',
      'Comprehensive patient records',
      'Analytics dashboard',
      'Priority support',
    ],
    buttonText: 'Get Started',
    popular: true,
  },
  {
    title: 'Enterprise',
    price: 'Custom',
    period: '',
    features: [
      'Unlimited users',
      'Custom integrations',
      'Advanced analytics',
      'Dedicated support',
      'API access',
    ],
    buttonText: 'Contact Us',
    popular: false,
  },
];

export default function Pricing() {
  return (
    <Box
      sx={{
        bgcolor: 'background.default',
        py: 8,
      }}
      id="pricing"
    >
      <Container maxWidth="lg">
        <Typography
          component="h2"
          variant="h3"
          align="center"
          color="text.primary"
          gutterBottom
          sx={{ fontWeight: 'bold', mb: 6 }}
        >
          Pricing Plans
        </Typography>
        <Grid container spacing={4} alignItems="stretch">
          {plans.map((plan) => (
            <Grid item key={plan.title} xs={12} md={4}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  ...(plan.popular && {
                    border: '2px solid',
                    borderColor: 'primary.main',
                  }),
                }}
              >
                {plan.popular && (
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      bgcolor: 'primary.main',
                      color: 'white',
                      px: 2,
                      py: 1,
                      borderRadius: '0 0 0 4px',
                    }}
                  >
                    Most Popular
                  </Box>
                )}
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    variant="h5"
                    component="h3"
                    align="center"
                    sx={{ fontWeight: 'bold', mb: 2 }}
                  >
                    {plan.title}
                  </Typography>
                  <Typography
                    variant="h3"
                    component="div"
                    align="center"
                    sx={{ fontWeight: 'bold', mb: 1 }}
                  >
                    {plan.price}
                    <Typography
                      component="span"
                      variant="h6"
                      color="text.secondary"
                    >
                      {plan.period}
                    </Typography>
                  </Typography>
                  <List>
                    {plan.features.map((feature) => (
                      <ListItem key={feature}>
                        <ListItemIcon>
                          <CheckIcon color="primary" />
                        </ListItemIcon>
                        <Typography>{feature}</Typography>
                      </ListItem>
                    ))}
                  </List>
                  <Box sx={{ mt: 3, textAlign: 'center' }}>
                    <Button
                      variant={plan.popular ? 'contained' : 'outlined'}
                      size="large"
                      fullWidth
                    >
                      {plan.buttonText}
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
} 
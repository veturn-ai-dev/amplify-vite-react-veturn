import { Box, Typography, Container, Grid, Stepper, Step, StepLabel, StepContent } from '@mui/material';
import {
  PersonAdd as PersonAddIcon,
  CalendarToday as CalendarIcon,
  Assessment as AssessmentIcon,
  CheckCircle as CheckCircleIcon,
} from '@mui/icons-material';

const steps = [
  {
    label: 'Sign Up',
    description: 'Create your account and set up your veterinary practice profile.',
    icon: <PersonAddIcon />,
  },
  {
    label: 'Schedule Appointments',
    description: 'Start managing appointments with our intuitive calendar system.',
    icon: <CalendarIcon />,
  },
  {
    label: 'Manage Records',
    description: 'Keep track of patient records and medical history digitally.',
    icon: <AssessmentIcon />,
  },
  {
    label: 'Grow Your Practice',
    description: 'Use analytics and insights to improve your practice efficiency.',
    icon: <CheckCircleIcon />,
  },
];

export default function HowItWorks() {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        py: 8,
      }}
      id="how-it-works"
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
          How It Works
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8} sx={{ mx: 'auto' }}>
            <Stepper orientation="vertical">
              {steps.map((step, index) => (
                <Step key={step.label} active={true}>
                  <StepLabel
                    StepIconProps={{
                      icon: step.icon,
                    }}
                  >
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                      {step.label}
                    </Typography>
                  </StepLabel>
                  <StepContent>
                    <Typography color="text.secondary" sx={{ mb: 2 }}>
                      {step.description}
                    </Typography>
                  </StepContent>
                </Step>
              ))}
            </Stepper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
} 
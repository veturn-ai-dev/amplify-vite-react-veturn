import { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  TextField,
  Button,
  Paper,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  message: yup.string().required('Message is required'),
});

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // Handle form submission
      console.log(data);
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        py: 8,
      }}
      id="contact"
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
          Contact Us
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 4 }}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Name"
                      {...register('name')}
                      error={!!errors.name}
                      helperText={errors.name?.message}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Email"
                      type="email"
                      {...register('email')}
                      error={!!errors.email}
                      helperText={errors.email?.message}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Message"
                      multiline
                      rows={4}
                      {...register('message')}
                      error={!!errors.message}
                      helperText={errors.message?.message}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      fullWidth
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                Get in Touch
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                Have questions about our veterinary practice management software?
                We'd love to hear from you. Fill out the form and we'll get back
                to you as soon as possible.
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                You can also reach us at:
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Email: support@veturn.ai
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Phone: (123) 456-7890
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
} 
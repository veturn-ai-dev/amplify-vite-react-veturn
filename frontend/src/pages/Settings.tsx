import { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  TextField,
  Button,
  Grid,
  Divider,
} from '@mui/material';
import { Save as SaveIcon } from '@mui/icons-material';

interface SettingsForm {
  clinicName: string;
  address: string;
  phone: string;
  email: string;
  workingHours: string;
}

const initialSettings: SettingsForm = {
  clinicName: 'Veturn AI Clinic',
  address: '123 Main St, City, State 12345',
  phone: '123-456-7890',
  email: 'contact@veturnclinic.com',
  workingHours: 'Mon-Fri: 9:00 AM - 5:00 PM',
};

export default function Settings() {
  const [settings, setSettings] = useState<SettingsForm>(initialSettings);

  const handleChange = (field: keyof SettingsForm) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSettings({
      ...settings,
      [field]: event.target.value,
    });
  };

  const handleSave = () => {
    // Handle save settings
    console.log('Saving settings:', settings);
  };

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Settings
      </Typography>

      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" sx={{ mb: 3 }}>
          Clinic Information
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Clinic Name"
              value={settings.clinicName}
              onChange={handleChange('clinicName')}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Phone"
              value={settings.phone}
              onChange={handleChange('phone')}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Address"
              value={settings.address}
              onChange={handleChange('address')}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Email"
              value={settings.email}
              onChange={handleChange('email')}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Working Hours"
              value={settings.workingHours}
              onChange={handleChange('workingHours')}
            />
          </Grid>
        </Grid>

        <Divider sx={{ my: 3 }} />

        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            variant="contained"
            startIcon={<SaveIcon />}
            onClick={handleSave}
          >
            Save Changes
          </Button>
        </Box>
      </Paper>
    </Box>
  );
} 
import { Grid, Paper, Typography, Box } from '@mui/material';
import {
  People as PeopleIcon,
  CalendarToday as CalendarIcon,
  Assignment as AssignmentIcon,
} from '@mui/icons-material';

const StatCard = ({ title, value, icon }: { title: string; value: number; icon: React.ReactNode }) => (
  <Paper
    sx={{
      p: 3,
      display: 'flex',
      flexDirection: 'column',
      height: 140,
    }}
  >
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
      {icon}
      <Typography variant="h6" sx={{ ml: 1 }}>
        {title}
      </Typography>
    </Box>
    <Typography variant="h4">{value}</Typography>
  </Paper>
);

export default function Dashboard() {
  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <StatCard
            title="Total Patients"
            value={150}
            icon={<PeopleIcon color="primary" />}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <StatCard
            title="Today's Appointments"
            value={8}
            icon={<CalendarIcon color="primary" />}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <StatCard
            title="Pending Tasks"
            value={12}
            icon={<AssignmentIcon color="primary" />}
          />
        </Grid>
      </Grid>
    </Box>
  );
} 
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#F97316', // orange-500
      light: '#FB923C', // orange-400
      dark: '#EA580C', // orange-600
      contrastText: '#F8FAFC', // slate-50
    },
    secondary: {
      main: '#E2E8F0', // slate-200
      light: '#F1F5F9', // slate-100
      dark: '#CBD5E1', // slate-300
      contrastText: '#1E293B', // slate-800
    },
    background: {
      default: '#FFFFFF',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#1E293B', // slate-800
      secondary: '#64748B', // slate-500
    },
    error: {
      main: '#DC2626', // red-600
      light: '#EF4444', // red-500
      dark: '#B91C1C', // red-700
    },
    warning: {
      main: '#F59E0B', // amber-500
      light: '#FBBF24', // amber-400
      dark: '#D97706', // amber-600
    },
    success: {
      main: '#10B981', // emerald-500
      light: '#34D399', // emerald-400
      dark: '#059669', // emerald-600
    },
    info: {
      main: '#3B82F6', // blue-500
      light: '#60A5FA', // blue-400
      dark: '#2563EB', // blue-600
    },
  },
  typography: {
    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 700,
      lineHeight: 1.3,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 600,
      lineHeight: 1.5,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '0.5rem',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
        contained: {
          '&.MuiButton-containedPrimary': {
            background: 'linear-gradient(to right, #F97316, #F59E0B, #3B82F6)',
            '&:hover': {
              background: 'linear-gradient(to right, #EA580C, #D97706, #2563EB)',
            },
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '0.5rem',
          boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF',
          color: '#1E293B',
          boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '0.5rem',
          boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        },
      },
    },
  },
});

export default theme; 
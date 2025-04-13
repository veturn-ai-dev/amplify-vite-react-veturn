import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import TextToImage from './pages/tools/TextToImage';
import TextToSpeech from './pages/tools/TextToSpeech';
import EmailAgents from './pages/tools/EmailAgents';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import { AuthProvider } from './contexts/AuthContext';
import TextToImageForm from './components/TextToImageForm';
import { Box } from '@mui/material';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <Router>
          <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header />
            <Box component="main" sx={{ flexGrow: 1 }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/tools/text-to-image" element={<TextToImageForm />} />
                <Route path="/tools/text-to-speech" element={<TextToSpeech />} />
                <Route path="/tools/email-agents" element={<EmailAgents />} />
                <Route path="/auth/login" element={<Login />} />
                <Route path="/auth/signup" element={<Signup />} />
              </Routes>
            </Box>
            <Footer />
          </Box>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;

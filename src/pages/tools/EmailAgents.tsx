import React, { useState } from 'react';
import { Box, Container, Typography, TextField, Button, Grid, Paper, IconButton } from '@mui/material';
import { Add as PlusIcon, Settings as SettingsIcon, Mail as MailIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useAuth } from '../../contexts/AuthContext';

export default function EmailAgents() {
  const { user } = useAuth();
  const [agentName, setAgentName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [description, setDescription] = useState('');

  const handleCreateAgent = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement agent creation logic
    console.log('Creating agent:', { agentName, emailAddress, description });
  };

  return (
    <Box sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              fontSize: { xs: '2rem', md: '2.5rem' },
              mb: 2,
              textAlign: 'center',
            }}
          >
            Email Agents
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ mb: 6, textAlign: 'center' }}
          >
            Intelligent email management and automation
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {/* Create Agent Card */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  backgroundColor: (theme) => theme.palette.grey[50],
                  borderRadius: 2,
                  height: '100%',
                }}
              >
                <Typography variant="h5" sx={{ mb: 1 }}>
                  Create New Agent
                </Typography>
                <Typography color="text.secondary" sx={{ mb: 3 }}>
                  Set up a new email agent with custom rules and behaviors
                </Typography>

                <form onSubmit={handleCreateAgent} className="space-y-4">
                  <TextField
                    fullWidth
                    label="Agent Name"
                    value={agentName}
                    onChange={(e) => setAgentName(e.target.value)}
                    placeholder="e.g., Customer Support Agent"
                    sx={{ mb: 3 }}
                  />
                  <TextField
                    fullWidth
                    type="email"
                    label="Email Address"
                    value={emailAddress}
                    onChange={(e) => setEmailAddress(e.target.value)}
                    placeholder="agent@yourdomain.com"
                    sx={{ mb: 3 }}
                  />
                  <TextField
                    fullWidth
                    multiline
                    rows={4}
                    label="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Describe the agent's purpose and behavior..."
                    sx={{ mb: 3 }}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth
                    startIcon={<PlusIcon />}
                  >
                    Create Agent
                  </Button>
                </form>
              </Paper>
            </motion.div>
          </Grid>

          {/* Active Agents */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  backgroundColor: (theme) => theme.palette.grey[50],
                  borderRadius: 2,
                  height: '100%',
                }}
              >
                <Typography variant="h5" sx={{ mb: 1 }}>
                  Active Agents
                </Typography>
                <Typography color="text.secondary" sx={{ mb: 3 }}>
                  Manage your existing email agents
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {/* Support Agent */}
                  <Paper
                    elevation={0}
                    sx={{
                      p: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      backgroundColor: 'white',
                      borderRadius: 1,
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <MailIcon color="primary" />
                      <Box>
                        <Typography variant="subtitle1" fontWeight="medium">
                          Support Agent
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          support@company.com
                        </Typography>
                      </Box>
                    </Box>
                    <IconButton>
                      <SettingsIcon />
                    </IconButton>
                  </Paper>

                  {/* Sales Agent */}
                  <Paper
                    elevation={0}
                    sx={{
                      p: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      backgroundColor: 'white',
                      borderRadius: 1,
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <MailIcon color="primary" />
                      <Box>
                        <Typography variant="subtitle1" fontWeight="medium">
                          Sales Agent
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          sales@company.com
                        </Typography>
                      </Box>
                    </Box>
                    <IconButton>
                      <SettingsIcon />
                    </IconButton>
                  </Paper>
                </Box>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
} 
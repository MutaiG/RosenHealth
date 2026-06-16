import { Box } from '@mui/material';
import Navbar from './Navbar';
import Footer from './Footer';
import EmergencyCallBlock from '../ui/EmergencyCallBlock';
import { type ReactNode } from 'react';

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Navbar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          mt: { xs: '64px', sm: '72px' },
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {children}
      </Box>
      <Footer />
      <EmergencyCallBlock />
    </Box>
  );
}

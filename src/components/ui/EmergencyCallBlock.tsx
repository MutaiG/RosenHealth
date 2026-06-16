import { Box, Button, Typography } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';

const EMERGENCY = import.meta.env.VITE_EMERGENCY_PHONE || '+254 700 000 000';

export default function EmergencyCallBlock() {
  return (
    <Box
      sx={{
        position: 'fixed', bottom: 24, right: 24, zIndex: 999,
        bgcolor: '#2C3E50', border: '2px solid #D4AF37',
        borderRadius: 2, p: 2, boxShadow: '0 8px 32px rgba(44,62,80,0.4)',
        display: { xs: 'flex', md: 'none' },
        flexDirection: 'column', alignItems: 'center', gap: 0.5,
        minWidth: 200,
        pointerEvents: 'auto',
      }}
    >
      <Typography sx={{ color: '#D4AF37', fontSize: 10, fontFamily: 'Lato', letterSpacing: 2, textTransform: 'uppercase' }}>
        24/7 Emergency
      </Typography>
      <Button
        href={`tel:${EMERGENCY}`}
        startIcon={<PhoneIcon />}
        sx={{ color: '#D4AF37', fontFamily: 'Lato', fontSize: 13, fontWeight: 700, p: 0, '&:hover': { bgcolor: 'transparent' } }}
      >
        {EMERGENCY}
      </Button>
    </Box>
  );
}

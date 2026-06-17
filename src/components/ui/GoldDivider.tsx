import { Box } from '@mui/material';

export default function GoldDivider({ sx = {} }: { sx?: object }) {
  return <Box sx={{ height: 2, width: 60, bgcolor: '#D4AF37', opacity: 0.5, my: 2, ...sx }} />;
}

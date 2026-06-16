import { Box, Typography, Grid, Card, CardContent, Chip, CircularProgress } from '@mui/material';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PendingIcon from '@mui/icons-material/Pending';
import CancelIcon from '@mui/icons-material/Cancel';
import { useAppointmentSummary } from '../../api/appointments';

export default function AdminDashboard() {
  const { data, isLoading } = useAppointmentSummary();

  const stats = data ? [
    { label: 'Total Pending', value: data.totalByStatus.Pending ?? 0, icon: <PendingIcon sx={{ color: '#D4AF37' }} /> },
    { label: 'Confirmed', value: data.totalByStatus.Confirmed ?? 0, icon: <CheckCircleIcon sx={{ color: '#2C3E50' }} /> },
    { label: 'Completed', value: data.totalByStatus.Completed ?? 0, icon: <EventNoteIcon sx={{ color: '#27ae60' }} /> },
    { label: 'Cancelled', value: data.totalByStatus.Cancelled ?? 0, icon: <CancelIcon sx={{ color: '#c0392b' }} /> },
  ] : [];

  return (
    <Box>
      <Typography variant="h4" sx={{ color: '#2C3E50', mb: 0.5 }}>Dashboard</Typography>
      <Box sx={{ width: 40, height: 2, bgcolor: '#D4AF37', mb: 4 }} />

      {isLoading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}><CircularProgress sx={{ color: '#D4AF37' }} /></Box>
      ) : (
        <Grid container spacing={3}>
          {stats.map(s => (
            <Grid item xs={6} md={3} key={s.label}>
              <Card sx={{ border: '1px solid rgba(212,175,55,0.2)' }}>
                <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  {s.icon}
                  <Box>
                    <Typography sx={{ color: '#5a6a7a', fontFamily: 'Lato', fontSize: 12 }}>{s.label}</Typography>
                    <Typography variant="h4" sx={{ color: '#2C3E50', fontFamily: 'Cormorant Garamond, serif' }}>{s.value}</Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}

          {data && (
            <Grid item xs={12} md={6}>
              <Card sx={{ border: '1px solid rgba(212,175,55,0.2)' }}>
                <CardContent>
                  <Typography variant="h6" sx={{ color: '#2C3E50', mb: 2 }}>Bookings by Track</Typography>
                  {Object.entries(data.totalByTrack).map(([track, count]) => (
                    <Box key={track} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 1, borderBottom: '1px solid rgba(212,175,55,0.15)' }}>
                      <Typography variant="body2" sx={{ color: '#5a6a7a', fontFamily: 'Lato' }}>{track === 'GynMIS' ? 'Gynaecological MIS' : track === 'Maternity' ? 'Maternity Care' : 'General Consultation'}</Typography>
                      <Chip label={count} size="small" sx={{ bgcolor: '#D4AF37', color: '#2C3E50', fontWeight: 700 }} />
                    </Box>
                  ))}
                </CardContent>
              </Card>
            </Grid>
          )}
        </Grid>
      )}

      {!isLoading && !data && (
        <Card sx={{ border: '1px solid rgba(212,175,55,0.2)', p: 4, textAlign: 'center' }}>
          <Typography sx={{ color: '#5a6a7a', fontFamily: 'Lato' }}>Connect the backend API to view appointment analytics.</Typography>
        </Card>
      )}
    </Box>
  );
}

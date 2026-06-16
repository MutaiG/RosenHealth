import { useState } from 'react';
import { Box, Typography, TextField, Card, CardContent, Grid, CircularProgress, Chip } from '@mui/material';
import { useAppointmentSummary } from '../../api/appointments';
import { format } from 'date-fns';

export default function AdminAnalytics() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const { data, isLoading } = useAppointmentSummary(from || undefined, to || undefined);

  return (
    <Box>
      <Typography variant="h4" sx={{ color: '#2C3E50', mb: 0.5 }}>Analytics</Typography>
      <Box sx={{ width: 40, height: 2, bgcolor: '#D4AF37', mb: 4 }} />

      <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
        <TextField size="small" type="date" label="From" InputLabelProps={{ shrink: true }} value={from}
          onChange={e => setFrom(e.target.value)} sx={{ bgcolor: '#fff' }} />
        <TextField size="small" type="date" label="To" InputLabelProps={{ shrink: true }} value={to}
          onChange={e => setTo(e.target.value)} sx={{ bgcolor: '#fff' }} />
      </Box>

      {isLoading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}><CircularProgress sx={{ color: '#D4AF37' }} /></Box>
      ) : data ? (
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card sx={{ border: '1px solid rgba(212,175,55,0.2)' }}>
              <CardContent>
                <Typography variant="h6" sx={{ color: '#2C3E50', mb: 2 }}>By Status</Typography>
                {Object.entries(data.totalByStatus).map(([status, count]) => (
                  <Box key={status} sx={{ display: 'flex', justifyContent: 'space-between', py: 1.5, borderBottom: '1px solid rgba(212,175,55,0.15)' }}>
                    <Typography variant="body2" sx={{ color: '#5a6a7a', fontFamily: 'Lato' }}>{status}</Typography>
                    <Chip label={count} size="small" sx={{ bgcolor: '#D4AF37', color: '#2C3E50', fontWeight: 700 }} />
                  </Box>
                ))}
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ border: '1px solid rgba(212,175,55,0.2)' }}>
              <CardContent>
                <Typography variant="h6" sx={{ color: '#2C3E50', mb: 2 }}>By Healthcare Track</Typography>
                {Object.entries(data.totalByTrack).map(([track, count]) => (
                  <Box key={track} sx={{ display: 'flex', justifyContent: 'space-between', py: 1.5, borderBottom: '1px solid rgba(212,175,55,0.15)' }}>
                    <Typography variant="body2" sx={{ color: '#5a6a7a', fontFamily: 'Lato' }}>{track === 'GynMIS' ? 'Gynaecological MIS' : track}</Typography>
                    <Chip label={count} size="small" sx={{ bgcolor: '#2C3E50', color: '#FDFBF7', fontWeight: 700 }} />
                  </Box>
                ))}
              </CardContent>
            </Card>
          </Grid>
          {data.dailyCounts?.length > 0 && (
            <Grid item xs={12}>
              <Card sx={{ border: '1px solid rgba(212,175,55,0.2)' }}>
                <CardContent>
                  <Typography variant="h6" sx={{ color: '#2C3E50', mb: 2 }}>Daily Bookings</Typography>
                  {data.dailyCounts.map(d => (
                    <Box key={d.date} sx={{ display: 'flex', justifyContent: 'space-between', py: 1, borderBottom: '1px solid rgba(212,175,55,0.1)' }}>
                      <Typography variant="body2" sx={{ color: '#5a6a7a', fontFamily: 'Lato' }}>{format(new Date(d.date), 'dd MMM yyyy')}</Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Box sx={{ height: 8, width: Math.max(d.count * 20, 8), bgcolor: '#D4AF37', borderRadius: 1 }} />
                        <Typography variant="body2" sx={{ color: '#2C3E50', fontWeight: 700, fontFamily: 'Lato', minWidth: 20 }}>{d.count}</Typography>
                      </Box>
                    </Box>
                  ))}
                </CardContent>
              </Card>
            </Grid>
          )}
        </Grid>
      ) : (
        <Card sx={{ border: '1px solid rgba(212,175,55,0.2)', p: 4, textAlign: 'center' }}>
          <Typography sx={{ color: '#5a6a7a', fontFamily: 'Lato' }}>Connect the backend API to view analytics data.</Typography>
        </Card>
      )}
    </Box>
  );
}

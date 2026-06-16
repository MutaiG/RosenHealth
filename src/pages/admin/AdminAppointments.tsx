import { useState } from 'react';
import {
  Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead,
  TableRow, Paper, Select, MenuItem, FormControl, IconButton,
  CircularProgress, TextField, Button,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { format } from 'date-fns';
import { useAppointments, useUpdateAppointmentStatus, useDeleteAppointment } from '../../api/appointments';
import type { AppointmentStatus, HealthcareTrack } from '../../types';
import { toast } from 'sonner';

const trackLabel: Record<HealthcareTrack, string> = {
  GynMIS: 'Gynaecological MIS', Maternity: 'Maternity Care', General: 'General',
};

export default function AdminAppointments() {
  const [filters, setFilters] = useState({ status: '', track: '', from: '', to: '' });
  const { data, isLoading } = useAppointments(filters);
  const { mutate: updateStatus } = useUpdateAppointmentStatus();
  const { mutate: deleteAppt } = useDeleteAppointment();

  return (
    <Box>
      <Typography variant="h4" sx={{ color: '#2C3E50', mb: 0.5 }}>Appointments</Typography>
      <Box sx={{ width: 40, height: 2, bgcolor: '#D4AF37', mb: 4 }} />

      <Box sx={{ display: 'flex', gap: 2, mb: 3, flexWrap: 'wrap' }}>
        <FormControl size="small" sx={{ minWidth: 140 }}>
          <Select value={filters.status} displayEmpty onChange={e => setFilters(f => ({ ...f, status: e.target.value }))}
            sx={{ bgcolor: '#fff' }}>
            <MenuItem value="">All Statuses</MenuItem>
            {['Pending', 'Confirmed', 'Completed', 'Cancelled'].map(s => <MenuItem key={s} value={s}>{s}</MenuItem>)}
          </Select>
        </FormControl>
        <FormControl size="small" sx={{ minWidth: 160 }}>
          <Select value={filters.track} displayEmpty onChange={e => setFilters(f => ({ ...f, track: e.target.value }))}
            sx={{ bgcolor: '#fff' }}>
            <MenuItem value="">All Tracks</MenuItem>
            <MenuItem value="GynMIS">Gynaecological MIS</MenuItem>
            <MenuItem value="Maternity">Maternity</MenuItem>
            <MenuItem value="General">General</MenuItem>
          </Select>
        </FormControl>
        <TextField size="small" type="date" label="From" InputLabelProps={{ shrink: true }} value={filters.from}
          onChange={e => setFilters(f => ({ ...f, from: e.target.value }))} sx={{ bgcolor: '#fff' }} />
        <TextField size="small" type="date" label="To" InputLabelProps={{ shrink: true }} value={filters.to}
          onChange={e => setFilters(f => ({ ...f, to: e.target.value }))} sx={{ bgcolor: '#fff' }} />
        <Button variant="outlined" size="small" onClick={() => setFilters({ status: '', track: '', from: '', to: '' })}
          sx={{ borderColor: '#D4AF37', color: '#2C3E50' }}>Clear</Button>
      </Box>

      {isLoading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}><CircularProgress sx={{ color: '#D4AF37' }} /></Box>
      ) : (
        <TableContainer component={Paper} sx={{ border: '1px solid rgba(212,175,55,0.2)' }}>
          <Table>
            <TableHead sx={{ bgcolor: '#2C3E50' }}>
              <TableRow>
                {['Patient', 'Track', 'Preferred Date', 'Status', 'Actions'].map(h => (
                  <TableCell key={h} sx={{ color: '#FDFBF7', fontFamily: 'Lato', fontSize: 12, letterSpacing: 1 }}>{h}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.length === 0 && (
                <TableRow><TableCell colSpan={5} align="center" sx={{ color: '#5a6a7a', py: 4 }}>No appointments found.</TableCell></TableRow>
              )}
              {data?.map(appt => (
                <TableRow key={appt.id} hover>
                  <TableCell>
                    <Typography sx={{ fontWeight: 600, fontFamily: 'Lato', fontSize: 13, color: '#2C3E50' }}>{appt.fullName}</Typography>
                    <Typography variant="caption" sx={{ color: '#5a6a7a' }}>{appt.email}</Typography>
                  </TableCell>
                  <TableCell><Typography variant="body2" sx={{ fontFamily: 'Lato', color: '#5a6a7a' }}>{trackLabel[appt.track]}</Typography></TableCell>
                  <TableCell><Typography variant="body2" sx={{ fontFamily: 'Lato', color: '#5a6a7a' }}>{format(new Date(appt.preferredDate), 'dd MMM yyyy, HH:mm')}</Typography></TableCell>
                  <TableCell>
                    <Select size="small" value={appt.status}
                      onChange={e => updateStatus({ id: appt.id, status: e.target.value as AppointmentStatus }, {
                        onSuccess: () => toast.success('Status updated'),
                        onError: () => toast.error('Update failed'),
                      })}
                      sx={{ fontSize: 12, fontFamily: 'Lato' }}>
                      {['Pending', 'Confirmed', 'Completed', 'Cancelled'].map(s => <MenuItem key={s} value={s} sx={{ fontSize: 13 }}>{s}</MenuItem>)}
                    </Select>
                  </TableCell>
                  <TableCell>
                    <IconButton size="small" onClick={() => deleteAppt(appt.id, { onSuccess: () => toast.success('Deleted'), onError: () => toast.error('Delete failed') })}
                      sx={{ color: '#c0392b' }}>
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
}

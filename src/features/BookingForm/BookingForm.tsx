import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Box, TextField, MenuItem, Button, Typography, CircularProgress, Grid,
} from '@mui/material';
import { toast } from 'sonner';
import { bookingSchema, type BookingFormData } from '../../lib/bookingSchema';
import { useSubmitAppointment } from '../../api/appointments';

export default function BookingForm() {
  const { mutate, isPending } = useSubmitAppointment();
  const { register, handleSubmit, control, reset, formState: { errors } } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
  });

  const onSubmit = (data: BookingFormData) => {
    mutate(
      { ...data, preferredDate: new Date(data.preferredDate).toISOString() },
      {
        onSuccess: () => {
          toast.success('Request submitted! A Care Coordinator will contact you within 2 business hours.');
          reset();
        },
        onError: (err: any) => {
          const msg = err?.response?.data?.message || 'Submission failed. Please try again.';
          toast.error(msg);
        },
      }
    );
  };

  const fieldSx = {
    '& .MuiOutlinedInput-root': {
      color: '#FDFBF7',
      '& fieldset': { borderColor: 'rgba(212,175,55,0.4)' },
      '&:hover fieldset': { borderColor: '#D4AF37' },
      '&.Mui-focused fieldset': { borderColor: '#D4AF37' },
    },
    '& .MuiInputLabel-root': { color: 'rgba(253,251,247,0.6)' },
    '& .MuiInputLabel-root.Mui-focused': { color: '#D4AF37' },
    '& .MuiFormHelperText-root': { color: '#e88' },
    '& .MuiSelect-icon': { color: 'rgba(253,251,247,0.6)' },
    '& .MuiMenuItem-root': { color: '#2C3E50' },
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <Typography variant="h4" sx={{ color: '#FDFBF7', fontFamily: 'Cormorant Garamond, serif', mb: 1 }}>
        Begin Your Tailored Journey
      </Typography>
      <Box sx={{ width: 48, height: 2, bgcolor: '#D4AF37', mb: 2 }} />
      <Typography variant="body2" sx={{ color: 'rgba(253,251,247,0.7)', mb: 4, fontFamily: 'Lato', fontSize: 13 }}>
        Please complete our secure form below. A dedicated Patient Care Coordinator will contact you within two business hours to finalize your private appointment.
      </Typography>

      <Grid container spacing={2.5}>
        <Grid item xs={12}>
          <TextField fullWidth label="Full Name" {...register('fullName')} error={!!errors.fullName}
            helperText={errors.fullName?.message} sx={fieldSx} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Private Phone Number" {...register('phone')} error={!!errors.phone}
            helperText={errors.phone?.message} sx={fieldSx} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Secure Email Address" type="email" {...register('email')} error={!!errors.email}
            helperText={errors.email?.message} sx={fieldSx} />
        </Grid>
        <Grid item xs={12}>
          <Controller name="track" control={control} render={({ field }) => (
            <TextField select fullWidth label="Desired Healthcare Track" {...field} error={!!errors.track}
              helperText={errors.track?.message} sx={fieldSx}
              SelectProps={{ MenuProps: { PaperProps: { sx: { bgcolor: '#FDFBF7' } } } }}>
              <MenuItem value="GynMIS">Advanced Gynaecological MIS (Laparoscopy / Hysteroscopy)</MenuItem>
              <MenuItem value="Maternity">Premium Antenatal & Maternity Care</MenuItem>
              <MenuItem value="General">General Consultation</MenuItem>
            </TextField>
          )} />
        </Grid>
        <Grid item xs={12}>
          <TextField fullWidth label="Preferred Date & Time" type="datetime-local"
            {...register('preferredDate')} error={!!errors.preferredDate}
            helperText={errors.preferredDate?.message}
            InputLabelProps={{ shrink: true }} sx={fieldSx} />
        </Grid>
        <Grid item xs={12}>
          <TextField fullWidth multiline rows={4}
            label="Special Concierge Requests / Dietary Preferences"
            {...register('specialRequests')} sx={fieldSx} />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" fullWidth variant="contained" color="secondary" disabled={isPending}
            sx={{ py: 1.8, fontSize: 13, letterSpacing: 2 }}>
            {isPending ? <CircularProgress size={22} sx={{ color: '#2C3E50' }} /> : 'Submit Request & Schedule Consultation'}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

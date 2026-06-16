import { useNavigate } from 'react-router-dom';
import { Box, TextField, Button, Typography, CircularProgress, Paper } from '@mui/material';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';
import { useLogin } from '../../api/auth';
import { useAuth } from '../../hooks/useAuth';

const schema = z.object({ email: z.string().email(), password: z.string().min(6) });
type FormData = z.infer<typeof schema>;

export default function AdminLogin() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const { mutate, isPending } = useLogin();
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormData) => {
    mutate(data, {
      onSuccess: (res) => { login(res.accessToken, res.refreshToken); navigate('/admin'); },
      onError: () => toast.error('Invalid credentials'),
    });
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#2C3E50', display: 'flex', alignItems: 'center', justifyContent: 'center', p: 2 }}>
      <Paper sx={{ p: 5, maxWidth: 420, width: '100%', bgcolor: '#FDFBF7' }}>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Box sx={{ width: 48, height: 48, borderRadius: '50%', bgcolor: '#D4AF37', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 20, color: '#2C3E50', fontFamily: 'serif', mx: 'auto', mb: 2 }}>R</Box>
          <Typography variant="h5" sx={{ color: '#2C3E50' }}>Admin Portal</Typography>
          <Box sx={{ width: 40, height: 2, bgcolor: '#D4AF37', mx: 'auto', mt: 1 }} />
        </Box>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
          <TextField fullWidth label="Email" type="email" {...register('email')} error={!!errors.email}
            helperText={errors.email?.message} sx={{ mb: 2 }} />
          <TextField fullWidth label="Password" type="password" {...register('password')} error={!!errors.password}
            helperText={errors.password?.message} sx={{ mb: 3 }} />
          <Button type="submit" fullWidth variant="contained" color="secondary" disabled={isPending} sx={{ py: 1.5 }}>
            {isPending ? <CircularProgress size={22} sx={{ color: '#2C3E50' }} /> : 'Sign In'}
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}

import { useState } from 'react';
import {
  Box, Typography, Button, Dialog, DialogTitle, DialogContent, DialogActions,
  TextField, MenuItem, Select, FormControl, InputLabel, IconButton,
  CircularProgress, Card, CardContent,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';
import { useFAQs, useCreateFAQ, useUpdateFAQ, useDeleteFAQ } from '../../api/faqs';
import type { FAQ } from '../../types';

const schema = z.object({
  category: z.enum(['Laparoscopy', 'Hysteroscopy', 'Maternity', 'General']),
  question: z.string().min(5),
  answer: z.string().min(10),
  sortOrder: z.number().int().min(0),
});
type FormData = z.infer<typeof schema>;

export default function AdminFAQs() {
  const { data, isLoading } = useFAQs();
  const { mutate: create } = useCreateFAQ();
  const { mutate: update } = useUpdateFAQ();
  const { mutate: remove } = useDeleteFAQ();
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<FAQ | null>(null);

  const { register, handleSubmit, control, reset, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { sortOrder: 0 },
  });

  const openCreate = () => { setEditing(null); reset({ sortOrder: (data?.length ?? 0) + 1 }); setOpen(true); };
  const openEdit = (faq: FAQ) => { setEditing(faq); reset({ category: faq.category, question: faq.question, answer: faq.answer, sortOrder: faq.sortOrder }); setOpen(true); };

  const onSubmit = (d: FormData) => {
    if (editing) {
      update({ ...editing, ...d }, { onSuccess: () => { toast.success('FAQ updated'); setOpen(false); }, onError: () => toast.error('Failed') });
    } else {
      create(d, { onSuccess: () => { toast.success('FAQ created'); setOpen(false); }, onError: () => toast.error('Failed') });
    }
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 0.5 }}>
        <Typography variant="h4" sx={{ color: '#2C3E50' }}>FAQs & Patient Guides</Typography>
        <Button startIcon={<AddIcon />} variant="contained" color="secondary" onClick={openCreate}>Add FAQ</Button>
      </Box>
      <Box sx={{ width: 40, height: 2, bgcolor: '#D4AF37', mb: 4 }} />

      {isLoading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}><CircularProgress sx={{ color: '#D4AF37' }} /></Box>
      ) : (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {data?.map(faq => (
            <Card key={faq.id} sx={{ border: '1px solid rgba(212,175,55,0.2)' }}>
              <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 2 }}>
                <Box sx={{ flex: 1 }}>
                  <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', mb: 0.5 }}>
                    <Typography sx={{ bgcolor: '#D4AF37', color: '#2C3E50', fontSize: 10, fontFamily: 'Lato', px: 1, py: 0.25, borderRadius: 0.5, fontWeight: 700 }}>{faq.category}</Typography>
                    <Typography sx={{ color: '#5a6a7a', fontSize: 11, fontFamily: 'Lato' }}>#{faq.sortOrder}</Typography>
                  </Box>
                  <Typography sx={{ color: '#2C3E50', fontWeight: 600, fontFamily: 'Lato', fontSize: 14, mb: 0.5 }}>{faq.question}</Typography>
                  <Typography variant="body2" sx={{ color: '#5a6a7a' }}>{faq.answer}</Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 0.5 }}>
                  <IconButton size="small" onClick={() => openEdit(faq)} sx={{ color: '#2C3E50' }}><EditIcon fontSize="small" /></IconButton>
                  <IconButton size="small" onClick={() => remove(faq.id, { onSuccess: () => toast.success('Deleted'), onError: () => toast.error('Failed') })} sx={{ color: '#c0392b' }}><DeleteIcon fontSize="small" /></IconButton>
                </Box>
              </CardContent>
            </Card>
          ))}
          {!data?.length && (
            <Card sx={{ border: '1px solid rgba(212,175,55,0.2)', p: 4, textAlign: 'center' }}>
              <Typography sx={{ color: '#5a6a7a', fontFamily: 'Lato' }}>No FAQs yet. Add your first one.</Typography>
            </Card>
          )}
        </Box>
      )}

      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ color: '#2C3E50' }}>{editing ? 'Edit FAQ' : 'New FAQ'}</DialogTitle>
        <DialogContent>
          <Box component="form" id="faq-form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ pt: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Controller name="category" control={control} render={({ field }) => (
              <FormControl fullWidth error={!!errors.category}>
                <InputLabel>Category</InputLabel>
                <Select {...field} label="Category">
                  {['Laparoscopy', 'Hysteroscopy', 'Maternity', 'General'].map(c => <MenuItem key={c} value={c}>{c}</MenuItem>)}
                </Select>
              </FormControl>
            )} />
            <TextField fullWidth label="Question" {...register('question')} error={!!errors.question} helperText={errors.question?.message} />
            <TextField fullWidth multiline rows={4} label="Answer" {...register('answer')} error={!!errors.answer} helperText={errors.answer?.message} />
            <TextField fullWidth type="number" label="Sort Order" {...register('sortOrder', { valueAsNumber: true })} error={!!errors.sortOrder} />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button type="submit" form="faq-form" variant="contained" color="secondary">{editing ? 'Update' : 'Create'}</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

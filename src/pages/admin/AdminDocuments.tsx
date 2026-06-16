import { useRef } from 'react';
import { Box, Typography, Button, CircularProgress, Card, CardContent } from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import DownloadIcon from '@mui/icons-material/Download';
import { toast } from 'sonner';
import { useMutation } from '@tanstack/react-query';
import { uploadBrochure, downloadBrochure } from '../../api/auth';

export default function AdminDocuments() {
  const inputRef = useRef<HTMLInputElement>(null);
  const { mutate: upload, isPending } = useMutation({
    mutationFn: (file: File) => uploadBrochure(file),
    onSuccess: () => toast.success('Brochure uploaded successfully'),
    onError: () => toast.error('Upload failed'),
  });

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) upload(file);
    e.target.value = '';
  };

  return (
    <Box>
      <Typography variant="h4" sx={{ color: '#2C3E50', mb: 0.5 }}>Documents</Typography>
      <Box sx={{ width: 40, height: 2, bgcolor: '#D4AF37', mb: 4 }} />

      <Card sx={{ border: '1px solid rgba(212,175,55,0.2)', maxWidth: 480 }}>
        <CardContent sx={{ p: 4 }}>
          <Typography variant="h6" sx={{ color: '#2C3E50', mb: 0.5 }}>Maternity Brochure PDF</Typography>
          <Typography variant="body2" sx={{ color: '#5a6a7a', mb: 3 }}>
            Upload a new brochure to replace the current one. Patients can download it from the Maternity page.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <input ref={inputRef} type="file" accept=".pdf" hidden onChange={handleFile} />
            <Button variant="contained" color="secondary" startIcon={isPending ? <CircularProgress size={16} sx={{ color: '#2C3E50' }} /> : <UploadFileIcon />}
              onClick={() => inputRef.current?.click()} disabled={isPending}>
              {isPending ? 'Uploading...' : 'Upload New Brochure'}
            </Button>
            <Button variant="outlined" startIcon={<DownloadIcon />} onClick={downloadBrochure}
              sx={{ borderColor: '#D4AF37', color: '#2C3E50' }}>
              Download Current
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

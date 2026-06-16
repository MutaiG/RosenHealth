import { useMutation } from '@tanstack/react-query';
import { api } from './client';
import type { AuthRequest, AuthResponse } from '../types';

export const useLogin = () =>
  useMutation({
    mutationFn: (data: AuthRequest) => api.post<AuthResponse>('/auth/login', data).then(r => r.data),
  });

export const useLogout = () =>
  useMutation({ mutationFn: () => api.post('/auth/logout') });

export const useChangePassword = () =>
  useMutation({
    mutationFn: (data: { currentPassword: string; newPassword: string }) =>
      api.patch('/auth/change-password', data),
  });

export const downloadBrochure = () => {
  const token = localStorage.getItem('rh_access_token');
  const url = `${import.meta.env.VITE_API_URL || 'http://localhost:5000/api/v1'}/documents/brochure`;
  const a = document.createElement('a');
  a.href = url;
  if (token) a.setAttribute('data-auth', token);
  a.download = 'Rosen-Health-Maternity-Brochure.pdf';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

export const uploadBrochure = (file: File) => {
  const fd = new FormData();
  fd.append('file', file);
  return api.post('/documents/brochure', fd, { headers: { 'Content-Type': 'multipart/form-data' } });
};

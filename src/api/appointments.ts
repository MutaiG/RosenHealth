import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from './client';
import type { Appointment, AppointmentRequest, AppointmentStatus, AppointmentSummary } from '../types';

export const useSubmitAppointment = () =>
  useMutation({ mutationFn: (data: AppointmentRequest) => api.post('/appointments', data).then(r => r.data) });

export const useAppointments = (params?: { status?: string; track?: string; from?: string; to?: string }) =>
  useQuery<Appointment[]>({
    queryKey: ['appointments', params],
    queryFn: () => api.get('/appointments', { params }).then(r => r.data),
    enabled: !!localStorage.getItem('rh_access_token'),
  });

export const useAppointment = (id: string) =>
  useQuery<Appointment>({
    queryKey: ['appointments', id],
    queryFn: () => api.get(`/appointments/${id}`).then(r => r.data),
  });

export const useUpdateAppointmentStatus = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ id, status }: { id: string; status: AppointmentStatus }) =>
      api.patch(`/appointments/${id}/status`, { status }).then(r => r.data),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['appointments'] }),
  });
};

export const useDeleteAppointment = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => api.delete(`/appointments/${id}`),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['appointments'] }),
  });
};

export const useAppointmentSummary = (from?: string, to?: string) =>
  useQuery<AppointmentSummary>({
    queryKey: ['analytics', from, to],
    queryFn: () => api.get('/analytics/appointments/summary', { params: { from, to } }).then(r => r.data),
    enabled: !!localStorage.getItem('rh_access_token'),
  });

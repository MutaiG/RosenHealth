import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from './client';
import type { FAQ, FAQCategory } from '../types';

export const useFAQs = (category?: FAQCategory) =>
  useQuery<FAQ[]>({
    queryKey: ['faqs', category],
    queryFn: () => api.get('/faqs', { params: category ? { category } : {} }).then(r => r.data),
  });

export const useCreateFAQ = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (data: Omit<FAQ, 'id'>) => api.post('/faqs', data).then(r => r.data),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['faqs'] }),
  });
};

export const useUpdateFAQ = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ id, ...data }: FAQ) => api.put(`/faqs/${id}`, data).then(r => r.data),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['faqs'] }),
  });
};

export const useDeleteFAQ = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => api.delete(`/faqs/${id}`),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['faqs'] }),
  });
};

export const useReorderFAQs = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (items: { id: string; sortOrder: number }[]) => api.patch('/faqs/reorder', items),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['faqs'] }),
  });
};

import { z } from 'zod';
import { isSunday, isSaturday, isAfter, startOfDay, parseISO, getHours, getMinutes } from 'date-fns';

export const bookingSchema = z.object({
  fullName: z.string().min(2, 'Full name is required'),
  phone: z.string().min(7, 'Valid phone number required'),
  email: z.string().email('Valid email address required'),
  track: z.enum(['GynMIS', 'Maternity', 'General'], { required_error: 'Please select a healthcare track' }),
  preferredDate: z.string().min(1, 'Preferred date & time is required'),
  specialRequests: z.string().optional(),
}).superRefine((data, ctx) => {
  if (!data.preferredDate) return;
  const date = parseISO(data.preferredDate);
  if (!isAfter(date, startOfDay(new Date()))) {
    ctx.addIssue({ code: 'custom', path: ['preferredDate'], message: 'Please select a future date' });
  }
  if (isSunday(date)) {
    ctx.addIssue({ code: 'custom', path: ['preferredDate'], message: 'Sunday bookings are not available. For emergencies, please call our 24/7 line.' });
  }
  if (isSaturday(date)) {
    const h = getHours(date), m = getMinutes(date);
    if (h > 14 || (h === 14 && m > 0)) {
      ctx.addIssue({ code: 'custom', path: ['preferredDate'], message: 'Saturday bookings must be before 2:00 PM' });
    }
  }
});

export type BookingFormData = z.infer<typeof bookingSchema>;

import { createBrowserRouter } from 'react-router-dom';
import AdminGuard from './AdminGuard';
import Home from './pages/public/Home';
import About from './pages/public/About';
import ServicesLaparoscopy from './pages/public/ServicesLaparoscopy';
import ServicesHysteroscopy from './pages/public/ServicesHysteroscopy';
import Maternity from './pages/public/Maternity';
import Experience from './pages/public/Experience';
import Book from './pages/public/Book';
import AdminLogin from './pages/admin/AdminLogin';
import AdminLayout from './pages/admin/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminAppointments from './pages/admin/AdminAppointments';
import AdminFAQs from './pages/admin/AdminFAQs';
import AdminDocuments from './pages/admin/AdminDocuments';
import AdminAnalytics from './pages/admin/AdminAnalytics';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/services/laparoscopy', element: <ServicesLaparoscopy /> },
  { path: '/services/hysteroscopy', element: <ServicesHysteroscopy /> },
  { path: '/maternity', element: <Maternity /> },
  { path: '/experience', element: <Experience /> },
  { path: '/book', element: <Book /> },
  { path: '/admin/login', element: <AdminLogin /> },
  {
    element: <AdminGuard />,
    children: [{
      path: '/admin',
      element: <AdminLayout />,
      children: [
        { index: true, element: <AdminDashboard /> },
        { path: 'appointments', element: <AdminAppointments /> },
        { path: 'faqs', element: <AdminFAQs /> },
        { path: 'documents', element: <AdminDocuments /> },
        { path: 'analytics', element: <AdminAnalytics /> },
      ],
    }],
  },
]);

export default router;

import { lazy } from 'react';
import AdminLayout from '@/components/admin/layout/AdminLayout';

const BlogList = lazy(() => import('@/pages/admin/blog/BlogList'));
const MediaLibrary = lazy(() => import('@/pages/admin/media/MediaLibrary'));

export const adminRoutes = {
  path: '/admin',
  element: <AdminLayout />,
  children: [
    {
      path: 'blog',
      element: <BlogList />
    },
    {
      path: 'media',
      element: <MediaLibrary />
    }
    // Add other admin routes here
  ]
};
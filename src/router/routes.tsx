import { Suspense, lazy } from 'react';
import Layout from '@/components/layout/Layout';
import { adminRoutes } from './adminRoutes';

// Lazy load pages
const Home = lazy(() => import('@/pages/Home'));
const About = lazy(() => import('@/pages/About'));
const Tournaments = lazy(() => import('@/pages/Tournaments'));
const PastEvents = lazy(() => import('@/pages/PastEvents'));
const Blog = lazy(() => import('@/pages/Blog'));
const NotFound = lazy(() => import('@/pages/NotFound'));

const SuspenseWrapper = ({ children }: { children: React.ReactNode }) => (
  <Suspense fallback={<div>Loading...</div>}>
    {children}
  </Suspense>
);

export const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <SuspenseWrapper>
            <Home />
          </SuspenseWrapper>
        ),
      },
      {
        path: 'about',
        element: (
          <SuspenseWrapper>
            <About />
          </SuspenseWrapper>
        ),
      },
      {
        path: 'tournaments',
        element: (
          <SuspenseWrapper>
            <Tournaments />
          </SuspenseWrapper>
        ),
      },
      {
        path: 'past-events',
        element: (
          <SuspenseWrapper>
            <PastEvents />
          </SuspenseWrapper>
        ),
      },
      {
        path: 'blog',
        element: (
          <SuspenseWrapper>
            <Blog />
          </SuspenseWrapper>
        ),
      },
    ],
  },
  adminRoutes,
  {
    path: '*',
    element: (
      <SuspenseWrapper>
        <NotFound />
      </SuspenseWrapper>
    ),
  },
];
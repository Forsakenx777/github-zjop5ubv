import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

interface AdminLayoutProps {
  children: React.ReactNode;
  title: string;
}

export default function AdminLayout({ children, title }: AdminLayoutProps) {
  const navigate = useNavigate();
  const { user, signOut, loading } = useAuth();

  useEffect(() => {
    if (!loading && !user) {
      navigate('/admin/login');
    }
  }, [user, loading, navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-black">
      <nav className="bg-white/5 border-b border-white/10">
        <Container>
          <div className="h-16 flex items-center justify-between">
            <h1 className="text-xl font-bold text-white">{title}</h1>
            <div className="flex items-center gap-4">
              <span className="text-gray-400">{user?.email}</span>
              <Button variant="secondary" onClick={signOut}>
                Sign Out
              </Button>
            </div>
          </div>
        </Container>
      </nav>

      <main className="py-8">
        {children}
      </main>
    </div>
  );
}
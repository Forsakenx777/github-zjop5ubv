import { useNavigate } from 'react-router-dom';
import AdminLayout from '@/components/admin/AdminLayout';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import TournamentList from './components/TournamentList';

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <AdminLayout title="Admin Dashboard">
      <Container>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-white">Tournaments</h2>
          <Button
            variant="primary"
            onClick={() => navigate('/admin/tournaments/new')}
          >
            Create Tournament
          </Button>
        </div>

        <TournamentList />
      </Container>
    </AdminLayout>
  );
}
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Edit2, Trash2 } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Toast from '@/components/ui/Toast';

interface Tournament {
  id: string;
  title: string;
  game: string;
  date: string;
  registration_open: boolean;
}

export default function TournamentList() {
  const navigate = useNavigate();
  const [tournaments, setTournaments] = useState<Tournament[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchTournaments();
  }, []);

  async function fetchTournaments() {
    try {
      const { data, error } = await supabase
        .from('tournaments')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;

      setTournaments(data || []);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(id: string) {
    if (!confirm('Are you sure you want to delete this tournament?')) return;

    try {
      const { error } = await supabase
        .from('tournaments')
        .delete()
        .eq('id', id);

      if (error) throw error;

      setTournaments(tournaments.filter(t => t.id !== id));
    } catch (error: any) {
      setError(error.message);
    }
  }

  if (loading) return <div>Loading...</div>;

  return (
    <div className="space-y-4">
      {tournaments.map((tournament) => (
        <Card key={tournament.id} className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {tournament.title}
              </h3>
              <div className="space-y-1 text-gray-400">
                <p>Game: {tournament.game}</p>
                <p>Date: {tournament.date}</p>
                <p>Registration: {tournament.registration_open ? 'Open' : 'Closed'}</p>
              </div>
            </div>
            
            <div className="flex gap-2">
              <Button
                variant="secondary"
                onClick={() => navigate(`/admin/tournaments/${tournament.id}/edit`)}
              >
                <Edit2 className="w-4 h-4" />
              </Button>
              <Button
                variant="secondary"
                onClick={() => handleDelete(tournament.id)}
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>
      ))}

      {error && (
        <Toast
          message={error}
          type="error"
          onClose={() => setError('')}
        />
      )}
    </div>
  );
}
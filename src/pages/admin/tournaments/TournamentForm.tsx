import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { supabase } from '@/lib/supabase';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Toast from '@/components/ui/Toast';

interface TournamentFormData {
  title: string;
  game: string;
  prize: string;
  date: string;
  registration_open: boolean;
  image_url: string;
  google_form_link: string;
  venue: string;
  organizer: string;
  description: string;
  rules: string[];
  schedule: Array<{
    phase: string;
    date: string;
    details: string;
  }>;
  requirements: string[];
}

const initialFormData: TournamentFormData = {
  title: '',
  game: '',
  prize: '',
  date: '',
  registration_open: false,
  image_url: '',
  google_form_link: '',
  venue: '',
  organizer: '',
  description: '',
  rules: [''],
  schedule: [{ phase: '', date: '', details: '' }],
  requirements: ['']
};

export default function TournamentForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState<TournamentFormData>(initialFormData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (id) {
      fetchTournament();
    }
  }, [id]);

  async function fetchTournament() {
    try {
      const { data: tournament, error } = await supabase
        .from('tournaments')
        .select(`
          *,
          tournament_rules(rule),
          tournament_schedule(phase, date, details),
          tournament_requirements(requirement)
        `)
        .eq('id', id)
        .single();

      if (error) throw error;

      if (tournament) {
        setFormData({
          ...tournament,
          rules: tournament.tournament_rules?.map(r => r.rule) || [''],
          schedule: tournament.tournament_schedule || [{ phase: '', date: '', details: '' }],
          requirements: tournament.tournament_requirements?.map(r => r.requirement) || ['']
        });
      }
    } catch (error: any) {
      setError(error.message);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      if (id) {
        // Update existing tournament
        const { error } = await supabase
          .from('tournaments')
          .update({
            title: formData.title,
            game: formData.game,
            prize: formData.prize,
            date: formData.date,
            registration_open: formData.registration_open,
            image_url: formData.image_url,
            google_form_link: formData.google_form_link,
            venue: formData.venue,
            organizer: formData.organizer,
            description: formData.description
          })
          .eq('id', id);

        if (error) throw error;

        // Update rules, schedule, and requirements
        await Promise.all([
          supabase.from('tournament_rules').delete().eq('tournament_id', id),
          supabase.from('tournament_schedule').delete().eq('tournament_id', id),
          supabase.from('tournament_requirements').delete().eq('tournament_id', id)
        ]);

        await Promise.all([
          supabase.from('tournament_rules').insert(
            formData.rules.filter(rule => rule).map(rule => ({
              tournament_id: id,
              rule
            }))
          ),
          supabase.from('tournament_schedule').insert(
            formData.schedule.filter(s => s.phase && s.date).map(schedule => ({
              tournament_id: id,
              ...schedule
            }))
          ),
          supabase.from('tournament_requirements').insert(
            formData.requirements.filter(req => req).map(requirement => ({
              tournament_id: id,
              requirement
            }))
          )
        ]);
      } else {
        // Create new tournament
        const { data: tournament, error } = await supabase
          .from('tournaments')
          .insert({
            title: formData.title,
            game: formData.game,
            prize: formData.prize,
            date: formData.date,
            registration_open: formData.registration_open,
            image_url: formData.image_url,
            google_form_link: formData.google_form_link,
            venue: formData.venue,
            organizer: formData.organizer,
            description: formData.description
          })
          .select()
          .single();

        if (error) throw error;

        // Insert rules, schedule, and requirements
        await Promise.all([
          supabase.from('tournament_rules').insert(
            formData.rules.filter(rule => rule).map(rule => ({
              tournament_id: tournament.id,
              rule
            }))
          ),
          supabase.from('tournament_schedule').insert(
            formData.schedule.filter(s => s.phase && s.date).map(schedule => ({
              tournament_id: tournament.id,
              ...schedule
            }))
          ),
          supabase.from('tournament_requirements').insert(
            formData.requirements.filter(req => req).map(requirement => ({
              tournament_id: tournament.id,
              requirement
            }))
          )
        ]);
      }

      navigate('/admin/dashboard');
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-black py-8">
      <Container>
        <Card className="p-8">
          <h1 className="text-2xl font-bold text-white mb-8">
            {id ? 'Edit Tournament' : 'Create Tournament'}
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Title
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Game
                </label>
                <input
                  type="text"
                  value={formData.game}
                  onChange={(e) => setFormData({ ...formData, game: e.target.value })}
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white"
                  required
                />
              </div>

              {/* Add more fields... */}
            </div>

            {/* Rules */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Rules
              </label>
              {formData.rules.map((rule, index) => (
                <div key={index} className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={rule}
                    onChange={(e) => {
                      const newRules = [...formData.rules];
                      newRules[index] = e.target.value;
                      setFormData({ ...formData, rules: newRules });
                    }}
                    className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white"
                  />
                  <Button
                    type="button"
                    variant="secondary"
                    onClick={() => {
                      const newRules = formData.rules.filter((_, i) => i !== index);
                      setFormData({ ...formData, rules: newRules });
                    }}
                  >
                    Remove
                  </Button>
                </div>
              ))}
              <Button
                type="button"
                variant="secondary"
                onClick={() => setFormData({ ...formData, rules: [...formData.rules, ''] })}
              >
                Add Rule
              </Button>
            </div>

            {/* Schedule */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Schedule
              </label>
              {formData.schedule.map((phase, index) => (
                <div key={index} className="grid grid-cols-3 gap-2 mb-2">
                  <input
                    type="text"
                    value={phase.phase}
                    onChange={(e) => {
                      const newSchedule = [...formData.schedule];
                      newSchedule[index] = { ...phase, phase: e.target.value };
                      setFormData({ ...formData, schedule: newSchedule });
                    }}
                    placeholder="Phase"
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white"
                  />
                  <input
                    type="text"
                    value={phase.date}
                    onChange={(e) => {
                      const newSchedule = [...formData.schedule];
                      newSchedule[index] = { ...phase, date: e.target.value };
                      setFormData({ ...formData, schedule: newSchedule });
                    }}
                    placeholder="Date"
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white"
                  />
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={phase.details}
                      onChange={(e) => {
                        const newSchedule = [...formData.schedule];
                        newSchedule[index] = { ...phase, details: e.target.value };
                        setFormData({ ...formData, schedule: newSchedule });
                      }}
                      placeholder="Details"
                      className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white"
                    />
                    <Button
                      type="button"
                      variant="secondary"
                      onClick={() => {
                        const newSchedule = formData.schedule.filter((_, i) => i !== index);
                        setFormData({ ...formData, schedule: newSchedule });
                      }}
                    >
                      Remove
                    </Button>
                  </div>
                </div>
              ))}
              <Button
                type="button"
                variant="secondary"
                onClick={() => setFormData({
                  ...formData,
                  schedule: [...formData.schedule, { phase: '', date: '', details: '' }]
                })}
              >
                Add Phase
              </Button>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end gap-4">
              <Button
                type="button"
                variant="secondary"
                onClick={() => navigate('/admin/dashboard')}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="primary"
                disabled={loading}
              >
                {loading ? 'Saving...' : (id ? 'Update' : 'Create')}
              </Button>
            </div>
          </form>
        </Card>
      </Container>

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
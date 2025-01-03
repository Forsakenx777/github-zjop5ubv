import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Edit2, Trash2, Plus } from 'lucide-react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export default function BlogList() {
  const navigate = useNavigate();
  const [posts] = useState([
    {
      id: 1,
      title: 'The Rise of Esports in Nepal',
      status: 'Published',
      date: '2024-03-14'
    }
  ]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Blog Posts</h1>
        <Button
          variant="primary"
          onClick={() => navigate('/admin/blog/new')}
          className="flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          New Post
        </Button>
      </div>

      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left p-4 text-gray-400 font-medium">Title</th>
                <th className="text-left p-4 text-gray-400 font-medium">Status</th>
                <th className="text-left p-4 text-gray-400 font-medium">Date</th>
                <th className="text-right p-4 text-gray-400 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post.id} className="border-b border-white/10 last:border-0">
                  <td className="p-4 text-white">{post.title}</td>
                  <td className="p-4">
                    <span className="px-2 py-1 text-sm rounded-full bg-green-500/20 text-green-400">
                      {post.status}
                    </span>
                  </td>
                  <td className="p-4 text-gray-400">{post.date}</td>
                  <td className="p-4">
                    <div className="flex justify-end gap-2">
                      <Button
                        variant="secondary"
                        onClick={() => navigate(`/admin/blog/${post.id}/edit`)}
                      >
                        <Edit2 className="w-4 h-4" />
                      </Button>
                      <Button variant="secondary">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
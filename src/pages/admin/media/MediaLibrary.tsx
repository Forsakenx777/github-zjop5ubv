import { useState } from 'react';
import { Upload, Trash2 } from 'lucide-react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export default function MediaLibrary() {
  const [images] = useState([
    { id: 1, url: '/Public/Images/logo.png', name: 'logo.png' }
  ]);

  const handleUpload = () => {
    // Implement upload logic
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Media Library</h1>
        <Button
          variant="primary"
          onClick={handleUpload}
          className="flex items-center gap-2"
        >
          <Upload className="w-4 h-4" />
          Upload
        </Button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((image) => (
          <Card key={image.id} className="group relative overflow-hidden">
            <img
              src={image.url}
              alt={image.name}
              className="w-full aspect-square object-cover"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
              <Button variant="secondary">
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
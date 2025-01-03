import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Trophy, 
  Users, 
  FileText, 
  Image, 
  Settings,
  ChevronDown
} from 'lucide-react';

const menuItems = [
  {
    title: 'Dashboard',
    icon: LayoutDashboard,
    path: '/admin/dashboard'
  },
  {
    title: 'Tournaments',
    icon: Trophy,
    path: '/admin/tournaments',
    submenu: [
      { title: 'All Tournaments', path: '/admin/tournaments' },
      { title: 'Create New', path: '/admin/tournaments/new' },
      { title: 'Participants', path: '/admin/tournaments/participants' }
    ]
  },
  {
    title: 'Teams',
    icon: Users,
    path: '/admin/teams'
  },
  {
    title: 'Blog Posts',
    icon: FileText,
    path: '/admin/blog'
  },
  {
    title: 'Media Library',
    icon: Image,
    path: '/admin/media'
  },
  {
    title: 'Settings',
    icon: Settings,
    path: '/admin/settings'
  }
];

export default function AdminSidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

  const isActive = (path: string) => location.pathname === path;
  const isMenuExpanded = (title: string) => expandedMenu === title;

  return (
    <div className="w-64 bg-gray-900 min-h-screen p-4">
      <div className="mb-8">
        <h2 className="text-xl font-bold text-white">ESLN Admin</h2>
      </div>

      <nav className="space-y-2">
        {menuItems.map((item) => (
          <div key={item.title}>
            <button
              onClick={() => {
                if (item.submenu) {
                  setExpandedMenu(isMenuExpanded(item.title) ? null : item.title);
                } else {
                  navigate(item.path);
                }
              }}
              className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
                isActive(item.path)
                  ? 'bg-white/10 text-white'
                  : 'text-gray-400 hover:bg-white/5 hover:text-white'
              }`}
            >
              <div className="flex items-center gap-3">
                <item.icon className="w-5 h-5" />
                <span>{item.title}</span>
              </div>
              {item.submenu && (
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    isMenuExpanded(item.title) ? 'rotate-180' : ''
                  }`}
                />
              )}
            </button>

            {item.submenu && isMenuExpanded(item.title) && (
              <div className="ml-4 mt-2 space-y-1">
                {item.submenu.map((subItem) => (
                  <button
                    key={subItem.path}
                    onClick={() => navigate(subItem.path)}
                    className={`w-full p-2 rounded-lg text-left pl-8 transition-colors ${
                      isActive(subItem.path)
                        ? 'bg-white/10 text-white'
                        : 'text-gray-400 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {subItem.title}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
}
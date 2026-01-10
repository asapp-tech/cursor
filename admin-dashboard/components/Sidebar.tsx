import { LayoutGrid, BarChart2, Settings, MessageSquare, HelpCircle } from 'lucide-react';

export const Sidebar = () => {
  const menuItems = [
    { icon: BarChart2, label: 'Users' },
    { icon: Settings, label: 'Channels' },
    { icon: MessageSquare, label: 'request : Messages' },
    { icon: HelpCircle, label: 'request : Creation channel' },
  ];

  return (
    <aside className="hidden md:flex w-64 flex-shrink-0 bg-white border-r border-gray-100 p-8 flex-col h-full">
      <div className="flex items-center gap-3 mb-16">
        <LayoutGrid className="w-8 h-8 text-blue-500" />
        <div className="flex flex-col">
          <span className="font-bold text-blue-500 text-lg leading-tight">Admin</span>
          <span className="font-bold text-blue-500 text-lg leading-tight">Dashboard</span>
        </div>
      </div>

      <nav className="flex flex-col gap-8">
        {menuItems.map((item, index) => (
          <div key={index} className="flex items-center gap-4 text-gray-400 hover:text-blue-500 cursor-pointer transition-colors group">
            <item.icon className="w-6 h-6 group-hover:text-blue-500" />
            <span className="font-medium text-sm">{item.label}</span>
          </div>
        ))}
      </nav>
    </aside>
  );
};

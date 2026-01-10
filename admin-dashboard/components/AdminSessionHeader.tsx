import { Crown } from 'lucide-react';

export const AdminSessionHeader = () => {
  return (
    <div className="absolute top-6 left-8 flex items-center gap-12 z-0">
      <div className="flex flex-col items-center">
         <Crown className="text-yellow-400 w-6 h-6" fill="currentColor" />
         <span className="text-[#6EE7B7] font-bold tracking-widest text-xs mt-1">ADMIN SESSION</span>
      </div>
      <button className="bg-[#1e2756] hover:bg-[#2a3468] text-white px-8 py-1.5 rounded-full border border-blue-800/50 shadow-lg text-sm transition-colors font-medium tracking-wide">
        Return
      </button>
    </div>
  );
};

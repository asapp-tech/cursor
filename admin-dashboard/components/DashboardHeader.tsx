import { Bell, Search, Plus, SlidersHorizontal, ChevronDown, Menu } from 'lucide-react';

export const DashboardHeader = () => {
  return (
    <div className="flex flex-col gap-8 mb-8">
      {/* Top Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-4">
        <div className="flex items-center justify-between w-full md:w-auto">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Hello, Ihsan</h1>
            <p className="text-gray-400 text-sm mt-1">Have a nice day</p>
          </div>
          <Menu className="w-6 h-6 text-gray-800 md:hidden" />
        </div>

        <div className="flex items-center gap-4 md:gap-6 w-full md:w-auto justify-end">
          <div className="relative">
            <Bell className="w-6 h-6 text-gray-800" />
            <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-blue-500 rounded-full border-2 border-white"></span>
          </div>
          
          <span className="text-gray-300 text-sm font-medium hover:text-gray-500 cursor-pointer transition-colors hidden sm:block">Add user</span>
          
          <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
            <div className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"></div>
            <div className="hidden sm:flex flex-col">
              <span className="font-bold text-gray-800 text-sm">Ihsan MTIR</span>
              <span className="text-gray-400 text-xs">Admin</span>
            </div>
            <ChevronDown className="w-4 h-4 text-gray-800 hidden sm:block" />
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
        <div className="flex items-center flex-1 max-w-xl w-full shadow-sm rounded-lg overflow-hidden">
          <div className="bg-white flex items-center px-4 py-3 w-full">
            <Search className="w-5 h-5 text-gray-400 mr-3" />
            <input 
              type="text" 
              placeholder="Search" 
              className="w-full outline-none text-gray-600 placeholder-gray-400"
            />
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white p-3 px-5 transition-colors">
            <Plus className="w-6 h-6" />
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-4 md:gap-6 text-gray-600 font-medium text-sm lg:ml-4 w-full lg:w-auto justify-between lg:justify-end">
          <div className="flex items-center gap-2 cursor-pointer">
            Sort by <ChevronDown className="w-4 h-4" />
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            Saved search <ChevronDown className="w-4 h-4" />
          </div>
          <SlidersHorizontal className="w-5 h-5 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

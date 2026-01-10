export const RequestButtons = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-12">
      <button className="w-full max-w-lg bg-gray-400 hover:bg-gray-500 text-white font-bold text-lg py-4 px-4 sm:px-8 md:px-12 rounded-lg shadow-sm transition-colors uppercase tracking-wide flex justify-between items-center">
        <span>List of requests :</span>
        <span>Messages</span>
      </button>
      
      <button className="w-full max-w-lg bg-gray-400 hover:bg-gray-500 text-white font-bold text-lg py-4 px-4 sm:px-8 md:px-12 rounded-lg shadow-sm transition-colors uppercase tracking-wide flex justify-between items-center">
        <span>List of requests :</span>
        <span>Creation channel</span>
      </button>
    </div>
  );
};

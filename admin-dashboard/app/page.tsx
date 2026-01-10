import { AdminSessionHeader } from "@/components/AdminSessionHeader";
import { Sidebar } from "@/components/Sidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { RequestButtons } from "@/components/RequestButtons";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-[#031548] overflow-hidden flex items-center justify-center p-4 sm:p-8 lg:p-12">
      {/* Background Shapes */}
      <div className="absolute bottom-0 left-0 w-[40%] h-[50%] bg-[#7ED9A4] rounded-tr-[100%] z-0"></div>
      <div className="absolute bottom-0 right-0 w-[30%] h-[60%] bg-[#7ED9A4] z-0" style={{ clipPath: 'polygon(100% 0, 0% 100%, 100% 100%)' }}></div>
      <div className="absolute bottom-0 right-0 w-[40%] h-[70%] bg-[#7ED9A4] z-0 opacity-50" style={{ clipPath: 'polygon(100% 20%, 20% 100%, 100% 100%)' }}></div>

      {/* Admin Session Header (Top Left Overlay) */}
      <AdminSessionHeader />

      {/* Main Card */}
      <div className="relative z-10 w-full max-w-[1400px] bg-[#F5F5F5] rounded-lg shadow-2xl flex overflow-hidden min-h-[800px]">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 flex flex-col p-8 sm:p-12">
          <DashboardHeader />
          
          <div className="flex-1 flex flex-col">
            <RequestButtons />
          </div>

          {/* Pagination Arrows (Bottom Center of Card Content) */}
          <div className="flex justify-center gap-12 mt-auto pb-4 text-gray-400">
             <ArrowLeft className="w-5 h-5 cursor-pointer hover:text-gray-600" />
             <ArrowRight className="w-5 h-5 cursor-pointer hover:text-gray-600" />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-4 w-full text-center text-white/60 text-xs z-10">
        <div className="flex justify-center gap-4 mb-1">
          <span className="cursor-pointer hover:text-white">Cookie Policy</span>
          <span className="cursor-pointer hover:text-white">Privacy Policy</span>
        </div>
        <p>Copyright © 2022 Emanuele Tocci. Tutti i diritti riservati.</p>
      </footer>
    </main>
  );
}

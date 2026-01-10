"use client";

import * as React from "react";
import { UserEditorModal } from "@/components/UserEditorModal";
import { PrimaryButton, SecondaryButton } from "@/components/ui";

export default function AdminDemo() {
  const [open, setOpen] = React.useState(true);

  return (
    <div className="min-h-dvh bg-slate-950 text-white">
      {/* Decorative background to match screenshot vibe */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-emerald-400/70 blur-3xl" />
        <div className="absolute -bottom-28 -right-24 h-80 w-80 rounded-full bg-emerald-300/50 blur-3xl" />
      </div>

      <header className="relative mx-auto flex w-full max-w-6xl items-center gap-4 px-4 py-5 sm:px-6">
        <div className="flex items-center gap-3">
          <div className="text-lg">👑</div>
          <div className="font-extrabold tracking-wide text-emerald-300">ADMIN SESSION</div>
        </div>
        <div className="flex-1" />
        <SecondaryButton
          className="bg-white/10 text-white hover:bg-white/15"
          onClick={() => alert("Wire this to navigation")}
        >
          Return
        </SecondaryButton>
      </header>

      <main className="relative mx-auto w-full max-w-6xl px-4 pb-10 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="text-sm text-white/70">
            Demo page: click to open the responsive “Add & Edit User” modal.
          </div>
          <PrimaryButton onClick={() => setOpen(true)}>Open modal</PrimaryButton>
        </div>

        <UserEditorModal open={open} onClose={() => setOpen(false)} />
      </main>

      <footer className="relative mx-auto w-full max-w-6xl px-4 pb-8 text-center text-xs text-white/60 sm:px-6">
        Copyright © {new Date().getFullYear()} — Cookie Policy • Privacy Policy
      </footer>
    </div>
  );
}


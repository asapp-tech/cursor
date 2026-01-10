"use client";

import * as React from "react";

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export function Modal({
  open,
  onClose,
  title,
  children,
  footer
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}) {
  const panelRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  React.useEffect(() => {
    if (!open) return;
    // Move focus into the dialog for keyboard users.
    const el = panelRef.current;
    el?.focus();
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div
        className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
        onMouseDown={onClose}
        aria-hidden="true"
      />

      <div className="absolute inset-0 flex items-start justify-center p-4 sm:p-6">
        <div
          ref={panelRef}
          tabIndex={-1}
          role="dialog"
          aria-modal="true"
          aria-label={title}
          onMouseDown={(e) => e.stopPropagation()}
          className={cx(
            "w-full max-w-6xl rounded-lg bg-white shadow-soft outline-none",
            "max-h-[calc(100vh-3rem)] overflow-hidden"
          )}
        >
          <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
            <div className="text-sm font-bold text-slate-900">{title}</div>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex h-9 w-9 items-center justify-center rounded-md text-slate-500 hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              aria-label="Close"
            >
              <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                <path d="M11.42 10l4.3-4.3a1 1 0 10-1.42-1.4L10 8.58 5.7 4.3A1 1 0 104.3 5.7L8.58 10l-4.3 4.3a1 1 0 101.42 1.4L10 11.42l4.3 4.28a1 1 0 001.42-1.4L11.42 10z" />
              </svg>
            </button>
          </div>

          <div className="max-h-[calc(100vh-10rem)] overflow-y-auto px-5 py-4">{children}</div>

          {footer ? (
            <div className="flex items-center justify-end gap-3 border-t border-slate-100 px-5 py-4">
              {footer}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}


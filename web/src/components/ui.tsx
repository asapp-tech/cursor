import * as React from "react";

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export function IconButton({
  srLabel,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { srLabel: string }) {
  return (
    <button
      type="button"
      aria-label={srLabel}
      className={cx(
        "inline-flex h-9 w-9 items-center justify-center rounded-md text-slate-500",
        "hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500",
        className
      )}
      {...props}
    >
      {props.children}
    </button>
  );
}

export function PrimaryButton({
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      className={cx(
        "inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-2 text-sm font-semibold text-white",
        "hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:opacity-60",
        className
      )}
      {...props}
    />
  );
}

export function SecondaryButton({
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      className={cx(
        "inline-flex items-center justify-center rounded-md bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-800",
        "hover:bg-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:opacity-60",
        className
      )}
      {...props}
    />
  );
}

export function TextInput({
  label,
  requiredMark,
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  requiredMark?: boolean;
}) {
  return (
    <label className={cx("block", className)}>
      <span className="mb-1 block text-xs font-semibold text-slate-600">
        {label} {requiredMark ? <span className="text-red-600">*</span> : null}
      </span>
      <input
        {...props}
        className={cx(
          "w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900",
          "placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
        )}
      />
    </label>
  );
}

export function Select({
  label,
  className,
  children,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className={cx("block", className)}>
      <span className="mb-1 block text-xs font-semibold text-slate-600">{label}</span>
      <select
        {...props}
        className={cx(
          "w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900",
          "focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
        )}
      >
        {children}
      </select>
    </label>
  );
}

export function TextArea({
  label,
  className,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement> & { label: string }) {
  return (
    <label className={cx("block", className)}>
      <span className="mb-1 block text-xs font-semibold text-slate-600">{label}</span>
      <textarea
        {...props}
        className={cx(
          "w-full resize-y rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900",
          "placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
        )}
      />
    </label>
  );
}

export function Checkbox({
  label,
  checked,
  onChange,
  className
}: {
  label: string;
  checked: boolean;
  onChange: (next: boolean) => void;
  className?: string;
}) {
  return (
    <label className={cx("inline-flex items-center gap-2 text-sm text-slate-700", className)}>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
      />
      <span className="select-none">{label}</span>
    </label>
  );
}

export function RadioPill({
  name,
  value,
  label,
  checked,
  onChange
}: {
  name: string;
  value: string;
  label: string;
  checked: boolean;
  onChange: (next: string) => void;
}) {
  return (
    <label className="inline-flex cursor-pointer items-center gap-2">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={(e) => onChange(e.target.value)}
        className="h-4 w-4 text-blue-600 focus:ring-blue-500"
      />
      <span className="text-sm text-slate-700">{label}</span>
    </label>
  );
}

export function Stars({ value }: { value: number }) {
  const clamped = Math.max(0, Math.min(5, Math.round(value)));
  return (
    <div className="flex items-center gap-1" aria-label={`${clamped} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = i < clamped;
        return (
          <svg
            key={i}
            viewBox="0 0 20 20"
            className={cx("h-4 w-4", filled ? "text-amber-400" : "text-slate-300")}
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M10 15.27l-5.18 2.73 1-5.88-4.28-4.17 5.9-.86L10 1.8l2.56 5.17 5.9.86-4.28 4.17 1 5.88L10 15.27z" />
          </svg>
        );
      })}
    </div>
  );
}


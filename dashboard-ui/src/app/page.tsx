"use client";

import { useEffect, useState } from "react";

type SkillChecklist = {
  title: string;
  tagline: string;
  rating: number;
  items: { label: string; completed?: boolean }[];
};

type Expertise = {
  label: string;
  rating: number;
};

type ContactInfo = {
  label: string;
  placeholder: string;
  icon: string;
};

type CategoryItem = {
  label: string;
  description: string;
};

type LibraryItem = {
  id: string;
  title: string;
  category: string;
  tag: string;
  icon: string;
};

type DashboardData = {
  profile: {
    firstName: string;
    lastName: string;
    role: string;
    intro: string;
    note: string;
    status: string;
    checklist: SkillChecklist;
    otherExpertise: Expertise[];
  };
  contact: ContactInfo[];
  categories: CategoryItem[];
  library: {
    owner: string;
    items: LibraryItem[];
  };
};

const MOCK_DATA: DashboardData = {
  profile: {
    firstName: "Noe",
    lastName: "Dupont",
    role: "Core Banking & IT Architecture",
    intro:
      "Hello, let me introduce myself. I work in data. N’hésitez pas à me contacter 😊",
    note: "Digital Banking & CRM",
    status: "Disponible",
    checklist: {
      title: "Core Banking & IT Architecture",
      tagline: "Capacités clés pour la mission actuelle",
      rating: 5,
      items: [
        { label: "Temenos / Flexcube", completed: true },
        { label: "ETL, Talend", completed: false },
        { label: "APIs / Microservices", completed: true },
        { label: "SWIFT / SEPA" },
        { label: "ESB / SOA" },
      ],
    },
    otherExpertise: [
      { label: "Core Banking & IT Architecture", rating: 5 },
      { label: "Digital Banking & CRM", rating: 4 },
      { label: "Data Governance & BI", rating: 4 },
    ],
  },
  contact: [
    { label: "Mail", placeholder: "prenom.nom@banque.com", icon: "✉️" },
    { label: "Business Phone", placeholder: "+33 6 45 78 12 00", icon: "📞" },
    { label: "Teams", placeholder: "@noe.dupont", icon: "💬" },
    {
      label: "Internal directory",
      placeholder: "intra/people/noe-dupont",
      icon: "🗂️",
    },
    { label: "Site (location)", placeholder: "La Défense - Paris", icon: "📍" },
    { label: "LinkedIn", placeholder: "linkedin.com/in/noe-dpt", icon: "🔗" },
  ],
  categories: [
    {
      label: "Liens / Articles",
      description: "Veille métier, billets inspirants, études",
    },
    {
      label: "Vidéos",
      description: "Replays & talk inspirants",
    },
    {
      label: "Ressources internes",
      description: "Process & playbooks maison",
    },
    {
      label: "PDF",
      description: "Guides, policy, cheat-sheets",
    },
    {
      label: "Autres",
      description: "Podcasts, newsletters, outils",
    },
  ],
  library: {
    owner: "Sandra",
    items: [
      {
        id: "1",
        title: "The Python Standard Library",
        category: "Langage",
        tag: "Livre favori",
        icon: "🐍",
      },
      {
        id: "2",
        title: "Types Langages",
        category: "Doc interne",
        tag: "Stack Datalab",
        icon: "📘",
      },
      {
        id: "3",
        title: "Newest 'forum' Questions",
        category: "Communauté",
        tag: "Forum interne",
        icon: "💬",
      },
      {
        id: "4",
        title: "Programmation pour débuter ?",
        category: "YouTube",
        tag: "Formation FR",
        icon: "▶️",
      },
      {
        id: "5",
        title: "sorrycc/awesome-javascript",
        category: "GitHub",
        tag: "Bookmark",
        icon: "⭐",
      },
    ],
  },
};

const STAR_TEMPLATE = Array.from({ length: 5 });

export default function Home() {
  const [data, setData] = useState<DashboardData | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setData(MOCK_DATA), 250);
    return () => clearTimeout(timer);
  }, []);

  if (!data) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-sky-900 via-sky-700 to-sky-500">
        <span className="text-xs font-semibold uppercase tracking-[0.5em] text-white/70">
          Chargement du workspace…
        </span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-950 via-sky-800 to-sky-500 px-4 py-8 text-white sm:px-6 lg:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 lg:flex-row">
        <ProfileCard data={data.profile} />
        <div className="flex-1 space-y-6">
          <SettingsHeader />
          <ContactPanel contact={data.contact} />
          <div className="grid gap-6 lg:grid-cols-2">
            <CategoryPanel categories={data.categories} />
            <LibraryPanel library={data.library} />
          </div>
        </div>
      </div>
    </div>
  );
}

function ProfileCard({ data }: { data: DashboardData["profile"] }) {
  return (
    <section className="rounded-[32px] bg-gradient-to-b from-[#0b2d76]/95 via-[#0a2a6a]/95 to-[#06163e]/95 p-6 shadow-[0_35px_120px_-35px_rgba(2,8,20,0.9)] ring-1 ring-white/10 lg:w-[320px] xl:w-[360px]">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 flex-col items-center justify-center rounded-2xl border border-white/30 bg-white/10 text-xl font-semibold">
            {data.firstName[0]}
            {data.lastName[0]}
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.6em] text-white/50">
              {data.firstName}
            </p>
            <p className="text-3xl font-semibold leading-tight tracking-wide">
              {data.firstName.toUpperCase()} <br />
              {data.lastName.toUpperCase()}
            </p>
          </div>
        </div>
        <button className="rounded-full border border-white/40 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white/90 transition hover:bg-white/10">
          Edit ✎
        </button>
      </div>

      <p className="mt-6 text-sm leading-relaxed text-white/85">
        {data.intro}
      </p>

      <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/20 bg-white/5 px-4 py-3 text-sm">
        <div>
          <p className="text-white/60">Status</p>
          <p className="font-semibold">{data.status}</p>
        </div>
        <div className="flex flex-col items-end text-right text-xs text-white/70">
          <span>Mode</span>
          <span className="text-white">Collaboration</span>
        </div>
      </div>

      <div className="mt-5 rounded-[28px] bg-white p-5 text-slate-900 shadow-2xl">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="text-lg font-semibold">{data.checklist.title}</p>
            <p className="text-sm text-slate-500">{data.checklist.tagline}</p>
          </div>
          <Rating value={data.checklist.rating} />
        </div>
        <div className="mt-4 space-y-2">
          {data.checklist.items.map((item) => (
            <label
              key={item.label}
              className="flex items-center gap-3 rounded-2xl border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400"
            >
              <input
                type="checkbox"
                className="size-4 rounded border-slate-300 accent-sky-600"
                defaultChecked={item.completed}
              />
              <span className="flex-1">{item.label}</span>
              <span className="flex gap-1 text-slate-400">
                <span aria-hidden>▴</span>
                <span aria-hidden>▾</span>
                <span aria-hidden>⋮</span>
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="mt-6 space-y-3">
        {data.otherExpertise.map((expertise) => (
          <div
            key={expertise.label}
            className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3"
          >
            <div className="flex items-center justify-between gap-3 text-sm font-semibold">
              <span>{expertise.label}</span>
              <Rating value={expertise.rating} light />
            </div>
          </div>
        ))}
      </div>

      <button className="mt-6 flex w-full items-center justify-between rounded-2xl border border-white/20 bg-gradient-to-r from-amber-400/90 to-rose-400/90 px-4 py-3 text-sm font-semibold text-slate-900 shadow-lg">
        <span>Dashboard personnel</span>
        <span aria-hidden>📊</span>
      </button>
    </section>
  );
}

function SettingsHeader() {
  return (
    <header className="rounded-[28px] border border-white/15 bg-white/5 px-6 py-5 shadow-[0_20px_40px_-30px_rgba(3,7,18,0.8)] backdrop-blur">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.6em] text-white/70">
            Settings
          </p>
          <p className="text-3xl font-semibold">Ask your colleague here!</p>
          <p className="text-sm text-white/80">
            Let’s network our brains • Choisissez votre prochain binôme.
          </p>
        </div>
        <div className="flex gap-3">
          {["💬", "🏠"].map((icon) => (
            <button
              key={icon}
              className="size-12 rounded-2xl border border-white/30 bg-white/10 text-2xl hover:bg-white/20"
            >
              <span aria-hidden>{icon}</span>
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}

function ContactPanel({ contact }: { contact: ContactInfo[] }) {
  return (
    <section className="rounded-[32px] bg-gradient-to-br from-sky-500/60 via-blue-500/80 to-indigo-600/60 px-6 pb-6 pt-5 shadow-[0_45px_80px_-40px_rgba(6,15,36,1)] backdrop-blur">
      <div className="mb-4 flex items-center justify-between">
        <p className="text-xl font-semibold uppercase tracking-[0.3em]">
          Contact Otherwise
        </p>
        <button className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] hover:bg-white/30">
          Edit
        </button>
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        {contact.map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-white/20 bg-white/5 px-4 py-3"
          >
            <div className="flex items-center gap-2 text-sm text-white/70">
              <span aria-hidden>{item.icon}</span>
              <span className="uppercase tracking-[0.2em]">
                {item.label}
              </span>
            </div>
            <p className="mt-1 text-base font-semibold">{item.placeholder}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function CategoryPanel({ categories }: { categories: CategoryItem[] }) {
  return (
    <section className="rounded-[32px] border border-slate-200/60 bg-white p-6 text-slate-900 shadow-xl">
      <p className="text-sm uppercase tracking-[0.5em] text-slate-400">
        Catégorie
      </p>
      <h3 className="mt-1 text-2xl font-semibold">Sélectionne ton format</h3>
      <div className="mt-4 space-y-3">
        {categories.map((category, index) => (
          <label
            key={category.label}
            className="flex items-start gap-4 rounded-2xl border border-slate-200/70 px-4 py-3 text-sm shadow-sm transition hover:border-sky-300"
          >
            <input
              type="radio"
              name="category"
              className="mt-1 size-4 text-sky-600"
              defaultChecked={index === 0}
            />
            <div>
              <p className="font-semibold">{category.label}</p>
              <p className="text-slate-500">{category.description}</p>
            </div>
          </label>
        ))}
      </div>
    </section>
  );
}

function LibraryPanel({ library }: { library: DashboardData["library"] }) {
  return (
    <section className="flex h-full flex-col rounded-[32px] border border-slate-200/60 bg-white p-6 text-slate-900 shadow-xl">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.5em] text-slate-400">
            {library.owner.toUpperCase()}’s Library
          </p>
          <h3 className="text-2xl font-semibold">Favoris à partager</h3>
        </div>
        <button className="rounded-full bg-amber-300 px-4 py-2 text-sm font-semibold text-slate-900 shadow hover:bg-amber-200">
          Add
        </button>
      </div>
      <div className="mt-4 flex-1 space-y-3">
        {library.items.map((item) => (
          <div
            key={item.id}
            className="flex items-start gap-4 rounded-2xl border border-slate-200/80 px-4 py-3 text-sm shadow-sm"
          >
            <div className="flex size-11 items-center justify-center rounded-2xl bg-slate-100 text-xl">
              <span aria-hidden>{item.icon}</span>
            </div>
            <div className="flex-1">
              <p className="text-base font-semibold">{item.title}</p>
              <p className="text-slate-500">{item.category}</p>
            </div>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold">
              {item.tag}
            </span>
          </div>
        ))}
      </div>
      <button className="mt-4 rounded-full border border-slate-900/10 px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-900/5">
        View all
      </button>
    </section>
  );
}

function Rating({ value, light }: { value: number; light?: boolean }) {
  return (
    <div
      className={`flex gap-1 text-base ${
        light ? "text-amber-200" : "text-amber-400"
      }`}
    >
      {STAR_TEMPLATE.map((_, index) => (
        <span key={index} aria-hidden>
          {index < value ? "★" : "☆"}
        </span>
      ))}
    </div>
  );
}

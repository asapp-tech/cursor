"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import {
  FiBell,
  FiFileText,
  FiHome,
  FiLogOut,
  FiMessageSquare,
  FiSearch,
  FiSettings,
} from "react-icons/fi";

type LearningCard = {
  id: string;
  title: string;
  subtitle?: string;
  gradient: string;
  textClass?: string;
  shadow: string;
  layout: string;
};

const FAKE_LEARNING_ZONES: LearningCard[] = [
  {
    id: "web-dev",
    title: "Développement Web",
    subtitle: "Front & Back",
    gradient: "from-[#00E0FF] via-[#00B8FF] to-[#0072FF]",
    shadow: "0px 25px 60px rgba(0, 183, 255, 0.35)",
    layout: "lg:col-span-4 lg:self-start",
  },
  {
    id: "ai",
    title: "Intelligence artificielle",
    subtitle: "IA & ML labs",
    gradient: "from-[#F2F2F2] to-[#8C8C8C]",
    textClass: "text-[#1e1e1e]",
    shadow: "0px 25px 45px rgba(139, 139, 139, 0.45)",
    layout: "lg:col-span-3 lg:translate-y-10",
  },
  {
    id: "data-viz",
    title: "Data Visualisation",
    subtitle: "Dashboards & BI",
    gradient: "from-[#FFEF9F] via-[#FFCF4B] to-[#FF9C07]",
    textClass: "text-[#2f1a00]",
    shadow: "0px 25px 50px rgba(255, 191, 71, 0.55)",
    layout: "lg:col-span-3 lg:self-center lg:-translate-y-4",
  },
  {
    id: "languages",
    title: "Langages de Programmation",
    subtitle: "/ Généralités",
    gradient: "from-[#FF9ADF] via-[#FE7BB9] to-[#F65C9C]",
    shadow: "0px 25px 60px rgba(242, 80, 153, 0.4)",
    layout: "lg:col-span-4 lg:col-start-7",
  },
  {
    id: "agile",
    title: "Outils agiles",
    subtitle: "/ Méthodologie",
    gradient: "from-[#FF9ADF] via-[#FF8A9A] to-[#F24E9E]",
    shadow: "0px 25px 55px rgba(249, 115, 187, 0.45)",
    layout: "lg:col-span-3 lg:self-end",
  },
];

export default function Home() {
  const [zones, setZones] = useState<LearningCard[]>([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setZones(FAKE_LEARNING_ZONES), 350);
    return () => clearTimeout(timer);
  }, []);

  const visibleZones = useMemo(() => {
    if (!query.trim()) return zones;
    const normalized = query.toLowerCase();
    return zones.filter(
      (zone) =>
        zone.title.toLowerCase().includes(normalized) ||
        zone.subtitle?.toLowerCase().includes(normalized),
    );
  }, [zones, query]);

  return (
    <div className="flex min-h-screen w-full bg-[#03012C] text-white">
      <aside className="hidden lg:flex w-28 flex-col items-center gap-8 rounded-r-[36px] bg-gradient-to-b from-[#0b50ff] via-[#0970ff] to-[#0c2fff] py-10 text-sm shadow-[0px_30px_80px_rgba(9,112,255,0.35)]">
        <Image
          src="/profile.jpg"
          alt="Ahmed Nouira"
          width={64}
          height={64}
          priority
          className="h-16 w-16 rounded-full border-2 border-white/40 object-cover shadow-[0_10px_25px_rgba(0,0,0,0.25)]"
        />
        <nav aria-label="Navigation principale" className="flex flex-col items-center gap-6">
          <button className="relative flex h-14 w-14 items-center justify-center rounded-3xl bg-white/15 text-2xl text-white shadow-[0_15px_45px_rgba(0,0,0,0.35)] transition hover:bg-white/25">
            <FiHome />
            <span className="absolute right-[-10px] h-10 w-1.5 rounded-full bg-[#ffd400]" />
          </button>
          {[FiMessageSquare, FiBell, FiSettings, FiFileText].map((Icon, index) => (
            <button
              key={`icon-${index.toString()}`}
              className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-xl text-white/80 transition hover:bg-white/15 hover:text-white"
              aria-label="Sidebar action"
            >
              <Icon />
            </button>
          ))}
        </nav>
        <div className="mt-4 flex flex-col items-center gap-1">
          <span className="text-[11px] tracking-[0.4em] text-white/70">FORUM</span>
          <span className="text-[10px] uppercase tracking-[0.5em] text-white/50">
            Ahmed
          </span>
        </div>
        <button className="mt-auto flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-lg text-white/80 transition hover:bg-white/20">
          <FiLogOut />
        </button>
      </aside>

      <main className="flex flex-1 flex-col gap-10 px-6 py-10 md:px-10 lg:px-16">
        <header className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.4em] text-white/70">
              Ahmed Nouira Dev
            </p>
            <h1 className="text-3xl font-semibold leading-tight text-white md:text-4xl">
              Explore les univers qui propulsent ta carrière tech.
            </h1>
            <p className="text-sm text-white/70 md:text-base">
              Une navigation rapide vers les communautés, ressources et thématiques clés.
            </p>
          </div>
          <label className="relative w-full max-w-xs self-start lg:self-auto">
            <FiSearch className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
            <input
              className="w-full rounded-full border border-white/10 bg-white/10 py-3 pl-12 pr-4 text-sm text-white placeholder:text-white/50 shadow-[0_15px_45px_rgba(0,0,0,0.35)] outline-none backdrop-blur"
              type="search"
              placeholder="Search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </label>
        </header>

        <section className="relative flex flex-1 flex-col overflow-hidden rounded-[40px] border border-white/5 bg-gradient-to-b from-[#06004f] via-[#060044] to-[#070033] p-6 sm:p-8 md:p-10">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-[-10%] h-2/3 bg-cover bg-center opacity-70"
            style={{
              backgroundImage:
                "linear-gradient(180deg, rgba(3,1,44,0) 0%, rgba(3,1,44,0.3) 35%, #03012C 100%), url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80')",
            }}
          />
          <div className="relative z-10 flex flex-col gap-10">
            <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              <span className="rounded-full border border-white/20 px-4 py-1">
                Nouveautés
              </span>
              <span className="rounded-full border border-white/20 px-4 py-1">
                Communauté
              </span>
              <span className="rounded-full border border-white/20 px-4 py-1">
                Mentorat
              </span>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12">
              {visibleZones.length === 0 && (
                <div className="col-span-full rounded-3xl border border-dashed border-white/20 bg-white/5 px-6 py-8 text-center text-white/70">
                  Aucun résultat – essaie un autre mot-clé.
                </div>
              )}

              {visibleZones.map((zone) => (
                <article
                  key={zone.id}
                  className={`rounded-3xl px-6 py-6 text-lg font-semibold text-white transition duration-300 hover:-translate-y-1 hover:shadow-2xl ${zone.gradient} ${zone.textClass ?? ""} ${zone.layout}`}
                  style={{ boxShadow: zone.shadow }}
                >
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/70">
                    {zone.subtitle}
                  </p>
                  <h2 className="text-2xl font-semibold leading-snug">{zone.title}</h2>
                </article>
              ))}
            </div>
          </div>
        </section>

        <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.3em] text-white/50">
          <span className="rounded-full border border-white/20 px-4 py-2">
            Support 24/7
          </span>
          <span className="rounded-full border border-white/20 px-4 py-2">
            Learning hub
          </span>
          <span className="rounded-full border border-white/20 px-4 py-2">
            Community calls
          </span>
        </div>
      </main>
    </div>
  );
}

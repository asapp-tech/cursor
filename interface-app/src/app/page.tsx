"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Bell,
  FileText,
  Home,
  LogOut,
  MessageSquare,
  Search,
  Settings2,
  Users,
} from "lucide-react";

type TopicCard = {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  className: string;
  subtitleTone: string;
  position: string;
};

const TOPIC_DATA: TopicCard[] = [
  {
    id: "web",
    title: "Développement Web",
    subtitle: "Interfaces immersives & progressive apps",
    badge: "Focus",
    className:
      "bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-500 text-slate-900 shadow-blue-500/30",
    subtitleTone: "text-slate-800/80",
    position: "lg:top-6 lg:right-32",
  },
  {
    id: "ai",
    title: "Intelligence artificielle",
    subtitle: "Agents, copilotes et éthique appliquée",
    badge: "IA",
    className:
      "bg-gradient-to-b from-slate-100/90 via-slate-200 to-slate-400 text-slate-900 shadow-slate-500/30",
    subtitleTone: "text-slate-700",
    position: "lg:top-32 lg:left-10",
  },
  {
    id: "lang",
    title: "Langages de Programmation / Généralités",
    subtitle: "Kotlin, Rust, Python et plus",
    badge: "Bootcamp",
    className:
      "bg-gradient-to-r from-fuchsia-400 via-purple-400 to-rose-400 text-white shadow-fuchsia-500/40",
    subtitleTone: "text-white/90",
    position: "lg:top-0 lg:right-4",
  },
  {
    id: "data",
    title: "Data Visualisation",
    subtitle: "Storytelling & dashboards avancés",
    badge: "Data",
    className:
      "bg-gradient-to-r from-amber-300 via-yellow-300 to-orange-400 text-slate-900 shadow-amber-400/40",
    subtitleTone: "text-slate-900/80",
    position: "lg:top-[220px] lg:right-52",
  },
  {
    id: "agile",
    title: "Outils agiles / Méthodologie",
    subtitle: "Rituels, OKR et amélioration continue",
    badge: "Sprint",
    className:
      "bg-gradient-to-r from-[#ff4fd8] via-[#ff6f65] to-[#ffc847] text-white shadow-orange-400/40",
    subtitleTone: "text-white/90",
    position: "lg:bottom-10 lg:right-10",
  },
];

const NAVIGATION = [
  { id: "home", label: "Accueil", icon: Home, active: true },
  { id: "chat", label: "Discussions", icon: MessageSquare, active: false },
  { id: "alerts", label: "Notifications", icon: Bell, active: false },
  { id: "settings", label: "Réglages", icon: Settings2, active: false },
  { id: "forum", label: "Forum", icon: FileText, active: false },
];

export default function Home() {
  const [topics, setTopics] = useState<TopicCard[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTopics(TOPIC_DATA);
      setLoading(false);
    }, 450);

    return () => clearTimeout(timer);
  }, []);

  const dataset = loading ? TOPIC_DATA : topics;

  return (
    <div className="flex min-h-screen justify-center bg-[#010118] px-4 py-6 text-white sm:px-6 lg:px-10">
      <div className="flex w-full max-w-6xl flex-col gap-6 md:flex-row">
        <aside className="flex min-h-[110px] items-center justify-between rounded-[2rem] bg-gradient-to-b from-[#0047ff] via-[#0040c1] to-[#021a3b] p-4 shadow-[0_25px_60px_rgba(0,64,255,0.35)] md:w-24 md:flex-col md:py-8 lg:w-28">
          <div className="flex items-center gap-3 md:flex-col">
            <div className="rounded-full border-2 border-white/40 p-[3px]">
              <Image
                src="https://i.pravatar.cc/140?u=space-hub"
                alt="Profil mentor"
                width={56}
                height={56}
                className="rounded-full object-cover"
                priority
              />
            </div>
            <div className="hidden text-center text-xs md:block">
              <p className="font-semibold">Lamia</p>
              <p className="text-white/80">Mentor</p>
            </div>
          </div>

          <nav className="flex flex-1 items-center justify-center gap-3 md:flex-col md:gap-4">
            {NAVIGATION.map((item) => (
              <button
                type="button"
                key={item.id}
                className={`group relative flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-300 ${
                  item.active
                    ? "bg-white/25 text-white shadow-[0_10px_30px_rgba(255,255,255,0.25)]"
                    : "text-white/60 hover:bg-white/15"
                }`}
                aria-pressed={item.active}
              >
                <item.icon className="h-5 w-5" />
                <span className="sr-only">{item.label}</span>
                {item.active && (
                  <span className="absolute -right-1 block h-10 w-1 rounded-full bg-yellow-300" />
                )}
              </button>
            ))}
          </nav>

          <div className="flex flex-col items-center gap-3">
            <span className="text-[11px] font-semibold tracking-[0.4em] text-white/70">
              FORUM
            </span>
            <button
              type="button"
              className="rounded-2xl bg-white/15 p-3 text-white transition hover:bg-white/30"
              aria-label="Déconnexion"
            >
              <LogOut className="h-5 w-5" />
            </button>
          </div>
        </aside>

        <section className="relative flex-1 overflow-hidden rounded-[2.75rem]">
          <Image
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80"
            alt="Vue spatiale"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#050038]/95 via-[#050038]/70 to-[#18003c]/85" />

          <div className="relative z-10 flex h-full flex-col gap-8 p-6 sm:p-10">
            <header className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.6em] text-white/70">
                  Explorer
                </p>
                <h1 className="text-3xl font-semibold leading-tight sm:text-4xl">
                  Programmez votre futur depuis l&apos;orbite
                </h1>
                <p className="mt-2 text-base text-white/75">
                  Une sélection de parcours tech pour rester à l&apos;avant du
                  numérique.
                </p>
              </div>

              <label className="flex w-full items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm text-white/80 backdrop-blur sm:max-w-xs">
                <Search className="h-4 w-4 text-white/60" />
                <input
                  type="search"
                  placeholder="Rechercher un module"
                  className="w-full bg-transparent text-white placeholder:text-white/60 focus:outline-none"
                />
              </label>
            </header>

            <div className="flex flex-wrap items-center gap-3 text-sm text-white/80">
              <div className="flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 backdrop-blur">
                <Users className="h-4 w-4" />
                <span>+2 500 apprenants connectés</span>
              </div>
              <div className="rounded-full border border-white/25 px-4 py-2">
                Prochaine session live · 14 déc.
              </div>
              <div className="rounded-full border border-white/25 px-4 py-2">
                Mentors disponibles : 8
              </div>
            </div>

            <div className="relative flex flex-1 flex-wrap gap-4 lg:min-h-[520px]">
              {dataset.map((topic) => (
                <article
                  key={topic.id}
                  className={`relative w-full rounded-2xl px-5 py-5 text-center text-lg font-semibold shadow-2xl transition duration-300 hover:-translate-y-1 sm:w-[calc(50%-0.5rem)] lg:absolute lg:w-auto ${topic.className} ${topic.position}`}
                >
                  {loading && (
                    <span
                      aria-hidden
                      className="absolute inset-0 rounded-2xl bg-white/30 opacity-50 blur-[1px] animate-pulse"
                    />
                  )}
                  <div className="relative z-10 flex flex-col gap-2">
                    <span className="text-xs font-semibold uppercase tracking-[0.6em] text-white/70">
                      {topic.badge}
                    </span>
                    <p>{topic.title}</p>
                    <p
                      className={`text-sm font-normal leading-tight ${topic.subtitleTone}`}
                    >
                      {topic.subtitle}
                    </p>
                  </div>
                </article>
              ))}

              {!loading && (
                <div className="lg:absolute lg:bottom-16 lg:left-0">
                  <button
                    type="button"
                    className="rounded-full border border-white/40 px-5 py-2 text-sm font-medium text-white hover:bg-white/15"
                  >
                    Voir tous les parcours
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

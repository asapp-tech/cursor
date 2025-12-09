"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Member = {
  id: number;
  name: string;
  title: string;
  avatar: string;
  rating: number;
  status: "available" | "busy" | "absent";
};

type Skill = {
  id: number;
  name: string;
  active: boolean;
};

const themeOptions = [
  {
    id: "sky",
    gradient: "from-[#1f8bff] to-[#6ee2ff]",
    accent: "#4dcfff",
  },
  { id: "lavender", gradient: "from-[#7469f1] to-[#c994ff]", accent: "#b28cff" },
  { id: "silver", gradient: "from-[#a4b0be] to-[#ffffff]", accent: "#f1f2f6" },
  { id: "sun", gradient: "from-[#f2b705] to-[#ffdd63]", accent: "#ffd84a" },
  { id: "sunset", gradient: "from-[#f54ea2] to-[#ff7676]", accent: "#ff75c0" },
] as const;

const fakeTeamMembers: Member[] = [
  {
    id: 1,
    name: "Kenzo Bartolli",
    title: "Financial Analyst",
    avatar: "https://i.pravatar.cc/120?img=12",
    rating: 5,
    status: "available",
  },
  {
    id: 2,
    name: "Sandra Garnier",
    title: "Investment Banker",
    avatar: "https://i.pravatar.cc/120?img=32",
    rating: 5,
    status: "busy",
  },
  {
    id: 3,
    name: "Warren Daniel",
    title: "Trader",
    avatar: "https://i.pravatar.cc/120?img=15",
    rating: 4,
    status: "available",
  },
  {
    id: 4,
    name: "Sophie Hull",
    title: "Risk Manager",
    avatar: "https://i.pravatar.cc/120?img=47",
    rating: 4,
    status: "available",
  },
  {
    id: 5,
    name: "Jaya Avara",
    title: "Portfolio Manager",
    avatar: "https://i.pravatar.cc/120?img=49",
    rating: 4,
    status: "available",
  },
  {
    id: 6,
    name: "Sarah Nader",
    title: "Compliance Officer",
    avatar: "https://i.pravatar.cc/120?img=20",
    rating: 4,
    status: "busy",
  },
  {
    id: 7,
    name: "Samy Yacoub",
    title: "Asset Manager",
    avatar: "https://i.pravatar.cc/120?img=33",
    rating: 4,
    status: "available",
  },
  {
    id: 8,
    name: "Clara Nill",
    title: "Financial Controller",
    avatar: "https://i.pravatar.cc/120?img=56",
    rating: 4,
    status: "available",
  },
  {
    id: 9,
    name: "Antony Duang",
    title: "Quantitative Analyst (Quant)",
    avatar: "https://i.pravatar.cc/120?img=58",
    rating: 5,
    status: "available",
  },
  {
    id: 10,
    name: "Bakary Diallo",
    title: "Treasury Analyst",
    avatar: "https://i.pravatar.cc/120?img=60",
    rating: 4,
    status: "available",
  },
];

const fakeSkills: Skill[] = [
  { id: 1, name: "Excel", active: true },
  { id: 2, name: "SalesForce", active: true },
  { id: 3, name: "PowerBi", active: true },
  { id: 4, name: "CRM tool", active: false },
  { id: 5, name: "SQL", active: false },
];

const availabilityStatuses = [
  { label: "Available", askWe: true, teams: true, color: "#4ee380" },
  { label: "Busy", askWe: true, teams: false, color: "#f2c200" },
  { label: "Absent", askWe: false, teams: false, color: "#ffffff" },
];

const MemberCardSkeleton = () => (
  <div className="animate-pulse rounded-2xl bg-white/5 p-4">
    <div className="flex items-center gap-4">
      <div className="h-12 w-12 rounded-full bg-white/10" />
      <div className="flex-1 space-y-2">
        <div className="h-3 w-1/2 rounded-full bg-white/10" />
        <div className="h-3 w-1/4 rounded-full bg-white/10" />
      </div>
      <div className="h-6 w-12 rounded-full bg-white/10" />
    </div>
  </div>
);

const RatingStars = ({ score }: { score: number }) => (
  <div className="flex items-center gap-0.5 text-lg text-yellow-400">
    {Array.from({ length: 5 }).map((_, idx) => (
      <span
        key={idx}
        className={idx < score ? "text-yellow-400" : "text-white/30"}
      >
        ★
      </span>
    ))}
  </div>
);

export default function Home() {
  const [members, setMembers] = useState<Member[]>([]);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [activeThemeId, setActiveThemeId] = useState(themeOptions[0].id);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setMembers(fakeTeamMembers);
      setSkills(fakeSkills);
    }, 250);

    return () => clearTimeout(timeout);
  }, []);

  const activeTheme = themeOptions.find((theme) => theme.id === activeThemeId)!;

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#030538] text-white">
      <Image
        src="/globe.svg"
        alt="globe"
        width={400}
        height={400}
        className="pointer-events-none absolute -left-20 bottom-0 opacity-60"
      />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-4 pb-16 pt-10 lg:px-8">
        <header className="flex flex-wrap items-center gap-4 rounded-3xl bg-white/5 px-4 py-3 backdrop-blur">
          <button
            aria-label="Go back"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-2xl text-white"
          >
            ←
          </button>
          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-[0.3em] text-white/60">
              Customizable Theme
            </span>
            <h1 className="text-2xl font-semibold text-white">Customizable Theme</h1>
          </div>
          <div className="ml-auto flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5">
              {themeOptions.map((theme) => (
                <button
                  key={theme.id}
                  onClick={() => setActiveThemeId(theme.id)}
                  className={`h-6 w-6 rounded-full bg-gradient-to-b ${theme.gradient} transition-transform ${
                    theme.id === activeThemeId ? "ring-2 ring-white scale-110" : ""
                  }`}
                  aria-label={`Switch to ${theme.id} theme`}
                />
              ))}
            </div>
            <button
              className="rounded-full bg-white/15 px-4 py-2 text-sm font-semibold shadow-lg"
              style={{ boxShadow: "0 10px 25px rgba(0,0,0,0.3)" }}
            >
              Change channel
            </button>
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="w-44 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm placeholder:text-white/50 focus:border-white focus:outline-none"
              />
              <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/70">
                🔍
              </span>
            </div>
            <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-lg">
              ⌂
            </button>
          </div>
        </header>

        <div className="flex flex-col gap-6 lg:flex-row">
          <aside className="w-full max-w-sm rounded-3xl bg-white/5 p-6 backdrop-blur">
            <div className="flex flex-col gap-1 text-sm text-white/80">
              <p>Organization: Engie</p>
              <p>Channel : Finance</p>
            </div>

            <section className="mt-6">
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                Availability
              </h2>
              <div className="mt-3 grid grid-cols-3 gap-2 text-xs text-white/60">
                <span />
                <span className="text-center">AskWe</span>
                <span className="text-center">Teams</span>
              </div>
              <div className="mt-2 space-y-2 text-sm">
                {availabilityStatuses.map((item) => (
                  <div
                    key={item.label}
                    className="grid grid-cols-3 items-center gap-2 rounded-2xl bg-white/5 px-3 py-2"
                  >
                    <div className="flex items-center gap-2 font-medium text-white">
                      <span
                        className="h-2.5 w-2.5 rounded-full"
                        style={{ backgroundColor: item.color }}
                      />
                      {item.label}
                    </div>
                    <span className="text-center text-base">
                      {item.askWe ? "●" : "○"}
                    </span>
                    <span className="text-center text-base">
                      {item.teams ? "●" : "○"}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-6">
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                Level
              </h2>
              <div className="mt-3 flex gap-1 text-2xl">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <span
                    key={idx}
                    className={idx < 3 ? "text-yellow-400" : "text-white/30"}
                  >
                    ★
                  </span>
                ))}
              </div>
            </section>

            <section className="mt-6">
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                Skills & Tools
              </h2>
              <ul className="mt-4 space-y-3 text-sm">
                {skills.map((skill) => (
                  <li key={skill.id} className="flex items-center gap-3">
                    <span
                      className={`flex h-5 w-5 items-center justify-center rounded border ${
                        skill.active
                          ? "border-transparent bg-gradient-to-r from-[#4dcfff] to-[#6ee2ff] text-[#030538]"
                          : "border-white/40 text-transparent"
                      } text-xs font-semibold`}
                    >
                      ✓
                    </span>
                    <span className="text-white/90">{skill.name}</span>
                  </li>
                ))}
              </ul>
            </section>

            <button
              className="mt-8 w-full rounded-full bg-gradient-to-r from-[#00c6ff] to-[#0072ff] py-3 text-sm font-semibold uppercase tracking-wide"
            >
              Contact us
            </button>
          </aside>

          <section className="flex-1 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">AskWe Finance Team</h2>
              <span className="text-sm text-white/70">Updated a few minutes ago</span>
            </div>
            <div className="space-y-4">
              {members.length === 0 &&
                Array.from({ length: 3 }).map((_, idx) => (
                  <MemberCardSkeleton key={idx} />
                ))}
              {members.map((member) => (
                <div
                  key={member.id}
                  className="flex items-center gap-4 rounded-3xl bg-white/10 px-4 py-3 shadow-lg shadow-black/40 ring-1 ring-white/5"
                >
                  <Image
                    src={member.avatar}
                    alt={member.name}
                    width={56}
                    height={56}
                    className="h-14 w-14 rounded-2xl object-cover"
                  />
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-2xl ${
                          member.status === "available"
                            ? "text-green-400"
                            : member.status === "busy"
                            ? "text-amber-400"
                            : "text-white/50"
                        }`}
                      >
                        ●
                      </span>
                      <div>
                        <p className="text-lg font-semibold">{member.name}</p>
                        <p className="text-sm text-white/70">{member.title}</p>
                      </div>
                    </div>
                  </div>
                  <RatingStars score={member.rating} />
                  <button
                    className="flex h-10 w-12 items-center justify-center rounded-2xl bg-white/15 text-lg"
                    style={{ color: activeTheme.accent }}
                    aria-label={`Message ${member.name}`}
                  >
                    ✉️
                  </button>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

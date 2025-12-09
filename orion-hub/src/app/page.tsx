import type { CSSProperties } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Activity,
  ArrowUpRight,
  Cpu,
  LineChart,
  Radar,
  ShieldCheck,
  Sparkles,
  Waves,
} from "lucide-react";

const navLinks = [
  { label: "Mission", href: "#mission" },
  { label: "Telemetry", href: "#telemetry" },
  { label: "Signals", href: "#signals" },
];

const highlightMetrics = [
  { label: "Latency shaved per incident", value: "62 ms" },
  { label: "Signals per minute", value: "480k" },
  { label: "Automation lift", value: "28%" },
];

type MissionTone = "stable" | "sync" | "alert";

type MissionTrack = {
  title: string;
  status: string;
  delta: string;
  eta: string;
  tone: MissionTone;
};

const missionTracks: MissionTrack[] = [
  {
    title: "Atlantic supply corridor",
    status: "Stabilized",
    delta: "+18% throughput",
    eta: "Clearance in 2m 14s",
    tone: "stable",
  },
  {
    title: "Orbital IoT mesh",
    status: "Syncing",
    delta: "-42s drift",
    eta: "Re-locking beacons",
    tone: "sync",
  },
  {
    title: "Urban response grid",
    status: "Escalating",
    delta: "+4 playbooks engaged",
    eta: "Dispatch engaged",
    tone: "alert",
  },
];

const toneText: Record<MissionTone, string> = {
  stable: "text-emerald-200",
  sync: "text-sky-200",
  alert: "text-amber-200",
};

const toneHalo: Record<MissionTone, string> = {
  stable: "from-emerald-400/30 via-emerald-500/10 to-transparent",
  sync: "from-sky-400/30 via-cyan-500/10 to-transparent",
  alert: "from-amber-400/30 via-orange-500/10 to-transparent",
};

type FeatureCard = {
  title: string;
  description: string;
  icon: LucideIcon;
  stat: string;
  accent: string;
};

const featureCards: FeatureCard[] = [
  {
    title: "Unified telemetry loom",
    description:
      "Stream infra, IoT, and financial signals into a single schema with <90ms deduplication and contextual tagging.",
    icon: Radar,
    stat: "<90ms ingest SLA",
    accent: "from-cyan-400/30 via-blue-500/10 to-transparent",
  },
  {
    title: "Autonomous guardrails",
    description:
      "Encode safety envelopes, rate limits, and AI approvals so automations stay reversible and auditable.",
    icon: ShieldCheck,
    stat: "42 guardrails live",
    accent: "from-emerald-400/30 via-emerald-500/10 to-transparent",
  },
  {
    title: "Signal-aware automation",
    description:
      "Route millions of events through reusable cadences that summon humans only when the playbook needs context.",
    icon: LineChart,
    stat: "28% ops lift",
    accent: "from-indigo-400/30 via-purple-500/10 to-transparent",
  },
  {
    title: "Edge intelligence mesh",
    description:
      "Deploy lightweight runtimes to cranes, satellites, or labs and sync insights upstream without sacrificing privacy.",
    icon: Cpu,
    stat: "120 edge sites",
    accent: "from-amber-400/30 via-orange-500/10 to-transparent",
  },
];

const signalFeed = [
  {
    title: "Harbor cranes shift to adaptive torque",
    channel: "Autonomy mesh",
    impact: "+6.2% throughput",
    time: "32s ago",
  },
  {
    title: "Orbital beacons re-aligned after solar flare",
    channel: "Satellite stack",
    impact: "-42s drift",
    time: "3m ago",
  },
  {
    title: "Bio-lab ambient sensors cleared for re-entry",
    channel: "Life support",
    impact: "0 exposure",
    time: "8m ago",
  },
  {
    title: "Grid storage spun up to absorb wind surplus",
    channel: "Energy fabric",
    impact: "+180 MWh reserve",
    time: "14m ago",
  },
];

const cadenceRoadmap = [
  {
    title: "Predictive cadence routing",
    detail: "ML-backed load balancing across 48 regions.",
    status: "Live",
  },
  {
    title: "Autonomous incident retros",
    detail: "Summaries pair human inputs with ops charts.",
    status: "Preview",
  },
  {
    title: "Spatial digital twin sync",
    detail: "Render assets in 3D with live telemetry overlays.",
    status: "In build",
  },
];

const integrationPartners = [
  "Celestine Cloud",
  "Morrow IoT",
  "FluxRail",
  "Aperture AI",
  "Fieldstone Ops",
  "Northwind Civic",
];

const sparklineHeights = [48, 62, 32, 76, 40, 84, 50, 68, 34, 72, 46, 60];

const meshBackground: CSSProperties = {
  backgroundImage:
    "linear-gradient(rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.08) 1px, transparent 1px)",
  backgroundSize: "80px 80px",
};

export default function Home() {
  return (
    <div className="relative isolate overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-60" style={meshBackground} />
        <div className="absolute inset-0 bg-gradient-to-b from-sky-500/10 via-transparent to-transparent" />
        <div className="absolute left-1/2 top-16 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[140px]" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-20 px-6 pb-24 pt-10 lg:px-8">
        <header className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-slate-300">
              <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
              Orion Hub
            </span>
            <span className="text-sm text-slate-400">
              Mission control for live operations
            </span>
          </div>
          <nav className="flex flex-wrap items-center gap-3 text-sm text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-full border border-white/10 px-4 py-1.5 transition hover:border-cyan-400/60 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            className="group inline-flex items-center justify-center gap-2 rounded-full border border-cyan-400/30 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 px-5 py-2 text-sm font-semibold text-white transition hover:from-cyan-400/40 hover:to-blue-500/40"
            href="#signals"
          >
            Join the beta
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </header>

        <main className="flex flex-col gap-20">
          <section id="mission" className="space-y-10">
            <div className="grid gap-10 rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-slate-900/80 via-slate-900/40 to-slate-900/80 p-8 shadow-2xl lg:grid-cols-[minmax(0,1fr)_360px]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-400">
                  Mission-grade orchestration
                </p>
                <h1 className="mt-6 text-4xl font-semibold leading-tight text-white sm:text-5xl">
                  Coordinate every signal, human, and automation from a single
                  mission canvas.
                </h1>
                <p className="mt-4 max-w-2xl text-lg text-slate-300">
                  Orion Hub weaves telemetry, AI copilots, and human judgment
                  into one operating picture, so critical teams respond sooner
                  and learn faster.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="#telemetry"
                    className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-2.5 text-sm font-semibold text-slate-950 transition hover:shadow-[0_0_35px_rgba(14,165,233,0.45)]"
                  >
                    Launch a workspace
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                  <button className="inline-flex items-center rounded-full border border-white/20 px-6 py-2.5 text-sm font-semibold text-white transition hover:border-cyan-400/50">
                    See architecture
                  </button>
                </div>
                <dl className="mt-10 grid gap-6 sm:grid-cols-3">
                  {highlightMetrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-2xl border border-white/10 bg-white/5 p-4"
                    >
                      <dt className="text-xs uppercase tracking-[0.3em] text-slate-400">
                        {metric.label}
                      </dt>
                      <dd className="mt-3 text-2xl font-semibold text-white">
                        {metric.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div className="aurora-ring rounded-3xl border border-white/5 bg-slate-950/80 p-6 shadow-[0_25px_120px_rgba(8,47,73,0.45)]">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="uppercase tracking-[0.4em]">Live stack</span>
                  <span className="flex items-center gap-2 text-emerald-200">
                    <Activity className="h-4 w-4" />
                    Stable sync
                  </span>
                </div>
                <div className="mt-6 grid gap-3">
                  {missionTracks.map((track) => (
                    <div
                      key={track.title}
                      className="relative overflow-hidden rounded-2xl border border-white/5 bg-slate-900/80 p-4"
                    >
                      <div
                        className={`pointer-events-none absolute inset-0 bg-gradient-to-r ${toneHalo[track.tone]}`}
                      />
                      <div className="relative flex flex-col gap-2">
                        <div className="flex items-center justify-between text-[0.65rem] uppercase tracking-[0.35em] text-slate-400">
                          <span>{track.status}</span>
                          <span className={toneText[track.tone]}>
                            {track.eta}
                          </span>
                        </div>
                        <div className="flex items-start justify-between">
                          <div>
                            <p className="text-base font-semibold text-white">
                              {track.title}
                            </p>
                            <p className="text-sm text-slate-300">
                              {track.delta}
                            </p>
                          </div>
                          <div className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
                            Tier 1
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 h-20 w-full rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-3">
                  <div className="flex h-full items-end gap-1">
                    {sparklineHeights.map((height, index) => (
                      <span
                        key={`${index}-${height}`}
                        className="w-2 rounded-full bg-gradient-to-t from-slate-800 via-cyan-500/40 to-cyan-400/80"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                </div>
                <p className="mt-3 text-xs text-slate-400">
                  2.4M signals harmonized · 38 automations on standby
                </p>
              </div>
            </div>
          </section>

          <section id="telemetry" className="space-y-10">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-400">
                  Telemetry stack
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                  Bring every stream into a single, trusted interface.
                </h2>
                <p className="mt-3 max-w-2xl text-base text-slate-300">
                  Orion models every signal with provenance, so teams can branch
                  playbooks without waiting on data teams or bespoke ETL.
                </p>
              </div>
              <button className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-white transition hover:border-cyan-400/50">
                Download spec sheet
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {featureCards.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 p-6"
                  >
                    <div
                      className={`absolute inset-x-10 top-0 h-px bg-gradient-to-r ${feature.accent}`}
                    />
                    <div className="flex items-center gap-3">
                      <span className="rounded-2xl border border-white/10 bg-white/5 p-3">
                        <Icon className="h-5 w-5 text-cyan-200" />
                      </span>
                      <span className="text-xs uppercase tracking-[0.3em] text-slate-400">
                        {feature.stat}
                      </span>
                    </div>
                    <h3 className="mt-5 text-2xl font-semibold text-white">
                      {feature.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-300">
                      {feature.description}
                    </p>
                    <div className="mt-6 flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-slate-400">
                      <Waves className="h-4 w-4 text-cyan-200" />
                      Continuous sync
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-wrap items-center gap-3 rounded-3xl border border-white/10 bg-white/5 px-6 py-4 text-xs font-semibold uppercase tracking-[0.4em] text-slate-300">
              <span className="text-slate-400">Trusted by field teams at</span>
              {integrationPartners.map((partner) => (
                <span
                  key={partner}
                  className="rounded-full border border-white/10 px-4 py-1 text-slate-200"
                >
                  {partner}
                </span>
              ))}
            </div>
          </section>

          <section
            id="signals"
            className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_300px]"
          >
            <div className="rounded-[2.5rem] border border-white/10 bg-slate-900/70 p-6">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-400">
                  Live signal feed
                </p>
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/40 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-200">
                  <Activity className="h-4 w-4" />
                  Healthy
                </span>
              </div>
              <div className="mt-6 divide-y divide-white/10">
                {signalFeed.map((signal) => (
                  <article key={signal.title} className="py-4">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <h3 className="text-lg font-semibold text-white">
                        {signal.title}
                      </h3>
                      <span className="text-xs text-slate-400">
                        {signal.time}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-slate-300">
                      {signal.channel}
                    </p>
                    <p className="mt-2 text-sm font-semibold text-cyan-200">
                      {signal.impact}
                    </p>
                  </article>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-400">
                  Cadence roadmap
                </p>
                <div className="mt-4 space-y-4">
                  {cadenceRoadmap.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-white/10 bg-slate-950/40 p-4"
                    >
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-semibold text-white">
                          {item.title}
                        </h4>
                        <span className="text-xs uppercase tracking-[0.3em] text-cyan-200">
                          {item.status}
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-slate-300">
                        {item.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-3xl border border-cyan-400/30 bg-gradient-to-br from-cyan-500/20 to-blue-600/10 p-5 text-sm text-slate-900">
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-900/80">
                  Beta access
                </p>
                <p className="mt-3 text-base text-slate-900">
                  Deploy Orion Hub in your private cloud with full audit trails
                  and SOC3-aligned logging.
                </p>
                <a
                  href="mailto:missions@orion.hub"
                  className="mt-4 inline-flex items-center gap-2 font-semibold text-slate-900"
                >
                  missions@orion.hub
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </section>

          <section>
            <div className="rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-10 text-center shadow-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-400">
                Ready for launch
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
                Patch your operations into a single source of confident action.
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-300">
                Orion Hub is built for teams who can’t wait for Monday status
                meetings. Pipe in your telemetry, keep humans in the loop, and
                let the system prove progress in minutes.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  href="https://cal.com/orion"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
                >
                  Book a live mission
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href="#mission"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-400/60"
                >
                  Explore the stack
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";

type UserProfile = {
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  location: string;
  password: string;
  teamsLink: string;
  linkedin: string;
  internalDirectory: string;
  presentation: string;
};

type SkillItem = {
  label: string;
  state: "Confirm" | "Beginner" | "Intermediary" | "N.A";
  checked: boolean;
};

type SkillCategory = {
  title: string;
  subtitle: string;
  stars: number;
  skills: SkillItem[];
};

type Availability = "Disponible" | "Occupé(e)" | "Absent(e)";

const mockProfile: UserProfile = {
  userId: "USR-1028",
  firstName: "Emma",
  lastName: "Moreno",
  email: "emma.moreno@example.com",
  mobile: "+33 6 45 82 11 94",
  location: "Paris, FR",
  password: "••••••••",
  teamsLink: "teams.microsoft.com/emma",
  linkedin: "linkedin.com/in/emma-moreno",
  internalDirectory: "intranet.company/emma",
  presentation: "Full-stack developer with a focus on data experiences."
};

const mockSkills: SkillCategory[] = [
  {
    title: "DEVELOPPEMENT WEB",
    subtitle: "⭐ ⭐ ⭐ ⭐",
    stars: 4,
    skills: [
      { label: "HTML/CSS", state: "Confirm", checked: true },
      { label: "JavaScript", state: "Beginner", checked: true },
      { label: "Java", state: "N.A", checked: false },
      { label: "C++", state: "N.A", checked: false },
      { label: "Python_back-end", state: "Intermediary", checked: true }
    ]
  },
  {
    title: "INTELLIGENCE ARTIFICIELLE",
    subtitle: "⭐ ⭐ ⭐",
    stars: 3,
    skills: [
      { label: "Python_IA", state: "Intermediary", checked: true },
      { label: "AWS SageMaker", state: "Beginner", checked: true },
      { label: "Keras", state: "Intermediary", checked: true },
      { label: "TensorFlow_Google", state: "N.A", checked: false },
      { label: "Azur Machine Learning", state: "N.A", checked: false }
    ]
  },
  {
    title: "DATA VISUALISATION",
    subtitle: "⭐ ⭐ ⭐ ⭐",
    stars: 4,
    skills: [
      { label: "PowerBI", state: "Confirm", checked: true },
      { label: "Tableau", state: "Confirm", checked: true },
      { label: "Qlick", state: "Confirm", checked: true },
      { label: "Google Analytics", state: "N.A", checked: false },
      { label: "Matplotlib Python", state: "N.A", checked: false }
    ]
  },
  {
    title: "OUTILS AGILES / METHODOLOGIE",
    subtitle: "⭐ ⭐ ⭐",
    stars: 3,
    skills: [
      { label: "Jira", state: "Confirm", checked: true },
      { label: "Trello", state: "Beginner", checked: true },
      { label: "Asana", state: "Intermediary", checked: true },
      { label: "Wrike", state: "N.A", checked: false },
      { label: "Excel", state: "N.A", checked: false }
    ]
  },
  {
    title: "LANGAGES DE PROGRAMMATION",
    subtitle: "⭐ ⭐",
    stars: 2,
    skills: [
      { label: "SQL", state: "Confirm", checked: true },
      { label: "VBA", state: "Beginner", checked: true },
      { label: "Python", state: "Beginner", checked: true },
      { label: "R", state: "N.A", checked: false },
      { label: "JavaScript", state: "N.A", checked: false }
    ]
  }
];

export default function Page() {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [skills, setSkills] = useState<SkillCategory[]>([]);
  const [availability, setAvailability] = useState<Availability>("Disponible");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setProfile(mockProfile);
      setSkills(mockSkills);
      setAvailability("Disponible");
      setLoading(false);
    }, 300);

    return () => clearTimeout(timeout);
  }, []);

  if (loading || !profile) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-ink via-indigo-900 to-slate-900 text-white">
        <p className="text-lg font-semibold tracking-wide">Chargement...</p>
      </main>
    );
  }

  const fields: { label: keyof UserProfile; display: string; required?: boolean }[] =
    [
      { label: "userId", display: "User ID", required: true },
      { label: "firstName", display: "First Name", required: true },
      { label: "lastName", display: "Last Name", required: true },
      { label: "email", display: "Email ID", required: true },
      { label: "mobile", display: "Mobile No" },
      { label: "location", display: "Localisation" },
      { label: "password", display: "Password", required: true },
      { label: "teamsLink", display: "Teams link" },
      { label: "linkedin", display: "Linkedin link" },
      { label: "internalDirectory", display: "Internal directory link" },
      { label: "presentation", display: "Presentation text" }
    ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-100 via-mint to-slate-200 px-4 py-10 md:px-10">
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="flex flex-col gap-4 rounded-full border border-white/30 bg-white/10 px-6 py-4 text-white shadow-panel backdrop-blur-md sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3 text-lg font-semibold uppercase tracking-wide">
            <span className="text-3xl">👑</span>
            <span>Admin Session</span>
          </div>
          <button className="self-start rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-ink transition hover:bg-white">
            Return
          </button>
        </header>

        <section className="rounded-3xl border border-white bg-white/95 p-6 shadow-panel md:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <h1 className="text-2xl font-semibold text-ink">Add &amp; Edit User</h1>
            <button className="ml-auto text-2xl text-slate-400 transition hover:text-slate-600">
              ×
            </button>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {fields.map(({ label, display, required }) => (
              <label key={label} className="flex flex-col gap-1 text-sm">
                <span className="font-semibold text-slate-600">
                  {display}
                  {required && <span className="text-jade"> *</span>}
                </span>
                {label === "presentation" ? (
                  <textarea
                    value={profile[label]}
                    readOnly
                    rows={2}
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 shadow-inner focus:border-jade focus:outline-none"
                  />
                ) : (
                  <input
                    value={profile[label]}
                    readOnly
                    className="rounded-full border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 shadow-inner focus:border-jade focus:outline-none"
                  />
                )}
              </label>
            ))}
          </div>

          <div className="mt-6 rounded-2xl bg-platinum px-4 py-3 text-sm text-slate-600 sm:flex sm:items-center sm:justify-between">
            <span className="font-semibold uppercase tracking-wide text-slate-500">
              Module Permission
            </span>
            <div className="mt-3 flex flex-wrap gap-4 sm:mt-0">
              {["Admin", "User", "HR validation"].map((role) => (
                <label key={role} className="flex items-center gap-2 text-ink">
                  <input type="checkbox" className="h-4 w-4 accent-ink" />
                  {role}
                </label>
              ))}
            </div>
          </div>

          <div className="mt-10 space-y-8">
            {skills.map((category) => (
              <div key={category.title} className="space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <div>
                    <p className="text-xs font-semibold text-slate-400">
                      {category.subtitle}
                    </p>
                    <h2 className="text-lg font-semibold text-ink">
                      {category.title}
                    </h2>
                  </div>
                  <div className="flex gap-1 text-amber-400">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <span key={idx}>{idx < category.stars ? "★" : "☆"}</span>
                    ))}
                  </div>
                </div>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {category.skills.map((skill) => (
                    <label
                      key={skill.label}
                      className="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm text-slate-700 shadow-sm"
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={skill.checked}
                          readOnly
                          className="h-4 w-4 accent-jade"
                        />
                        <span className="font-semibold">{skill.label}</span>
                      </div>
                      <span className="text-xs font-semibold uppercase text-slate-500">
                        {skill.state}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-slate-100 bg-white px-4 py-5">
            <p className="text-sm font-semibold text-slate-500">Disponibilité</p>
            <div className="mt-4 flex flex-wrap gap-4">
              {(["Disponible", "Occupé(e)", "Absent(e)"] as Availability[]).map(
                (status) => (
                  <label
                    key={status}
                    className="flex items-center gap-2 rounded-full bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-600"
                  >
                    <input
                      type="radio"
                      name="availability"
                      value={status}
                      checked={availability === status}
                      onChange={() => setAvailability(status)}
                      className="accent-jade"
                    />
                    {status}
                  </label>
                )
              )}
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 border-t border-slate-100 pt-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
            <div className="flex gap-3">
              <a href="/" className="hover:underline">
                © Cookie Policy
              </a>
              <a href="/" className="hover:underline">
                Privacy Policy
              </a>
            </div>
            <div className="flex flex-col gap-3 text-right text-xs text-slate-500 md:flex-row md:items-center md:gap-6">
              <span>Copyright © 2022 Emanuele Toici.</span>
              <span>Tutti i diritti riservati.</span>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
            <button className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-600 transition hover:border-slate-400 hover:text-slate-800">
              Cancel
            </button>
            <button className="rounded-full bg-gradient-to-r from-sky-400 to-blue-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:brightness-105">
              Save
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}

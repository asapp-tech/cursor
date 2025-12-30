import Link from "next/link";
import { Container } from "@/components/Container";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-950">
      <div className="relative isolate overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-80"
          aria-hidden="true"
        >
          <div className="absolute -top-32 left-1/2 h-[520px] w-[920px] -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-200 via-cyan-200 to-blue-200 blur-3xl" />
          <div className="absolute -bottom-40 right-[-120px] h-[520px] w-[520px] rounded-full bg-gradient-to-br from-violet-200 to-blue-200 blur-3xl" />
        </div>

        <header className="sticky top-0 z-40 border-b border-zinc-950/5 bg-white/70 backdrop-blur">
          <Container className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-zinc-950 text-white">
                <span className="text-sm font-semibold tracking-tight">a</span>
              </div>
              <span className="text-sm font-semibold tracking-tight">askwe</span>
              <span className="hidden rounded-full border border-zinc-950/10 bg-white px-2 py-0.5 text-[11px] font-medium text-zinc-600 sm:inline">
                IA + Annuaire
              </span>
            </div>

            <nav className="hidden items-center gap-6 text-sm text-zinc-600 md:flex">
              <a className="hover:text-zinc-950" href="#produit">
                Produit
              </a>
              <a className="hover:text-zinc-950" href="#cas-dusage">
                Cas d’usage
              </a>
              <a className="hover:text-zinc-950" href="#integrations">
                Intégrations
              </a>
              <a className="hover:text-zinc-950" href="#securite">
                Sécurité
              </a>
              <a className="hover:text-zinc-950" href="#faq">
                FAQ
              </a>
            </nav>

            <div className="flex items-center gap-2">
              <Link
                href="/demo"
                className="hidden rounded-full border border-zinc-950/10 bg-white px-4 py-2 text-sm font-semibold text-zinc-950 hover:bg-zinc-50 sm:inline-flex"
              >
                Voir la démo
              </Link>
              <Link
                href="/demo"
                className="inline-flex items-center justify-center rounded-full bg-zinc-950 px-4 py-2 text-sm font-semibold text-white hover:bg-zinc-900"
              >
                Demander une démo
              </Link>
            </div>
          </Container>
        </header>

        <main>
          <section className="pb-14 pt-12 sm:pb-20 sm:pt-16">
            <Container>
              <div className="grid items-center gap-10 lg:grid-cols-2">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-zinc-950/10 bg-white px-3 py-1 text-xs font-medium text-zinc-700">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Réponses instantanées dans Teams/Slack
                  </div>
                  <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
                    Votre copilote IA pour retrouver la bonne personne et la bonne
                    info, directement dans votre messagerie.
                  </h1>
                  <p className="mt-4 text-pretty text-lg leading-8 text-zinc-600">
                    Askwe connecte votre annuaire interne et vos connaissances.
                    L’IA répond en secondes, avec sources et droits d’accès
                    respectés.
                  </p>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                    <Link
                      href="/demo"
                      className="inline-flex h-12 items-center justify-center rounded-full bg-zinc-950 px-6 text-sm font-semibold text-white hover:bg-zinc-900"
                    >
                      Demander une démo
                    </Link>
                    <a
                      href="#produit"
                      className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-950/10 bg-white px-6 text-sm font-semibold text-zinc-950 hover:bg-zinc-50"
                    >
                      Découvrir le produit
                    </a>
                  </div>

                  <dl className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <div className="rounded-2xl border border-zinc-950/10 bg-white p-4">
                      <dt className="text-xs font-medium text-zinc-600">
                        Déploiement
                      </dt>
                      <dd className="mt-1 text-sm font-semibold text-zinc-950">
                        En &lt; 1 semaine
                      </dd>
                    </div>
                    <div className="rounded-2xl border border-zinc-950/10 bg-white p-4">
                      <dt className="text-xs font-medium text-zinc-600">
                        Conformité
                      </dt>
                      <dd className="mt-1 text-sm font-semibold text-zinc-950">
                        RGPD &amp; traçabilité
                      </dd>
                    </div>
                    <div className="rounded-2xl border border-zinc-950/10 bg-white p-4">
                      <dt className="text-xs font-medium text-zinc-600">
                        Accès
                      </dt>
                      <dd className="mt-1 text-sm font-semibold text-zinc-950">
                        SSO / SAML
                      </dd>
                    </div>
                  </dl>
                </div>

                <div className="relative">
                  <div className="rounded-3xl border border-zinc-950/10 bg-white p-5 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.25)]">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-red-400" />
                        <div className="h-2 w-2 rounded-full bg-amber-400" />
                        <div className="h-2 w-2 rounded-full bg-emerald-400" />
                      </div>
                      <span className="text-xs font-medium text-zinc-500">
                        Aperçu “Chat”
                      </span>
                    </div>
                    <div className="mt-5 space-y-4">
                      <ChatBubble
                        role="user"
                        text="Qui peut valider une demande d’accès à l’outil CRM ?"
                      />
                      <ChatBubble
                        role="assistant"
                        text="Le validateur est Marie D. (Responsable CRM). Je peux lui envoyer un message ou ouvrir la procédure."
                        footnote="Sources: Annuaire • Procédure “Accès CRM”"
                      />
                      <ChatBubble
                        role="user"
                        text="Quelle est la procédure pour réinitialiser un poste ?"
                      />
                      <ChatBubble
                        role="assistant"
                        text="Voici la checklist en 6 étapes (15 min). Je cite chaque étape depuis la doc IT."
                        footnote="Sources: Base de connaissances IT"
                      />
                    </div>
                    <div className="mt-5 flex items-center justify-between rounded-2xl border border-zinc-950/10 bg-zinc-50 px-4 py-3">
                      <span className="text-sm text-zinc-500">
                        Posez une question…
                      </span>
                      <span className="rounded-full bg-zinc-950 px-3 py-1 text-xs font-semibold text-white">
                        Envoyer
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </section>

          <section id="produit" className="py-14 sm:py-20">
            <Container>
              <div className="max-w-2xl">
                <h2 className="text-balance text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
                  Le produit, conçu pour la recherche interne “sans friction”
                </h2>
                <p className="mt-3 text-pretty text-lg leading-8 text-zinc-600">
                  Moins d’allers-retours, moins de tickets. Les équipes trouvent
                  vite la réponse, ou la bonne personne à contacter.
                </p>
              </div>

              <div className="mt-10 grid gap-6 md:grid-cols-3">
                <FeatureCard
                  title="Annuaire intelligent"
                  desc="Retrouve l’expert par métier, outil, périmètre, localisation… et propose l’action suivante."
                />
                <FeatureCard
                  title="Connaissances indexées"
                  desc="Recherche sémantique dans vos docs, pages, procédures — avec citations et sources."
                />
                <FeatureCard
                  title="Droits d’accès respectés"
                  desc="Les réponses suivent vos permissions. Pas de fuite: l’IA ne voit que ce que l’utilisateur peut voir."
                />
              </div>

              <div className="mt-8 rounded-3xl border border-zinc-950/10 bg-white p-6 sm:p-8">
                <div className="grid gap-6 lg:grid-cols-3 lg:items-center">
                  <div className="lg:col-span-2">
                    <h3 className="text-xl font-semibold tracking-tight text-zinc-950">
                      Un assistant qui répond, cite, et oriente
                    </h3>
                    <p className="mt-2 text-zinc-600">
                      Askwe comprend la question, cherche dans les sources
                      autorisées, puis répond avec preuves et prochaine étape.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 sm:flex-row lg:justify-end">
                    <Link
                      href="/demo"
                      className="inline-flex h-11 items-center justify-center rounded-full bg-zinc-950 px-5 text-sm font-semibold text-white hover:bg-zinc-900"
                    >
                      Demander une démo
                    </Link>
                    <Link
                      href="/securite"
                      className="inline-flex h-11 items-center justify-center rounded-full border border-zinc-950/10 bg-white px-5 text-sm font-semibold text-zinc-950 hover:bg-zinc-50"
                    >
                      Sécurité &amp; RGPD
                    </Link>
                  </div>
                </div>
              </div>
            </Container>
          </section>

          <section id="cas-dusage" className="py-14 sm:py-20">
            <Container>
              <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
                <div className="max-w-2xl">
                  <h2 className="text-balance text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
                    Cas d’usage (B2B) qui convertissent
                  </h2>
                  <p className="mt-3 text-pretty text-lg leading-8 text-zinc-600">
                    IT, RH, opérations… Les équipes posent une question en
                    messagerie et obtiennent une réponse exploitable.
                  </p>
                </div>
              </div>

              <div className="mt-10 grid gap-6 md:grid-cols-2">
                <UseCase
                  title="IT / Support interne"
                  q="“Comment réinitialiser un poste en télétravail ?”"
                  a="Checklist, liens utiles, et escalade vers le bon référent si besoin."
                />
                <UseCase
                  title="RH / Onboarding"
                  q="“Qui valide les accès SSO ?”"
                  a="Contact + contexte + procédure + formulaire à déclencher."
                />
                <UseCase
                  title="Ops / Qualité"
                  q="“Quelle est la procédure d’incident P1 ?”"
                  a="Réponse structurée, citations, et rappel des étapes critiques."
                />
                <UseCase
                  title="Sales Enablement"
                  q="“Où trouver la dernière grille tarifaire ?”"
                  a="Lien vers la bonne version + résumé des points clés."
                />
              </div>
            </Container>
          </section>

          <section id="integrations" className="py-14 sm:py-20">
            <Container>
              <div className="max-w-2xl">
                <h2 className="text-balance text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
                  Intégrations
                </h2>
                <p className="mt-3 text-pretty text-lg leading-8 text-zinc-600">
                  Askwe se branche à votre annuaire et s’utilise là où vos
                  équipes travaillent déjà.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
                {[
                  "Microsoft 365",
                  "Google Workspace",
                  "Teams",
                  "Slack",
                  "LDAP / AD",
                  "SSO / SAML",
                ].map((label) => (
                  <div
                    key={label}
                    className="grid place-items-center rounded-2xl border border-zinc-950/10 bg-white px-3 py-4 text-sm font-medium text-zinc-700"
                  >
                    {label}
                  </div>
                ))}
              </div>
            </Container>
          </section>

          <section id="securite" className="py-14 sm:py-20">
            <Container>
              <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
                <div>
                  <h2 className="text-balance text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
                    Sécurité &amp; conformité, au centre
                  </h2>
                  <p className="mt-3 text-pretty text-lg leading-8 text-zinc-600">
                    L’IA ne doit pas être une boîte noire. Askwe privilégie la
                    traçabilité, les permissions et le contrôle.
                  </p>
                  <ul className="mt-6 space-y-3 text-zinc-700">
                    <CheckItem text="Respect des droits d’accès et des permissions" />
                    <CheckItem text="Traçabilité des réponses (sources / audit)" />
                    <CheckItem text="SSO / SAML, gestion des utilisateurs" />
                    <CheckItem text="Paramètres de rétention et gouvernance" />
                  </ul>
                  <div className="mt-8">
                    <Link
                      href="/securite"
                      className="inline-flex h-11 items-center justify-center rounded-full border border-zinc-950/10 bg-white px-5 text-sm font-semibold text-zinc-950 hover:bg-zinc-50"
                    >
                      Voir la page Sécurité
                    </Link>
                  </div>
                </div>

                <div className="rounded-3xl border border-zinc-950/10 bg-zinc-50 p-6 sm:p-8">
                  <h3 className="text-sm font-semibold text-zinc-950">
                    Ce que vos équipes voient
                  </h3>
                  <div className="mt-4 space-y-3">
                    <div className="rounded-2xl border border-zinc-950/10 bg-white p-4">
                      <div className="text-sm font-semibold text-zinc-950">
                        Réponse
                      </div>
                      <div className="mt-1 text-sm text-zinc-600">
                        Résumé + étapes + action (contacter / ouvrir doc)
                      </div>
                    </div>
                    <div className="rounded-2xl border border-zinc-950/10 bg-white p-4">
                      <div className="text-sm font-semibold text-zinc-950">
                        Sources
                      </div>
                      <div className="mt-1 text-sm text-zinc-600">
                        Chaque info est liée à un document / une entrée annuaire
                      </div>
                    </div>
                    <div className="rounded-2xl border border-zinc-950/10 bg-white p-4">
                      <div className="text-sm font-semibold text-zinc-950">
                        Permissions
                      </div>
                      <div className="mt-1 text-sm text-zinc-600">
                        Aucune donnée non autorisée n’apparaît dans les réponses
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </section>

          <section id="faq" className="py-14 sm:py-20">
            <Container>
              <div className="max-w-2xl">
                <h2 className="text-balance text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
                  FAQ
                </h2>
                <p className="mt-3 text-pretty text-lg leading-8 text-zinc-600">
                  Les questions les plus fréquentes avant une démo.
                </p>
              </div>
              <div className="mt-10 grid gap-4 md:grid-cols-2">
                <Faq
                  q="Askwe remplace-t-il la base de connaissances ?"
                  a="Non. Askwe la rend beaucoup plus simple à utiliser : il pointe vers les bonnes sources et respecte les permissions."
                />
                <Faq
                  q="Est-ce que l’IA peut “inventer” ?"
                  a="Askwe privilégie les réponses sourcées. Quand l’information manque, il propose la bonne personne à contacter."
                />
                <Faq
                  q="Comment se passe l’intégration ?"
                  a="Connexion annuaire + sources, configuration des droits, puis déploiement côté Teams/Slack. En général en moins d’une semaine."
                />
                <Faq
                  q="Quid du RGPD ?"
                  a="Principe de minimisation, traçabilité, et contrôles d’accès. La gouvernance et la rétention sont paramétrables."
                />
              </div>
            </Container>
          </section>

          <section className="pb-16">
            <Container>
              <div className="rounded-3xl bg-zinc-950 px-6 py-10 text-white sm:px-10">
                <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
                  <div>
                    <h2 className="text-balance text-3xl font-semibold tracking-tight">
                      Prêt à tester Askwe sur vos cas concrets ?
                    </h2>
                    <p className="mt-2 text-white/75">
                      Une démo rapide, puis un pilote avec vos sources et votre
                      annuaire.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                    <Link
                      href="/demo"
                      className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-zinc-950 hover:bg-zinc-100"
                    >
                      Demander une démo
                    </Link>
                    <a
                      href="#produit"
                      className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 bg-transparent px-6 text-sm font-semibold text-white hover:bg-white/10"
                    >
                      Voir le produit
                    </a>
                  </div>
                </div>
              </div>
            </Container>
          </section>
        </main>

        <footer className="border-t border-zinc-950/10 bg-white py-10">
          <Container>
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
              <div className="text-sm text-zinc-600">
                <span className="font-semibold text-zinc-950">askwe</span> —{" "}
                copilote IA pour annuaire &amp; connaissances internes.
              </div>
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
                <Link className="text-zinc-600 hover:text-zinc-950" href="/demo">
                  Démo
                </Link>
                <Link
                  className="text-zinc-600 hover:text-zinc-950"
                  href="/securite"
                >
                  Sécurité
                </Link>
                <a
                  className="text-zinc-600 hover:text-zinc-950"
                  href="mailto:contact@askwe.fr"
                >
                  Contact
                </a>
              </div>
            </div>
          </Container>
        </footer>
      </div>
    </div>
  );
}

function ChatBubble({
  role,
  text,
  footnote,
}: {
  role: "user" | "assistant";
  text: string;
  footnote?: string;
}) {
  const isUser = role === "user";
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={[
          "max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-6",
          isUser
            ? "bg-zinc-950 text-white"
            : "border border-zinc-950/10 bg-white text-zinc-900",
        ].join(" ")}
      >
        <div>{text}</div>
        {footnote ? (
          <div className="mt-2 text-xs text-zinc-500">{footnote}</div>
        ) : null}
      </div>
    </div>
  );
}

function FeatureCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-3xl border border-zinc-950/10 bg-white p-6">
      <div className="flex items-start gap-3">
        <div className="mt-1 h-10 w-10 rounded-2xl bg-zinc-50 ring-1 ring-zinc-950/10" />
        <div>
          <h3 className="text-base font-semibold tracking-tight text-zinc-950">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-zinc-600">{desc}</p>
        </div>
      </div>
    </div>
  );
}

function UseCase({
  title,
  q,
  a,
}: {
  title: string;
  q: string;
  a: string;
}) {
  return (
    <div className="rounded-3xl border border-zinc-950/10 bg-white p-6">
      <div className="text-sm font-semibold text-zinc-950">{title}</div>
      <div className="mt-3 rounded-2xl border border-zinc-950/10 bg-zinc-50 p-4 text-sm text-zinc-700">
        <div className="font-medium text-zinc-950">Question</div>
        <div className="mt-1">{q}</div>
      </div>
      <div className="mt-3 text-sm text-zinc-600">
        <span className="font-medium text-zinc-950">Réponse: </span>
        {a}
      </div>
    </div>
  );
}

function CheckItem({ text }: { text: string }) {
  return (
    <li className="flex gap-3">
      <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-700">
        <svg
          width="14"
          height="14"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7.02 7.08a1 1 0 0 1-1.42.006L3.29 8.96a1 1 0 1 1 1.42-1.4l4.254 4.313 6.312-6.37a1 1 0 0 1 1.428-.012Z"
            clipRule="evenodd"
          />
        </svg>
      </span>
      <span className="text-sm">{text}</span>
    </li>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  return (
    <details className="group rounded-3xl border border-zinc-950/10 bg-white p-6">
      <summary className="cursor-pointer list-none text-sm font-semibold text-zinc-950">
        <span className="flex items-center justify-between gap-4">
          <span>{q}</span>
          <span className="grid h-7 w-7 place-items-center rounded-full bg-zinc-50 ring-1 ring-zinc-950/10">
            <span className="block text-zinc-500 group-open:hidden">+</span>
            <span className="hidden text-zinc-500 group-open:block">−</span>
          </span>
        </span>
      </summary>
      <div className="mt-3 text-sm leading-6 text-zinc-600">{a}</div>
    </details>
  );
}

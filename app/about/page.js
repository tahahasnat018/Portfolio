import CnnSocialLinks from "@/components/cnn/CnnSocialLinks";
import { experience } from "@/data/experience";

const priorities = [
  "Reliability (evals, testing, guardrails)",
  "Real integrations (tools, DB, APIs)",
  "Clean deployment (FastAPI, Docker, monitoring)"
];

export const metadata = {
  title: "About | Muhammad Taha Hasnat",
  description: "About Muhammad Taha Hasnat"
};

export default function AboutPage() {
  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-12 md:gap-16 md:py-16">
      <section className="section-shell space-y-6 p-8">
        <h1 className="font-[family-name:var(--font-display)] text-4xl text-[var(--text)] md:text-5xl">
          I design agents that do not just chat - they act.
        </h1>
        <p className="max-w-4xl text-[var(--muted)]">
          I build agents that use tools, retrieve knowledge, and reliably complete tasks. I focus on clean systems: memory, evaluation, guardrails, and deployments that do not break in production.
        </p>
        <div className="space-y-2 text-sm text-[var(--muted)]">
          <p className="text-[var(--text)]">What I care about</p>
          {priorities.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="font-[family-name:var(--font-display)] text-3xl text-[var(--text)]">
          Experience
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {experience.map((item) => (
            <article key={item.title} className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
              <p className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">{item.period}</p>
              <h3 className="mt-2 font-[family-name:var(--font-display)] text-xl text-[var(--text)]">
                {item.title}
              </h3>
              <p className="text-sm text-[var(--muted)]">{item.company}</p>
              <div className="mt-4 space-y-2 text-sm text-[var(--muted)]">
                {item.bullets.map((bullet) => (
                  <p key={bullet}>{bullet}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell space-y-4 p-8">
        <h2 className="font-[family-name:var(--font-display)] text-3xl text-[var(--text)]">
          Let&apos;s build something that ships.
        </h2>
        <a
          href="mailto:tahahasnat018@gmail.com"
          className="inline-flex rounded-full bg-[var(--accent)] px-6 py-2 text-xs font-medium uppercase tracking-[0.16em] text-[#0b0f14]"
        >
          Email
        </a>
        <CnnSocialLinks separator={false} />
        <p className="text-sm text-[var(--muted)]">
          Open to internships / junior AI roles (2026).
        </p>
      </section>
    </main>
  );
}

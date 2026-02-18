import CnnSupportingProjectCard from "@/components/cnn/CnnSupportingProjectCard";
import { projects } from "@/data/projects";

const flagship = projects[0];
const otherProjects = projects.slice(1);

export const metadata = {
  title: "Projects | Muhammad Taha Hasnat",
  description: "Case studies and supporting projects"
};

export default function ProductPage() {
  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-12 md:gap-16 md:py-16">
      <section className="space-y-6">
        <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">Case Study</p>
        <article className="section-shell premium-hover space-y-6 p-8 transition">
          <h1 className="font-[family-name:var(--font-display)] text-4xl text-[var(--text)] md:text-5xl">
            {flagship.title}
          </h1>
          <p className="text-[var(--muted)]">{flagship.description}</p>
          <p className="text-sm text-[var(--muted)]">
            <span className="text-[var(--accent)]">Problem</span> - {flagship.problem}
          </p>
          <p className="text-sm text-[var(--muted)]">
            <span className="text-[var(--accent)]">Solution</span> - {flagship.solution}
          </p>
          <p className="text-sm text-[var(--muted)]">
            <span className="text-[var(--accent)]">Outcome</span> - {flagship.outcome}
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={flagship.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[var(--accent)] px-6 py-2 text-xs font-medium uppercase tracking-[0.16em] text-[#0b0f14]"
            >
              GitHub
            </a>
          </div>
        </article>
      </section>

      <section className="space-y-6">
        <h2 className="font-[family-name:var(--font-display)] text-3xl text-[var(--text)]">
          Supporting Projects
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {otherProjects.map((project) => (
            <CnnSupportingProjectCard
              key={project.title}
              project={{ ...project, primaryLink: project.href }}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

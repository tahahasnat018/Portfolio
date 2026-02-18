import Image from "next/image";
import Link from "next/link";
import CnnSocialLinks from "@/components/cnn/CnnSocialLinks";
import CnnSupportingProjectCard from "@/components/cnn/CnnSupportingProjectCard";
import { projects } from "@/data/projects";

const flagship = projects[0];
const supportingProjects = projects.slice(1, 4);

const stackColumns = [
  {
    title: "Agentic AI",
    items: ["LangGraph", "Tool calling", "Memory patterns", "Function routing", "Evals"]
  },
  {
    title: "Chatbots",
    items: ["RAG", "Reranking", "Prompt systems", "Guardrails", "Conversation design"]
  },
  {
    title: "ML",
    items: ["PyTorch", "Fine-tuning", "Embeddings", "Retrieval"]
  },
  {
    title: "Engineering",
    items: ["FastAPI", "Docker", "CI/CD", "Cloud"]
  }
];

export const metadata = {
  title: "Portfolio | Muhammad Taha Hasnat",
  description: "Premium AI engineer portfolio"
};

export default function HomePage() {
  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-16 px-4 py-12 md:gap-24 md:py-16">
      <section className="grid items-center gap-8 md:grid-cols-[1fr_360px]">
        <div className="space-y-6">
          <h1 className="font-[family-name:var(--font-display)] text-4xl leading-tight text-[var(--text)] md:text-6xl">
            Muhammad Taha Hasnat
          </h1>
          <p className="max-w-2xl text-xl text-[var(--text)]">
            Agentic AI Engineer building production-grade chatbots & autonomous workflows.
          </p>
          <p className="max-w-2xl text-base text-[var(--muted)]">
            Tool-using agents (LangGraph/LangChain), memory, planning, evals
            <br />
            RAG systems, reranking, observability, scalable deployment
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/#work"
              className="rounded-full bg-[var(--accent)] px-6 py-2 text-xs font-medium uppercase tracking-[0.16em] text-[#0b0f14] transition hover:opacity-90"
            >
              View Case Studies
            </Link>
            <Link
              href="mailto:tahahasnat018@gmail.com"
              className="rounded-full border border-[var(--border)] px-6 py-2 text-xs font-medium uppercase tracking-[0.16em] text-[var(--text)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              Get in Touch
            </Link>
          </div>
          <CnnSocialLinks className="pt-2" />
        </div>
        <div className="premium-hover overflow-hidden rounded-[20px] border border-[var(--border)] transition">
          <Image
            src="/images/profile/profile-pic.png"
            alt="Muhammad Taha Hasnat portrait"
            width={720}
            height={810}
            className="aspect-[16/18] h-full w-full object-cover saturate-0"
          />
        </div>
      </section>

      <section className="section-shell grid gap-0 divide-y divide-[var(--border)] md:grid-cols-3 md:divide-x md:divide-y-0">
        <div className="p-6">
          <p className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">Focus</p>
          <p className="mt-2 text-sm text-[var(--text)]">Agentic AI & Chatbots</p>
        </div>
        <div className="p-6">
          <p className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">Tools</p>
          <p className="mt-2 text-sm text-[var(--text)]">
            LangGraph, LangChain, OpenAI, Pinecone/FAISS, FastAPI
          </p>
        </div>
        <div className="p-6">
          <p className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">Current</p>
          <p className="mt-2 text-sm text-[var(--text)]">
            BS AI (2026) | Internships (Ucapacity, Cosmic AI)
          </p>
        </div>
      </section>

      <section id="work" className="space-y-8">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">Featured Case Study</p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-[var(--text)] md:text-4xl">
            {flagship.title}
          </h2>
          <p className="text-[var(--muted)]">
            Autonomous competitor research pipeline with tools + structured outputs.
          </p>
        </div>

        <article className="section-shell premium-hover space-y-6 p-8 transition">
          <div className="grid gap-6 md:grid-cols-[1fr_300px] md:items-start">
            <div className="space-y-4">
              <p className="text-sm text-[var(--muted)]">
                <span className="text-[var(--accent)]">Problem</span>
                {" -> "}
                {flagship.problem}
              </p>
              <p className="text-sm text-[var(--muted)]">
                <span className="text-[var(--accent)]">Solution</span>
                {" -> "}
                {flagship.solution}
              </p>
              <p className="text-sm text-[var(--muted)]">
                <span className="text-[var(--accent)]">Outcome</span>
                {" -> "}
                {flagship.outcome}
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/product"
                  className="rounded-full bg-[var(--accent)] px-6 py-2 text-xs font-medium uppercase tracking-[0.14em] text-[#0b0f14]"
                >
                  Read Case Study
                </Link>
                <a
                  href={flagship.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-[var(--border)] px-6 py-2 text-xs font-medium uppercase tracking-[0.14em] text-[var(--text)]"
                >
                  GitHub
                </a>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-[var(--border)]">
              <Image
                src={flagship.image}
                alt={flagship.title}
                width={600}
                height={420}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </article>

        <div className="grid gap-6 md:grid-cols-3">
          {supportingProjects.map((project) => (
            <CnnSupportingProjectCard
              key={project.title}
              project={{
                ...project,
                primaryLink: project.href,
                secondaryLink: "/product"
              }}
            />
          ))}
        </div>
        <Link
          href="/product"
          className="inline-block text-xs uppercase tracking-[0.16em] text-[var(--muted)] transition hover:text-[var(--accent)]"
        >
          View all projects
        </Link>
      </section>

      <section id="about" className="section-shell space-y-6 p-8">
        <h2 className="font-[family-name:var(--font-display)] text-3xl text-[var(--text)]">
          I design agents that do not just chat - they act.
        </h2>
        <p className="max-w-4xl text-[var(--muted)]">
          I build agents that use tools, retrieve knowledge, and reliably complete tasks. I focus on clean systems: memory, evaluation, guardrails, and deployments that do not break in production.
        </p>
        <div className="space-y-2 text-sm text-[var(--muted)]">
          <p className="text-[var(--text)]">What I care about</p>
          <p>Reliability (evals, testing, guardrails)</p>
          <p>Real integrations (tools, DB, APIs)</p>
          <p>Clean deployment (FastAPI, Docker, monitoring)</p>
        </div>
      </section>

      <section id="stack" className="space-y-6">
        <h2 className="font-[family-name:var(--font-display)] text-3xl text-[var(--text)]">Stack</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {stackColumns.map((group) => (
            <article key={group.title} className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
              <h3 className="font-[family-name:var(--font-display)] text-xl text-[var(--text)]">{group.title}</h3>
              <p className="mt-4 text-sm text-[var(--muted)]">{group.items.join(", ")}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="section-shell space-y-6 p-8">
        <h2 className="font-[family-name:var(--font-display)] text-3xl text-[var(--text)]">
          Let us build something that ships.
        </h2>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="mailto:tahahasnat018@gmail.com"
            className="rounded-full bg-[var(--accent)] px-6 py-2 text-xs font-medium uppercase tracking-[0.16em] text-[#0b0f14]"
          >
            Email
          </a>
          <CnnSocialLinks separator={false} />
        </div>
        <p className="text-sm text-[var(--muted)]">
          Open to internships / junior AI roles (2026).
        </p>
      </section>
    </main>
  );
}

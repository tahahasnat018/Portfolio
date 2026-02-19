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
          <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
            Agentic AI Engineer
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-4xl leading-tight text-[var(--text)] md:text-6xl">
            Muhammad Taha Hasnat
          </h1>
          <p className="max-w-2xl text-[22px] leading-[1.45] text-[var(--text)]">
            Agentic AI Engineer building production-grade chatbots & autonomous workflows.
          </p>
          <ul className="max-w-2xl space-y-2 text-base text-[var(--muted)]">
            <li>Tool-using agents (LangGraph/LangChain), memory, planning, evals</li>
            <li>RAG systems, reranking, observability, scalable deployment</li>
          </ul>
          <p className="max-w-2xl text-sm text-[var(--muted)]">
            Capabilities: MCP tool servers | multi-agent orchestration | eval pipelines
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/#work"
              className="premium-btn-primary rounded-full px-6 py-2 text-xs font-medium uppercase tracking-[0.08em]"
            >
              View Case Studies
            </Link>
            <Link
              href="mailto:tahahasnat018@gmail.com"
              className="premium-btn-secondary rounded-full px-6 py-2 text-xs font-medium uppercase tracking-[0.08em]"
            >
              Get in Touch
            </Link>
          </div>
          <CnnSocialLinks className="pt-2" />
        </div>
        <div className="relative">
          <div className="pointer-events-none absolute -inset-8 -z-10 bg-[radial-gradient(circle,rgba(199,164,107,0.1)_0%,rgba(199,164,107,0)_72%)]" />
          <div className="premium-hover relative overflow-hidden rounded-[20px] border border-[var(--border)] transition">
            <Image
              src="/images/profile/profile-pic.png"
              alt="Muhammad Taha Hasnat portrait"
              width={720}
              height={810}
              className="aspect-[16/18] h-full w-full object-cover grayscale contrast-105 brightness-95"
            />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(145deg,rgba(95,116,146,0.08)_0%,rgba(199,164,107,0.12)_100%)]" />
          </div>
        </div>
      </section>

      <section className="highlights-strip grid md:grid-cols-3">
        <article className="highlight-item">
          <p className="highlight-label">AGENTIC SYSTEMS</p>
          <p className="highlight-value">Built Agentic Workflows</p>
          <p className="highlight-meta">Tools • Memory • Evals</p>
          <p className="highlight-proof">Automated real operations end-to-end</p>
        </article>
        <article className="highlight-item">
          <p className="highlight-label">PROTOCOLS</p>
          <p className="highlight-value">Implemented MCP / A2A</p>
          <p className="highlight-meta">Agent handoffs • Tool servers</p>
          <p className="highlight-proof">Shipped structured multi-agent actions</p>
        </article>
        <article className="highlight-item">
          <p className="highlight-label">PRODUCTION</p>
          <p className="highlight-value">Shipped to Production</p>
          <p className="highlight-meta">RAG • Tracing • FastAPI</p>
          <p className="highlight-proof">Dockerized services with monitoring</p>
        </article>
      </section>

      <section id="experience" className="mx-auto w-full max-w-6xl py-16">
        <div className="mb-10">
          <p className="text-xs tracking-[0.18em] text-[var(--muted)]">SELECTED EXPERIENCE</p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl text-[var(--text)]">
            Experience
          </h2>
          <p className="mt-3 max-w-2xl text-[var(--muted)]">
            Work that shipped to production, not just demos.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-[11px] top-0 h-full w-px bg-[rgba(255,255,255,0.06)]" />

          <div className="space-y-6">
            <article className="relative pl-10">
              <div className="absolute left-0 top-6 h-6 w-6 rounded-full border border-[rgba(199,164,107,0.6)] bg-[#0b0f14]">
                <div className="mx-auto mt-[7px] h-2 w-2 rounded-full bg-[var(--accent)]" />
              </div>

              <div className="rounded-2xl border border-[var(--border)] bg-[rgba(15,22,32,0.55)] p-6 backdrop-blur-xl transition hover:-translate-y-[2px] hover:shadow-[0_0_0_1px_rgba(199,164,107,0.18),0_18px_60px_rgba(0,0,0,0.55)]">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <p className="text-sm text-[var(--muted)]">I-Tek Global · On-site</p>
                    <h3 className="mt-1 font-[family-name:var(--font-display)] text-xl text-[var(--text)]">
                      Agentic AI Engineer
                    </h3>
                  </div>

                  <div className="flex items-center gap-3">
                    <p className="text-sm text-[var(--muted)]">Jul 2025 - Present</p>
                    <span className="rounded-full border border-[var(--border)] bg-[rgba(255,255,255,0.03)] px-3 py-1 text-xs text-[var(--muted)]">
                      On-site
                    </span>
                  </div>
                </div>

                <ul className="mt-5 space-y-2 text-sm leading-relaxed text-[var(--muted)]">
                  <li>Built autonomous agents to streamline restaurant operations and reduce overhead.</li>
                  <li>
                    Shipped daily monitoring system contributing to{" "}
                    <span className="text-[var(--text)]">~10% profit increase</span>.
                  </li>
                  <li>
                    Reduced inventory wastage from{" "}
                    <span className="text-[var(--text)]">15% -&gt; 3%</span> via sales and stock
                    analysis automation.
                  </li>
                  <li>Prevented stock-outs and reduced rush orders, improving revenue stability.</li>
                </ul>

                <p className="mt-5 text-sm text-[var(--muted)]">
                  <span className="text-[rgba(232,238,246,0.55)]">Stack:</span> MCP{" · "}LangGraph/LangChain
                  {" · "}FastAPI{" · "}Python{" · "}MongoDB{" · "}RAG
                </p>
              </div>
            </article>

            <article className="relative pl-10">
              <div className="absolute left-0 top-6 h-6 w-6 rounded-full border border-[rgba(199,164,107,0.4)] bg-[#0b0f14]">
                <div className="mx-auto mt-[7px] h-2 w-2 rounded-full bg-[rgba(255,255,255,0.4)]" />
              </div>

              <div className="rounded-2xl border border-[var(--border)] bg-[rgba(15,22,32,0.55)] p-6 backdrop-blur-xl transition hover:-translate-y-[2px] hover:shadow-[0_0_0_1px_rgba(199,164,107,0.18),0_18px_60px_rgba(0,0,0,0.45)]">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <p className="text-sm text-[var(--muted)]">UCapcity Pvt. Ltd. · Islamabad</p>
                    <h3 className="mt-1 font-[family-name:var(--font-display)] text-xl text-[var(--text)]">
                      Junior AI Developer
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--muted)]">Nov 2024 - Feb 2025</p>
                </div>

                <ul className="mt-5 space-y-2 text-sm leading-relaxed text-[var(--muted)]">
                  <li>Built and shipped AI features in production, reducing manual effort and improving UX.</li>
                  <li>Took models from data prep to deployment, improving reliability and iteration speed.</li>
                </ul>

                <p className="mt-5 text-sm text-[var(--muted)]">
                  <span className="text-[rgba(232,238,246,0.55)]">Earlier:</span> AI Developer Intern
                  (Aug 2024 - Oct 2024){" · "}Predictive modeling, dataset preparation, evaluation.
                </p>
              </div>
            </article>
          </div>
        </div>

        <a
          href="/assets/Taha_Hasnat_Resume_Final_v6.pdf"
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-block text-sm text-[var(--muted)] transition hover:text-[var(--accent)]"
        >
          View full resume
        </a>
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
              <p className="text-sm text-[var(--muted)]">
                Capabilities: MCP tool servers | A2A handoff patterns | eval pipelines
              </p>
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

export default function CnnSupportingProjectCard({ project }) {
  return (
    <article className="premium-hover rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition">
      <h3 className="font-[family-name:var(--font-display)] text-xl text-[var(--text)]">
        {project.title}
      </h3>
      <p className="mt-4 text-sm text-[var(--muted)]">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-[var(--border)] px-4 py-2 text-xs text-[var(--muted)]"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-6 flex items-center gap-4 text-xs uppercase tracking-[0.12em]">
        {project.primaryLink ? (
          <a href={project.primaryLink} target="_blank" rel="noreferrer" className="text-[var(--accent)]">
            GitHub
          </a>
        ) : null}
        {project.secondaryLink ? (
          <a
            href={project.secondaryLink}
            target={project.secondaryLink.startsWith("http") ? "_blank" : undefined}
            rel={project.secondaryLink.startsWith("http") ? "noreferrer" : undefined}
            className="text-[var(--muted)]"
          >
            Details
          </a>
        ) : null}
      </div>
    </article>
  );
}

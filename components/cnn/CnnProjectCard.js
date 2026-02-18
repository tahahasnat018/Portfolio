import Image from "next/image";

export default function CnnProjectCard({ project }) {
  const { title, description, tags, image, href, badge } = project;

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50 shadow-xl shadow-slate-950/40">
      <div className="overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={640}
          height={360}
          className="h-48 w-full object-cover transition duration-300 hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          {badge ? (
            <span className="mt-2 inline-flex items-center gap-2 rounded-full border border-cyan-500/60 px-3 py-1 text-xs uppercase tracking-[0.2em] text-cyan-200">
              {badge}
            </span>
          ) : null}
        </div>
        <p className="text-sm text-slate-300">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>
        {href && (
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="mt-auto inline-flex items-center justify-center rounded-full bg-cyan-500 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-950 transition hover:bg-cyan-400"
          >
            View on GitHub
          </a>
        )}
      </div>
    </article>
  );
}

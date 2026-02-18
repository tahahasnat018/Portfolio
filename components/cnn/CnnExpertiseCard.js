import Image from "next/image";

export default function CnnExpertiseCard({ title, icon, description, tags }) {
  return (
    <article className="rounded-2xl border border-slate-800/80 bg-slate-900/60 p-6 shadow-xl shadow-slate-950/40 backdrop-blur">
      <div className="flex items-center gap-3">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-800/50 p-2">
          <Image src={icon} alt={`${title} icon`} width={56} height={56} />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <p className="text-sm text-slate-400">{description}</p>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-slate-800 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}

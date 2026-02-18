export default function CnnExperienceCard({ experience }) {
  const { title, company, period, bullets } = experience;
  return (
    <article className="rounded-3xl border border-slate-800 bg-slate-900/50 p-6 shadow-xl shadow-slate-950/40">
      <header className="flex flex-col gap-1">
        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{period}</p>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-sm text-slate-400">{company}</p>
      </header>
      <ul className="mt-4 space-y-2 text-sm text-slate-300">
        {bullets.map((bullet) => (
          <li key={bullet} className="flex gap-2">
            <span className="text-[var(--accent)]">*</span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

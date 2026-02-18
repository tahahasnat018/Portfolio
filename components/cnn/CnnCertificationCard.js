import Image from "next/image";

export default function CnnCertificationCard({ certification }) {
  const { title, issuer, issued, description, url, logo } = certification;

  return (
    <article className="flex flex-col gap-4 rounded-3xl border border-slate-800 bg-slate-900/50 p-6 shadow-xl shadow-slate-950/40 md:flex-row md:items-center">
      <div className="flex items-center gap-4">
        <div className="rounded-2xl bg-slate-900/80 p-3">
          <Image src={logo} alt={issuer} width={64} height={64} className="h-16 w-16 object-contain" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="text-sm text-slate-400">{issuer}</p>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">{issued}</p>
        </div>
      </div>
      <p className="text-sm text-slate-300">{description}</p>
      {url && (
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="self-start rounded-full border border-cyan-500 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200 transition hover:bg-cyan-500/20"
        >
          View Credential
        </a>
      )}
    </article>
  );
}

import CnnSocialLinks from "./CnnSocialLinks";

export default function CnnFooter() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg)]/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-[var(--muted)] md:flex-row md:items-center md:justify-between">
        <div>
          <p>Copyright 2026 Muhammad Taha Hasnat</p>
        </div>
        <CnnSocialLinks separator={false} />
      </div>
    </footer>
  );
}

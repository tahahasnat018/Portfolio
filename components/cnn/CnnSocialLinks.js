const links = [
  {
    label: "GitHub",
    href: "https://github.com/tahahasnat018"
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/taha-hasnat-0597ab187/"
  },
  {
    label: "Email",
    href: "mailto:tahahasnat018@gmail.com"
  }
];

export default function CnnSocialLinks({ className = "", separator = true }) {
  return (
    <div className={`flex flex-wrap items-center gap-4 ${className}`}>
      {links.map((link, index) => (
        <a
          key={link.label}
          href={link.href}
          target={link.href.startsWith("http") ? "_blank" : undefined}
          rel={link.href.startsWith("http") ? "noreferrer" : undefined}
          aria-label={link.label}
          className="text-sm font-medium text-[var(--muted)] transition hover:text-[var(--accent)]"
        >
          {link.label}
          {separator && index < links.length - 1 ? <span className="ml-4 text-[var(--border)]">|</span> : null}
        </a>
      ))}
    </div>
  );
}

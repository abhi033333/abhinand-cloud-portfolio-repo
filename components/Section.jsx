export default function Section({ id, title, children }) {
  return (
    <section id={id} className="mx-auto w-full max-w-5xl px-5 py-14 sm:px-8 sm:py-20">
      <span aria-hidden className="mb-3 block h-1 w-10 rounded bg-accent" />
      <h2 className="mb-8 text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
      {children}
    </section>
  );
}

export function Tag({ children }) {
  return (
    <span className="rounded border border-accent/30 bg-accent/10 px-2 py-0.5 font-mono text-xs text-accent">{children}</span>
  );
}

export function Bullets({ items }) {
  return (
    <ul className="space-y-2 text-[15px] leading-relaxed text-muted">
      {items.map((t) => (
        <li key={t} className="flex gap-3">
          <span aria-hidden className="mt-2.5 h-1 w-3 shrink-0 bg-accent" />
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}

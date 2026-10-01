import { profile } from "@/data/content";

const links = [
  ["About", "#about"],
  ["Projects", "#projects"],
  ["Experience", "#experience"],
  ["Skills", "#skills"],
  ["Education", "#education"],
  ["Contact", "#contact"],
];

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-bg/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <a href="#top" className="text-sm font-semibold">{profile.name}</a>
        <nav aria-label="Main" className="flex gap-4 overflow-x-auto text-sm text-muted">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="whitespace-nowrap hover:text-ink">{label}</a>
          ))}
        </nav>
      </div>
    </header>
  );
}

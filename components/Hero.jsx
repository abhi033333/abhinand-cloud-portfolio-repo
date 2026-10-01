import { profile } from "@/data/content";
import Architecture from "./Architecture";

const btn = "inline-flex items-center rounded px-4 py-2.5 text-sm font-medium transition";
const facts = [
  ["6 months", "AWS cloud internship"],
  ["2", "hands-on AWS projects"],
  ["Red Hat", "Linux and CCNA training"],
];

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div aria-hidden className="grid-bg absolute inset-0" />
      <section id="top" className="relative mx-auto grid w-full max-w-5xl gap-10 px-5 py-14 sm:px-8 sm:py-24 md:grid-cols-[1.2fr_1fr] md:items-center">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-sm text-accent">
            <span aria-hidden className="pulse h-2 w-2 rounded-full bg-accent" />
            Open to work · {profile.location}
          </p>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">{profile.title}</h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">{profile.headline}</p>
          <p className="mt-4 text-sm text-muted">Looking for: {profile.roles.join(", ")}.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href={profile.resume} download className={`${btn} bg-accent text-bg shadow-lg shadow-accent/20 hover:-translate-y-0.5`}>Download resume</a>
            <a href="#projects" className={`${btn} border border-line hover:-translate-y-0.5 hover:border-accent`}>View projects</a>
            <a href="#contact" className={`${btn} border border-line hover:-translate-y-0.5 hover:border-accent`}>Contact me</a>
          </div>
          <dl className="mt-9 grid max-w-md grid-cols-3 gap-4 border-t border-line pt-5">
            {facts.map(([value, label]) => (
              <div key={label}>
                <dt className="text-xl font-semibold text-accent sm:text-2xl">{value}</dt>
                <dd className="text-xs text-muted">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
        <Architecture />
      </section>
    </div>
  );
}

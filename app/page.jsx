import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Section, { Bullets, Tag } from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import {
  profile, projects, otherWork, experience, skills, training, education, certifications, softSkills,
} from "@/data/content";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />

        <Section id="about" title="About">
          <div className="max-w-2xl space-y-4 leading-relaxed text-muted">
            {profile.about.map((p) => <p key={p}>{p}</p>)}
          </div>
        </Section>

        <Section id="projects" title="Projects">
          <div className="space-y-6">
            {projects.map((p) => <ProjectCard key={p.name} project={p} />)}
            <article className="rounded-lg border border-line p-5 sm:p-6">
              <h3 className="text-lg font-semibold">{otherWork.name}</h3>
              <p className="mt-2 max-w-2xl text-[15px] text-muted">{otherWork.text}</p>
            </article>
          </div>
        </Section>

        <Section id="experience" title="Experience">
          <div className="rounded-lg border border-line border-l-4 border-l-accent bg-panel p-5 sm:p-6">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-semibold">{experience.role}, {experience.company}</h3>
              <p className="text-sm text-muted">{experience.period} · {experience.place}</p>
            </div>
            <div className="mt-4"><Bullets items={experience.points} /></div>
          </div>
        </Section>

        <Section id="skills" title="Skills">
          <dl className="grid gap-6 sm:grid-cols-2">
            {skills.map((g) => (
              <div key={g.group} className="rounded-lg border border-line bg-panel p-5">
                <dt className="mb-2 font-medium">{g.group}</dt>
                <dd className="flex flex-wrap gap-2">{g.items.map((i) => <Tag key={i}>{i}</Tag>)}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-8 max-w-2xl text-sm text-muted">{softSkills.join(", ")}.</p>
        </Section>

        <Section id="education" title="Education and training">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="font-medium">{education.degree}</h3>
              <p className="text-sm text-muted">{education.school}</p>
              <p className="text-sm text-muted">{education.period} · {education.extra}</p>
              <h3 className="mt-6 font-medium">Certification</h3>
              {certifications.map((c) => <p key={c} className="text-sm text-muted">{c}</p>)}
            </div>
            <div>
              <h3 className="mb-3 font-medium">{training.title}</h3>
              <Bullets items={training.points} />
            </div>
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <p className="mb-6 max-w-xl text-muted">
            I'm looking for an entry-level AWS Cloud Engineer, Cloud Support Engineer, Linux Administrator or DevOps Engineer role.
          </p>
          <ul className="space-y-2 text-[15px]">
            <li><a className="text-accent underline underline-offset-4" href={`mailto:${profile.email}`}>{profile.email}</a></li>
            <li><a className="text-accent underline underline-offset-4" href={`tel:${profile.phoneHref}`}>{profile.phone}</a></li>
            <li><a className="text-accent underline underline-offset-4" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a className="text-accent underline underline-offset-4" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a className="text-accent underline underline-offset-4" href={profile.resume} download>Download resume (PDF)</a></li>
          </ul>
        </Section>
      </main>
      <footer className="border-t border-line py-8 text-center text-sm text-muted">{profile.name} · {profile.location}</footer>
    </>
  );
}

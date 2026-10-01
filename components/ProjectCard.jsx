import { Bullets, Tag } from "./Section";

export default function ProjectCard({ project }) {
  return (
    <article className="rounded-lg border border-line border-t-4 border-t-accent bg-panel p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/10 sm:p-6">
      <h3 className="text-xl font-semibold">{project.name}</h3>
      <p className="mt-2 text-[15px] text-muted">{project.summary}</p>
      <div className="mt-4"><Bullets items={project.points} /></div>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((t) => <Tag key={t}>{t}</Tag>)}
      </div>
    </article>
  );
}

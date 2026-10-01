import { architecture } from "@/data/content";

// Diagram of the AWS Three-Tier Web Application project (from the resume).
export default function Architecture() {
  return (
    <figure className="rounded-lg border border-line bg-panel/90 p-4 shadow-xl shadow-accent/5 sm:p-5">
      <figcaption className="mb-3 font-mono text-xs text-muted">VPC · multiple Availability Zones</figcaption>
      <ol>
        {architecture.map((tier, i) => (
          <li key={tier.label}>
            <div
              className="tier rounded border border-line border-l-4 border-l-accent bg-bg px-4 py-3 transition hover:translate-x-1 hover:border-accent"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <p className="text-sm font-medium">{tier.label}</p>
              <p className="text-xs text-muted">{tier.note}</p>
            </div>
            {i < architecture.length - 1 && (
              <div aria-hidden className="relative mx-auto h-5 w-0.5 overflow-hidden bg-line">
                <span className="flow absolute left-0 top-0 h-2 w-full bg-accent" />
              </div>
            )}
          </li>
        ))}
      </ol>
      <p className="mt-4 text-xs text-muted">CloudWatch and SNS monitor the Auto Scaling Group.</p>
    </figure>
  );
}

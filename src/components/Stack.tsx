const technologies = [
  "TypeScript",
  "React",
  "Next.js",
  "Bun",
  "Hono",
  "Tailwind",
  "Drizzle",
  "Postgres",
  "AI",
] as const;

export default function Stack() {
  return (
    <section
      id="stack"
      aria-labelledby="stack-heading"
      className="border-y border-zinc-900 bg-zinc-950/50 px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-3xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-purple-500">
          Stack
        </p>
        <h2
          id="stack-heading"
          className="mb-10 text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl"
        >
          Love building with
        </h2>

        <div role="list" className="flex flex-wrap gap-3">
          {technologies.map((tech) => (
            <span
              key={tech}
              role="listitem"
              className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-300 transition-colors duration-150 hover:border-purple-500/50 hover:text-purple-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

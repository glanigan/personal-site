import ScrollButton from "~/components/ScrollButton";

export default function Human() {
  return (
    <section
      id="human"
      aria-labelledby="human-heading"
      className="flex h-screen snap-start flex-col"
    >
      <div className="flex flex-1 items-center justify-center px-6">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-orange-500">
            Human
          </p>
          <h2
            id="human-heading"
            className="mb-8 text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl"
          >
            Off the beaten path
          </h2>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8">
            <blockquote className="text-lg leading-relaxed text-zinc-400">
              <span className="text-3xl leading-none text-orange-500/60">
                &ldquo;
              </span>
              <p className="mt-1">
                Walked the{" "}
                <span className="font-semibold text-orange-400">Inca Trail</span>
                . Survived deepest darkest Peru. Now mostly survives cycle
                planning.
              </p>
              <span className="text-3xl leading-none text-orange-500/60">
                &rdquo;
              </span>
            </blockquote>

            <p className="mt-6 text-sm text-zinc-500">
              Turns out navigating ancient mountain passes at altitude is good
              preparation for navigating roadmap conversations with stakeholders.
            </p>
          </div>
        </div>
      </div>
      <ScrollButton targetId="connect" />
    </section>
  );
}

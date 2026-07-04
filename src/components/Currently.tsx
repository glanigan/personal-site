import ScrollButton from "~/components/ScrollButton";

export default function Currently() {
  return (
    <section
      id="currently"
      aria-labelledby="currently-heading"
      className="flex h-dvh snap-start flex-col"
    >
      <div className="flex flex-1 items-center justify-center px-6">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-purple-500">
            Currently
          </p>
          <h2
            id="currently-heading"
            className="mb-8 text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl"
          >
            What I&apos;m focused on
          </h2>

          <div className="space-y-6 text-lg leading-relaxed text-zinc-400">
            <p>
              <span className="font-semibold text-zinc-200">
                Obsessed with consumer UX.
              </span>{" "}
              I lead engineering at Checkatrade with a tight grip on the
              end-user experience — not just the code. The best technical
              decisions are the ones users never notice.
            </p>
            <p>
              <span className="font-semibold text-zinc-200">
                Building with AI to stay sharp.
              </span>{" "}
              AI is a force multiplier I use every day — as a pair programmer, a
              sounding board, a way to ship side projects faster than I could
              alone. I stay hands-on so I can lead my team with credibility.
            </p>
          </div>
        </div>
      </div>
      <ScrollButton targetId="stack" />
    </section>
  );
}

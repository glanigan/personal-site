import Link from "next/link";
import {
  siTypescript,
  siReact,
  siNextdotjs,
  siBun,
  siHono,
  siTailwindcss,
  siDrizzle,
  siPostgresql,
  siVercel,
  siCloudflare,
  siClerk,
  siNeon,
  siTanstack,
  siZod,
  siVitest,
  siTestinglibrary,
  siGooglecloud,
  siClaude,
} from "simple-icons";
import ScrollButton from "~/components/ScrollButton";

type Tech = {
  name: string;
  href: string;
  path: string | null;
  hex: string;
};

const row1: Tech[] = [
  { name: "TypeScript", href: "https://typescriptlang.org", path: siTypescript.path, hex: siTypescript.hex },
  { name: "React", href: "https://react.dev", path: siReact.path, hex: siReact.hex },
  { name: "Next.js", href: "https://nextjs.org", path: siNextdotjs.path, hex: "a1a1aa" },
  { name: "Bun", href: "https://bun.sh", path: siBun.path, hex: "fbf0df" },
  { name: "Hono", href: "https://hono.dev", path: siHono.path, hex: siHono.hex },
  { name: "Tailwind", href: "https://tailwindcss.com", path: siTailwindcss.path, hex: siTailwindcss.hex },
  { name: "Drizzle", href: "https://orm.drizzle.team", path: siDrizzle.path, hex: siDrizzle.hex },
  { name: "Postgres", href: "https://postgresql.org", path: siPostgresql.path, hex: siPostgresql.hex },
  { name: "Vercel", href: "https://vercel.com", path: siVercel.path, hex: "a1a1aa" },
  { name: "Cloudflare", href: "https://cloudflare.com", path: siCloudflare.path, hex: siCloudflare.hex },
];

const row2: Tech[] = [
  { name: "Clerk", href: "https://clerk.com", path: siClerk.path, hex: siClerk.hex },
  { name: "Neon", href: "https://neon.tech", path: siNeon.path, hex: siNeon.hex },
  { name: "Tanstack", href: "https://tanstack.com", path: siTanstack.path, hex: "ef4444" },
  { name: "Zod", href: "https://zod.dev", path: siZod.path, hex: siZod.hex },
  { name: "Playwright", href: "https://playwright.dev", path: null, hex: "2ead33" },
  { name: "Vitest", href: "https://vitest.dev", path: siVitest.path, hex: siVitest.hex },
  { name: "RTL", href: "https://testing-library.com", path: siTestinglibrary.path, hex: siTestinglibrary.hex },
  { name: "GCP", href: "https://cloud.google.com", path: siGooglecloud.path, hex: siGooglecloud.hex },
  { name: "Claude", href: "https://claude.ai", path: siClaude.path, hex: siClaude.hex },
];

// Playwright has no simple-icon — hand-crafted SVG path
const playwrightPath =
  "M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1.5 5h3v1.5h-1.5v7H12V8.5h-1.5V7zm-3 2h1.5v6H7.5V9zm7.5 0H16v6h-1.5V9z";

function TechIcon({ tech }: { tech: Tech }) {
  const brandColor = `#${tech.hex}`;
  const svgPath = tech.name === "Playwright" ? playwrightPath : tech.path;

  return (
    <Link
      href={tech.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={tech.name}
      className="group flex flex-col items-center gap-2"
    >
      <div
        className="flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/60 transition-all duration-300 group-hover:border-zinc-600 group-hover:bg-zinc-800/80"
        style={
          { "--brand": brandColor } as React.CSSProperties
        }
      >
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6 fill-zinc-500 transition-all duration-300 group-hover:fill-[var(--brand)]"
          aria-hidden="true"
        >
          <path d={svgPath ?? ""} />
        </svg>
      </div>
      <span className="text-xs text-zinc-600 transition-colors duration-300 group-hover:text-zinc-300">
        {tech.name}
      </span>
    </Link>
  );
}

function MarqueeTrack({
  items,
  direction,
}: {
  items: Tech[];
  direction: "left" | "right";
}) {
  const doubled = [...items, ...items];
  return (
    <div
      className="group overflow-hidden py-2"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
      }}
    >
      <div
        className={`flex w-max gap-6 ${
          direction === "left"
            ? "animate-marquee-left"
            : "animate-marquee-right"
        } group-hover:[animation-play-state:paused]`}
      >
        {doubled.map((tech, i) => (
          <TechIcon key={`${tech.name}-${i}`} tech={tech} />
        ))}
      </div>
    </div>
  );
}

export default function Stack() {
  return (
    <section
      id="stack"
      aria-labelledby="stack-heading"
      className="flex h-screen snap-start flex-col border-y border-zinc-900 bg-zinc-950/50"
    >
      <div className="flex flex-1 flex-col justify-center gap-8 py-8">
        <div className="px-6">
          <div className="mx-auto max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-purple-500">
              Stack
            </p>
            <h2
              id="stack-heading"
              className="text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl"
            >
              Love building with
            </h2>
          </div>
        </div>

        <div className="space-y-6">
          <MarqueeTrack items={row1} direction="left" />
          <MarqueeTrack items={row2} direction="right" />
        </div>
      </div>
      <ScrollButton targetId="human" />
    </section>
  );
}

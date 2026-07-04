"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
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
  siGithub,
  siDocker,
  siFigma,
  siStripe,
  siClerk,
  siNeon,
  siTanstack,
  siZod,
  siVitest,
  siTestinglibrary,
  siGooglecloud,
  siClaude,
  siTurborepo,
  siLinear,
  siSentry,
  siSupabase,
} from "simple-icons";
import ScrollButton from "~/components/ScrollButton";

type Tech = {
  name: string;
  href: string;
  path: string | null;
  hex: string;
};

const row1: Tech[] = [
  { name: "TypeScript",  href: "https://typescriptlang.org",  path: siTypescript.path,  hex: siTypescript.hex },
  { name: "React",       href: "https://react.dev",           path: siReact.path,       hex: siReact.hex },
  { name: "Next.js",     href: "https://nextjs.org",          path: siNextdotjs.path,   hex: "a1a1aa" },
  { name: "Bun",         href: "https://bun.sh",              path: siBun.path,         hex: "fbf0df" },
  { name: "Hono",        href: "https://hono.dev",            path: siHono.path,        hex: siHono.hex },
  { name: "Tailwind",    href: "https://tailwindcss.com",     path: siTailwindcss.path, hex: siTailwindcss.hex },
  { name: "Drizzle",     href: "https://orm.drizzle.team",    path: siDrizzle.path,     hex: siDrizzle.hex },
  { name: "Postgres",    href: "https://postgresql.org",      path: siPostgresql.path,  hex: siPostgresql.hex },
  { name: "Vercel",      href: "https://vercel.com",          path: siVercel.path,      hex: "a1a1aa" },
  { name: "Cloudflare",  href: "https://cloudflare.com",      path: siCloudflare.path,  hex: siCloudflare.hex },
  { name: "GitHub",      href: "https://github.com",          path: siGithub.path,      hex: "a1a1aa" },
  { name: "Docker",      href: "https://docker.com",          path: siDocker.path,      hex: siDocker.hex },
  { name: "Figma",       href: "https://figma.com",           path: siFigma.path,       hex: siFigma.hex },
  { name: "Stripe",      href: "https://stripe.com",          path: siStripe.path,      hex: siStripe.hex },
];

const row2: Tech[] = [
  { name: "Clerk",      href: "https://clerk.com",            path: siClerk.path,       hex: siClerk.hex },
  { name: "Neon",       href: "https://neon.tech",            path: siNeon.path,        hex: siNeon.hex },
  { name: "Tanstack",   href: "https://tanstack.com",         path: siTanstack.path,    hex: "ef4444" },
  { name: "Zod",        href: "https://zod.dev",              path: siZod.path,         hex: siZod.hex },
  { name: "Playwright", href: "https://playwright.dev",       path: null,               hex: "2ead33" },
  { name: "Vitest",     href: "https://vitest.dev",           path: siVitest.path,      hex: siVitest.hex },
  { name: "RTL",        href: "https://testing-library.com",  path: siTestinglibrary.path, hex: siTestinglibrary.hex },
  { name: "GCP",        href: "https://cloud.google.com",     path: siGooglecloud.path, hex: siGooglecloud.hex },
  { name: "Claude",     href: "https://claude.ai",            path: siClaude.path,      hex: siClaude.hex },
  { name: "Turborepo",  href: "https://turbo.build",          path: siTurborepo.path,   hex: siTurborepo.hex },
  { name: "Linear",     href: "https://linear.app",           path: siLinear.path,      hex: siLinear.hex },
  { name: "Sentry",     href: "https://sentry.io",            path: siSentry.path,      hex: siSentry.hex },
  { name: "Supabase",   href: "https://supabase.com",         path: siSupabase.path,    hex: siSupabase.hex },
];

// Playwright has no simple-icon
const playwrightPath =
  "M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1.5 5h3v1.5h-1.5v7H12V8.5h-1.5V7zm-3 2h1.5v6H7.5V9zm7.5 0H16v6h-1.5V9z";

// Fixed item slot width — must match w-28 (112px) + gap-8 (32px)
const ITEM_SLOT = 144;
const SPEED = 0.65; // px per frame ≈ 39px/s at 60fps

function MarqueeTrack({
  items,
  direction,
}: {
  items: Tech[];
  direction: "left" | "right";
}) {
  const innerRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    const setWidth = items.length * ITEM_SLOT;
    // Right-scrolling row starts offset so it doesn't flash from position 0
    let pos = direction === "right" ? -setWidth : 0;
    let rafId: number;

    const tick = () => {
      if (!pausedRef.current) {
        pos += direction === "left" ? -SPEED : SPEED;
        if (direction === "left" && pos <= -setWidth) pos += setWidth;
        if (direction === "right" && pos >= 0) pos -= setWidth;
        if (innerRef.current) {
          innerRef.current.style.transform = `translate3d(${pos}px, 0, 0)`;
        }
      }
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [items.length, direction]);

  const doubled = [...items, ...items];

  return (
    <div
      className="overflow-hidden py-2"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
      onMouseEnter={() => { pausedRef.current = true; }}
      onMouseLeave={() => { pausedRef.current = false; }}
    >
      <div
        ref={innerRef}
        className="flex"
        style={{ gap: 32, willChange: "transform" }}
      >
        {doubled.map((tech, i) => (
          <TechIcon key={`${tech.name}-${i}`} tech={tech} />
        ))}
      </div>
    </div>
  );
}

function TechIcon({ tech }: { tech: Tech }) {
  const brandColor = `#${tech.hex}`;
  const svgPath = tech.name === "Playwright" ? playwrightPath : tech.path;

  return (
    <Link
      href={tech.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={tech.name}
      className="group/icon flex w-28 flex-none flex-col items-center gap-3"
    >
      <div
        className="flex h-20 w-20 items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900/60 transition-all duration-300 group-hover/icon:border-zinc-600 group-hover/icon:bg-zinc-800/80"
        style={{ "--brand": brandColor } as React.CSSProperties}
      >
        <svg
          viewBox="0 0 24 24"
          className="h-10 w-10 fill-zinc-500 transition-all duration-300 group-hover/icon:fill-[var(--brand)]"
          aria-hidden="true"
        >
          <path d={svgPath ?? ""} />
        </svg>
      </div>
      <span className="text-xs text-zinc-600 transition-colors duration-300 group-hover/icon:text-zinc-300">
        {tech.name}
      </span>
    </Link>
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

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
  siSupabase,
  siDatadog,
  siExpo,
  siGooglegemini,
  siStorybook,
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
  { name: "Figma",        href: "https://figma.com",           path: siFigma.path,       hex: siFigma.hex },
  { name: "Expo",         href: "https://expo.dev",            path: siExpo.path,        hex: "a1a1aa" },
  { name: "React Native", href: "https://reactnative.dev",    path: siReact.path,       hex: siReact.hex },
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
  { name: "Datadog",    href: "https://datadoghq.com",        path: siDatadog.path,     hex: siDatadog.hex },
  { name: "Supabase",   href: "https://supabase.com",         path: siSupabase.path,    hex: siSupabase.hex },
  { name: "Gemini",     href: "https://gemini.google.com",    path: siGooglegemini.path, hex: siGooglegemini.hex },
  { name: "Storybook",  href: "https://storybook.js.org",     path: siStorybook.path,   hex: siStorybook.hex },
];

// Playwright has no simple-icon
const playwrightPath =
  "M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1.5 5h3v1.5h-1.5v7H12V8.5h-1.5V7zm-3 2h1.5v6H7.5V9zm7.5 0H16v6h-1.5V9z";

const SPEED = 0.35; // px per frame ≈ 21px/s at 60fps

function MarqueeTrack({
  items,
  direction,
}: {
  items: Tech[];
  direction: "left" | "right";
}) {
  const innerRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const posRef = useRef(0);
  const widthRef = useRef(0);
  const initializedRef = useRef(false);
  const dragRef = useRef<{ startX: number; startPos: number } | null>(null);

  // Measure the real (responsive) width of one item set, rather than assuming
  // a fixed slot size, since icon/gap sizes differ between mobile and desktop.
  useEffect(() => {
    const measure = () => {
      const el = innerRef.current;
      if (!el) return;
      const setWidth = el.scrollWidth / 2;
      widthRef.current = setWidth;
      if (!initializedRef.current) {
        posRef.current = direction === "right" ? -setWidth : 0;
        initializedRef.current = true;
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [direction]);

  useEffect(() => {
    let rafId: number;

    const tick = () => {
      const setWidth = widthRef.current;
      if (!pausedRef.current && setWidth > 0) {
        posRef.current += direction === "left" ? -SPEED : SPEED;
        if (direction === "left" && posRef.current <= -setWidth) posRef.current += setWidth;
        if (direction === "right" && posRef.current >= 0) posRef.current -= setWidth;
      }
      if (innerRef.current) {
        innerRef.current.style.transform = `translate3d(${posRef.current}px, 0, 0)`;
      }
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [direction]);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    pausedRef.current = true;
    dragRef.current = { startX: e.clientX, startPos: posRef.current };
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragRef.current) return;
    const setWidth = widthRef.current;
    let next = dragRef.current.startPos + (e.clientX - dragRef.current.startX);
    if (setWidth > 0) {
      while (next <= -setWidth) next += setWidth;
      while (next >= setWidth) next -= setWidth;
    }
    posRef.current = next;
  };

  const endDrag = () => {
    dragRef.current = null;
    pausedRef.current = false;
  };

  const doubled = [...items, ...items];

  return (
    <div
      className="touch-pan-y cursor-grab overflow-hidden py-2 select-none active:cursor-grabbing"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
      onMouseEnter={() => { pausedRef.current = true; }}
      onMouseLeave={() => { if (!dragRef.current) pausedRef.current = false; }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
    >
      <div
        ref={innerRef}
        className="flex gap-4 sm:gap-8"
        style={{ willChange: "transform" }}
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
      className="group/icon flex w-20 flex-none flex-col items-center gap-2 sm:w-28 sm:gap-3"
    >
      <div
        className="flex h-16 w-16 items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900/60 transition-all duration-300 group-hover/icon:border-zinc-600 group-hover/icon:bg-zinc-800/80 group-active/icon:border-zinc-600 group-active/icon:bg-zinc-800/80 sm:h-20 sm:w-20"
        style={{ "--brand": brandColor } as React.CSSProperties}
      >
        <svg
          viewBox="0 0 24 24"
          className="h-8 w-8 fill-zinc-500 transition-all duration-300 group-hover/icon:fill-[var(--brand)] group-active/icon:fill-[var(--brand)] sm:h-10 sm:w-10"
          aria-hidden="true"
        >
          <path d={svgPath ?? ""} />
        </svg>
      </div>
      <span className="text-[11px] text-zinc-600 transition-colors duration-300 group-hover/icon:text-zinc-300 group-active/icon:text-zinc-300 sm:text-xs">
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
              I love building with
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

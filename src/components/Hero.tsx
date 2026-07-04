import Link from "next/link";

export default function Hero() {
  return (
    <section
      aria-label="Introduction"
      className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-6 text-center"
    >
      {/* Ambient purple glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <div className="h-[600px] w-[600px] rounded-full bg-purple-600/10 blur-[120px]" />
      </div>

      {/* Subtle grid overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.03)_1px,transparent_1px)] bg-[size:64px_64px]"
      />

      <div className="relative z-10 max-w-3xl">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-purple-400">
          Engineering Manager
        </p>

        <h1 className="mb-6 text-6xl font-bold tracking-tight text-zinc-50 sm:text-7xl lg:text-8xl">
          Gary{" "}
          <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            Lanigan
          </span>
        </h1>

        <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-zinc-400 sm:text-xl">
          Technical EM at{" "}
          <span className="font-semibold text-orange-400">Checkatrade</span>.
          Obsessed with consumer UX. Building with AI to stay sharp and ship
          side projects.
        </p>

        <nav aria-label="Social links" className="flex justify-center gap-4">
          <Link
            href="https://www.linkedin.com/in/garylanigan/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Gary Lanigan on LinkedIn"
            className="group inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/60 px-5 py-2.5 text-sm font-medium text-zinc-300 backdrop-blur-sm transition-all duration-200 hover:border-purple-500/60 hover:bg-purple-500/10 hover:text-purple-300"
          >
            <LinkedInIcon className="h-4 w-4" />
            LinkedIn
          </Link>
          <Link
            href="https://github.com/glanigan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Gary Lanigan on GitHub"
            className="group inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/60 px-5 py-2.5 text-sm font-medium text-zinc-300 backdrop-blur-sm transition-all duration-200 hover:border-purple-500/60 hover:bg-purple-500/10 hover:text-purple-300"
          >
            <GitHubIcon className="h-4 w-4" />
            GitHub
          </Link>
        </nav>
      </div>

      {/* Scroll nudge */}
      <div
        aria-hidden="true"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <div className="h-5 w-px bg-gradient-to-b from-zinc-600 to-transparent" />
      </div>
    </section>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      role="img"
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      role="img"
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

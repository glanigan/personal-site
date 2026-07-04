"use client";

interface ScrollButtonProps {
  targetId: string;
}

export default function ScrollButton({ targetId }: ScrollButtonProps) {
  const handleClick = () => {
    document
      .getElementById(targetId)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="flex justify-center pb-8">
      <button
        onClick={handleClick}
        aria-label="Scroll to next section"
        className="animate-bounce text-zinc-700 transition-colors duration-300 hover:text-purple-400"
      >
        <ChevronDownIcon className="h-6 w-6" />
      </button>
    </div>
  );
}

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

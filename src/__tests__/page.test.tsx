import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import Hero from "~/components/Hero";
import Currently from "~/components/Currently";
import Stack from "~/components/Stack";
import Human from "~/components/Human";
import Connect from "~/components/Connect";

// Mock next/link to render a plain <a> in the test environment
vi.mock("next/link", () => ({
  default: ({
    children,
    href,
    ...props
  }: {
    children: React.ReactNode;
    href: string;
    [key: string]: unknown;
  }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

describe("Hero section", () => {
  it("renders Gary's full name as the primary heading", () => {
    render(<Hero />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("Gary Lanigan");
  });

  it("displays the Engineering Manager title", () => {
    render(<Hero />);
    expect(screen.getByText("Engineering Manager")).toBeInTheDocument();
  });

  it("includes a LinkedIn link pointing to the correct profile", () => {
    render(<Hero />);
    const link = screen.getByRole("link", { name: /linkedin/i });
    expect(link).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/garylanigan/"
    );
  });

  it("includes a GitHub link pointing to the correct profile", () => {
    render(<Hero />);
    const link = screen.getByRole("link", { name: /github/i });
    expect(link).toHaveAttribute("href", "https://github.com/glanigan");
  });

  it("mentions Checkatrade in the tagline", () => {
    render(<Hero />);
    expect(screen.getByText(/checkatrade/i)).toBeInTheDocument();
  });
});

describe("Currently section", () => {
  it("renders the section heading", () => {
    render(<Currently />);
    expect(
      screen.getByRole("heading", { name: /what i'm focused on/i })
    ).toBeInTheDocument();
  });

  it("highlights consumer UX obsession", () => {
    render(<Currently />);
    expect(screen.getByText(/obsessed with consumer ux/i)).toBeInTheDocument();
  });

  it("mentions building with AI", () => {
    render(<Currently />);
    expect(screen.getByText(/building with ai/i)).toBeInTheDocument();
  });
});

describe("Stack section", () => {
  const expectedTechs = [
    "TypeScript",
    "React",
    "Next.js",
    "Bun",
    "Hono",
    "Tailwind",
    "Drizzle",
    "Postgres",
    "AI",
  ];

  it("renders the stack heading", () => {
    render(<Stack />);
    expect(
      screen.getByRole("heading", { name: /love building with/i })
    ).toBeInTheDocument();
  });

  it.each(expectedTechs)("shows %s as a stack badge", (tech) => {
    render(<Stack />);
    expect(screen.getByText(tech)).toBeInTheDocument();
  });

  it("renders all technologies as a list", () => {
    render(<Stack />);
    const items = screen.getAllByRole("listitem");
    expect(items.length).toBeGreaterThanOrEqual(expectedTechs.length);
  });
});

describe("Human section", () => {
  it("renders the section heading", () => {
    render(<Human />);
    expect(
      screen.getByRole("heading", { name: /off the beaten path/i })
    ).toBeInTheDocument();
  });

  it("mentions the Inca Trail", () => {
    render(<Human />);
    expect(screen.getByText(/inca trail/i)).toBeInTheDocument();
  });

  it("mentions Peru", () => {
    render(<Human />);
    expect(screen.getByText(/peru/i)).toBeInTheDocument();
  });

  it("mentions cycle planning", () => {
    render(<Human />);
    expect(screen.getByText(/cycle planning/i)).toBeInTheDocument();
  });
});

describe("Connect section", () => {
  it("renders the section heading", () => {
    render(<Connect />);
    expect(
      screen.getByRole("heading", { name: /say hello/i })
    ).toBeInTheDocument();
  });

  it("has an accessible LinkedIn link with correct href", () => {
    render(<Connect />);
    const links = screen.getAllByRole("link", { name: /linkedin/i });
    const linkedinLink = links[0];
    expect(linkedinLink).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/garylanigan/"
    );
  });

  it("has an accessible GitHub link with correct href", () => {
    render(<Connect />);
    const links = screen.getAllByRole("link", { name: /github/i });
    const githubLink = links[0];
    expect(githubLink).toHaveAttribute(
      "href",
      "https://github.com/glanigan"
    );
  });

  it("renders a nav landmark for social links", () => {
    render(<Connect />);
    expect(
      screen.getByRole("navigation", { name: /social media links/i })
    ).toBeInTheDocument();
  });
});

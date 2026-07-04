import Hero from "~/components/Hero";
import Currently from "~/components/Currently";
import Stack from "~/components/Stack";
import Human from "~/components/Human";
import Connect from "~/components/Connect";

export default function Page() {
  return (
    <main className="h-dvh snap-y snap-mandatory overflow-y-scroll">
      <Hero />
      <Currently />
      <Stack />
      <Human />
      <Connect />
    </main>
  );
}

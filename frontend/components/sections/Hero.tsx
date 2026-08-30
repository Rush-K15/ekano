import Button from "@/components/ui/Button";
import Container from "../ui/Container";

export default function Hero() {
  return (
    <section className="flex min-h-[80vh] items-center">
      <Container>
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-zinc-400">
          AI-Powered Enterprise Knowledge Platform
        </p>

        <h1 className="text-6xl font-bold tracking-tight">EKANO</h1>

        <p className="mt-4 text-xl text-zinc-300">Ask. Discover. Know.</p>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
          Securely search company documentation, technical designs, and
          organizational knowledge using AI-powered retrieval.
        </p>

        <div className="mt-10 flex gap-4">
          <Button href="/login">Get Started</Button>

          <Button
            href="https://github.com/Rush-K15/ekano"
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
          >
            GitHub
          </Button>
        </div>
      </Container>
    </section>
  );
}

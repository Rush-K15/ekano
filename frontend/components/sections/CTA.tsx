import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function CTA() {
  return (
    <section className="py-32">
      <Container>
        <div className="rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black px-8 py-20 shadow-2xl">
          <SectionHeading
            title="Ready to unlock your organization's knowledge?"
            description="Transform scattered documents into an AI-powered knowledge assistant. Find answers instantly, reduce onboarding time, and empower every team."
          />

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/login">Get Started</Button>

            <Button
              href="https://github.com/Rush-K15/ekano#readme"
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
            >
              View Documentation
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

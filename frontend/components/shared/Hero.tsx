import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">

      <span className="rounded-full border border-zinc-800 bg-zinc-900 px-4 py-1 text-sm text-zinc-400">
        Enterprise Knowledge Assistant
      </span>

      <h1 className="mt-8 text-6xl font-bold tracking-tight">
        EKANO
      </h1>

      <p className="mt-3 text-xl text-zinc-400">
        Ask. Discover. Know.
      </p>

      <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-500">
        Secure AI-powered enterprise search built for teams.
        Upload documentation, search knowledge instantly,
        and chat with your company's collective intelligence.
      </p>

      <div className="mt-12 flex gap-4">

        <Button>
            Get Started
        </Button>

        <button className="rounded-xl border border-zinc-700 px-6 py-3 transition hover:border-zinc-500">
          GitHub
        </button>

      </div>

    </section>
  );
}
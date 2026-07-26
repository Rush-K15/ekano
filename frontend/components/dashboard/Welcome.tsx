import Button from "@/components/ui/Button";

export default function Welcome() {
    return (
        <section className="space-y-6">
            <div>
                <h1 className="text-4xl font-bold">
                    Welcome to Ekano
                </h1>

                <p className="mt-3 max-w-2xl text-zinc-400">
                    Ask questions, search your company knowledge, and
                    get instant AI-powered answers.
                </p>
            </div>

            <Button>
                Ask your first question
            </Button>
        </section>
    );
}
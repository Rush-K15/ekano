import Link from "next/link";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";

export default function LoginForm() {
  return (
    <Card>
      <div className="space-y-6">
        {/* Header */}
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-[0.25em] text-white">
            EKANO
          </h1>

          <h2 className="text-2xl font-semibold text-white">
            Welcome Back
          </h2>

          <p className="text-zinc-400">
            Sign in to continue to your workspace.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5">
          <Input
            type="email"
            placeholder="Email"
            autoComplete="email"
            required
          />

          <Input
            type="password"
            placeholder="Password"
            autoComplete="current-password"
            required
          />

          <Button className="w-full">
            Sign In
          </Button>
        </form>

        {/* Footer */}
        <div className="text-center">
          <Link
            href="/forgot-password"
            className="text-sm text-zinc-400 transition hover:text-white"
          >
            Forgot your password?
          </Link>
        </div>
      </div>
    </Card>
  );
}
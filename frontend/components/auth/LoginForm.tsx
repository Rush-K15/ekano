"use client";

import Link from "next/link";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import { useAuth } from "@/hooks/useAuth";

export default function LoginForm() {

    const {
        email,
        password,
        setEmail,
        setPassword,
        handleSubmit,
        loading
    } = useAuth();

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
                <form className="space-y-5" onSubmit={handleSubmit}>
                    <Input
                        type="email"
                        placeholder="Email"
                        autoComplete="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <Input
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <Button className="w-full" type="submit">
                        {loading ? "Signing In..." : "Sign-In"}
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
"use client";

import Link from "next/link";
import { useState } from "react";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";


export default function LoginForm() {
    const router = useRouter();
    const { login, loading } = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        try {
            setError("");

            await login(email, password);
            router.push("/dashboard");

        } catch {
            setError("Invalid email or password.");
        }
    };

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

                    {error && (
                        <p className="text-sm text-red-400">
                            {error}
                        </p>
                    )}

                    <Button
                        className="w-full"
                        type="submit"
                    >
                        {loading ? "Signing In..." : "Sign In"}
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
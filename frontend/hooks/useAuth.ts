"use client";

import { useState } from "react";
import { login } from "@/services/auth";
import { useRouter } from "next/navigation";


export function useAuth() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        setLoading(true);

        try {
            await login(email, password);
            router.push("/dashboard")
        } finally {
            setLoading(false);
        }
    };

    return {
        email,
        password,
        setEmail,
        setPassword,
        handleSubmit,
        loading
    };
}
"use client";

import { useState } from "react";
import { login as loginService } from "@/services/auth";
import { useRouter } from "next/navigation";

export function useAuth() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const login = async (
        email: string,
        password: string
    ) => {
        setLoading(true);

        try {
            const user = await loginService(email, password);

            console.log(user);


            return user;
        } finally {
            setLoading(false);
        }
    };

    return {
        login,
        loading,
    };
}
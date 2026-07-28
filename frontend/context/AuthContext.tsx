"use client";

import { createContext, useState } from "react";
import { login as loginService } from "@/services/auth";

type User = {
    id: string;
    name: string;
    email: string;
};

type AuthContextType = {
    user: User | null;
    loading: boolean;

    login: (
        email: string,
        password: string
    ) => Promise<void>;

    logout: () => void;
};

export const AuthContext =
    createContext<AuthContextType | null>(null);


export function AuthProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(false);

    const login = async (
        email: string,
        password: string
    ) => {
        setLoading(true);

        try {
            const user = await loginService(email, password);

            setUser(user);

        } finally {
            setLoading(false);
        }
    };

    const logout = () => {
        setUser(null);
    };

    const value: AuthContextType = {
        user,
        loading,
        login,
        logout,
    };
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}    
import { ButtonHTMLAttributes } from "react";

interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary";
}

export default function Button({
    children,
    variant = "primary",
    className = "",
    ...props
}: ButtonProps) {
    return (
        <button
            {...props}
            className={`
                rounded-xl
                px-6
                py-3
                font-semibold
                transition
                hover:scale-105

                disabled:cursor-not-allowed
                disabled:opacity-60
                disabled:hover:scale-100

                ${
                    variant === "primary"
                        ? "bg-white text-black"
                        : "border border-zinc-700 text-white hover:border-zinc-500"
                }

                ${className}
            `}
        >
            {children}
        </button>
    );
}
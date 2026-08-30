import type { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export default function Input({
  className = "",
  ...props
}: InputProps) {
  return (
    <input
      className={`
        w-full
        rounded-xl
        border
        border-zinc-700
        bg-zinc-950
        px-4
        py-3
        text-white
        outline-none
        transition
        placeholder:text-zinc-500
        focus:border-blue-500
        ${className}
      `}
      {...props}
    />
  );
}

import Link from "next/link";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

type ButtonVariant = "primary" | "secondary";

type CommonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

type ButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type LinkButtonProps = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type Props = ButtonProps | LinkButtonProps;

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: Props) {
  const styles = `
    inline-block
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
  `;

  if ("href" in props && props.href) {
    const { href, ...linkProps } = props;

    return (
      <Link href={href} {...linkProps} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
      className={styles}
    >
      {children}
    </button>
  );
}

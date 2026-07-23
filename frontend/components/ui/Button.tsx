type ButtonProps = {
  children: React.ReactNode;
};

export default function Button({ children }: ButtonProps) {
  return (
    <button className="rounded-xl bg-white px-6 py-3 font-semibold text-black transition hover:scale-105">
      {children}
    </button>
  );
}
interface SectionHeadingProps {
    title: string;
    description: string;
    centered?: boolean;
}

export default function SectionHeading({
    title,
    description,
    centered = true
}: SectionHeadingProps) {
    return (
        <div
            className={`max-w-3xl ${centered ? "mx-auto text-center" : ""
                }`}
        >
            <h2 className="text-4xl font-bold tracking-tight text-white">
                {title}
            </h2>

            <p className="mt-6 text-lg leading-8 text-zinc-400">
                {description}
            </p>
        </div>
    );
}
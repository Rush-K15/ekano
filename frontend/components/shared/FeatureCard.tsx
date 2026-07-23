type FeatureCardProps = {
    title: string;
    description: string;
};

export default function FeatureCard({
    title,
    description,
}: FeatureCardProps) {
    return (
        <div className="rounded-2xl border border-zinc-800 p-6">
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-zinc-400">{description}</p>
        </div>
    );
}
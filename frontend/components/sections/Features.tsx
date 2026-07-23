import FeatureCard from "@/components/shared/FeatureCard";
import { features } from "@/constants/features";

export default function Features() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
}
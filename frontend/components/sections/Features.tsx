import FeatureCard from "@/components/shared/FeatureCard";
import { features } from "@/constants/features";
import Container from "../ui/Container";

export default function Features() {
  return (
    <section className="pb-24">
      <Container>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
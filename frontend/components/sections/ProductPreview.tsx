import Container from "@/components/ui/Container";
import DashboardMockup from "@/components/ui/DashboardMockup";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ProductPreview() {
  return (
    <section className="py-32">
      <Container>
        <SectionHeading
          title="See Ekano in Action"
          description="Search thousands of enterprise documents, receive AI-powered answers, and trace every response back to its original source—all in one place."
        />

        <DashboardMockup />
      </Container>
    </section>
  );
}
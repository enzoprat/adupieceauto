import { Hero } from "@/components/sections/Hero";
import { ProofBar } from "@/components/sections/ProofBar";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { ProductCategories } from "@/components/sections/ProductCategories";
import { DeliverySection } from "@/components/sections/DeliverySection";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { CTASection } from "@/components/sections/CTASection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProofBar />
      <ProblemSection />
      <ProductCategories limit={6} showAllCta />
      <DeliverySection />
      <HowItWorks />
      <WhyChoose />
      <CTASection />
      <ContactSection />
    </>
  );
}

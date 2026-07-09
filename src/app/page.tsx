import { Hero } from "@/components/sections/Hero";
import { BenefitsStrip } from "@/components/sections/BenefitsStrip";
import { PartsIntro } from "@/components/sections/PartsIntro";
import { DeliverySection } from "@/components/sections/DeliverySection";
import { ProductCategories } from "@/components/sections/ProductCategories";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { CTASection } from "@/components/sections/CTASection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BenefitsStrip />
      <PartsIntro />
      <DeliverySection />
      <ProductCategories limit={6} showAllCta title="Catalogue produits" />
      <WhyChoose />
      <HowItWorks />
      <CTASection />
      <ContactSection />
    </>
  );
}

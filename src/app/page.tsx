import { Hero } from "@/components/sections/Hero";
import { ProofBar } from "@/components/sections/ProofBar";
import { ProductCategories } from "@/components/sections/ProductCategories";
import { PartnerBrands } from "@/components/sections/PartnerBrands";
import { DeliverySection } from "@/components/sections/DeliverySection";
import { CTASection } from "@/components/sections/CTASection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProofBar />
      <ProductCategories limit={6} showAllCta />
      <PartnerBrands />
      <DeliverySection />
      <CTASection />
      <ContactSection />
    </>
  );
}

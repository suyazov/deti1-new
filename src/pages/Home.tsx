import { Hero } from '@/sections/Hero';
import { TrustBlock } from '@/sections/TrustBlock';
import { ProfitCalculator } from '@/components/ProfitCalculator';
import { FloatingCards } from '@/sections/FloatingCards';
import { HowWeDoIt } from '@/sections/HowWeDoIt';
import { OfferCompare } from '@/sections/OfferCompare';
import { FounderWords } from '@/sections/FounderWords';
import { CTA } from '@/sections/CTA';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useParallax } from '@/hooks/useParallax';

export default function Home() {
  useScrollReveal();
  useParallax();

  return (
    <>
      <Hero />
      <TrustBlock />
      <ProfitCalculator />
      <FloatingCards />
      <HowWeDoIt />
      <OfferCompare />
      <FounderWords />
      <CTA />
    </>
  );
}

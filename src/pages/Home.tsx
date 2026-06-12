import { Navigation } from '@/sections/Navigation';
import { Hero } from '@/sections/Hero';
import { Stats } from '@/sections/Stats';
import { HowWeDoIt } from '@/sections/HowWeDoIt';
import { TextReveal } from '@/sections/TextReveal';
import { FloatingCards } from '@/sections/FloatingCards';
import { StepsSlider } from '@/sections/StepsSlider';
import { CompactInfo } from '@/sections/CompactInfo';
import { CTA } from '@/sections/CTA';
import { Footer } from '@/sections/Footer';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Home() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-[#0a1f1f]">
      <Navigation />
      <main>
        <Hero />
        <Stats />
        <HowWeDoIt />
        <TextReveal />
        <FloatingCards />
        <StepsSlider />
        <CompactInfo />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

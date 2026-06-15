import { Hero } from '@/sections/Hero';
import { FloatingCards } from '@/sections/FloatingCards';
import { WhyParentsChoose } from '@/sections/WhyParentsChoose';
import { HowWeDoIt } from '@/sections/HowWeDoIt';

import { ProfitCalculator } from '@/components/ProfitCalculator';
import { Stats } from '@/sections/Stats';
import { FounderWords } from '@/sections/FounderWords';
import { WeArePractitioners } from '@/sections/WeArePractitioners';
import { HistoryTimeline } from '@/sections/HistoryTimeline';
import { TeamDepartments } from '@/sections/TeamDepartments';
import { CTA } from '@/sections/CTA';
import { CompactInfo } from '@/sections/CompactInfo';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useParallax } from '@/hooks/useParallax';

export default function Home() {
  useScrollReveal();
  useParallax();

  return (
    <>
      {/* Для них: привлечение и выгода */}
      <Hero />
      <FloatingCards />
      <WhyParentsChoose />
      <CompactInfo />

      {/* Как это работает */}
      <HowWeDoIt />
      <ProfitCalculator />

      {/* О нас: компания, основатель, история, команда */}
      <Stats />
      <WeArePractitioners />
      <FounderWords />
      <HistoryTimeline />
      <TeamDepartments />

      {/* Заявка */}
      <CTA />
    </>
  );
}

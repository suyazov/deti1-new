import { Hero } from '@/sections/Hero';
import { FloatingCards } from '@/sections/FloatingCards';
import { HowWeDoIt } from '@/sections/HowWeDoIt';
import { StepsSlider } from '@/sections/StepsSlider';
import { ProfitCalculator } from '@/components/ProfitCalculator';
import { Stats } from '@/sections/Stats';
import { FounderWords } from '@/sections/FounderWords';
import { WeArePractitioners } from '@/sections/WeArePractitioners';
import { HistoryTimeline } from '@/sections/HistoryTimeline';
import { TeamDepartments } from '@/sections/TeamDepartments';
import { CTA } from '@/sections/CTA';
import { CompactInfo } from '@/sections/CompactInfo';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Home() {
  useScrollReveal();

  return (
    <>
      {/* Для них: привлечение и выгода */}
      <Hero />
      <FloatingCards />
      <CompactInfo />

      {/* Как это работает */}
      <HowWeDoIt />
      <StepsSlider />
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

import { Suspense, lazy } from 'react';
import { Hero } from '@/sections/Hero';
import { FloatingCards } from '@/sections/FloatingCards';
import { HowWeDoIt } from '@/sections/HowWeDoIt';
import { StepsSlider } from '@/sections/StepsSlider';
import { ProfitCalculator } from '@/components/ProfitCalculator';
import { Stats } from '@/sections/Stats';
import { FounderWords } from '@/sections/FounderWords';
import { HistoryTimeline } from '@/sections/HistoryTimeline';
import { TeamDepartments } from '@/sections/TeamDepartments';
import { CTA } from '@/sections/CTA';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const CompactInfo = lazy(() => import('@/sections/CompactInfo').then((m) => ({ default: m.CompactInfo })));

export default function Home() {
  useScrollReveal();

  return (
    <>
      {/* Для них: привлечение и выгода */}
      <Hero />
      <FloatingCards />
      <Suspense fallback={<div className="min-h-[480px]" aria-hidden="true" />}>
        <CompactInfo />
      </Suspense>

      {/* Как это работает */}
      <HowWeDoIt />
      <StepsSlider />
      <ProfitCalculator />

      {/* О нас: компания, основатель, история, команда */}
      <Stats />
      <FounderWords />
      <HistoryTimeline />
      <TeamDepartments />

      {/* Заявка */}
      <CTA />
    </>
  );
}

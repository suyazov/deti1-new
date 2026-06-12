import { Suspense, lazy } from 'react';
import { Hero } from '@/sections/Hero';
import { Stats } from '@/sections/Stats';
import { ProfitCalculator } from '@/components/ProfitCalculator';
import { HowWeDoIt } from '@/sections/HowWeDoIt';
import { TextReveal } from '@/sections/TextReveal';
import { FloatingCards } from '@/sections/FloatingCards';
import { StepsSlider } from '@/sections/StepsSlider';
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
      <Hero />
      <Stats />
      <ProfitCalculator />
      <HowWeDoIt />
      <TextReveal />
      <FloatingCards />
      <StepsSlider />
      <Suspense fallback={<div className="min-h-[480px]" aria-hidden="true" />}>
        <CompactInfo />
      </Suspense>
      <FounderWords />
      <HistoryTimeline />
      <TeamDepartments />
      <CTA />
    </>
  );
}

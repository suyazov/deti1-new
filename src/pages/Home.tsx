import { Hero } from '@/sections/Hero';
import { FranchiseIntro } from '@/sections/FranchiseIntro';
import { FloatingCards } from '@/sections/FloatingCards';
import { WhyParentsChoose } from '@/sections/WhyParentsChoose';
import { TrustBlock } from '@/sections/TrustBlock';
import { TargetAudience } from '@/sections/TargetAudience';
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
      <FranchiseIntro />
      <FloatingCards />
      <WhyParentsChoose />
      <TrustBlock />
      <TargetAudience />
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

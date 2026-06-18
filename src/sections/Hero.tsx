import { ArrowRight, ChevronDown, Check } from 'lucide-react';
import {
  DoodleCloud,
  DoodleStar,
  DoodleSmile,
  DoodleHeart,
  DoodleMusic,
  DoodleSpiral,
} from '@/components/Doodles';
import { UiButton as Button } from '@/components/ui/UiButton';
import { PresentationModal } from '@/components/PresentationModal';

export function Hero() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollDown = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    document.querySelector('#franchise')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[auto] hero-gradient flex items-center overflow-hidden pt-20 lg:pt-24 pb-10 lg:pb-14">
      <div className="glow-orb w-[280px] h-[280px] md:w-[420px] md:h-[420px] bg-sky-300/25 -top-10 -right-10 animate-pulse-glow" />
      <div className="glow-orb w-[240px] h-[240px] md:w-[380px] md:h-[380px] bg-pink-300/20 -bottom-10 -left-10" />
      <div className="glow-orb w-[200px] h-[200px] md:w-[320px] md:h-[320px] bg-yellow-300/20 top-1/3 left-1/4" />
      <div className="glow-orb w-[160px] h-[160px] md:w-[260px] md:h-[260px] bg-purple-300/15 bottom-1/4 right-1/3" />

      <DoodleCloud className="absolute bottom-16 left-[3%] text-sky-300/60 rotate-[-8deg] hidden lg:block w-36 h-36" />
      <DoodleStar className="absolute top-28 right-[5%] text-amber-300/60 rotate-[12deg] hidden lg:block w-32 h-32" />
      <DoodleSmile className="absolute top-1/3 left-[2%] text-pink-300/50 rotate-[8deg] hidden xl:block w-28 h-28" />
      <DoodleHeart className="absolute bottom-1/3 right-[3%] text-rose-300/40 hidden xl:block w-28 h-28" />
      <DoodleMusic className="absolute top-1/2 right-[2%] text-violet-300/30 hidden xl:block w-20 h-24" />
      <DoodleSpiral className="absolute bottom-[10%] left-[8%] text-amber-300/40 hidden lg:block w-24 h-24" />

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 w-full container-content py-8 md:py-12 lg:py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-[clamp(36px,8vw,64px)] font-bold leading-[1.05] tracking-tight text-[#2D3436] mb-5 sm:mb-7 break-words hero-animate">
            Дети в приоритете
          </h1>

          <p
            className="text-xl sm:text-2xl lg:text-[28px] text-[#2D3436] leading-snug mb-6 sm:mb-8 max-w-2xl mx-auto hero-animate"
            style={{ animationDelay: '0.2s' }}
          >
            Откройте свой детский сад с поддержкой, методикой и прибылью.
          </p>

          <div
            className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-2 mb-8 sm:mb-10 hero-animate"
            style={{ animationDelay: '0.3s' }}
          >
            <span className="w-5 h-5 rounded-full bg-[#00897b]/15 flex items-center justify-center">
              <Check className="w-3 h-3 text-[#00897b]" />
            </span>
            <span className="text-sm sm:text-base font-medium text-[#2D3436]">
              420 000 ₽ чистой прибыли в месяц при загрузке 72 ребёнка
            </span>
          </div>

          <div
            className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 hero-animate"
            style={{ animationDelay: '0.5s' }}
          >
            <PresentationModal>
              <Button size="md" className="w-full sm:w-auto">
                Получить презентацию <ArrowRight className="w-4 h-4" />
              </Button>
            </PresentationModal>
            <Button asChild variant="secondary" size="md" className="w-full sm:w-auto">
              <a href="#franchise" onClick={(e) => handleScroll(e as unknown as React.MouseEvent<HTMLAnchorElement>, '#franchise')}>
                Узнать подробнее
              </a>
            </Button>
          </div>

          <div className="mt-10 sm:mt-14 hero-animate" style={{ animationDelay: '0.7s' }}>
            <button
              onClick={handleScrollDown}
              className="mx-auto flex flex-col items-center gap-2 text-[#636e72] hover:text-[#00897b] transition-colors group"
              aria-label="Прокрутить вниз"
            >
              <span className="text-xs font-medium tracking-wide">Листайте вниз</span>
              <div className="w-7 h-11 rounded-full border-2 border-current flex items-start justify-center p-1.5">
                <ChevronDown className="w-4 h-4 animate-bounce group-hover:text-[#00897b]" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

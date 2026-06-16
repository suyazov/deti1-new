import { ArrowRight, Star, Heart, Smile, Music, Palette, Gamepad2 } from 'lucide-react';
import { DoodleCloud, DoodleStar, DoodleSmile, DoodleHeart, DoodleMusic } from '@/components/Doodles';
import { UiButton as Button } from '@/components/ui/UiButton';
import { UiCard as Card } from '@/components/ui/UiCard';
import { UiIconBox as IconBox } from '@/components/ui/UiIconBox';
import { AnimatedNumber } from '@/components/ui/AnimatedNumber';

const decorations = [
  { Icon: Star, color: 'text-yellow-400', bg: 'bg-yellow-400/25', top: '10%', left: '5%', size: 'w-9 h-9', delay: '0s' },
  { Icon: Heart, color: 'text-pink-400', bg: 'bg-pink-400/25', top: '18%', right: '10%', size: 'w-7 h-7', delay: '0.5s' },
  { Icon: Smile, color: 'text-sky-400', bg: 'bg-sky-400/25', bottom: '12%', left: '6%', size: 'w-8 h-8', delay: '1s' },
  { Icon: Music, color: 'text-purple-400', bg: 'bg-purple-400/25', top: '58%', right: '4%', size: 'w-7 h-7', delay: '1.5s' },
  { Icon: Palette, color: 'text-orange-400', bg: 'bg-orange-400/25', bottom: '22%', right: '14%', size: 'w-8 h-8', delay: '2s' },
  { Icon: Gamepad2, color: 'text-green-400', bg: 'bg-green-400/25', top: '42%', left: '2%', size: 'w-7 h-7', delay: '2.5s' },
];

const benefits = [
  'Готовая модель: CRM, маркетинг, документы и сопровождение',
  'Путь от идеи до первых доходов — за 2–3 месяца',
  'Поддержка основателя сети Анны Суязовой на всех этапах',
];

export function Hero() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[auto] hero-gradient flex items-center overflow-hidden pt-20 lg:pt-24 pb-8 lg:pb-12">
      <div className="glow-orb w-[280px] h-[280px] md:w-[420px] md:h-[420px] bg-sky-300/25 -top-10 -right-10 animate-pulse-glow" />
      <div className="glow-orb w-[240px] h-[240px] md:w-[380px] md:h-[380px] bg-pink-300/20 -bottom-10 -left-10" />
      <div className="glow-orb w-[200px] h-[200px] md:w-[320px] md:h-[320px] bg-yellow-300/20 top-1/3 left-1/4" />
      <div className="glow-orb w-[160px] h-[160px] md:w-[260px] md:h-[260px] bg-purple-300/15 bottom-1/4 right-1/3" />

      {decorations.map((d, i) => (
        <div
          key={i}
          className={`absolute hidden lg:flex items-center justify-center ${d.size} rounded-full ${d.bg} animate-float`}
          style={{ top: d.top, left: d.left, right: d.right, bottom: d.bottom, animationDelay: d.delay, animationDuration: '6s' }}
        >
          <d.Icon className={`w-1/2 h-1/2 ${d.color}`} />
        </div>
      ))}

      <DoodleCloud className="absolute bottom-16 left-[3%] text-sky-300/60 rotate-[-8deg] hidden lg:block w-36 h-36" />
      <DoodleStar className="absolute top-28 right-[5%] text-amber-300/60 rotate-[12deg] hidden lg:block w-32 h-32" />
      <DoodleSmile className="absolute top-1/3 left-[2%] text-pink-300/50 rotate-[8deg] hidden xl:block w-28 h-28" />
      <DoodleHeart className="absolute bottom-1/3 right-[3%] text-rose-300/40 hidden xl:block w-28 h-28" />
      <DoodleMusic className="absolute top-1/2 right-[2%] text-violet-300/30 hidden xl:block w-20 h-24" />

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 w-full container-content py-6 md:py-10 lg:py-12">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-10">
          <div className="flex-1 min-w-0 w-full">
            <div
              className="inline-flex items-center gap-2 glass-card rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-6 hero-animate"
              style={{ animationDelay: '0.2s' }}
            >
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
              <span className="text-[11px] sm:text-xs font-medium text-[#2D3436]/90 tracking-wide">Франшиза частного детского сада</span>
            </div>

            <h1 className="text-[clamp(30px,7vw,52px)] sm:text-[clamp(34px,6vw,56px)] lg:text-[clamp(40px,4.5vw,54px)] font-bold leading-[1.08] lg:leading-[1.05] tracking-tight text-[#2D3436] mb-4 sm:mb-6 break-words">
              <span className="block hero-animate" style={{ animationDelay: '0.1s' }}>Откройте свой</span>
              <span className="block hero-animate" style={{ animationDelay: '0.2s' }}>детский сад</span>
              <span className="block hero-animate" style={{ animationDelay: '0.3s' }}>
                <span className="text-gradient">с прибылью</span>{' '}
                <span className="whitespace-nowrap">
                  от <AnimatedNumber value={420000} suffix=" ₽" />
                </span>
              </span>
              <span className="block hero-animate" style={{ animationDelay: '0.4s' }}>в месяц</span>
            </h1>

            <div
              className="text-base sm:text-lg text-[#2D3436]/80 leading-relaxed mb-5 sm:mb-6 max-w-[600px] hero-animate space-y-3"
              style={{ animationDelay: '0.5s' }}
            >
              <p>
                Откройте частный детский сад по готовой модели: CRM, маркетинг, документы и сопровождение включены. Путь от идеи до первых доходов — за 2–3 месяца.
              </p>
              <p>
                С 2016 года запускаем действующие сады по образовательной лицензии. За это время получили награды и сопроводили сотни партнёров. С вами — Анна Суязова, основатель сети и предприниматель с 10-летним опытом.
              </p>
            </div>

            <ul className="space-y-2 mb-6 hero-animate" style={{ animationDelay: '0.6s' }}>
              {benefits.map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm sm:text-base text-[#636e72]">
                  <IconBox icon={Star} size="sm" variant="pastel" />
                  {item}
                </li>
              ))}
            </ul>

            <div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 hero-animate"
              style={{ animationDelay: '0.75s' }}
            >
              <Button asChild size="md" className="w-full sm:w-auto">
                <a href="#contact" onClick={(e) => handleClick(e as unknown as React.MouseEvent<HTMLAnchorElement>, '#contact')}>
                  Получить презентацию <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <Button asChild variant="secondary" size="md" className="w-full sm:w-auto">
                <a href="#about" onClick={(e) => handleClick(e as unknown as React.MouseEvent<HTMLAnchorElement>, '#about')}>
                  Узнать подробнее
                </a>
              </Button>
            </div>
          </div>

          <div
            className="flex-1 w-full max-w-[600px] lg:max-w-[520px] min-w-0 hero-animate"
            style={{ animationDelay: '0.4s' }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-400/20 via-pink-400/10 to-yellow-400/10 rounded-[2rem] blur-2xl" />
              <Card className="relative p-2 sm:p-3 rounded-[2rem]" variant="default">
                <picture>
                  <source
                    srcSet="/photos/kids-floor-star-700.webp 700w, /photos/kids-floor-star-1050.webp 1050w"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 600px, 520px"
                    type="image/webp"
                  />
                  <source
                    srcSet="/photos/kids-floor-star.jpeg"
                    type="image/jpeg"
                  />
                  <img
                    src="/photos/kids-floor-star.jpeg"
                    alt="Дети в детском саду «Дети в приоритете»"
                    width="700"
                    height="875"
                    loading="eager"
                    className="w-full h-auto rounded-[1.5rem] object-cover aspect-[4/5]"
                  />
                </picture>
              </Card>

              <div className="absolute -bottom-3 right-4 sm:-bottom-4 sm:right-8 glass-card rounded-2xl px-3 py-2 sm:px-4 sm:py-3 flex items-center gap-2 shadow-xl">
                <IconBox icon={Star} size="sm" variant="pastel" />
                <div>
                  <p className="text-xs sm:text-sm font-bold text-[#2D3436]">с 2016</p>
                  <p className="text-[10px] sm:text-xs text-[#636e72]">года работаем</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

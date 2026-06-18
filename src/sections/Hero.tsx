import { ArrowRight, Rocket, FileCheck, HeartHandshake } from 'lucide-react';
import {
  DoodleCloud,
  DoodleStar,
  DoodleSmile,
  DoodleHeart,
  DoodleMusic,
  DoodleSpiral,
} from '@/components/Doodles';
import { UiButton as Button } from '@/components/ui/UiButton';
import { UiCard as Card } from '@/components/ui/UiCard';

const cards = [
  {
    icon: Rocket,
    title: 'Запуск за 2–3 месяца',
    text: 'От идеи до первых доходов по проверенной схеме.',
    bg: 'bg-amber-400',
    iconBg: 'bg-white/25',
    textColor: 'text-amber-950',
  },
  {
    icon: FileCheck,
    title: 'Всё готово',
    text: 'CRM, маркетинг, документы и лицензия — уже в пакете.',
    bg: 'bg-violet-600',
    iconBg: 'bg-white/25',
    textColor: 'text-white',
  },
  {
    icon: HeartHandshake,
    title: 'Сопровождение основателя',
    text: 'Анна Суязова лично ведёт каждого партнёра.',
    bg: 'bg-sky-400',
    iconBg: 'bg-white/25',
    textColor: 'text-sky-950',
  },
];

export function Hero() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
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

      <div className="relative z-10 w-full container-content py-6 md:py-10 lg:py-12">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className="inline-flex items-center gap-2 glass-card rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-6 hero-animate"
            style={{ animationDelay: '0.2s' }}
          >
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
            <span className="text-[11px] sm:text-xs font-medium text-[#2D3436]/90 tracking-wide">
              Франшиза частного детского сада
            </span>
          </div>

          <h1 className="text-[clamp(32px,7vw,56px)] font-bold leading-[1.08] tracking-tight text-[#2D3436] mb-4 sm:mb-6 break-words">
            <span className="block hero-animate" style={{ animationDelay: '0.1s' }}>
              Откройте детский сад
            </span>
            <span className="block hero-animate" style={{ animationDelay: '0.2s' }}>
              <span className="text-gradient">с прибылью</span>{' '}
              <span className="whitespace-nowrap">от 420 000 ₽</span>
            </span>
            <span className="block hero-animate" style={{ animationDelay: '0.3s' }}>
              в месяц
            </span>
          </h1>

          <p
            className="text-base sm:text-lg text-[#2D3436]/80 leading-relaxed mb-8 sm:mb-10 max-w-2xl mx-auto hero-animate"
            style={{ animationDelay: '0.4s' }}
          >
            Готовая модель запуска под ключ: документы, CRM, маркетинг и личное сопровождение.
          </p>

          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 sm:mb-10 hero-animate"
            style={{ animationDelay: '0.5s' }}
          >
            {cards.map((card, i) => (
              <Card
                key={i}
                className={`relative overflow-hidden p-5 text-left border-0 shadow-lg ${card.bg}`}
                variant="default"
              >
                <div
                  className={`relative w-12 h-12 ${card.iconBg} rounded-2xl flex items-center justify-center mb-4`}
                >
                  <card.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className={`relative text-lg font-bold ${card.textColor} mb-2`}>
                  {card.title}
                </h3>
                <p className={`relative text-sm leading-relaxed ${card.textColor === 'text-white' ? 'text-white/90' : 'text-black/70'}`}>
                  {card.text}
                </p>
              </Card>
            ))}
          </div>

          <div
            className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 hero-animate"
            style={{ animationDelay: '0.75s' }}
          >
            <Button asChild size="md" className="w-full sm:w-auto">
              <a
                href="#contact"
                onClick={(e) => handleClick(e as unknown as React.MouseEvent<HTMLAnchorElement>, '#contact')}
              >
                Получить презентацию <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
            <Button asChild variant="secondary" size="md" className="w-full sm:w-auto">
              <a
                href="#about"
                onClick={(e) => handleClick(e as unknown as React.MouseEvent<HTMLAnchorElement>, '#about')}
              >
                Узнать подробнее
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

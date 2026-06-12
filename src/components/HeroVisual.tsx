import { Volume2, BookOpen, Brain, Palette, Music, GraduationCap } from 'lucide-react';

const cards = [
  {
    icon: Volume2,
    label: 'Логопед',
    color: 'text-[#00c9a7]',
    bg: 'bg-[#00c9a7]/10',
    delay: '0s',
    duration: '6s',
  },
  {
    icon: BookOpen,
    label: 'Английский язык',
    color: 'text-[#e73c47]',
    bg: 'bg-[#e73c47]/10',
    delay: '0.6s',
    duration: '7s',
  },
  {
    icon: Brain,
    label: 'Шахматы и логика',
    color: 'text-white',
    bg: 'bg-white/10',
    delay: '1.1s',
    duration: '6.5s',
  },
  {
    icon: Palette,
    label: 'Творчество',
    color: 'text-[#00c9a7]',
    bg: 'bg-[#00c9a7]/10',
    delay: '0.3s',
    duration: '7.5s',
  },
  {
    icon: Music,
    label: 'Музыка',
    color: 'text-[#e73c47]',
    bg: 'bg-[#e73c47]/10',
    delay: '0.9s',
    duration: '6s',
  },
  {
    icon: GraduationCap,
    label: 'Подготовка к школе',
    color: 'text-white',
    bg: 'bg-white/10',
    delay: '1.4s',
    duration: '7s',
  },
];

const desktopPositions = [
  { top: '6%', left: '6%' },
  { top: '8%', right: '6%' },
  { top: '38%', left: '0%' },
  { top: '36%', right: '0%' },
  { top: '66%', left: '8%' },
  { top: '68%', right: '6%' },
];

export function HeroVisual() {
  return (
    <div className="relative w-full h-[240px] sm:h-[300px] md:h-[420px] lg:h-[460px] xl:h-[400px]">
      {/* Soft background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00c9a7]/10 via-transparent to-[#e73c47]/5 rounded-[24px] lg:rounded-[32px] blur-2xl" />

      {/* Decorative rings - desktop only */}
      <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] xl:w-[340px] xl:h-[340px] rounded-full border border-white/5 pointer-events-none" />
      <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] xl:w-[260px] xl:h-[260px] rounded-full border border-white/[0.03] pointer-events-none" />

      {/* Mobile/tablet grid */}
      <div className="absolute inset-0 grid grid-cols-3 gap-2 sm:gap-3 content-center lg:hidden p-1 sm:p-2">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.label}
              className="glass-card rounded-xl sm:rounded-2xl p-2 sm:p-3 flex flex-col items-center justify-center gap-1.5 sm:gap-2 text-center animate-float transition-transform duration-300 hover:scale-105 hover:-translate-y-1"
              style={{ animationDelay: card.delay, animationDuration: card.duration }}
            >
              <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl ${card.bg} flex items-center justify-center`}>
                <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${card.color}`} />
              </div>
              <span className="text-[9px] sm:text-[11px] font-medium text-white/90 leading-tight">
                {card.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Desktop floating cards */}
      <div className="hidden lg:block absolute inset-0">
        {cards.map((card, index) => {
          const Icon = card.icon;
          const pos = desktopPositions[index];
          return (
            <div
              key={card.label}
              className="absolute glass-card rounded-2xl p-3.5 xl:p-4 flex flex-col items-center gap-2.5 xl:gap-3 text-center animate-float transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:bg-white/[0.08] cursor-default"
              style={{
                ...pos,
                animationDelay: card.delay,
                animationDuration: card.duration,
                width: '120px',
              }}
            >
              <div className={`w-10 h-10 xl:w-11 xl:h-11 rounded-xl ${card.bg} flex items-center justify-center`}>
                <Icon className={`w-5 h-5 xl:w-5 xl:h-5 ${card.color}`} />
              </div>
              <span className="text-[12px] xl:text-[13px] font-medium text-white/90 leading-tight">
                {card.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Center logo - desktop only */}
      <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="relative">
          <div className="absolute inset-0 bg-[#00c9a7]/20 rounded-full blur-2xl" />
          <img
            src="/logo-light.svg"
            alt="Дети в приоритете"
            className="relative h-36 xl:h-40 w-auto drop-shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

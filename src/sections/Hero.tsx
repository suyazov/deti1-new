import { ArrowRight, Star, Heart, Smile, Music, Palette, Gamepad2 } from 'lucide-react';

const decorations = [
  { Icon: Star, color: 'text-yellow-400', bg: 'bg-yellow-400/20', top: '10%', left: '5%', size: 'w-8 h-8', delay: '0s' },
  { Icon: Heart, color: 'text-pink-400', bg: 'bg-pink-400/20', top: '20%', right: '8%', size: 'w-6 h-6', delay: '0.5s' },
  { Icon: Smile, color: 'text-sky-400', bg: 'bg-sky-400/20', bottom: '15%', left: '8%', size: 'w-7 h-7', delay: '1s' },
  { Icon: Music, color: 'text-purple-400', bg: 'bg-purple-400/20', top: '60%', right: '5%', size: 'w-6 h-6', delay: '1.5s' },
  { Icon: Palette, color: 'text-orange-400', bg: 'bg-orange-400/20', bottom: '25%', right: '12%', size: 'w-7 h-7', delay: '2s' },
  { Icon: Gamepad2, color: 'text-green-400', bg: 'bg-green-400/20', top: '45%', left: '3%', size: 'w-6 h-6', delay: '2.5s' },
];

export function Hero() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[auto] lg:min-h-[auto] hero-gradient flex items-center overflow-hidden pt-20 lg:pt-24 pb-10 lg:pb-16">
      {/* Decorative colored orbs */}
      <div className="glow-orb w-[280px] h-[280px] md:w-[400px] md:h-[400px] bg-sky-300/20 -top-10 -right-10 animate-pulse-glow" />
      <div className="glow-orb w-[240px] h-[240px] md:w-[360px] md:h-[360px] bg-pink-300/15 -bottom-10 -left-10" />

      {/* Floating icons */}
      {decorations.map((d, i) => (
        <div
          key={i}
          className={`absolute hidden lg:flex items-center justify-center ${d.size} rounded-full ${d.bg} animate-float`}
          style={{ top: d.top, left: d.left, right: d.right, bottom: d.bottom, animationDelay: d.delay, animationDuration: '6s' }}
        >
          <d.Icon className={`w-1/2 h-1/2 ${d.color}`} />
        </div>
      ))}

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 w-full max-w-[1240px] mx-auto px-4 sm:px-5 py-8 md:py-10 lg:py-12 xl:py-6 xl:pb-12">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-10 xl:gap-8">
          {/* Left column - content */}
          <div className="flex-1 xl:max-w-[620px] min-w-0 w-full">
            <div
              className="inline-flex items-center gap-2 glass-card rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-6 xl:mb-4 opacity-0 animate-fade-in-up"
              style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
            >
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
              <span className="text-[11px] sm:text-xs font-medium text-[#2D3436]/90 tracking-wide">Франшиза частного детского сада</span>
            </div>

            <h1 className="text-[clamp(28px,9vw,56px)] sm:text-[clamp(32px,7vw,64px)] lg:text-[clamp(38px,5vw,56px)] xl:text-[clamp(38px,4vw,50px)] font-bold leading-[1.08] lg:leading-[1.05] xl:leading-[1.05] tracking-tight text-[#2D3436] mb-4 sm:mb-6 xl:mb-4 break-words">
              <span className="block text-reveal-line" style={{ animationDelay: '0.1s' }}>Откройте свой</span>
              <span className="block text-reveal-line" style={{ animationDelay: '0.2s' }}>детский сад</span>
              <span className="block text-reveal-line" style={{ animationDelay: '0.3s' }}>
                <span className="text-gradient">с прибылью</span> от 420 000 ₽
              </span>
              <span className="block text-reveal-line" style={{ animationDelay: '0.4s' }}>в месяц</span>
            </h1>

            <p
              className="text-base sm:text-lg md:text-lg xl:text-[15px] text-[#2D3436]/80 leading-relaxed xl:leading-[1.5] mb-5 sm:mb-6 xl:mb-4 max-w-[560px] opacity-0 animate-blur-reveal"
              style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
            >
              Готовая система запуска частного детского сада. С 2016 года, действующие сады, образовательная лицензия и первые заявки ещё до открытия.
            </p>

            <ul className="space-y-2 mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
              {[
                'Готовая методика и образовательные программы',
                'Помощь с лицензией, помещением и персоналом',
                'Маркетинг и первые клиенты до запуска',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm sm:text-base text-[#2D3436]/70">
                  <span className="w-5 h-5 rounded-full bg-sky-400/20 flex items-center justify-center flex-shrink-0">
                    <Star className="w-3 h-3 text-sky-400" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 opacity-0 animate-fade-in-up"
              style={{ animationDelay: '0.75s', animationFillMode: 'forwards' }}
            >
              <a
                href="#contact"
                onClick={(e) => handleClick(e, '#contact')}
                className="btn-coral px-6 sm:px-8 xl:px-6 py-3.5 sm:py-4 xl:py-3 text-sm sm:text-base xl:text-sm w-full sm:w-auto justify-center"
              >
                Получить презентацию <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#about"
                onClick={(e) => handleClick(e, '#about')}
                className="inline-flex items-center justify-center gap-2 rounded-full px-6 sm:px-8 xl:px-6 py-3.5 sm:py-4 xl:py-3 text-sm sm:text-base xl:text-sm font-semibold text-[#2D3436] border border-black/10 hover:bg-black/5 transition-all duration-200 w-full sm:w-auto"
              >
                Узнать подробнее
              </a>
            </div>
          </div>

          {/* Right column - photo collage */}
          <div
            className="flex-1 w-full max-w-[600px] xl:max-w-[520px] min-w-0 opacity-0 animate-slide-in-right"
            style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-400/20 to-pink-400/10 rounded-2xl lg:rounded-3xl blur-2xl" />
              <div className="relative glass-card rounded-2xl lg:rounded-3xl p-2 sm:p-3">
                <img
                  src="/photos/kids-shelf.jpeg"
                  alt="Дети в детском саду «Дети в приоритете»"
                  width="700"
                  height="875"
                  loading="eager"
                  className="w-full h-auto rounded-xl lg:rounded-2xl object-cover aspect-[4/5]"
                />
              </div>

              {/* Floating mini photo */}
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-24 sm:w-32 rounded-xl sm:rounded-2xl border-4 border-[#FDFBF7] overflow-hidden shadow-2xl hidden sm:block">
                <img
                  src="/photos/kids-sofa.jpeg"
                  alt="Экскурсия для детей"
                  width="200"
                  height="250"
                  loading="lazy"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 glass-card rounded-xl sm:rounded-2xl px-3 py-2 sm:px-4 sm:py-3 flex items-center gap-2 shadow-xl">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-yellow-400/20 flex items-center justify-center">
                  <Smile className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-bold text-[#2D3436]">2000+</p>
                  <p className="text-[10px] sm:text-xs text-[#2D3436]/60">воспитанников</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

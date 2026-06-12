import { ArrowRight, Mouse, Sparkles } from 'lucide-react';

export function Hero() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const headlineLines = [
    'Откройте свой',
    'детский сад',
    'с прибылью от',
    '420 000 ₽ в месяц',
  ];

  return (
    <section className="relative min-h-[95vh] hero-gradient flex items-center overflow-hidden pt-20">
      {/* Decorative glow orbs */}
      <div className="glow-orb w-[600px] h-[600px] bg-[#00c9a7]/20 -top-40 -right-40 animate-pulse-glow" />
      <div className="glow-orb w-[500px] h-[500px] bg-[#122e2e] -bottom-40 -left-40" />
      <div className="glow-orb w-[350px] h-[350px] bg-[#00c9a7]/10 top-1/2 left-1/4 animate-float" />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 w-full max-w-[1240px] mx-auto px-5 py-10 md:py-16">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Left column - content */}
          <div className="flex-1 max-w-[680px]">
            <div
              className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-2 mb-6 opacity-0 animate-fade-in-up"
              style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
            >
              <span className="w-2 h-2 rounded-full bg-[#00c9a7] animate-pulse" />
              <span className="text-xs font-medium text-white/80 tracking-wide">Франшиза детского сада</span>
            </div>

            <h1 className="text-[clamp(40px,6vw,72px)] font-bold leading-[1.05] tracking-tight text-white mb-6">
              {headlineLines.map((line, i) => (
                <span
                  key={i}
                  className="block text-reveal-line"
                  style={{
                    transitionDelay: `${0.1 + i * 0.1}s`,
                    animationDelay: `${0.1 + i * 0.1}s`,
                  }}
                >
                  {i === 3 ? (
                    <>
                      <span className="text-gradient">{line.split(' ').slice(0, 2).join(' ')}</span>{' '}
                      {line.split(' ').slice(2).join(' ')}
                    </>
                  ) : (
                    line
                  )}
                </span>
              ))}
            </h1>

            <p
              className="text-lg md:text-xl text-white/70 leading-relaxed mb-8 max-w-[560px] opacity-0 animate-blur-reveal"
              style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
            >
              Готовая система запуска под контролем основателя Анны Суязовой. 10 лет опыта, действующие сады, лицензия и первые заявки ещё до открытия.
            </p>

            {/* CTA */}
            <div
              className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up"
              style={{ animationDelay: '0.65s', animationFillMode: 'forwards' }}
            >
              <a
                href="#contact"
                onClick={(e) => handleClick(e, '#contact')}
                className="btn-coral px-8 py-4 text-base"
              >
                Получить презентацию <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#about"
                onClick={(e) => handleClick(e, '#about')}
                className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-white border border-white/20 hover:bg-white/10 transition-all duration-200"
              >
                Узнать подробнее
              </a>
            </div>
          </div>

          {/* Right column - photo */}
          <div
            className="flex-1 flex items-center justify-center opacity-0 animate-slide-in-right"
            style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
          >
            <div className="relative animate-float-slow">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00c9a7]/25 to-transparent rounded-[32px] blur-2xl" />
              <div className="relative glass-card rounded-[32px] p-3 md:p-4">
                <img
                  src="/anna-white-laptop.jpg"
                  alt="Анна Игоревна Суязова — основатель франшизы"
                  className="w-full max-w-[420px] h-auto rounded-[24px] object-cover"
                />
                <div className="absolute -bottom-4 -left-4 glass-card rounded-2xl px-5 py-3">
                  <p className="text-xs text-white/60">Основатель</p>
                  <p className="text-sm font-semibold text-white">Анна Игоревна Суязова</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom glass card */}
        <div
          className="mt-12 lg:mt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 opacity-0 animate-fade-in-up"
          style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}
        >
          <div className="glass-card rounded-2xl p-5 flex items-center gap-4 max-w-md">
            <div className="w-12 h-12 rounded-xl bg-[#e73c47]/15 flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-6 h-6 text-[#e73c47]" />
            </div>
            <div>
              <p className="text-sm text-white/60">Специальное предложение</p>
              <p className="text-base font-semibold text-white">Скидка 200 000 ₽ для первого партнёра</p>
            </div>
            <a
              href="#about"
              onClick={(e) => handleClick(e, '#about')}
              className="ml-auto inline-flex items-center gap-1.5 text-sm font-semibold text-[#00c9a7] hover:text-white transition-colors whitespace-nowrap"
            >
              Подробнее <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-in-up" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
        <Mouse className="w-6 h-6 text-white/40" />
        <span className="w-1.5 h-1.5 rounded-full bg-[#00c9a7] animate-scroll-bounce" />
      </div>
    </section>
  );
}

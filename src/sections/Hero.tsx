import { ArrowRight } from 'lucide-react';

export function Hero() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[auto] lg:min-h-[92vh] xl:min-h-[100vh] hero-gradient flex items-center overflow-hidden pt-16 lg:pt-20">
      {/* Decorative glow orbs */}
      <div className="glow-orb w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-[#00c9a7]/20 -top-40 -right-40 animate-pulse-glow" />
      <div className="glow-orb w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[#122e2e] -bottom-40 -left-40" />

      <div className="relative z-10 w-full max-w-[1240px] mx-auto px-4 sm:px-5 py-8 md:py-10 lg:py-12 xl:py-6 xl:pb-12">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-10 xl:gap-8">
          {/* Left column - content */}
          <div className="flex-1 xl:max-w-[620px] min-w-0 w-full">
            <div
              className="inline-flex items-center gap-2 glass-card rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-6 xl:mb-4 opacity-0 animate-fade-in-up"
              style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
            >
              <span className="w-2 h-2 rounded-full bg-[#00c9a7] animate-pulse" />
              <span className="text-[11px] sm:text-xs font-medium text-white/80 tracking-wide">Франшиза детского сада</span>
            </div>

            <h1 className="text-[clamp(28px,9vw,56px)] sm:text-[clamp(32px,7vw,64px)] lg:text-[clamp(38px,5vw,56px)] xl:text-[clamp(38px,4vw,50px)] font-bold leading-[1.08] lg:leading-[1.05] xl:leading-[1.05] tracking-tight text-white mb-4 sm:mb-6 xl:mb-4 break-words">
              <span className="block text-reveal-line" style={{ animationDelay: '0.1s' }}>Откройте свой</span>
              <span className="block text-reveal-line" style={{ animationDelay: '0.2s' }}>детский сад</span>
              <span className="block text-reveal-line" style={{ animationDelay: '0.3s' }}>
                <span className="text-gradient">с прибылью</span> от 420 000 ₽
              </span>
              <span className="block text-reveal-line" style={{ animationDelay: '0.4s' }}>в месяц</span>
            </h1>

            <p
              className="text-base sm:text-lg md:text-lg xl:text-[15px] text-white/70 leading-relaxed xl:leading-[1.5] mb-5 sm:mb-6 xl:mb-4 max-w-[560px] opacity-0 animate-blur-reveal"
              style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
            >
              Готовая система запуска детского сада. 10 лет опыта, действующие сады, образовательная лицензия и первые заявки ещё до открытия.
            </p>

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
                className="inline-flex items-center justify-center gap-2 rounded-full px-6 sm:px-8 xl:px-6 py-3.5 sm:py-4 xl:py-3 text-sm sm:text-base xl:text-sm font-semibold text-white border border-white/20 hover:bg-white/10 transition-all duration-200 w-full sm:w-auto"
              >
                Узнать подробнее
              </a>
            </div>
          </div>

          {/* Right column - photo */}
          <div
            className="flex-1 w-full max-w-[600px] xl:max-w-[520px] min-w-0 opacity-0 animate-slide-in-right"
            style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00c9a7]/20 to-[#e73c47]/10 rounded-2xl lg:rounded-3xl blur-2xl" />
              <div className="relative glass-card rounded-2xl lg:rounded-3xl p-2 sm:p-3">
                <img
                  src="/photos/img_3759.jpg"
                  alt="Интерьер детского сада «Дети в приоритете»"
                  width="800"
                  height="600"
                  loading="eager"
                  className="w-full h-auto rounded-xl lg:rounded-2xl object-cover aspect-[4/3]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

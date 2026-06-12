import { ArrowRight, Mouse } from 'lucide-react';
import { HeroVisual } from '@/components/HeroVisual';
import { HeroMiniSlider } from '@/components/HeroMiniSlider';

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
    <section className="relative min-h-[auto] lg:min-h-[92vh] xl:min-h-[100vh] hero-gradient flex items-center overflow-hidden pt-16 lg:pt-20">
      {/* Decorative glow orbs - hidden on small mobile */}
      <div className="glow-orb w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-[#00c9a7]/20 -top-40 -right-40 animate-pulse-glow" />
      <div className="glow-orb w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[#122e2e] -bottom-40 -left-40" />
      <div className="glow-orb w-[250px] h-[250px] md:w-[350px] md:h-[350px] bg-[#00c9a7]/10 top-1/2 left-1/4 animate-float hidden sm:block" />

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
          <div className="flex-1 xl:max-w-[700px] min-w-0 w-full">
            <div
              className="inline-flex items-center gap-2 glass-card rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-6 xl:mb-4 opacity-0 animate-fade-in-up"
              style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
            >
              <span className="w-2 h-2 rounded-full bg-[#00c9a7] animate-pulse" />
              <span className="text-[11px] sm:text-xs font-medium text-white/80 tracking-wide">Франшиза детского сада</span>
            </div>

            <h1 className="text-[clamp(28px,9vw,56px)] sm:text-[clamp(32px,7vw,64px)] lg:text-[clamp(38px,5vw,56px)] xl:text-[clamp(38px,4vw,50px)] font-bold leading-[1.08] lg:leading-[1.05] xl:leading-[1.05] tracking-tight text-white mb-4 sm:mb-6 xl:mb-4 break-words">
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
              className="text-base sm:text-lg md:text-lg xl:text-[15px] text-white/70 leading-relaxed xl:leading-[1.5] mb-5 sm:mb-6 xl:mb-4 max-w-[560px] opacity-0 animate-blur-reveal"
              style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
            >
              Готовая система запуска под контролем основателя Анны Суязовой. 10 лет опыта, действующие сады, лицензия и первые заявки ещё до открытия.
            </p>

            {/* Mini slider */}
            <div
              className="mb-6 sm:mb-8 xl:mb-5 opacity-0 animate-fade-in-up"
              style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
            >
              <HeroMiniSlider />
            </div>

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

          {/* Right column - visual directions */}
          <div
            className="flex-1 w-full max-w-[600px] xl:max-w-[480px] min-w-0 opacity-0 animate-slide-in-right"
            style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
          >
            <HeroVisual />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hidden sm:flex absolute bottom-6 md:bottom-8 xl:bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2 opacity-0 animate-fade-in-up" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
        <Mouse className="w-5 h-5 md:w-6 md:h-6 text-white/40" />
        <span className="w-1.5 h-1.5 rounded-full bg-[#00c9a7] animate-scroll-bounce" />
      </div>
    </section>
  );
}

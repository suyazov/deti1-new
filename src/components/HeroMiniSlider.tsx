import { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Calendar, TrendingUp, ShieldCheck, Sparkles, Award, ChevronLeft, ChevronRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Slide {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const slides: Slide[] = [
  { icon: Calendar, title: '10 лет опыта', desc: 'Отточенная модель детского сада' },
  { icon: TrendingUp, title: '420 000 ₽/мес', desc: 'Операционная прибыль сада' },
  { icon: ShieldCheck, title: 'Лицензия Минобрнауки', desc: 'Рег. № Л035-01217-26/00681824 от 19.09.2023' },
  { icon: Award, title: 'Торговая марка', desc: '№ 1019709' },
  { icon: Sparkles, title: 'Скидка 200 000 ₽', desc: 'Для первого партнёра' },
];

export function HeroMiniSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    containScroll: 'trimSnaps',
  });
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  // Autoplay
  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <div className="w-full max-w-lg xl:max-w-[28rem]">
      <div className="relative group">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-3 xl:gap-2">
            {slides.map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={i}
                  className="flex-[0_0_85%] sm:flex-[0_0_70%] xl:flex-[0_0_100%] min-w-0"
                >
                  <div className="glass-card rounded-2xl p-4 xl:p-3 flex items-center gap-3.5 xl:gap-3">
                    <div className="w-10 h-10 xl:w-8 xl:h-8 rounded-xl bg-[#00c9a7]/15 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 xl:w-4 xl:h-4 text-[#00c9a7]" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-base xl:text-sm font-semibold text-white">
                        {s.title}
                      </p>
                      <p className="text-sm xl:text-xs text-white/60">{s.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Hover arrows - desktop only */}
        <button
          onClick={scrollPrev}
          className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white/20 hover:border-white/30"
          aria-label="Предыдущий слайд"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={scrollNext}
          className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white/20 hover:border-white/30"
          aria-label="Следующий слайд"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div className="flex items-center gap-1.5 mt-3 xl:mt-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            className="min-w-6 h-6 rounded-full flex items-center justify-center"
            aria-label={`Перейти к слайду ${i + 1}`}
          >
            <span
              className={`block rounded-full transition-all duration-300 ${
                selected === i
                  ? 'w-5 h-2 bg-[#00c9a7]'
                  : 'w-1.5 h-2 bg-white/20 hover:bg-white/40'
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

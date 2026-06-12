import { useState, useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Search, Megaphone, Users, BarChart3, ChevronLeft, ChevronRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Step {
  num: string;
  title: string;
  desc: string;
  detail: string;
  icon: LucideIcon;
  img: string;
}

const steps: Step[] = [
  {
    num: '01',
    title: 'Локация и запуск',
    desc: 'Аудит помещения',
    detail: 'Проверяем помещение по СанПиН и пожарным нормам, составляем смету без лишних затрат и помогаем с лицензией.',
    icon: Search,
    img: '/anna-white-laptop.jpg',
  },
  {
    num: '02',
    title: 'Маркетинг 360°',
    desc: 'Первые лиды',
    detail: 'Настраиваем рекламу, соцсети и PR ещё до открытия. Первые заявки от родителей поступают к моменту запуска.',
    icon: Megaphone,
    img: '/anna-red-dress.jpg',
  },
  {
    num: '03',
    title: 'Команда мечты',
    desc: 'Обучение персонала',
    detail: 'Помогаем отобрать лучших воспитателей и администраторов, проводим их полное обучение по нашим стандартам.',
    icon: Users,
    img: '/anna-fireplace.jpg',
  },
  {
    num: '04',
    title: 'Система и контроль',
    desc: 'CRM и аналитика',
    detail: 'Внедряем CRM, мобильное приложение для родителей, аналитику и еженедельный разбор цифр с командой поддержки.',
    icon: BarChart3,
    img: '/testimonial-screenshot.jpg',
  },
];

export function StepsSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selected, setSelected] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    return () => { emblaApi.off('select', onSelect); };
  }, [emblaApi]);

  return (
    <section className="section-dark py-12 md:py-16 relative overflow-hidden">
      <div className="glow-orb w-[500px] h-[500px] bg-[#e73c47]/10 -left-60 top-1/2" />

      <div className="relative z-10 max-w-[1240px] mx-auto px-5">
        <div className="blur-reveal text-center mb-6 md:mb-8" style={{ transitionDelay: '0.05s' }}>
          <span className="inline-block text-xs font-semibold tracking-[0.12em] uppercase bg-white/10 text-[#00c9a7] border border-white/10 px-4 py-1.5 rounded-full mb-4">
            ПУТЬ ПАРТНЁРА
          </span>
          <h2 className="text-[clamp(28px,3.8vw,52px)] font-bold leading-[1.1] tracking-tight text-white max-w-3xl mx-auto">
            4 шага до открытия вашего сада
          </h2>
        </div>

        {/* Step icons */}
        <div className="flex items-center justify-center gap-2 md:gap-4 mb-6 md:mb-8">
          {steps.map((s, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`flex flex-col items-center gap-2 p-3 rounded-2xl transition-all duration-300 ${
                selected === i
                  ? 'bg-[#00c9a7]/15 border border-[#00c9a7]/30'
                  : 'bg-white/5 border border-transparent hover:bg-white/10'
              }`}
            >
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                  selected === i ? 'bg-[#00c9a7] text-[#0a1f1f]' : 'bg-white/10 text-white/60'
                }`}
              >
                <s.icon className="w-5 h-5" />
              </div>
              <span className={`text-xs font-medium hidden md:block ${selected === i ? 'text-[#00c9a7]' : 'text-white/50'}`}>
                {s.title}
              </span>
            </button>
          ))}
        </div>

        {/* Slider */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {steps.map((s, i) => (
              <div key={i} className="flex-[0_0_100%] min-w-0 pl-0">
                <div className="glass-card rounded-[32px] p-5 md:p-8 grid md:grid-cols-2 gap-6 md:gap-10 items-center">
                  <div>
                    <div className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-1.5 mb-4">
                      <span className="text-xs font-bold text-[#00c9a7]">{s.num}</span>
                      <span className="text-xs text-white/60">{s.desc}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{s.title}</h3>
                    <p className="text-white/70 leading-relaxed text-lg">{s.detail}</p>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#00c9a7]/20 to-transparent rounded-2xl blur-2xl" />
                    <div className="relative glass-card rounded-2xl p-2 md:p-3">
                      <img
                        src={s.img}
                        alt={s.title}
                        className="w-full h-auto rounded-xl object-cover aspect-[16/10]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            onClick={scrollPrev}
            className="w-11 h-11 rounded-full glass-card flex items-center justify-center text-white hover:bg-white/10 transition-colors"
            aria-label="Предыдущий шаг"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2">
            {steps.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  selected === i ? 'bg-[#00c9a7] w-6' : 'bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Перейти к шагу ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={scrollNext}
            className="w-11 h-11 rounded-full glass-card flex items-center justify-center text-white hover:bg-white/10 transition-colors"
            aria-label="Следующий шаг"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

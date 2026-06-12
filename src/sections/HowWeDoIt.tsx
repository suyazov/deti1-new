import { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

const galleryItems = [
  { num: '01', title: 'Аудит и локация', img: '/anna-white-laptop.jpg' },
  { num: '02', title: 'Маркетинг 360°', img: '/anna-red-dress.jpg' },
  { num: '03', title: 'Команда мечты', img: '/anna-fireplace.jpg' },
  { num: '04', title: 'Система контроля', img: '/testimonial-screenshot.jpg' },
  { num: '05', title: 'Масштабирование', img: '/anna-white-laptop.jpg' },
];

export function HowWeDoIt() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    containScroll: 'trimSnaps',
  });
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap() % galleryItems.length);
  }, [emblaApi]);

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

  const scrollTo = useCallback(
    (i: number) => emblaApi?.scrollTo(i),
    [emblaApi]
  );

  return (
    <section className="section-dark py-12 md:py-16 relative overflow-hidden">
      <div className="glow-orb w-[400px] h-[400px] bg-[#e73c47]/10 right-0 top-1/2" />

      <div className="relative z-10 max-w-[1240px] mx-auto px-5 mb-8 md:mb-10">
        <div className="blur-reveal" style={{ transitionDelay: '0.05s' }}>
          <span className="inline-block text-xs font-semibold tracking-[0.12em] uppercase bg-white/10 text-[#00c9a7] border border-white/10 px-4 py-1.5 rounded-full mb-4">
            КАК МЫ ЭТО ДЕЛАЕМ
          </span>
          <h2 className="text-[clamp(28px,3.8vw,52px)] font-bold leading-[1.1] tracking-tight text-white max-w-2xl">
            Проверенный путь от идеи до заполненного сада
          </h2>
        </div>
      </div>

      <div className="relative z-10 max-w-[1240px] mx-auto px-5">
        <div className="overflow-hidden -mx-5 px-5" ref={emblaRef}>
          <div className="flex gap-4">
            {galleryItems.map((item, i) => (
              <div
                key={i}
                className="flex-[0_0_78%] sm:flex-[0_0_48%] md:flex-[0_0_320px] min-w-0"
              >
                <div className="relative h-[180px] md:h-[220px] rounded-2xl overflow-hidden glass-card p-2 transition-transform duration-300 hover:scale-[1.02]">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-2xl" />
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                    <span className="text-xs font-bold text-white">{item.num}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-lg font-semibold text-white">{item.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-[1240px] mx-auto px-5 mt-8">
        <div className="flex items-center justify-center gap-2">
          {galleryItems.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                selected === i ? 'bg-[#00c9a7] w-6' : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Перейти к слайду ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

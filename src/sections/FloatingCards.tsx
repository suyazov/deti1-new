import { useRef, useEffect, useState } from 'react';
import { Palette, FileText, Calculator, Users, BookOpen, Shield } from 'lucide-react';

const features = [
  { icon: Palette, title: 'Готовый бренд', desc: 'Фирменное оформление, логотип, шаблоны' },
  { icon: FileText, title: 'Все документы', desc: 'По кадрам, питанию, охране труда' },
  { icon: Calculator, title: 'Финмодель', desc: 'Расчёты вложений и возврата' },
  { icon: Users, title: 'Клиенты сразу', desc: 'Готовая система привлечения родителей' },
  { icon: BookOpen, title: 'Обучение', desc: 'Администраторы, воспитатели, вы' },
  { icon: Shield, title: 'Юрподдержка', desc: 'Помощь с лицензией и договорами' },
];

export function FloatingCards() {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const raw = (windowHeight - rect.top) / (windowHeight + rect.height);
      setOffset(Math.max(0, Math.min(1, raw)));
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="section-dark py-12 md:py-16 relative overflow-hidden">
      <div className="glow-orb w-[500px] h-[500px] bg-[#00c9a7]/10 -right-60 top-1/2" />

      <div className="relative z-10 max-w-[1240px] mx-auto px-5">
        <div className="blur-reveal text-center mb-10 md:mb-12" style={{ transitionDelay: '0.05s' }}>
          <span className="inline-block text-xs font-semibold tracking-[0.12em] uppercase bg-white/10 text-[#00c9a7] border border-white/10 px-4 py-1.5 rounded-full mb-4">
            ФРАНШИЗА, КОТОРАЯ РАБОТАЕТ
          </span>
          <h2 className="text-[clamp(28px,3.8vw,52px)] font-bold leading-[1.1] tracking-tight text-white max-w-3xl mx-auto">
            Всё, что нужно для уверенного старта
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Floating 3D cards */}
          <div className="relative h-[280px] md:h-[340px]" style={{ perspective: '1000px' }}>
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] md:w-[320px] glass-card rounded-3xl p-3 animate-float shadow-2xl"
              style={{
                transform: `translate(-55%, -55%) perspective(1000px) rotateX(${5 + offset * 2}deg) rotateY(${-15 + offset * 5}deg) translateZ(40px)`,
                transformStyle: 'preserve-3d',
              }}
            >
              <img
                src="/anna-white-laptop.jpg"
                alt="Анна Суязова за работой"
                className="w-full h-auto rounded-2xl object-cover aspect-[4/3]"
              />
              <div className="mt-3 px-2 pb-2">
                <p className="text-sm font-semibold text-white">Личное сопровождение</p>
                <p className="text-xs text-white/60">Анна лично ведёт каждого партнёра</p>
              </div>
            </div>

            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] md:w-[260px] glass-card rounded-2xl p-2 animate-float-slow shadow-xl"
              style={{
                transform: `translate(15%, 25%) perspective(1000px) rotateX(${8 - offset * 3}deg) rotateY(${-12 - offset * 4}deg) translateZ(20px)`,
                transformStyle: 'preserve-3d',
                animationDelay: '1s',
              }}
            >
              <img
                src="/testimonial-screenshot.jpg"
                alt="Отзывы родителей"
                className="w-full h-auto rounded-xl object-cover aspect-[4/3]"
              />
              <div className="mt-2 px-2 pb-1">
                <p className="text-xs font-semibold text-white">Живые отзывы</p>
              </div>
            </div>

            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[160px] md:w-[200px] glass-card rounded-2xl p-2 animate-float shadow-lg"
              style={{
                transform: `translate(-90%, 30%) perspective(1000px) rotateX(${-5 + offset * 4}deg) rotateY(${20 - offset * 6}deg) translateZ(10px)`,
                transformStyle: 'preserve-3d',
                animationDelay: '2s',
              }}
            >
              <img
                src="/anna-fireplace.jpg"
                alt="Анна Суязова"
                className="w-full h-auto rounded-xl object-cover aspect-[3/4]"
              />
            </div>
          </div>

          {/* Features list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 stagger-children">
            {features.map((f, i) => (
              <div
                key={i}
                className="scroll-reveal glass-card glass-card-hover rounded-2xl p-5"
              >
                <div className="w-10 h-10 rounded-xl bg-[#00c9a7]/15 flex items-center justify-center mb-3">
                  <f.icon className="w-5 h-5 text-[#00c9a7]" />
                </div>
                <h3 className="text-base font-semibold text-white mb-1">{f.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { Palette, FileText, Calculator, Users, BookOpen, Shield } from 'lucide-react';

const features = [
  { icon: Palette, title: 'Готовый бренд', desc: 'Фирменное оформление, логотип, шаблоны' },
  { icon: FileText, title: 'Все документы', desc: 'По кадрам, питанию, охране труда' },
  { icon: Calculator, title: 'Финмодель', desc: 'Расчёты вложений и возврата' },
  { icon: Users, title: 'Клиенты сразу', desc: 'Готовая система привлечения родителей' },
  { icon: BookOpen, title: 'Обучение', desc: 'Администраторы, воспитатели и руководитель' },
  { icon: Shield, title: 'Юрподдержка', desc: 'Помощь с лицензией и договорами' },
];

export function FloatingCards() {
  return (
    <section className="section-dark py-6 md:py-8 lg:py-10 xl:py-5 relative overflow-hidden">
      <div className="glow-orb w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[#00c9a7]/10 -right-40 md:-right-60 top-1/2" />

      <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-5">
        <div className="blur-reveal text-center mb-3 sm:mb-4 md:mb-6 xl:mb-4" style={{ transitionDelay: '0.05s' }}>
          <span className="inline-block text-[10px] font-semibold tracking-[0.12em] uppercase bg-white/10 text-[#00c9a7] border border-white/10 px-2.5 py-0.5 rounded-full mb-2">
            ФРАНШИЗА, КОТОРАЯ РАБОТАЕТ
          </span>
          <h2 className="text-[clamp(20px,4vw,40px)] xl:text-[clamp(22px,2.8vw,36px)] font-bold leading-[1.1] tracking-tight text-white max-w-3xl mx-auto">
            Всё, что нужно для уверенного старта
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 lg:gap-6 xl:gap-8 items-stretch">
          {/* Photo card */}
          <div className="glass-card rounded-2xl md:rounded-3xl p-2 sm:p-3">
            <img
              src="/anna-white-laptop.webp"
              alt="Анна Суязова за работой"
              loading="lazy"
              width="800"
              height="600"
              className="w-full h-auto rounded-xl md:rounded-2xl object-cover aspect-[4/3]"
            />
            <div className="mt-2 sm:mt-3 px-1 sm:px-2 pb-0.5 sm:pb-1">
              <p className="text-xs sm:text-sm font-semibold text-white">Личное сопровождение</p>
              <p className="text-[10px] sm:text-xs text-white/60">Анна лично ведёт каждого партнёра</p>
            </div>
          </div>

          {/* Features list */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 stagger-children">
            {features.map((f, i) => (
              <div
                key={i}
                className="scroll-reveal glass-card glass-card-hover rounded-2xl p-2 sm:p-3"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#00c9a7]/15 flex items-center justify-center mb-1">
                  <f.icon className="w-3.5 h-3.5 text-[#00c9a7]" />
                </div>
                <h3 className="text-xs font-semibold text-white mb-0.5">{f.title}</h3>
                <p className="text-[10px] sm:text-[11px] text-white/60 leading-snug">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import {
  Megaphone, Users, BookOpen, TrendingUp, ShieldCheck, BadgeCheck, Monitor, BarChart3,
} from 'lucide-react';

const departments = [
  { icon: Megaphone, title: 'Маркетинг', desc: 'Реклама, лидогенерация, лендинги' },
  { icon: Users, title: 'HR и обучение', desc: 'Поиск, проверка и обучение персонала' },
  { icon: BookOpen, title: 'Методисты и академия', desc: 'Программы, конспекты, тренинги педагогов' },
  { icon: TrendingUp, title: 'Финансовый отдел', desc: 'Финмодели и оптимизация расходов' },
  { icon: ShieldCheck, title: 'Юридический отдел', desc: 'Проверка аренды, договоров, лицензий' },
  { icon: BadgeCheck, title: 'Качество и кураторы', desc: 'Личный куратор и 42 пункта чек-листа' },
  { icon: Monitor, title: 'IT и технологии', desc: 'CRM, дашборды, база знаний' },
  { icon: BarChart3, title: 'Аналитика и процессы', desc: 'Сравнение показателей по сети' },
];

export function TeamDepartments() {
  return (
    <section className="section-dark py-12 md:py-16 xl:py-10 relative overflow-hidden">
      <div className="glow-orb w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-[#e73c47]/10 -right-40 md:-right-60 top-1/2" />

      <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-5">
        <div className="blur-reveal text-center mb-6 md:mb-8 xl:mb-5" style={{ transitionDelay: '0.05s' }}>
          <span className="inline-block text-[11px] sm:text-xs font-semibold tracking-[0.12em] uppercase bg-black/5 text-[#00b894] border border-black/10 px-3 sm:px-4 py-1.5 rounded-full mb-3 sm:mb-4">
            КОМАНДА ПОДДЕРЖКИ
          </span>
          <h2 className="text-[clamp(24px,5vw,52px)] xl:text-[clamp(26px,3.5vw,44px)] font-bold leading-[1.1] tracking-tight text-[#2D3436] max-w-3xl mx-auto">
            20+ отделов работают на ваш результат
          </h2>
          <p className="text-[#2D3436]/60 max-w-2xl mx-auto mt-3 text-sm sm:text-base xl:text-sm">
            Каждый отдел отвечает за свою часть: от маркетинга и HR до методики и юристов.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 stagger-children">
          {departments.map((d, i) => {
            const Icon = d.icon;
            return (
              <div
                key={i}
                className="scroll-reveal glass-card glass-card-hover rounded-2xl p-4 sm:p-5"
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#00b894]/15 flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5 text-[#00b894]" />
                </div>
                <h3 className="text-base font-semibold text-[#2D3436] mb-1">{d.title}</h3>
                <p className="text-xs sm:text-sm text-[#2D3436]/60 leading-relaxed">{d.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

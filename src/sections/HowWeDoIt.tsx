import { Building2, Paintbrush, Megaphone, Users, PartyPopper } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';

const launchSteps = [
  {
    num: '01',
    title: 'Помещение',
    desc: 'Аудит по СанПиН, переговоры с арендодателем, честная смета.',
    icon: Building2,
    color: 'bg-sky-500',
    light: 'bg-sky-50',
    ring: 'ring-sky-100',
  },
  {
    num: '02',
    title: 'Ремонт и оснащение',
    desc: 'Планировка групп, зонирование, мебель и материалы под наши стандарты.',
    icon: Paintbrush,
    color: 'bg-pink-500',
    light: 'bg-pink-50',
    ring: 'ring-pink-100',
  },
  {
    num: '03',
    title: 'Маркетинг и продажи',
    desc: 'Реклама, соцсети и PR до открытия — к запуску уже будут заявки.',
    icon: Megaphone,
    color: 'bg-amber-500',
    light: 'bg-amber-50',
    ring: 'ring-amber-100',
  },
  {
    num: '04',
    title: 'Команда',
    desc: 'Подбор воспитателей и руководителя, их обучение и адаптация.',
    icon: Users,
    color: 'bg-emerald-500',
    light: 'bg-emerald-50',
    ring: 'ring-emerald-100',
  },
  {
    num: '05',
    title: 'Открытие',
    desc: 'Документы, лицензия, торжественный запуск и первые дети в саду.',
    icon: PartyPopper,
    color: 'bg-violet-500',
    light: 'bg-violet-50',
    ring: 'ring-violet-100',
  },
];

export function HowWeDoIt() {
  return (
    <section className="section-base section-light section-padding overflow-hidden">
      <div className="glow-orb w-[400px] h-[400px] bg-pink-400/10 right-0 top-1/2" />

      <div className="relative z-10 container-content">
        <SectionHeader
          badge="Этапы запуска"
          title="От идеи до открытия"
          description="5 чётких шагов до первых детей в саду"
        />

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* connecting line */}
            <div className="absolute top-[60px] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-sky-200 via-amber-200 to-violet-200" />

            <div className="grid grid-cols-5 gap-4">
              {launchSteps.map((step, i) => (
                <div
                  key={i}
                  className="blur-reveal relative flex flex-col items-center text-center"
                  style={{ transitionDelay: `${0.1 + i * 0.08}s` } as React.CSSProperties}
                >
                  {/* icon on line */}
                  <div
                    className={`relative z-10 w-[120px] h-[120px] rounded-full ${step.light} ring-[8px] ${step.ring} flex items-center justify-center mb-6`}
                  >
                    <div className={`w-14 h-14 rounded-full ${step.color} flex items-center justify-center shadow-md`}>
                      <step.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>

                  {/* number */}
                  <span className={`text-sm font-bold tracking-widest uppercase mb-2 ${step.color.replace('bg-', 'text-')}`}>
                    Шаг {step.num}
                  </span>

                  {/* title */}
                  <h3 className="text-lg font-bold text-[#2D3436] mb-2">{step.title}</h3>

                  {/* desc */}
                  <p className="text-sm text-[#636e72] leading-relaxed max-w-[220px]">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="lg:hidden">
          <div className="relative space-y-6">
            {/* vertical line */}
            <div className="absolute left-[27px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-sky-200 via-amber-200 to-violet-200" />

            {launchSteps.map((step, i) => (
              <div
                key={i}
                className="blur-reveal relative flex items-start gap-5"
                style={{ transitionDelay: `${0.1 + i * 0.08}s` } as React.CSSProperties}
              >
                <div
                  className={`relative z-10 flex-shrink-0 w-14 h-14 rounded-full ${step.light} ring-[6px] ${step.ring} flex items-center justify-center`}
                >
                  <div className={`w-9 h-9 rounded-full ${step.color} flex items-center justify-center shadow-sm`}>
                    <step.icon className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="pt-1">
                  <span className={`text-xs font-bold tracking-widest uppercase ${step.color.replace('bg-', 'text-')}`}>
                    Шаг {step.num}
                  </span>
                  <h3 className="text-lg font-bold text-[#2D3436] mt-0.5 mb-1">{step.title}</h3>
                  <p className="text-sm text-[#636e72] leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { Building2, Paintbrush, Megaphone, Users, PartyPopper } from 'lucide-react';

const launchSteps = [
  {
    num: '01',
    title: 'Помещение',
    desc: 'Аудит по СанПиН и пожарным нормам, помощь в переговорах с арендодателем и честная смета.',
    icon: Building2,
    color: 'text-sky-400',
    bg: 'bg-sky-400/15',
  },
  {
    num: '02',
    title: 'Ремонт и оснащение',
    desc: 'Планировка групп, зонирование, рекомендации по материалам и мебели под наши стандарты.',
    icon: Paintbrush,
    color: 'text-pink-400',
    bg: 'bg-pink-400/15',
  },
  {
    num: '03',
    title: 'Маркетинг и продажи',
    desc: 'Реклама, соцсети и PR ещё до открытия — к запуску у вас уже будут первые заявки.',
    icon: Megaphone,
    color: 'text-yellow-400',
    bg: 'bg-yellow-400/15',
  },
  {
    num: '04',
    title: 'Команда',
    desc: 'Подбор воспитателей, администраторов и руководителя, их обучение и адаптация.',
    icon: Users,
    color: 'text-green-400',
    bg: 'bg-green-400/15',
  },
  {
    num: '05',
    title: 'Открытие',
    desc: 'Оформление документов, лицензия, торжественный запуск и первые дети в саду.',
    icon: PartyPopper,
    color: 'text-purple-400',
    bg: 'bg-purple-400/15',
  },
];

export function HowWeDoIt() {
  return (
    <section className="section-dark py-12 md:py-16 xl:py-10 relative overflow-hidden">
      <div className="glow-orb w-[400px] h-[400px] bg-pink-400/10 right-0 top-1/2" />

      <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-5">
        <div className="blur-reveal text-center mb-6 md:mb-8 xl:mb-6" style={{ transitionDelay: '0.05s' }}>
          <span className="inline-block text-[11px] sm:text-xs font-semibold tracking-[0.12em] uppercase bg-black/5 text-sky-400 border border-black/10 px-3 sm:px-4 py-1.5 rounded-full mb-3 sm:mb-4">
            ЭТАПЫ ЗАПУСКА
          </span>
          <h2 className="text-[clamp(24px,5vw,52px)] xl:text-[clamp(26px,3.5vw,44px)] font-bold leading-[1.1] tracking-tight text-[#2D3436] max-w-3xl mx-auto">
            От идеи до открытия — 5 чётких шагов
          </h2>
          <p className="mt-3 md:mt-4 text-sm md:text-base xl:text-sm text-[#2D3436]/60 max-w-2xl mx-auto">
            Этапы запуска конкретного сада, а не общее описание сотрудничества
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 xl:gap-3">
          {launchSteps.map((step, i) => (
            <div
              key={i}
              className="blur-reveal glass-card rounded-2xl p-5 xl:p-4 flex flex-col transition-transform duration-300 hover:-translate-y-1"
              style={{ transitionDelay: `${0.1 + i * 0.06}s` }}
            >
              <div className="flex items-center gap-3 mb-4 xl:mb-3">
                <div className={`w-10 h-10 rounded-xl ${step.bg} flex items-center justify-center`}>
                  <step.icon className={`w-5 h-5 ${step.color}`} />
                </div>
                <span className={`text-xs font-bold ${step.color}`}>{step.num}</span>
              </div>
              <h3 className="text-lg font-semibold text-[#2D3436] mb-2">{step.title}</h3>
              <p className="text-sm xl:text-[13px] text-[#2D3436]/60 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

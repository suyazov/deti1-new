import { Building2, Paintbrush, Megaphone, Users, PartyPopper } from 'lucide-react';
import { UiCard as Card } from '@/components/ui/UiCard';
import { SectionHeader } from '@/components/ui/SectionHeader';

const launchSteps = [
  {
    num: '01',
    title: 'Помещение',
    desc: 'Аудит по СанПиН и пожарным нормам, помощь в переговорах с арендодателем и честная смета.',
    icon: Building2,
    color: 'text-sky-500',
    bg: 'bg-sky-100',
  },
  {
    num: '02',
    title: 'Ремонт и оснащение',
    desc: 'Планировка групп, зонирование, рекомендации по материалам и мебели под наши стандарты.',
    icon: Paintbrush,
    color: 'text-pink-500',
    bg: 'bg-pink-100',
  },
  {
    num: '03',
    title: 'Маркетинг и продажи',
    desc: 'Реклама, соцсети и PR ещё до открытия — к запуску у вас уже будут первые заявки.',
    icon: Megaphone,
    color: 'text-yellow-500',
    bg: 'bg-yellow-100',
  },
  {
    num: '04',
    title: 'Команда',
    desc: 'Подбор воспитателей, администраторов и руководителя, их обучение и адаптация.',
    icon: Users,
    color: 'text-green-500',
    bg: 'bg-green-100',
  },
  {
    num: '05',
    title: 'Открытие',
    desc: 'Оформление документов, лицензия, торжественный запуск и первые дети в саду.',
    icon: PartyPopper,
    color: 'text-purple-500',
    bg: 'bg-purple-100',
  },
];

export function HowWeDoIt() {
  return (
    <section className="section-base section-light section-padding">
      <div className="glow-orb w-[400px] h-[400px] bg-pink-400/10 right-0 top-1/2" />

      <div className="relative z-10 container-content">
        <SectionHeader
          badge="Этапы запуска"
          title="От идеи до открытия — 5 чётких шагов"
          description="Этапы запуска конкретного сада, а не общее описание сотрудничества"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
          {launchSteps.map((step, i) => (
            <Card
              key={i}
              variant="default"
              padding="md"
              className="blur-reveal flex flex-col"
              style={{ transitionDelay: `${0.1 + i * 0.06}s` } as React.CSSProperties}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-xl ${step.bg} flex items-center justify-center`}>
                  <step.icon className={`w-5 h-5 ${step.color}`} />
                </div>
                <span className={`text-xs font-bold ${step.color}`}>{step.num}</span>
              </div>
              <h3 className="text-lg font-semibold text-[#2D3436] mb-2">{step.title}</h3>
              <p className="text-sm text-[#636e72] leading-relaxed">{step.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

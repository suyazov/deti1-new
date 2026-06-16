import { Calendar, FileBadge, ExternalLink, ShieldCheck, Users, UserCheck } from 'lucide-react';
import { DoodleZigzag, DoodleDots, DoodleArrow, DoodleMusic, DoodleWave } from '@/components/Doodles';
import { UiCard as Card } from '@/components/ui/UiCard';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { AnimatedNumber } from '@/components/ui/AnimatedNumber';

const TM_LINK = 'https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&DocNumber=1019709';

const stats = [
  {
    icon: Calendar,
    title: <>С <AnimatedNumber value={2016} groupDigits={false} /> года</>,
    desc: 'Развиваем модель детского сада и передаём наработки партнёрам.',
    color: 'text-sky-500',
    bg: 'bg-sky-100',
  },
  {
    icon: ShieldCheck,
    title: 'Образовательная лицензия',
    desc: 'Рег. № Л035-01217-26/00681824 от 19.09.2023',
    color: 'text-green-500',
    bg: 'bg-green-100',
  },
  {
    icon: FileBadge,
    title: 'Торговая марка',
    desc: '№ 1019709, зарегистрирована в ФИПС',
    link: TM_LINK,
    color: 'text-yellow-500',
    bg: 'bg-yellow-100',
  },
  {
    icon: Users,
    title: <><AnimatedNumber value={4.5} suffix="+" /> года</>,
    desc: 'Средний срок обучения ребёнка в саду',
    color: 'text-pink-500',
    bg: 'bg-pink-100',
  },
  {
    icon: UserCheck,
    title: '85–90%',
    desc: 'Сотрудников остаются с нами ежегодно',
    color: 'text-purple-500',
    bg: 'bg-purple-100',
  },
];

export function Stats() {
  return (
    <section id="about" className="section-base section-light section-padding relative">
      <DoodleZigzag className="absolute top-8 left-[3%] text-sky-300/40 rotate-[-6deg] hidden lg:block w-36 h-14" />
      <DoodleDots className="absolute bottom-8 right-[4%] text-amber-300/40 hidden lg:block w-20 h-20" />
      <DoodleArrow className="absolute top-1/3 right-[2%] text-emerald-300/30 rotate-[-4deg] hidden xl:block w-32 h-20" />
      <DoodleMusic className="absolute bottom-1/3 left-[2%] text-rose-300/30 hidden xl:block w-20 h-24" />
      <DoodleWave className="absolute top-1/2 left-[4%] text-violet-300/30 rotate-[6deg] hidden xl:block w-28 h-14" />

      <div className="relative z-10 container-content">
        <SectionHeader
          badge="О нас"
          title="О франшизе"
          align="left"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
          {stats.map((s, i) => (
            <Card
              key={i}
              variant="default"
              padding="md"
              className="blur-reveal flex flex-col"
              style={{ transitionDelay: `${0.1 + i * 0.05}s` } as React.CSSProperties}
            >
              <div className="flex items-center gap-2.5 mb-3">
                <div className={`w-10 h-10 rounded-xl ${s.bg} flex items-center justify-center`}>
                  <s.icon className={`w-5 h-5 ${s.color}`} />
                </div>
                <h3 className="text-base font-semibold text-[#2D3436]">{s.title}</h3>
              </div>
              <p className="text-sm text-[#636e72] leading-relaxed flex-grow">{s.desc}</p>
              {s.link && (
                <a
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-xs text-[#00897b] hover:text-[#00796b] transition-colors"
                >
                  Проверить в ФИПС
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

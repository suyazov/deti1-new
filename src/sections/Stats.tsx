import { Calendar, FileBadge, ExternalLink, ShieldCheck, Users, UserCheck } from 'lucide-react';

const TM_LINK = 'https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&DocNumber=1019709';

const stats = [
  {
    icon: Calendar,
    title: 'С 2016 года',
    desc: 'Развиваем модель детского сада и передаём наработки партнёрам.',
    color: 'text-sky-400',
    bg: 'bg-sky-400/15',
  },
  {
    icon: ShieldCheck,
    title: 'Образовательная лицензия',
    desc: 'Рег. № Л035-01217-26/00681824 от 19.09.2023',
    color: 'text-green-400',
    bg: 'bg-green-400/15',
  },
  {
    icon: FileBadge,
    title: 'Торговая марка',
    desc: '№ 1019709, зарегистрирована в ФИПС',
    link: TM_LINK,
    color: 'text-yellow-400',
    bg: 'bg-yellow-400/15',
  },
  {
    icon: Users,
    title: '4,5+ года',
    desc: 'Средний срок обучения ребёнка в саду',
    color: 'text-pink-400',
    bg: 'bg-pink-400/15',
  },
  {
    icon: UserCheck,
    title: '85–90%',
    desc: 'Сотрудников остаются с нами ежегодно',
    color: 'text-purple-400',
    bg: 'bg-purple-400/15',
  },
];

export function Stats() {
  return (
    <section id="about" className="section-dark py-10 md:py-14 lg:py-16 xl:py-10 relative overflow-hidden">
      <div className="glow-orb w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-sky-400/10 -left-40 md:-left-60 top-1/2" />

      <div className="relative z-10 max-w-[1180px] mx-auto px-4 sm:px-5">
        <div className="blur-reveal mb-5 md:mb-6 xl:mb-4" style={{ transitionDelay: '0.05s' }}>
          <span className="inline-block text-[11px] sm:text-xs font-semibold tracking-[0.12em] uppercase bg-white/10 text-sky-400 border border-white/10 px-3 sm:px-4 py-1.5 rounded-full mb-3 sm:mb-4">
            О НАС
          </span>
          <h2 className="text-[clamp(26px,6vw,52px)] xl:text-[clamp(28px,3.5vw,46px)] font-bold leading-[1.1] tracking-tight text-white max-w-3xl">
            О франшизе
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 xl:gap-3">
          {stats.map((s, i) => (
            <div
              key={i}
              className="blur-reveal glass-card rounded-2xl p-5 xl:p-4 flex flex-col transition-transform duration-300 hover:-translate-y-1"
              style={{ transitionDelay: `${0.1 + i * 0.05}s` }}
            >
              <div className="flex items-center gap-2.5 mb-3">
                <div className={`w-10 h-10 rounded-xl ${s.bg} flex items-center justify-center`}>
                  <s.icon className={`w-5 h-5 ${s.color}`} />
                </div>
                <h3 className="text-base font-semibold text-white">{s.title}</h3>
              </div>
              <p className="text-sm xl:text-[13px] text-white/60 leading-relaxed flex-grow">{s.desc}</p>
              {s.link && (
                <a
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-xs text-sky-400 hover:text-sky-300 transition-colors"
                >
                  Проверить в ФИПС
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

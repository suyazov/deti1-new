import { Award, FileBadge, ExternalLink } from 'lucide-react';

const TM_LINK = 'https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&DocNumber=1019709';

const timeline = [
  { year: '2016', event: 'Старт как детский центр' },
  { year: '2020', event: 'Открытие как детский сад' },
  { year: '2021', event: 'Открытие второго филиала' },
  { year: '2024', event: 'Старт франшизы' },
  { year: '2025', event: 'Открытие ещё одного филиала' },
];

const awards = [
  { year: '2016', title: 'Лучший молодой предприниматель России' },
  { year: '2019', title: 'Лучшее семейное предприятие' },
  { year: '2021', title: 'Лучший социальный проект года' },
  { year: '—', title: '3× Золотой Меркурий' },
  { year: '2024', title: 'Мой добрый бизнес' },
  { year: '2025', title: 'Лучший предприниматель года' },
];

export function HistoryTimeline() {
  return (
    <section className="section-dark py-12 md:py-16 xl:py-10 relative overflow-hidden">
      <div className="glow-orb w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-[#e73c47]/10 -right-40 md:-right-60 top-1/2" />

      <div className="relative z-10 max-w-[1180px] mx-auto px-4 sm:px-5">
        <div className="blur-reveal text-center mb-6 md:mb-8 xl:mb-6" style={{ transitionDelay: '0.05s' }}>
          <span className="inline-block text-[11px] sm:text-xs font-semibold tracking-[0.12em] uppercase bg-white/10 text-[#00c9a7] border border-white/10 px-3 sm:px-4 py-1.5 rounded-full mb-3 sm:mb-4">
            ИСТОРИЯ И ПРИЗНАНИЕ
          </span>
          <h2 className="text-[clamp(24px,5vw,52px)] xl:text-[clamp(26px,3.5vw,44px)] font-bold leading-[1.1] tracking-tight text-white max-w-3xl mx-auto">
            Десятилетие опыта и федеральные награды
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 xl:gap-6">
          {/* Timeline */}
          <div className="blur-reveal glass-card rounded-2xl p-5 md:p-6 xl:p-5" style={{ transitionDelay: '0.1s' }}>
            <h3 className="text-lg font-semibold text-white mb-4 xl:mb-3">Путь развития</h3>
            <div className="relative pl-5">
              <div className="absolute left-[7px] top-2 bottom-2 w-px bg-white/10" />
              <div className="space-y-4">
                {timeline.map((t, i) => (
                  <div key={i} className="relative flex items-center gap-4">
                    <div className="absolute left-[-13px] w-3.5 h-3.5 rounded-full bg-[#00c9a7] border-2 border-[#0a1f1f]" />
                    <span className="text-sm font-bold text-[#00c9a7] w-12 flex-shrink-0">{t.year}</span>
                    <span className="text-sm text-white/70">{t.event}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Awards */}
          <div className="blur-reveal glass-card rounded-2xl p-5 md:p-6 xl:p-5" style={{ transitionDelay: '0.2s' }}>
            <h3 className="text-lg font-semibold text-white mb-4 xl:mb-3">Награды и статусы</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {awards.map((a, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 glass-card rounded-xl p-3 xl:p-2.5"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#00c9a7]/15 flex items-center justify-center flex-shrink-0">
                    <Award className="w-4 h-4 text-[#00c9a7]" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white leading-tight">{a.title}</p>
                    {a.year !== '—' && (
                      <p className="text-xs text-white/50 mt-0.5">{a.year}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <a
              href={TM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 glass-card rounded-full px-3 py-1.5 text-xs text-white/80 hover:bg-[#00c9a7]/10 hover:border-[#00c9a7]/30 transition-colors"
            >
              <FileBadge className="w-3 h-3 text-[#00c9a7]" />
              Торговая марка № 1019709
              <ExternalLink className="w-3 h-3 text-[#00c9a7]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Award, FileBadge, ExternalLink } from 'lucide-react';
import { UiCard as Card } from '@/components/ui/UiCard';
import { UiButton as Button } from '@/components/ui/UiButton';
import { SectionHeader } from '@/components/ui/SectionHeader';

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
  { year: '—', title: 'Трёхкратный победитель «Золотого Меркурия»' },
  { year: '2024', title: 'Мой добрый бизнес' },
  { year: '2025', title: 'Лучший предприниматель года' },
];

export function HistoryTimeline() {
  return (
    <section className="section-base section-light section-padding">
      <div className="glow-orb w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-[#dc2626]/10 -right-40 md:-right-60 top-1/2" />

      <div className="relative z-10 container-content max-w-[1180px]">
        <SectionHeader
          badge="История и признание"
          title="Десятилетие опыта и федеральные награды"
        />

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
          <Card padding="md" className="blur-reveal" style={{ transitionDelay: '0.1s' } as React.CSSProperties}>
            <h3 className="text-lg font-semibold text-[#2D3436] mb-4">Путь развития</h3>
            <div className="relative pl-5">
              <div className="absolute left-[7px] top-2 bottom-2 w-px bg-black/5" />
              <div className="space-y-4">
                {timeline.map((t, i) => (
                  <div key={i} className="relative flex items-center gap-4">
                    <div className="absolute left-[-13px] w-3.5 h-3.5 rounded-full bg-[#00897b] border-2 border-[#FDFBF7]" />
                    <span className="text-sm font-bold text-[#00897b] w-12 flex-shrink-0">{t.year}</span>
                    <span className="text-sm text-[#636e72]">{t.event}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          <Card padding="md" className="blur-reveal" style={{ transitionDelay: '0.2s' } as React.CSSProperties}>
            <h3 className="text-lg font-semibold text-[#2D3436] mb-4">Награды и статусы</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {awards.map((a, i) => (
                <Card key={i} variant="outlined" padding="sm" className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#00897b]/15 flex items-center justify-center flex-shrink-0">
                    <Award className="w-4 h-4 text-[#00897b]" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#2D3436] leading-tight">{a.title}</p>
                    {a.year !== '—' && (
                      <p className="text-xs text-[#636e72] mt-0.5">{a.year}</p>
                    )}
                  </div>
                </Card>
              ))}
            </div>
            <Button asChild variant="ghost" size="sm" className="mt-4">
              <a href={TM_LINK} target="_blank" rel="noopener noreferrer">
                <FileBadge className="w-4 h-4" />
                Торговая марка № 1019709
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
}

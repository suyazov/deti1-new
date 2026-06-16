import { Cloud, Briefcase, TrendingUp, UserCog, Building2, HeartHandshake } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';

const audiences = [
  {
    icon: Cloud,
    title: 'Мечтатели',
    desc: 'Хотите открыть детский сад, но боитесь бюрократии и ответственности',
    bg: 'bg-violet-600',
    iconBg: 'bg-white/20',
    iconColor: 'text-white',
    titleColor: 'text-white',
    descColor: 'text-white',
    decoration: 'bg-white/10',
  },
  {
    icon: Briefcase,
    title: 'Профессионалы',
    desc: 'Уже работаете с детьми и хотите выстроить стабильную систему',
    bg: 'bg-amber-300',
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-700',
    titleColor: 'text-[#2D3436]',
    descColor: 'text-[#2D3436]/80',
    decoration: 'bg-amber-400/30',
  },
  {
    icon: TrendingUp,
    title: 'Инвесторы',
    desc: 'Ищете устойчивый бизнес с социальной значимостью',
    bg: 'bg-sky-700',
    iconBg: 'bg-white/20',
    iconColor: 'text-white',
    titleColor: 'text-white',
    descColor: 'text-white',
    decoration: 'bg-white/10',
  },
  {
    icon: UserCog,
    title: 'Топ-менеджеры',
    desc: 'Устали от наёмной работы — хотите дело с доходом и смыслом',
    bg: 'bg-emerald-700',
    iconBg: 'bg-white/20',
    iconColor: 'text-white',
    titleColor: 'text-white',
    descColor: 'text-white',
    decoration: 'bg-white/10',
  },
  {
    icon: Building2,
    title: 'Собственники центров',
    desc: 'Есть детский центр и планы масштабироваться в полноценный сад',
    bg: 'bg-orange-700',
    iconBg: 'bg-white/20',
    iconColor: 'text-white',
    titleColor: 'text-white',
    descColor: 'text-white',
    decoration: 'bg-white/10',
  },
  {
    icon: HeartHandshake,
    title: 'Родители-предприниматели',
    desc: 'Хотите бизнес, который приносит радость и пользу детям',
    bg: 'bg-pink-600',
    iconBg: 'bg-white/20',
    iconColor: 'text-white',
    titleColor: 'text-white',
    descColor: 'text-white',
    decoration: 'bg-white/10',
  },
];

export function TargetAudience() {
  return (
    <section className="section-base section-light section-padding overflow-hidden">
      <div className="glow-orb w-[500px] h-[500px] bg-violet-400/10 -left-60 top-0" />
      <div className="glow-orb w-[400px] h-[400px] bg-amber-400/10 -right-40 bottom-0" />

      <div className="relative z-10 container-content">
        <SectionHeader
          badge="Кому подходит"
          title="Наша франшиза для тех, кто верит в детей"
          description="Выберите свой путь — мы подстроим сопровождение под ваш запрос"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 stagger-children">
          {audiences.map((a, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-3xl p-6 ${a.bg} shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
              style={{ transitionDelay: `${0.05 + i * 0.05}s` } as React.CSSProperties}
            >
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className={`text-xl lg:text-2xl font-bold leading-tight ${a.titleColor}`}>{a.title}</h3>
                  <div className={`flex-shrink-0 w-12 h-12 rounded-2xl ${a.iconBg} flex items-center justify-center`}>
                    <a.icon className={`w-6 h-6 ${a.iconColor}`} />
                  </div>
                </div>
                <p className={`text-sm lg:text-base leading-relaxed mt-auto ${a.descColor}`}>{a.desc}</p>
              </div>

              {/* decorative circle */}
              <div className={`absolute -right-8 -bottom-8 w-32 h-32 rounded-full ${a.decoration} group-hover:scale-110 transition-transform duration-500`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

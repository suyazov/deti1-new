import { Award, Building2, CheckCircle2, Clock, TrendingUp, Users } from 'lucide-react';

function AreaChart() {
  return (
    <svg viewBox="0 0 200 80" className="w-full h-20 mt-4" preserveAspectRatio="none">
      <defs>
        <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#00c9a7" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#00c9a7" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0,60 C30,55 50,45 70,50 C90,55 110,30 130,25 C150,20 170,35 200,15 L200,80 L0,80 Z"
        fill="url(#areaGradient)"
      />
      <path
        d="M0,60 C30,55 50,45 70,50 C90,55 110,30 130,25 C150,20 170,35 200,15"
        fill="none"
        stroke="#00c9a7"
        strokeWidth="2"
        className="animate-chart-draw"
        style={{ strokeDasharray: 1000 }}
      />
    </svg>
  );
}

function OccupancyVisual() {
  return (
    <div className="mt-4 grid grid-cols-12 gap-1">
      {Array.from({ length: 24 }).map((_, i) => (
        <div
          key={i}
          className={`aspect-square rounded-sm ${i < 18 ? 'bg-[#00c9a7]' : 'bg-white/10'}`}
          style={{ animationDelay: `${i * 30}ms` }}
        />
      ))}
    </div>
  );
}

const awards = [
  'Лучший молодой предприниматель России',
  'Лучшее семейное предприятие',
  'Лучший социальный проект года',
  '3× Золотой Меркурий',
];

export function Stats() {
  return (
    <section id="about" className="section-dark py-12 md:py-16 relative overflow-hidden">
      <div className="glow-orb w-[500px] h-[500px] bg-[#00c9a7]/10 -left-60 top-1/2" />

      <div className="relative z-10 max-w-[1240px] mx-auto px-5">
        <div className="blur-reveal mb-8 md:mb-10" style={{ transitionDelay: '0.05s' }}>
          <h2 className="text-[clamp(28px,3.8vw,52px)] font-bold leading-[1.1] tracking-tight text-white max-w-3xl">
            Цифры, которые говорят сами за себя
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr] gap-4 md:gap-5 auto-rows-fr">
          {/* Large left card */}
          <div
            className="bento-card blur-reveal md:row-span-2 flex flex-col justify-between min-h-[260px] p-5"
            style={{ transitionDelay: '0.1s' }}
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#00c9a7]/15 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-[#00c9a7]" />
                </div>
                <span className="text-sm text-white/50">Опыт</span>
              </div>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-6xl md:text-7xl font-bold text-white tracking-tight">10</span>
                <span className="text-2xl font-semibold text-[#00c9a7]">лет</span>
              </div>
              <p className="text-white/70 leading-relaxed max-w-sm">
                Отточенный механизм детского сада. Не набор советов — рабочая модель с понятной экономикой и живой поддержкой.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {awards.map((a, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 glass-card rounded-full px-3 py-1.5 text-xs text-white/80"
                >
                  <Award className="w-3 h-3 text-[#00c9a7]" />
                  {a}
                </span>
              ))}
            </div>
          </div>

          {/* Top middle card */}
          <div className="bento-card blur-reveal p-5" style={{ transitionDelay: '0.15s' }}>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-[#00c9a7]/15 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-[#00c9a7]" />
              </div>
              <span className="text-sm text-white/50">Прибыль</span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl md:text-5xl font-bold text-white tracking-tight">420K</span>
              <span className="text-xl font-semibold text-[#00c9a7]">₽</span>
            </div>
            <p className="text-sm text-white/60 mt-1">в месяц собственного сада</p>
            <AreaChart />
          </div>

          {/* Top right card */}
          <div className="bento-card blur-reveal p-5" style={{ transitionDelay: '0.2s' }}>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-[#00c9a7]/15 flex items-center justify-center">
                <Award className="w-5 h-5 text-[#00c9a7]" />
              </div>
              <span className="text-sm text-white/50">Признание</span>
            </div>
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-4xl md:text-5xl font-bold text-white tracking-tight">3×</span>
              <span className="text-lg font-semibold text-[#00c9a7]">Золотой Меркурий</span>
            </div>
            <div className="grid grid-cols-3 gap-2 mt-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="aspect-square rounded-xl bg-[#00c9a7]/10 flex items-center justify-center border border-[#00c9a7]/20">
                  <Award className="w-5 h-5 text-[#00c9a7]" />
                </div>
              ))}
            </div>
          </div>

          {/* Bottom middle card */}
          <div className="bento-card blur-reveal p-5" style={{ transitionDelay: '0.25s' }}>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-[#00c9a7]/15 flex items-center justify-center">
                <Building2 className="w-5 h-5 text-[#00c9a7]" />
              </div>
              <span className="text-sm text-white/50">Запуск</span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl md:text-5xl font-bold text-white tracking-tight">2–3</span>
              <span className="text-xl font-semibold text-[#00c9a7]">мес</span>
            </div>
            <p className="text-sm text-white/60 mt-1">до первых детей в саду</p>
            <div className="mt-4 h-2 w-full bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#00c9a7] to-[#00c9a7]/60 rounded-full animate-progress-fill" style={{ width: '75%' }} />
            </div>
          </div>

          {/* Bottom right card */}
          <div className="bento-card blur-reveal p-5" style={{ transitionDelay: '0.3s' }}>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-[#00c9a7]/15 flex items-center justify-center">
                <Users className="w-5 h-5 text-[#00c9a7]" />
              </div>
              <span className="text-sm text-white/50">Загрузка</span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl md:text-5xl font-bold text-white tracking-tight">72</span>
              <span className="text-xl font-semibold text-[#00c9a7]">ребёнка</span>
            </div>
            <p className="text-sm text-white/60 mt-1">при полной загрузке</p>
            <OccupancyVisual />
          </div>
        </div>

        {/* Compact trust tags */}
        <div className="mt-6 flex flex-wrap gap-3 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
          {['Лицензия и документы', 'Клиенты до открытия', 'СанПиН аудит', 'CRM и аналитика'].map((tag, i) => (
            <span key={i} className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-2 text-sm text-white/80">
              <CheckCircle2 className="w-4 h-4 text-[#00c9a7]" />
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

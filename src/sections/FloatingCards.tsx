import {
  Palette,
  FolderOpen,
  Calculator,
  Users,
  GraduationCap,
  ClipboardList,
  PenTool,
  HeartHandshake,
  UserCircle,
} from 'lucide-react';

const features = [
  {
    icon: Palette,
    title: 'Готовый бренд и стиль',
    desc: 'Фирменное оформление, логотип и шаблоны — чтобы сразу выглядеть профессионально.',
    color: 'text-sky-600',
    bg: 'bg-sky-100',
  },
  {
    icon: FolderOpen,
    title: 'Документы и юрподдержка',
    desc: 'Полный комплект по кадрам, питанию, охране труда + помощь с лицензией и договорами.',
    color: 'text-pink-600',
    bg: 'bg-pink-100',
  },
  {
    icon: Calculator,
    title: 'Финансовая модель',
    desc: 'Сколько вложить, когда вернётся, точка безубыточности и варианты роста под ваше помещение.',
    color: 'text-yellow-600',
    bg: 'bg-yellow-100',
  },
  {
    icon: Users,
    title: 'Клиенты с первого месяца',
    desc: 'Настраиваем систему привлечения родителей и лидогенерацию, чтобы к вам приходили ваши клиенты.',
    color: 'text-green-600',
    bg: 'bg-green-100',
  },
  {
    icon: GraduationCap,
    title: 'Обучение и методист',
    desc: 'Администраторы учатся продавать, воспитатели — работать с детьми, вы — руководить. Готовые планы занятий от штатного методиста.',
    color: 'text-purple-600',
    bg: 'bg-purple-100',
  },
  {
    icon: ClipboardList,
    title: 'Смета и поставщики',
    desc: 'Готовая смета на запуск: от мебели и игрушек до туалетных принадлежностей. Проверенные поставщики и цены.',
    color: 'text-orange-600',
    bg: 'bg-orange-100',
  },
  {
    icon: PenTool,
    title: 'Дизайнер в команде',
    desc: 'Поможем оформить посты, листовки и презентации в едином фирменном стиле.',
    color: 'text-indigo-600',
    bg: 'bg-indigo-100',
  },
  {
    icon: HeartHandshake,
    title: 'Поддержка команды',
    desc: 'Регулярно контролируем работу филиалов, сохраняем единые стандарты и качество сервиса.',
    color: 'text-teal-600',
    bg: 'bg-teal-100',
  },
  {
    icon: UserCircle,
    title: 'Личное сопровождение Анны',
    desc: 'Анна лично включается в запуск: помогает выстроить команду, процессы и устойчивую систему.',
    color: 'text-rose-600',
    bg: 'bg-rose-100',
  },
];

export function FloatingCards() {
  return (
    <section className="section-light py-10 md:py-14 xl:py-10 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-sky-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-pink-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-5">
        <div className="blur-reveal text-center mb-5 md:mb-6 xl:mb-5" style={{ transitionDelay: '0.05s' }}>
          <span className="inline-block text-[10px] font-semibold tracking-[0.12em] uppercase bg-sky-100 text-sky-600 px-3 py-1 rounded-full mb-3">
            ВАМ ПОДОЙДЁТ, ЕСЛИ
          </span>
          <h2 className="text-[clamp(24px,4vw,42px)] xl:text-[clamp(26px,3vw,38px)] font-bold leading-[1.1] tracking-tight text-[#1a1a1a] max-w-3xl mx-auto">
            Всё, что нужно для уверенного старта
          </h2>
          <p className="mt-3 text-sm md:text-base text-[#636e72] max-w-2xl mx-auto">
            Берём на себя самое сложное: от бренда и документов до клиентов, обучения и личного сопровождения
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 lg:gap-6 xl:gap-8 items-stretch">
          {/* Photo card */}
          <div className="bg-white rounded-2xl md:rounded-3xl p-2 sm:p-3 shadow-sm border border-black/5">
            <img
              src="/photos/class-reading.jpeg"
              alt="Дети на занятии в детском саду"
              loading="lazy"
              width="700"
              height="875"
              className="w-full h-auto rounded-xl md:rounded-2xl object-cover aspect-[4/3]"
            />
            <div className="mt-2 sm:mt-3 px-1 sm:px-2 pb-0.5 sm:pb-1">
              <p className="text-xs sm:text-sm font-semibold text-[#1a1a1a]">Реальные дети, реальные занятия</p>
              <p className="text-[10px] sm:text-xs text-[#636e72]">Работаем с 2016 года</p>
            </div>
          </div>

          {/* Features list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 stagger-children">
            {features.map((f, i) => (
              <div
                key={i}
                className="scroll-reveal bg-white rounded-2xl p-3 sm:p-4 border border-black/5 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-lg ${f.bg} flex items-center justify-center mb-2`}>
                  <f.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${f.color}`} />
                </div>
                <h3 className="text-xs sm:text-sm font-semibold text-[#1a1a1a] mb-0.5">{f.title}</h3>
                <p className="text-[10px] sm:text-[11px] text-[#636e72] leading-snug">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

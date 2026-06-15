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
  Sparkles,
} from 'lucide-react';
import { UiCard as Card } from '@/components/ui/UiCard';
import { SectionHeader } from '@/components/ui/SectionHeader';

const features = [
  {
    icon: Palette,
    title: 'Готовый бренд и фирменный стиль',
    desc: 'Логотип, цвета, шрифты, шаблоны документов, макеты для соцсетей, вывесок и полиграфии — сразу выглядите узнаваемо и профессионально.',
    color: 'text-sky-600' as const,
    bg: 'bg-sky-100' as const,
    border: 'border-sky-200/60' as const,
  },
  {
    icon: FolderOpen,
    title: 'Документы и юридическая поддержка',
    desc: 'Полный комплект: кадровые, питание, охрана труда, образовательные программы, договоры с родителями. Помогаем с лицензией и проверками.',
    color: 'text-pink-600' as const,
    bg: 'bg-pink-100' as const,
    border: 'border-pink-200/60' as const,
  },
  {
    icon: Calculator,
    title: 'Финансовая модель и смета',
    desc: 'Сколько вложить, когда вернётся инвестиция, точка безубыточности и варианты роста под ваше помещение и город. Управленческая отчётность в подарок.',
    color: 'text-yellow-600' as const,
    bg: 'bg-yellow-100' as const,
    border: 'border-yellow-200/60' as const,
  },
  {
    icon: Users,
    title: 'Клиенты с первого месяца',
    desc: 'Настраиваем CRM, воронку продаж, скрипты для менеджеров, рекламные креативы и таргет — чтобы заявки от родителей шли ещё до открытия.',
    color: 'text-green-600' as const,
    bg: 'bg-green-100' as const,
    border: 'border-green-200/60' as const,
  },
  {
    icon: GraduationCap,
    title: 'Обучение и методист в команде',
    desc: 'Администраторы учатся продавать, воспитатели — работать по программе, повара — готовить по нормам. Готовые планы занятий от штатного методиста.',
    color: 'text-purple-600' as const,
    bg: 'bg-purple-100' as const,
    border: 'border-purple-200/60' as const,
  },
  {
    icon: ClipboardList,
    title: 'Смета запуска и поставщики',
    desc: 'Детальная смета от мебели и игрушек до туалетных принадлежностей. Проверенные поставщики, оптовые цены и контакты, которым можно доверять.',
    color: 'text-orange-600' as const,
    bg: 'bg-orange-100' as const,
    border: 'border-orange-200/60' as const,
  },
  {
    icon: PenTool,
    title: 'Дизайнер в команде',
    desc: 'Поможет оформить посты, листовки, презентации, открытки и интерьерные материалы в едином стиле — чтобы всё радовало глаз.',
    color: 'text-indigo-600' as const,
    bg: 'bg-indigo-100' as const,
    border: 'border-indigo-200/60' as const,
  },
  {
    icon: HeartHandshake,
    title: 'Поддержка и развитие филиала',
    desc: 'Регулярные аудиты, единые стандарты сервиса, корпоративный чат, оперативная помощь по любым вопросам — вы никогда не останетесь один на один.',
    color: 'text-teal-600' as const,
    bg: 'bg-teal-100' as const,
    border: 'border-teal-200/60' as const,
  },
  {
    icon: UserCircle,
    title: 'Личное сопровождение Анны',
    desc: 'Основатель сети лично включается в запуск: помогает выстроить команду, процессы и устойчивую систему, которая работает без вашего ежедневного контроля.',
    color: 'text-rose-600' as const,
    bg: 'bg-rose-100' as const,
    border: 'border-rose-200/60' as const,
  },
];

export function FloatingCards() {
  return (
    <section className="section-base section-light section-padding overflow-hidden">
      <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-sky-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-pink-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-3 h-3 rounded-full bg-yellow-300 animate-float pointer-events-none" style={{ animationDelay: '0s' }} />
      <div className="absolute top-1/4 right-1/4 w-2.5 h-2.5 rounded-full bg-sky-300 animate-float pointer-events-none" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/4 right-10 w-2 h-2 rounded-full bg-pink-300 animate-float pointer-events-none" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 container-content">
        <SectionHeader
          badge="Что вы получите"
          title="Всё, что нужно для уверенного старта"
          description="Берём на себя самое сложное: от бренда и документов до клиентов, обучения и личного сопровождения"
        />

        <div className="grid lg:grid-cols-2 gap-4 lg:gap-6 items-stretch">
          <Card padding="sm" className="relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-sky-300 via-pink-300 to-yellow-300" />
            <img
              src="/photos/kids-floor-star.jpeg"
              alt="Дети на занятии в детском саду «Дети в приоритете»"
              loading="lazy"
              width="700"
              height="875"
              className="w-full h-auto rounded-2xl object-cover aspect-[4/3] transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <div className="mt-3 px-2 pb-1 flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-[#2D3436]">Реальные дети, реальные занятия</p>
                <p className="text-xs text-[#636e72]">Работаем с 2016 года</p>
              </div>
              <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wide text-pink-600 bg-pink-100 border border-pink-200/60 px-2 py-1 rounded-full">
                <Sparkles className="w-3 h-3" /> Живые эмоции
              </span>
            </div>
          </Card>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 stagger-children">
            {features.map((f, i) => (
              <Card key={i} variant="hover" padding="md" className="relative overflow-hidden">
                <div className={`absolute top-0 left-0 right-0 h-1 ${f.bg.replace('bg-', 'bg-gradient-to-r from-')} to-white/0`} />
                <div className={`w-10 h-10 rounded-xl ${f.bg} border ${f.border} flex items-center justify-center mb-3`}>
                  <f.icon className={`w-5 h-5 ${f.color}`} />
                </div>
                <h3 className="text-sm font-semibold text-[#2D3436] mb-1.5 leading-tight">{f.title}</h3>
                <p className="text-[11px] text-[#636e72] leading-relaxed">{f.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

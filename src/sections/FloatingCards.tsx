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
import { UiCard as Card } from '@/components/ui/UiCard';
import { SectionHeader } from '@/components/ui/SectionHeader';

const features = [
  {
    icon: Palette,
    title: 'Готовый бренд и стиль',
    desc: 'Фирменное оформление, логотип и шаблоны — чтобы сразу выглядеть профессионально.',
    color: 'text-sky-600' as const,
    bg: 'bg-sky-100' as const,
  },
  {
    icon: FolderOpen,
    title: 'Документы и юрподдержка',
    desc: 'Полный комплект по кадрам, питанию, охране труда + помощь с лицензией и договорами.',
    color: 'text-pink-600' as const,
    bg: 'bg-pink-100' as const,
  },
  {
    icon: Calculator,
    title: 'Финансовая модель',
    desc: 'Сколько вложить, когда вернётся, точка безубыточности и варианты роста под ваше помещение.',
    color: 'text-yellow-600' as const,
    bg: 'bg-yellow-100' as const,
  },
  {
    icon: Users,
    title: 'Клиенты с первого месяца',
    desc: 'Настраиваем систему привлечения родителей и лидогенерацию, чтобы к вам приходили ваши клиенты.',
    color: 'text-green-600' as const,
    bg: 'bg-green-100' as const,
  },
  {
    icon: GraduationCap,
    title: 'Обучение и методист',
    desc: 'Администраторы учатся продавать, воспитатели — работать с детьми, вы — руководить. Готовые планы занятий от штатного методиста.',
    color: 'text-purple-600' as const,
    bg: 'bg-purple-100' as const,
  },
  {
    icon: ClipboardList,
    title: 'Смета и поставщики',
    desc: 'Готовая смета на запуск: от мебели и игрушек до туалетных принадлежностей. Проверенные поставщики и цены.',
    color: 'text-orange-600' as const,
    bg: 'bg-orange-100' as const,
  },
  {
    icon: PenTool,
    title: 'Дизайнер в команде',
    desc: 'Поможем оформить посты, листовки и презентации в едином фирменном стиле.',
    color: 'text-indigo-600' as const,
    bg: 'bg-indigo-100' as const,
  },
  {
    icon: HeartHandshake,
    title: 'Поддержка команды',
    desc: 'Регулярно контролируем работу филиалов, сохраняем единые стандарты и качество сервиса.',
    color: 'text-teal-600' as const,
    bg: 'bg-teal-100' as const,
  },
  {
    icon: UserCircle,
    title: 'Личное сопровождение Анны',
    desc: 'Анна лично включается в запуск: помогает выстроить команду, процессы и устойчивую систему.',
    color: 'text-rose-600' as const,
    bg: 'bg-rose-100' as const,
  },
];

export function FloatingCards() {
  return (
    <section className="section-base section-light section-padding">
      <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-sky-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-pink-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 container-content">
        <SectionHeader
          badge="Вам подойдёт, если"
          title="Всё, что нужно для уверенного старта"
          description="Берём на себя самое сложное: от бренда и документов до клиентов, обучения и личного сопровождения"
        />

        <div className="grid lg:grid-cols-2 gap-4 lg:gap-6 items-stretch">
          <Card padding="sm">
            <img
              src="/photos/class-reading.jpeg"
              alt="Дети на занятии в детском саду"
              loading="lazy"
              width="700"
              height="875"
              className="w-full h-auto rounded-2xl object-cover aspect-[4/3]"
            />
            <div className="mt-3 px-2 pb-1">
              <p className="text-sm font-semibold text-[#2D3436]">Реальные дети, реальные занятия</p>
              <p className="text-xs text-[#636e72]">Работаем с 2016 года</p>
            </div>
          </Card>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 stagger-children">
            {features.map((f, i) => (
              <Card key={i} variant="hover" padding="md">
                <div className={`w-9 h-9 rounded-lg ${f.bg} flex items-center justify-center mb-2`}>
                  <f.icon className={`w-5 h-5 ${f.color}`} />
                </div>
                <h3 className="text-sm font-semibold text-[#2D3436] mb-0.5">{f.title}</h3>
                <p className="text-[11px] text-[#636e72] leading-snug">{f.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

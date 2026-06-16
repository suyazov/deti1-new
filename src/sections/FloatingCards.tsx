import {
  Palette,
  FolderOpen,
  Calculator,
  Users,
  GraduationCap,
  ClipboardList,
  PenTool,
  HeartHandshake,
  BookOpen,
} from 'lucide-react';
import { UiCard as Card } from '@/components/ui/UiCard';
import { SectionHeader } from '@/components/ui/SectionHeader';

const features = [
  {
    icon: Palette,
    title: 'Готовый бренд и стиль',
    desc: 'Фирменное оформление, логотип, шаблоны — чтобы сразу выглядеть профессионально.',
    color: 'text-sky-600' as const,
    bg: 'bg-sky-100' as const,
    border: 'border-sky-200/60' as const,
  },
  {
    icon: FolderOpen,
    title: 'Весь комплект документов',
    desc: 'По кадрам, питанию, охране труда — всё, что нужно для запуска и работы без проверок и штрафов.',
    color: 'text-pink-600' as const,
    bg: 'bg-pink-100' as const,
    border: 'border-pink-200/60' as const,
  },
  {
    icon: Calculator,
    title: 'Финансовая модель',
    desc: 'Понятные расчёты: сколько вложить, когда вернётся, сколько будете зарабатывать, точка безубыточности, возможности роста.',
    color: 'text-yellow-600' as const,
    bg: 'bg-yellow-100' as const,
    border: 'border-yellow-200/60' as const,
  },
  {
    icon: Users,
    title: 'Клиенты с первого месяца',
    desc: 'Мы не просто запускаем рекламу — настраиваем систему, чтобы к вам приходили именно ваши родители.',
    color: 'text-green-600' as const,
    bg: 'bg-green-100' as const,
    border: 'border-green-200/60' as const,
  },
  {
    icon: GraduationCap,
    title: 'Обучение всей команды',
    desc: 'Администраторы — как продавать и общаться. Воспитатели — как работать с детьми и родителями. И вы — как стать настоящим руководителем.',
    color: 'text-purple-600' as const,
    bg: 'bg-purple-100' as const,
    border: 'border-purple-200/60' as const,
  },
  {
    icon: ClipboardList,
    title: 'Смета на запуск и поставщики',
    desc: 'Готовая смета по открытию сада: что и сколько нужно купить, где взять и по какой цене. Всё «под ключ» от мебели и игрушек до туалетных принадлежностей. Проверенные поставщики, с которыми работаем сами.',
    color: 'text-orange-600' as const,
    bg: 'bg-orange-100' as const,
    border: 'border-orange-200/60' as const,
  },
  {
    icon: BookOpen,
    title: 'Методист в команде',
    desc: 'Готовые планы занятий, конспекты и материалы, разработанные нашим штатным методистом с опытом. Просто берите и используйте.',
    color: 'text-emerald-600' as const,
    bg: 'bg-emerald-100' as const,
    border: 'border-emerald-200/60' as const,
  },
  {
    icon: PenTool,
    title: 'Юрист и дизайнер в команде',
    desc: 'Помощь с договорами, проверками и лицензией. Макеты для соцсетей, полиграфии и интерьера в едином фирменном стиле.',
    color: 'text-indigo-600' as const,
    bg: 'bg-indigo-100' as const,
    border: 'border-indigo-200/60' as const,
  },
  {
    icon: HeartHandshake,
    title: 'Поддержка и личное сопровождение',
    desc: 'Регулярные аудиты, корпоративный чат, оперативная помощь по любым вопросам — вы не останетесь один на один. И личное сопровождение Анны на всех этапах.',
    color: 'text-teal-600' as const,
    bg: 'bg-teal-100' as const,
    border: 'border-teal-200/60' as const,
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
          title="Франшиза: что вы получите"
          description="Готовая система запуска частного детского сада — берём на себя самое сложное"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 stagger-children">
          {features.map((f, i) => (
            <Card key={i} variant="hover" padding="lg" className="relative overflow-hidden">
              <div className={`absolute top-0 left-0 right-0 h-1 ${f.bg.replace('bg-', 'bg-gradient-to-r from-')} to-white/0`} />
              <div className={`w-12 h-12 rounded-xl ${f.bg} border ${f.border} flex items-center justify-center mb-4`}>
                <f.icon className={`w-6 h-6 ${f.color}`} />
              </div>
              <h3 className="text-base lg:text-lg font-semibold text-[#2D3436] mb-2 leading-tight">{f.title}</h3>
              <p className="text-sm text-[#636e72] leading-relaxed">{f.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

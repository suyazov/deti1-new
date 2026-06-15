import {
  Megaphone, Users, BookOpen, TrendingUp, ShieldCheck, BadgeCheck, Monitor, BarChart3,
} from 'lucide-react';
import { UiCard as Card } from '@/components/ui/UiCard';
import { UiIconBox as IconBox } from '@/components/ui/UiIconBox';
import { SectionHeader } from '@/components/ui/SectionHeader';

const departments = [
  { icon: Megaphone, title: 'Маркетинг', desc: 'Реклама, лидогенерация, лендинги' },
  { icon: Users, title: 'HR и обучение', desc: 'Поиск, проверка и обучение персонала' },
  { icon: BookOpen, title: 'Методисты и академия', desc: 'Программы, конспекты, тренинги педагогов' },
  { icon: TrendingUp, title: 'Финансовый отдел', desc: 'Финмодели и оптимизация расходов' },
  { icon: ShieldCheck, title: 'Юридический отдел', desc: 'Проверка аренды, договоров, лицензий' },
  { icon: BadgeCheck, title: 'Качество и кураторы', desc: 'Личный куратор и 42 пункта чек-листа' },
  { icon: Monitor, title: 'IT и технологии', desc: 'CRM, дашборды, база знаний' },
  { icon: BarChart3, title: 'Аналитика и процессы', desc: 'Сравнение показателей по сети' },
];

export function TeamDepartments() {
  return (
    <section className="section-base section-light section-padding">
      <div className="glow-orb w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-[#dc2626]/10 -right-40 md:-right-60 top-1/2" />

      <div className="relative z-10 container-content">
        <SectionHeader
          badge="Команда поддержки"
          title="20+ отделов работают на ваш результат"
          description="Каждый отдел отвечает за свою часть: от маркетинга и HR до методики и юристов."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 stagger-children">
          {departments.map((d, i) => (
            <Card key={i} variant="hover" padding="md">
              <IconBox icon={d.icon} size="lg" variant="teal" className="mb-3" />
              <h3 className="text-base font-semibold text-[#2D3436] mb-1">{d.title}</h3>
              <p className="text-xs sm:text-sm text-[#636e72] leading-relaxed">{d.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

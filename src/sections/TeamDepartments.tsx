import {
  Megaphone, Users, BookOpen, TrendingUp, ShieldCheck, BadgeCheck, Monitor, BarChart3,
} from 'lucide-react';
import { UiCard as Card } from '@/components/ui/UiCard';
import { UiIconBox as IconBox } from '@/components/ui/UiIconBox';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { DoodleCloud, DoodleDots, DoodleHeart, DoodleZigzag, DoodleSpiral, DoodleSmile, DoodleArrow } from '@/components/Doodles';

const departments = [
  { icon: Megaphone, title: 'Маркетинг', desc: 'Реклама, лидогенерация, лендинги' },
  { icon: Users, title: 'HR и обучение', desc: 'Поиск, проверка и обучение персонала' },
  { icon: BookOpen, title: 'Методист и куратор', desc: 'Программы, конспекты и обучение педагогов' },
  { icon: TrendingUp, title: 'Финансовый отдел', desc: 'Финмодели и оптимизация расходов' },
  { icon: ShieldCheck, title: 'Юридический отдел', desc: 'Проверка аренды, договоров, лицензий' },
  { icon: BadgeCheck, title: 'Контроль качества', desc: '42 пункта чек-листа и личный куратор' },
  { icon: Monitor, title: 'IT и технологии', desc: 'CRM, дашборды, база знаний' },
  { icon: BarChart3, title: 'Аналитика и процессы', desc: 'Сравнение показателей по сети' },
];

export function TeamDepartments() {
  return (
    <section className="section-base section-light section-padding relative">
      <DoodleCloud className="absolute top-8 left-[3%] text-sky-300/50 rotate-[-6deg] hidden lg:block w-40 h-40" />
      <DoodleDots className="absolute top-1/4 right-[3%] text-orange-300/40 hidden lg:block w-20 h-20" />
      <DoodleHeart className="absolute bottom-10 right-[5%] text-rose-300/40 hidden lg:block w-32 h-32" />
      <DoodleZigzag className="absolute bottom-12 left-[4%] text-violet-300/40 rotate-[4deg] hidden lg:block w-32 h-12" />
      <DoodleSpiral className="absolute top-1/3 right-[2%] text-emerald-300/30 rotate-[12deg] hidden xl:block w-28 h-28" />
      <DoodleSmile className="absolute bottom-1/3 left-[2%] text-amber-300/30 hidden xl:block w-24 h-24" />
      <DoodleArrow className="absolute top-1/2 right-[5%] text-pink-300/30 rotate-[-6deg] hidden xl:block w-28 h-16" />

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

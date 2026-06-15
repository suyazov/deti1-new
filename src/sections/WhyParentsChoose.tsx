import { Camera, ShieldCheck, BadgeCheck, Stethoscope, Utensils, PartyPopper, GraduationCap } from 'lucide-react';
import { UiCard as Card } from '@/components/ui/UiCard';
import { UiIconBox as IconBox } from '@/components/ui/UiIconBox';
import { SectionHeader } from '@/components/ui/SectionHeader';

const reasons = [
  {
    icon: Camera,
    title: 'Онлайн-видеонаблюдение',
    desc: 'Родители всегда могут увидеть, как чувствует себя ребёнок и чем он занимается.',
  },
  {
    icon: ShieldCheck,
    title: 'Безопасная среда',
    desc: 'Строгое соблюдение всех норм СанПиН и продуманная безопасность на каждом шагу.',
  },
  {
    icon: BadgeCheck,
    title: 'Работаем по лицензии',
    desc: 'Оплату можно производить материнским капиталом — официально и удобно.',
  },
  {
    icon: Stethoscope,
    title: 'Медицинский работник',
    desc: 'В каждом саду есть медицинский специалист, который следит за здоровьем детей.',
  },
  {
    icon: Utensils,
    title: 'Полноценное питание и режим',
    desc: 'Сбалансированное меню, чёткий режим дня и тёплая домашняя атмосфера.',
  },
  {
    icon: PartyPopper,
    title: 'Современные мероприятия',
    desc: 'Утренники и праздники, которые действительно радуют детей и родителей.',
  },
  {
    icon: GraduationCap,
    title: 'Готовность к школе',
    desc: 'Программа развития: после сада ребёнок на 100% готов к школе — без дополнительных кружков и репетиторов.',
  },
];

export function WhyParentsChoose() {
  return (
    <section id="parents" className="section-base section-light section-padding">
      <div className="container-content">
        <SectionHeader
          badge="Для родителей"
          title="Почему родители нас выбирают"
          description="В садах «Дети в приоритете» родители платят не просто за уход, а за уверенность, качество и развитие"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 stagger-children">
          {reasons.map((r, i) => (
            <Card key={i} variant="hover" padding="md">
              <IconBox icon={r.icon} size="lg" variant="teal" className="mb-3" />
              <h3 className="text-base font-semibold text-[#2D3436] mb-1.5">{r.title}</h3>
              <p className="text-sm text-[#636e72] leading-relaxed">{r.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Camera, ShieldCheck, BadgeCheck, Stethoscope, Utensils, PartyPopper, GraduationCap } from 'lucide-react';
import { UiCard as Card } from '@/components/ui/UiCard';
import { SectionHeader } from '@/components/ui/SectionHeader';

const reasons = [
  {
    icon: Camera,
    title: 'Онлайн-видеонаблюдение',
    desc: 'Родители всегда могут увидеть, как чувствует себя ребёнок и чем он занимается.',
    color: 'text-sky-600',
    bg: 'bg-sky-100',
    border: 'border-sky-200/60',
  },
  {
    icon: ShieldCheck,
    title: 'Безопасная среда',
    desc: 'Строгое соблюдение всех норм СанПиН и продуманная безопасность на каждом шагу.',
    color: 'text-green-600',
    bg: 'bg-green-100',
    border: 'border-green-200/60',
  },
  {
    icon: BadgeCheck,
    title: 'Работаем по лицензии',
    desc: 'Оплату можно производить материнским капиталом — официально и удобно.',
    color: 'text-purple-600',
    bg: 'bg-purple-100',
    border: 'border-purple-200/60',
  },
  {
    icon: Stethoscope,
    title: 'Медицинский работник',
    desc: 'В каждом саду есть медицинский специалист, который следит за здоровьем детей.',
    color: 'text-rose-600',
    bg: 'bg-rose-100',
    border: 'border-rose-200/60',
  },
  {
    icon: Utensils,
    title: 'Полноценное питание и режим',
    desc: 'Сбалансированное меню, чёткий режим дня и тёплая домашняя атмосфера.',
    color: 'text-orange-600',
    bg: 'bg-orange-100',
    border: 'border-orange-200/60',
  },
  {
    icon: PartyPopper,
    title: 'Современные мероприятия',
    desc: 'Утренники и праздники, которые действительно радуют детей и родителей.',
    color: 'text-pink-600',
    bg: 'bg-pink-100',
    border: 'border-pink-200/60',
  },
  {
    icon: GraduationCap,
    title: 'Готовность к школе',
    desc: 'Программа развития: после сада ребёнок на 100% готов к школе — без дополнительных кружков и репетиторов.',
    color: 'text-indigo-600',
    bg: 'bg-indigo-100',
    border: 'border-indigo-200/60',
  },
];

export function WhyParentsChoose() {
  return (
    <section id="parents" className="section-base section-light section-padding overflow-hidden">
      <div className="absolute top-20 right-10 w-3 h-3 rounded-full bg-yellow-300 animate-float pointer-events-none" style={{ animationDelay: '0.3s' }} />
      <div className="absolute bottom-20 left-10 w-2.5 h-2.5 rounded-full bg-pink-300 animate-float pointer-events-none" style={{ animationDelay: '1.5s' }} />

      <div className="relative z-10 container-content">
        <SectionHeader
          badge="Для родителей"
          title="Почему родители нас выбирают"
          description="В садах «Дети в приоритете» родители платят не просто за уход, а за спокойствие, качественное образование и безопасность"
        />

        <div className="grid lg:grid-cols-3 gap-4 md:gap-5 items-stretch">
          <Card padding="sm" className="lg:row-span-2 relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-pink-300 via-yellow-300 to-sky-300" />
            <img
              src="/photos/kids-classroom-floor.jpeg"
              alt="Дети на занятии в детском саду"
              loading="lazy"
              className="w-full h-full min-h-[260px] object-cover rounded-2xl transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-sm font-semibold text-white drop-shadow-md">Тёплая атмосфера, в которой дети растут счастливыми</p>
            </div>
          </Card>

          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4 md:gap-5 stagger-children">
            {reasons.map((r, i) => (
              <Card key={i} variant="hover" padding="md" className="relative overflow-hidden">
                <div className={`absolute top-0 left-0 right-0 h-1 ${r.bg.replace('bg-', 'bg-gradient-to-r from-')} to-white/0`} />
                <div className={`w-11 h-11 rounded-xl ${r.bg} border ${r.border} flex items-center justify-center mb-3`}>
                  <r.icon className={`w-5 h-5 ${r.color}`} />
                </div>
                <h3 className="text-base font-semibold text-[#2D3436] mb-1.5">{r.title}</h3>
                <p className="text-sm text-[#636e72] leading-relaxed">{r.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

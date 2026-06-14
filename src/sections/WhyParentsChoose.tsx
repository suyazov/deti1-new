import { Camera, ShieldCheck, BadgeCheck, Stethoscope, Utensils, PartyPopper, GraduationCap } from 'lucide-react';

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
    <section id="parents" className="section-light py-14 md:py-20 xl:py-16 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-5">
        <div className="text-center mb-8 md:mb-12 blur-reveal" style={{ transitionDelay: '0.05s' }}>
          <span className="inline-block text-[11px] sm:text-xs font-semibold tracking-[0.12em] uppercase bg-[rgba(0,137,123,0.1)] text-[#00897b] border border-[rgba(0,137,123,0.15)] px-4 py-1.5 rounded-full mb-4">
            ДЛЯ РОДИТЕЛЕЙ
          </span>
          <h2 className="text-[clamp(26px,4vw,44px)] xl:text-[clamp(28px,3.5vw,40px)] font-bold leading-[1.1] tracking-tight text-[#2D3436]">
            Почему родители нас выбирают
          </h2>
          <p className="mt-3 text-sm md:text-base text-[#636e72] max-w-2xl mx-auto">
            В садах «Дети в приоритете» родители платят не просто за уход, а за уверенность, качество и развитие
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 stagger-children">
          {reasons.map((r, i) => (
            <div
              key={i}
              className="scroll-reveal bg-white rounded-2xl md:rounded-3xl p-5 md:p-6 border border-black/5 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-[#00897b]/10 flex items-center justify-center mb-3">
                <r.icon className="w-5 h-5 md:w-6 md:h-6 text-[#00897b]" />
              </div>
              <h3 className="text-sm md:text-base font-semibold text-[#2D3436] mb-1.5">{r.title}</h3>
              <p className="text-xs md:text-sm text-[#636e72] leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

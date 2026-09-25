import { ArrowRight, Check, Info } from 'lucide-react';
import { UiButton as Button } from '@/components/ui/UiButton';
import { SectionHeader } from '@/components/ui/SectionHeader';

const offers = [
  {
    name: 'Франшиза',
    price: '650 000 ₽',
    note: '+ 40 000 ₽/мес. роялти',
    intro: 'Для тех, кому нужен бренд и наиболее полный формат сопровождения.',
    features: ['Бренд «Дети в приоритете»', 'Материалы и процессы запуска', 'Обучение команды', 'Сопровождение после открытия'],
    accent: true,
  },
  {
    name: 'Запуск под своим брендом',
    price: '450 000 ₽',
    note: 'без роялти',
    intro: 'Для тех, кто хочет открыть сад со своей вывеской, но пройти запуск с поддержкой.',
    features: ['Документы и материалы запуска', 'Работа с помещением и процессами', 'Обучение команды', 'Без использования бренда франшизы'],
  },
  {
    name: 'Комплект документов',
    price: '300 000 ₽',
    note: 'самостоятельный запуск',
    intro: 'Для предпринимателя, который готов организовать запуск самостоятельно и хочет получить базу материалов.',
    features: ['Комплект документов', 'Финансовая модель', 'Смета запуска', 'Ограниченный консультационный формат'],
  },
];

export function OfferCompare() {
  const scrollToContact = () => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="pricing" className="section-base section-light section-padding overflow-hidden">
      <div className="container-content relative z-10">
        <SectionHeader
          badge="Форматы сотрудничества"
          title="Сразу видно, чем отличаются варианты"
          description="Ниже — цены из основной видимой версии сайта на момент прототипа. Перед договором финальные условия и состав подтверждаются отдельно."
        />

        <div className="grid lg:grid-cols-3 gap-4 lg:gap-5 items-stretch">
          {offers.map((offer) => (
            <article key={offer.name} className={`rounded-[2rem] p-6 sm:p-7 border h-full flex flex-col ${offer.accent ? 'bg-[#173f3b] text-white border-[#173f3b] shadow-xl' : 'bg-white text-[#2D3436] border-black/5 shadow-card'}`}>
              <div className="mb-5">
                <h3 className="text-xl font-bold mb-4">{offer.name}</h3>
                <div className="text-3xl sm:text-4xl font-black tracking-tight">{offer.price}</div>
                <p className={`text-sm mt-1 ${offer.accent ? 'text-white/65' : 'text-[#636e72]'}`}>{offer.note}</p>
              </div>
              <p className={`text-sm leading-relaxed mb-5 ${offer.accent ? 'text-white/80' : 'text-[#636e72]'}`}>{offer.intro}</p>
              <ul className="space-y-2.5 mb-7 flex-1">
                {offer.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm">
                    <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${offer.accent ? 'text-[#8fe0cf]' : 'text-[#00897b]'}`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button variant={offer.accent ? 'secondary' : 'primary'} className="w-full" onClick={scrollToContact}>
                Обсудить формат <ArrowRight className="w-4 h-4" />
              </Button>
            </article>
          ))}
        </div>

        <div className="mt-5 flex items-start gap-2.5 rounded-2xl bg-amber-50 border border-amber-100 px-4 py-3.5 text-sm text-amber-950/80">
          <Info className="w-4 h-4 mt-0.5 flex-shrink-0" />
          <p>Стоимость выбранного формата — не весь бюджет открытия сада. Помещение, ремонт, оснащение, резерв и другие стартовые расходы рассчитываются отдельно.</p>
        </div>
      </div>
    </section>
  );
}

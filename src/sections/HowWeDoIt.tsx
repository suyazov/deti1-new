import { Building2, ClipboardCheck, Megaphone, Users, Rocket } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';

const steps = [
  { icon: ClipboardCheck, title: 'Сначала считаем и выбираем формат', desc: 'Фиксируем город, исходные условия, бюджет и необходимую глубину поддержки.' },
  { icon: Building2, title: 'Проверяем помещение и план запуска', desc: 'Разбираем требования к площадке, состав работ, оснащение и последовательность подготовки.' },
  { icon: Users, title: 'Готовим процессы и команду', desc: 'Определяем роли, материалы, обучение и операционные правила для запуска.' },
  { icon: Megaphone, title: 'Готовим привлечение родителей', desc: 'Собираем маркетинговый план и путь обработки обращений до открытия.' },
  { icon: Rocket, title: 'Открываем и сопровождаем', desc: 'Переходим к работе по согласованному плану; объём поддержки после открытия зависит от формата.' },
];

export function HowWeDoIt() {
  return (
    <section id="process" className="section-base section-light section-padding overflow-hidden">
      <div className="container-content relative z-10">
        <SectionHeader
          badge="Как проходит работа"
          title="Путь разбит на понятные этапы"
          description="Срок каждого этапа зависит от помещения, исходных данных и выбранного формата. В прототипе не обещаем универсальную дату открытия."
        />
        <div className="grid lg:grid-cols-5 gap-3 sm:gap-4">
          {steps.map(({ icon: Icon, title, desc }, index) => (
            <div key={title} className="relative bg-white border border-black/5 rounded-[1.75rem] p-5 shadow-card">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#00897b]/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-[#00796b]" />
                </div>
                <span className="text-xs font-black tracking-[.14em] text-[#2D3436]/25">0{index + 1}</span>
              </div>
              <h3 className="text-base font-bold text-[#2D3436] mb-2 leading-snug">{title}</h3>
              <p className="text-sm text-[#636e72] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

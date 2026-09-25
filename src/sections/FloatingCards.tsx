import { Calculator, ClipboardList, GraduationCap, HeartHandshake, Megaphone, Building2 } from 'lucide-react';
import { UiCard as Card } from '@/components/ui/UiCard';
import { SectionHeader } from '@/components/ui/SectionHeader';

const features = [
  { icon: Building2, title: 'Помещение и запуск', desc: 'Помогаем пройти этап выбора помещения, подготовить план работ и понять состав запуска.' },
  { icon: ClipboardList, title: 'Документы и процессы', desc: 'Передаём материалы для ключевых операционных процессов и работы команды в пределах выбранного формата.' },
  { icon: Calculator, title: 'Финансовая модель', desc: 'Используем финансовую модель для сценариев, точки безубыточности и планирования. На странице доступен отдельный открытый калькулятор.' },
  { icon: GraduationCap, title: 'Обучение команды', desc: 'В материалах предусмотрены обучение и стандарты работы для руководителя и сотрудников — точный объём зависит от пакета.' },
  { icon: Megaphone, title: 'Маркетинг и продажи', desc: 'Настраиваем подход к привлечению родителей, коммуникации и работе с обращениями без обещаний гарантированного числа заявок.' },
  { icon: HeartHandshake, title: 'Сопровождение', desc: 'Помогаем пройти сложные этапы не в одиночку. Глубина и срок сопровождения фиксируются в конкретном предложении.' },
];

export function FloatingCards() {
  return (
    <section id="included" className="section-base section-light section-padding overflow-hidden">
      <div className="container-content relative z-10">
        <SectionHeader
          badge="Что входит в работу"
          title="Не просто бренд — конкретные части запуска"
          description="Показываем, какую задачу закрывает каждый блок. Точный состав зависит от выбранного формата и фиксируется до старта."
        />
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
          {features.map(({ icon: Icon, title, desc }, index) => (
            <Card key={title} variant="hover" padding="lg" className="relative overflow-hidden h-full">
              <span className="absolute top-4 right-5 text-xs font-bold text-[#2D3436]/25">0{index + 1}</span>
              <div className="w-11 h-11 rounded-xl bg-[#00897b]/10 flex items-center justify-center mb-4">
                <Icon className="w-5 h-5 text-[#00796b]" />
              </div>
              <h3 className="text-lg font-bold text-[#2D3436] mb-2">{title}</h3>
              <p className="text-sm text-[#636e72] leading-relaxed">{desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

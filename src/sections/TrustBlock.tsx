import { Award, Calendar, FileBadge, LineChart } from 'lucide-react';
import { UiCard as Card } from '@/components/ui/UiCard';
import { SectionHeader } from '@/components/ui/SectionHeader';

const points = [
  {
    icon: Calendar,
    title: 'Работаем в детском бизнесе с 2016 года',
    desc: 'На сайте действующего сада и в материалах Фонда поддержки предпринимательства Ставропольского края подтверждается работа проекта и руководителя в этой сфере.',
  },
  {
    icon: FileBadge,
    title: 'Товарный знак зарегистрирован',
    desc: '«Дети в приоритете» — зарегистрированный товарный знак № 1019709. Перед юридически значимым выпуском реквизиты дополнительно сверяются с первичным реестром.',
  },
  {
    icon: Award,
    title: 'Есть подтверждённые результаты в социальном предпринимательстве',
    desc: 'В 2024 году Анна Суязова указана среди победителей номинаций регионального этапа конкурса «Мой добрый бизнес».',
  },
  {
    icon: LineChart,
    title: 'Экономику не прячем за заявкой',
    desc: 'На странице остаётся открытый интерактивный калькулятор. Можно менять загрузку, средний чек и аренду и видеть операционный результат.',
  },
];

export function TrustBlock() {
  return (
    <section id="about" className="section-base section-light section-padding overflow-hidden">
      <div className="container-content relative z-10">
        <SectionHeader
          badge="Сначала — основания доверия"
          title="Действующая практика вместо набора громких обещаний"
          description="В новой версии оставляем только те тезисы, которые можно объяснить и проверить. Спорные награды и маркетинговые цифры не используем как доказательство."
        />

        <div className="grid lg:grid-cols-[.9fr_1.1fr] gap-6 lg:gap-8 items-stretch">
          <Card padding="none" className="overflow-hidden relative min-h-[430px]">
            <img
              src="/photos/anna-white.jpeg"
              alt="Анна Суязова, основатель проекта «Дети в приоритете»"
              className="absolute inset-0 w-full h-full object-cover object-top"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#17292a]/85 via-[#17292a]/15 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
              <p className="text-xs uppercase tracking-[.14em] font-bold text-white/70 mb-2">Анна Суязова</p>
              <h3 className="text-2xl sm:text-3xl font-bold leading-tight mb-3">Основатель и практик, который остаётся лицом продукта</h3>
              <p className="text-sm sm:text-base text-white/85 leading-relaxed">На сайте важно не обещать идеальный бизнес, а показать процесс, материалы, экономику и границы поддержки.</p>
            </div>
          </Card>

          <div className="grid sm:grid-cols-2 gap-4">
            {points.map(({ icon: Icon, title, desc }) => (
              <Card key={title} variant="hover" padding="lg" className="h-full">
                <div className="w-11 h-11 rounded-xl bg-[#00897b]/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-[#00796b]" />
                </div>
                <h3 className="text-lg font-bold text-[#2D3436] mb-2 leading-snug">{title}</h3>
                <p className="text-sm text-[#636e72] leading-relaxed">{desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

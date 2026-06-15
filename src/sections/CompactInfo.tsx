import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Cloud, Briefcase, TrendingUp, Building2, UserCog, HeartHandshake,
  Check, Sparkles, ArrowRight,
} from 'lucide-react';
import { UiCard as Card } from '@/components/ui/UiCard';
import { UiButton as Button } from '@/components/ui/UiButton';
import { UiIconBox as IconBox } from '@/components/ui/UiIconBox';
import { SectionHeader } from '@/components/ui/SectionHeader';

const featureGroups = [
  {
    title: 'Бренд и маркетинг',
    items: [
      'Готовый бренд, логотип и фирменный стиль',
      'Шаблоны для соцсетей, полиграфии и вывесок',
      'Настройка рекламы и первые заявки до открытия',
      'CRM, скрипты продаж и воронка клиента',
    ],
  },
  {
    title: 'Документы и лицензия',
    items: [
      'Полный комплект документов по кадрам, питанию и охране труда',
      'Образовательные программы и договоры с родителями',
      'Помощь в получении образовательной лицензии',
      'Юридическая поддержка и сопровождение проверок',
    ],
  },
  {
    title: 'Запуск и помещение',
    items: [
      'Помощь в подборе и аудите помещения по СанПиН',
      'Детальная смета запуска «под ключ»',
      'Проверенные поставщики мебели, игрушек и расходников',
      'Дизайнер интерьера и оформления в едином стиле',
    ],
  },
  {
    title: 'Команда и обучение',
    items: [
      'Обучение администраторов, воспитателей и поваров',
      'Готовые планы занятий от штатного методиста',
      'Инструкции по адаптации детей и работе с родителями',
      'Личное сопровождение Анны на всех этапах',
    ],
  },
  {
    title: 'Финансы и развитие',
    items: [
      'Финансовая модель с прогнозом выручки и прибыли',
      'Точка безубыточности и варианты масштабирования',
      'Управленческая отчётность и контроль расходов',
      'Регулярные аудиты и поддержка филиала',
    ],
  },
];

const audiences = [
  { icon: Cloud, title: 'Мечтатели', desc: 'Мечтаете открыть детский сад, но боитесь бюрократии и ответственности' },
  { icon: Briefcase, title: 'Профессионалы', desc: 'Уже работаете с детьми, но хотите выстроить понятную и стабильную систему' },
  { icon: TrendingUp, title: 'Инвесторы', desc: 'Инвестируете в устойчивый и социально значимый бизнес' },
  { icon: UserCog, title: 'Топ-менеджеры', desc: 'Устали от наёмной работы — хотите дело, которое приносит радость и доход' },
  { icon: Building2, title: 'Собственники центров', desc: 'У вас есть детский центр, и вы хотите масштабироваться в полноценный сад' },
  { icon: HeartHandshake, title: 'Родители-предприниматели', desc: 'Бизнес, который приносит радость и доход' },
];

const franchiseFeatures = [
  'Личное сопровождение Анны',
  'Полный пакет документов',
  'Помощь в подборе помещения',
  'СанПиН аудит',
  'Команда поддержки',
  'Обучение и маркетинг',
];

const docsFeatures = [
  'Юридические документы',
  'Образовательные программы',
  'Смета запуска',
  'Стандарты персонала',
  'Самостоятельный запуск',
];

const faqs = [
  {
    q: 'Нужен ли опыт в образовании, чтобы открыть сад?',
    a: 'Нет. Мы даём полное обучение и сопровождение: от документов до управления командой. Главное — ваше желание запустить осмысленный бизнес.',
  },
  {
    q: 'Сколько времени занимает запуск?',
    a: 'В среднем 2–3 месяца с момента подписания договора до первых детей в саду. Точные сроки зависят от помещения и города.',
  },
  {
    q: 'Какая прибыль возможна?',
    a: 'Собственный сад Анны приносит 420 000 ₽ в месяц при загрузке 72 ребёнка. Мы передаём финансовую модель и помогаем выйти на плановые показатели.',
  },
  {
    q: 'Что входит в пакет «Под ключ»?',
    a: 'Личное сопровождение Анны, полный пакет документов, помощь в подборе помещения, СанПиН аудит, команда поддержки, обучение и маркетинг.',
  },
  {
    q: 'Можно ли купить только документы?',
    a: 'Да, есть базовый пакет за 300 000 ₽ без роялти и сопровождения. Он подойдёт, если у вас уже есть опыт.',
  },
  {
    q: 'Нужна ли образовательная лицензия?',
    a: 'Не всегда. В одних регионах она обязательна, в других сад прекрасно работает без неё. Мы заранее подскажем, как обстоят дела именно в вашем городе: если лицензия даёт преимущества — соберём документы, подготовим помещение и проведём через проверки. Если нет — вы сэкономите время и начнёте работать быстрее.',
  },
];

export function CompactInfo() {
  const [activeTab, setActiveTab] = useState('features');

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const tabs = [
    { value: 'features', label: 'Что входит' },
    { value: 'audience', label: 'Для кого' },
    { value: 'pricing', label: 'Стоимость' },
    { value: 'faq', label: 'FAQ' },
  ];

  return (
    <section id="franchise" className="section-base section-light section-padding">
      <div className="glow-orb w-[500px] h-[500px] bg-[#00796b]/10 -right-60 top-0" />

      <div className="relative z-10 container-content">
        <SectionHeader
          badge="Всё о франшизе"
          title="Всё необходимое в одном месте"
        />

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full max-w-2xl mx-auto mb-6 md:mb-8 flex overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden p-1 bg-black/5 rounded-full">
            {tabs.map((t) => (
              <TabsTrigger
                key={t.value}
                value={t.value}
                className="flex-shrink-0 rounded-full text-xs md:text-sm text-[#4a5252] hover:text-[#2D3436] data-[state=active]:bg-white data-[state=active]:text-[#2D3436] data-[state=active]:shadow-sm py-2 px-3 sm:px-4 transition-colors"
              >
                {t.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="features" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 stagger-children">
              {featureGroups.map((group, i) => (
                <Card key={i} padding="md" className="h-full flex flex-col">
                  <h3 className="text-base font-bold text-[#2D3436] mb-3 flex items-center gap-2">
                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-[#00897b]/15 text-[#005a4f]">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {group.title}
                  </h3>
                  <ul className="space-y-2 flex-1">
                    {group.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-[#2D3436]">
                        <Check className="w-4 h-4 text-[#00897b] flex-shrink-0 mt-0.5" />
                        <span className="text-[#636e72] leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="audience" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 stagger-children">
              {audiences.map((a, i) => (
                <Card key={i} variant="hover" padding="md">
                  <IconBox icon={a.icon} size="lg" variant="teal" className="mb-4" />
                  <h3 className="text-lg font-semibold text-[#2D3436] mb-1">{a.title}</h3>
                  <p className="text-[#636e72] text-sm leading-relaxed">{a.desc}</p>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="pricing" className="mt-0">
            <div className="grid md:grid-cols-2 gap-5 max-w-[1000px] mx-auto stagger-children">
              <Card padding="lg" className="relative overflow-hidden border-[#00897b]/20 h-full flex flex-col">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00897b] to-[#00897b]/50" />
                <div className="flex items-center justify-between mb-5">
                  <h3 className="text-xl font-bold text-[#2D3436]">Франшиза «Под ключ»</h3>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase text-[#00897b] bg-[#00897b]/15 border border-[#00897b]/20 px-2.5 py-1 rounded-full">
                    <Sparkles className="w-3 h-3" /> Рекомендуем
                  </span>
                </div>
                <div className="mb-5">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-[#2D3436]">650 000 ₽</span>
                  </div>
                  <p className="text-[#636e72] text-sm mt-1">Паушальный взнос + 40 000 ₽/мес роялти</p>
                </div>
                <ul className="space-y-2 mb-6 flex-1">
                  {franchiseFeatures.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#2D3436]">
                      <Check className="w-4 h-4 text-[#00897b] flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full mt-auto">
                  <a href="#contact" onClick={(e) => handleClick(e as unknown as React.MouseEvent<HTMLAnchorElement>, '#contact')}>
                    Получить КП <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
              </Card>

              <Card padding="lg" className="h-full flex flex-col">
                <h3 className="text-xl font-bold text-[#2D3436] mb-5">Базовый пакет</h3>
                <div className="mb-5">
                  <span className="text-4xl font-bold text-[#2D3436]">300 000 ₽</span>
                  <p className="text-[#636e72] text-sm mt-1">Единоразово, без роялти</p>
                </div>
                <ul className="space-y-2 mb-6 flex-1">
                  {docsFeatures.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#2D3436]">
                      <Check className="w-4 h-4 text-[#636e72] flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button asChild variant="secondary" className="w-full mt-auto">
                  <a href="#contact" onClick={(e) => handleClick(e as unknown as React.MouseEvent<HTMLAnchorElement>, '#contact')}>
                    Получить детали
                  </a>
                </Button>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="faq" className="mt-0">
            <div className="max-w-[900px] mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <Card padding="sm">
                  {faqs.map((faq, i) => (
                    <AccordionItem key={i} value={`item-${i}`} className="border-black/10 px-4 md:px-6">
                      <AccordionTrigger className="text-left text-base font-medium text-[#2D3436] hover:text-[#00897b] hover:no-underline py-4">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-[#636e72] leading-relaxed pb-4">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Card>
              </Accordion>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

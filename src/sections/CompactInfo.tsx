import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Check, Sparkles, ArrowRight, ChevronDown,
} from 'lucide-react';
import { UiCard as Card } from '@/components/ui/UiCard';
import { UiButton as Button } from '@/components/ui/UiButton';
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

const plans = [
  {
    id: 'franchise',
    name: 'Франшиза',
    price: '650 000 ₽',
    note: 'Паушальный взнос + 40 000 ₽/мес роялти',
    badge: 'Рекомендуем',
    summary: 'Полный пакет с брендом «Дети в приоритете», личным сопровождением Анны и ежемесячной поддержкой филиала.',
    features: [
      'Бренд и фирменный стиль',
      'Полный пакет документов и лицензия',
      'Помощь с помещением и смета запуска',
      'Обучение команды и маркетинг',
      'Личное сопровождение Анны',
    ],
    details: [
      {
        title: 'Бренд и маркетинг',
        items: [
          'Готовый бренд, логотип и фирменный стиль',
          'Шаблоны для соцсетей, полиграфии и вывесок',
          'Настройка рекламы и первые заявки до открытия',
          'CRM, скрипты продаж и воронка клиента',
          'Ежемесячные маркетинговые обновления и материалы',
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
    ],
  },
  {
    id: 'turnkey',
    name: 'Под ключ',
    price: '450 000 ₽',
    note: 'Единоразово, без роялти',
    badge: null,
    summary: 'Комплексное сопровождение по открытию сада под своим брендом: документы, помещение, обучение и процессы.',
    features: [
      'Полный пакет документов',
      'Помощь с лицензией и проверками',
      'Подбор и аудит помещения',
      'Обучение персонала',
      'Без роялти и отчислений',
    ],
    details: [
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
          'Рекомендации по дизайну и оформлению',
        ],
      },
      {
        title: 'Команда и обучение',
        items: [
          'Обучение администраторов, воспитателей и поваров',
          'Готовые планы занятий от штатного методиста',
          'Инструкции по адаптации детей и работе с родителями',
          'Настройка процессов и контроль качества',
        ],
      },
      {
        title: 'Финансы и развитие',
        items: [
          'Финансовая модель с прогнозом выручки и прибыли',
          'Точка безубыточности и варианты масштабирования',
          'Управленческая отчётность и контроль расходов',
        ],
      },
    ],
  },
  {
    id: 'docs',
    name: 'Документы',
    price: '300 000 ₽',
    note: 'Единоразово, без сопровождения',
    badge: null,
    summary: 'Готовый пакет документов для самостоятельного запуска. Подходит, если у вас уже есть опыт ведения детского сада.',
    features: [
      'Юридические документы',
      'Образовательные программы',
      'Финансовая модель',
      'Смета запуска',
      'Консультация с Анной',
    ],
    details: [
      {
        title: 'Документы',
        items: [
          'Полный комплект документов по кадрам, питанию и охране труда',
          'Образовательные программы и договоры с родителями',
          'Стандарты персонала и должностные инструкции',
          'Смета запуска и финансовая модель',
        ],
      },
      {
        title: 'Поддержка',
        items: [
          '2-часовая консультация с Анной',
          '10 дней поддержки «вопрос-ответ»',
          'Рекомендации по запуску без личного сопровождения',
        ],
      },
    ],
  },
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
    a: 'Полный пакет документов, помощь с лицензией и проверками, подбор и аудит помещения, обучение персонала, настройка процессов — без роялти и франшизных отчислений.',
  },
  {
    q: 'Можно ли купить только документы?',
    a: 'Да, базовый пакет стоит 300 000 ₽. В него входит полный комплект документов, финансовая модель, смета, консультация с Анной и 10 дней поддержки «вопрос-ответ».',
  },
  {
    q: 'Нужна ли образовательная лицензия?',
    a: 'Не всегда. В одних регионах она обязательна, в других сад прекрасно работает без неё. Мы заранее подскажем, как обстоят дела именно в вашем городе: если лицензия даёт преимущества — соберём документы, подготовим помещение и проведём через проверки. Если нет — вы сэкономите время и начнёте работать быстрее.',
  },
];

export function CompactInfo() {
  const [activeTab, setActiveTab] = useState('features');
  const [activePlan, setActivePlan] = useState('franchise');

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const selectedPlan = plans.find((p) => p.id === activePlan) || plans[0];

  const tabs = [
    { value: 'features', label: 'Что входит' },
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

          <TabsContent value="pricing" className="mt-0">
            <div className="max-w-[1100px] mx-auto">
              <div className="grid md:grid-cols-3 gap-4 lg:gap-5 stagger-children">
                {plans.map((plan) => {
                  const isActive = activePlan === plan.id;
                  return (
                    <Card
                      key={plan.id}
                      padding="lg"
                      className={`relative h-full flex flex-col cursor-pointer transition-all duration-200 ${
                        isActive
                          ? 'ring-2 ring-[#00897b] shadow-lg border-[#00897b]/20'
                          : 'hover:border-[#00897b]/30 hover:shadow-md'
                      }`}
                      onClick={() => setActivePlan(plan.id)}
                      role="button"
                      aria-pressed={isActive}
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setActivePlan(plan.id);
                        }
                      }}
                    >
                      {plan.badge && (
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00897b] to-[#00897b]/50 rounded-t-[inherit]" />
                      )}
                      <div className="flex items-start justify-between gap-3 mb-4">
                        <h3 className="text-xl font-bold text-[#2D3436]">{plan.name}</h3>
                        {plan.badge && (
                          <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-semibold uppercase text-[#00897b] bg-[#00897b]/15 border border-[#00897b]/20 px-2 py-1 rounded-full whitespace-nowrap">
                            <Sparkles className="w-3 h-3" /> {plan.badge}
                          </span>
                        )}
                      </div>

                      <div className="mb-4">
                        <div className="flex items-baseline gap-2 flex-wrap">
                          <span className="text-3xl lg:text-4xl font-bold text-[#2D3436]">{plan.price}</span>
                        </div>
                        <p className="text-[#636e72] text-sm mt-1 leading-snug">{plan.note}</p>
                      </div>

                      <p className="text-sm text-[#636e72] leading-relaxed mb-5">{plan.summary}</p>

                      <ul className="space-y-2 mb-5 flex-1">
                        {plan.features.map((f, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-[#2D3436]">
                            <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${isActive ? 'text-[#00897b]' : 'text-[#636e72]'}`} />
                            {f}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-auto space-y-3">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setActivePlan(plan.id);
                          }}
                          className="w-full flex items-center justify-center gap-2 text-sm font-medium text-[#00897b] hover:text-[#005a4f] py-2 rounded-lg border border-[#00897b]/20 hover:bg-[#00897b]/5 transition-colors"
                          aria-expanded={isActive}
                        >
                          Всё, что входит <ChevronDown className={`w-4 h-4 transition-transform ${isActive ? 'rotate-180' : ''}`} />
                        </button>
                        <Button asChild className="w-full">
                          <a href="#contact" onClick={(e) => handleClick(e as unknown as React.MouseEvent<HTMLAnchorElement>, '#contact')}>
                            Получить КП <ArrowRight className="w-4 h-4" />
                          </a>
                        </Button>
                      </div>
                    </Card>
                  );
                })}
              </div>

              <div className="mt-6 lg:mt-8">
                <Card padding="lg" className="bg-white/80">
                  <div className="flex items-center gap-2 mb-5">
                    <h3 className="text-lg md:text-xl font-bold text-[#2D3436]">
                      Что входит в «{selectedPlan.name}»
                    </h3>
                    <span className="text-lg md:text-xl font-bold text-[#00897b]">{selectedPlan.price}</span>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-5">
                    {selectedPlan.details.map((group, i) => (
                      <div key={i}>
                        <h4 className="text-sm font-semibold text-[#2D3436] mb-2">{group.title}</h4>
                        <ul className="space-y-1.5">
                          {group.items.map((item, j) => (
                            <li key={j} className="flex items-start gap-2 text-sm text-[#636e72]">
                              <Check className="w-4 h-4 text-[#00897b] flex-shrink-0 mt-0.5" />
                              <span className="leading-snug">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
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

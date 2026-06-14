import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Video, ShieldCheck, FileBadge, Stethoscope, UtensilsCrossed, GraduationCap,
  Cloud, Briefcase, TrendingUp, Building2, UserCog, HeartHandshake,
  Languages, ClipboardCheck, Heart,
  Check, Sparkles, ArrowRight,
} from 'lucide-react';

const advantages = [
  { icon: Video, title: 'Онлайн-видеонаблюдение', desc: 'Родители всегда могут увидеть, как чувствует себя ребёнок и чем он занимается' },
  { icon: ShieldCheck, title: 'Безопасная среда', desc: 'Безопасная среда и строгое соблюдение всех норм СанПиН' },
  { icon: FileBadge, title: 'Лицензия', desc: 'Работаем по лицензии: можно оплачивать материнским капиталом' },
  { icon: Stethoscope, title: 'Медицинский уход', desc: 'В каждом саду — медицинский работник' },
  { icon: UtensilsCrossed, title: 'Полноценное питание', desc: 'Полноценное питание, чёткий режим дня и тёплая атмосфера' },
  { icon: GraduationCap, title: 'Готовность к школе', desc: 'Программа развития: после сада ребёнок на 100% готов к школе — без дополнительных кружков и репетиторов' },
  { icon: Languages, title: 'Билингвальное образование', desc: 'Утро на русском, день на английском. 87% малышей начинают строить фразы уже в первый год' },
  { icon: ClipboardCheck, title: 'Единый стандарт качества', desc: 'Конспекты и планы занятий обеспечивают одинаковый уровень в каждом филиале' },
  { icon: Heart, title: 'Забота о каждой семье', desc: 'Фото и видео в приложении, внимание к запросам родителей и забота о каждом ребёнке' },
];

const features = [
  'Готовый бренд и стиль',
  'Весь комплект документов',
  'Финансовая модель',
  'Клиенты с первого месяца',
  'Обучение всей команды',
  'Смета запуска "под ключ"',
  'Методист в вашей команде',
  'Юридическая поддержка',
  'Дизайнер в команде',
  'Поддержка и развитие',
  'Личное сопровождение Анны',
];

const audiences = [
  { icon: Cloud, title: 'Мечтатели', desc: 'Мечтаете открыть детский сад, но боитесь бюрократии и ответственности' },
  { icon: Briefcase, title: 'Профессионалы', desc: 'Уже работаете с детьми, но хотите выстроить понятную и стабильную систему' },
  { icon: TrendingUp, title: 'Инвесторы', desc: 'Инвестируете в устойчивый и социально значимый бизнес' },
  { icon: UserCog, title: 'Топ-менеджеры', desc: 'Устали от наёмной работы — хотите дело, которое приносит радость и доход' },
  { icon: Building2, title: 'Собственники центров', desc: 'У вас есть детский центр, и вы хотите масштабироваться в полноценный сад' },
  { icon: HeartHandshake, title: 'Родители-предприниматели', desc: 'Бизнес, который приносит радость и доход' },
];

const standardFeatures = [
  'Полный пакет документов для самостоятельного запуска',
  '2-часовая консультация с Анной Суязовой',
  '10 дней поддержки «вопрос-ответ»',
];

const vipFeatures = [
  'Полный пакет документов',
  'Комплексное сопровождение по открытию сада',
  'Обучение и методологическая поддержка персонала',
  'Готовая система «под ключ» под свой бренд',
];

const premiumFeatures = [
  'Всё из пакета VIP',
  'Расширенный пакет эксклюзивных материалов и технологий',
  'Индивидуальные условия и приоритетная поддержка',
];

const miniPackages = [
  { title: 'Стартуем правильно', price: '35 000 ₽', desc: 'Регистрация ИП, помещение, инвентарь, план открытия, финмодель' },
  { title: 'Внутренние документы', price: '35 000 ₽', desc: 'Кадры, пожарная безопасность, охрана труда, журналы учёта' },
  { title: 'Персонал и управление', price: '110 000 ₽', desc: 'Работа директора, должностная инструкция, найм и увольнение' },
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
  const [activeTab, setActiveTab] = useState('advantages');

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="advantages" className="section-light py-12 md:py-16 xl:py-10 relative overflow-hidden">
      <div className="glow-orb w-[500px] h-[500px] bg-[#00b894]/10 -right-60 top-0" />

      <div className="relative z-10 max-w-[1240px] mx-auto px-5">
        <div className="blur-reveal text-center mb-6 md:mb-8 xl:mb-5" style={{ transitionDelay: '0.05s' }}>
          <span className="inline-block text-xs font-semibold tracking-[0.12em] uppercase bg-[rgba(0,201,167,0.1)] text-[#00b894] border border-[rgba(0,201,167,0.15)] px-4 py-1.5 rounded-full mb-4">
            ВСЁ О ФРАНШИЗЕ
          </span>
          <h2 className="text-[clamp(28px,3.8vw,52px)] xl:text-[clamp(26px,3.2vw,44px)] font-bold leading-[1.1] tracking-tight text-[#1a1a1a] max-w-3xl mx-auto">
            Всё необходимое в одном месте
          </h2>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full max-w-2xl mx-auto mb-6 md:mb-8 flex overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden p-1 bg-[#FDFBF7]/5 rounded-full">
            {[
              { value: 'advantages', label: 'Преимущества' },
              { value: 'features', label: 'Что входит' },
              { value: 'audience', label: 'Для кого' },
              { value: 'pricing', label: 'Стоимость' },
              { value: 'faq', label: 'FAQ' },
            ].map((t) => (
              <TabsTrigger
                key={t.value}
                value={t.value}
                className="flex-shrink-0 rounded-full text-xs md:text-sm text-[#1a1a1a]/70 hover:text-[#1a1a1a] data-[state=active]:bg-[#FDFBF7] data-[state=active]:text-[#2D3436] py-2 px-3 sm:px-4 transition-colors"
              >
                {t.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="advantages" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 stagger-children">
              {advantages.map((a, i) => (
                <div key={i} className="light-card rounded-2xl p-5 hover:-translate-y-1 hover:shadow-card-hover transition-all duration-300">
                  <div className="w-11 h-11 rounded-xl bg-[rgba(0,201,167,0.1)] flex items-center justify-center mb-4">
                    <a.icon className="w-5 h-5 text-[#00b894]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#1a1a1a] mb-1">{a.title}</h3>
                  <p className="text-[#666] text-sm leading-relaxed">{a.desc}</p>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="features" className="mt-0">
            <div className="glass-card rounded-3xl p-6 md:p-10 bg-[#FDFBF7]">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 stagger-children">
                {features.map((f, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-black/5 border border-black/10">
                    <div className="w-8 h-8 rounded-lg bg-[#00b894]/15 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-[#00b894]" />
                    </div>
                    <span className="text-[#2D3436]/90 text-sm font-medium">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="audience" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 stagger-children">
              {audiences.map((a, i) => (
                <div key={i} className="light-card rounded-2xl p-5 hover:-translate-y-1 hover:shadow-card-hover transition-all duration-300">
                  <div className="w-11 h-11 rounded-xl bg-[rgba(0,201,167,0.1)] flex items-center justify-center mb-4">
                    <a.icon className="w-5 h-5 text-[#00b894]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#1a1a1a] mb-1">{a.title}</h3>
                  <p className="text-[#666] text-sm leading-relaxed">{a.desc}</p>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="pricing" className="mt-0">
            <div className="grid md:grid-cols-3 gap-4 lg:gap-5 max-w-[1200px] mx-auto stagger-children">
              <div className="glass-card rounded-[28px] p-5 md:p-6 relative overflow-hidden bg-white">
                <h3 className="text-lg font-bold text-[#2D3436] mb-4">Стандарт</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-[#2D3436]">300 000 ₽</span>
                  <p className="text-[#2D3436]/60 text-sm mt-1">Полный пакет документов</p>
                </div>
                <ul className="space-y-2 mb-5">
                  {standardFeatures.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#2D3436]/80">
                      <Check className="w-4 h-4 text-[#2D3436]/60 flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#contact" onClick={(e) => handleClick(e, '#contact')} className="inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-[#2D3436] border border-black/10 hover:bg-black/5 transition-all duration-200">
                  Получить детали
                </a>
              </div>

              <div className="glass-card rounded-[28px] p-5 md:p-6 relative overflow-hidden bg-white border-[#00b894]/20">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00b894] to-[#00b894]/50" />
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-[#2D3436]">VIP</h3>
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase text-[#00b894] bg-[#00b894]/15 border border-[#00b894]/20 px-2 py-0.5 rounded-full">
                    <Sparkles className="w-3 h-3" /> Рекомендуем
                  </span>
                </div>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-[#2D3436]">450 000 ₽</span>
                  <p className="text-[#2D3436]/60 text-sm mt-1">Сопровождение «под ключ»</p>
                </div>
                <ul className="space-y-2 mb-5">
                  {vipFeatures.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#2D3436]/80">
                      <Check className="w-4 h-4 text-[#00b894] flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#contact" onClick={(e) => handleClick(e, '#contact')} className="btn-coral w-full py-2.5 text-sm">
                  Получить КП <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              <div className="glass-card rounded-[28px] p-5 md:p-6 relative overflow-hidden bg-white">
                <h3 className="text-lg font-bold text-[#2D3436] mb-4">Премиум (Франшиза)</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-[#2D3436]">550 000 ₽</span>
                  <p className="text-[#2D3436]/60 text-sm mt-1">Эксклюзивные материалы</p>
                </div>
                <ul className="space-y-2 mb-5">
                  {premiumFeatures.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#2D3436]/80">
                      <Check className="w-4 h-4 text-[#00b894] flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#contact" onClick={(e) => handleClick(e, '#contact')} className="inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-[#2D3436] border border-black/10 hover:bg-black/5 transition-all duration-200">
                  Обсудить условия
                </a>
              </div>
            </div>

            <div className="mt-8 max-w-[1200px] mx-auto">
              <h3 className="text-lg font-bold text-[#2D3436] text-center mb-4">Мини-пакеты документов</h3>
              <p className="text-sm text-[#2D3436]/60 text-center mb-5">Консультация с Анной Суязовой — в подарок</p>
              <div className="grid sm:grid-cols-3 gap-4">
                {miniPackages.map((pkg, i) => (
                  <div key={i} className="bg-white rounded-2xl p-4 border border-black/5">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm font-semibold text-[#2D3436]">{pkg.title}</h4>
                      <span className="text-sm font-bold text-[#00b894]">{pkg.price}</span>
                    </div>
                    <p className="text-xs text-[#2D3436]/60 leading-relaxed">{pkg.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="faq" className="mt-0">
            <div className="max-w-[900px] mx-auto">
              <Accordion type="single" collapsible className="w-full glass-card rounded-3xl p-2 md:p-4 bg-[#FDFBF7]">
                {faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="border-black/10 px-4 md:px-6">
                    <AccordionTrigger className="text-left text-base font-medium text-[#2D3436] hover:text-[#00b894] hover:no-underline py-4">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-[#2D3436]/70 leading-relaxed pb-4">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

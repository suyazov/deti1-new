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
  Check, Sparkles, ArrowRight,
} from 'lucide-react';

const advantages = [
  { icon: Video, title: 'Онлайн-видеонаблюдение', desc: 'Родители всегда видят, как чувствует себя ребёнок' },
  { icon: ShieldCheck, title: 'Безопасность', desc: 'Безопасная среда и строгое соблюдение всех норм СанПиН' },
  { icon: FileBadge, title: 'Лицензия', desc: 'Официальная лицензия — оплата материнским капиталом' },
  { icon: Stethoscope, title: 'Медицинский уход', desc: 'В каждом саду работает медицинский работник' },
  { icon: UtensilsCrossed, title: 'Полноценное питание', desc: 'Чёткий режим дня и тёплая, комфортная атмосфера' },
  { icon: GraduationCap, title: 'Готовность к школе', desc: 'Программа развития — ребёнок 100% готов к школе' },
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
  { icon: Cloud, title: 'Мечтатели', desc: 'Мечтаете открыть детский сад, но боитесь бюрократии' },
  { icon: Briefcase, title: 'Профессионалы', desc: 'Работаете с детьми и хотите системный бизнес' },
  { icon: TrendingUp, title: 'Инвесторы', desc: 'Ищете устойчивый социально значимый бизнес' },
  { icon: Building2, title: 'Собственники центров', desc: 'Хотите масштабироваться до полноценного сада' },
  { icon: UserCog, title: 'Топ-менеджеры', desc: 'Устали от наёмной работы и хотите работать на себя' },
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
];

export function CompactInfo() {
  const [activeTab, setActiveTab] = useState('advantages');

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="advantages" className="section-light py-12 md:py-16 relative overflow-hidden">
      <div className="glow-orb w-[500px] h-[500px] bg-[#00c9a7]/10 -right-60 top-0" />

      <div className="relative z-10 max-w-[1240px] mx-auto px-5">
        <div className="blur-reveal text-center mb-6 md:mb-8" style={{ transitionDelay: '0.05s' }}>
          <span className="inline-block text-xs font-semibold tracking-[0.12em] uppercase bg-[rgba(0,201,167,0.1)] text-[#00c9a7] border border-[rgba(0,201,167,0.15)] px-4 py-1.5 rounded-full mb-4">
            ВСЁ О ФРАНШИЗЕ
          </span>
          <h2 className="text-[clamp(28px,3.8vw,52px)] font-bold leading-[1.1] tracking-tight text-[#1a1a1a] max-w-3xl mx-auto">
            Всё необходимое в одном месте
          </h2>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full max-w-2xl mx-auto mb-6 md:mb-8 grid grid-cols-5 h-auto p-1 bg-[#0a1f1f]/5 rounded-full">
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
                className="rounded-full text-xs md:text-sm data-[state=active]:bg-[#0a1f1f] data-[state=active]:text-white py-2"
              >
                {t.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="advantages" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 stagger-children">
              {advantages.map((a, i) => (
                <div key={i} className="scroll-reveal light-card rounded-2xl p-5 hover:-translate-y-1 hover:shadow-card-hover transition-all duration-300">
                  <div className="w-11 h-11 rounded-xl bg-[rgba(0,201,167,0.1)] flex items-center justify-center mb-4">
                    <a.icon className="w-5 h-5 text-[#00c9a7]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#1a1a1a] mb-1">{a.title}</h3>
                  <p className="text-[#666] text-sm leading-relaxed">{a.desc}</p>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="features" className="mt-0">
            <div className="glass-card rounded-3xl p-6 md:p-10 bg-[#0a1f1f]">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 stagger-children">
                {features.map((f, i) => (
                  <div key={i} className="scroll-reveal flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="w-8 h-8 rounded-lg bg-[#00c9a7]/15 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-[#00c9a7]" />
                    </div>
                    <span className="text-white/90 text-sm font-medium">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="audience" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 stagger-children">
              {audiences.map((a, i) => (
                <div key={i} className="scroll-reveal light-card rounded-2xl p-5 hover:-translate-y-1 hover:shadow-card-hover transition-all duration-300">
                  <div className="w-11 h-11 rounded-xl bg-[rgba(0,201,167,0.1)] flex items-center justify-center mb-4">
                    <a.icon className="w-5 h-5 text-[#00c9a7]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#1a1a1a] mb-1">{a.title}</h3>
                  <p className="text-[#666] text-sm leading-relaxed">{a.desc}</p>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="pricing" className="mt-0">
            <div className="grid md:grid-cols-2 gap-5 max-w-[1000px] mx-auto stagger-children">
              <div className="scroll-reveal glass-card rounded-[28px] p-6 md:p-8 relative overflow-hidden bg-[#0a1f1f]">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00c9a7] to-[#00c9a7]/50" />
                <div className="flex items-center justify-between mb-5">
                  <h3 className="text-xl font-bold text-white">Франшиза «Под ключ»</h3>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase text-[#00c9a7] bg-[#00c9a7]/15 border border-[#00c9a7]/20 px-2.5 py-1 rounded-full">
                    <Sparkles className="w-3 h-3" /> Рекомендуем
                  </span>
                </div>
                <div className="mb-5">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-white">650 000 ₽</span>
                    <span className="text-base text-white/50 line-through">850 000 ₽</span>
                  </div>
                  <p className="text-white/60 text-sm mt-1">Паушальный взнос + 40 000 ₽/мес роялти</p>
                  <p className="text-sm text-[#e73c47] font-medium mt-1">Скидка 200 000 ₽ для первых партнёров</p>
                </div>
                <ul className="space-y-2 mb-6">
                  {franchiseFeatures.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-white/80">
                      <Check className="w-4 h-4 text-[#00c9a7] flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#contact" onClick={(e) => handleClick(e, '#contact')} className="btn-coral w-full py-3 text-sm">
                  Получить КП <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              <div className="scroll-reveal glass-card rounded-[28px] p-6 md:p-8 bg-[#0a1f1f]">
                <h3 className="text-xl font-bold text-white mb-5">Базовый пакет</h3>
                <div className="mb-5">
                  <span className="text-4xl font-bold text-white">300 000 ₽</span>
                  <p className="text-white/60 text-sm mt-1">Единоразово, без роялти</p>
                </div>
                <ul className="space-y-2 mb-6">
                  {docsFeatures.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-white/80">
                      <Check className="w-4 h-4 text-white/60 flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#contact" onClick={(e) => handleClick(e, '#contact')} className="inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white border border-white/20 hover:bg-white/10 transition-all duration-200">
                  Получить детали
                </a>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="faq" className="mt-0">
            <div className="max-w-[900px] mx-auto">
              <Accordion type="single" collapsible className="w-full glass-card rounded-3xl p-2 md:p-4 bg-[#0a1f1f]">
                {faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="border-white/10 px-4 md:px-6">
                    <AccordionTrigger className="text-left text-base font-medium text-white hover:text-[#00c9a7] hover:no-underline py-4">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-white/70 leading-relaxed pb-4">
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

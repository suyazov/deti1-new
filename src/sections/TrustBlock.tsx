import { Calendar, ShieldCheck, FileBadge, Award, TrendingUp, CheckCircle } from 'lucide-react';
import { UiCard as Card } from '@/components/ui/UiCard';
import { SectionHeader } from '@/components/ui/SectionHeader';

const trustPoints = [
  {
    icon: Calendar,
    title: 'Действующий сад с 2016 года',
    desc: 'Мы не просто продаём франшизу — каждый день работаем в собственном детском саду и проверяем всё на себе.',
    color: 'text-sky-600' as const,
    bg: 'bg-sky-100' as const,
    border: 'border-sky-200/60' as const,
  },
  {
    icon: ShieldCheck,
    title: 'Образовательная лицензия',
    desc: 'Официальное образование, родители могут оплачивать материнским капиталом.',
    color: 'text-green-600' as const,
    bg: 'bg-green-100' as const,
    border: 'border-green-200/60' as const,
  },
  {
    icon: FileBadge,
    title: 'Торговая марка в ФИПС',
    desc: 'Бренд «Дети в приоритете» зарегистрирован и защищён, № 1019709.',
    color: 'text-yellow-600' as const,
    bg: 'bg-yellow-100' as const,
    border: 'border-yellow-200/60' as const,
  },
  {
    icon: Award,
    title: 'Трёхкратный победитель «Золотого Меркурия»',
    desc: 'Федеральная награда за качество и развитие бизнеса.',
    color: 'text-pink-600' as const,
    bg: 'bg-pink-100' as const,
    border: 'border-pink-200/60' as const,
  },
  {
    icon: TrendingUp,
    title: 'Реальные цифры, а не «золотые горы»',
    desc: 'Показываем риски, точки роста и проверенную финансовую модель — честно и открыто.',
    color: 'text-purple-600' as const,
    bg: 'bg-purple-100' as const,
    border: 'border-purple-200/60' as const,
  },
  {
    icon: CheckCircle,
    title: 'Только то, что работает вживую',
    desc: 'Во франшизу входят только инструменты, которые мы сами используем каждый день.',
    color: 'text-teal-600' as const,
    bg: 'bg-teal-100' as const,
    border: 'border-teal-200/60' as const,
  },
];

export function TrustBlock() {
  return (
    <section className="section-base section-light section-padding overflow-hidden">
      <div className="absolute top-20 right-10 w-3 h-3 rounded-full bg-yellow-300 animate-float pointer-events-none" style={{ animationDelay: '0.3s' }} />
      <div className="absolute bottom-20 left-10 w-2.5 h-2.5 rounded-full bg-pink-300 animate-float pointer-events-none" style={{ animationDelay: '1.5s' }} />

      <div className="relative z-10 container-content">
        <SectionHeader
          badge="Почему нам доверяют"
          title="Мы не теоретики. Мы работаем в этом бизнесе каждый день"
          description="с 2016 года"
        />

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-stretch">
          <Card padding="none" className="relative overflow-hidden group min-h-[400px] lg:min-h-0">
            <img
              src="/anna-white-laptop.jpg"
              alt="Анна Суязова, основатель сети «Дети в приоритете»"
              loading="lazy"
              width="853"
              height="1280"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <blockquote className="text-white text-base md:text-lg font-medium leading-relaxed mb-3">
                «Я сама прошла через трудности и хочу, чтобы вы не повторяли этих ошибок. Моя цель — помочь открыть детский сад правильно, спокойно и без финансовых потерь.»
              </blockquote>
              <p className="text-white/80 text-sm md:text-base">Анна Суязова, основатель сети</p>
            </div>
          </Card>

          <div className="grid sm:grid-cols-2 gap-4 stagger-children">
            {trustPoints.map((p, i) => (
              <Card key={i} variant="hover" padding="lg" className="relative overflow-hidden">
                <div className={`absolute top-0 left-0 right-0 h-1 ${p.bg.replace('bg-', 'bg-gradient-to-r from-')} to-white/0`} />
                <div className={`w-12 h-12 rounded-xl ${p.bg} border ${p.border} flex items-center justify-center mb-4`}>
                  <p.icon className={`w-6 h-6 ${p.color}`} />
                </div>
                <h3 className="text-base lg:text-lg font-semibold text-[#2D3436] mb-2 leading-tight">{p.title}</h3>
                <p className="text-sm text-[#636e72] leading-relaxed">{p.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

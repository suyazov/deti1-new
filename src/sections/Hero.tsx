import { ArrowRight, BarChart3, Check, ShieldCheck } from 'lucide-react';
import { UiButton as Button } from '@/components/ui/UiButton';

const proofPoints = [
  'Практика в детском бизнесе с 2016 года',
  'Финансовая модель, которую можно проверить на своих параметрах',
  'Несколько форматов: франшиза, запуск под своим брендом или документы',
];

export function Hero() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden hero-gradient pt-24 sm:pt-28 lg:pt-32 pb-10 sm:pb-14 lg:pb-20">
      <div className="absolute -top-24 -right-20 w-[420px] h-[420px] rounded-full bg-sky-200/35 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-28 -left-16 w-[360px] h-[360px] rounded-full bg-rose-200/30 blur-3xl pointer-events-none" />

      <div className="container-content relative z-10">
        <div className="grid lg:grid-cols-[1.05fr_.95fr] gap-8 lg:gap-14 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/75 border border-black/5 px-3.5 py-2 text-sm font-semibold text-[#005a4f] shadow-sm mb-5">
              <ShieldCheck className="w-4 h-4" />
              Франшиза и запуск под своим брендом
            </div>

            <h1 className="text-[2.35rem] sm:text-5xl lg:text-[3.7rem] leading-[1.04] font-black tracking-[-0.035em] text-[#263234] mb-5">
              Откройте частный детский сад с понятным планом запуска
            </h1>

            <p className="text-lg sm:text-xl text-[#5f6b6d] leading-relaxed max-w-xl mb-7">
              Помогаем пройти путь от помещения и документов до команды, процессов и привлечения родителей. Вы выбираете глубину поддержки — мы показываем, что входит в каждый формат.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-7">
              <Button size="lg" className="w-full sm:w-auto" onClick={() => scrollTo('#pricing')}>
                Посмотреть форматы <ArrowRight className="w-4 h-4" />
              </Button>
              <Button variant="secondary" size="lg" className="w-full sm:w-auto" onClick={() => scrollTo('#calculator')}>
                <BarChart3 className="w-4 h-4" /> Рассчитать экономику
              </Button>
            </div>

            <ul className="grid gap-2.5 text-sm sm:text-base text-[#445052]">
              {proofPoints.map((point) => (
                <li key={point} className="flex items-start gap-2.5">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-[#00897b]/12 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#00796b]" />
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative min-h-[420px] sm:min-h-[500px] lg:min-h-[570px]">
            <div className="absolute inset-0 rounded-[2.5rem] bg-white/45 border border-white/80 shadow-[0_30px_90px_rgba(45,52,54,.12)] rotate-[1.5deg]" />
            <div className="absolute inset-3 sm:inset-4 rounded-[2.15rem] overflow-hidden -rotate-[1deg] bg-white">
              <img
                src="/photos/kids-classroom-floor.jpeg"
                alt="Дети на занятии в детском саду «Дети в приоритете»"
                className="w-full h-full object-cover"
                width="1200"
                height="1600"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
              <div className="absolute left-5 right-5 bottom-5 sm:left-7 sm:right-7 sm:bottom-7 rounded-2xl bg-white/92 backdrop-blur px-5 py-4 shadow-lg">
                <p className="text-xs uppercase tracking-[.14em] font-bold text-[#00796b] mb-1">Действующая практика</p>
                <p className="text-base sm:text-lg font-bold text-[#263234] leading-snug">Сначала показываем, как устроена модель. Потом предлагаем выбрать формат сотрудничества.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

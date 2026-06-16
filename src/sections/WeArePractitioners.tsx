import { Lightbulb, Users, Wrench, CheckCircle } from 'lucide-react';
import { DoodleStar, DoodleCloud, DoodleZigzag, DoodleLightning, DoodleHeart, DoodleCrown } from '@/components/Doodles';
import { UiCard as Card } from '@/components/ui/UiCard';
import { UiIconBox as IconBox } from '@/components/ui/UiIconBox';
import { SectionHeader } from '@/components/ui/SectionHeader';

const insights = [
  {
    icon: Lightbulb,
    text: 'Что действительно важно родителям',
    color: 'text-yellow-500',
    bg: 'bg-yellow-100',
  },
  {
    icon: Users,
    text: 'Как строится сильная, вовлечённая команда',
    color: 'text-sky-500',
    bg: 'bg-sky-100',
  },
  {
    icon: Wrench,
    text: 'Какие инструменты дают результат, а какие — пустая трата времени и сил',
    color: 'text-pink-500',
    bg: 'bg-pink-100',
  },
];

export function WeArePractitioners() {
  return (
    <section className="section-base section-light section-padding relative">
      <DoodleStar className="absolute top-10 right-[4%] text-amber-300/50 rotate-[12deg] hidden lg:block w-32 h-32" />
      <DoodleCloud className="absolute bottom-10 left-[3%] text-sky-300/40 rotate-[-8deg] hidden lg:block w-36 h-36" />
      <DoodleZigzag className="absolute top-1/3 left-[2%] text-pink-300/30 rotate-[6deg] hidden xl:block w-32 h-12" />
      <DoodleLightning className="absolute top-1/4 left-[5%] text-yellow-300/40 rotate-[10deg] hidden xl:block w-24 h-32" />
      <DoodleHeart className="absolute bottom-1/3 right-[3%] text-rose-300/40 hidden xl:block w-28 h-28" />
      <DoodleCrown className="absolute top-1/2 right-[2%] text-violet-300/30 hidden xl:block w-24 h-20" />

      <div className="relative z-10 container-content max-w-[1100px]">
        <SectionHeader
          badge="Опыт, а не теория"
          title="Мы не теоретики. Мы работаем в этом бизнесе каждый день"
          description="с 2016 года"
        />

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-center">
          <div className="blur-reveal" style={{ transitionDelay: '0.1s' } as React.CSSProperties}>
            <p className="text-[#2D3436] font-medium text-base sm:text-lg mb-4">И за это время мы поняли:</p>
            <div className="space-y-3">
              {insights.map((item, i) => (
                <Card key={i} variant="hover" padding="md" className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center flex-shrink-0`}>
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <p className="text-[#2D3436] text-sm sm:text-base leading-relaxed pt-1.5">{item.text}</p>
                </Card>
              ))}
            </div>
            <p className="mt-4 text-[#636e72] text-sm sm:text-base leading-relaxed">
              Во франшизе — только то, что работает вживую. Никакой теории ради теории.
              Только проверенные решения, которые приносят результат.
            </p>
          </div>

          <div className="blur-reveal" style={{ transitionDelay: '0.2s' } as React.CSSProperties}>
            <Card variant="filled" padding="lg" className="relative overflow-hidden bg-[#FDFBF7]">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#00897b]/10 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#dc2626]/10 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10">
                <IconBox icon={CheckCircle} size="lg" variant="teal" className="mb-5" />
                <blockquote className="text-xl sm:text-2xl font-medium leading-relaxed text-[#2D3436] mb-4">
                  «Франшиза основана на опыте, а не на предположениях»
                </blockquote>
                <p className="text-[#636e72] text-sm leading-relaxed">
                  Каждый процесс, каждый документ и каждая цифра в нашей модели проверены на работающих садах.
                  Мы не придумываем — мы берём то, что уже приносит результат, и передаём вам.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Lightbulb, Users, Wrench, CheckCircle } from 'lucide-react';
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
    <section className="section-base section-light section-padding">
      <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-sky-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-pink-200/30 rounded-full blur-3xl pointer-events-none" />

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

import { Lightbulb, Users, Wrench, CheckCircle } from 'lucide-react';

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
    <section className="section-light py-12 md:py-16 xl:py-10 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-sky-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-pink-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-[1100px] mx-auto px-4 sm:px-5">
        <div className="blur-reveal text-center mb-6 md:mb-8 xl:mb-6" style={{ transitionDelay: '0.05s' }}>
          <span className="inline-block text-[10px] font-semibold tracking-[0.12em] uppercase bg-sky-100 text-sky-600 px-3 py-1 rounded-full mb-3">
            ОПЫТ, А НЕ ТЕОРИЯ
          </span>
          <h2 className="text-[clamp(26px,5vw,52px)] xl:text-[clamp(28px,3.5vw,44px)] font-bold leading-[1.1] tracking-tight text-[#1a1a1a] max-w-3xl mx-auto">
            Мы не теоретики. Мы работаем в этом бизнесе каждый день
          </h2>
          <p className="mt-3 text-lg md:text-xl font-semibold text-[#00796b]">с 2016 года</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 xl:gap-6 items-center">
          <div className="blur-reveal" style={{ transitionDelay: '0.1s' }}>
            <p className="text-[#1a1a1a] font-medium text-base sm:text-lg mb-4">И за это время мы поняли:</p>
            <div className="space-y-3">
              {insights.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 bg-white rounded-2xl p-4 border border-black/5 hover:shadow-md transition-all duration-300"
                >
                  <div className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center flex-shrink-0`}>
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <p className="text-[#1a1a1a] text-sm sm:text-base leading-relaxed pt-1.5">{item.text}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-[#636e72] text-sm sm:text-base leading-relaxed">
              Во франшизе — только то, что работает вживую. Никакой теории ради теории.
              Только проверенные решения, которые приносят результат.
            </p>
          </div>

          <div className="blur-reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="bg-[#FDFBF7] rounded-2xl md:rounded-3xl p-6 md:p-8 text-[#2D3436] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#00796b]/10 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#dc2626]/10 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-[#00796b]/15 flex items-center justify-center mb-5">
                  <CheckCircle className="w-6 h-6 text-[#00796b]" />
                </div>
                <blockquote className="text-xl sm:text-2xl xl:text-xl font-medium leading-relaxed mb-4">
                  «Франшиза основана на опыте, а не на предположениях»
                </blockquote>
                <p className="text-[#636e72] text-sm leading-relaxed">
                  Каждый процесс, каждый документ и каждая цифра в нашей модели проверены на работающих садах.
                  Мы не придумываем — мы берём то, что уже приносит результат, и передаём вам.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

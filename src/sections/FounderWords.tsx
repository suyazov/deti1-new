import { Send, Globe } from 'lucide-react';

export function FounderWords() {
  return (
    <section id="founder" className="section-light py-14 md:py-20 xl:py-16 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-5">
        <div className="text-center mb-8 md:mb-12 blur-reveal" style={{ transitionDelay: '0.05s' }}>
          <span className="inline-block text-[11px] sm:text-xs font-semibold tracking-[0.12em] uppercase bg-[rgba(0,137,123,0.1)] text-[#00897b] border border-[rgba(0,137,123,0.15)] px-4 py-1.5 rounded-full mb-4">
            СЛОВО ОСНОВАТЕЛЯ
          </span>
          <h2 className="text-[clamp(26px,4vw,44px)] xl:text-[clamp(28px,3.5vw,40px)] font-bold leading-[1.1] tracking-tight text-[#2D3436]">
            С искренностью и заботой
          </h2>
        </div>

        <div className="blur-reveal bg-white rounded-[32px] md:rounded-[40px] p-5 sm:p-8 md:p-10 lg:p-12 shadow-[0_4px_30px_rgba(0,0,0,0.04)] border border-black/5" style={{ transitionDelay: '0.1s' }}>
          <div className="grid md:grid-cols-[280px,1fr] lg:grid-cols-[320px,1fr] gap-8 lg:gap-14 items-start">
            {/* Photo column */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="relative w-full max-w-[280px] lg:max-w-[320px]">
                <div className="absolute inset-2 bg-gradient-to-br from-[#00897b]/15 to-[#dc2626]/10 rounded-[24px] blur-2xl" />
                <img
                  src="/photos/anna-white.jpeg"
                  alt="Анна Суязова — основатель франшизы «Дети в приоритете»"
                  width="320"
                  height="400"
                  loading="lazy"
                  className="relative w-full h-auto rounded-[24px] object-cover aspect-[4/5] shadow-lg ring-4 ring-white"
                />
              </div>

              <div className="mt-5">
                <p className="text-lg md:text-xl font-bold text-[#2D3436]">Анна Суязова</p>
                <p className="text-[#636e72] text-sm">Основатель франшизы</p>
              </div>

              <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-4">
                <a
                  href="https://t.me/suyazovaa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#00897b]/10 hover:bg-[#00897b]/15 text-[#00796b] rounded-full px-4 py-2 text-sm font-medium transition-colors"
                >
                  <Send className="w-4 h-4" />
                  Telegram-канал
                </a>
                <a
                  href="https://max.ru/join/ztz-wH7eN8noF7sbsNFmW9qSG_lJuh2i0rYbAVlksKg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#00897b]/10 hover:bg-[#00897b]/15 text-[#00796b] rounded-full px-4 py-2 text-sm font-medium transition-colors"
                >
                  <Globe className="w-4 h-4" />
                  MAX
                </a>
              </div>
            </div>

            {/* Text column */}
            <div className="flex flex-col justify-center">
              <p className="text-xl sm:text-2xl font-medium text-[#2D3436] leading-snug mb-6">
                Моя цель — помочь девушкам открыть детский сад правильно, спокойно и без финансовых потерь.
              </p>

              <div className="space-y-4 text-[#636e72] text-sm md:text-base leading-relaxed mb-8">
                <p>
                  В наших садах — уважение к детям, внимание к запросам родителей и забота о каждом сотруднике.
                  Мы создаём пространство, где комфортно всем: детям, родителям, команде и партнёрам.
                </p>
                <p>
                  С вами — честно и открыто: не обещаем «золотые горы», а показываем реальные цифры, риски и точки роста.
                </p>
              </div>

              <blockquote className="relative bg-[#00897b]/[0.06] rounded-2xl p-5 md:p-6 mb-8">
                <p className="relative z-10 text-[#2D3436] text-sm md:text-base leading-relaxed italic">
                  Я сама прошла через трудности и хочу, чтобы вы не повторяли этих ошибок.
                  Хочу, чтобы дети были окружены заботой, уважением со стороны взрослых,
                  получали качественное образование и находились в безопасной среде.
                </p>
              </blockquote>

              <p className="text-sm text-[#636e72] border-t border-black/10 pt-5 leading-relaxed">
                С 2015 года в сфере дошкольного развития. Управляю работающими детскими садами, которые открыла с нуля.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

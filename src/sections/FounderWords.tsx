import { Quote, Send, Globe } from 'lucide-react';

export function FounderWords() {
  return (
    <section className="section-dark py-12 md:py-16 xl:py-10 relative overflow-hidden">
      <div className="glow-orb w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-[#00796b]/10 -left-40 md:-left-60 top-1/2" />

      <div className="relative z-10 max-w-[1100px] mx-auto px-4 sm:px-5">
        <div className="blur-reveal text-center mb-6 md:mb-8 xl:mb-5" style={{ transitionDelay: '0.05s' }}>
          <span className="inline-block text-[11px] sm:text-xs font-semibold tracking-[0.12em] uppercase bg-black/5 text-[#00796b] border border-black/10 px-3 sm:px-4 py-1.5 rounded-full mb-3 sm:mb-4">
            СЛОВО ОСНОВАТЕЛЯ
          </span>
          <h2 className="text-[clamp(24px,5vw,52px)] xl:text-[clamp(26px,3.5vw,44px)] font-bold leading-[1.1] tracking-tight text-[#2D3436] max-w-3xl mx-auto">
            С искренностью и заботой
          </h2>
        </div>

        <div className="glass-card rounded-3xl p-6 md:p-10 xl:p-8 relative">
          <Quote className="absolute top-6 left-6 w-10 h-10 md:w-14 md:h-14 text-[#00796b]/20" />

          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-[1fr,260px] gap-6 md:gap-8 items-start mb-6">
              <div className="space-y-4 text-[#2D3436]/80 text-sm sm:text-base xl:text-sm leading-relaxed">
                <p className="text-lg sm:text-xl md:text-2xl xl:text-xl font-medium text-[#2D3436] leading-relaxed">
                  Моя цель — помочь девушкам открыть детский сад правильно, спокойно и без финансовых потерь.
                </p>
                <p>
                  В наших садах — уважение к детям, внимание к запросам родителей и забота о каждом сотруднике.
                  Мы создаём пространство, где комфортно всем: детям, родителям, команде и партнёрам.
                </p>
                <p>
                  С вами — честно и открыто: не обещаем «золотые горы», а показываем реальные цифры, риски и точки роста.
                </p>
              </div>

              <div className="mx-auto md:mx-0 w-full max-w-[260px]">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00796b]/20 to-[#dc2626]/10 rounded-2xl blur-xl" />
                  <img
                    src="/photos/anna-white.jpeg"
                    alt="Анна Суязова — основатель франшизы «Дети в приоритете»"
                    width="260"
                    height="320"
                    loading="lazy"
                    className="relative w-full h-auto rounded-2xl object-cover aspect-[4/5] shadow-lg"
                  />
                </div>
                <div className="mt-3 text-center md:text-left">
                  <p className="text-[#2D3436] font-semibold text-base">Анна Суязова</p>
                  <p className="text-[#636e72] text-sm">Основатель франшизы</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border-l-4 border-[#00796b] bg-black/5 p-5 md:p-6 mb-6">
              <p className="text-[#2D3436]/90 text-sm sm:text-base xl:text-sm leading-relaxed italic">
                «Я сама прошла через трудности и хочу, чтобы вы не повторяли этих ошибок.
                Хочу, чтобы дети были окружены заботой, уважением со стороны взрослых,
                получали качественное образование и находились в безопасной среде»
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-black/10">
              <p className="text-[#636e72] text-xs mt-1">С 2015 года в сфере дошкольного развития. Управляю работающими детскими садами, которые открыла с нуля.</p>

              <div className="mt-4">
                <p className="text-xs text-[#636e72] mb-3">Следите за развитием сети в каналах основателя</p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://t.me/suyazovaa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-2 text-sm text-[#2D3436]/80 hover:bg-[#00796b]/10 hover:border-[#00796b]/30 transition-colors"
                  >
                    <Send className="w-4 h-4 text-[#00796b]" />
                    Telegram-канал
                  </a>
                  <a
                    href="https://max.ru/join/ztz-wH7eN8noF7sbsNFmW9qSG_lJuh2i0rYbAVlksKg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-2 text-sm text-[#2D3436]/80 hover:bg-[#00796b]/10 hover:border-[#00796b]/30 transition-colors"
                  >
                    <Globe className="w-4 h-4 text-[#00796b]" />
                    MAX
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

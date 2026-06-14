import { Quote, Send, Globe } from 'lucide-react';

export function FounderWords() {
  return (
    <section className="section-dark py-12 md:py-16 xl:py-10 relative overflow-hidden">
      <div className="glow-orb w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-[#00c9a7]/10 -left-40 md:-left-60 top-1/2" />

      <div className="relative z-10 max-w-[1100px] mx-auto px-4 sm:px-5">
        <div className="blur-reveal text-center mb-6 md:mb-8 xl:mb-5" style={{ transitionDelay: '0.05s' }}>
          <span className="inline-block text-[11px] sm:text-xs font-semibold tracking-[0.12em] uppercase bg-white/10 text-[#00c9a7] border border-white/10 px-3 sm:px-4 py-1.5 rounded-full mb-3 sm:mb-4">
            СЛОВО ОСНОВАТЕЛЯ
          </span>
        </div>

        <div className="glass-card rounded-3xl p-6 md:p-10 xl:p-8 relative">
          <Quote className="absolute top-6 left-6 w-10 h-10 md:w-14 md:h-14 text-[#00c9a7]/20" />

          <div className="relative z-10 max-w-4xl mx-auto">
            <p className="text-lg sm:text-xl md:text-2xl xl:text-xl font-medium text-white leading-relaxed mb-6">
              Мы вложили в ваш будущий результат сотни миллионов рублей и{' '}
              <span className="text-[#00c9a7]">тысячи часов</span> усердной работы.
            </p>

            <div className="space-y-4 text-white/70 text-sm sm:text-base xl:text-sm leading-relaxed">
              <p>
                Эти цифры — не просто показатель масштаба. Это сотни переговоров, проработанные сметы, сотни педагогов.
                Это ошибки, которые мы уже пережили за других партнёров. И каждый раз мы находили решение и превращали опыт в систему.
              </p>
              <p>
                Теперь всё это работает на вас. Вы заходите в проект с командой, которая уже знает, как избежать большинства рисков.
              </p>
              <p>
                Сеть «Дети в приоритете» — доказательство того, что модель работает в разных городах, районах, условиях.
                А ещё это тысячи детей и родителей, которые выбрали нас.
              </p>
              <p className="text-white font-medium">
                Мы будем рядом, чтобы ваш филиал стал следующим успешным примером.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-white font-semibold text-base">Анна Игоревна Суязова</p>
              <p className="text-white/50 text-sm">Основатель и генеральный директор сети</p>

              <div className="mt-4">
                <p className="text-xs text-white/40 mb-3">Следите за развитием сети в каналах основателя</p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://t.me/suyazovaa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-2 text-sm text-white/80 hover:bg-[#00c9a7]/10 hover:border-[#00c9a7]/30 transition-colors"
                  >
                    <Send className="w-4 h-4 text-[#00c9a7]" />
                    Telegram-канал
                  </a>
                  <a
                    href="https://max.ru/join/ztz-wH7eN8noF7sbsNFmW9qSG_lJuh2i0rYbAVlksKg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-2 text-sm text-white/80 hover:bg-[#00c9a7]/10 hover:border-[#00c9a7]/30 transition-colors"
                  >
                    <Globe className="w-4 h-4 text-[#00c9a7]" />
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

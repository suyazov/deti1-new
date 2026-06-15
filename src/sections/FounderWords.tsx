import { Send, Globe } from 'lucide-react';
import { UiCard as Card } from '@/components/ui/UiCard';
import { UiButton as Button } from '@/components/ui/UiButton';
import { SectionHeader } from '@/components/ui/SectionHeader';

export function FounderWords() {
  return (
    <section id="founder" className="section-base section-light section-padding">
      <div className="container-content">
        <SectionHeader
          badge="Слово основателя"
          title="С искренностью и заботой"
        />

        <Card padding="lg" className="blur-reveal">
          <div className="grid md:grid-cols-[280px,1fr] lg:grid-cols-[320px,1fr] gap-8 lg:gap-14 items-start">
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
                <Button asChild variant="ghost" size="sm">
                  <a href="https://t.me/suyazovaa" target="_blank" rel="noopener noreferrer">
                    <Send className="w-4 h-4" /> Telegram-канал
                  </a>
                </Button>
                <Button asChild variant="ghost" size="sm">
                  <a href="https://max.ru/join/ztz-wH7eN8noF7sbsNFmW9qSG_lJuh2i0rYbAVlksKg" target="_blank" rel="noopener noreferrer">
                    <Globe className="w-4 h-4" /> MAX
                  </a>
                </Button>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <p className="text-xl sm:text-2xl font-medium text-[#2D3436] leading-snug mb-6">
                Моя цель — помочь девушкам открыть детский сад правильно, спокойно и без финансовых потерь.
              </p>

              <div className="space-y-4 text-body text-sm md:text-base leading-relaxed mb-8">
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
        </Card>
      </div>
    </section>
  );
}

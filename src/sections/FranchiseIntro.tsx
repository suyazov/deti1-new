import { Layers, Clock } from 'lucide-react';
import { FurryCharacters } from '@/components/FurryCharacters';
import { UiIconBox as IconBox } from '@/components/ui/UiIconBox';
import { DoodleStar, DoodleSmile } from '@/components/Doodles';

export function FranchiseIntro() {
  return (
    <section className="section-base section-light section-padding relative overflow-hidden">
      <DoodleStar className="absolute top-12 right-[5%] text-amber-300/40 rotate-[12deg] hidden lg:block w-28 h-28" />
      <DoodleSmile className="absolute bottom-12 left-[4%] text-pink-300/40 rotate-[-8deg] hidden lg:block w-24 h-24" />

      <div className="relative z-10 container-content">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="order-2 lg:order-1">
            <FurryCharacters className="w-full max-w-md mx-auto lg:max-w-none" />
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-[clamp(26px,4vw,40px)] font-bold leading-tight text-[#2D3436] mb-6">
              Откройте частный детский сад по готовой модели:
            </h2>

            <div className="space-y-5 mb-8">
              <div className="flex items-start gap-4">
                <IconBox icon={Layers} size="lg" variant="teal" />
                <div>
                  <p className="text-base sm:text-lg text-[#2D3436] leading-relaxed">
                    CRM, маркетинг, документы и сопровождение включены.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <IconBox icon={Clock} size="lg" variant="pastel" />
                <div>
                  <p className="text-base sm:text-lg text-[#2D3436] leading-relaxed">
                    Путь от идеи до первых доходов — за 2–3 месяца.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#00897b]/10 rounded-2xl p-5 sm:p-6 mb-6">
              <p className="text-lg sm:text-xl font-semibold text-[#2D3436] leading-snug">
                90% ошибок, которые допускают новички, можно не совершать.
              </p>
            </div>

            <p className="text-base sm:text-lg text-[#636e72] leading-relaxed">
              Франшиза «Дети в приоритете» — это не просто бренд, это путь, который вы пройдёте с поддержкой.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

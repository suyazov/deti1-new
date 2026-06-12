import { useState, useMemo, useEffect } from 'react';
import { Calculator, Users, Banknote, Building2, TrendingUp, Minus, Equal } from 'lucide-react';

function formatMoney(value: number) {
  return new Intl.NumberFormat('ru-RU').format(Math.round(value));
}

function RangeInput({
  label,
  icon: Icon,
  value,
  min,
  max,
  step,
  unit,
  onChange,
}: {
  label: string;
  icon: React.ElementType;
  value: number;
  min: number;
  max: number;
  step: number;
  unit: string;
  onChange: (value: number) => void;
}) {
  const [localValue, setLocalValue] = useState(value);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-white/80">
          <Icon className="w-4 h-4 text-[#00c9a7]" />
          <span className="text-sm font-medium">{label}</span>
        </div>
        <div className="text-right">
          <span className="text-lg font-bold text-white">{formatMoney(localValue)}</span>
          <span className="text-xs text-white/50 ml-1">{unit}</span>
        </div>
      </div>
      <input
        id={`range-${label}`}
        type="range"
        min={min}
        max={max}
        step={step}
        value={localValue}
        aria-label={label}
        onChange={(e) => {
          const val = Number(e.target.value);
          setLocalValue(val);
          onChange(val);
        }}
        className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-white/10 accent-[#00c9a7] hover:accent-[#00b597] focus:outline-none focus:ring-2 focus:ring-[#00c9a7]/30"
        style={{
          background: `linear-gradient(to right, #00c9a7 0%, #00c9a7 ${((localValue - min) / (max - min)) * 100}%, rgba(255,255,255,0.1) ${((localValue - min) / (max - min)) * 100}%, rgba(255,255,255,0.1) 100%)`,
        }}
      />
      <div className="flex justify-between text-[11px] text-white/60">
        <span>{formatMoney(min)}</span>
        <span>{formatMoney(max)}</span>
      </div>
    </div>
  );
}

export function ProfitCalculator() {
  const [children, setChildren] = useState(30);
  const [avgCheck, setAvgCheck] = useState(31500);
  const [rent, setRent] = useState(85000);

  const calculation = useMemo(() => {
    const revenue = children * avgCheck;

    // Personnel (simplified norms)
    const managers = 70000; // managing director
    const admin = 45000; // administrator
    const teachersCount = Math.max(2, Math.ceil(children / 15));
    const teachersSalary = teachersCount * 45000;
    const assistantsSalary = teachersCount * 35000;
    const nurse = 35000;
    const accountant = 20000;
    const payrollTax = (admin + teachersSalary + assistantsSalary + nurse + accountant) * 0.3;
    const personnel = managers + admin + teachersSalary + assistantsSalary + nurse + accountant + payrollTax;

    // Variable expenses
    const food = children * 8200;
    const acquiring = revenue * 0.015;
    const otherVariable = revenue * 0.02;

    // Fixed expenses
    const utilities = 15000;
    const marketing = 25000;

    const totalExpenses = personnel + food + acquiring + otherVariable + rent + utilities + marketing;
    const operatingProfit = revenue - totalExpenses;

    return {
      revenue,
      personnel,
      food,
      acquiring,
      otherVariable,
      rent,
      utilities,
      marketing,
      totalExpenses,
      operatingProfit,
    };
  }, [children, avgCheck, rent]);

  return (
    <section id="calculator" className="section-dark py-10 md:py-14 xl:py-8 relative overflow-hidden">
      <div className="glow-orb w-[400px] h-[400px] bg-[#00c9a7]/10 -left-40 top-0" />
      <div className="glow-orb w-[300px] h-[300px] bg-[#e73c47]/5 -right-40 bottom-0" />

      <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-5">
        <div className="text-center mb-5 md:mb-6 xl:mb-4">
          <span className="inline-block text-xs font-semibold tracking-[0.12em] uppercase bg-[rgba(0,201,167,0.1)] text-[#00c9a7] border border-[rgba(0,201,167,0.15)] px-4 py-1.5 rounded-full mb-4">
            КАЛЬКУЛЯТОР
          </span>
          <h2 className="text-[clamp(26px,3.5vw,48px)] xl:text-[clamp(24px,3vw,40px)] font-bold leading-[1.1] tracking-tight text-white max-w-3xl mx-auto mb-3">
            Оцените операционную прибыль своего сада
          </h2>
          <p className="text-white/60 max-w-xl mx-auto text-sm xl:text-xs">
            Подвигайте ползунки — это упрощённая оценка. Полный расчёт с точками безубыточности и сценариями — в пакете франшизы.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Inputs */}
          <div className="glass-card rounded-3xl p-5 md:p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-[#00c9a7]/15 flex items-center justify-center">
                <Calculator className="w-4.5 h-4.5 text-[#00c9a7]" />
              </div>
              <h3 className="text-base font-semibold text-white">Параметры</h3>
            </div>

            <div className="space-y-4 md:space-y-5">
              <RangeInput
                label="Количество детей"
                icon={Users}
                value={children}
                min={10}
                max={200}
                step={1}
                unit="чел."
                onChange={setChildren}
              />
              <RangeInput
                label="Средний чек"
                icon={Banknote}
                value={avgCheck}
                min={20000}
                max={100000}
                step={500}
                unit="₽/мес"
                onChange={setAvgCheck}
              />
              <RangeInput
                label="Аренда помещения"
                icon={Building2}
                value={rent}
                min={50000}
                max={1000000}
                step={5000}
                unit="₽/мес"
                onChange={setRent}
              />
            </div>
          </div>

          {/* Result */}
          <div className="flex flex-col gap-4">
            <div className="glass-card rounded-3xl p-5 md:p-6 flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-[#e73c47]/15 flex items-center justify-center">
                  <TrendingUp className="w-4.5 h-4.5 text-[#e73c47]" />
                </div>
                <h3 className="text-base font-semibold text-white">Результат в месяц</h3>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 rounded-2xl bg-white/5">
                  <span className="text-white/70 text-sm">Выручка</span>
                  <span className="text-lg font-bold text-white">{formatMoney(calculation.revenue)} ₽</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-2xl bg-white/5">
                  <span className="text-white/70 text-sm">Расходы</span>
                  <span className="text-lg font-bold text-white">{formatMoney(calculation.totalExpenses)} ₽</span>
                </div>

                <div className="flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-[#00c9a7]/20 to-[#00c9a7]/5 border border-[#00c9a7]/20">
                  <span className="text-white font-medium text-sm">Прогноз операционной прибыли</span>
                  <span className={`text-2xl md:text-3xl font-bold ${calculation.operatingProfit >= 0 ? 'text-[#00c9a7]' : 'text-[#e73c47]'}`}>
                    {formatMoney(calculation.operatingProfit)} ₽
                  </span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-[11px] text-white/60 leading-relaxed">
                  Расчёт приблизительный: включает персонал, питание, эквайринг, аренду, коммунальные услуги и базовый маркетинг. Не учитывает амортизацию, налоги на прибыль/патент и капитальные затраты. Точные цифры зависят от города, помещения и выбранного пакета.
                </p>
              </div>
            </div>

            {/* Mini formula visualization */}
            <div className="glass-card rounded-2xl p-3 flex items-center justify-center gap-2 text-white/60 text-xs flex-wrap">
              <span className="bg-white/5 px-2.5 py-1 rounded-lg">Выручка</span>
              <Minus className="w-3.5 h-3.5" />
              <span className="bg-white/5 px-2.5 py-1 rounded-lg">Расходы</span>
              <Equal className="w-3.5 h-3.5" />
              <span className="bg-[#00c9a7]/10 text-[#00c9a7] px-2.5 py-1 rounded-lg font-medium">Операционная прибыль</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

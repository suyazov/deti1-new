import { useState, useMemo, useEffect } from 'react';
import { Calculator, Users, Banknote, Building2, TrendingUp, Minus, Equal } from 'lucide-react';
import { UiCard as Card } from './ui/UiCard';
import { UiIconBox as IconBox } from './ui/UiIconBox';
import { SectionHeader } from './ui/SectionHeader';

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
        <div className="flex items-center gap-2 text-[#2D3436]/80">
          <Icon className="w-4 h-4 text-[#00897b]" />
          <span className="text-sm font-medium">{label}</span>
        </div>
        <div className="text-right">
          <span className="text-lg font-bold text-[#2D3436]">{formatMoney(localValue)}</span>
          <span className="text-xs text-[#636e72] ml-1">{unit}</span>
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
        className="w-full h-3 rounded-lg appearance-none cursor-pointer accent-[#00897b] hover:accent-[#00796b] focus:outline-none focus:ring-2 focus:ring-[#00897b]/30 range-track-light"
        style={{
          background: `linear-gradient(to right, #00897b 0%, #00897b ${((localValue - min) / (max - min)) * 100}%, #9ca3af ${((localValue - min) / (max - min)) * 100}%, #9ca3af 100%)`,
        }}
      />
      <div className="flex justify-between text-[11px] text-[#636e72]">
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
    <section id="calculator" className="section-light py-10 md:py-14 xl:py-8 relative overflow-hidden">
      <div className="glow-orb w-[400px] h-[400px] bg-[#00897b]/10 -left-40 top-0" />
      <div className="glow-orb w-[300px] h-[300px] bg-[#dc2626]/5 -right-40 bottom-0" />

      <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-5">
        <div className="text-center mb-5 md:mb-6 xl:mb-4">
          <SectionHeader
            badge="Калькулятор"
            title="Оцените операционную прибыль своего сада"
            description="Подвигайте ползунки — это упрощённая оценка. Полный расчёт с точками безубыточности и сценариями — в пакете франшизы."
            align="center"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Inputs */}
          <Card variant="default" padding="md" className="border border-black/5 shadow-card">
            <div className="flex items-center gap-3 mb-4">
              <IconBox icon={Calculator} variant="teal" size="sm" />
              <h3 className="text-base font-semibold text-[#2D3436]">Параметры</h3>
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
          </Card>

          {/* Result */}
          <div className="flex flex-col gap-4">
            <Card variant="default" padding="md" className="flex-1 border border-black/5 shadow-card">
              <div className="flex items-center gap-3 mb-4">
                <IconBox icon={TrendingUp} variant="coral" size="sm" />
                <h3 className="text-base font-semibold text-[#2D3436]">Результат в месяц</h3>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 rounded-2xl bg-black/5">
                  <span className="text-[#636e72] text-sm">Выручка</span>
                  <span className="text-lg font-bold text-[#2D3436]">{formatMoney(calculation.revenue)} ₽</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-2xl bg-black/5">
                  <span className="text-[#636e72] text-sm">Расходы</span>
                  <span className="text-lg font-bold text-[#2D3436]">{formatMoney(calculation.totalExpenses)} ₽</span>
                </div>

                <div className="flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-[#00897b]/20 to-[#00897b]/5 border border-[#00897b]/20">
                  <span className="text-[#2D3436] font-medium text-sm">Прогноз операционной прибыли</span>
                  <span className={`text-2xl md:text-3xl font-bold ${calculation.operatingProfit >= 0 ? 'text-[#005a4f]' : 'text-[#dc2626]'}`}>
                    {formatMoney(calculation.operatingProfit)} ₽
                  </span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-black/10">
                <p className="text-[11px] text-[#636e72] leading-relaxed">
                  Расчёт приблизительный: включает персонал, питание, эквайринг, аренду, коммунальные услуги и базовый маркетинг. Не учитывает амортизацию, налоги на прибыль/патент и капитальные затраты. Точные цифры зависят от города, помещения и выбранного пакета.
                </p>
              </div>
            </Card>

            {/* Mini formula visualization */}
            <Card variant="default" padding="sm" className="flex items-center justify-center gap-2 text-[#636e72] text-xs flex-wrap border border-black/5 shadow-card">
              <span className="bg-black/5 px-2.5 py-1 rounded-lg">Выручка</span>
              <Minus className="w-3.5 h-3.5" />
              <span className="bg-black/5 px-2.5 py-1 rounded-lg">Расходы</span>
              <Equal className="w-3.5 h-3.5" />
              <span className="bg-[#00897b]/10 text-[#005a4f] px-2.5 py-1 rounded-lg font-medium">Операционная прибыль</span>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

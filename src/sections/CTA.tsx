import { useState } from 'react';
import { InputMask } from '@react-input/mask';
import { Send, MessageCircle, ArrowRight, Phone, Mail, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { DoodleScribble, DoodleBlob, DoodleHeart, DoodleConfetti } from '@/components/Doodles';
import { UiCard as Card } from '@/components/ui/UiCard';
import { UiButton as Button } from '@/components/ui/UiButton';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { UiIconBox as IconBox } from '@/components/ui/UiIconBox';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export function CTA() {
  const [form, setForm] = useState({ name: '', phone: '', website: '' });
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.website) {
      return;
    }
    setStatus('loading');

    try {
      const response = await fetch('/api/send.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
        }),
      });

      const data = await response.json().catch(() => ({ ok: false, message: 'Ошибка сервера' }));

      if (response.ok && data.ok) {
        setStatus('success');
        setForm({ name: '', phone: '', website: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section-base section-light section-padding relative">
      <DoodleScribble className="absolute top-12 right-[4%] text-teal-300/50 rotate-[8deg] hidden lg:block w-36 h-36" />
      <DoodleBlob className="absolute bottom-8 left-[3%] text-pink-300/30 hidden lg:block w-48 h-48" />
      <DoodleHeart className="absolute top-1/3 left-[2%] text-rose-300/40 hidden xl:block w-32 h-32" />
      <DoodleConfetti className="absolute bottom-1/4 right-[3%] text-amber-300/40 hidden xl:block w-24 h-24" />

      <div className="relative z-10 container-content">
        <SectionHeader
          title="Обсудим ваш проект и выберем подходящий формат"
          description="Оставьте контакт и кратко обозначьте интерес. Следующий шаг — разговор по вашему городу, исходным условиям и нужной глубине поддержки."
        />

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          <Card padding="lg" className="blur-reveal" style={{ transitionDelay: '0.1s' } as React.CSSProperties}>
            <div className="flex items-center gap-3 mb-6">
              <IconBox icon={Send} size="lg" variant="teal" />
              <div>
                <h3 className="text-xl font-bold text-[#2D3436]">Обсудить проект</h3>
                <p className="text-sm text-[#636e72]">Имя и телефон — без длинной анкеты на первом шаге</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Ваше имя"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="pill-input"
              />
              <InputMask
                mask="+7 (___) ___-__-__"
                replacement={{ _: /\d/ }}
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="+7 (___) ___-__-__"
                type="tel"
                required
                className="pill-input"
              />
              <div className="absolute opacity-0 pointer-events-none" aria-hidden="true">
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={form.website}
                  onChange={(e) => setForm({ ...form, website: e.target.value })}
                />
              </div>
              <Button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className="w-full py-4"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" /> Отправка...
                  </>
                ) : status === 'success' ? (
                  <>
                    <CheckCircle className="w-4 h-4" /> Отправлено
                  </>
                ) : (
                  <>
                    Отправить заявку <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </Button>

              {status === 'success' && (
                <p className="flex items-center justify-center gap-2 text-sm text-[#00897b]">
                  <CheckCircle className="w-4 h-4" />
                  Заявка принята интерфейсом. Мы свяжемся с вами по указанному номеру.
                </p>
              )}
              {status === 'error' && (
                <p className="flex items-center justify-center gap-2 text-sm text-[#dc2626]">
                  <AlertCircle className="w-4 h-4" />
                  Не удалось отправить заявку. Попробуйте ещё раз или напишите в мессенджер.
                </p>
              )}

              <p className="text-xs text-[#636e72] text-center">
                Нажимая кнопку, вы соглашаетесь на обработку персональных данных
              </p>
            </form>
          </Card>

          <Card padding="lg" className="blur-reveal relative overflow-hidden" style={{ transitionDelay: '0.2s' } as React.CSSProperties}>
            <div className="absolute top-0 right-0 w-32 h-32 rounded-bl-[4rem] overflow-hidden hidden lg:block">
              <img
                src="/photos/kids-park-friends.jpeg"
                alt="Дети на прогулке"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex items-center gap-3 mb-6 lg:pr-28">
              <IconBox icon={MessageCircle} size="lg" variant="coral" />
              <div>
                <h3 className="text-xl font-bold text-[#2D3436]">Написать в мессенджер</h3>
                <p className="text-sm text-[#636e72]">Ответим быстрее, чем на email</p>
              </div>
            </div>

            <div className="space-y-4 relative z-10">
              <Card variant="outlined" padding="md" className="flex items-center gap-4 group hover:border-[#00897b]/30 transition-colors">
                <IconBox icon={MessageCircle} size="lg" variant="teal" />
                <a href="https://wa.me/79614691333" target="_blank" rel="noopener noreferrer" className="flex-1">
                  <p className="text-sm text-[#636e72]">WhatsApp</p>
                  <p className="text-lg font-semibold text-[#2D3436] group-hover:text-[#00897b] transition-colors">+7 (961) 469-13-33</p>
                </a>
              </Card>

              <Card variant="outlined" padding="md" className="flex items-center gap-4 group hover:border-[#00897b]/30 transition-colors">
                <IconBox icon={Send} size="lg" variant="teal" />
                <a href="https://t.me/anna_suyazova" target="_blank" rel="noopener noreferrer" className="flex-1">
                  <p className="text-sm text-[#636e72]">Telegram</p>
                  <p className="text-lg font-semibold text-[#2D3436] group-hover:text-[#00897b] transition-colors">@anna_suyazova</p>
                </a>
              </Card>

              <Card variant="outlined" padding="md" className="flex items-center gap-4">
                <IconBox icon={Mail} size="lg" variant="pastel" />
                <div className="flex-1">
                  <p className="text-sm text-[#636e72]">Email</p>
                  <p className="text-lg font-semibold text-[#2D3436]">anna@deti1.ru</p>
                </div>
              </Card>
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-[#00897b]/20 rounded-full blur-3xl pointer-events-none hidden lg:block" />
          </Card>
        </div>

        <div className="mt-8 flex justify-center">
          <Button asChild variant="secondary" size="md">
            <a href="tel:+79614691333">
              <Phone className="w-5 h-5 text-[#00897b]" />
              +7 (961) 469-13-33
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

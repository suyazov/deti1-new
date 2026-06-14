import { useState } from 'react';
import { InputMask } from '@react-input/mask';
import { Send, MessageCircle, ArrowRight, Phone, Mail, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export function CTA() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', website: '' });
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Honeypot: if the hidden field is filled, treat as spam
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
          email: form.email,
        }),
      });

      const data = await response.json().catch(() => ({ ok: false, message: 'Ошибка сервера' }));

      if (response.ok && data.ok) {
        setStatus('success');
        setForm({ name: '', phone: '', email: '', website: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section-dark py-12 md:py-16 xl:py-10 relative overflow-hidden">
      <div className="glow-orb w-[700px] h-[700px] bg-[#00b894]/15 -right-60 bottom-0 animate-pulse-glow" />
      <div className="glow-orb w-[500px] h-[500px] bg-[#e73c47]/10 -left-40 top-0" />

      <div className="relative z-10 max-w-[1240px] mx-auto px-5">
        <div className="blur-reveal text-center mb-6 md:mb-8 xl:mb-5" style={{ transitionDelay: '0.05s' }}>
          <h2 className="text-[clamp(32px,4.5vw,56px)] xl:text-[clamp(28px,3.5vw,46px)] font-bold leading-[1.1] tracking-tight text-[#2D3436] max-w-3xl mx-auto">
            Ещё думаете с чего начать?
          </h2>
          <p className="mt-4 xl:mt-3 text-lg xl:text-base text-[#2D3436]/70 max-w-xl mx-auto">
            Оставьте заявку — Анна лично свяжется с вами и поможет выбрать подходящий формат.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {/* Left - Form */}
          <div className="blur-reveal glass-card rounded-[32px] p-5 md:p-8 xl:p-5" style={{ transitionDelay: '0.1s' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-[#00b894]/15 flex items-center justify-center">
                <Send className="w-6 h-6 text-[#00b894]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#2D3436]">Получить презентацию</h3>
                <p className="text-sm text-[#2D3436]/60">Заполните форму — мы вышлем материалы</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 xl:space-y-3">
              <input
                type="text"
                placeholder="Ваше имя"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="pill-input xl:py-3"
              />
              <InputMask
                mask="+7 (___) ___-__-__"
                replacement={{ _: /\d/ }}
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="+7 (___) ___-__-__"
                type="tel"
                required
                className="pill-input xl:py-3"
              />
              <input
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="pill-input xl:py-3"
              />
              {/* Honeypot field — hidden from real users */}
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
              <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className="btn-coral w-full py-4 xl:py-3 text-base mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
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
              </button>

              {status === 'success' && (
                <p className="flex items-center justify-center gap-2 text-sm text-[#00b894]">
                  <CheckCircle className="w-4 h-4" />
                  Заявка отправлена. Анна свяжется с вами в ближайшее время.
                </p>
              )}
              {status === 'error' && (
                <p className="flex items-center justify-center gap-2 text-sm text-[#e73c47]">
                  <AlertCircle className="w-4 h-4" />
                  Не удалось отправить заявку. Попробуйте ещё раз или напишите в мессенджер.
                </p>
              )}

              <p className="text-xs text-[#2D3436]/40 text-center">
                Нажимая кнопку, вы соглашаетесь на обработку персональных данных
              </p>
            </form>
          </div>

          {/* Right - Messengers */}
          <div className="blur-reveal glass-card rounded-[32px] p-5 md:p-8 xl:p-5 relative overflow-hidden" style={{ transitionDelay: '0.2s' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-[#e73c47]/15 flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-[#e73c47]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#2D3436]">Написать в мессенджер</h3>
                <p className="text-sm text-[#2D3436]/60">Ответим быстрее, чем на email</p>
              </div>
            </div>

            <div className="space-y-4 xl:space-y-3 relative z-10">
              <a
                href="https://wa.me/79614691333"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card glass-card-hover rounded-2xl p-5 xl:p-4 flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#00b894]/15 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-[#00b894]" />
                </div>
                <div>
                  <p className="text-sm text-[#2D3436]/50">WhatsApp</p>
                  <p className="text-lg font-semibold text-[#2D3436] group-hover:text-[#00b894] transition-colors">+7 (961) 469-13-33</p>
                </div>
              </a>

              <a
                href="https://t.me/anna_suyazova"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card glass-card-hover rounded-2xl p-5 xl:p-4 flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#00b894]/15 flex items-center justify-center flex-shrink-0">
                  <Send className="w-6 h-6 text-[#00b894]" />
                </div>
                <div>
                  <p className="text-sm text-[#2D3436]/50">Telegram</p>
                  <p className="text-lg font-semibold text-[#2D3436] group-hover:text-[#00b894] transition-colors">@anna_suyazova</p>
                </div>
              </a>

              <div className="glass-card rounded-2xl p-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-black/5 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-[#2D3436]/60" />
                </div>
                <div>
                  <p className="text-sm text-[#2D3436]/50">Email</p>
                  <p className="text-lg font-semibold text-[#2D3436]/80">anna@deti1.ru</p>
                </div>
              </div>
            </div>

            {/* Floating orb between cards */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-[#00b894]/20 rounded-full blur-3xl pointer-events-none hidden lg:block" />
          </div>
        </div>

        {/* Phone pill */}
        <div className="mt-8 xl:mt-5 flex justify-center">
          <a
            href="tel:+79614691333"
            className="inline-flex items-center gap-3 glass-card rounded-full px-6 py-3 text-[#2D3436] hover:bg-black/5 transition-colors"
          >
            <Phone className="w-5 h-5 text-[#00b894]" />
            <span className="font-semibold">+7 (961) 469-13-33</span>
          </a>
        </div>
      </div>
    </section>
  );
}

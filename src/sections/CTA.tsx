import { useState } from 'react';
import { Send, MessageCircle, ArrowRight, Phone, Mail } from 'lucide-react';

export function CTA() {
  const [form, setForm] = useState({ name: '', phone: '', email: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Заявка с сайта от ${form.name}`;
    const body = `Имя: ${form.name}\nТелефон: ${form.phone}\nEmail: ${form.email}`;
    window.location.href = `mailto:info@deti-prioritet.ru?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="section-dark py-12 md:py-16 relative overflow-hidden">
      <div className="glow-orb w-[700px] h-[700px] bg-[#00c9a7]/15 -right-60 bottom-0 animate-pulse-glow" />
      <div className="glow-orb w-[500px] h-[500px] bg-[#e73c47]/10 -left-40 top-0" />

      <div className="relative z-10 max-w-[1240px] mx-auto px-5">
        <div className="blur-reveal text-center mb-6 md:mb-8" style={{ transitionDelay: '0.05s' }}>
          <h2 className="text-[clamp(32px,4.5vw,56px)] font-bold leading-[1.1] tracking-tight text-white max-w-3xl mx-auto">
            Ещё думаете с чего начать?
          </h2>
          <p className="mt-4 text-lg text-white/70 max-w-xl mx-auto">
            Оставьте заявку — Анна лично свяжется с вами и поможет выбрать подходящий формат.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {/* Left - Form */}
          <div className="blur-reveal glass-card rounded-[32px] p-5 md:p-8" style={{ transitionDelay: '0.1s' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-[#00c9a7]/15 flex items-center justify-center">
                <Send className="w-6 h-6 text-[#00c9a7]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Получить презентацию</h3>
                <p className="text-sm text-white/60">Заполните форму — мы вышлем материалы</p>
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
              <input
                type="tel"
                placeholder="+7 (___) ___-__-__"
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="pill-input"
              />
              <input
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="pill-input"
              />
              <button type="submit" className="btn-coral w-full py-4 text-base mt-2">
                Отправить заявку <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-xs text-white/40 text-center">
                Нажимая кнопку, вы соглашаетесь на обработку персональных данных
              </p>
            </form>
          </div>

          {/* Right - Messengers */}
          <div className="blur-reveal glass-card rounded-[32px] p-5 md:p-8 relative overflow-hidden" style={{ transitionDelay: '0.2s' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-[#e73c47]/15 flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-[#e73c47]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Написать в мессенджер</h3>
                <p className="text-sm text-white/60">Ответим быстрее, чем на email</p>
              </div>
            </div>

            <div className="space-y-4 relative z-10">
              <a
                href="https://wa.me/79614691333"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card glass-card-hover rounded-2xl p-5 flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#00c9a7]/15 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-[#00c9a7]" />
                </div>
                <div>
                  <p className="text-sm text-white/50">WhatsApp</p>
                  <p className="text-lg font-semibold text-white group-hover:text-[#00c9a7] transition-colors">+7 (961) 469-13-33</p>
                </div>
              </a>

              <a
                href="https://t.me/anna_suyazova"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card glass-card-hover rounded-2xl p-5 flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#00c9a7]/15 flex items-center justify-center flex-shrink-0">
                  <Send className="w-6 h-6 text-[#00c9a7]" />
                </div>
                <div>
                  <p className="text-sm text-white/50">Telegram</p>
                  <p className="text-lg font-semibold text-white group-hover:text-[#00c9a7] transition-colors">@anna_suyazova</p>
                </div>
              </a>

              <div className="glass-card rounded-2xl p-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white/60" />
                </div>
                <div>
                  <p className="text-sm text-white/50">Email</p>
                  <p className="text-lg font-semibold text-white/80">info@deti-prioritet.ru</p>
                </div>
              </div>
            </div>

            {/* Floating orb between cards */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-[#00c9a7]/20 rounded-full blur-3xl pointer-events-none hidden lg:block" />
          </div>
        </div>

        {/* Phone pill */}
        <div className="mt-8 flex justify-center">
          <a
            href="tel:+79614691333"
            className="inline-flex items-center gap-3 glass-card rounded-full px-6 py-3 text-white hover:bg-white/10 transition-colors"
          >
            <Phone className="w-5 h-5 text-[#00c9a7]" />
            <span className="font-semibold">+7 (961) 469-13-33</span>
          </a>
        </div>
      </div>
    </section>
  );
}

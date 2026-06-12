import { Send, MessageCircle, Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = [
    { href: '#about', label: 'О франшизе' },
    { href: '#advantages', label: 'Всё о франшизе' },
    { href: '#contact', label: 'Контакты' },
  ];

  return (
    <footer className="bg-[#061414] pt-12 pb-8 border-t border-white/5">
      <div className="max-w-[1240px] mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {/* Logo + desc */}
          <div className="glass-card rounded-2xl p-6 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.svg" alt="Дети в приоритете" className="h-8 w-auto brightness-0 invert" />
              <span className="text-white font-semibold">Дети в приоритете</span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              Франшиза детского сада с прибылью от 420 000 ₽ в месяц. 10 лет опыта, действующие сады, лицензия и поддержка основателя.
            </p>
          </div>

          {/* Navigation */}
          <div className="glass-card rounded-2xl p-6">
            <h4 className="text-sm font-semibold text-white mb-4">Навигация</h4>
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className="text-sm text-white/60 hover:text-[#00c9a7] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contacts */}
          <div className="glass-card rounded-2xl p-6">
            <h4 className="text-sm font-semibold text-white mb-4">Контакты</h4>
            <div className="space-y-3">
              <a href="tel:+79614691333" className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-[#00c9a7]" />
                +7 (961) 469-13-33
              </a>
              <a href="mailto:info@deti-prioritet.ru" className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-[#00c9a7]" />
                info@deti-prioritet.ru
              </a>
              <p className="flex items-start gap-2 text-sm text-white/60">
                <MapPin className="w-4 h-4 text-[#00c9a7] flex-shrink-0 mt-0.5" />
                Россия
              </p>
            </div>
          </div>

          {/* Social */}
          <div className="glass-card rounded-2xl p-6">
            <h4 className="text-sm font-semibold text-white mb-4">Мы в мессенджерах</h4>
            <div className="grid grid-cols-2 gap-3">
              <a
                href="https://wa.me/79614691333"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center gap-2 aspect-square rounded-xl border border-white/10 hover:border-[#00c9a7]/50 hover:bg-white/5 transition-all"
              >
                <MessageCircle className="w-6 h-6 text-[#00c9a7]" />
                <span className="text-xs text-white/70">WhatsApp</span>
              </a>
              <a
                href="https://t.me/anna_suyazova"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center gap-2 aspect-square rounded-xl border border-white/10 hover:border-[#00c9a7]/50 hover:bg-white/5 transition-all"
              >
                <Send className="w-6 h-6 text-[#00c9a7]" />
                <span className="text-xs text-white/70">Telegram</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Франшиза «Дети в приоритете». Все права защищены.
          </p>
          <p className="text-white/40 text-sm">Основатель: Анна Игоревна Суязова</p>
        </div>
      </div>
    </footer>
  );
}

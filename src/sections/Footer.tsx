import { Link, useLocation } from 'react-router';
import { Send, MessageCircle, Phone, Mail, MapPin, FileBadge, ExternalLink, ShieldCheck, FileText, Globe } from 'lucide-react';

export function Footer() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (isHome && href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { href: '#about', label: 'О франшизе' },
    { href: '#advantages', label: 'Всё о франшизе' },
    { href: '#contact', label: 'Контакты' },
  ];

  const TM_LINK = 'https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&DocNumber=1019709';

  return (
    <footer className="bg-[#061414] pt-12 pb-8 xl:pt-8 xl:pb-6 border-t border-white/5">
      <div className="max-w-[1240px] mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {/* Logo + desc */}
          <div className="glass-card rounded-2xl p-6 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.svg" alt="Дети в приоритете" width="40" height="40" className="h-10 w-auto brightness-0 invert" />
              <span className="text-white font-semibold">Дети в приоритете</span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              Готовая система запуска детского сада. 10 лет опыта, образовательная лицензия и сопровождение на всех этапах.
            </p>
            <div className="mt-4 text-xs text-white/50 space-y-1">
              <p>ИП Суязова Анна Игоревна</p>
              <p>ОГРНИП 315265100062740</p>
              <p>ИНН 132708126937</p>
              <p>Ставропольский край, г. Ставрополь</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="glass-card rounded-2xl p-6">
            <h4 className="text-sm font-semibold text-white mb-4">Навигация</h4>
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={`/${link.href}`}
                  onClick={(e) => handleClick(e, link.href)}
                  className="text-sm text-white/60 hover:text-[#00c9a7] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/privacy-policy"
                className="inline-flex items-center gap-1.5 text-sm text-white/60 hover:text-[#00c9a7] transition-colors"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-[#00c9a7]" />
                Политика конфиденциальности
              </Link>
              <Link
                to="/consent"
                className="inline-flex items-center gap-1.5 text-sm text-white/60 hover:text-[#00c9a7] transition-colors"
              >
                <FileText className="w-3.5 h-3.5 text-[#00c9a7]" />
                Согласие на обработку ПД
              </Link>
              <a
                href={TM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-white/60 hover:text-[#00c9a7] transition-colors"
              >
                <FileBadge className="w-3.5 h-3.5 text-[#00c9a7]" />
                Торговая марка № 1019709
                <ExternalLink className="w-3 h-3 text-white/40" />
              </a>
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
              <a href="mailto:anna@deti1.ru" className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-[#00c9a7]" />
                anna@deti1.ru
              </a>
              <p className="flex items-start gap-2 text-sm text-white/60">
                <MapPin className="w-4 h-4 text-[#00c9a7] flex-shrink-0 mt-0.5" />
                г. Ставрополь, ул. Партизанская, 2
              </p>
            </div>
          </div>

          {/* Messengers & social */}
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
              <a
                href="https://t.me/suyazovaa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center gap-2 aspect-square rounded-xl border border-white/10 hover:border-[#00c9a7]/50 hover:bg-white/5 transition-all"
              >
                <Send className="w-6 h-6 text-[#00c9a7]" />
                <span className="text-xs text-white/70">Канал</span>
              </a>
              <a
                href="https://max.ru/join/ztz-wH7eN8noF7sbsNFmW9qSG_lJuh2i0rYbAVlksKg"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center gap-2 aspect-square rounded-xl border border-white/10 hover:border-[#00c9a7]/50 hover:bg-white/5 transition-all"
              >
                <Globe className="w-6 h-6 text-[#00c9a7]" />
                <span className="text-xs text-white/70">MAX</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Франшиза «Дети в приоритете». Все права защищены.
          </p>
          <p className="text-white/60 text-sm">Основатель: Анна Игоревна Суязова</p>
        </div>
      </div>
    </footer>
  );
}

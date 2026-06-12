import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Phone, MessageCircle } from 'lucide-react';
import { useScrollHeader } from '@/hooks/useScrollHeader';

const navLinks = [
  { href: '#about', label: 'О франшизе' },
  { href: '#advantages', label: 'Всё о франшизе' },
  { href: '#contact', label: 'Контакты' },
];

const contacts = {
  phone: '+7 (961) 469-13-33',
  phoneHref: 'tel:+79614691333',
  whatsapp: 'https://wa.me/79614691333',
  telegram: 'https://t.me/anna_suyazova',
};

export function Navigation() {
  const scrolled = useScrollHeader(50);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [mobileOpen]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-4 pt-3 sm:pt-4">
        <nav
          className={`mx-auto max-w-[1240px] rounded-full transition-all duration-300 ${
            scrolled ? 'nav-glass shadow-lg' : 'bg-transparent'
          }`}
        >
          <div className="flex items-center justify-between h-14 sm:h-16 px-4 sm:px-5">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-2.5"
            >
              <img
                src="/logo.svg"
                alt="Дети в приоритете"
                className="h-10 sm:h-9 md:h-10 w-auto brightness-0 invert"
              />
              <span className="text-sm font-semibold text-white hidden sm:block">
                Дети в приоритете
              </span>
            </a>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className="text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 px-4 py-2 rounded-full transition-all duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <a
                href={contacts.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-white/70 hover:text-white transition-colors"
              >
                {contacts.phone}
              </a>
              <a
                href="#contact"
                onClick={(e) => handleClick(e, '#contact')}
                className="btn-coral px-5 py-2 text-xs"
              >
                Получить КП <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/10 text-white hover:bg-white/15 active:scale-95 transition-all"
              aria-label={mobileOpen ? 'Закрыть меню' : 'Открыть меню'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu — full-screen bottom sheet */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-all duration-300 ${
          mobileOpen
            ? 'opacity-100 visible'
            : 'opacity-0 invisible pointer-events-none'
        }`}
        aria-hidden={!mobileOpen}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />

        {/* Sheet panel */}
        <div
          className={`absolute inset-x-0 bottom-0 max-h-[92vh] overflow-y-auto rounded-t-[2rem] bg-[#0d2b2b] border-t border-white/10 shadow-2xl transition-transform duration-300 ease-out ${
            mobileOpen ? 'translate-y-0' : 'translate-y-full'
          }`}
        >
          <div className="p-5 sm:p-6">
            {/* Header inside sheet */}
            <div className="flex items-center justify-between mb-8">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setMobileOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex items-center gap-2.5"
              >
                <img
                  src="/logo.svg"
                  alt="Дети в приоритете"
                  className="h-11 w-auto brightness-0 invert"
                />
                <span className="text-base font-semibold text-white">
                  Дети в приоритете
                </span>
              </a>
              <button
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white hover:bg-white/15 active:scale-95 transition-all"
                aria-label="Закрыть меню"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation links */}
            <nav className="flex flex-col gap-1 mb-8">
              {navLinks.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className="group flex items-center justify-between text-xl sm:text-2xl font-semibold text-white/90 hover:text-white hover:bg-white/5 px-2 py-4 rounded-2xl transition-colors"
                  style={{ animationDelay: `${index * 40}ms` }}
                >
                  {link.label}
                  <ArrowRight className="w-5 h-5 text-white/30 group-hover:text-[#00c9a7] group-hover:translate-x-1 transition-all" />
                </a>
              ))}
            </nav>

            {/* Contacts */}
            <div className="mb-6 space-y-3">
              <a
                href={contacts.phoneHref}
                className="flex items-center gap-3 text-white/90 hover:text-white px-2 py-2 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-[#00c9a7]" />
                </div>
                <span className="text-lg font-medium">{contacts.phone}</span>
              </a>
              <a
                href={contacts.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/90 hover:text-white px-2 py-2 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-[#00c9a7]" />
                </div>
                <span className="text-lg font-medium">WhatsApp</span>
              </a>
              <a
                href={contacts.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/90 hover:text-white px-2 py-2 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-[#00c9a7]"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                </div>
                <span className="text-lg font-medium">Telegram</span>
              </a>
            </div>

            {/* CTA */}
            <a
              href="#contact"
              onClick={(e) => handleClick(e, '#contact')}
              className="btn-coral w-full text-center py-4 text-base"
            >
              Получить презентацию франшизы
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

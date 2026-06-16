import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X, ArrowRight, Phone, MessageCircle } from 'lucide-react';
import { UiButton as Button } from '@/components/ui/UiButton';
import { useScrollHeader } from '@/hooks/useScrollHeader';

const navLinks = [
  { href: '#about', label: 'О франшизе' },
  { href: '#franchise', label: 'Тарифы' },
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
  const location = useLocation();
  const isHome = location.pathname === '/';

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
    if (isHome) {
      e.preventDefault();
      setMobileOpen(false);
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      setMobileOpen(false);
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-4 pt-3 sm:pt-4">
        <nav
          className={`mx-auto max-w-[1240px] rounded-full transition-all duration-300 ${
            scrolled ? 'nav-glass shadow-lg' : 'bg-transparent'
          }`}
        >
          <div className="flex items-center justify-between h-16 sm:h-[72px] px-4 sm:px-5">
            <Link
              to="/"
              onClick={(e) => {
                if (isHome) {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className="flex items-center gap-3"
            >
              <img
                src="/logo.svg"
                alt="Дети в приоритете"
                width="72"
                height="72"
                className="h-14 sm:h-16 md:h-[72px] w-auto"
              />
              <span className="text-base md:text-lg font-bold text-[#2D3436] hidden sm:block tracking-wide">
                Дети в приоритете
              </span>
            </Link>

            {/* Desktop right side: phone + CTA + menu button */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={contacts.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-[#636e72] hover:text-[#2D3436] transition-colors"
              >
                {contacts.phone}
              </a>
              <Button asChild size="sm">
                <Link to="/#contact" onClick={(e) => handleClick(e, '#contact')}>
                  Получить КП <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </Button>
              <button
                onClick={() => setMobileOpen(true)}
                className="flex items-center gap-2 pl-4 pr-5 py-2 rounded-full border border-black/10 text-[#2D3436] hover:bg-black/5 transition-colors"
                aria-label="Открыть меню"
              >
                <Menu className="w-4 h-4" />
                <span className="text-sm font-medium">Меню</span>
              </button>
            </div>

            {/* Mobile burger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/5 text-[#2D3436] hover:bg-black/10 active:scale-95 transition-all"
              aria-label={mobileOpen ? 'Закрыть меню' : 'Открыть меню'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Full-screen mega menu */}
      <div
        className={`fixed inset-0 z-[60] transition-all duration-300 ${
          mobileOpen
            ? 'opacity-100 visible'
            : 'opacity-0 invisible pointer-events-none'
        }`}
        aria-hidden={!mobileOpen}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-[#FDFBF7]/95 backdrop-blur-md"
          onClick={() => setMobileOpen(false)}
        />

        {/* Content */}
        <div
          className={`absolute inset-x-0 top-0 bottom-0 overflow-y-auto transition-transform duration-300 ease-out ${
            mobileOpen ? 'translate-y-0' : '-translate-y-8'
          }`}
        >
          <div className="min-h-full flex flex-col max-w-[1240px] mx-auto px-5 py-6">
            {/* Header inside menu */}
            <div className="flex items-center justify-between mb-12 lg:mb-16">
              <Link
                to="/"
                onClick={(e) => {
                  if (isHome) {
                    e.preventDefault();
                    setMobileOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  } else {
                    setMobileOpen(false);
                  }
                }}
                className="flex items-center gap-3"
              >
                <img
                  src="/logo.svg"
                  alt="Дети в приоритете"
                  width="72"
                  height="72"
                  className="h-16 w-auto"
                />
                <span className="text-lg font-bold text-[#2D3436] tracking-wide">
                  Дети в приоритете
                </span>
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center w-11 h-11 rounded-full bg-black/5 text-[#2D3436] hover:bg-black/10 active:scale-95 transition-all"
                aria-label="Закрыть меню"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main nav links */}
            <nav className="flex-1 flex flex-col justify-center mb-12">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  to={`/${link.href}`}
                  onClick={(e) => handleClick(e, link.href)}
                  className="group flex items-center justify-between border-b border-black/10 py-5 lg:py-6 transition-colors"
                  style={{ animationDelay: `${index * 40}ms` }}
                >
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D3436]/90 group-hover:text-[#2D3436] transition-colors">
                    {link.label}
                  </span>
                  <ArrowRight className="w-6 h-6 lg:w-8 lg:h-8 text-[#2D3436]/30 group-hover:text-[#00796b] group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
            </nav>

            {/* Bottom section */}
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {/* Contacts */}
              <div className="space-y-3">
                <a
                  href={contacts.phoneHref}
                  className="flex items-center gap-3 text-[#2D3436]/90 hover:text-[#2D3436] px-2 py-2 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-[#00796b]" />
                  </div>
                  <span className="text-lg font-medium">{contacts.phone}</span>
                </a>
                <a
                  href={contacts.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#2D3436]/90 hover:text-[#2D3436] px-2 py-2 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-[#00796b]" />
                  </div>
                  <span className="text-lg font-medium">WhatsApp</span>
                </a>
                <a
                  href={contacts.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#2D3436]/90 hover:text-[#2D3436] px-2 py-2 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-[#00796b]"
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
              <div className="flex flex-col justify-end">
                <p className="text-[#636e72] mb-4 px-2">
                  Получите презентацию франшизы и финансовую модель
                </p>
                <Button asChild size="lg" className="w-full">
                  <Link to="/#contact" onClick={(e) => handleClick(e, '#contact')}>
                    Получить презентацию
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useScrollHeader } from '@/hooks/useScrollHeader';

const navLinks = [
  { href: '#about', label: 'О франшизе' },
  { href: '#advantages', label: 'Всё о франшизе' },
  { href: '#contact', label: 'Контакты' },
];

export function Navigation() {
  const scrolled = useScrollHeader(50);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
        <nav
          className={`mx-auto max-w-[1240px] rounded-full transition-all duration-300 ${
            scrolled
              ? 'nav-glass shadow-lg'
              : 'bg-transparent'
          }`}
        >
          <div className="flex items-center justify-between h-14 px-5">
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="flex items-center gap-2.5"
            >
              <img src="/logo.svg" alt="Дети в приоритете" className="h-8 w-auto brightness-0 invert" />
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
                href="https://wa.me/79614691333"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-white/70 hover:text-white transition-colors"
              >
                +7 (961) 469-13-33
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
              className="lg:hidden p-2 text-white rounded-full hover:bg-white/10 transition-colors"
              aria-label={mobileOpen ? 'Закрыть меню' : 'Открыть меню'}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${mobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
        <div className="absolute top-20 left-4 right-4 nav-glass rounded-3xl p-6 flex flex-col gap-2 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="text-base font-medium text-white/90 hover:text-white hover:bg-white/10 px-4 py-3 rounded-2xl transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleClick(e, '#contact')}
            className="btn-coral text-center mt-2"
          >
            Получить КП
          </a>
        </div>
      </div>
    </>
  );
}

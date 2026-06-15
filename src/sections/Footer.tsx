import { Link, useLocation } from 'react-router';
import { Send, MessageCircle, Phone, Mail, MapPin, FileBadge, ExternalLink, ShieldCheck, FileText, Globe } from 'lucide-react';
import { UiCard as Card } from '@/components/ui/UiCard';

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
    { href: '#franchise', label: 'Тарифы' },
    { href: '#contact', label: 'Контакты' },
  ];

  const TM_LINK = 'https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&DocNumber=1019709';

  return (
    <footer className="bg-[#F8F5EF] pt-12 pb-8 border-t border-black/5">
      <div className="container-content">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          <Card padding="md" className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.svg" alt="Дети в приоритете" width="40" height="40" className="h-10 w-auto" />
              <span className="text-[#2D3436] font-semibold">Дети в приоритете</span>
            </div>
            <p className="text-sm text-[#636e72] leading-relaxed">
              Готовая система запуска и развития частного детского сада. С 2016 года помогаем открывать сады, которые приносят пользу семьям и стабильный доход владельцам.
            </p>
            <div className="mt-4 text-xs text-[#636e72] space-y-1">
              <p>ИП Суязова Анна Игоревна</p>
              <p>ОГРНИП 315265100062740</p>
              <p>ИНН 132708126937</p>
              <p>Ставропольский край, г. Ставрополь</p>
            </div>
          </Card>

          <Card padding="md">
            <h4 className="text-sm font-semibold text-[#2D3436] mb-4">Навигация</h4>
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={`/${link.href}`}
                  onClick={(e) => handleClick(e, link.href)}
                  className="text-sm text-[#636e72] hover:text-[#00897b] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/privacy-policy"
                className="inline-flex items-center gap-1.5 text-sm text-[#636e72] hover:text-[#00897b] transition-colors"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-[#00897b]" />
                Политика конфиденциальности
              </Link>
              <Link
                to="/consent"
                className="inline-flex items-center gap-1.5 text-sm text-[#636e72] hover:text-[#00897b] transition-colors"
              >
                <FileText className="w-3.5 h-3.5 text-[#00897b]" />
                Согласие на обработку ПД
              </Link>
              <a
                href={TM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-[#636e72] hover:text-[#00897b] transition-colors"
              >
                <FileBadge className="w-3.5 h-3.5 text-[#00897b]" />
                Торговая марка № 1019709
                <ExternalLink className="w-3 h-3 text-[#636e72]" />
              </a>
            </div>
          </Card>

          <Card padding="md">
            <h4 className="text-sm font-semibold text-[#2D3436] mb-4">Контакты</h4>
            <div className="space-y-3">
              <a href="tel:+79614691333" className="inline-flex items-center gap-2 text-sm text-[#636e72] hover:text-[#2D3436] transition-colors">
                <Phone className="w-4 h-4 text-[#00897b]" />
                +7 (961) 469-13-33
              </a>
              <a href="mailto:anna@deti1.ru" className="flex items-center gap-2 text-sm text-[#636e72] hover:text-[#2D3436] transition-colors">
                <Mail className="w-4 h-4 text-[#00897b]" />
                anna@deti1.ru
              </a>
              <p className="flex items-start gap-2 text-sm text-[#636e72]">
                <MapPin className="w-4 h-4 text-[#00897b] flex-shrink-0 mt-0.5" />
                г. Ставрополь, ул. Партизанская, 2
              </p>
            </div>
          </Card>

          <Card padding="md">
            <h4 className="text-sm font-semibold text-[#2D3436] mb-4">Мы в мессенджерах</h4>
            <div className="grid grid-cols-2 gap-3">
              <a
                href="https://wa.me/79614691333"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center gap-2 aspect-square rounded-xl border border-black/10 hover:border-[#00897b]/50 hover:bg-black/5 transition-all"
              >
                <MessageCircle className="w-6 h-6 text-[#00897b]" />
                <span className="text-xs text-[#636e72]">WhatsApp</span>
              </a>
              <a
                href="https://t.me/anna_suyazova"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center gap-2 aspect-square rounded-xl border border-black/10 hover:border-[#00897b]/50 hover:bg-black/5 transition-all"
              >
                <Send className="w-6 h-6 text-[#00897b]" />
                <span className="text-xs text-[#636e72]">Telegram</span>
              </a>
              <a
                href="https://t.me/suyazovaa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center gap-2 aspect-square rounded-xl border border-black/10 hover:border-[#00897b]/50 hover:bg-black/5 transition-all"
              >
                <Send className="w-6 h-6 text-[#00897b]" />
                <span className="text-xs text-[#636e72]">Telegram-канал</span>
              </a>
              <a
                href="https://max.ru/join/ztz-wH7eN8noF7sbsNFmW9qSG_lJuh2i0rYbAVlksKg"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center gap-2 aspect-square rounded-xl border border-black/10 hover:border-[#00897b]/50 hover:bg-black/5 transition-all"
              >
                <Globe className="w-6 h-6 text-[#00897b]" />
                <span className="text-xs text-[#636e72]">MAX</span>
              </a>
            </div>
          </Card>
        </div>

        <div className="border-t border-black/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#636e72] text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Франшиза «Дети в приоритете». Все права защищены.
          </p>
          <p className="text-[#636e72] text-sm">Основатель: Анна Игоревна Суязова</p>
        </div>
      </div>
    </footer>
  );
}

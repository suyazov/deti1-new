import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import { Navigation } from '@/sections/Navigation';
import { Footer } from '@/sections/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';

export function Layout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[#0a1f1f]">
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

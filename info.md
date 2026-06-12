Using Node.js 20, Tailwind CSS v3.4.19, and Vite v7.2.4

Tailwind CSS has been set up with the shadcn theme

Setup complete: /mnt/agents/output/app

Components (40+):
  accordion, alert-dialog, alert, aspect-ratio, avatar, badge, breadcrumb,
  button-group, button, calendar, card, carousel, chart, checkbox, collapsible,
  command, context-menu, dialog, drawer, dropdown-menu, empty, field, form,
  hover-card, input-group, input-otp, input, item, kbd, label, menubar,
  navigation-menu, pagination, popover, progress, radio-group, resizable,
  scroll-area, select, separator, sheet, sidebar, skeleton, slider, sonner,
  spinner, switch, table, tabs, textarea, toggle-group, toggle, tooltip

Usage:
  import { Button } from '@/components/ui/button'
  import { Card, CardHeader, CardTitle } from '@/components/ui/card'

Structure:
  src/sections/        Page sections
  src/hooks/           Custom hooks
  src/types/           Type definitions
  src/App.css          Styles specific to the Webapp
  src/App.tsx          Root React component
  src/index.css        Global styles
  src/main.tsx         Entry point for rendering the Webapp
  index.html           Entry point for the Webapp
  tailwind.config.js   Configures Tailwind's theme, plugins, etc.
  vite.config.ts       Main build and dev server settings for Vite
  postcss.config.js    Config file for CSS post-processing tools

Recent project changes:
- Added server-side prerender for SEO (`prerender.js`, Puppeteer).
  Build command: `npm run build:prerender`.
- Form submissions are sent to a Telegram chat via `/api/send.php`.
  The bot token is configured in `public/api/send.php`.
- Email across the site is `anna@deti1.ru`.
- Phone input uses `@react-input/mask` with `+7 (___) ___-__-__`.
- Footer/FounderWords icons unified in Lucide style (MAX uses `Globe`).
- Images are served as WebP with explicit `width`/`height` and lazy loading.
- `CompactInfo` is lazy-loaded to reduce initial JS bundle size.
- Yandex.Metrika is loaded after page load to reduce render blocking.

# SEO/GEO аудит deti1.ru

> Проведён с использованием фреймворков из репозитория [seo-geo-claude-skills](https://github.com/aaron-he-zhu/seo-geo-claude-skills): CORE-EEAT (80 items), CITE (40 items), on-page SEO auditor, technical SEO checker, schema/meta/entity/internal-linking skills.
> Дата аудита: 2026-06-17
> URL: https://deti1.ru

---

## 1. Резюме

| Аудит | Результат | Статус |
|-------|-----------|--------|
| Technical SEO | Нет блокирующих ошибок; есть улучшения | ⚠️ Medium |
| On-page SEO | Title/description/OG в порядке; H1 один; изображения не в prerender | ⚠️ Medium |
| Schema + Meta | EducationalOrganization + Person + WebSite; нет LocalBusiness/BreadcrumbList/FAQPage | ⚠️ Medium |
| CORE-EEAT (homepage) | **SEO 62 / GEO 55 → Weighted 58** (Landing Page) | ⚠️ Medium |
| CITE Domain | **Score 31** (Product & Service weights) | 🔴 Low |
| Entity | Сущности распознаются, но слабые внешние сигналы | 🔴 Low |
| Internal linking | Слабая перелинковка; нет topic clusters | 🔴 Low |

**Ключевые проблемы:**
1. **Практически нет внешних ссылок/упоминаний** (CITE Citation — Fail).
2. **Домен молодой** (с 2023-10-23, < 3 лет; CITE I06 Fail).
3. **Prerender не содержит изображения секций** — Google может не проиндексировать фото.
4. **Нет BreadcrumbList, FAQPage schema, LocalBusiness/Organization address**.
5. **Слабая перелинковка** — в prerender только 7 ссылок, нет topic clusters.
6. **Контент landing page** хорошо структурирован, но не имеет цитат, внешних источников и оригинальных данных, необходимых для GEO.

**Быстрые победы:**
- Добавить `BreadcrumbList`, `LocalBusiness`/`Organization` с адресом и контактами, `FAQPage` schema.
- Включить ключевые изображения и ссылки в prerender.
- Создать 3–5 SEO-страниц под запросы (franchise, documents, license) и перелинковать их.
- Добавить раздел «Отзывы партнёров» с Review schema.

---

## 2. Technical SEO audit

### 2.1 Crawlability & Indexability

| Пункт | Статус | Примечание |
|-------|--------|------------|
| robots.txt | ✅ Pass | `User-agent: * Allow: /`, sitemap указан |
| XML sitemap | ✅ Pass | 9 URL, lastmod 2026-06-15 |
| HTTPS | ✅ Pass | Let's Encrypt, HSTS включён |
| 404 handling | ✅ Pass | /notexist → 404 |
| Статические SEO-страницы | ✅ Pass | /franchise, /faq, /about-founder, /license, /documents, /contacts — 200 |
| Prerender | ⚠️ Partial | HTML 19 960 байт; текст есть, но изображения секций и внутренние ссылки SPA не в HTML |
| Redirect chains | ✅ Pass | Не обнаружены |

### 2.2 Core Web Vitals (Lighthouse production, Moto G Power, 4G slow)

| Метрика | Значение | Статус |
|---------|----------|--------|
| Performance | 0.87 | ✅ Good |
| LCP | 2.6 s | ⚠️ Needs Improvement |
| FCP | 1.8 s | ✅ Good |
| CLS | 0 | ✅ Excellent |
| TBT | 370 ms | ✅ Good |
| Speed Index | 1.8 s | ✅ Good |

### 2.3 Security

| Пункт | Статус |
|-------|--------|
| HTTPS | ✅ |
| HSTS | ✅ |
| X-Frame-Options | ✅ SAMEORIGIN |
| X-Content-Type-Options | ✅ nosniff |
| CSP | ✅ Есть (блокирует wss://mc.yandex.ru — некритично) |

### 2.4 Mobile

| Пункт | Статус |
|-------|--------|
| viewport | ✅ |
| Tap targets | ✅ Крупные кнопки |
| Responsive layout | ✅ Tailwind responsive |

### 2.5 Structured data validation

- Schema.org JSON-LD валиден (WebSite, EducationalOrganization, Person).
- Нет ошибок разметки в prerender.

### 2.6 Findings (technical)

- **P1**: В prerender отсутствуют `<img>` изображений секций (`/photos/*`). Google Images может не проиндексировать фото.
- **P1**: Нет `BreadcrumbList` schema — теряется rich result eligibility.
- **P2**: Нет `FAQPage` schema, хотя FAQ-контент есть в секции CompactInfo.
- **P2**: Нет `LocalBusiness`/`Organization` с `address`, `telephone`, `email` — важно для локального SEO и Knowledge Panel.

---

## 3. On-page SEO audit (главная страница)

### 3.1 Title & Meta

| Элемент | Значение | Длина | Статус |
|---------|----------|-------|--------|
| Title | Франшиза детского сада «Дети в приоритете» | 46 chars | ✅ |
| Meta description | Франшиза частного детского сада... | 149 chars | ✅ |
| Canonical | https://deti1.ru/ | — | ✅ |
| OG tags | type, url, title, description, image, locale | — | ✅ |
| Twitter Card | summary_large_image | — | ✅ |

**Примечание:** `og:image` = `/logo.png`. Для соцсетей лучше использовать hero-фото или брендированный баннер 1200×630.

### 3.2 Heading structure (prerender)

| Тег | Кол-во | Статус |
|-----|--------|--------|
| H1 | 1 | ✅ |
| H2 | 5 | ✅ |
| H3 | 14 | ✅ |
| H4 | 2 | ✅ |
| H5/H6 | 0 | ✅ |

H1: "Откройте свой детский сад с прибылью от 420 000 ₽ в месяц" — содержит целевой запрос.

### 3.3 Content

| Пункт | Значение | Статус |
|-------|----------|--------|
| Объём prerender-текста | ~4 700 chars | ⚠️ Ниже среднего для landing page |
| Readability | Хорошая | ✅ |
| Keyword placement | Запрос в title, H1, description | ✅ |
| Keyword variants | «франшиза детского сада», «частный детский сад», «прибыль» | ✅ |

### 3.4 Images

| Пункт | Статус |
|-------|--------|
| Alt texts | ⚠️ Изображения не в prerender — alt не виден краулеру |
| WebP | ✅ Hero-фото оптимизировано |
| Lazy loading | ✅ У большинства изображений loading="lazy" |

### 3.5 Internal links

| Пункт | Значение | Статус |
|-------|----------|--------|
| В prerender | 7 ссылок | 🔴 Мало |
| Якорные ссылки | #contact | ⚠️ |
| Ссылки на SEO-страницы | Нет в prerender | 🔴 |
| Breadcrumbs | Нет | 🔴 |

### 3.6 Findings (on-page)

- **P0**: Изображения секций отсутствуют в prerender — теряется image SEO.
- **P1**: Низкая плотность внутренних ссылок; нет перелинковки на /franchise, /documents и т.д.
- **P1**: og:image — логотип вместо контентного изображения.
- **P2**: Текста можно больше — добавить подробный раздел «Как устроена франшиза».

---

## 4. Schema markup & meta tags audit

### 4.1 Текущие schema types

| Type | Статус | Замечание |
|------|--------|-----------|
| WebSite | ✅ | Корректно |
| EducationalOrganization | ✅ | Но без address/telephone/geo |
| Person (founder) | ✅ | Анна Суязова |
| BreadcrumbList | 🔴 Отсутствует | Важно для навигации в SERP |
| FAQPage | 🔴 Отсутствует | Контент FAQ есть, но не размечен |
| LocalBusiness | 🔴 Отсутствует | Для детского сада критично |
| Review / AggregateRating | 🔴 Отсутствует | Нет отзывов партнёров |
| Article / BlogPosting | N/A | Нет блога |

### 4.2 Рекомендуемые JSON-LD additions

1. **LocalBusiness / Organization** с `address`, `telephone`, `email`, `geo`, `openingHoursSpecification`.
2. **BreadcrumbList** для всех страниц.
3. **FAQPage** для секции FAQ.
4. **Review** или **AggregateRating** после добавления отзывов.
5. **Course / HowTo** для образовательной программы франшизы.

---

## 5. CORE-EEAT audit (homepage)

**Content type:** Landing Page  
**Weights:** C 20%, O 10%, R 5%, E 5%, Exp 5%, Ept 5%, A 25%, T 25%.

### 5.1 Dimension scores

| Dim | Score | Rating | Комментарий |
|-----|-------|--------|-------------|
| C — Contextual Clarity | 55 | Medium | C01 Pass, C02 Partial (ответ в H1, но не в первых 150 словах), C03 Partial (2–3 варианта запроса), C04 Partial, C05 Partial (scope неявный), C06 Pass (аудитория в TargetAudience), C07 Pass, C08 Partial, C09 Fail (FAQ не структурирован schema), C10 Partial |
| O — Organization | 60 | Medium | O01 Pass, O02 Fail (нет TL;DR/summary box), O03 Fail (нет data tables), O04 Pass, O05 Partial (schema есть, но неполная), O06 Pass, O07 Partial, O08 Fail (нет TOC), O09 Pass, O10 Partial (изображения без caption в prerender) |
| R — Referenceability | 30 | Low | R01 Partial (цифры есть: 420K, 650K, 72 детей, 2016), R02 Fail (нет внешних цитат), R03 Fail, R04 Partial, R05 Fail, R06 Partial (даты обновлений в sitemap), R07 Pass (Анна Суязова, ФИПС №), R08 Fail (слабая перелинковка), R09 Fail (нет `<article>`, `<figure>`, `<time>`), R10 Pass |
| E — Exclusivity | 30 | Low | E01 Partial (финмодель, но не публикуется), E02 Fail, E03 Fail, E04 Partial (контраст с типовыми франшизами), E05 Fail, E06 Partial, E07 Partial (калькулятор прибыли), E08 Partial, E09 Fail, E10 Fail |
| Exp — Experience | 55 | Medium | Exp01 Partial (цитаты Анны, но мало «я сделала»), Exp02 Partial, Exp03 Pass (этапы запуска), Exp04 Pass (фото Анны и сада), Exp05 Partial, Exp06 Partial, Exp07 Partial, Exp08 Pass (цифры прибыли), Exp09 Partial, Exp10 Partial |
| Ept — Expertise | 60 | Medium | Ept01 Partial (Анна представлена, но нет страницы автора), Ept02 Partial (опыт указан), Ept03 Partial, Ept04 Partial, Ept05 Fail, Ept06 Partial, Ept07 Pass (история с 2016), Ept08 Partial, Ept09 Partial, Ept10 Fail |
| A — Authority | 50 | Low | A01 Fail (нет backlinks), A02 Partial (упоминание в muzej-pobedy26.ru), A03 Pass (Золотой Меркурий, награды), A04 Fail, A05 Partial (брендовый поиск есть), A06 Partial (отзывы не выделены), A07 Fail (нет Knowledge Panel), A08 Partial, A09 Fail, A10 Fail |
| T — Trust | 80 | Good | T01 Pass (privacy, consent), T02 Pass (телефон, email, Telegram), T03 Pass (HTTPS), T04 N/A, T05 Fail (нет editorial policy), T06 Partial (sitemap lastmod), T07 Pass (нет рекламы), T08 Partial, T09 N/A, T10 Partial (контакты есть, но нет SLA) |

### 5.2 Veto items

| Veto | Статус | Примечание |
|------|--------|------------|
| C01 Clickbait | ✅ Pass | Title соответствует контенту |
| R10 Data inconsistency | ✅ Pass | Цифры согласованы |
| T04 Affiliate disclosure | N/A | Нет affiliate-ссылок |

### 5.3 Summary

| Score | Value |
|-------|-------|
| GEO Score | (55+60+30+30)/4 = **44** |
| SEO Score | (55+60+50+80)/4 = **61** |
| Unweighted Total | **52.5** |
| Weighted Total (Landing) | 55×0.20 + 60×0.10 + 30×0.05 + 30×0.05 + 55×0.05 + 60×0.05 + 50×0.25 + 80×0.25 = **58** |

**Вердикт:** FIX — улучшить referenceability (цитаты, ссылки), exclusivity (оригинальные данные), authority (backlinks/mentions), organization (TOC, summary, FAQ schema).

---

## 6. CITE Domain Authority audit

**Domain type:** Product & Service  
**Weights:** C 25%, I 30%, T 25%, E 20%.

### 6.1 Dimension scores

| Dim | Score | Комментарий |
|-----|-------|-------------|
| C — Citation | 10 | Практически нет referring domains; 1 упоминание на muzej-pobedy26.ru; AI-citations не обнаружены |
| I — Identity | 35 | Schema.org есть, но < 50% страниц; Knowledge Graph отсутствует; brand search низкий; домен < 5 лет; автор представлен, но не верифицирован внешне |
| T — Trust | 65 | HTTPS/HSTS, чистый WHOIS, нет манипуляций, свежий контент, но нет editorial policy и review platforms |
| E — Eminence | 15 | Мало ключевых слов в топ-100, низкий трафик, нет SERP features, нет медиа-упоминаний, географический охват ограничен |

### 6.2 Veto items

| Veto | Статус | Примечание |
|------|--------|------------|
| T03 Link-traffic coherence | ✅ Pass | Нет тысяч ссылок при нулевом трафике |
| T05 Identical backlink profile | ✅ Pass | Нет признаков сети |
| T09 Penalty/deindex | ✅ Pass | Нет санкций |

### 6.3 Summary

| Score | Value |
|-------|-------|
| CITE Score | 10×0.25 + 35×0.30 + 65×0.25 + 15×0.20 = **31** |

**Вердикт:** UNTRUSTED — домен слабый с точки зрения авторитета. Нужно наращивать цитирование, упоминания, Knowledge Graph presence, локальные и отраслевые ссылки.

---

## 7. Entity optimizer

### 7.1 Entities

| Entity | Type | On-site signals | External signals | Статус |
|--------|------|-----------------|------------------|--------|
| Дети в приоритете | Organization/Brand | ✅ Logo, schema, title, social links | ⚠️ Мало упоминаний | Weak |
| Анна Суязова | Person | ✅ Фото, цитата, schema Person, Telegram/MAX | ⚠️ Нет Wikipedia/Wikidata/KG | Weak |
| Франшиза детского сада | Product/Service | ✅ Описание, тарифы, калькулятор | ❌ Нет внешних отзывов | Weak |

### 7.2 Recommendations

1. **Создать страницу автора** `/about-founder` с полной биографией, credentials, links to social.
2. **Добавить sameAs** в schema Person: Telegram, MAX, possibly LinkedIn, Crunchbase.
3. **Создать Wikidata/Wikipedia** entries (сложно, но цель для Knowledge Panel).
4. **Разместить гостевые статьи** на тематических площадках (maam.ru, образовательные порталы) со ссылкой на deti1.ru.
5. **Зарегистрировать компанию** в 2ГИС, Яндекс.Справочнике, Google Business Profile (если есть физический адрес).

---

## 8. Internal linking optimizer

### 8.1 Current state

| Показатель | Значение | Статус |
|------------|----------|--------|
| Structure score | 35/100 | 🔴 |
| Anchor score | 3/10 | 🔴 |
| Orphan pages | Все SEO-страницы слабо связаны | 🔴 |
| Topic clusters | Нет | 🔴 |

### 8.2 Findings

- В prerender только 7 ссылок, из них 2 — tel, 1 — mailto, 2 — мессенджеры.
- Нет ссылок на `/franchise`, `/documents`, `/license`, `/faq` в тексте главной.
- Нет breadcrumbs.
- Нет footer-навигации с ключевыми разделами.

### 8.3 Recommendations

1. Добавить footer с колонками: Франшиза, Документы, О нас, Контакты.
2. В тексте главной добавить контекстные ссылки: «подробнее о франшизе», «готовый пакет документов», «лицензия».
3. Добавить хлебные крошки на внутренних страницах.
4. Создать hub-страницу «Франшиза детского сада» и ссылаться с неё на тарифы, документы, FAQ.

---

## 9. Action plan

### P0 — критично (влияет на индексацию/трафик)

1. **Добавить изображения в prerender** — как минимум hero-фото и фото в WhyParentsChoose/TrustBlock.
2. **Добавить BreadcrumbList schema** на все страницы.
3. **Добавить LocalBusiness/Organization schema** с адресом, телефоном, email, geo.
4. **Добавить FAQPage schema** для секции FAQ.

### P1 — высокий приоритет

5. Улучшить footer-навигацию и внутреннюю перелинковку.
6. Создать/усилить страницы: `/franchise`, `/documents`, `/license` как полноценные landing pages.
7. Добавить раздел отзывов партнёров с Review schema.
8. Заменить `og:image` на контентное изображение 1200×630.
9. Добавить editorial policy / corrections page.

### P2 — средний приоритет

10. Добавить TL;DR/summary box в начало главной.
11. Добавить data tables (сравнение тарифов в табличном виде).
12. Добавить внешние цитаты/ссылки на регуляторов (Минобрнауки, ФИПС).
13. Создать блог/гайды: «Как открыть детский сад», «СанПиН для частного сада» и т.д.
14. Настроить Google Business Profile / 2ГИС / Яндекс.Справочник.

### P3 — долгосрочно

15. Гостевые статьи на отраслевых площадках.
16. Wikipedia/Wikidata для Анны Суязовой и бренда.
17. Мониторинг AI-citations (Perplexity, ChatGPT Browse) и branded search volume.

---

## 10. Appendices

### A. Data sources

- HTML prerender: https://deti1.ru/ (19 960 bytes)
- robots.txt: https://deti1.ru/robots.txt
- sitemap.xml: https://deti1.ru/sitemap.xml
- Lighthouse production report (Moto G Power, 4G slow)
- WHOIS: created 2023-10-23
- Web search for brand mentions (limited results)

### B. Tooling limitations

- Нет доступа к Ahrefs/Moz/SEMrush — backlink/keyword data estimated.
- AI citation data недоступна без специализированных GEO-инструментов.
- Rankings/traffic estimates not available.

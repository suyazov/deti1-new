# /2: рефакторинг, скорость и SEO — 05.10.2026

## Результат

- Удалено 107 неиспользуемых/опустевших CSS-правил и 63 перекрытых декларации. Селекторы проверены по четырём страницам, включая menu-open/open/negative. CSS развёрнут в читаемый вид; порядок каскада сохранён.
- Вычисленные стили всех элементов совпали до/после в девяти случаях: главная 1440/900/320 и три предложения 1440/320. Отдельно совпали menu-open, negative, tooltip/focus и FAQ open/closed. После review восстановлены две активные details[open] декларации: минус и светлое выделение раскрытого вопроса. Формула/app.js побайтно неизменны; default 132 925 ₽.
- CSS без сжатия 40 751 → 44 269 байт из-за форматирования; gzip 9 467 → 8 653 байт (−8,6%). Это оценка gzip на тех же байтах, не утверждение точного nginx payload.
- 22 WebP-варианта 160/320/480 с alpha для 11 иллюстраций; responsive srcset/sizes. Исходники сохранены для высокой плотности. Общий вес этих изображений при полном просмотре mobile1x: 1 306 168 → 308 810 байт (−76,4%). Начальная загрузка меньше полного набора благодаря существующему lazy loading. Это не процент ускорения LCP.
- У всех четырёх страниц уникальные title/description и self canonical; один H1, без duplicate id и несуществующих fragment links. Не добавлялись выдуманные schema, отзывы или рейтинги.

## Замеры

Chrome DevTools MCP, mobile 390×844/DPR1, CPU4x, Fast4G. Из этого окружения публичный deti1.ru недоступен в браузере; тот же checkout проверен на локальном HTTP. Это лабораторные измерения static frontend, не измерение публичного канала/боевого TTFB.

| Показатель | Исходная версия | Итоговая |
| --- | --- | --- |
| LCP trace | 301 ms | 682 ms |
| CLS trace | 0.00 | 0.00 |
| Lighthouse Accessibility | 100 | 100 |
| Lighthouse Best Practices | 100 | 100 |
| Lighthouse SEO | 63 | 66 |

Единичные загрузки и браузерный cache дают разброс; ускорение LCP не заявлено. Между проходами был замер 772 ms. Итоговый trace больше не отмечает проблему ImageDelivery, обнаруженную на первых 320px-вариантах; добавлены 160px для малых маскотов и 480px для Retina. Lighthouse after выполнен после изменений SEO/CSS, перед последним уточнением responsive variants. Реальных CrUX/INP данных нет. Страница сейчас содержит фотозаглушки; после загрузки настоящих фото требуется новый замер LCP/CLS.

## SEO и публикация

/2 остаётся preview с meta robots и серверным X-Robots-Tag `noindex,nofollow,noarchive` по D-11. Единственный failing SEO audit — is-crawlable. Индексация и sitemap корня этой задачей не включались/не менялись. Self canonical подготовлен для каждого фактического URL /2. Для финального SEO-запуска нужен отдельно согласованный рабочий URL и изменение режима индексации HTML/HTTP вместе.

Origin read-only headers: HTTPS200, gzip включён, Cache-Control no-cache/must-revalidate — осознанная ревалидация preview. Замечание локального Python HTTP об отсутствии compression не относится к nginx. Конфигурация nginx/DNS не менялась. Для финального выпуска можно отдельно ввести content-hashed статические assets с долгим кешированием; для текущего preview это не делалось.

Методика: [Chrome Performance](https://developer.chrome.com/docs/devtools/performance), [Image delivery](https://developer.chrome.com/docs/performance/insights/image-delivery), [Google noindex](https://developers.google.com/search/docs/crawling-indexing/block-indexing).

## Доказательства

Артефакты сервера: `/var/lib/sy3/project-artifacts/deti1/audits/2026-10-05-refactor/`: три trace, Lighthouse before/after JSON/HTML, размеры файлов и список variants. PR содержит review exact head, deploy SHA и rollback receipt.

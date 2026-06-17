# Luma Alicante — MVP Landing Page

Готовый статический сайт для запуска Luma: Property Care + Arrival Boxes в Аликанте.

## Файлы

- `index.html` — структура лендинга
- `styles.css` — дизайн и адаптив
- `script.js` — переключение языков, Arrival Box-конструктор, WhatsApp-заявка
- `assets/favicon.svg` — простая иконка

## Что нужно заменить перед публикацией

1. В `script.js` заменить:
   `const WHATSAPP_NUMBER = "34XXXXXXXXX";`
   на реальный номер в международном формате, только цифры.
   Пример:
   `const WHATSAPP_NUMBER = "34600111222";`

2. При желании заменить название `Luma Alicante` на финальное название бренда.

3. Проверить стартовые цены:
   - Arrival Box — от €39 + чек
   - Full Arrival Ready — от €129 + чек
   - Home Check — €69/мес
   - Key Holding — €39/мес

## Как открыть локально

Просто откройте `index.html` в браузере.

## Как опубликовать

Подходит для:
- Vercel
- Netlify
- GitHub Pages
- обычного хостинга
- дальнейшего переноса в Webflow/Tilda


## Version 2 updates

This version refocuses the landing page on the main buyer: second-home owners in Alicante / Costa Blanca who live abroad.

Added sections:
- Who it is for
- Problems we solve
- Photo report example
- Key security
- Clear scope: not a tourist rental agency

Main offer:
- Full Arrival Ready
- Monthly Home Check
- Key Holding
- Arrival Box as an add-on / entry product


## Version 3 updates

Brand renamed to **Luma Alicante**.

Positioning:
- Property care & arrival preparation for owners abroad
- Key holding, monthly home checks, photo reports
- Full Arrival Ready and Arrival Boxes as pre-arrival services


## Version 4 updates

Palette refreshed to the recommended **Luma** brand colors:

- Background: `#FAF6EE`
- Surface Alt: `#F1E8DC`
- Text: `#172321`
- Muted: `#6C7672`
- Line: `#E7DED2`
- Primary Accent: `#145C55`
- Dark Accent: `#0E403B`
- Sun Gold Accent: `#DFA550`
- Terracotta Detail: `#C96F4A`


## Version 5 updates

Final refinement pass:
- Added premium multilingual typography via **Manrope**
- Improved heading scale, spacing and readability
- Refined buttons, cards, report blocks and forms
- Added hover states, underline interactions and softer shadows
- Tuned header, hero, badges and micro-details to match the Luma palette


## Version 6 updates

Final Luma logo integration:
- Added custom SVG logo mark based on the chosen arched-door concept
- Added horizontal and stacked logo SVG assets
- Replaced favicon with the final Luma symbol
- Replaced header icon with the final logo mark
- Added logo lockup inside the hero card

Logo assets:
- `assets/luma-mark.svg`
- `assets/luma-mark-reversed.svg`
- `assets/luma-logo-horizontal.svg`
- `assets/luma-logo-stacked.svg`
- `assets/favicon.svg`


## Launch domain

Chosen domain: `lumaalicante.com`

Recommended Vercel setup:
1. Add `lumaalicante.com` in Project → Settings → Domains.
2. Add `www.lumaalicante.com` too and redirect one version to the other.
3. If DNS is managed outside Vercel, set:
   - A record: `@` → `76.76.21.21`
   - CNAME record: `www` → `cname.vercel-dns.com`
4. Wait for DNS propagation and SSL activation in Vercel.

Before launch:
- Replace `WHATSAPP_NUMBER` in `script.js` with the real number.
- Deploy to production.


## Version 7 updates

Logo integration fix:
- Removed the large centered logo from the hero card
- Added a lighter transparent header mark
- Reduced visual stroke weight in the header mark
- Kept the dark rounded favicon/app icon separately
- Fixed logo scaling so it does not look too heavy on the website


## Version 8 updates

Language strategy updated for launch:
- Removed Russian language selector from the website
- Website now works only in English and Spanish
- Old `ru` localStorage selection is automatically reset to English
- Arrival Box item labels now use EN/ES only


## Version 9 updates

Added Service Calculator / Estimate Builder:
- EN/ES calculator section
- Main service selection
- Add-ons, timing, property type, waiting time and grocery receipt estimate
- Indicative service fee and service + grocery budget
- WhatsApp request link with selected estimate
- Added Exterior Check as entry-level no-key service


## Version 10 updates

Calculator expanded:
- Added town / urbanisation list for Alicante, Benidorm and South Costa Blanca
- Added keys/access situation
- Added property size
- Added Arrival Box levels
- Added report type
- Added cleaning inspection add-on
- WhatsApp request now includes area, town, access, timing, property size and selected estimate


## Version 11 updates

Calculator fix:
- Town names no longer show visible “+€” in the dropdown.
- Town / area surcharge is now added invisibly to the total.
- The surcharge appears in selected items as “Area surcharge: Town”.
- Breakdown now shows the main selected service and all paid add-ons.


## Version 12 updates

Calculator bug fix:
- Fixed JavaScript syntax error in WhatsApp estimate text generation.
- Calculator now initializes and updates service fee, grocery total and selected items correctly.
- Added an extra calculator refresh after default Arrival Box preset setup.


## Version 13 updates

Calculator and pricing logic updated:
- Removed Pre-arrival Check from one-off services
- Renamed Full Arrival Ready to Arrival Ready Setup
- Added optional ongoing home check plans:
  - 1 check/month — €399/year
  - 2 checks/month — €649/year
  - 4 checks/month — €999/year
- Changed property field to property type:
  - Apartment / flat
  - Townhouse
  - House / villa
  - Large or complex property — by quote


## Version 14 updates

Trust-first repositioning:
- Homepage focus changed to key holding, scheduled home checks and photo reports
- Arrival Box moved to a separate page: arrival-box.html
- Added Key Security section
- Added serious care plan pricing: Key Safe, Essential, Comfort, Premium
- Updated calculator copy for care plans
- Added Arrival Box access warning
- Rebuilt contact form with email, phone, country, property type, keys/access and service fields
- Added two request options: WhatsApp request and email request (mailto)
- Added defensive JavaScript so pages without Arrival Box builder do not break

# FlatCare Alicante — MVP Landing Page

Готовый статический сайт для запуска FlatCare + Arrival Boxes в Аликанте.

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

2. При желании заменить название `FlatCare Alicante` на финальное название бренда.

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

// Replace with your real WhatsApp number in international format, digits only.
// Example: const WHATSAPP_NUMBER = "34600111222";
const WHATSAPP_NUMBER = "34XXXXXXXXX";

const translations = {
  "en": {
    "nav.services": "Services",
    "nav.arrival": "Arrival Box",
    "nav.prices": "Prices",
    "nav.faq": "FAQ",
    "nav.cta": "Request service",
    "hero.eyebrow": "Alicante · Playa San Juan · El Campello",
    "hero.title": "Own an apartment in Alicante but live abroad?",
    "hero.subtitle": "We keep the keys, check your home, prepare it before you arrive and send clear photo reports.",
    "hero.primary": "Prepare my apartment",
    "hero.secondary": "See FlatCare plans",
    "hero.trust1.title": "Photo reports",
    "hero.trust1.text": "after each visit",
    "hero.trust2.title": "No warehouse",
    "hero.trust2.text": "fresh shopping by request",
    "hero.trust3.title": "WhatsApp first",
    "hero.trust3.text": "simple coordination",
    "hero.cardTitle": "Most requested",
    "hero.item1.title": "Pre-arrival check",
    "hero.item1.text": "air the apartment, check utilities, turn on the fridge.",
    "hero.item2.title": "Arrival Box",
    "hero.item2.text": "basic groceries and household essentials ready inside.",
    "hero.item3.title": "Monthly home check",
    "hero.item3.text": "windows, water, electricity, leaks and photo report.",
    "hero.cardCta": "Get a quote",
    "problem.eyebrow": "For owners who live abroad",
    "problem.title": "Your home in Alicante needs someone local while you are away.",
    "problem.text": "Leaks, humidity, locked windows, broken Wi‑Fi, missing keys or an empty fridge can ruin the first day. We check, prepare and document the apartment before you arrive.",
    "services.eyebrow": "What we do",
    "services.title": "FlatCare services",
    "services.subtitle": "Start with Full Arrival Ready, Home Check or Key Holding, then add Arrival Box when needed.",
    "services.key.title": "Key holding",
    "services.key.text": "Secure key custody, controlled access for approved visits and a clear access log.",
    "services.check.title": "Home checks",
    "services.check.text": "Regular visual checks for windows, leaks, electricity, water, humidity and general condition.",
    "services.arrival.title": "Arrival Boxes",
    "services.arrival.text": "We buy selected groceries and household basics, place them inside and send a photo report.",
    "services.prepare.title": "Pre-arrival preparation",
    "services.prepare.text": "Air the apartment, turn on the fridge, check Wi‑Fi, water and electricity before arrival.",
    "services.cleaning.title": "Cleaning coordination",
    "services.cleaning.text": "We coordinate cleaning through local partners and check the apartment before your arrival.",
    "services.maintenance.title": "Maintenance coordination",
    "services.maintenance.text": "We help organize plumbers, electricians, air-conditioning service and small home tasks.",
    "arrival.eyebrow": "Pre-arrival stocking",
    "arrival.title": "Build your Arrival Box",
    "arrival.subtitle": "Choose what you want to find in the apartment. We shop fresh by request and charge the supermarket receipt separately.",
    "arrival.preset.basic": "Basic",
    "arrival.preset.family": "Family",
    "arrival.preset.baby": "Baby",
    "arrival.preset.longstay": "Long stay",
    "arrival.preset.custom": "Custom",
    "arrival.cat.drinks": "Drinks",
    "arrival.cat.breakfast": "Breakfast",
    "arrival.cat.fresh": "Fresh food",
    "arrival.cat.kids": "Kids & baby",
    "arrival.cat.household": "Household basics",
    "arrival.cat.beach": "Beach essentials",
    "arrival.cat.prep": "Apartment preparation",
    "summary.title": "Your request",
    "summary.items": "items selected",
    "summary.priceTitle": "Pricing",
    "summary.priceText": "Service fee from €39 + supermarket receipt. Final quote depends on location, timing and access.",
    "summary.whatsapp": "Send via WhatsApp",
    "summary.copy": "Copy request",
    "arrival.rules.title": "We do not provide",
    "arrival.rules.text": "Prescription medicine, tobacco/nicotine, unpackaged cooked food, high-value items or baby formula without exact brand instructions.",
    "arrival.subs.title": "Substitutions",
    "arrival.subs.text": "If an item is unavailable, we can replace it with a similar product, contact you on WhatsApp or skip it.",
    "arrival.allergy.title": "Allergies",
    "arrival.allergy.text": "We follow your instructions, but we cannot guarantee a completely allergen-free environment.",
    "prices.eyebrow": "Simple starting prices",
    "prices.title": "Plans and service fees",
    "prices.subtitle": "Prices are starting points. We confirm the final quote after address, access and arrival details.",
    "prices.badge": "Best start",
    "prices.arrival.title": "Arrival Box",
    "prices.arrival.text": "Shopping service fee. Products are charged at actual supermarket receipt price.",
    "prices.arrival.li1": "custom grocery checklist",
    "prices.arrival.li2": "fresh shopping by request",
    "prices.arrival.li3": "delivery and placement inside",
    "prices.ready.title": "Full Arrival Ready",
    "prices.ready.text": "Apartment check, airing, fridge on, utility check and Arrival Box coordination.",
    "prices.ready.li1": "pre-arrival apartment check",
    "prices.ready.li2": "grocery shopping service",
    "prices.ready.li3": "photo report before arrival",
    "prices.home.title": "Home Check",
    "prices.home.text": "Monthly visual apartment check for second-home owners who live abroad.",
    "prices.home.li1": "windows, doors and leaks",
    "prices.home.li2": "water, electricity and general condition",
    "prices.home.li3": "photo report",
    "prices.key.title": "Key Holding",
    "prices.key.text": "Key custody and controlled access for approved visits, deliveries or maintenance.",
    "prices.key.li1": "key custody",
    "prices.key.li2": "access log",
    "prices.key.li3": "extra visits by request",
    "process.eyebrow": "How it works",
    "process.title": "A simple 4-step process",
    "process.s1.title": "Send details",
    "process.s1.text": "Address, arrival date, access and what you need prepared.",
    "process.s2.title": "Confirm quote",
    "process.s2.text": "We confirm the service fee and shopping/deposit logic.",
    "process.s3.title": "We prepare",
    "process.s3.text": "We check the apartment, shop, coordinate cleaning or maintenance if needed.",
    "process.s4.title": "Photo report",
    "process.s4.text": "You receive photos and confirmation before you arrive.",
    "areas.eyebrow": "Service area",
    "areas.title": "Starting in Alicante and nearby coastal areas.",
    "faq.eyebrow": "FAQ",
    "faq.title": "Common questions",
    "faq.q1": "Do you sell groceries?",
    "faq.a1": "No. We provide a shopping and apartment preparation service. Products are bought fresh by request and charged at the actual supermarket receipt price.",
    "faq.q2": "Do you manage tourist rentals?",
    "faq.a2": "Not at this stage. We focus on property care, key holding, home checks, pre-arrival preparation and coordination services.",
    "faq.q3": "Can you buy baby formula?",
    "faq.a3": "Only if you provide the exact brand, age/stage and any allergy instructions. We do not choose baby formula ourselves.",
    "faq.q4": "What happens if something is unavailable?",
    "faq.a4": "You can choose: replace with a similar item, contact you via WhatsApp or skip the item.",
    "faq.q5": "Do you provide legal or tax services?",
    "faq.a5": "No. If legal, tax or tourism-registration help is needed, we can coordinate with independent professionals.",
    "contact.eyebrow": "Start with WhatsApp",
    "contact.title": "Tell us when you arrive and what you need prepared.",
    "contact.text": "Send your address area, arrival date, access situation and the services you need. We will confirm the quote and next steps.",
    "form.name": "Name",
    "form.area": "Apartment area",
    "form.arrivalDate": "Arrival date",
    "form.service": "Service needed",
    "form.message": "Message",
    "form.submit": "Send WhatsApp request",
    "form.note": "Replace the WhatsApp number in script.js before publishing.",
    "footer.text": "Property care, key holding and pre-arrival preparation in Alicante.",
    "nav.report": "Photo report",
    "forwhom.eyebrow": "Who it is for",
    "forwhom.title": "Built for owners who are not always in Spain.",
    "forwhom.subtitle": "The service is designed for people who need a trusted local person, not just a delivery.",
    "forwhom.owner.title": "Second-home owners",
    "forwhom.owner.text": "You live abroad and want to know your Alicante home is safe, checked and ready.",
    "forwhom.family.title": "Families arriving late",
    "forwhom.family.text": "Arrive after a flight with water, breakfast, baby basics and a fresh apartment waiting.",
    "forwhom.newbuyer.title": "New property buyers",
    "forwhom.newbuyer.text": "You just bought a property and need key holding, checks and local coordination.",
    "forwhom.landlord.title": "Mid-term landlords",
    "forwhom.landlord.text": "Prepare and check the property between tenants or before owner visits.",
    "forwhom.agents.title": "Real estate agents",
    "forwhom.agents.text": "Offer foreign buyers a simple after-sale care service after the keys are handed over.",
    "forwhom.managers.title": "Small property managers",
    "forwhom.managers.text": "Use us for pre-arrival checks, shopping, photo reports and extra local hands.",
    "pain.eyebrow": "Problems we solve",
    "pain.title": "The real problem is not shopping. It is distance, trust and control.",
    "pain.subtitle": "When you are abroad, small issues can become expensive or stressful. We give you eyes, keys and hands on the ground.",
    "pain.leaks.title": "Leaks and humidity",
    "pain.leaks.text": "Visual checks for water marks, smell, humidity and bathroom/kitchen problems.",
    "pain.windows.title": "Closed apartment smell",
    "pain.windows.text": "We air the apartment before arrival and check windows, balcony doors and general condition.",
    "pain.wifi.title": "Wi‑Fi and utilities",
    "pain.wifi.text": "We check water, electricity, fridge, router and air conditioning before you arrive.",
    "pain.keys.title": "No one with keys",
    "pain.keys.text": "Key holding and controlled access for approved visits, deliveries or technicians.",
    "pain.firstday.title": "Empty first day",
    "pain.firstday.text": "Arrival Box essentials: water, breakfast, household basics and baby items by request.",
    "pain.proof.title": "No proof, only words",
    "pain.proof.text": "Every visit is documented with a clear photo report and short status summary.",
    "report.eyebrow": "Photo report",
    "report.title": "You receive a clear status, not just “everything is OK”.",
    "report.text": "After a check or pre-arrival preparation, we send photos and a short status so you know what was checked and whether anything needs attention.",
    "report.cta": "Request a sample report",
    "report.cardTitle": "Apartment check report",
    "report.cardSubtitle": "Playa San Juan · Before arrival",
    "report.status": "OK",
    "report.item1": "Entrance door and keys",
    "report.item2": "Windows and balcony",
    "report.item3": "Kitchen and fridge",
    "report.item4": "Bathroom and visible leaks",
    "report.item5": "Water, electricity and Wi‑Fi",
    "report.item6": "Arrival Box placed inside",
    "report.note": "Notes: Apartment aired, fridge turned on, no visible issues. Photos attached.",
    "keys.eyebrow": "Key security",
    "keys.title": "How we protect your keys and access.",
    "keys.k1.title": "Coded keys",
    "keys.k1.text": "Keys are not labelled with the property address.",
    "keys.k2.title": "Written approval",
    "keys.k2.text": "Access only happens after your approval by WhatsApp or email.",
    "keys.k3.title": "Access log",
    "keys.k3.text": "Each visit is recorded with date, reason and photos where needed.",
    "keys.k4.title": "Photo confirmation",
    "keys.k4.text": "You receive confirmation after checks, deliveries or technician access.",
    "scope.eyebrow": "Clear scope",
    "scope.title": "We are not a tourist rental agency.",
    "scope.text": "We focus on property care, key holding, home checks, pre-arrival preparation and coordination. We do not operate tourist rentals or provide legal/tax services. If needed, we can coordinate with independent professionals."
  },
  "ru": {
    "nav.services": "Услуги",
    "nav.arrival": "Arrival Box",
    "nav.prices": "Цены",
    "nav.faq": "FAQ",
    "nav.cta": "Оставить заявку",
    "hero.eyebrow": "Аликанте · Playa San Juan · El Campello",
    "hero.title": "Есть квартира в Аликанте, но вы живёте не в Испании?",
    "hero.subtitle": "Мы храним ключи, проверяем квартиру, готовим её к приезду и отправляем понятные фотоотчёты.",
    "hero.primary": "Подготовить квартиру",
    "hero.secondary": "Смотреть пакеты",
    "hero.trust1.title": "Фотоотчёты",
    "hero.trust1.text": "после каждого визита",
    "hero.trust2.title": "Без склада",
    "hero.trust2.text": "свежая закупка под заказ",
    "hero.trust3.title": "WhatsApp first",
    "hero.trust3.text": "простая координация",
    "hero.cardTitle": "Самое востребованное",
    "hero.item1.title": "Проверка перед приездом",
    "hero.item1.text": "проветрить, проверить коммуникации, включить холодильник.",
    "hero.item2.title": "Arrival Box",
    "hero.item2.text": "базовые продукты и бытовые мелочи уже в квартире.",
    "hero.item3.title": "Ежемесячная проверка",
    "hero.item3.text": "окна, вода, электричество, протечки и фотоотчёт.",
    "hero.cardCta": "Получить расчёт",
    "problem.eyebrow": "Для владельцев, которые живут не в Испании",
    "problem.title": "Вашей квартире в Аликанте нужен человек на месте, пока вас нет.",
    "problem.text": "Протечки, влажность, закрытые окна, неработающий Wi‑Fi, потерянные ключи или пустой холодильник могут испортить первый день. Мы проверяем, готовим и документируем квартиру до вашего приезда.",
    "services.eyebrow": "Что мы делаем",
    "services.title": "Услуги FlatCare",
    "services.subtitle": "Начните с Full Arrival Ready, Home Check или Key Holding, а Arrival Box добавляйте по необходимости.",
    "services.key.title": "Хранение ключей",
    "services.key.text": "Безопасное хранение ключей, доступ по согласованию и понятный журнал визитов.",
    "services.check.title": "Проверки квартиры",
    "services.check.text": "Регулярный визуальный осмотр окон, протечек, электричества, воды, влажности и общего состояния.",
    "services.arrival.title": "Arrival Boxes",
    "services.arrival.text": "Мы покупаем выбранные продукты и бытовые мелочи, раскладываем их в квартире и отправляем фотоотчёт.",
    "services.prepare.title": "Подготовка к приезду",
    "services.prepare.text": "Проветрить квартиру, включить холодильник, проверить Wi‑Fi, воду и электричество.",
    "services.cleaning.title": "Координация уборки",
    "services.cleaning.text": "Организуем уборку через местных партнёров и проверяем квартиру перед приездом.",
    "services.maintenance.title": "Координация мастеров",
    "services.maintenance.text": "Помогаем организовать сантехника, электрика, кондиционеры и мелкие бытовые задачи.",
    "arrival.eyebrow": "Закупка к приезду",
    "arrival.title": "Соберите свой Arrival Box",
    "arrival.subtitle": "Выберите, что должно быть в квартире к приезду. Мы покупаем свежие продукты под заказ, чек из магазина оплачивается отдельно.",
    "arrival.preset.basic": "Базовый",
    "arrival.preset.family": "Семейный",
    "arrival.preset.baby": "С малышом",
    "arrival.preset.longstay": "Long stay",
    "arrival.preset.custom": "Свой набор",
    "arrival.cat.drinks": "Напитки",
    "arrival.cat.breakfast": "Завтрак",
    "arrival.cat.fresh": "Свежие продукты",
    "arrival.cat.kids": "Дети и малыши",
    "arrival.cat.household": "Бытовые мелочи",
    "arrival.cat.beach": "Пляж",
    "arrival.cat.prep": "Подготовка квартиры",
    "summary.title": "Ваша заявка",
    "summary.items": "позиций выбрано",
    "summary.priceTitle": "Стоимость",
    "summary.priceText": "Сервисный сбор от €39 + чек супермаркета. Финальная цена зависит от зоны, времени и доступа.",
    "summary.whatsapp": "Отправить в WhatsApp",
    "summary.copy": "Скопировать заявку",
    "arrival.rules.title": "Что мы не покупаем",
    "arrival.rules.text": "Рецептурные лекарства, табак/никотин, готовую еду без упаковки, дорогие товары и детские смеси без точного указания бренда.",
    "arrival.subs.title": "Замены",
    "arrival.subs.text": "Если товара нет в наличии, мы можем заменить похожим, написать вам в WhatsApp или пропустить позицию.",
    "arrival.allergy.title": "Аллергии",
    "arrival.allergy.text": "Мы следуем вашим инструкциям, но не можем гарантировать полностью безаллергенную среду.",
    "prices.eyebrow": "Простые стартовые цены",
    "prices.title": "Пакеты и сервисные сборы",
    "prices.subtitle": "Это стартовые цены. Финальный расчёт подтверждаем после адреса, доступа и даты приезда.",
    "prices.badge": "Лучший старт",
    "prices.arrival.title": "Arrival Box",
    "prices.arrival.text": "Сервисный сбор за закупку. Продукты оплачиваются по фактическому чеку из супермаркета.",
    "prices.arrival.li1": "индивидуальный список продуктов",
    "prices.arrival.li2": "свежая закупка под заказ",
    "prices.arrival.li3": "доставка и раскладка внутри квартиры",
    "prices.ready.title": "Full Arrival Ready",
    "prices.ready.text": "Проверка квартиры, проветривание, холодильник, коммуникации и координация Arrival Box.",
    "prices.ready.li1": "проверка квартиры перед приездом",
    "prices.ready.li2": "сервис закупки продуктов",
    "prices.ready.li3": "фотоотчёт до приезда",
    "prices.home.title": "Home Check",
    "prices.home.text": "Ежемесячная визуальная проверка квартиры для владельцев, которые живут за границей.",
    "prices.home.li1": "окна, двери и протечки",
    "prices.home.li2": "вода, электричество и общее состояние",
    "prices.home.li3": "фотоотчёт",
    "prices.key.title": "Key Holding",
    "prices.key.text": "Хранение ключей и контролируемый доступ для согласованных визитов, доставок или мастеров.",
    "prices.key.li1": "хранение ключей",
    "prices.key.li2": "журнал доступа",
    "prices.key.li3": "дополнительные визиты по запросу",
    "process.eyebrow": "Как это работает",
    "process.title": "Простой процесс из 4 шагов",
    "process.s1.title": "Вы отправляете детали",
    "process.s1.text": "Адрес, дата приезда, доступ и что нужно подготовить.",
    "process.s2.title": "Подтверждаем расчёт",
    "process.s2.text": "Согласуем сервисный сбор и логику оплаты закупки/депозита.",
    "process.s3.title": "Мы готовим квартиру",
    "process.s3.text": "Проверяем квартиру, покупаем продукты, координируем уборку или мастеров при необходимости.",
    "process.s4.title": "Фотоотчёт",
    "process.s4.text": "Вы получаете фотографии и подтверждение до приезда.",
    "areas.eyebrow": "Зона обслуживания",
    "areas.title": "Начинаем с Аликанте и ближайших прибрежных районов.",
    "faq.eyebrow": "FAQ",
    "faq.title": "Частые вопросы",
    "faq.q1": "Вы продаёте продукты?",
    "faq.a1": "Нет. Мы оказываем услугу закупки и подготовки квартиры. Продукты покупаются свежими под заказ и оплачиваются по фактическому чеку супермаркета.",
    "faq.q2": "Вы управляете туристической арендой?",
    "faq.a2": "На этом этапе нет. Мы фокусируемся на уходе за квартирой, хранении ключей, проверках, подготовке к приезду и координации.",
    "faq.q3": "Можно купить детскую смесь?",
    "faq.a3": "Только если вы укажете точный бренд, возраст/ступень и информацию об аллергиях. Мы не выбираем детскую смесь самостоятельно.",
    "faq.q4": "Что если товара нет в магазине?",
    "faq.a4": "Можно выбрать: заменить похожим товаром, связаться с вами в WhatsApp или пропустить позицию.",
    "faq.q5": "Вы оказываете юридические или налоговые услуги?",
    "faq.a5": "Нет. Если нужна юридическая, налоговая или туристическая регистрация, мы можем координировать с независимыми специалистами.",
    "contact.eyebrow": "Начать с WhatsApp",
    "contact.title": "Скажите, когда вы приезжаете и что нужно подготовить.",
    "contact.text": "Отправьте район, дату приезда, ситуацию с доступом и нужные услуги. Мы подтвердим расчёт и следующие шаги.",
    "form.name": "Имя",
    "form.area": "Район квартиры",
    "form.arrivalDate": "Дата приезда",
    "form.service": "Нужная услуга",
    "form.message": "Сообщение",
    "form.submit": "Отправить заявку в WhatsApp",
    "form.note": "Перед публикацией замените номер WhatsApp в script.js.",
    "footer.text": "Уход за квартирой, хранение ключей и подготовка к приезду в Аликанте.",
    "nav.report": "Фотоотчёт",
    "forwhom.eyebrow": "Для кого",
    "forwhom.title": "Для владельцев, которые не всегда находятся в Испании.",
    "forwhom.subtitle": "Это сервис для тех, кому нужен доверенный человек на месте, а не просто доставка.",
    "forwhom.owner.title": "Владельцы второй недвижимости",
    "forwhom.owner.text": "Вы живёте за границей и хотите знать, что квартира в Аликанте в порядке и готова.",
    "forwhom.family.title": "Семьи с поздним прилётом",
    "forwhom.family.text": "После перелёта вас ждут вода, завтрак, детские мелочи и свежая квартира.",
    "forwhom.newbuyer.title": "Новые покупатели недвижимости",
    "forwhom.newbuyer.text": "Вы купили объект и вам нужны ключи, проверки и локальная координация.",
    "forwhom.landlord.title": "Владельцы mid-term аренды",
    "forwhom.landlord.text": "Проверка и подготовка квартиры между арендаторами или перед приездом владельца.",
    "forwhom.agents.title": "Агентства недвижимости",
    "forwhom.agents.text": "Дополнительный after-sale сервис для иностранных покупателей после передачи ключей.",
    "forwhom.managers.title": "Небольшие управляющие",
    "forwhom.managers.text": "Помогаем с проверками, закупками, фотоотчётами и задачами на месте.",
    "pain.eyebrow": "Какие проблемы решаем",
    "pain.title": "Настоящая проблема не в покупках, а в расстоянии, доверии и контроле.",
    "pain.subtitle": "Когда вы за границей, маленькая проблема может стать дорогой и стрессовой. Мы даём вам глаза, ключи и руки на месте.",
    "pain.leaks.title": "Протечки и влажность",
    "pain.leaks.text": "Визуальная проверка следов воды, запаха, влажности, кухни и ванной.",
    "pain.windows.title": "Запах закрытой квартиры",
    "pain.windows.text": "Проветриваем квартиру перед приездом, проверяем окна, балконные двери и общее состояние.",
    "pain.wifi.title": "Wi‑Fi и коммуникации",
    "pain.wifi.text": "Проверяем воду, электричество, холодильник, роутер и кондиционер перед приездом.",
    "pain.keys.title": "Некому доверить ключи",
    "pain.keys.text": "Хранение ключей и контролируемый доступ для согласованных визитов, доставок или мастеров.",
    "pain.firstday.title": "Пустой первый день",
    "pain.firstday.text": "Arrival Box: вода, завтрак, бытовые мелочи и детские товары по запросу.",
    "pain.proof.title": "Не слова, а подтверждение",
    "pain.proof.text": "Каждый визит подтверждается понятным фотоотчётом и коротким статусом.",
    "report.eyebrow": "Фотоотчёт",
    "report.title": "Вы получаете понятный статус, а не просто “всё нормально”.",
    "report.text": "После проверки или подготовки к приезду мы отправляем фотографии и короткий статус: что проверено и требует ли что-то внимания.",
    "report.cta": "Запросить пример отчёта",
    "report.cardTitle": "Отчёт проверки квартиры",
    "report.cardSubtitle": "Playa San Juan · До приезда",
    "report.status": "OK",
    "report.item1": "Входная дверь и ключи",
    "report.item2": "Окна и балкон",
    "report.item3": "Кухня и холодильник",
    "report.item4": "Ванная и видимые протечки",
    "report.item5": "Вода, электричество и Wi‑Fi",
    "report.item6": "Arrival Box размещён в квартире",
    "report.note": "Комментарий: квартира проветрена, холодильник включён, видимых проблем нет. Фото приложены.",
    "keys.eyebrow": "Безопасность ключей",
    "keys.title": "Как мы защищаем ключи и доступ.",
    "keys.k1.title": "Кодированные ключи",
    "keys.k1.text": "На ключах не указывается адрес объекта.",
    "keys.k2.title": "Письменное согласование",
    "keys.k2.text": "Доступ только после вашего подтверждения в WhatsApp или email.",
    "keys.k3.title": "Журнал доступа",
    "keys.k3.text": "Каждый визит фиксируется: дата, причина и фото при необходимости.",
    "keys.k4.title": "Фото-подтверждение",
    "keys.k4.text": "После проверки, доставки или допуска мастера вы получаете подтверждение.",
    "scope.eyebrow": "Чёткие рамки",
    "scope.title": "Мы не агентство туристической аренды.",
    "scope.text": "Мы занимаемся уходом за квартирой, хранением ключей, проверками, подготовкой к приезду и координацией. Мы не управляем туристической арендой и не оказываем юридические/налоговые услуги. При необходимости можем координировать с независимыми специалистами."
  },
  "es": {
    "nav.services": "Servicios",
    "nav.arrival": "Arrival Box",
    "nav.prices": "Precios",
    "nav.faq": "FAQ",
    "nav.cta": "Solicitar servicio",
    "hero.eyebrow": "Alicante · Playa San Juan · El Campello",
    "hero.title": "¿Tienes una vivienda en Alicante y vives fuera?",
    "hero.subtitle": "Custodiamos las llaves, revisamos la vivienda, la preparamos antes de tu llegada y enviamos informes con fotos.",
    "hero.primary": "Preparar mi vivienda",
    "hero.secondary": "Ver planes FlatCare",
    "hero.trust1.title": "Informes con fotos",
    "hero.trust1.text": "después de cada visita",
    "hero.trust2.title": "Sin almacén",
    "hero.trust2.text": "compra fresca bajo pedido",
    "hero.trust3.title": "WhatsApp primero",
    "hero.trust3.text": "coordinación sencilla",
    "hero.cardTitle": "Más solicitado",
    "hero.item1.title": "Revisión antes de llegada",
    "hero.item1.text": "ventilar, comprobar suministros, encender la nevera.",
    "hero.item2.title": "Arrival Box",
    "hero.item2.text": "alimentos básicos y productos del hogar ya dentro.",
    "hero.item3.title": "Revisión mensual",
    "hero.item3.text": "ventanas, agua, electricidad, fugas e informe con fotos.",
    "hero.cardCta": "Pedir presupuesto",
    "problem.eyebrow": "Para propietarios que viven fuera",
    "problem.title": "Tu vivienda en Alicante necesita a alguien local mientras estás fuera.",
    "problem.text": "Fugas, humedad, ventanas cerradas, Wi‑Fi roto, llaves perdidas o una nevera vacía pueden arruinar el primer día. Revisamos, preparamos y documentamos la vivienda antes de tu llegada.",
    "services.eyebrow": "Qué hacemos",
    "services.title": "Servicios FlatCare",
    "services.subtitle": "Empieza con Full Arrival Ready, Home Check o Key Holding, y añade Arrival Box cuando lo necesites.",
    "services.key.title": "Custodia de llaves",
    "services.key.text": "Custodia segura, acceso controlado para visitas autorizadas y registro claro de accesos.",
    "services.check.title": "Revisiones de vivienda",
    "services.check.text": "Revisión visual periódica de ventanas, fugas, electricidad, agua, humedad y estado general.",
    "services.arrival.title": "Arrival Boxes",
    "services.arrival.text": "Compramos productos seleccionados, los colocamos dentro y enviamos un informe con fotos.",
    "services.prepare.title": "Preparación antes de llegada",
    "services.prepare.text": "Ventilar, encender la nevera, comprobar Wi‑Fi, agua y electricidad antes de llegar.",
    "services.cleaning.title": "Coordinación de limpieza",
    "services.cleaning.text": "Coordinamos limpieza con colaboradores locales y revisamos la vivienda antes de la llegada.",
    "services.maintenance.title": "Coordinación de mantenimiento",
    "services.maintenance.text": "Ayudamos a organizar fontaneros, electricistas, aire acondicionado y pequeñas tareas.",
    "arrival.eyebrow": "Compra antes de llegada",
    "arrival.title": "Crea tu Arrival Box",
    "arrival.subtitle": "Elige lo que quieres encontrar en la vivienda. Compramos fresco bajo pedido y el ticket del supermercado se cobra aparte.",
    "arrival.preset.basic": "Básico",
    "arrival.preset.family": "Familia",
    "arrival.preset.baby": "Bebé",
    "arrival.preset.longstay": "Larga estancia",
    "arrival.preset.custom": "Personalizado",
    "arrival.cat.drinks": "Bebidas",
    "arrival.cat.breakfast": "Desayuno",
    "arrival.cat.fresh": "Frescos",
    "arrival.cat.kids": "Niños y bebé",
    "arrival.cat.household": "Hogar básico",
    "arrival.cat.beach": "Playa",
    "arrival.cat.prep": "Preparación de vivienda",
    "summary.title": "Tu solicitud",
    "summary.items": "artículos seleccionados",
    "summary.priceTitle": "Precio",
    "summary.priceText": "Servicio desde €39 + ticket del supermercado. Presupuesto final según zona, horario y acceso.",
    "summary.whatsapp": "Enviar por WhatsApp",
    "summary.copy": "Copiar solicitud",
    "arrival.rules.title": "No ofrecemos",
    "arrival.rules.text": "Medicamentos con receta, tabaco/nicotina, comida cocinada sin empaquetar, artículos de alto valor o leche infantil sin marca exacta.",
    "arrival.subs.title": "Sustituciones",
    "arrival.subs.text": "Si algo no está disponible, podemos sustituirlo por similar, contactarte por WhatsApp o saltarlo.",
    "arrival.allergy.title": "Alergias",
    "arrival.allergy.text": "Seguimos tus instrucciones, pero no podemos garantizar un entorno totalmente libre de alérgenos.",
    "prices.eyebrow": "Precios iniciales sencillos",
    "prices.title": "Planes y tarifas de servicio",
    "prices.subtitle": "Son precios iniciales. Confirmamos presupuesto tras dirección, acceso y detalles de llegada.",
    "prices.badge": "Mejor inicio",
    "prices.arrival.title": "Arrival Box",
    "prices.arrival.text": "Tarifa de servicio de compra. Los productos se cobran según el ticket real del supermercado.",
    "prices.arrival.li1": "lista personalizada",
    "prices.arrival.li2": "compra fresca bajo pedido",
    "prices.arrival.li3": "entrega y colocación dentro",
    "prices.ready.title": "Full Arrival Ready",
    "prices.ready.text": "Revisión, ventilación, nevera encendida, suministros y coordinación del Arrival Box.",
    "prices.ready.li1": "revisión antes de llegada",
    "prices.ready.li2": "servicio de compra",
    "prices.ready.li3": "informe con fotos antes de llegar",
    "prices.home.title": "Home Check",
    "prices.home.text": "Revisión visual mensual para propietarios que viven fuera.",
    "prices.home.li1": "ventanas, puertas y fugas",
    "prices.home.li2": "agua, electricidad y estado general",
    "prices.home.li3": "informe con fotos",
    "prices.key.title": "Key Holding",
    "prices.key.text": "Custodia de llaves y acceso controlado para visitas, entregas o mantenimiento autorizados.",
    "prices.key.li1": "custodia de llaves",
    "prices.key.li2": "registro de accesos",
    "prices.key.li3": "visitas extra bajo pedido",
    "process.eyebrow": "Cómo funciona",
    "process.title": "Proceso sencillo en 4 pasos",
    "process.s1.title": "Envía detalles",
    "process.s1.text": "Dirección, fecha de llegada, acceso y qué necesitas preparar.",
    "process.s2.title": "Confirmamos presupuesto",
    "process.s2.text": "Confirmamos tarifa de servicio y lógica de compra/depósito.",
    "process.s3.title": "Preparamos",
    "process.s3.text": "Revisamos la vivienda, compramos y coordinamos limpieza o mantenimiento si hace falta.",
    "process.s4.title": "Informe con fotos",
    "process.s4.text": "Recibes fotos y confirmación antes de llegar.",
    "areas.eyebrow": "Zona de servicio",
    "areas.title": "Empezamos en Alicante y zonas costeras cercanas.",
    "faq.eyebrow": "FAQ",
    "faq.title": "Preguntas frecuentes",
    "faq.q1": "¿Vendéis productos?",
    "faq.a1": "No. Prestamos un servicio de compra y preparación de vivienda. Los productos se compran bajo pedido y se cobran según el ticket real.",
    "faq.q2": "¿Gestionáis alquiler turístico?",
    "faq.a2": "Por ahora no. Nos centramos en cuidado de vivienda, custodia de llaves, revisiones, preparación antes de llegada y coordinación.",
    "faq.q3": "¿Podéis comprar leche infantil?",
    "faq.a3": "Solo si indicas marca exacta, edad/etapa e instrucciones de alergias. No elegimos leche infantil por nuestra cuenta.",
    "faq.q4": "¿Qué pasa si algo no está disponible?",
    "faq.a4": "Puedes elegir: sustituir por similar, contactarte por WhatsApp o saltar el producto.",
    "faq.q5": "¿Ofrecéis servicios legales o fiscales?",
    "faq.a5": "No. Si se necesita ayuda legal, fiscal o de registro turístico, podemos coordinar con profesionales independientes.",
    "contact.eyebrow": "Empieza por WhatsApp",
    "contact.title": "Dinos cuándo llegas y qué necesitas preparar.",
    "contact.text": "Envía la zona, fecha de llegada, situación de acceso y servicios necesarios. Confirmaremos presupuesto y próximos pasos.",
    "form.name": "Nombre",
    "form.area": "Zona de la vivienda",
    "form.arrivalDate": "Fecha de llegada",
    "form.service": "Servicio necesario",
    "form.message": "Mensaje",
    "form.submit": "Enviar solicitud por WhatsApp",
    "form.note": "Sustituye el número de WhatsApp en script.js antes de publicar.",
    "footer.text": "Cuidado de vivienda, custodia de llaves y preparación antes de llegada en Alicante.",
    "nav.report": "Informe",
    "forwhom.eyebrow": "Para quién",
    "forwhom.title": "Para propietarios que no siempre están en España.",
    "forwhom.subtitle": "Un servicio para quienes necesitan una persona local de confianza, no solo una entrega.",
    "forwhom.owner.title": "Propietarios de segunda vivienda",
    "forwhom.owner.text": "Vives fuera y quieres saber que tu vivienda en Alicante está segura, revisada y lista.",
    "forwhom.family.title": "Familias que llegan tarde",
    "forwhom.family.text": "Después del vuelo te esperan agua, desayuno, básicos para bebé y una vivienda ventilada.",
    "forwhom.newbuyer.title": "Nuevos compradores",
    "forwhom.newbuyer.text": "Acabas de comprar una propiedad y necesitas llaves, revisiones y coordinación local.",
    "forwhom.landlord.title": "Propietarios de media estancia",
    "forwhom.landlord.text": "Preparar y revisar la vivienda entre inquilinos o antes de visitas del propietario.",
    "forwhom.agents.title": "Agencias inmobiliarias",
    "forwhom.agents.text": "Ofrece a compradores extranjeros un servicio postventa sencillo tras la entrega de llaves.",
    "forwhom.managers.title": "Pequeños gestores",
    "forwhom.managers.text": "Apoyo con revisiones, compras, informes con fotos y tareas locales.",
    "pain.eyebrow": "Problemas que resolvemos",
    "pain.title": "El problema real no es la compra. Es distancia, confianza y control.",
    "pain.subtitle": "Cuando estás fuera, un pequeño problema puede ser caro o estresante. Te damos ojos, llaves y manos en la zona.",
    "pain.leaks.title": "Fugas y humedad",
    "pain.leaks.text": "Revisión visual de marcas de agua, olor, humedad y problemas en cocina/baño.",
    "pain.windows.title": "Olor a vivienda cerrada",
    "pain.windows.text": "Ventilamos antes de la llegada y revisamos ventanas, balcones y estado general.",
    "pain.wifi.title": "Wi‑Fi y suministros",
    "pain.wifi.text": "Comprobamos agua, electricidad, nevera, router y aire acondicionado antes de llegar.",
    "pain.keys.title": "Nadie con llaves",
    "pain.keys.text": "Custodia de llaves y acceso controlado para visitas, entregas o técnicos autorizados.",
    "pain.firstday.title": "Primer día vacío",
    "pain.firstday.text": "Arrival Box: agua, desayuno, básicos de hogar y artículos de bebé bajo pedido.",
    "pain.proof.title": "No solo palabras",
    "pain.proof.text": "Cada visita se documenta con un informe claro con fotos y un estado breve.",
    "report.eyebrow": "Informe con fotos",
    "report.title": "Recibes un estado claro, no solo “todo está bien”.",
    "report.text": "Después de una revisión o preparación, enviamos fotos y un breve estado para que sepas qué se comprobó y si algo requiere atención.",
    "report.cta": "Pedir informe de ejemplo",
    "report.cardTitle": "Informe de revisión",
    "report.cardSubtitle": "Playa San Juan · Antes de llegada",
    "report.status": "OK",
    "report.item1": "Puerta de entrada y llaves",
    "report.item2": "Ventanas y balcón",
    "report.item3": "Cocina y nevera",
    "report.item4": "Baño y fugas visibles",
    "report.item5": "Agua, electricidad y Wi‑Fi",
    "report.item6": "Arrival Box colocado dentro",
    "report.note": "Notas: vivienda ventilada, nevera encendida, sin problemas visibles. Fotos adjuntas.",
    "keys.eyebrow": "Seguridad de llaves",
    "keys.title": "Cómo protegemos tus llaves y el acceso.",
    "keys.k1.title": "Llaves codificadas",
    "keys.k1.text": "Las llaves no llevan la dirección de la propiedad.",
    "keys.k2.title": "Aprobación por escrito",
    "keys.k2.text": "El acceso se realiza solo tras tu aprobación por WhatsApp o email.",
    "keys.k3.title": "Registro de acceso",
    "keys.k3.text": "Cada visita se registra con fecha, motivo y fotos si hace falta.",
    "keys.k4.title": "Confirmación con fotos",
    "keys.k4.text": "Recibes confirmación tras revisiones, entregas o acceso de técnicos.",
    "scope.eyebrow": "Alcance claro",
    "scope.title": "No somos una agencia de alquiler turístico.",
    "scope.text": "Nos centramos en cuidado de vivienda, custodia de llaves, revisiones, preparación antes de llegada y coordinación. No gestionamos alquiler turístico ni ofrecemos servicios legales/fiscales. Si hace falta, podemos coordinar con profesionales independientes."
  }
};

const items = {
  drinks: [
    ["stillWater15","Still water 1.5L","Вода 1,5 л","Agua sin gas 1,5L"],
    ["stillWater5","Still water 5L","Вода 5 л","Agua sin gas 5L"],
    ["sparklingWater","Sparkling water","Газированная вода","Agua con gas"],
    ["milk","Milk","Молоко","Leche"],
    ["plantMilk","Plant-based milk","Растительное молоко","Leche vegetal"],
    ["orangeJuice","Orange juice","Апельсиновый сок","Zumo de naranja"],
    ["softDrinks","Soft drinks","Газированные напитки","Refrescos"]
  ],
  breakfast: [
    ["bread","Bread","Хлеб","Pan"],
    ["toastBread","Toast bread","Тостовый хлеб","Pan de molde"],
    ["butter","Butter","Масло","Mantequilla"],
    ["cheese","Cheese","Сыр","Queso"],
    ["hamTurkey","Ham / turkey","Ветчина / индейка","Jamón / pavo"],
    ["eggs","Eggs","Яйца","Huevos"],
    ["yogurts","Yogurts","Йогурты","Yogures"],
    ["cereal","Cereal / granola","Хлопья / гранола","Cereales / granola"],
    ["jam","Jam","Джем","Mermelada"],
    ["coffee","Coffee","Кофе","Café"],
    ["tea","Tea","Чай","Té"],
    ["sugar","Sugar","Сахар","Azúcar"]
  ],
  fresh: [
    ["bananas","Bananas","Бананы","Plátanos"],
    ["apples","Apples","Яблоки","Manzanas"],
    ["oranges","Oranges","Апельсины","Naranjas"],
    ["seasonalFruit","Seasonal fruit","Сезонные фрукты","Fruta de temporada"],
    ["tomatoes","Tomatoes","Помидоры","Tomates"],
    ["cucumbers","Cucumbers","Огурцы","Pepinos"],
    ["salad","Salad mix","Салатный микс","Mezcla de ensalada"],
    ["avocado","Avocado","Авокадо","Aguacate"],
    ["lemon","Lemon","Лимон","Limón"]
  ],
  kids: [
    ["kidsYogurts","Kids yogurts","Детские йогурты","Yogures infantiles"],
    ["juiceBoxes","Juice boxes","Соки для детей","Zumos infantiles"],
    ["cookies","Cookies","Печенье","Galletas"],
    ["fruitPouches","Fruit pouches","Фруктовые пюре","Pouches de fruta"],
    ["babyWipes","Baby wipes","Влажные салфетки","Toallitas de bebé"],
    ["diapers","Diapers","Подгузники","Pañales"],
    ["babyFood","Baby food jars","Детское питание в банках","Potitos"]
  ],
  household: [
    ["toiletPaper","Toilet paper","Туалетная бумага","Papel higiénico"],
    ["kitchenPaper","Kitchen paper","Бумажные полотенца","Papel de cocina"],
    ["trashBags","Trash bags","Мусорные пакеты","Bolsas de basura"],
    ["dishSoap","Dish soap","Средство для посуды","Lavavajillas a mano"],
    ["sponge","Sponge","Губки","Esponja"],
    ["dishTabs","Dishwasher tablets","Таблетки для посудомойки","Pastillas lavavajillas"],
    ["laundry","Laundry detergent","Средство для стирки","Detergente"],
    ["handSoap","Hand soap","Мыло для рук","Jabón de manos"],
    ["showerGel","Shower gel","Гель для душа","Gel de ducha"],
    ["shampoo","Shampoo","Шампунь","Champú"],
    ["toothpaste","Toothpaste","Зубная паста","Pasta de dientes"],
    ["oliveOil","Olive oil","Оливковое масло","Aceite de oliva"],
    ["saltPepper","Salt & pepper","Соль и перец","Sal y pimienta"]
  ],
  beach: [
    ["sunscreen","Sunscreen","Солнцезащитный крем","Protector solar"],
    ["afterSun","After sun","Средство после солнца","After sun"],
    ["beachTowels","Beach towels","Пляжные полотенца","Toallas de playa"],
    ["umbrella","Beach umbrella","Пляжный зонт","Sombrilla"],
    ["smallWater","Water bottles 0.5L","Вода 0,5 л","Botellas de agua 0,5L"],
    ["snacks","Snacks","Снеки","Snacks"],
    ["wetWipes","Wet wipes","Влажные салфетки","Toallitas"]
  ],
  prep: [
    ["airApartment","Air the apartment","Проветрить квартиру","Ventilar la vivienda"],
    ["turnFridge","Turn on fridge","Включить холодильник","Encender la nevera"],
    ["checkUtilities","Check water/electricity/Wi‑Fi","Проверить воду/свет/Wi‑Fi","Comprobar agua/luz/Wi‑Fi"],
    ["acHeating","Turn on AC/heating","Включить кондиционер/отопление","Encender aire/calefacción"],
    ["makeBeds","Make beds","Подготовить кровати","Preparar camas"],
    ["cleaning","Coordinate cleaning","Организовать уборку","Coordinar limpieza"],
    ["photoReport","Send photo report","Отправить фотоотчёт","Enviar informe con fotos"]
  ]
};

const presets = {
  basic: ["stillWater15","milk","bread","butter","eggs","coffee","tea","seasonalFruit","toiletPaper","kitchenPaper","trashBags","dishSoap","sponge","turnFridge","checkUtilities","photoReport"],
  family: ["stillWater15","milk","orangeJuice","bread","butter","cheese","hamTurkey","eggs","yogurts","cereal","coffee","seasonalFruit","kidsYogurts","juiceBoxes","cookies","toiletPaper","kitchenPaper","trashBags","dishSoap","sponge","laundry","turnFridge","checkUtilities","makeBeds","photoReport"],
  baby: ["stillWater5","milk","bread","eggs","yogurts","seasonalFruit","babyWipes","diapers","babyFood","toiletPaper","kitchenPaper","trashBags","dishSoap","laundry","turnFridge","checkUtilities","makeBeds","photoReport"],
  longstay: ["stillWater5","milk","coffee","tea","sugar","bread","eggs","oliveOil","saltPepper","seasonalFruit","tomatoes","salad","toiletPaper","kitchenPaper","trashBags","dishSoap","sponge","dishTabs","laundry","handSoap","showerGel","shampoo","toothpaste","airApartment","turnFridge","checkUtilities","photoReport"],
  custom: []
};

let currentLang = localStorage.getItem("fc_lang") || "en";

function t(key){ return translations[currentLang][key] || translations.en[key] || key; }

function itemLabel(item){
  if(currentLang === "ru") return item[2];
  if(currentLang === "es") return item[3];
  return item[1];
}

function renderTranslations(){
  document.documentElement.lang = currentLang;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if(translations[currentLang][key]) el.textContent = translations[currentLang][key];
  });
  document.querySelectorAll(".lang-btn").forEach(btn => btn.classList.toggle("active", btn.dataset.lang === currentLang));
}

function renderItems(){
  Object.entries(items).forEach(([category, categoryItems]) => {
    const wrap = document.querySelector(`[data-category="${category}"]`);
    if(!wrap) return;
    wrap.innerHTML = "";
    categoryItems.forEach(item => {
      const id = item[0];
      const label = document.createElement("label");
      label.className = "check";
      label.innerHTML = `<input type="checkbox" value="${id}" data-label="${itemLabel(item)}"><span>${itemLabel(item)}</span>`;
      wrap.appendChild(label);
    });
  });
  document.querySelectorAll('.check input').forEach(input => input.addEventListener('change', () => {
    document.querySelectorAll(".preset").forEach(btn => btn.classList.remove("active"));
    updateSummary();
  }));
}

function setPreset(name){
  const selected = new Set(presets[name] || []);
  document.querySelectorAll('.check input').forEach(input => {
    input.checked = selected.has(input.value);
  });
  document.querySelectorAll(".preset").forEach(btn => btn.classList.toggle("active", btn.dataset.preset === name));
  updateSummary();
}

function selectedItems(){
  return Array.from(document.querySelectorAll('.check input:checked')).map(input => input.dataset.label);
}

function requestText(){
  const selected = selectedItems();
  const langIntro = {
    en: "Hello! I would like to request FlatCare Alicante service.",
    ru: "Здравствуйте! Хочу оставить заявку на услугу FlatCare Alicante.",
    es: "Hola. Me gustaría solicitar un servicio de FlatCare Alicante."
  }[currentLang];
  const itemsText = selected.length ? selected.map(x => `- ${x}`).join("\n") : "- no Arrival Box items selected yet";
  return `${langIntro}\n\nArrival Box / preparation items:\n${itemsText}\n\nPlease contact me to confirm details, address, access and final quote.`;
}

function updateSummary(){
  const selected = selectedItems();
  const list = document.getElementById("selectedList");
  const count = document.getElementById("selectedCount");
  count.textContent = selected.length;
  list.innerHTML = "";
  const visible = selected.slice(0, 12);
  visible.forEach(name => {
    const li = document.createElement("li");
    li.textContent = name;
    list.appendChild(li);
  });
  if(selected.length > 12){
    const li = document.createElement("li");
    li.textContent = `+${selected.length - 12} more`;
    list.appendChild(li);
  }
  const wa = document.getElementById("whatsappBuilder");
  wa.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(requestText())}`;
}

function initLang(){
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      currentLang = btn.dataset.lang;
      localStorage.setItem("fc_lang", currentLang);
      renderTranslations();
      renderItems();
      setPreset(document.querySelector(".preset.active")?.dataset.preset || "basic");
      updateSummary();
    });
  });
}

function initPresets(){
  document.querySelectorAll(".preset").forEach(btn => {
    btn.addEventListener("click", () => setPreset(btn.dataset.preset));
  });
}

function initCopy(){
  document.getElementById("copyRequest").addEventListener("click", async () => {
    try{
      await navigator.clipboard.writeText(requestText());
      const btn = document.getElementById("copyRequest");
      const old = btn.textContent;
      btn.textContent = currentLang === "ru" ? "Скопировано" : currentLang === "es" ? "Copiado" : "Copied";
      setTimeout(() => btn.textContent = t("summary.copy"), 1600);
    }catch(e){
      alert(requestText());
    }
  });
}

function initLeadForm(){
  const form = document.getElementById("leadForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const area = document.getElementById("area").value.trim();
    const date = document.getElementById("arrivalDate").value;
    const service = document.getElementById("service").value;
    const message = document.getElementById("message").value.trim();

    const text = [
      "Hello! I would like to request FlatCare Alicante service.",
      name ? `Name: ${name}` : "",
      area ? `Area: ${area}` : "",
      date ? `Arrival date: ${date}` : "",
      service ? `Service: ${service}` : "",
      message ? `Message: ${message}` : "",
      "",
      "Please contact me to confirm details and quote."
    ].filter(Boolean).join("\n");

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initLang();
  renderTranslations();
  renderItems();
  initPresets();
  initCopy();
  initLeadForm();
  setPreset("basic");
});

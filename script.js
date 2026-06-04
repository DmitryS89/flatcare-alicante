// Replace with your real WhatsApp number in international format, digits only.
// Example: const WHATSAPP_NUMBER = "34600111222";
const WHATSAPP_NUMBER = "34XXXXXXXXX";

const translations = {
  "en": {
    "nav.services": "Services",
    "nav.arrival": "Arrival Box",
    "nav.prices": "Prices",
    "nav.estimate": "Estimate",
    "nav.faq": "FAQ",
    "nav.cta": "Request service",
    "hero.eyebrow": "Alicante · Playa San Juan · El Campello",
    "hero.title": "Own an apartment in Alicante but live abroad?",
    "hero.subtitle": "We keep the keys, check your home, prepare it before you arrive and send clear photo reports — so your Alicante apartment is cared for while you are away.",
    "hero.primary": "Prepare my apartment",
    "hero.secondary": "See care plans",
    "hero.trust1.title": "Photo reports",
    "hero.trust1.text": "after each visit",
    "hero.trust2.title": "Key holding",
    "hero.trust2.text": "trusted local access",
    "hero.trust3.title": "Arrival ready",
    "hero.trust3.text": "before you arrive",
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
    "services.title": "Luma services",
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
    
    "prices.exterior.title": "Exterior Check",
    "prices.exterior.text": "A no-key visual check from outside or common areas with a short photo update.",
    "prices.exterior.li1": "outside / entrance photos",
    "prices.exterior.li2": "mailbox check if accessible",
    "prices.exterior.li3": "short WhatsApp report",
    "prices.check.title": "Home Check",
    "prices.check.text": "Inside apartment check for owners abroad, including photos and a simple status report.",
    "prices.check.li1": "windows, doors and visible leaks",
    "prices.check.li2": "water, electricity and general condition",
    "prices.check.li3": "photo report",
    "prices.plans.title": "Care Plans",
    "prices.plans.text": "Annual care plans for owners who need key holding and scheduled home checks.",
    "prices.plans.li1": "key holding",
    "prices.plans.li2": "scheduled checks",
    "prices.plans.li3": "preferred extra visit rates",
    
    "calc.location.title": "1. Area and town",
    "calc.location.label": "Service hub",
    "calc.area.alicante": "Alicante area",
    "calc.area.benidorm": "Benidorm area",
    "calc.area.south": "South Costa Blanca area",
    "calc.area.outside": "Other area / by request",
    "calc.town.label": "Town / urbanisation",
    "calc.access.title": "3. Keys and access",
    "calc.access.label": "Keys / access situation",
    "calc.access.hold": "Luma already holds the keys +€0",
    "calc.access.neighbour": "Keys with neighbour / concierge +€10",
    "calc.access.collect": "Key collection required +€25",
    "calc.access.handover": "First key handover / setup +€35",
    "calc.property.label": "Property size",
    "calc.property.studio": "Studio / 1 bedroom +€0",
    "calc.property.two": "2 bedrooms +€10",
    "calc.property.three": "3 bedrooms +€20",
    "calc.property.villa": "Villa / large house +€35",
    "calc.timing.title": "4. Timing and waiting",
    "calc.arrivalbox.title": "5. Arrival Box and report",
    "calc.arrivalbox.label": "Arrival Box level",
    "calc.arrivalbox.none": "No Arrival Box +€0",
    "calc.arrivalbox.basic": "Basic shopping service +€69",
    "calc.arrivalbox.family": "Family shopping service +€89",
    "calc.arrivalbox.baby": "Baby / special items +€99",
    "calc.arrivalbox.longstay": "Long-stay starter +€119",
    "calc.report.label": "Report type",
    "calc.report.basic": "Basic WhatsApp photo update included",
    "calc.report.pdf": "Detailed PDF report +€15",
    "calc.report.video": "Video walkthrough +€20",
    "calc.addons.title": "6. Extra options",
    "calc.addon.cleaningCheck": "Cleaning inspection after cleaner +€25",
    "calc.eyebrow": "Service calculator",
    "calc.title": "Build your estimate",
    "calc.subtitle": "Select the services you need and get an indicative service fee before requesting a final quote.",
    "calc.location.title": "1. Area / hub",
    "calc.location.label": "Service area",
    "calc.area.alicante": "Alicante hub",
    "calc.area.benidorm": "Benidorm hub",
    "calc.area.south": "South Costa Blanca hub",
    "calc.area.outside": "Outside hub / by request",
    "calc.location.hint": "Hub pricing assumes scheduled route days. Specific urgent dates may change the quote.",
    "calc.service.title": "2. Main service",
    "calc.service.exterior": "Exterior Check — from €39",
    "calc.service.home": "Home Check — from €79",
    "calc.service.prearrival": "Pre-arrival Check — from €99",
    "calc.service.ready": "Full Arrival Ready — from €149",
    "calc.service.tech": "Technician / delivery access — from €89",
    "calc.addons.title": "3. Add-ons",
    "calc.addon.arrival": "Arrival Box shopping service +€69",
    "calc.addon.key": "Annual key holding +€149/year",
    "calc.addon.beds": "Make beds before arrival +€25",
    "calc.addon.cleaning": "Cleaning coordination +€20",
    "calc.timing.label": "Timing",
    "calc.timing.route": "Scheduled route day +€0",
    "calc.timing.specific": "Specific requested day +€20",
    "calc.timing.urgent": "Urgent / same-day +€50",
    "calc.timing.weekend": "Evening / weekend +€30",
    "calc.property.label": "Property type",
    "calc.property.apartment": "Studio / 1 bedroom +€0",
    "calc.property.townhouse": "2–3 bedrooms +€20",
    "calc.property.villa": "Villa / complex access +€35",
    "calc.waiting.label": "Extra waiting time",
    "calc.waiting.none": "No waiting +€0",
    "calc.waiting.one": "Up to 1 extra hour +€30",
    "calc.waiting.two": "Up to 2 extra hours +€60",
    "calc.waiting.three": "Up to 3 extra hours +€90",
    "calc.grocery.label": "Estimated grocery receipt",
    "calc.summary.eyebrow": "Estimated quote",
    "calc.summary.serviceFee": "Service fee",
    "calc.summary.withGroceries": "Service + grocery budget",
    "calc.summary.includes": "Selected items",
    "calc.summary.disclaimer": "This is an indicative estimate. Final quote depends on address, keys/access, parking, timing, supermarket receipt and third-party invoices.",
    "calc.summary.cta": "Request this estimate",
    "prices.eyebrow": "Simple starting prices",
    "prices.title": "Plans and service fees",
    "prices.subtitle": "Prices are starting points. Products, third-party invoices and unusual access conditions are confirmed separately.",
    "prices.badge": "Best start",
    "prices.arrival.title": "Arrival Box",
    "prices.arrival.text": "Shopping service fee. Products are charged at actual supermarket receipt price.",
    "prices.arrival.li1": "custom grocery checklist",
    "prices.arrival.li2": "fresh shopping by request",
    "prices.arrival.li3": "delivery and placement inside",
    "prices.ready.title": "Full Arrival Ready",
    "prices.ready.text": "Pre-arrival check, airing, fridge on, utilities check and Arrival Box coordination.",
    "prices.ready.li1": "apartment prepared before arrival",
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

  "es": {
    "nav.services": "Servicios",
    "nav.arrival": "Arrival Box",
    "nav.prices": "Precios",
    "nav.estimate": "Calculadora",
    "nav.faq": "FAQ",
    "nav.cta": "Solicitar servicio",
    "hero.eyebrow": "Alicante · Playa San Juan · El Campello",
    "hero.title": "¿Tienes una vivienda en Alicante y vives fuera?",
    "hero.subtitle": "Custodiamos las llaves, revisamos la vivienda, la preparamos antes de tu llegada y enviamos informes con fotos — para que tu vivienda en Alicante esté cuidada mientras estás fuera.",
    "hero.primary": "Preparar mi vivienda",
    "hero.secondary": "Ver planes",
    "hero.trust1.title": "Informes con fotos",
    "hero.trust1.text": "después de cada visita",
    "hero.trust2.title": "Custodia de llaves",
    "hero.trust2.text": "acceso local de confianza",
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
    "services.title": "Servicios Luma",
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
    ["stillWater15","Still water 1.5L","Agua sin gas 1,5L"],
    ["stillWater5","Still water 5L","Agua sin gas 5L"],
    ["sparklingWater","Sparkling water","Agua con gas"],
    ["milk","Milk","Leche"],
    ["plantMilk","Plant-based milk","Leche vegetal"],
    ["orangeJuice","Orange juice","Zumo de naranja"],
    ["softDrinks","Soft drinks","Refrescos"]
  ],
  breakfast: [
    ["bread","Bread","Pan"],
    ["toastBread","Toast bread","Pan de molde"],
    ["butter","Butter","Mantequilla"],
    ["cheese","Cheese","Queso"],
    ["hamTurkey","Ham / turkey","Jamón / pavo"],
    ["eggs","Eggs","Huevos"],
    ["yogurts","Yogurts","Yogures"],
    ["cereal","Cereal / granola","Cereales / granola"],
    ["jam","Jam","Mermelada"],
    ["coffee","Coffee","Café"],
    ["tea","Tea","Té"],
    ["sugar","Sugar","Azúcar"]
  ],
  fresh: [
    ["bananas","Bananas","Plátanos"],
    ["apples","Apples","Manzanas"],
    ["oranges","Oranges","Naranjas"],
    ["seasonalFruit","Seasonal fruit","Fruta de temporada"],
    ["tomatoes","Tomatoes","Tomates"],
    ["cucumbers","Cucumbers","Pepinos"],
    ["salad","Salad mix","Mezcla de ensalada"],
    ["avocado","Avocado","Aguacate"],
    ["lemon","Lemon","Limón"]
  ],
  kids: [
    ["kidsYogurts","Kids yogurts","Yogures infantiles"],
    ["juiceBoxes","Juice boxes","Zumos infantiles"],
    ["cookies","Cookies","Galletas"],
    ["fruitPouches","Fruit pouches","Pouches de fruta"],
    ["babyWipes","Baby wipes","Toallitas de bebé"],
    ["diapers","Diapers","Pañales"],
    ["babyFood","Baby food jars","Potitos"]
  ],
  household: [
    ["toiletPaper","Toilet paper","Papel higiénico"],
    ["kitchenPaper","Kitchen paper","Papel de cocina"],
    ["trashBags","Trash bags","Bolsas de basura"],
    ["dishSoap","Dish soap","Lavavajillas a mano"],
    ["sponge","Sponge","Esponja"],
    ["dishTabs","Dishwasher tablets","Pastillas lavavajillas"],
    ["laundry","Laundry detergent","Detergente"],
    ["handSoap","Hand soap","Jabón de manos"],
    ["showerGel","Shower gel","Gel de ducha"],
    ["shampoo","Shampoo","Champú"],
    ["toothpaste","Toothpaste","Pasta de dientes"],
    ["oliveOil","Olive oil","Aceite de oliva"],
    ["saltPepper","Salt & pepper","Sal y pimienta"]
  ],
  beach: [
    ["sunscreen","Sunscreen","Protector solar"],
    ["afterSun","After sun","After sun"],
    ["beachTowels","Beach towels","Toallas de playa"],
    ["umbrella","Beach umbrella","Sombrilla"],
    ["smallWater","Water bottles 0.5L","Botellas de agua 0,5L"],
    ["snacks","Snacks","Snacks"],
    ["wetWipes","Wet wipes","Toallitas"]
  ],
  prep: [
    ["airApartment","Air the apartment","Ventilar la vivienda"],
    ["turnFridge","Turn on fridge","Encender la nevera"],
    ["checkUtilities","Check water/electricity/Wi‑Fi","Comprobar agua/luz/Wi‑Fi"],
    ["acHeating","Turn on AC/heating","Encender aire/calefacción"],
    ["makeBeds","Make beds","Preparar camas"],
    ["cleaning","Coordinate cleaning","Coordinar limpieza"],
    ["photoReport","Send photo report","Enviar informe con fotos"]
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
if(!["en","es"].includes(currentLang)) currentLang = "en";

function t(key){ return (translations[currentLang] && translations[currentLang][key]) || translations.en[key] || key; }

function itemLabel(item){
  if(currentLang === "es") return item[2];
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
    en: "Hello! I would like to request Luma Alicante service.",
    es: "Hola. Me gustaría solicitar un servicio de Luma Alicante."
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
      currentLang = ["en","es"].includes(btn.dataset.lang) ? btn.dataset.lang : "en";
      localStorage.setItem("fc_lang", currentLang);
      renderTranslations();
      renderItems();
      setPreset(document.querySelector(".preset.active")?.dataset.preset || "basic");
      updateSummary();
      updateCalculator();
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
      btn.textContent = currentLang === "es" ? "Copiado" : "Copied";
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
      "Hello! I would like to request Luma Alicante service.",
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



function calcSelectedText(selectEl){
  if(!selectEl) return "";
  const opt = selectEl.options[selectEl.selectedIndex];
  return opt ? opt.textContent.trim() : "";
}

function money(n){
  return `€${Number(n || 0).toLocaleString("en-US")}`;
}

function calcLabelForSelect(selectId, text, value){
  if(!value) return text;

  const labels = {
    calcArea: currentLang === "es" ? "Zona especial" : "Other area",
    calcTown: currentLang === "es" ? "Suplemento de zona" : "Area surcharge",
    calcKeys: currentLang === "es" ? "Llaves / acceso" : "Keys / access",
    calcProperty: currentLang === "es" ? "Tamaño de vivienda" : "Property size",
    calcTiming: currentLang === "es" ? "Horario" : "Timing",
    calcWaiting: currentLang === "es" ? "Tiempo de espera" : "Waiting time",
    calcArrivalBox: currentLang === "es" ? "Arrival Box" : "Arrival Box",
    calcReport: currentLang === "es" ? "Informe" : "Report"
  };

  if(selectId === "calcTown"){
    return `${labels.calcTown}: ${text}`;
  }

  return text || labels[selectId] || selectId;
}

function addSelectLine(lines, selectId){
  const el = document.getElementById(selectId);
  if(!el) return 0;

  const value = Number(el.value || 0);
  const text = calcSelectedText(el);

  if(value){
    lines.push({
      name: calcLabelForSelect(selectId, text, value),
      price: value
    });
  }

  return value;
}

function calculatorData(){
  const main = document.querySelector('input[name="mainService"]:checked');
  const grocery = document.getElementById("calcGrocery");
  const lines = [];
  let serviceFee = 0;

  if(main){
    const value = Number(main.value || 0);
    serviceFee += value;
    lines.push({
      name: main.dataset.serviceName || "Main service",
      price: value
    });
  }

  ["calcArea", "calcTown", "calcKeys", "calcProperty", "calcTiming", "calcWaiting", "calcArrivalBox", "calcReport"].forEach(id => {
    serviceFee += addSelectLine(lines, id);
  });

  document.querySelectorAll(".calcAddon:checked").forEach(addon => {
    const value = Number(addon.value || 0);
    serviceFee += value;
    lines.push({
      name: addon.dataset.addonName || addon.closest("label").textContent.trim(),
      price: value
    });
  });

  const groceryValue = Math.max(0, Number(grocery?.value || 0));

  return { serviceFee, groceryValue, lines };
}

function calculatorRequestText(){
  const data = calculatorData();
  const area = calcSelectedText(document.getElementById("calcArea"));
  const town = calcSelectedText(document.getElementById("calcTown"));
  const keys = calcSelectedText(document.getElementById("calcKeys"));
  const timing = calcSelectedText(document.getElementById("calcTiming"));
  const property = calcSelectedText(document.getElementById("calcProperty"));

  const intro = currentLang === "es"
    ? "Hola. Me gustaría solicitar esta estimación de Luma Alicante."
    : "Hello! I would like to request this Luma Alicante estimate.";

  const selected = data.lines.length
    ? data.lines.map(x => `- ${x.name}: ${money(x.price)}`).join("\n")
    : "- no services selected";

  const groceryLine = data.groceryValue
    ? `\nEstimated grocery receipt: ${money(data.groceryValue)}`
    : "";

  const totalLine = `Service fee estimate: ${money(data.serviceFee)}${groceryLine ? `\nService + grocery budget: ${money(data.serviceFee + data.groceryValue)}` : ""}`;

  return `${intro}\n\nArea: ${area}\nTown / urbanisation: ${town}\nKeys/access: ${keys}\nTiming: ${timing}\nProperty size: ${property}\n\nSelected services:\n${selected}\n\n${totalLine}\n\nPlease contact me to confirm address, access, timing and final quote.`;
}

function updateCalculator(){
  const serviceFeeEl = document.getElementById("calcServiceFee");
  if(!serviceFeeEl) return;

  const data = calculatorData();
  const grand = data.serviceFee + data.groceryValue;

  serviceFeeEl.textContent = money(data.serviceFee);
  document.getElementById("calcGrandTotal").textContent = money(grand);

  const breakdown = document.getElementById("calcBreakdown");
  breakdown.innerHTML = "";

  data.lines.forEach(line => {
    const li = document.createElement("li");
    li.innerHTML = `<span>${line.name}</span><strong>${money(line.price)}</strong>`;
    breakdown.appendChild(li);
  });

  if(data.groceryValue){
    const li = document.createElement("li");
    li.innerHTML = `<span>${currentLang === "es" ? "Compra estimada" : "Estimated grocery receipt"}</span><strong>${money(data.groceryValue)}</strong>`;
    breakdown.appendChild(li);
  }

  const wa = document.getElementById("calculatorWhatsapp");
  if(wa){
    wa.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(calculatorRequestText())}`;
  }
}

function initCalculator(){
  const calc = document.getElementById("calculator");
  if(!calc) return;

  calc.querySelectorAll("input, select").forEach(el => {
    el.addEventListener("change", updateCalculator);
    el.addEventListener("input", updateCalculator);
  });

  updateCalculator();
}


document.addEventListener("DOMContentLoaded", () => {
  initLang();
  renderTranslations();
  renderItems();
  initPresets();
  initCopy();
  initLeadForm();
  initCalculator();
  setPreset("basic");
  updateCalculator();
});

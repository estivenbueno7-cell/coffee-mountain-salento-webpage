/* =========================================================
   ☕ COFFEE MOUNTAIN — app.js
   Landing page profesional para tours en Salento, Quindío
   ========================================================= */

let currentIndex = 0;
let images = [];

/* =========================
   🧭 TOURS DATA
   ========================= */

const tours = {

  cocora3h: {
    title: "Valle de Cocora (3 Horas)",
    description: "Una experiencia perfecta para quienes buscan conocer el icónico Valle de Cocora sin exigirse demasiado. Caminarás entre las majestuosas palmas de cera, el árbol nacional de Colombia, mientras respiras aire puro de los Andes. Ideal para familias, parejas y viajeros con poco tiempo que no quieren perderse este paisaje único en el mundo.",
    itinerary: " — Salida desde Salento en jeep willys tradicional\n— Llegada al valle y caminata por el sendero principal\n— Mirador de las palmas de cera (fotos panorámicas)\n — Recorrido por el bosque de niebla ligero\n — Regreso por la misma ruta\n — Llegada a Salento",
    includes: ["Transporte en willys tradicional", "Guía local bilingüe", "Seguro médico de viaje", "Hidratación (agua y electrolitos)"],
    notIncludes: ["Almuerzo", "Gastos personales", "Propinas (opcional)"],
    images: [
       "images/WhatsApp Image 2026-08-03 at 16.16.28.jpeg",
      "images/cocora1.jpg",
      "images/447518467_1830843814061783_6628520970861944841_n.webp",
      "images/cocora---------.jpg",
      "images/447518467_1830843814061783_6628520970861944841_n.webp",
    ]
  },

  cocora6h: {
    title: "Valle de Cocora (6 Horas Full Experience)",
    description: "La experiencia definitiva en el Valle de Cocora. Una caminata profunda que te llevará por senderos de bosque nublado, cruzando puentes colgantes sobre ríos cristalinos hasta llegar a la mágica Casa de los Colibríes. Verás palmas de cera de más de 60 metros, miradores con vistas de postal y vivirás la naturaleza en su estado más puro. Recomendado para amantes del trekking y la aventura real.",
    itinerary: "7:00 AM — Salida desde Salento en willys\n8:00 AM — Ingreso al valle y caminata por sendero principal\n9:30 AM — Mirador de las palmas de cera (vistas panorámicas)\n10:30 AM — Bosque de niebla y cruce de puentes colgantes\n12:00 PM — Casa de los Colibríes (avistamiento garantizado)\n1:00 PM — Descanso, snack e hidratación\n2:00 PM — Retorno por ruta alterna con nuevos paisajes\n3:00 PM — Llegada a Salento",
    includes: ["Transporte en willys tradicional", "Guía experto bilingüe", "Seguro médico de viaje", "Entrada a la reserva natural", "Hidratación durante el recorrido", "Snack energético"],
    notIncludes: ["(recomendamos traer hidratacion)", "Propinas (opcional)", "Gastos personales"],
    images: [
      "images/xBy-iSleJdkewKpL36A4z2tsPehFIp9KBXoe1Fg7nh98XGr98KQu0JI9TAxrxKOqDZR0VEEy9RPLNQVJasHx-QvFPKh4Js-6OjApwpwn3b0NFU81e2XsQ1nc7PCOMH-oJBRKSZuIZsKXWcSbC4J31JRv1pMDOVtOYLvmbfWBrDHs8BOeoWfCGHmKJFG2s.jpg",
      "images/NMqqAvpDA4lTbDAIGqdnD_y7Ugu6an33buyarsa3OnMrM2pJCPkGMo3HaP69Ql7bxGGWt-75DtP1G0GKQKC2SoAAwT9t_QazsoG0AsRe3Dg1w0jaHcoo7vvfZY9NnnNnSwnIUFR0i3ToGuHzdqZowdePRujDslDjflnu1gEqzBeLN_Hp2Zrmc8mCJglotTCX.jpg",
      "images/kevinbc.jpg",
      "images/Como-Llegar-al-Valle-De-Cocora-Quindío-Colombia-Chip-Viajero-1.jpg",
      
    ]
  },

  cascadas_santa_rita: {
    title: "Cascadas de Santa Rita",
    description: "Un tesoro escondido en las montañas de Salento. Este tour te lleva por senderos ecológicos rodeados de vegetación nativa hasta llegar a cascadas de agua cristalina donde podrás nadar y refrescarte. Cruzarás túneles naturales formados por la roca y disfrutarás de pozas secretas lejos del turismo masivo. Perfecto para quienes buscan tranquilidad y contacto genuino con la naturaleza.",
    itinerary: "8:30 AM — Reunión en el parque principal de Salento\n9:00 AM — Transporte hacia la entrada del sendero\n9:30 AM — Caminata ecológica por bosque nativo\n10:30 AM — Llegada a la primera cascada (tiempo para fotos)\n11:30 AM — Cruzando túneles naturales y pozas cristalinas\n12:30 PM — Tiempo libre para nadar y disfrutar\n1:30 PM — Regreso por sendero alterno\n2:30 PM — Llegada a Salento",
    includes: ["Guía local certificado", "Entrada al sendero", "Seguro médico de viaje", "Hidratación", "Transporte ida y vuelta"],
    notIncludes: ["Almuerzo", "Toalla", "Traje de baño (traer propio)", "Gastos personales"],
    images: [
      "images/Captura de pantalla 2026-08-10 182600.png",
      "images/Captura de pantalla 2026-08-10 182541.png",
      "images/santarita2.jpg",
      "images/santarita2.jpg"
    ]
  },

  coffee_premium: {
    title: "Coffee Tour Tradicional",
    description: "Sumérgete en la cultura cafetera colombiana de la mano de productores locales. Desde la recolección del grano maduro hasta la taza final, aprenderás cada etapa del proceso: selección, despulpado, fermentación, lavado, secado al sol y tostión artesanal. Termina con una cata guiada donde descubrirás notas de chocolate, cítricos y frutas tropicales en cada sorbo. Una experiencia sensorial imperdible en el corazón del Eje Cafetero.",
    itinerary: " Recorrido por el cultivo y recolección de cerezas maduras\n — Proceso de despulpado y fermentación\n— Secado al sol en patios tradicionales\n— Tostión artesanal en fogón de leña\n— Cata profesional: aroma, cuerpo y acidez\n1:00 PM — Despedida y regreso al municipio de salento",
    includes: ["Degustación de 3 variedades de café", "Guía experto bilingüe", "Recorrido por finca cafetera tradicional", "Historia del café en Colombia", "Paquete de café recién tostido (250g)", "Hidratación"],
    notIncludes: [ "Almuerzo", "Gastos personales"],
    images: [
      "images/Captura de pantalla 2026-06-29 135718.png",
      "images/coffetour.png",
      "images/Captura de pantalla 2026-08-07 223749.png",
      "images/Captura de pantalla 2026-08-09 115413.png"
    ]
  },

  cabalgata_cocora: {
    title: "Cabalgata en Cocora",
    description: "Vive el valle desde otra perspectiva: a lomo de caballo. Recorre senderos rurales que solo se pueden transitar a caballo, cruzando quebradas y viendo las palmas de cera desde ángulos únicos. Los guías locales comparten historias del campo quindiano mientras disfrutas del sonido de la naturaleza. Incluye transporte en willys clásico desde Salento. Ideal para familias y personas que prefieren evitar caminatas largas.",
    itinerary: " — Salida desde Salento en willys\n— Llegada al valle, instrucción de equitación y asignación de caballos\n — Inicio de la cabalgata por senderos rurales\n — Mirador panorámico del valle (parada para fotos)\n11:00 AM — Cruzando quebradas y viendo palmas de cera\n — Descanso, hidratación y tiempo libre\nPM — Retorno a caballo\n PM — Llegada a Salento",
    includes: ["Caballo manso y equipado", "Guía experto en equitación", "Seguro médico de viaje", "Hidratación", "Transporte en willys ida y vuelta"],
    notIncludes: ["Almuerzo", "Propinas (opcional)", "Gastos personales"],
    images: [
      "images/Captura de pantalla 2023-11-21 162443.png",
      "images/Captura de pantalla 2023-12-01 143734.png",
      "images/perfil.jpg",
      "images/NMqqAvpDA4lTbDAIGqdnD_y7Ugu6an33buyarsa3OnMrM2pJCPkGMo3HaP69Ql7bxGGWt-75DtP1G0GKQKC2SoAAwT9t_QazsoG0AsRe3Dg1w0jaHcoo7vvfZY9NnnNnSwnIUFR0i3ToGuHzdqZowdePRujDslDjflnu1gEqzBeLN_Hp2Zrmc8mCJglotTCX.jpg"
    ]
  },

  cocora_cabalgata: {
    title: "Cocora + Cabalgata",
    description: "Dos aventuras en una: explora el Valle de Cocora a pie y a caballo. Comienza con una caminata entre las palmas de cera más altas del mundo, luego monta a caballo por senderos rurales con vistas panorámicas del valle. Es la forma perfecta de combinar naturaleza, cultura llanera y paisajes de ensueño sin cansarte demasiado. Los caballos son mansos y los guías expertos.",
    itinerary: "— Salida desde Salento en willys\n — Caminata por el valle (sendero principal, mirador de palmas)\n— Descanso, hidratación y snack\n — Instrucción de equitación y asignación de caballos\n — Cabalgata por senderos rurales y quebradas\n — Mirador panorámico desde caballo\n12:30 PM — Regreso a caballo al punto de inicio\n — Transporte de regreso a Salento",
    includes: ["Transporte en willys", "Cabalgata guiada", "Guía bilingüe", "Seguro médico", "Snack energético", "Hidratación"],
    notIncludes: ["Propinas (opcional)", "Gastos personales"],
    images: [
     "images/Captura de pantalla 2023-11-21 162443.png",
      "images/Captura de pantalla 2023-12-01 143734.png",
      "images/perfil.jpg",
      "images/NMqqAvpDA4lTbDAIGqdnD_y7Ugu6an33buyarsa3OnMrM2pJCPkGMo3HaP69Ql7bxGGWt-75DtP1G0GKQKC2SoAAwT9t_QazsoG0AsRe3Dg1w0jaHcoo7vvfZY9NnnNnSwnIUFR0i3ToGuHzdqZowdePRujDslDjflnu1gEqzBeLN_Hp2Zrmc8mCJglotTCX.jpg",
    ]
  },

  cocora_coffee: {
    title: "Cocora + Coffee Tour",
    description: "El combo más completo del Quindío en un solo día. Por la mañana, caminata épica en el Valle de Cocora entre palmas de cera y bosque de niebla. Por la tarde, relájate en una finca cafetera tradicional aprendiendo todo sobre el café colombiano, desde la planta hasta la taza. Transporte, guía, hidratación y snack incluidos. La experiencia perfecta para quienes visitan Salento por primera vez.",
    itinerary: " — Salida desde Salento en willys\n— Caminata en el Valle de Cocora (mirador, bosque de niebla)\n — Regreso al punto de encuentro y traslado a finca cafetera\n— Llegada a la finca, bienvenida con tinto de bienvenida\n — Recorrido por el cultivo y recolección\n— Proceso de despulpado, fermentación y secado\n— Tostión artesanal y cata profesional\n3:30 PM — Empaque de café para llevar y despedida",
    includes: ["Transporte en willys y a la finca", "Guía bilingüe", "Coffee experience completa", "Seguro médico", "Snack energético", "Hidratación", "Paquete de café recién tostido"],
    notIncludes: ["Almuerzo (recomendamos traer lonchera)", "Propinas (opcional)", "Gastos personales"],
    images: [
      "images/Captura de pantalla 2023-12-01 144335.png",
      "images/790315708_1465437998759742_7948224593008606439_n.jpg",
      "images/cocora---------.jpg",
      "images/NMqqAvpDA4lTbDAIGqdnD_y7Ugu6an33buyarsa3OnMrM2pJCPkGMo3HaP69Ql7bxGGWt-75DtP1G0GKQKC2SoAAwT9t_QazsoG0AsRe3Dg1w0jaHcoo7vvfZY9NnnNnSwnIUFR0i3ToGuHzdqZowdePRujDslDjflnu1gEqzBeLN_Hp2Zrmc8mCJglotTCX.jpg",
      "images/loscafetales.jpg"
    ]
  },

  salento00: {
    title: "Salento + Valle de Cocora",
    description: "Visita el valle de Cocora y una finca cafetera tradicional en un solo tour. Comenzamos con una caminata guiada por el icónico valle, admirando las palmas de cera más altas del mundo. Luego, nos trasladamos a una finca cafetera familiar donde aprenderás el proceso artesanal del café colombiano. Una experiencia equilibrada entre naturaleza y cultura cafetera.",
    itinerary: "8:00 AM — Reunión en el parque principal de Salento\n8:30 AM — Transporte en willys hacia el Valle de Cocora\n9:30 AM — Caminata guiada por el valle y mirador\n11:30 AM — Regreso y traslado a finca cafetera\n12:30 PM — Tour del café: cultivo, proceso y degustación\n2:00 PM — Almuerzo típico opcional en la finca\n3:00 PM — Regreso a Salento",
    includes: ["Guía bilingüe", "Transporte en willys", "Seguro médico", "Entradas al valle y finca", "Degustación de café"],
    notIncludes: ["Almuerzo", "Propinas (opcional)", "Gastos personales"],
    images: [
      "images/salento.jpg",
      "images/Captura de pantalla 2023-12-01 144335.png",
      "images/salento.jpg",
      "images/NMqqAvpDA4lTbDAIGqdnD_y7Ugu6an33buyarsa3OnMrM2pJCPkGMo3HaP69Ql7bxGGWt-75DtP1G0GKQKC2SoAAwT9t_QazsoG0AsRe3Dg1w0jaHcoo7vvfZY9NnnNnSwnIUFR0i3ToGuHzdqZowdePRujDslDjflnu1gEqzBeLN_Hp2Zrmc8mCJglotTCX.jpg",
      "images/790315708_1465437998759742_7948224593008606439_n.jpg"
    ]
  },

  filandia: {
    title: "Salento + Cocora + Filandia",
    description: "El tour estrella de Coffee Mountain. Un día completo recorriendo lo mejor del Eje Cafetero: caminata guiada por el Valle de Cocora con sus palmas gigantes, recorrido cultural por las calles coloridas de Salento y visita al pintoresco pueblo de Filandia con su famoso mirador. Incluye hidratación, snack y una bebida típica en Filandia. Es nuestro tour más vendido y la mejor inversión para tu viaje.",
    itinerary: " — Reunión en parque principal de Salento\n — Caminata guiada en el Valle de Cocora (sendero principal, mirador)\n— Regreso a Salento y recorrido por lugares emblemáticos (calle del tiempo, artesanías)\n— Almuerzo libre en Salento (recomendaciones del guía)\n— Transporte hacia Filandia\n— Llegada a Filandia, recorrido por el centro histórico\n — Visita al mirador de Filandia (vistas panorámicas)\n— Bebida típica en cafetería local\n — Regreso a Salento",
    includes: ["Transporte todo el día", "Guía bilingüe", "Seguro médico", "Entrada a Cocora", "Caminata guiada en Salento y Filandia", "Hidratación", "Snack energético", "Bebida típica en Filandia"],
    notIncludes: ["Entrada al mirador de la colina iluminada (opcional, $15.000 COP)", "Almuerzo", "Propinas (opcional)", "Gastos personales"],
    images: [
      "images/salento.jpg",
      "images/Mirador-Colina-Iluminada-de-Filandia-en-Quindío1 (1).webp",
      "images/5c0176fe-f0e0-4661-86ac-f54c700ed46d.jpg",
      "images/salento9.jpg",
      "images/790912216_1617085066454833_5393938285024541553_n.jpg"
      
    ]
  },

  coffee_premium_2: {
    title: "Coffee Tour Premium",
    description: "Visita una finca cafetera especializada y aprende de recolección, germinación, historia, secado, tostión y degustación de la mano de un experto catador. Este tour profundiza en las diferencias entre café arábica y robusta, los métodos de procesamiento (lavado, natural y honey) y las técnicas de extracción. Incluye una cata comparativa de cafés de diferentes regiones de Colombia. Ideal para aficionados que quieren llevar su conocimiento al siguiente nivel.",
    itinerary: "— Reunión en parque principal de Salento\n— Transporte a la finca cafetera premium\n1— Bienvenida e historia de la finca\n— Recorrido por el vivero: germinación y variedades\n— Recolección selectiva de cerezas maduras\n — Procesos de lavado, natural y honey (comparativa)\n — Secado: patios al sol vs. secadores mecánicos\n — Tostión artesanal con control de temperatura\n — Cata profesional comparativa (3 regiones de Colombia)\n — Empaque de café premium para llevar\n — Regreso a Salento",
    includes: ["Transporte ida y vuelta", "Guía experto catador", "Seguro médico", "Entrada a la finca", "Caminata guiada por la plantación", "Hidratación", "Snack gourmet", "Cata comparativa de 3 regiones", "Paquete de café premium (500g)"],
    notIncludes: ["Almuerzo", "Propinas (opcional)", "Gastos personales"],
    images: [
      "images/790315708_1465437998759742_7948224593008606439_n.jpg",
      "images/coffetour.png",
      "images/Captura de pantalla 2026-08-07 223749.png",
      "images/790667510_1377405037286403_3438952501262166571_n.jpg"
    ]
  },
  };
      


/* =========================
   🧩 MODAL LOGIC
   ========================= */

function openModal(tour) {
  const modal = document.getElementById("tourModal");
  modal.style.display = "block";
  document.body.style.overflow = "hidden";

  document.getElementById("tourTitle").innerText = tour.title;
  document.getElementById("tourDescription").innerText = tour.description;
  document.getElementById("itinerary").innerText = tour.itinerary;

  document.getElementById("whatsappBtn").href =
    `https://wa.me/573117388259?text=Hola 👋, quiero reservar el tour: ${encodeURIComponent(tour.title)}`;

  fillList("includes", tour.includes);
  fillList("notIncludes", tour.notIncludes);

  images = tour.images || [];
  currentIndex = 0;

  renderCarousel();
  renderThumbnails();
}

function renderCarousel() {
  const mainImage = document.getElementById("mainImage");
  if (images.length > 0) {
    mainImage.src = images[currentIndex];
    mainImage.style.display = "block";
  } else {
    mainImage.style.display = "none";
  }

  document.querySelectorAll(".thumbnails img").forEach((img, i) => {
    img.classList.toggle("active", i === currentIndex);
  });
}

function renderThumbnails() {
  const container = document.getElementById("thumbnails");
  container.innerHTML = "";

  if (images.length === 0) {
    container.style.display = "none";
    return;
  }
  container.style.display = "flex";

  images.forEach((img, i) => {
    const image = document.createElement("img");
    image.src = img;
    image.alt = `Imagen ${i + 1} del tour`;
    image.loading = "lazy";
    image.onclick = () => {
      currentIndex = i;
      renderCarousel();
    };
    container.appendChild(image);
  });
}

function changeSlide(direction) {
  if (images.length === 0) return;
  currentIndex += direction;
  if (currentIndex < 0) currentIndex = images.length - 1;
  if (currentIndex >= images.length) currentIndex = 0;
  renderCarousel();
}

function closeModal() {
  document.getElementById("tourModal").style.display = "none";
  document.body.style.overflow = "auto";
}

function fillList(id, items) {
  const ul = document.getElementById(id);
  ul.innerHTML = "";
  items.forEach(i => {
    const li = document.createElement("li");
    li.innerText = i;
    ul.appendChild(li);
  });
}

// Cerrar modal con Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

// Cerrar modal al hacer clic fuera
document.getElementById("tourModal").addEventListener("click", (e) => {
  if (e.target.id === "tourModal") closeModal();
});


/* =========================
   📱 MOBILE MENU
   ========================= */

function toggleMobileMenu() {
  document.querySelector(".nav-links").classList.toggle("active");
}


/* =========================
   📊 STATS COUNTER
   ========================= */

function animateStats() {
  const stats = document.querySelectorAll(".stat-number");
  stats.forEach(stat => {
    const target = parseInt(stat.getAttribute("data-target"));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const updateCounter = () => {
      current += increment;
      if (current < target) {
        stat.innerText = Math.floor(current);
        requestAnimationFrame(updateCounter);
      } else {
        stat.innerText = target;
      }
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          updateCounter();
          observer.unobserve(stat);
        }
      });
    }, { threshold: 0.5 });

    observer.observe(stat);
  });
}


/* =========================
   🖼️ GALLERY CAROUSEL
   ========================= */

let galleryIndex = 0;
let gallerySlides = 0;

function initGallery() {
  const track = document.getElementById("galleryTrack");
  const dotsContainer = document.getElementById("galleryDots");
  if (!track || !dotsContainer) return;

  gallerySlides = track.children.length;

  for (let i = 0; i < gallerySlides; i++) {
    const dot = document.createElement("span");
    dot.className = "gallery-dot" + (i === 0 ? " active" : "");
    dot.onclick = () => goToGallerySlide(i);
    dotsContainer.appendChild(dot);
  }

  updateGallery();
}

function changeGallerySlide(direction) {
  galleryIndex += direction;
  const maxIndex = window.innerWidth <= 768 ? gallerySlides - 1 : gallerySlides - 3;
  if (galleryIndex < 0) galleryIndex = 0;
  if (galleryIndex > maxIndex) galleryIndex = maxIndex;
  updateGallery();
}

function goToGallerySlide(index) {
  galleryIndex = index;
  updateGallery();
}

function updateGallery() {
  const track = document.getElementById("galleryTrack");
  const dots = document.querySelectorAll(".gallery-dot");
  if (!track) return;

  const slideWidth = track.children[0]?.offsetWidth || 300;
  track.style.transform = `translateX(-${galleryIndex * slideWidth}px)`;

  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === galleryIndex);
  });
}


/* =========================
   💬 TESTIMONIALS CAROUSEL
   ========================= */

let testimonialIndex = 0;
let testimonialSlides = 0;
let testimonialInterval;

function initTestimonials() {
  const track = document.getElementById("testimonialsTrack");
  const dotsContainer = document.getElementById("testimonialsDots");
  if (!track || !dotsContainer) return;

  testimonialSlides = track.children.length;

  for (let i = 0; i < testimonialSlides; i++) {
    const dot = document.createElement("span");
    dot.className = "testimonial-dot" + (i === 0 ? " active" : "");
    dot.onclick = () => goToTestimonial(i);
    dotsContainer.appendChild(dot);
  }

  updateTestimonials();
  startTestimonialAutoPlay();
}

function goToTestimonial(index) {
  testimonialIndex = index;
  if (testimonialIndex >= testimonialSlides) testimonialIndex = 0;
  if (testimonialIndex < 0) testimonialIndex = testimonialSlides - 1;
  updateTestimonials();
  resetTestimonialAutoPlay();
}

function updateTestimonials() {
  const track = document.getElementById("testimonialsTrack");
  const dots = document.querySelectorAll(".testimonial-dot");
  if (!track) return;

  track.style.transform = `translateX(-${testimonialIndex * 100}%)`;

  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === testimonialIndex);
  });
}

function startTestimonialAutoPlay() {
  testimonialInterval = setInterval(() => {
    testimonialIndex++;
    if (testimonialIndex >= testimonialSlides) testimonialIndex = 0;
    updateTestimonials();
  }, 5000);
}

function resetTestimonialAutoPlay() {
  clearInterval(testimonialInterval);
  startTestimonialAutoPlay();
}


/* =========================
   ❓ FAQ TOGGLE
   ========================= */

function toggleFaq(element) {
  const item = element.parentElement;
  const isActive = item.classList.contains("active");

  // Cerrar todos
  document.querySelectorAll(".faq-item").forEach(faq => {
    faq.classList.remove("active");
  });

  // Abrir el clickeado si no estaba activo
  if (!isActive) {
    item.classList.add("active");
  }
}


/* =========================
   📋 RESERVATION FORM
   ========================= */

function handleReservation(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const tour = document.getElementById("tour").value;
  const date = document.getElementById("date").value;
  const people = document.getElementById("people").value;

  if (!name || !phone || !tour) {
    alert("Por favor completa todos los campos obligatorios (*).");
    return false;
  }

  let message = `Hola 👋, quiero reservar un tour:%0A%0A`;
  message += `👤 Nombre: ${encodeURIComponent(name)}%0A`;
  message += `📱 WhatsApp: ${encodeURIComponent(phone)}%0A`;
  message += `🧭 Tour: ${encodeURIComponent(tour)}%0A`;
  if (date) message += `📅 Fecha: ${encodeURIComponent(date)}%0A`;
  if (people) message += `👥 Personas: ${encodeURIComponent(people)}%0A`;
  message += `%0A¿Podemos confirmar la disponibilidad? 😊`;

  const url = `https://wa.me/573117388259?text=${message}`;
  window.open(url, "_blank");
  return false;
}


/* =========================
   📜 NAVBAR SCROLL
   ========================= */

function handleNavbarScroll() {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
}


/* =========================
   🚀 INITIALIZATION
   ========================= */

document.addEventListener("DOMContentLoaded", () => {
  animateStats();
  initGallery();
  initTestimonials();
  window.addEventListener("scroll", handleNavbarScroll);
  window.addEventListener("resize", updateGallery);
});

/* =========================================================
   🌎 SISTEMA DE IDIOMAS
   ========================================================= */

const translations = {

    es: {

        "nav.home": "Inicio",
        "nav.tours": "Tours",
        "nav.about": "Nosotros",
        "nav.faq": "Preguntas",

        "hero.title":
            "Experiencias auténticas en el Eje Cafetero",

        "hero.description":
            "Descubre los paisajes, la cultura y el café de Colombia con experiencias únicas y guías locales.",

        "hero.button":
            "Ver nuestros tours",

        "stats.tours":
            "Tours Disponibles",

        "stats.travelers":
            "Viajeros Felices",

        "stats.experience":
            "Años de Experiencia",

        "stats.rating":
            "Rating Promedio",

        "footer.contact":
            "Contáctanos"

    },

    en: {

        "nav.home": "Home",
        "nav.tours": "Tours",
        "nav.about": "About Us",
        "nav.faq": "FAQ",

        "hero.title":
            "Authentic Experiences in Colombia's Coffee Region",

        "hero.description":
            "Discover Colombia's landscapes, culture and coffee through unique experiences with local guides.",

        "hero.button":
            "Explore Our Tours",

        "stats.tours":
            "Available Tours",

        "stats.travelers":
            "Happy Travelers",

        "stats.experience":
            "Years of Experience",

        "stats.rating":
            "Average Rating",

        "footer.contact":
            "Contact Us"

    }

};
/* =========================================================
   🌎 CAMBIAR IDIOMA
   ========================================================= */

function changeLanguage(language) {

    const elements =
        document.querySelectorAll("[data-i18n]");

    elements.forEach(element => {

        const key =
            element.getAttribute("data-i18n");

        if (
            translations[language] &&
            translations[language][key]
        ) {

            element.textContent =
                translations[language][key];

        }

    });


    // Actualizar botones

    document
        .getElementById("langES")
        ?.classList.toggle(
            "active",
            language === "es"
        );

    document
        .getElementById("langEN")
        ?.classList.toggle(
            "active",
            language === "en"
        );


    // Guardar idioma

    localStorage.setItem(
        "coffeeMountainLanguage",
        language
    );


    document.documentElement.lang =
        language;

}
document.addEventListener("DOMContentLoaded", () => {

    const savedLanguage =
        localStorage.getItem(
            "coffeeMountainLanguage"
        ) || "es";

    changeLanguage(savedLanguage);

    animateStats();
    initGallery();
    initTestimonials();

    window.addEventListener(
        "scroll",
        handleNavbarScroll
    );

    window.addEventListener(
        "resize",
        updateGallery
    );

});
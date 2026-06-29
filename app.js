let currentIndex = 0;
let images = [];

/* =========================
   🧭 TOURS DATA (AGENCIA)
========================= */

const tours = {

  cocora3h: {
    title: "Valle de Cocora (3 Horas)",
    description: "Experiencia corta en el Valle de Cocora, ideal para conocer las palmas de cera y el mirador principal.",
    itinerary: "Salida desde salento- transporte en wilys - hydratacion - ingreso al valle - caminata ligera - mirador - regreso",

    includes: ["Transporte", "Guía local", "Seguro médico"],
    notIncludes: ["Almuerzo", "Gastos personales"]
  },

  cocora6h: {
    title: "Valle de Cocora (6 Horas Full Experience)",
    description: "Tour completo con caminata larga, miradores altos y experiencia inmersiva en el bosque de niebla.",
    itinerary: "Salida temprano - caminata profunda - miradores - bosque de niebla-puentes colgantes-visita la casa de los colibri - regreso",

    includes: ["Transporte", "Guía experto", "Seguro", "Entrada reserva"],
    notIncludes: ["Almuerzo"]
  },

  cascadas_santa_rita: {
    title: "Cascadas de Santa Rita",
    description: "Sendero natural con cascadas, túneles naturales y piscinas cristalinas en Salento.",
    itinerary: "Sendero ecológico - cascadas - túneles naturales - pozas - regreso",

    includes: ["Guía", "Entrada", "Seguro médico", "hydratacion","transpote"],
    notIncludes: ["Almuerzo"]
  },

  coffee_premium: {
    title: "Coffee Tour Premium",
    description: "Experiencia completa del café colombiano: cultivo, tostión y degustación profesional.",
    itinerary: "Finca cafetera - recolección - proceso del café - tostión - cata",

    includes: ["Degustación", "Guía experto", "Finca cafetera", "Historia del café"],
    notIncludes: ["-"]
  },

  cabalgata_cocora: {
    title: "Cabalgata en Cocora",
    description: "Recorrido a caballo por los paisajes del Valle de Cocora y senderos naturales.",
    itinerary: "Instrucción - recorrido a caballo - miradores - regreso - trasporte en wylis",
  
    includes: ["Caballo", "Guía", "Seguro", "hydratacion","tramsporte en wylis"],
    notIncludes: ["Almuerzo"]
  },

  cocora_cabalgata: {
    title: "Cocora + Cabalgata",
    description: "Combinación perfecta: caminata en Cocora + recorrido a caballo.",
    itinerary: "Caminata Cocora - descanso - cabalgata - miradores - regreso",
  
    includes: ["Transporte", "Cabalgata", "Guía", "Seguro","snack","hydratacion"],
    notIncludes: ["Almuerzo"]
  },

  cocora_coffee: {
    title: "Cocora + Coffee Tour",
    description: "Lo mejor del Quindío: Valle de Cocora + experiencia cafetera completa.",
    itinerary: "Cocora - caminata - finca cafetera - degustación - regreso",

    includes: ["Transporte", "Guía", "Café experience", "Seguro","snack","hydratacion","transporte"],
    notIncludes: ["Almuerzo"]
  },

  salento00: {
    title: "Salento + Valle de Cocora",
    description: "visita el valle de cocora y una finca cafetra tradiciona ",
    itinerary: "empezamos en el parque principa luego tomamos trasporte hacia el valle de cocora luego visitamos una finca cafetara - regreso - ",
  
    includes: ["Guía", "Transporte", "Seguro","entradas"],
    notIncludes: ["Almuerzo"]
  },

  filandia: {
    title: "Filandia Miradores y Cultura",
    description: "Visita al hermoso pueblo de Filandia con miradores espectaculares y cultura cafetera.",
    itinerary: " reunion en parque principal salento - caminata guiada en el valle de cocora- caminata guida en salento lugares emblematicos -almuerzo -Pueblo Filandia - mirador - centro histórico - regreso",

    includes: ["Transporte", "Guía", "Seguro","entrada ac cocora","caminata guiada en salento-filandia", "hydratacion", "snack","bebida en filandia"],
    notIncludes: ["entrada a mirador de la colina iluminada"]
  },
  coffee_premium_2: {
    title: "coffee tour prmiun",
    description: "visita una finca cafetera y aprende de recolecion-germinacion-historia-secado-tostion-desgustacion de la mano de un experto.",
    itinerary: " reunion en parque principal- salidas desde las 9 am hasta las 3 pm- tramporte visita la finca  regreso",

    includes: ["Transporte", "Guía", "Seguro","entrada","caminata guiada en la finca", "hydratacion", "snack"],
    notIncludes: ["entrada a mirador de la colina iluminada"]
  }

};


/* =========================
   🧩 MODAL LOGIC (TU CÓDIGO)
========================= */

function openModal(tour) {
  document.getElementById("tourModal").style.display = "block";

  document.getElementById("tourTitle").innerText = tour.title;
  document.getElementById("tourDescription").innerText = tour.description;
  document.getElementById("itinerary").innerText = tour.itinerary;

  document.getElementById("whatsappBtn").href =
    `https://wa.me/573117388259?text=Hola quiero reservar el tour ${tour.title}`;

  fillList("includes", tour.includes);
  fillList("notIncludes", tour.notIncludes);

  images = tour.images;
  currentIndex = 0;

  renderCarousel();
  renderThumbnails();
}

function renderCarousel() {
  document.getElementById("mainImage").src = images[currentIndex];

  document.querySelectorAll(".thumbnails img").forEach((img, i) => {
    img.classList.toggle("active", i === currentIndex);
  });
}

function renderThumbnails() {
  const container = document.getElementById("thumbnails");
  container.innerHTML = "";

  images.forEach((img, i) => {
    const image = document.createElement("img");
    image.src = img;
    image.onclick = () => {
      currentIndex = i;
      renderCarousel();
    };
    container.appendChild(image);
  });
}

function changeSlide(direction) {
  currentIndex += direction;

  if (currentIndex < 0) currentIndex = images.length - 1;
  if (currentIndex >= images.length) currentIndex = 0;

  renderCarousel();
}

function closeModal() {
  document.getElementById("tourModal").style.display = "none";
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
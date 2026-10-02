/* =========================================================
   SALENTO TOURS MOUNTAIN
   APP.JS
   ========================================================= */


/* =========================================================
   CONFIGURACIÓN
   ========================================================= */

const CONFIG = {
  whatsapp: "573117388259",

  logo:
    "https://res.cloudinary.com/g2waum6r/image/upload/v1789047729/ChatGPT_Image_27_jun_2026_00_27_34.png",

  video:
    "https://res.cloudinary.com/g2waum6r/video/upload/v1790728017/WhatsApp_Video_2026-09-14_at_1.11.41_PM.mp4",

  defaultLanguage: "es",

  defaultTour: "salento00"
};


/* =========================================================
   ESTADO GLOBAL
   ========================================================= */

let currentLanguage =
  localStorage.getItem("salentoToursLanguage") ||
  CONFIG.defaultLanguage;

let currentTour = null;
let currentImageIndex = 0;
let currentFilter = "all";


/* =========================================================
   LOGO
   ========================================================= */

const LOGO_URL = CONFIG.logo;


/* =========================================================
   IMÁGENES - COFFEE TRADICIONAL
   ========================================================= */

const COFFEE_TRADICIONAL_IMAGES = [
  "https://res.cloudinary.com/g2waum6r/image/upload/v1790395800/789923506_38122432897405063_960488872989271564_n.jpg",

  "https://res.cloudinary.com/g2waum6r/image/upload/v1790395915/789325015_1754285452478237_6950985727657321181_n.jpg",

  "https://res.cloudinary.com/g2waum6r/image/upload/v1790728916/791244870_1726601948600380_7298594800539845065_n.jpg",

  "https://res.cloudinary.com/g2waum6r/image/upload/v1790729047/825261308_3125230001015001_7352002541492262966_n.jpg",

  "https://res.cloudinary.com/g2waum6r/image/upload/v1790729750/825308431_1101141426042102_7683120983118932632_n.jpg",

  "https://res.cloudinary.com/g2waum6r/image/upload/v1790729858/825261343_2255811871932358_3249027222881504604_n.jpg",

  "https://res.cloudinary.com/g2waum6r/image/upload/v1790729875/825260164_1392792926255460_1078855841336152486_n.jpg"
];


/* =========================================================
   IMÁGENES - COCORA 3 HORAS
   ========================================================= */

const COCORA_3_IMAGES = [
  "https://res.cloudinary.com/g2waum6r/image/upload/v1790729720/825260170_4261042647373943_1724398920685534795_n.jpg",

  "https://res.cloudinary.com/g2waum6r/image/upload/v1790729748/825261349_891362554062227_5071295029006451391_n.jpg",

  "https://res.cloudinary.com/g2waum6r/image/upload/v1790728977/WhatsApp_Image_2026-08-03_at_16.17.01.jpg",

  "https://res.cloudinary.com/g2waum6r/image/upload/v1790395686/791848292_1224426386516689_7428978250528700732_n.jpg",

  "https://res.cloudinary.com/g2waum6r/image/upload/v1790728924/789387752_2302526757173446_2265548570281573894_n.jpg"
];


/* =========================================================
   IMÁGENES - COCORA 6 HORAS
   ========================================================= */

const COCORA_6_IMAGES = [
  "https://res.cloudinary.com/g2waum6r/image/upload/v1790729127/825261299_4585008321767648_251288332285424218_n.jpg",

  "https://res.cloudinary.com/g2waum6r/image/upload/v1790729802/825260945_2838918333156153_6704724377988769692_n.jpg",

  "https://res.cloudinary.com/g2waum6r/image/upload/v1790729847/830196544_1135503172482456_4163020323351610535_n.jpg",

  "https://res.cloudinary.com/g2waum6r/image/upload/v1790729125/825308319_1609511977215239_3452867555751318235_n.jpg",

  "https://res.cloudinary.com/g2waum6r/image/upload/v1790729086/825260173_2016359845725062_7131792986055202528_n.jpg",

  "https://res.cloudinary.com/g2waum6r/image/upload/v1790729094/825260181_1436940075010806_6164861576702339473_n.jpg",

  "https://res.cloudinary.com/g2waum6r/image/upload/v1790729047/825261308_3125230001015001_7352002541492262966_n.jpg",

  "https://res.cloudinary.com/g2waum6r/image/upload/v1790397001/825308342_1565250201464382_2756502736126143177_n.jpg",

  "https://res.cloudinary.com/g2waum6r/image/upload/v1790396988/825260158_1573082654302064_5643288457590992962_n.jpg",

  "https://res.cloudinary.com/g2waum6r/image/upload/v1790396886/825260187_2192783507946086_5623298711917978700_n.jpg"
];


/* =========================================================
   IMÁGENES - TOUR FIRMA
   SALENTO + COCORA + FINCA CAFETERA
   ========================================================= */

const SALENTO_COCORA_COFFEE_IMAGES = [
  "https://res.cloudinary.com/g2waum6r/image/upload/v1790395701/osenderos-valle.jpg",

  "https://res.cloudinary.com/g2waum6r/image/upload/v1790395698/coffee_tour.png",

  "https://res.cloudinary.com/g2waum6r/image/upload/v1790395688/cocora-valley-salento.jpg",

  "https://res.cloudinary.com/g2waum6r/image/upload/v1790395711/790315708_1465437998759742_7948224593008606439_n.jpg",

  "https://res.cloudinary.com/g2waum6r/image/upload/v1790396988/825260158_1573082654302064_5643288457590992962_n.jpg",

  "https://res.cloudinary.com/g2waum6r/image/upload/v1790728924/789387752_2302526757173446_2265548570281573894_n.jpg",

  "https://res.cloudinary.com/g2waum6r/image/upload/v1790729858/825261343_2255811871932358_3249027222881504604_n.jpg",

  "https://res.cloudinary.com/g2waum6r/image/upload/v1790729871/831491464_1852405329527224_9047578962334172733_n.jpg",

  "https://res.cloudinary.com/g2waum6r/image/upload/v1790729169/825260907_1854039312625058_5443926842222389957_n.jpg"
];


/* =========================================================
   TODOS LOS TOURS
   ========================================================= */

const TOURS = [

  /* -------------------------------------------------------
     COCORA 3 HORAS
  ------------------------------------------------------- */

  {
    id: "cocora3",

    category: "cocora",

    image: COCORA_3_IMAGES[0],

    images: COCORA_3_IMAGES,

    title: {
      es: "Valle de Cocora · 3 horas",
      en: "Cocora Valley · 3 hours"
    },

    description: {
      es:
        "Una experiencia corta para descubrir los paisajes más icónicos del Valle de Cocora.",

      en:
        "A short experience to discover the most iconic landscapes of Cocora Valley."
    },

    duration: {
      es: "3 horas",
      en: "3 hours"
    },

    location: {
      es: "Valle de Cocora",
      en: "Cocora Valley"
    },

    categoryLabel: {
      es: "Naturaleza",
      en: "Nature"
    },

    price: {
      es: "Consultar",
      en: "Ask us"
    },

    itinerary: {
      es: [
        "Encuentro en Salento",
        "Traslado hacia el Valle de Cocora",
        "Recorrido por los principales miradores",
        "Tiempo para fotografías",
        "Regreso a Salento"
      ],

      en: [
        "Meeting point in Salento",
        "Transfer to Cocora Valley",
        "Visit to the main viewpoints",
        "Free time for photos",
        "Return to Salento"
      ]
    },

    includes: {
      es: [
        "Transporte",
        "Acompañamiento",
        "Experiencia local"
      ],

      en: [
        "Transportation",
        "Local assistance",
        "Local experience"
      ]
    },

    notIncludes: {
      es: [
        "Gastos personales"
      ],

      en: [
        "Personal expenses"
      ]
    }
  },


  /* -------------------------------------------------------
     COCORA 6 HORAS
  ------------------------------------------------------- */

  {
    id: "cocora6",

    category: "cocora",

    image: COCORA_6_IMAGES[0],

    images: COCORA_6_IMAGES,

    title: {
      es: "Valle de Cocora · 6 horas",
      en: "Cocora Valley · 6 hours"
    },

    description: {
      es:
        "Una experiencia más completa para disfrutar con calma las montañas y paisajes del Valle de Cocora.",

      en:
        "A longer experience to enjoy the mountains and landscapes of Cocora Valley at your own pace."
    },

    duration: {
      es: "6 horas",
      en: "6 hours"
    },

    location: {
      es: "Valle de Cocora",
      en: "Cocora Valley"
    },

    categoryLabel: {
      es: "Naturaleza",
      en: "Nature"
    },

    price: {
      es: "Consultar",
      en: "Ask us"
    },

    itinerary: {
      es: [
        "Encuentro en Salento",
        "Traslado al Valle de Cocora",
        "Caminata y miradores",
        "Tiempo para fotografías",
        "Almuerzo o descanso",
        "Regreso a Salento"
      ],

      en: [
        "Meeting point in Salento",
        "Transfer to Cocora Valley",
        "Hike and viewpoints",
        "Photo stops",
        "Lunch or rest",
        "Return to Salento"
      ]
    },

    includes: {
      es: [
        "Transporte",
        "Acompañamiento",
        "Experiencia local"
      ],

      en: [
        "Transportation",
        "Local assistance",
        "Local experience"
      ]
    },

    notIncludes: {
      es: [
        "Gastos personales"
      ],

      en: [
        "Personal expenses"
      ]
    }
  },


  /* -------------------------------------------------------
     COFFEE TRADICIONAL
  ------------------------------------------------------- */

  {
    id: "coffeeTradicional",

    category: "cafe",

    image: COFFEE_TRADICIONAL_IMAGES[0],

    images: COFFEE_TRADICIONAL_IMAGES,

    title: {
      es: "Coffee Tour Tradicional",
      en: "Traditional Coffee Tour"
    },

    description: {
      es:
        "Conoce el proceso del café desde la planta hasta la taza en una auténtica finca cafetera.",

      en:
        "Discover the coffee process from the plant to the cup at an authentic coffee farm."
    },

    duration: {
      es: "2 - 3 horas",
      en: "2 - 3 hours"
    },

    location: {
      es: "Finca cafetera",
      en: "Coffee farm"
    },

    categoryLabel: {
      es: "Café",
      en: "Coffee"
    },

    price: {
      es: "Consultar",
      en: "Ask us"
    },

    itinerary: {
      es: [
        "Traslado a la finca",
        "Recorrido por los cafetales",
        "Proceso de recolección",
        "Beneficio y secado",
        "Preparación del café",
        "Degustación"
      ],

      en: [
        "Transfer to the farm",
        "Walk through the coffee plantation",
        "Coffee harvesting process",
        "Processing and drying",
        "Coffee preparation",
        "Tasting"
      ]
    },

    includes: {
      es: [
        "Visita a finca cafetera",
        "Guía local",
        "Degustación de café"
      ],

      en: [
        "Coffee farm visit",
        "Local guide",
        "Coffee tasting"
      ]
    },

    notIncludes: {
      es: [
        "Gastos personales"
      ],

      en: [
        "Personal expenses"
      ]
    }
  },


  /* -------------------------------------------------------
     TOUR FIRMA
  ------------------------------------------------------- */

  {
    id: "salento00",

    category: "estrella",

    image: SALENTO_COCORA_COFFEE_IMAGES[0],

    images: SALENTO_COCORA_COFFEE_IMAGES,

    title: {
      es: "Salento + Cocora + Finca Cafetera by Jeep Willys",
      en: "Salento + Cocora + Coffee Farm by Jeep Willys"
    },

    description: {
      es:
        "Nuestra experiencia estrella. Descubre Salento, el Valle de Cocora y una auténtica finca cafetera en un mismo día.",

      en:
        "Our signature experience. Discover Salento, Cocora Valley and an authentic coffee farm in one unforgettable day."
    },

    duration: {
      es: "Día completo",
      en: "Full day"
    },

    location: {
      es: "Salento · Cocora · Café",
      en: "Salento · Cocora · Coffee"
    },

    categoryLabel: {
      es: "Experiencia firma",
      en: "Signature experience"
    },

    price: {
      es: "Consultar disponibilidad",
      en: "Check availability"
    },

    itinerary: {
      es: [
        "Encuentro en el parque principal de Salento",
        "Recorrido por Salento",
        "Traslado en Jeep Willys",
        "Visita al Valle de Cocora",
        "Tiempo para fotografías",
        "Almuerzo",
        "Visita a finca cafetera",
        "Tour y degustación de café",
        "Regreso a Salento"
      ],

      en: [
        "Meeting at Salento main park",
        "Explore Salento",
        "Jeep Willys transportation",
        "Visit Cocora Valley",
        "Photo stops",
        "Lunch",
        "Visit a coffee farm",
        "Coffee tour and tasting",
        "Return to Salento"
      ]
    },

    includes: {
      es: [
        "Transporte en Jeep Willys",
        "Visita al Valle de Cocora",
        "Visita a finca cafetera",
        "Degustación de café",
        "Acompañamiento local"
      ],

      en: [
        "Jeep Willys transportation",
        "Cocora Valley visit",
        "Coffee farm visit",
        "Coffee tasting",
        "Local assistance"
      ]
    },

    notIncludes: {
      es: [
        "Gastos personales"
      ],

      en: [
        "Personal expenses"
      ]
    }
  },


  /* -------------------------------------------------------
     COCORA + CAFÉ
  ------------------------------------------------------- */

  {
    id: "cocoraCoffee",

    category: "naturaleza",

    image: SALENTO_COCORA_COFFEE_IMAGES[2],

    images: [
      ...SALENTO_COCORA_COFFEE_IMAGES,
      ...COCORA_3_IMAGES.slice(0, 3)
    ],

    title: {
      es: "Cocora + Finca Cafetera",
      en: "Cocora + Coffee Farm"
    },

    description: {
      es:
        "Combina los paisajes del Valle de Cocora con la tradición cafetera del Quindío.",

      en:
        "Combine the landscapes of Cocora Valley with the coffee tradition of Quindío."
    },

    duration: {
      es: "Medio día",
      en: "Half day"
    },

    location: {
      es: "Cocora · Café",
      en: "Cocora · Coffee"
    },

    categoryLabel: {
      es: "Naturaleza + Café",
      en: "Nature + Coffee"
    },

    price: {
      es: "Consultar",
      en: "Ask us"
    },

    itinerary: {
      es: [
        "Encuentro en Salento",
        "Valle de Cocora",
        "Traslado a finca cafetera",
        "Experiencia de café",
        "Degustación",
        "Regreso"
      ],

      en: [
        "Meeting in Salento",
        "Cocora Valley",
        "Transfer to coffee farm",
        "Coffee experience",
        "Tasting",
        "Return"
      ]
    },

    includes: {
      es: [
        "Transporte",
        "Acompañamiento local",
        "Visita cafetera"
      ],

      en: [
        "Transportation",
        "Local assistance",
        "Coffee farm visit"
      ]
    },

    notIncludes: {
      es: [
        "Gastos personales"
      ],

      en: [
        "Personal expenses"
      ]
    }
  },


  /* -------------------------------------------------------
     CABALGATA
  ------------------------------------------------------- */

  {
    id: "cabalgata",

    category: "aventura",

    image: COCORA_6_IMAGES[4],

    images: COCORA_6_IMAGES.slice(3, 8),

    title: {
      es: "Cabalgata entre montañas",
      en: "Horseback Riding in the Mountains"
    },

    description: {
      es:
        "Disfruta los paisajes rurales del Quindío a caballo.",

      en:
        "Enjoy the rural landscapes of Quindío on horseback."
    },

    duration: {
      es: "Consultar",
      en: "Ask us"
    },

    location: {
      es: "Zona rural de Salento",
      en: "Rural Salento"
    },

    categoryLabel: {
      es: "Aventura",
      en: "Adventure"
    },

    price: {
      es: "Consultar",
      en: "Ask us"
    },

    itinerary: {
      es: [
        "Encuentro",
        "Preparación",
        "Recorrido a caballo",
        "Paisajes rurales",
        "Regreso"
      ],

      en: [
        "Meeting point",
        "Preparation",
        "Horseback ride",
        "Rural landscapes",
        "Return"
      ]
    },

    includes: {
      es: [
        "Acompañamiento",
        "Caballo",
        "Experiencia rural"
      ],

      en: [
        "Local assistance",
        "Horse",
        "Rural experience"
      ]
    },

    notIncludes: {
      es: [
        "Gastos personales"
      ],

      en: [
        "Personal expenses"
      ]
    }
  },


  /* -------------------------------------------------------
     SALENTO + COCORA + FILANDIA
  ------------------------------------------------------- */

  {
    id: "salentoCocoraFilandia",

    category: "naturaleza",

    image: COCORA_3_IMAGES[3],

    images: [
      ...COCORA_3_IMAGES,
      ...SALENTO_COCORA_COFFEE_IMAGES.slice(0, 3)
    ],

    title: {
      es: "Salento + Cocora + Filandia",
      en: "Salento + Cocora + Filandia"
    },

    description: {
      es:
        "Una ruta para conocer tres de los lugares más representativos del Quindío.",

      en:
        "A route through three of the most representative destinations in Quindío."
    },

    duration: {
      es: "Día completo",
      en: "Full day"
    },

    location: {
      es: "Salento · Cocora · Filandia",
      en: "Salento · Cocora · Filandia"
    },

    categoryLabel: {
      es: "Naturaleza",
      en: "Nature"
    },

    price: {
      es: "Consultar",
      en: "Ask us"
    },

    itinerary: {
      es: [
        "Salento",
        "Valle de Cocora",
        "Almuerzo",
        "Filandia",
        "Regreso a Salento"
      ],

      en: [
        "Salento",
        "Cocora Valley",
        "Lunch",
        "Filandia",
        "Return to Salento"
      ]
    },

    includes: {
      es: [
        "Transporte",
        "Acompañamiento local"
      ],

      en: [
        "Transportation",
        "Local assistance"
      ]
    },

    notIncludes: {
      es: [
        "Gastos personales"
      ],

      en: [
        "Personal expenses"
      ]
    }
  },


  /* -------------------------------------------------------
     COFFEE PREMIUM
  ------------------------------------------------------- */

  {
    id: "coffeePremium",

    category: "cafe",

    image: COFFEE_TRADICIONAL_IMAGES[4],

    images: [
      ...COFFEE_TRADICIONAL_IMAGES,
      ...SALENTO_COCORA_COFFEE_IMAGES.slice(1, 4)
    ],

    title: {
      es: "Experiencia Cafetera Premium",
      en: "Premium Coffee Experience"
    },

    description: {
      es:
        "Una experiencia más profunda para quienes quieren conocer el café de especialidad y la cultura cafetera.",

      en:
        "A deeper experience for travelers who want to discover specialty coffee and local coffee culture."
    },

    duration: {
      es: "Consultar",
      en: "Ask us"
    },

    location: {
      es: "Finca cafetera",
      en: "Coffee farm"
    },

    categoryLabel: {
      es: "Café",
      en: "Coffee"
    },

    price: {
      es: "Consultar",
      en: "Ask us"
    },

    itinerary: {
      es: [
        "Visita a la finca",
        "Recorrido por cultivos",
        "Proceso del café",
        "Preparación",
        "Cata",
        "Conversación con productores"
      ],

      en: [
        "Farm visit",
        "Coffee plantation walk",
        "Coffee process",
        "Preparation",
        "Tasting",
        "Conversation with producers"
      ]
    },

    includes: {
      es: [
        "Visita a finca",
        "Experiencia cafetera",
        "Degustación"
      ],

      en: [
        "Farm visit",
        "Coffee experience",
        "Tasting"
      ]
    },

    notIncludes: {
      es: [
        "Gastos personales"
      ],

      en: [
        "Personal expenses"
      ]
    }
  }

];


/* =========================================================
   TRADUCCIONES
   ========================================================= */

const TRANSLATIONS = {

  es: {

    navHome: "Inicio",
    navExperience: "Experiencia",
    navTours: "Tours",
    navGallery: "Galería",
    navAbout: "Nosotros",
    navFaq: "FAQ",
    navBooking: "Reservar",

    heroEyebrow: "Experiencias auténticas en el Quindío",

    heroTitle: "Vive Salento.<br><em>Siente la montaña.</em>",

    heroDescription:
      "Descubre el Valle de Cocora, el café y la esencia de Salento acompañado por personas que aman esta tierra.",

    heroButton: "Reservar mi experiencia",
    heroExplore: "Explorar tours",

    trustRating: "Experiencias memorables",
    trustLocal: "Experiencia local",
    trustSupport: "Atención",

    heroImageAlt: "Valle de Cocora, Quindío",

    scroll: "Descubre más",

    introEyebrow: "Más que un tour",

    introTitle: "Una experiencia que recordarás.",

    introText:
      "Salento no se trata solamente de visitar lugares. Se trata de caminar entre montañas, probar café recién preparado, conocer personas locales y descubrir historias que no aparecen en una guía.",

    introLink: "Conoce nuestras experiencias →",

    statOneTitle: "Local",
    statOneText: "Conocemos cada rincón de nuestra tierra.",

    statTwoTitle: "Auténtico",
    statTwoText: "Experiencias pensadas para conectar contigo.",

    statThreeTitle: "Cercano",
    statThreeText: "Te acompañamos de principio a fin.",

    featuredEyebrow: "Nuestra experiencia destacada",

    featuredTitle:
      "El tour que reúne lo mejor de Salento.",

    featuredSmall:
      "Salento + Cocora + Café",

    featuredTourTitle:
      "Salento + Valle de Cocora + Finca Cafetera",

    featuredDescription:
      "Un día completo para descubrir los paisajes, sabores y tradiciones que hacen especial al Quindío.",

    featuredButton: "Ver experiencia",

    featuredBadge: "Experiencia firma",

    featuredImageAlt:
      "Salento, Valle de Cocora y café",

    toursEyebrow: "Descubre el Quindío",

    toursTitle: "Elige tu próxima aventura.",

    toursDescription:
      "Diferentes formas de descubrir Salento y sus montañas.",

    filterAll: "Todos",
    filterFeatured: "Destacado",
    filterCocora: "Cocora",
    filterCoffee: "Café",
    filterNature: "Naturaleza",
    filterAdventure: "Aventura",

    videoEyebrow: "Salento en movimiento",

    videoTitle: "Así se siente la montaña.",

    videoDescription:
      "Mira un pequeño vistazo de lo que te espera.",

    videoUnsupported:
      "Tu navegador no soporta video HTML5.",

    galleryEyebrow: "Momentos reales",

    galleryTitle: "Salento se vive así.",

    galleryDescription:
      "Fotografías de nuestras experiencias y de los lugares que hacen especial esta región.",

    whyEyebrow: "¿Por qué viajar con nosotros?",

    whyTitle:
      "Pequeños detalles que hacen la diferencia.",

    valueOneTitle: "Conocimiento local",

    valueOneText:
      "No solo te llevamos a los lugares. Conocemos sus historias, personas y secretos.",

    valueTwoTitle: "Grupos pequeños",

    valueTwoText:
      "Queremos que disfrutes el paisaje y la experiencia sin sentirte parte de una multitud.",

    valueThreeTitle: "Experiencias reales",

    valueThreeText:
      "Café, montaña, comida, naturaleza y cultura local.",

    valueFourTitle: "Atención cercana",

    valueFourText:
      "Estamos contigo antes, durante y después de tu experiencia.",

    aboutEyebrow: "Nuestra historia",

    aboutTitle:
      "Te mostramos Salento como lo vivimos nosotros.",

    aboutTextOne:
      "Somos personas locales apasionadas por nuestra región. Queremos que cada visitante pueda conocer mucho más que una fotografía del Valle de Cocora.",

    aboutTextTwo:
      "Queremos que pruebes nuestro café, conozcas nuestra cultura, camines nuestras montañas y te lleves recuerdos auténticos.",

    aboutButton: "Hablemos de tu viaje",

    aboutImageAlt:
      "Experiencia cafetera en Salento",

    faqEyebrow: "Preguntas frecuentes",

    faqTitle: "Antes de tu aventura.",

    faqQuestionOne:
      "¿Dónde comienza el tour?",

    faqAnswerOne:
      "Nuestro punto de encuentro habitual es en las escaleras de la Parroquia Nuestra Señora del Carmen, frente al parque principal de Salento.",

    faqQuestionTwo:
      "¿Cómo puedo reservar?",

    faqAnswerTwo:
      "Puedes escribirnos directamente por WhatsApp y te ayudaremos a organizar tu experiencia.",

    faqQuestionThree:
      "¿Los tours son privados?",

    faqAnswerThree:
      "Tenemos diferentes modalidades de experiencia. Escríbenos para conocer la disponibilidad y opciones.",

    faqQuestionFour:
      "¿Qué debo llevar?",

    faqAnswerFour:
      "Recomendamos llevar zapatos cómodos, protector solar, agua, una chaqueta ligera y muchas ganas de disfrutar.",

    faqQuestionFive:
      "¿Puedo reservar el mismo día?",

    faqAnswerFive:
      "Dependiendo de la disponibilidad. Lo mejor es escribirnos por WhatsApp antes de tu visita.",

    faqCta:
      "¿Tienes otra pregunta?",

    faqButton:
      "Escríbenos por WhatsApp →",

    finalEyebrow:
      "Tu próxima aventura comienza aquí",

    finalTitle:
      "¿Listo para conocer Salento?",

    finalText:
      "Escríbenos y creemos juntos una experiencia inolvidable.",

    finalButton:
      "Reservar por WhatsApp",

    footerDescription:
      "Experiencias auténticas en Salento, Quindío.",

    footerExplore:
      "Explora",

    footerContact:
      "Contacto",

    footerFollow:
      "Síguenos",

    footerRights:
      "Todos los derechos reservados.",

    footerMade:
      "Hecho con amor desde Salento, Quindío.",

    whatsapp:
      "WhatsApp",

    mobileBooking:
      "Reservar por WhatsApp",

    modalItineraryTitle:
      "Itinerario",

    modalIncludesTitle:
      "Incluye",

    modalNotIncludesTitle:
      "No incluye",

    modalWhatsapp:
      "Reservar esta experiencia",

    viewTour:
      "Ver experiencia",

    from:
      "Desde",

    duration:
      "Duración",

    location:
      "Lugar"

  },


  en: {

    navHome: "Home",
    navExperience: "Experience",
    navTours: "Tours",
    navGallery: "Gallery",
    navAbout: "About us",
    navFaq: "FAQ",
    navBooking: "Book now",

    heroEyebrow: "Authentic experiences in Quindío",

    heroTitle: "Experience Salento.<br><em>Feel the mountains.</em>",

    heroDescription:
      "Discover Cocora Valley, Colombian coffee and the essence of Salento with people who truly love this land.",

    heroButton: "Book my experience",
    heroExplore: "Explore tours",

    trustRating: "Memorable experiences",
    trustLocal: "Local experience",
    trustSupport: "Support",

    heroImageAlt: "Cocora Valley, Quindío",

    scroll: "Discover more",

    introEyebrow: "More than a tour",

    introTitle: "An experience you'll remember.",

    introText:
      "Salento is not only about visiting places. It is about walking through the mountains, tasting freshly brewed coffee, meeting local people and discovering stories that don't appear in a guidebook.",

    introLink: "Discover our experiences →",

    statOneTitle: "Local",
    statOneText: "We know every corner of our land.",

    statTwoTitle: "Authentic",
    statTwoText: "Experiences designed to connect with you.",

    statThreeTitle: "Personal",
    statThreeText: "We accompany you from beginning to end.",

    featuredEyebrow: "Our signature experience",

    featuredTitle:
      "The tour that brings together the best of Salento.",

    featuredSmall:
      "Salento + Cocora + Coffee",

    featuredTourTitle:
      "Salento + Cocora Valley + Coffee Farm",

    featuredDescription:
      "A full day to discover the landscapes, flavors and traditions that make Quindío special.",

    featuredButton: "View experience",

    featuredBadge: "Signature experience",

    featuredImageAlt:
      "Salento, Cocora Valley and coffee",

    toursEyebrow: "Discover Quindío",

    toursTitle: "Choose your next adventure.",

    toursDescription:
      "Different ways to discover Salento and its mountains.",

    filterAll: "All",
    filterFeatured: "Featured",
    filterCocora: "Cocora",
    filterCoffee: "Coffee",
    filterNature: "Nature",
    filterAdventure: "Adventure",

    videoEyebrow: "Salento in motion",

    videoTitle: "This is how the mountains feel.",

    videoDescription:
      "Take a small glimpse of what awaits you.",

    videoUnsupported:
      "Your browser does not support HTML5 video.",

    galleryEyebrow: "Real moments",

    galleryTitle: "This is how Salento feels.",

    galleryDescription:
      "Photos from our experiences and the places that make this region special.",

    whyEyebrow: "Why travel with us?",

    whyTitle:
      "Small details make the difference.",

    valueOneTitle: "Local knowledge",

    valueOneText:
      "We don't just take you places. We know their stories, people and secrets.",

    valueTwoTitle: "Small groups",

    valueTwoText:
      "We want you to enjoy the landscape and experience without feeling part of a crowd.",

    valueThreeTitle: "Real experiences",

    valueThreeText:
      "Coffee, mountains, food, nature and local culture.",

    valueFourTitle: "Personal attention",

    valueFourText:
      "We are with you before, during and after your experience.",

    aboutEyebrow: "Our story",

    aboutTitle:
      "We show you Salento the way we live it.",

    aboutTextOne:
      "We are local people passionate about our region. We want every visitor to experience much more than a photograph of Cocora Valley.",

    aboutTextTwo:
      "We want you to taste our coffee, discover our culture, walk through our mountains and take home authentic memories.",

    aboutButton: "Let's talk about your trip",

    aboutImageAlt:
      "Coffee experience in Salento",

    faqEyebrow: "Frequently asked questions",

    faqTitle: "Before your adventure.",

    faqQuestionOne:
      "Where does the tour start?",

    faqAnswerOne:
      "Our usual meeting point is at the stairs of Nuestra Señora del Carmen Church, in front of Salento's main park.",

    faqQuestionTwo:
      "How can I book?",

    faqAnswerTwo:
      "You can contact us directly on WhatsApp and we will help you organize your experience.",

    faqQuestionThree:
      "Are the tours private?",

    faqAnswerThree:
      "We offer different types of experiences. Contact us to check availability and options.",

    faqQuestionFour:
      "What should I bring?",

    faqAnswerFour:
      "We recommend comfortable shoes, sunscreen, water, a light jacket and lots of enthusiasm.",

    faqQuestionFive:
      "Can I book on the same day?",

    faqAnswerFive:
      "Depending on availability. It is best to contact us on WhatsApp before your visit.",

    faqCta:
      "Have another question?",

    faqButton:
      "Message us on WhatsApp →",

    finalEyebrow:
      "Your next adventure starts here",

    finalTitle:
      "Ready to discover Salento?",

    finalText:
      "Message us and let's create an unforgettable experience together.",

    finalButton:
      "Book on WhatsApp",

    footerDescription:
      "Authentic experiences in Salento, Quindío.",

    footerExplore:
      "Explore",

    footerContact:
      "Contact",

    footerFollow:
      "Follow us",

    footerRights:
      "All rights reserved.",

    footerMade:
      "Made with love from Salento, Quindío.",

    whatsapp:
      "WhatsApp",

    mobileBooking:
      "Book on WhatsApp",

    modalItineraryTitle:
      "Itinerary",

    modalIncludesTitle:
      "Includes",

    modalNotIncludesTitle:
      "Not included",

    modalWhatsapp:
      "Book this experience",

    viewTour:
      "View experience",

    from:
      "From",

    duration:
      "Duration",

    location:
      "Location"

  }

};


/* =========================================================
   UTILIDADES
   ========================================================= */

function getText(key) {
  return (
    TRANSLATIONS[currentLanguage]?.[key] ||
    TRANSLATIONS.es[key] ||
    key
  );
}


function createWhatsAppURL(message) {

  const encodedMessage = encodeURIComponent(message);

  return `https://wa.me/${CONFIG.whatsapp}?text=${encodedMessage}`;
}


function getTourById(id) {
  return TOURS.find((tour) => tour.id === id);
}


/* =========================================================
   WHATSAPP
   ========================================================= */

function updateWhatsAppLinks() {

  const defaultMessage =
    currentLanguage === "en"
      ? "Hello! I would like information about the tours in Salento."
      : "Hola! Quiero información sobre los tours en Salento.";

  const url = createWhatsAppURL(defaultMessage);

  const links = [
    "navBooking",
    "heroWhatsapp",
    "aboutWhatsapp",
    "faqWhatsapp",
    "finalWhatsapp",
    "floatingWhatsapp",
    "mobileWhatsapp"
  ];

  links.forEach((id) => {

    const element = document.getElementById(id);

    if (element) {
      element.href = url;
    }

  });
}


/* =========================================================
   TRADUCIR PÁGINA
   ========================================================= */

function translatePage() {

  document.documentElement.lang = currentLanguage;

  document
    .querySelectorAll("[data-i18n]")
    .forEach((element) => {

      const key = element.dataset.i18n;

      if (!TRANSLATIONS[currentLanguage]?.[key]) {
        return;
      }

      element.innerHTML =
        TRANSLATIONS[currentLanguage][key];
    });


  document
    .querySelectorAll("[data-i18n-alt]")
    .forEach((element) => {

      const key = element.dataset.i18nAlt;

      if (TRANSLATIONS[currentLanguage]?.[key]) {
        element.alt =
          TRANSLATIONS[currentLanguage][key];
      }

    });


  document
    .querySelectorAll(".language-btn")
    .forEach((button) => {

      button.classList.toggle(
        "active",
        button.dataset.lang === currentLanguage
      );

    });


  updateWhatsAppLinks();


  if (currentTour) {
    renderModalContent(currentTour);
  }


  renderTours(currentFilter);
}


/* =========================================================
   IDIOMA
   ========================================================= */

function setupLanguageSwitcher() {

  const buttons =
    document.querySelectorAll(".language-btn");

  buttons.forEach((button) => {

    button.addEventListener("click", () => {

      const language = button.dataset.lang;

      if (!TRANSLATIONS[language]) {
        return;
      }

      currentLanguage = language;

      localStorage.setItem(
        "salentoToursLanguage",
        currentLanguage
      );

      translatePage();

    });

  });

}


/* =========================================================
   CREAR CARD DE TOUR
   ========================================================= */

function createTourCard(tour) {

  const title =
    tour.title[currentLanguage];

  const description =
    tour.description[currentLanguage];

  const category =
    tour.categoryLabel[currentLanguage];

  const duration =
    tour.duration[currentLanguage];

  const location =
    tour.location[currentLanguage];

  const price =
    tour.price[currentLanguage];


  return `
    <article class="tour-card reveal">

      <div class="tour-card-image">

        <img
          src="${tour.image}"
          alt="${title}"
          loading="lazy"
        >

        <span class="tour-card-category">
          ${category}
        </span>

      </div>


      <div class="tour-card-body">

        <h3>
          ${title}
        </h3>

        <p>
          ${description}
        </p>


        <div class="tour-card-meta">

          <span>
            ${duration}
          </span>

          <span>
            ${location}
          </span>

        </div>


        <div class="tour-card-footer">

          <div class="tour-card-price">

            <small>
              ${getText("from")}
            </small>

            <strong>
              ${price}
            </strong>

          </div>


          <button
            class="btn btn-primary"
            type="button"
            data-tour="${tour.id}"
          >
            ${getText("viewTour")}
          </button>

        </div>

      </div>

    </article>
  `;
}


/* =========================================================
   RENDER TOURS
   ========================================================= */

function renderTours(filter = "all") {

  const grid =
    document.getElementById("tourGrid");

  if (!grid) {
    return;
  }

  currentFilter = filter;


  const filteredTours =
    filter === "all"
      ? TOURS
      : TOURS.filter(
          (tour) => tour.category === filter
        );


  grid.innerHTML =
    filteredTours
      .map(createTourCard)
      .join("");


  setupTourButtons();


  requestAnimationFrame(() => {

    grid
      .querySelectorAll(".reveal")
      .forEach((element) => {

        element.classList.add("visible");

      });

  });
}


/* =========================================================
   TOUR BUTTONS
   ========================================================= */

function setupTourButtons() {

  document
    .querySelectorAll("[data-tour]")
    .forEach((button) => {

      if (button.dataset.tourReady === "true") {
        return;
      }

      button.dataset.tourReady = "true";

      button.addEventListener("click", () => {

        const tourId =
          button.dataset.tour;

        openTourModal(tourId);

      });

    });

}


/* =========================================================
   FILTERS
   ========================================================= */

function setupFilters() {

  const filters =
    document.querySelectorAll(".filter");

  filters.forEach((button) => {

    button.addEventListener("click", () => {

      filters.forEach((item) => {
        item.classList.remove("active");
      });

      button.classList.add("active");

      renderTours(
        button.dataset.filter || "all"
      );

    });

  });

}


/* =========================================================
   MODAL
   ========================================================= */

function openTourModal(tourId) {

  const tour =
    getTourById(tourId);

  const modal =
    document.getElementById("tourModal");

  if (!tour || !modal) {
    return;
  }

  currentTour = tour;

  currentImageIndex = 0;

  renderModalContent(tour);

  renderModalGallery(tour);

  modal.classList.add("open");

  modal.setAttribute(
    "aria-hidden",
    "false"
  );

  document.body.classList.add("no-scroll");

  updateModalWhatsApp(tour);

  updateModalImage();

}


function closeTourModal() {

  const modal =
    document.getElementById("tourModal");

  if (!modal) {
    return;
  }

  modal.classList.remove("open");

  modal.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.classList.remove("no-scroll");

  currentTour = null;

}


/* =========================================================
   MODAL CONTENT
   ========================================================= */

function renderModalContent(tour) {

  if (!tour) {
    return;
  }


  const title =
    document.getElementById("modalTitle");

  const category =
    document.getElementById("modalCategory");

  const description =
    document.getElementById("modalDescription");

  const meta =
    document.getElementById("modalMeta");

  const itinerary =
    document.getElementById("modalItinerary");

  const includes =
    document.getElementById("modalIncludes");

  const notIncludes =
    document.getElementById("modalNotIncludes");


  if (title) {
    title.textContent =
      tour.title[currentLanguage];
  }


  if (category) {
    category.textContent =
      tour.categoryLabel[currentLanguage];
  }


  if (description) {
    description.textContent =
      tour.description[currentLanguage];
  }


  if (meta) {

    meta.innerHTML = `
      <span>
        ${getText("duration")}: 
        ${tour.duration[currentLanguage]}
      </span>

      <span>
        ${getText("location")}:
        ${tour.location[currentLanguage]}
      </span>

      <span>
        ${tour.price[currentLanguage]}
      </span>
    `;

  }


  if (itinerary) {

    itinerary.innerHTML =
      tour.itinerary[currentLanguage]
        .map(
          (item) =>
            `<li>${item}</li>`
        )
        .join("");

  }


  if (includes) {

    includes.innerHTML =
      tour.includes[currentLanguage]
        .map(
          (item) =>
            `<li>${item}</li>`
        )
        .join("");

  }


  if (notIncludes) {

    notIncludes.innerHTML =
      tour.notIncludes[currentLanguage]
        .map(
          (item) =>
            `<li>${item}</li>`
        )
        .join("");

  }


  translateModalButtons();

}


/* =========================================================
   MODAL GALLERY
   ========================================================= */

function renderModalGallery(tour) {

  const thumbs =
    document.getElementById("modalThumbs");

  if (!thumbs) {
    return;
  }

  thumbs.innerHTML =
    tour.images
      .map(
        (image, index) => `
          <img
            src="${image}"
            alt="${tour.title[currentLanguage]} ${index + 1}"
            data-index="${index}"
            loading="lazy"
          >
        `
      )
      .join("");


  thumbs
    .querySelectorAll("img")
    .forEach((image) => {

      image.addEventListener(
        "click",
        () => {

          currentImageIndex =
            Number(image.dataset.index);

          updateModalImage();

        }
      );

    });

}


function updateModalImage() {

  if (!currentTour) {
    return;
  }

  const image =
    document.getElementById("modalImage");

  if (!image) {
    return;
  }


  const images =
    currentTour.images;


  if (!images.length) {
    return;
  }


  if (
    currentImageIndex < 0 ||
    currentImageIndex >= images.length
  ) {

    currentImageIndex = 0;

  }


  image.src =
    images[currentImageIndex];

  image.alt =
    currentTour.title[currentLanguage];


  document
    .querySelectorAll("#modalThumbs img")
    .forEach((thumb, index) => {

      thumb.classList.toggle(
        "active",
        index === currentImageIndex
      );

    });

}


function nextModalImage() {

  if (!currentTour) {
    return;
  }

  currentImageIndex =
    (currentImageIndex + 1) %
    currentTour.images.length;

  updateModalImage();

}


function previousModalImage() {

  if (!currentTour) {
    return;
  }

  currentImageIndex =
    (currentImageIndex -
      1 +
      currentTour.images.length) %
    currentTour.images.length;

  updateModalImage();

}


/* =========================================================
   MODAL WHATSAPP
   ========================================================= */

function updateModalWhatsApp(tour) {

  const button =
    document.getElementById("modalWhatsapp");

  if (!button || !tour) {
    return;
  }


  const message =
    currentLanguage === "en"
      ? `Hello! I am interested in the "${tour.title.en}" experience.`
      : `Hola! Estoy interesado en la experiencia "${tour.title.es}".`;


  button.href =
    createWhatsAppURL(message);

}


function translateModalButtons() {

  const button =
    document.getElementById("modalWhatsapp");

  if (button) {
    button.textContent =
      getText("modalWhatsapp");
  }

}


/* =========================================================
   CONFIGURAR MODAL
   ========================================================= */

function setupModal() {

  const modal =
    document.getElementById("tourModal");

  if (!modal) {
    return;
  }


  modal
    .querySelectorAll("[data-close]")
    .forEach((element) => {

      element.addEventListener(
        "click",
        closeTourModal
      );

    });


  const previous =
    document.getElementById("prevImage");

  const next =
    document.getElementById("nextImage");


  if (previous) {
    previous.addEventListener(
      "click",
      previousModalImage
    );
  }


  if (next) {
    next.addEventListener(
      "click",
      nextModalImage
    );
  }


  document.addEventListener(
    "keydown",
    (event) => {

      if (!modal.classList.contains("open")) {
        return;
      }


      if (event.key === "Escape") {
        closeTourModal();
      }


      if (event.key === "ArrowRight") {
        nextModalImage();
      }


      if (event.key === "ArrowLeft") {
        previousModalImage();
      }

    }
  );

}


/* =========================================================
   TOUR DESTACADO
   ========================================================= */

function setupFeaturedTour() {

  const tour =
    getTourById(CONFIG.defaultTour);

  const featuredImage =
    document.getElementById("featuredImage");

  const thumbs =
    document.getElementById("featuredThumbs");


  if (!tour) {
    return;
  }


  if (featuredImage) {

    featuredImage.src =
      tour.images[0];

    featuredImage.alt =
      tour.title[currentLanguage];

  }


  if (!thumbs) {
    return;
  }


  thumbs.innerHTML =
    tour.images
      .slice(0, 5)
      .map(
        (image, index) => `
          <img
            src="${image}"
            alt="${tour.title[currentLanguage]} ${index + 1}"
            data-featured-index="${index}"
            class="${index === 0 ? "active" : ""}"
            loading="lazy"
          >
        `
      )
      .join("");


  thumbs
    .querySelectorAll("img")
    .forEach((thumb) => {

      thumb.addEventListener(
        "click",
        () => {

          const index =
            Number(
              thumb.dataset.featuredIndex
            );


          if (featuredImage) {

            featuredImage.src =
              tour.images[index];

          }


          thumbs
            .querySelectorAll("img")
            .forEach((item) => {

              item.classList.remove("active");

            });


          thumb.classList.add("active");

        }
      );

    });

}


/* =========================================================
   MOBILE MENU
   ========================================================= */

function setupMobileMenu() {

  const toggle =
    document.getElementById("menuToggle");

  const nav =
    document.getElementById("navLinks");


  if (!toggle || !nav) {
    return;
  }


  toggle.addEventListener("click", () => {

    const isOpen =
      nav.classList.toggle("open");


    toggle.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

  });


  nav
    .querySelectorAll("a")
    .forEach((link) => {

      link.addEventListener(
        "click",
        () => {

          nav.classList.remove("open");

          toggle.setAttribute(
            "aria-expanded",
            "false"
          );

        }
      );

    });

}


/* =========================================================
   HEADER SCROLL
   ========================================================= */

function setupHeader() {

  const header =
    document.getElementById("header");

  if (!header) {
    return;
  }


  const updateHeader =
    () => {

      header.classList.toggle(
        "scrolled",
        window.scrollY > 50
      );

    };


  updateHeader();

  window.addEventListener(
    "scroll",
    updateHeader,
    { passive: true }
  );

}


/* =========================================================
   VIDEO
   ========================================================= */

function setupVideo() {

  const video =
    document.querySelector(
      ".video-card video"
    );

  if (!video) {
    return;
  }


  video.muted = true;

  video.loop = true;

  video.playsInline = true;


  /*
     Intentamos reproducir automáticamente.
     Los navegadores pueden bloquear autoplay,
     por eso no generamos ningún error si ocurre.
  */

  const playPromise =
    video.play();


  if (
    playPromise &&
    typeof playPromise.catch === "function"
  ) {

    playPromise.catch(() => {
      // Autoplay bloqueado por el navegador.
    });

  }

}


/* =========================================================
   GALERÍA PRINCIPAL
   ========================================================= */

function setupSiteGallery() {

  const gallery =
    document.getElementById("siteGallery");

  if (!gallery) {
    return;
  }


  const sources = [

    ...SALENTO_COCORA_COFFEE_IMAGES,

    ...COFFEE_TRADICIONAL_IMAGES,

    ...COCORA_3_IMAGES,

    ...COCORA_6_IMAGES

  ];


  /*
     Eliminar imágenes duplicadas
  */

  const uniqueImages =
    [...new Set(sources)];


  const galleryImages =
    uniqueImages.slice(0, 18);


  gallery.innerHTML =
    galleryImages
      .map(
        (src, index) => `
          <button
            class="gallery-item"
            type="button"
            data-gallery-index="${index}"
            aria-label="${
              currentLanguage === "en"
                ? `Open photo ${index + 1}`
                : `Abrir foto ${index + 1}`
            }"
          >

            <img
              src="${src}"
              alt="${
                currentLanguage === "en"
                  ? `Salento Tours Mountain photo ${index + 1}`
                  : `Foto Salento Tours Mountain ${index + 1}`
              }"
              loading="${index < 4 ? "eager" : "lazy"}"
            >

            <span class="gallery-overlay">
              <span>↗</span>
            </span>

          </button>
        `
      )
      .join("");


  gallery
    .querySelectorAll(".gallery-item")
    .forEach((button) => {

      button.addEventListener(
        "click",
        () => {

          const index =
            Number(
              button.dataset.galleryIndex
            );


          openGalleryLightbox(
            galleryImages,
            index
          );

        }
      );

    });

}


/* =========================================================
   GALERÍA LIGHTBOX
   ========================================================= */

function openGalleryLightbox(
  images,
  startIndex = 0
) {

  let index = startIndex;


  const lightbox =
    document.createElement("div");


  lightbox.className =
    "gallery-lightbox";


  lightbox.innerHTML = `
    <div class="gallery-lightbox-backdrop"></div>

    <button
      class="gallery-lightbox-close"
      type="button"
      aria-label="Cerrar"
    >
      ×
    </button>

    <button
      class="gallery-lightbox-prev"
      type="button"
      aria-label="Imagen anterior"
    >
      ‹
    </button>

    <img
      class="gallery-lightbox-image"
      src="${images[index]}"
      alt=""
    >

    <button
      class="gallery-lightbox-next"
      type="button"
      aria-label="Siguiente imagen"
    >
      ›
    </button>
  `;


  /*
     Estilos propios del lightbox.
     Se agregan desde JS para no depender
     de otro archivo.
  */

  const style =
    document.createElement("style");


  style.textContent = `
    .gallery-lightbox {
      position: fixed;
      inset: 0;
      z-index: 3000;

      display: flex;
      align-items: center;
      justify-content: center;

      padding: 30px;

      background: rgba(5, 15, 10, 0.94);

      backdrop-filter: blur(10px);
    }

    .gallery-lightbox-image {
      display: block;

      max-width: min(92vw, 1200px);
      max-height: 86vh;

      object-fit: contain;

      border-radius: 12px;

      box-shadow: 0 30px 80px rgba(0,0,0,.45);
    }

    .gallery-lightbox-close,
    .gallery-lightbox-prev,
    .gallery-lightbox-next {
      position: absolute;

      z-index: 2;

      display: flex;
      align-items: center;
      justify-content: center;

      width: 48px;
      height: 48px;

      border: 0;
      border-radius: 50%;

      background: rgba(255,255,255,.92);
      color: #1b4332;

      font-size: 28px;

      cursor: pointer;

      transition: .25s ease;
    }

    .gallery-lightbox-close:hover,
    .gallery-lightbox-prev:hover,
    .gallery-lightbox-next:hover {
      background: #1b4332;
      color: #fff;
    }

    .gallery-lightbox-close {
      top: 20px;
      right: 20px;
    }

    .gallery-lightbox-prev {
      left: 25px;
      top: 50%;
      transform: translateY(-50%);
    }

    .gallery-lightbox-next {
      right: 25px;
      top: 50%;
      transform: translateY(-50%);
    }

    @media(max-width: 600px) {

      .gallery-lightbox {
        padding: 15px;
      }

      .gallery-lightbox-prev,
      .gallery-lightbox-next {
        width: 42px;
        height: 42px;
      }

      .gallery-lightbox-prev {
        left: 10px;
      }

      .gallery-lightbox-next {
        right: 10px;
      }

    }
  `;


  document.head.appendChild(style);

  document.body.appendChild(lightbox);

  document.body.classList.add("no-scroll");


  const image =
    lightbox.querySelector(
      ".gallery-lightbox-image"
    );


  function update() {

    image.src = images[index];

    image.alt =
      currentLanguage === "en"
        ? `Salento Tours Mountain photo ${index + 1}`
        : `Foto Salento Tours Mountain ${index + 1}`;

  }


  function close() {

    lightbox.remove();

    document.body.classList.remove(
      "no-scroll"
    );

  }


  function next() {

    index =
      (index + 1) %
      images.length;

    update();

  }


  function previous() {

    index =
      (index - 1 + images.length) %
      images.length;

    update();

  }


  lightbox
    .querySelector(".gallery-lightbox-close")
    .addEventListener("click", close);


  lightbox
    .querySelector(".gallery-lightbox-backdrop")
    .addEventListener("click", close);


  lightbox
    .querySelector(".gallery-lightbox-next")
    .addEventListener("click", next);


  lightbox
    .querySelector(".gallery-lightbox-prev")
    .addEventListener("click", previous);


  const keyboardHandler =
    (event) => {

      if (!document.body.contains(lightbox)) {

        document.removeEventListener(
          "keydown",
          keyboardHandler
        );

        return;

      }


      if (event.key === "Escape") {
        close();
      }


      if (event.key === "ArrowRight") {
        next();
      }


      if (event.key === "ArrowLeft") {
        previous();
      }

    };


  document.addEventListener(
    "keydown",
    keyboardHandler
  );

}


/* =========================================================
   REVEAL
   ========================================================= */

function setupRevealObserver() {

  document.body.classList.add(
    "js-reveal"
  );


  const elements =
    document.querySelectorAll(
      ".reveal"
    );


  if (!elements.length) {
    return;
  }


  if (
    !("IntersectionObserver" in window)
  ) {

    elements.forEach((element) => {
      element.classList.add("visible");
    });

    return;

  }


  const observer =
    new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            entry.target.classList.add(
              "visible"
            );

            observer.unobserve(
              entry.target
            );

          }

        });

      },
      {
        threshold: 0.08
      }
    );


  elements.forEach((element) => {

    observer.observe(element);

  });

}


/* =========================================================
   AÑO DEL FOOTER
   ========================================================= */

function setupCurrentYear() {

  const year =
    document.getElementById("year");

  if (year) {
    year.textContent =
      new Date().getFullYear();
  }

}


/* =========================================================
   SMOOTH SCROLL
   ========================================================= */

function setupSmoothScroll() {

  document
    .querySelectorAll('a[href^="#"]')
    .forEach((link) => {

      link.addEventListener(
        "click",
        (event) => {

          const targetId =
            link.getAttribute("href");


          if (
            !targetId ||
            targetId === "#"
          ) {
            return;
          }


          const target =
            document.querySelector(
              targetId
            );


          if (!target) {
            return;
          }


          event.preventDefault();


          target.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });

        }
      );

    });

}


/* =========================================================
   FALLBACK DE IMÁGENES
   ========================================================= */

function setupImageFallbacks() {

  document
    .querySelectorAll("img")
    .forEach((image) => {

      image.addEventListener(
        "error",
        () => {

          if (
            image.dataset.fallbackApplied
          ) {
            return;
          }


          image.dataset.fallbackApplied =
            "true";


          image.src = LOGO_URL;

        },
        { once: true }
      );

    });

}


/* =========================================================
   INICIALIZACIÓN
   ========================================================= */

function initSalentoTours() {

  console.log(
    "🌿 Salento Tours Mountain iniciando..."
  );


  setupHeader();

  setupMobileMenu();

  setupLanguageSwitcher();

  setupFilters();

  /*
     IMPORTANTE:
     Primero renderizamos los tours.
     Después configuramos sus botones.
  */

  renderTours(
    currentFilter
  );

  setupTourButtons();

  setupFeaturedTour();

  setupModal();

  setupVideo();

  setupSiteGallery();

  setupCurrentYear();

  setupSmoothScroll();

  setupImageFallbacks();

  translatePage();

  setupRevealObserver();


  console.log(
    `✅ Salento Tours Mountain cargado: ${TOURS.length} tours`
  );

}


/* =========================================================
   DOM READY
   ========================================================= */

if (
  document.readyState === "loading"
) {

  document.addEventListener(
    "DOMContentLoaded",
    initSalentoTours
  );

} else {

  initSalentoTours();

}
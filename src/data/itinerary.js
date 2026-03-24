export const tripMeta = {
  title: "Namíbia 4x4",
  subtitle: "12 dies entre dunes, costa, granits, càmpings i safari",
  dateRange: "01/04 → 13/04",
  totalDays: "12 dies",
  footerNote: "Toca qualsevol dia per obrir-ne els detalls",
  note: "Als apunts també s’indica que Damaraland es veu dins la part de Spitzkoppe i que es descarta Twyfelfontein.",
};

export const flights = {
  outbound: {
    route: "BCN → FRA → WDH",
    segment1: "01/04 16:20 → 18:30 (2h10)",
    layover: "3h25",
    segment2: "01/04 21:55 → 02/04 08:10 (10h15)",
  },
  inbound: {
    route: "WDH → FRA → BCN",
    segment1: "12/04 19:15 → 13/04 05:25 (10h10)",
    layover: "2h10",
    segment2: "13/04 07:35 → 09:40 (2h05)",
  },
};

export const itinerary = [
  {
    day: 1,
    date: "01/04",
    title: "Barcelona → Windhoek",
    region: "Dia de viatge",
    stay: "En trànsit",
    status: "Vol reservat",
    icon: "Plane",
    summary: "Dia principal de vol.",
    plan: [
      "16:20 vol de Barcelona a Windhoek (WDH)",
      "Deixa a mà l’essencial i el necessari per a la primera nit",
      "Dorm i recupera’t per començar la road trip",
    ],
    notes:
      "Comença lleuger i porta documents, carregador i una capa d’abric a mà.",
    links: [],
    flight: { label: "Vol d'anada", details: flights.outbound },
  },
  {
    day: 2,
    date: "02/04",
    title: "Arribada a Windhoek",
    region: "Windhoek",
    stay: "Windhoek",
    status: "Reserva sol·licitada",
    icon: "Car",
    summary: "Aterrada, compres i inici tranquil.",
    plan: [
      "08:00 arribada a WDH",
      "12:00 sortida amb el cotxe",
      "Comprar menjar al Grove Mall",
      "Prendre’s el dia amb calma després del vol",
    ],
    notes:
      "Bon dia per comprar aigua, menjar i snacks de carretera abans de baixar cap al sud.",
    links: [],
  },
  {
    day: 3,
    date: "03/04",
    title: "Ruta cap a Sossusvlei",
    region: "Windhoek → Sossusvlei",
    stay: "Sossus Oasis Campsite",
    status: "Reservat",
    icon: "Car",
    summary: "Gran dia de transfer pel desert.",
    plan: [
      "05:30 despertar",
      "Conducció WDH → Sossusvlei (~4,5 h)",
      "Instal·lar-se al càmping",
      "Dia tranquil per guardar forces per al parc",
    ],
    notes:
      "Arriba-hi amb prou benzina, aigua i menjar per al tram de desert.",
    links: [],
  },
  {
    day: 4,
    date: "04/04",
    title: "Imprescindibles de Namib-Naukluft",
    region: "Sossusvlei / Sesriem",
    stay: "Sossus Oasis Campsite",
    status: "Reservat",
    icon: "Mountain",
    summary: "Dia clàssic de dunes.",
    plan: [
      "06:00 entrada al parc nacional",
      "Deadvlei",
      "Canó de Sesriem",
      "Posta de sol / descans al càmping",
    ],
    notes:
      "Sortir d’hora marca molt la diferència per la llum, la calor i la gent.",
    links: [],
  },
  {
    day: 5,
    date: "05/04",
    title: "Solitaire + dia de càmping tranquil",
    region: "Solitaire / carretera del desert",
    stay: "Camp Gecko",
    status: "Reservat",
    icon: "TreePalm",
    summary: "Parada de carretera i dia de desconnexió.",
    plan: [
      "Parada a Solitaire",
      "Aturada per menjar apple pie",
      "Comprar menjar fresc i repostar",
      "Relax: cartes, lectura, música, cervesa i cuina al foc",
    ],
    notes:
      "Un molt bon dia coixí per baixar el ritme i gaudir del viatge.",
    links: [],
  },
  {
    day: 6,
    date: "06/04",
    title: "Walvis Bay / Sandwich Harbour",
    region: "Walvis Bay / Swakopmund",
    stay: "Alte Brücke",
    status: "Reservat",
    icon: "Waves",
    summary: "Costa + dunes + foques.",
    plan: [
      "Anar cap a Walvis Bay",
      "Tour a Sandwich Harbour + foques",
      "Vespre a la costa entre Walvis Bay i Swakopmund",
    ],
    notes:
      "És un dels dies amb més contrast del viatge: dunes tocant l’oceà.",
    links: [
      {
        label: "Tour de foques i Sandwich Harbour",
        url: "https://desertdunesdust-tours.com/pelican-point-seal-and-sandwich-harbour-tour/",
      },
      {
        label: "Opció combo amb caiac",
        url: "https://www.pelican-point-kayaking.com/kayakcombo",
      },
      {
        label: "Crònica de l’experiència",
        url: "https://wideangleadventure.com/2022/06/05/pelican-point-kayaking-and-4x4-dune-drive-swakopmund-namibia/",
      },
    ],
  },
  {
    day: 7,
    date: "07/04",
    title: "Swakopmund → Spitzkoppe",
    region: "Swakopmund / Spitzkoppe",
    stay: "Spitzkoppe Rest Camp",
    status: "Reservat",
    icon: "Mountain",
    summary: "Encàrrecs, carretera i posta de sol.",
    plan: [
      "Visitar el poble",
      "Comprar menjar, aigua, benzina i llenya",
      "Bird sanctuary si encaixa",
      "Conduir fins a Spitzkoppe",
      "Excursió + posta de sol",
    ],
    notes:
      "Un dels vespres més fotogènics de tot l’itinerari.",
    links: [
      {
        label: "Sunset + Arch + Bushman trail",
        url: "https://www.wikiloc.com/hiking-trails/nainais-144822985",
      },
      {
        label: "Ruta 4x4 més llarga",
        url: "https://www.wikiloc.com/offroading-trails/spitzkoppe-209125841",
      },
      {
        label: "Guia per visitar Spitzkoppe",
        url: "https://safeandhealthytravel.com/everything-you-need-to-know-for-your-visit-to-spitzkoppe-erongo-region-namibia/",
      },
    ],
  },
  {
    day: 8,
    date: "08/04",
    title: "Spitzkoppe → Skeleton Coast",
    region: "Skeleton Coast",
    stay: "NWR Mile 108",
    status: "Pagament pendent",
    icon: "Car",
    summary: "Paisatge de roca fins a la costa dels naufragis.",
    plan: [
      "Matí per Spitzkoppe si hi ha temps",
      "Ruta cap a Skeleton Coast",
      "Buscar miradors de naufragis",
      "Parada a Henties Bay si convé",
    ],
    notes:
      "Bon dia per mantenir un pla flexible segons el ritme i el temps.",
    links: [
      {
        label: "Guia de mapes de naufragis",
        url: "https://roamthereaches.com/2021/12/18/how-to-see-skeleton-coast-namibia-with-shipwreck-map/",
      },
      {
        label: "Mapa de naufragis a Google",
        url: "https://google.com/maps/d/u/0/viewer?mid=1hyT2SmbffEeF47fzV8ZznGAF7h3mR_5A&femb=1&ll=0%2C0&z=9",
      },
      {
        label: "Article amb mapa de Skeleton Coast",
        url: "https://theorangebackpack.nl/en/namibia/skeleton-coast-namibia-map-shipwrecks/",
      },
    ],
  },
  {
    day: 9,
    date: "09/04",
    title: "Cape Cross + Damaraland",
    region: "Cape Cross / zona Hoada",
    stay: "Hoada Campsite",
    status: "Reservat",
    icon: "Waves",
    summary: "Foques, costa i ambient de desert.",
    plan: [
      "Colònia de foques de Cape Cross",
      "Possible parada a Henties Bay",
      "Ruta cap a l’interior fins a Hoada",
      "Estar atents a elefants adaptats al desert si les condicions acompanyen",
    ],
    notes:
      "Als apunts també consta Damaraland i que es descarta Twyfelfontein.",
    links: [],
  },
  {
    day: 10,
    date: "10/04",
    title: "Etosha Oest",
    region: "Etosha",
    stay: "Olifantsrus Camp",
    status: "Reservat",
    icon: "ShieldCheck",
    summary: "Comença la part safari.",
    plan: [
      "Entrar a la zona d’Etosha",
      "Safari / waterholes",
      "Capvespre tranquil al campament",
    ],
    notes:
      "Primer dia plenament centrat en fauna, així que val la pena deixar marge per observacions.",
    links: [],
  },
  {
    day: 11,
    date: "11/04",
    title: "Etosha Central",
    region: "Etosha",
    stay: "Okaukuejo Resort",
    status: "Reservat",
    icon: "ShieldCheck",
    summary: "Un altre gran dia de safari.",
    plan: [
      "Continuar travessant Etosha",
      "Game drives entre miradors i waterholes",
      "Nit a Okaukuejo",
    ],
    notes:
      "És un dia ideal per ser flexible i seguir el moviment dels animals.",
    links: [],
  },
  {
    day: 12,
    date: "12/04",
    title: "Etosha → Waterberg",
    region: "Etosha / Waterberg",
    stay: "Omatosu Safari Camp",
    status: "2n pagament pendent",
    icon: "Car",
    summary: "Últim gran trasllat del recorregut.",
    plan: [
      "Conduir des d’Etosha cap a Waterberg",
      "Últims paisatges de safari i carretera",
      "Instal·lar-se a Omatosu Safari Camp",
    ],
    notes:
      "Bon dia per abaixar revolucions i gaudir de l’últim tram de road trip.",
    links: [],
    flight: { label: "Vol de tornada", details: flights.inbound },
  },
];
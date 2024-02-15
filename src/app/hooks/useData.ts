import React from "react";
import ceremonia from "../../assets/img/bodas_ceremonia.png";
import religiosaPic from "../../assets/img/bodas_religiosa.png";
import civilPic from "../../assets/img/bodas_civil.png";
import coctel from "../../assets/img/bodas_coctel.png";
import banquete from "../../assets/img/bodas_banquete.png";
import fiesta from "../../assets/img/bodas_fiesta.png";
import infinityExplanationOvalImage from "../../assets/img/infinity_explanation_oval.png";

import tbvVid from "../../assets/vid/bodas_velas_vid.mp4";
import bodasReligiosaVid from "../../assets/vid/bodas_religiosa_vid.mp4";
import eventsCorporatePic from "../../assets/img/events_corporate_pic.png";
import eventsCustomPic from "../../assets/img/events_custom_pic.png";

import repertoirePdf from "../../assets/pdf/repertoire.pdf";
import soloistsPdf from "../../assets/pdf/solists.pdf";
import infinityPdf from "../../assets/pdf/infinity.pdf";
import projectsPdf from "../../assets/pdf/projects.pdf";
import faqPdf from "../../assets/pdf/faq.pdf";

export const useMenuLinks = () => [
  {
    section: "Inicio",
    url: "./",
  },
  {
    section: "Bodas",
    url: "./weddings",
  },
  {
    section: "Eventos",
    url: "./events",
  },
  {
    section: "Infinity",
    url: "./infinity",
  },
  {
    section: "CM Agency",
    url: "./cma",
  },
  {
    section: "Proyectos",
    url: "./projects",
  },
  {
    section: "Personalización",
    url: "./customization",
  },
  {
    section: "Vídeos",
    url: "./videos",
  },
  {
    section: "Contacto",
    url: "./contact",
  },
];

export const useReviews = () => [
  "Los contratamos para el cóctel, y, la verdad, es que repetiría, sin dudas, porque le dio al momento un ambiente increíble. ¡Una suerte haber contado con ellos!",
  "Contactamos con ellos solo un mes antes de la boda, aun así se amoldaron a nosotros y fueron muy flexibles, ofreciendo todas las facilidades y ajustándose a nuestros gustos musicales. Los elegimos para el cocktail de la boda y fué un acierto, muy profesionales, todos los invitados quedaron encantados, los recomendaríamos 100%.",
  "Una experiencia inolvidable, han hecho de mí boda uno de los recuerdos más gratos. Super profesionales, nos han orientado, han sido pacientes, además son bastante flexibles, vamos! que están allí para hacer de tu momento, un gran momento.",
];

export const useWeddingsServices = () => [
  {
    name: "ceremonia",
    pic: ceremonia,
  },
  { name: "cóctel", pic: coctel, url: "/weddings/cocktail" },
  {
    name: "banquete",
    pic: banquete,
    url: "/weddings/dinner",
  },
  {
    name: "fiesta",
    pic: fiesta,
    url: "/weddings/party",
  },
];

export const useWeddingsCustomizations = () => [
  {
    title: '"canciones a la carta"',
    subtitle: "personaliza una a una todas las canciones",
    url: repertoirePdf,
  },
  {
    title: "añade solistas",
    subtitle: "sopranos y cantantes de poop",
    url: soloistsPdf,
  },
  {
    title: "escúchanos",
    subtitle: "versiones únicas de tu música favorita",
    url: "/videos",
  },
  {
    title: "cma ceremonias",
    subtitle: "los mejores grupos",
    url: "/cma",
  },
];

export const useWeddingsCeremonyTypes = () => [
  {
    url: "/weddings/religious",
    picture: religiosaPic,
    title: "religiosa",
  },
  {
    url: "/weddings/civil",
    picture: civilPic,
    title: "civil",
  },
];

export const useWeddingsServiceModalsData = () => ({
  religious: {
    hero: religiosaPic,
    title: "religiosa",
    subtitle:
      "clásica o actual, os ayudamos a elegir la música de vuestro gran día",
    customizations: [
      {
        title: "repertorio personalizado",
        subtitle: "clásico, bandas sonoras y pop",
        url: repertoirePdf,
      },
      {
        title: "versiones trio concuerda",
        subtitle: "estilo único y arreglos propios de cada canción",
        url: "/videos",
      },
      {
        title: "solistas para la ceremonia",
        subtitle: "sopranos y voces líricas",
        url: soloistsPdf,
      },
      {
        title: "protocolo",
        subtitle: "",
        url: "#",
      },
    ],
    premiumCustomization: {
      banner: bodasReligiosaVid,
      title: "ceremonia premium",
      subtitle: "para las ceremonias más impresionantes",
      url: "/cma",
    },
    footer: {
      url: "/weddings/cocktail",
      text: "Cóctel: covers de pop y mucho más",
    },
  },
  civil: {
    hero: civilPic,
    title: "civil",
    subtitle:
      'sea del estilo que sea, os dejamos elegir toda la música "a la carta"',
    customizations: [
      {
        title: "repertorio personalizado",
        subtitle: "clásico, bandas sonoras y pop",
        url: repertoirePdf,
      },
      {
        title: "versiones trio concuerda",
        subtitle: "estilo único y arreglos propios de cada canción",
        url: "/videos",
      },
      {
        title: "solistas para la ceremonia",
        subtitle: "cantantes pop de diferentes estilos",
        url: soloistsPdf,
      },
      {
        title: "protocolo",
        subtitle: "",
        url: "#",
      },
    ],
    premiumCustomization: {
      banner: tbvVid,
      title: "ceremonia premium",
      subtitle: 'lo mejor para el momento del "sí quiero"',
      url: "/cma",
    },
    footer: {
      url: "/weddings/cocktail",
      text: "cóctel: covers del mejor pop y mucho más",
    },
  },
  cocktail: {
    hero: coctel,
    title: "cóctel",
    subtitle: "las mejores versiones de Trio Concuerda para un cóctel perfecto",
    customizations: [
      {
        title: "personaliza tu cóctel",
        subtitle: "repertorio, decoración y vestuario",
        url: "/personalization",
      },
      {
        title: "infinity",
        subtitle: "marca la diferencia",
        url: "/infinity",
      },
      {
        title: "solistas para el cóctel",
        subtitle: "cantantes pop de diferentes estilos",
        url: soloistsPdf,
      },
      {
        title: "escúchanos",
        subtitle: "versiones únicas de tu música favorita",
        url: "/videos",
      },
    ],
    premiumCustomization: {
      banner: tbvVid,
      title: "candle music agency",
      subtitle: "String Band TC y mucho más",
      url: "/cma#cocktail",
    },
    footer: {
      url: "/weddings/dinner",
      text: "Banquete: un concierto privado",
    },
  },
  dinner: {
    hero: banquete,
    title: "banquete",
    subtitle: "el mejor momento para disfrutar de la música en directo",
    customizations: [
      {
        title: "personaliza tu banquete",
        subtitle: "repertorio, decoración y vestuario",
        url: "/personalization",
      },
      {
        title: "infinity",
        subtitle: "marca la diferencia",
        url: "/infinity",
      },
      {
        title: "solistas para el banquete",
        subtitle: "cantantes pop de diferentes estilos",
        url: soloistsPdf,
      },
      {
        title: "escúchanos",
        subtitle: "versiones únicas de tu música favorita",
        url: "/videos",
      },
    ],
    premiumCustomization: {
      banner: tbvVid,
      title: "ceremonia premium",
      subtitle: "para las ceremonias más impresionantes",
      url: "/cma#dinner",
    },
    footer: {
      url: "/weddings/party",
      text: "Fiesta con músicos en directo",
    },
  },
  party: {
    hero: fiesta,
    title: "fiesta",
    subtitle:
      "continua la fiesta con cantantes solistas y nuetro saxo en directo",
    customizations: [
      {
        title: "cantantes",
        subtitle: "acaba tu día por todo lo alto",
        url: soloistsPdf,
      },
      {
        title: "saxo",
        subtitle: "energía y carisma durante la fiesta",
        url: soloistsPdf,
      },
    ],
    premiumCustomization: {
      banner: tbvVid,
      title: "candle music agency",
      subtitle: "las mejores bandas de Pop, Funk y Rock",
      url: "/cma",
    },
    footer: {
      url: "/contact",
      text: "contacto",
    },
  },
});

export const useEventsServices = () => [
  {
    name: "corporativos",
    pic: eventsCorporatePic,
    url: "/events/corporate",
  },
  { name: "a medida", pic: eventsCustomPic, url: "/events/custom" },
];

export const useEventsServiceModalData = () => ({
  corporate: {
    hero: eventsCorporatePic,
    title: "corporativos",
    subtitle: "Especializados en eventos de empresa",
    customizations: [
      {
        title: "eventos personalizados",
        subtitle: "repertorio, solistas, decoración y vestuario",
        url: "#",
      },
      {
        title: "infinity",
        subtitle: "innovación para marcar la diferencia",
        url: "#",
      },
      {
        title: "escúchanos",
        subtitle: "versiones únicas de la mejor música",
        url: "/videos",
      },
    ],
    premiumCustomization: {
      banner: tbvVid,
      title: "candle music agency",
      subtitle: "las mejores bandas de Pop, Funk y Rock",
      url: "/cma",
    },
    footer: {
      url: "/contact",
      text: "contacto",
    },
  },
  custom: {
    hero: eventsCustomPic,
    title: "a medida",
    subtitle:
      "creatividad y una amplia oferta para diseñar eventos personalizados",
    customizations: [
      {
        title: "espectáculos trío concuerda",
        subtitle:
          "todo un catálogo de proyectos a elegir, con diferentes objetivos y para todo tipo de audiencias: programas musicales variados, actuaciones para niños y mayores, conciertos literarios",
        url: "#",
      },
      {
        title: "escúchanos",
        subtitle: "versiones únicas de la mejor música",
        url: "/videos",
      },
    ],
    footer: {
      url: "/contact",
      text: "cuéntanos tu idea",
    },
  },
});

export const useFooterLinks = () => [
  {
    text: "repertorio",
    url: "",
  },
  {
    text: "solistas",
    url: "",
  },
  {
    text: "decoración",
    url: "",
  },
  {
    text: "grupos CM agency",
    url: "",
  },
  {
    text: "escúchanos",
    url: "",
  },
  {
    text: "contacto",
    url: "",
  },
  {
    text: "instagram",
    url: "",
  },
  {
    text: "youtube",
    url: "",
  },
];

export const useContactData = () => ({
  phone: "+34 604 820 022",
  email: "grupotrioconcuerda@gmail.com",
});

export const useInfinityBody = () => ({
  title: "¿Cómo funciona?",
  paragraphs: [
    "A través de una pedalera o loop station que nos grabará en vivo y reproducirá cada una de las voces en bucle, podremos improvisar y crear versiones únicas del mejor pop, jazz y R&B. ",
    "Diseñamos y construimos cada canción, voz por voz, sobre un acompañamiento de percusión, consiguiendo un resultado final único.",
  ],
  link: infinityPdf,
  musicTitle: "¿Qué música?",
  customizations: [
    {
      title: "pop",
      subtitle: "las mejores canciones de todos los tiempos",
      url: "",
    },
    {
      title: "lounge covers",
      subtitle: "música actual versionada a Bossa Nova y R&B",
      url: "",
    },
    {
      title: "dance covers",
      subtitle: "los temas más movidos y animados",
      url: "",
    },
    {
      title: "jazz",
      subtitle: "para acompañar los eventos más elegantes",
      url: "",
    },
  ],
  ovalImage: infinityExplanationOvalImage,
});

export const useInfinityServices = () => [
  {
    name: "solistas",
    pic: eventsCorporatePic,
    text: "Andrea\nMaryna\nTony\nRolita\nTayra\nFred Sax\nInoidel Sax",
    url: soloistsPdf,
  },
  {
    name: "decoración",
    pic: "",
    text: "Escenarios con diferentes temáticas: disco y floral con paredes verticales de lentejuelas y flores",
    url: "https://www.youtube.com/playlist?list=PLMLMh9sEXCA8T9CiZhS00ltVyjCn0Xlx4",
  },
  {
    name: "iluminación",
    pic: "",
    text: "Focos y tiras led para ambientar la actuación",
    url: "https://www.youtube.com/playlist?list=PLMLMh9sEXCA8T9CiZhS00ltVyjCn0Xlx4",
  },
];

export const useProjectsServices = () => [
  {
    name: "Conciertos Trio Concuerda",
    text: "Programas de todos los estilos para público joven, adulto y mayor",
    url: projectsPdf + "#page=1",
  },
  {
    name: "Conciertos a la luz de las velas",
    text: "La mejor música en un formato único de actuación: bandas sonoras, pop, música clásica, jazz y mucho más",
    url: projectsPdf + "#page=2",
  },
  {
    name: '"Un Viaje a Toda Cuerda"',
    text: "Una experiencia para que los más pequeños disfruten de la música en directo. Orientada para colegios y centros infantiles",
    url: projectsPdf + "#page=5",
  },
  {
    name: "Infinity",
    text: "Una forma diferente de hacer música en directo. Instrumentos y música electrónica juntos para conseguir una mezcla original e innovadora",
    url: projectsPdf + "#page=4",
  },
  {
    name: "Cuentos Concuerda",
    text: "Música y literatura juntas en un proyecto muy especial con músicos y narrador en directo ",
    url: projectsPdf + "#page=3",
  },
  {
    name: "Mayores: la música de siempre",
    text: "Conciertos y actividades para acercar la música a los más mayores, a través de una selección musical cercana y conocida",
    url: projectsPdf + "#page=6",
  },
];

export const useVideosPlaylists = () => [
  {
    title: "Trio Concuerda",
    videoList: "PLMLMh9sEXCA9Rj7AISCjNwDkVN4b8Qy0e&si=q04LmlURkaqi6yhy",
  },
  {
    title: "Trio Concuerda con solistas",
    videoList: "PLMLMh9sEXCA9giE2L7wKSzOTV72WZKsCz&si=05MGrub_qyHEe0GI",
  },
  {
    title: "String Band tc",
    videoList: "PLMLMh9sEXCA8SrQ9V-arUfDnle7konr0G&si=VseyP9a-ZcuhZDsR",
  },
];

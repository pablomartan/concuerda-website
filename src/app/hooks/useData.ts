import React from "react";
import ceremonia from "../../assets/img/bodas_ceremonia.png";
import religiosaPic from "../../assets/img/bodas_religiosa.png";
import civilPic from "../../assets/img/bodas_civil.png";
import coctel from "../../assets/img/bodas_coctel.png";
import banquete from "../../assets/img/bodas_banquete.png";
import fiesta from "../../assets/img/bodas_fiesta.png";
import tbvVid from "../../assets/vid/bodas_velas_vid.mp4";
import bodasReligiosaVid from "../../assets/vid/bodas_religiosa_vid.mp4";

export const useMenuLinks = () => [
  {
    section: "Inicio",
    url: "./home",
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

export const useWeddingsServices = () => [
  {
    name: "ceremonia",
    pic: ceremonia,
  },
  {
    name: "cóctel",
    pic: coctel,
  },
  {
    name: "banquete",
    pic: banquete,
  },
  {
    name: "fiesta",
    pic: fiesta,
  },
];

export const useTestimonials = () => [
  "Una experiencia inolvidable, han hecho de mí boda uno de los recuerdos más gratos. Super profesionales, nos han orientado, han sido pacientes, además son bastante flexibles, vamos! que están allí para hacer de tu momento, un gran momento.",
  "Los contratamos para el cóctel, y, la verdad, es que repetiría, sin dudas, porque le dio al momento un ambiente increíble. ¡Una suerte haber contado con ellos!",
  "Contactamos con ellos solo un mes antes de la boda, aun así se amoldaron a nosotros y fueron muy flexibles, ofreciendo todas las facilidades y ajustándose a nuestros gustos musicales. Los elegimos para el cocktail de la boda y fué un acierto, muy profesionales, todos los invitados quedaron encantados, los recomendaríamos 100%.",
];

export const useWeddingsCustomizations = () => [
  {
    title: '"canciones a la carta"',
    subtitle: "personaliza una a una todas las canciones",
    url: "#",
  },
  {
    title: "añade solistas",
    subtitle: "sopranos y cantantes de poop",
    url: "#",
  },
  {
    title: "escúchanos",
    subtitle: "versiones únicas de tu música favorita",
    url: "#",
  },
  {
    title: "tbv ceremonias",
    subtitle: "los mejores grupos",
    url: "#",
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
        url: "",
      },
      {
        title: "versiones trio concuerda",
        subtitle: "estilo único y arreglos propios de cada canción",
        url: "./videos",
      },
      {
        title: "solistas para la ceremonia",
        subtitle: "sopranos y voces líricas",
        url: "#",
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
        url: "#",
      },
      {
        title: "versiones trio concuerda",
        subtitle: "estilo único y arreglos propios de cada canción",
        url: "/videos",
      },
      {
        title: "solistas para la ceremonia",
        subtitle: "cantantes pop de diferentes estilos",
        url: "#",
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
        url: "#",
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
        title: "inifinity",
        subtitle: "marca la diferencia",
        url: "/infinity",
      },
      {
        title: "solistas para el banquete",
        subtitle: "cantantes pop de diferentes estilos",
        url: "",
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
        url: "#",
      },
      {
        title: "saxo",
        subtitle: "energía y carisma durante la fiesta",
        url: "#",
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

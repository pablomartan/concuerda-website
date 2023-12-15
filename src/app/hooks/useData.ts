import React from 'react';
import ceremonia from '../../assets/img/bodas_ceremonia.png';
import religiosa from '../../assets/img/bodas_religiosa.png';
import civil from '../../assets/img/bodas_civil.png';
import coctel from '../../assets/img/bodas_coctel.png';
import banquete from '../../assets/img/bodas_banquete.png';
import fiesta from '../../assets/img/bodas_fiesta.png';

const useData = () => {
    const links = [
        {
            section: 'Inicio',
            url: '#'
        },
        {
            section: 'Bodas',
            url: '#'
        },
        {
            section: 'Eventos',
            url: '#'
        },
        {
            section: 'Infinity',
            url: '#'
        },
        {
            section: 'TBV',
            url: '#'
        },
        {
            section: 'Proyectos',
            url: '#'
        },
        {
            section: 'Personalización',
            url: '#'
        },
        {
            section: 'Vídeos',
            url: '#'
        },
        {
            section: 'Contacto',
            url: '#'
        },
    ];

    const bodas = [
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

    const testimonials = [
        'Una experiencia inolvidable, han hecho de mí boda uno de los recuerdos más gratos. Super profesionales, nos han orientado, han sido pacientes, además son bastante flexibles, vamos! que están allí para hacer de tu momento, un gran momento.',
        'Los contratamos para el cóctel, y, la verdad, es que repetiría, sin dudas, porque le dio al momento un ambiente increíble. ¡Una suerte haber contado con ellos!',
        'Contactamos con ellos solo un mes antes de la boda, aun así se amoldaron a nosotros y fueron muy flexibles, ofreciendo todas las facilidades y ajustándose a nuestros gustos musicales. Los elegimos para el cocktail de la boda y fué un acierto, muy profesionales, todos los invitados quedaron encantados, los recomendaríamos 100%.'
    ];

    const customizations = [
        {
            title: 'repertorio personalizado',
            subtitle: 'clásico, bandas sonoras y pop',
            url: '#',
        },
        {
            title: 'versiones trio concuerda',
            subtitle: 'estilo único y arreglos propios de cada canción',
            url: '#',
        },
        {
            title: 'solistas para la ceremonia',
            subtitle: 'sopranos y voces líricas',
            url: '#',
        },
        {
            title: 'protocolo',
            subtitle: '',
            url: '#',
        },
    ];

    return { links, bodas, testimonials, customizations };
};

export default useData;

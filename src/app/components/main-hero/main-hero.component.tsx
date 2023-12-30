import React from 'react';
import './main-hero.style.scss';

export const MainHero = () => {
    return(
        <div className="MainHero">
            <div className="MainHero__bg"></div>
            <div className="MainHero__text">
                <h2 className="MainHero__hook">bodas trio concuerda</h2>
                <h3 className="MainHero__subtext">Variedad y calidad para toda la boda</h3>
            </div>
        </div>
    );
};

import React from 'react';
import { Menu } from '../menu/menu.component'
import { MenuContext } from '../../app.component';
import './header.style.scss';
import logo from '../../../assets/img/black_logo.png';
import useData from '../../hooks/useData';

export const Header = () => {
    const { links } = useData();
    return(
        <header className="Header">
            <img className="Header__logo" src={logo} alt="" />
            <MenuContext.Provider value={links}>
                <Menu />
            </MenuContext.Provider>
        </header>
    )
};

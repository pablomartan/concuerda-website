import React from 'react';
import { Menu } from '../menu/menu.component'
import './header.style.scss';
import logo from '../../../assets/img/black_logo.png';

export const Header: React.FC<{linkList: { section: string, url: string }[]}> = ({linkList}) => {
    return(
        <header className="Header">
            <img className="Header__logo" src={logo} alt="" />
            <Menu linkList={linkList} />
        </header>
    )
};

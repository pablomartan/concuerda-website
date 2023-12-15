import React, { useContext } from 'react';
import { MenuContext } from '../../app.component';
import './menu.style.scss';

const Hamburger: React.FC = () => {
    return (
        <div className='hamburger-lines'>
            <span className='line line1'></span>
            <span className='line line2'></span>
            <span className='line line3'></span>
        </div>
    )
};

const MenuLinks = () => {
    const links = useContext(MenuContext);

    return (
        <div className='menu-items'>
            {links.map(({ section, url }) => {
                return (
                    <li key={section}>
                        <a href={url}>
                            {section}
                        </a>
                    </li>
                )
            })}
        </div>
    )
};

export const Menu = () => {
    return (
        <div className='Menu'>
            <div className='Menu--wrapper'>
                <nav>
                    <Hamburger />
                    <MenuLinks />
                </nav>
            </div>
        </div>
    )
};

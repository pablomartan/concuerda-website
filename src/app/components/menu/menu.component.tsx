import React, { Dispatch, createContext, useContext, useState } from 'react';
import './menu.style.scss';
import useData from '../../hooks/useData';
import whiteLogo from '../../../assets/img/white_logo.png';

const MenuContext = createContext({
    links: [{
        section: '',
        url: ''
    }],
});

const Hamburger: React.FC<{
    on: Boolean, setOn: Dispatch<boolean>
    }> = ({ on, setOn }) => {
    return (
        <div className='hamburger-lines' onClick={() => setOn(!on)}>
            <span className={on ? 'line line1 active' : 'line line1'} />
            <span className={on ? 'line line2 active' : 'line line2'} />
            <span className={on ? 'line line3 active' : 'line line3'} />
        </div>
    )
};

const MenuLinks = () => {
    const { links } = useContext(MenuContext);

    return (
        <div className='MenuLinks'>
                <nav>
                    <ul className='menu-items'>
                        {links.map(({ section, url }) => {
                            let className = 'MenuLinks__link';
                            if (section === 'CM Agency')
                                className += ' MenuLinks__link--cmagencylink';

                            return (
                                    <li key={section}>
                                        <a
                                            href={url}
                                            className={className}>
                                            {section}
                                        </a>
                                    </li>
                                   )
                            })}
                    </ul>
                </nav>
                <img src={whiteLogo} alt='' className='menu-logo' />
        </div>
    )
};

export const Menu = () => {
    const [on, setOn] = useState(false);
    const { links } = useData();

    return (
        <MenuContext.Provider value={({
            links,
        })}>
            <div className='Menu'>
                <div className={on ? 'Menu--wrapper active' : 'Menu--wrapper'}>
                    <Hamburger on={on} setOn={setOn} />
                        <MenuLinks />
                </div>
            </div>
        </MenuContext.Provider>
    )
};

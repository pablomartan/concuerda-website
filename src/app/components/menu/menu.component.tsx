import React from 'react';
import './menu.style.scss';

export const Menu: React.FC<{linkList: { section: string, url: string }[]}> = ({linkList}) => {
    return (
        <div className='Menu'>
            <div className="Menu--wrapper">
                <nav>
                        <div className="hamburger-lines">
                          <span className="line line1"></span>
                          <span className="line line2"></span>
                          <span className="line line3"></span>
                        </div>  
                        <div className="menu-items">
                            {linkList.map(({ section, url }) => <li><a href={url}>{section}</a></li>)}
                        </div>
                </nav>
            </div>
        </div>
    )
};

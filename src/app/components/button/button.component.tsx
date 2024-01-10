import React from 'react';
import './button.style.scss';

export const Button: React.FC<{url: string}> = ({url}) => {
    return(
        <button className='Button'>
            <a href={url}>ver más</a>
        </button>
    );
};

import React from 'react';
import './button.style.scss';

export const Button: React.FC<{url: string; className?: string;}> = ({url, className}) => {
    return(
        <button className={"Button ".concat(className ?? '')}>
            <a href={url}>ver más</a>
        </button>
    );
};

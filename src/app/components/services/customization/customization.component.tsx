import React from 'react';
import { Button } from '../../button/button.component';
import { ICustomization } from '../../../../custom';
import './customization.style.scss';

export const Customization: React.FC<ICustomization> = ({title, subtitle, url}) => {
    return(
        <div className='Customization'>
            <h4 className="Customization__title">{title}</h4>
            <h5 className="Customization__subtitle">{subtitle}</h5>
            <Button url={url} />
        </div>
    )
};

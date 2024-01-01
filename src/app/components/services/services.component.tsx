import React from 'react';
import { Service } from './single-service/service.component';
import { IService } from '../../../custom';
import './services.style.scss';

export const Services: React.FC<{ serviceList: IService[] }> = ({ serviceList }) => {
    return (
        <div className="Services">
            {serviceList.map(service => {
                return <Service key={service.name} {...service} />
            })}
        </div>
    );
};

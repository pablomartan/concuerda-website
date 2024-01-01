import React from 'react';
import { ICustomization, IService } from '../../../../custom';
import { Customization } from '../customization/customization.component';
import useData from '../../../hooks/useData';
import './service.style.scss';

export const Service: React.FC<IService> = ({ name, pic }) => {
    const {
        customizations,
        religiosaPic: religiosa,
        civilPic: civil
    } = useData();

    return (
        <div className="Service">
            <img src={pic} className="Service__banner" alt="" />
            <h2 className="Service__title">{name}</h2>
            {name === 'ceremonia' && (
                <div className="Ceremonia">
                    <div className="Ceremonia__options">
                        <h3 className="Ceremonia__title">
                            Música para la ceremonia
                        </h3>
                        {customizations.map((cust: ICustomization) => {
                            return <Customization key={cust.url} {...cust} />
                        })}
                    </div>
                    <div className="Ceremonia__types">
                        <a className="Ceremonia__subtype" href="./">
                            <div className="Ceremonia__subtype--wrapper">
                                <img
                                    className="Ceremonia__subtype--pic"
                                    src={religiosa}
                                    alt="" />
                                <h4 className="Ceremonia__subtype--title">
                                    religiosa
                                </h4>
                            </div>
                        </a>
                        <a className="Ceremonia__subtype" href="./">
                            <div className="Ceremonia__subtype--wrapper">
                                <img
                                    className="Ceremonia__subtype--pic"
                                    src={civil}
                                    alt="" />
                                <h4 className="Ceremonia__subtype--title">
                                    civil
                                </h4>
                            </div>
                        </a>
                    </div>
                </div>
            )}
        </div>
    )
};

import React from 'react';
import useData from '../../hooks/useData';
import logo from '../../../assets/img/white_logo.png';
import insta from '../../../assets/img/insta.png';
import yt from '../../../assets/img/youtube.png';
import './footer.style.scss';

type TLink = {
    text: string;
    url: string;
}

const FooterLink: React.FC<TLink> = ({ text, url }) => {
    const className = 'Footer__nav-link';

    return (
        <a key={text} href={url} className={className}>
            <li>
                {text}
            </li>
        </a>
    )
};

const SocialLink: React.FC<TLink> = ({ text, url }) => {
    return (
        <a key={text} href={url} className='Footer__social-link'>
            <li>
                <img src={text === 'instagram' ? insta : yt} />
            </li>
        </a>
    )
};

export const Footer: React.FC = () => {
    const {
        footerLinks: links,
        phone: contactPhone,
        email: contactEmail,
        } = useData();
    return (
        <footer className='Footer'>
            <nav className='Footer__nav'>
                <ul className='Footer__nav-ul'>
                    {links.slice(0, 3).map((link) => <FooterLink {...link} />)}
                </ul>
                <ul className='Footer__nav-ul'>
                    {links.slice(3, 6).map((link) => <FooterLink {...link} />)}
                </ul>
                <div className='Footer__social'>
                    <ul className='Footer__social-ul'>
                    {links.slice(6).map((link) => <SocialLink {...link} />)}
                    </ul>
                </div >
            </nav>
            {/* CONTACTO */}
            <div className='Footer__contact'>
                <form className='Footer__contact-form'>
                    <label htmlFor='message'>Cuéntanos tu idea</label>
                    <input type='text' name='message' placeholder='Escribe tu mensaje' />
                    <input type='submit' value='Enviar' />
                </form>
                <div className='Footer__contact-data'>
                    <div className='Footer__contact__phone'>
                        <i className='' />
                        <p>{contactPhone}</p>
                    </div>
                    <div className='Footer__contact__email'>
                        <i className='' />
                        <p>{contactEmail}</p>
                    </div>
                </div>
            </div>
            {/* LOGO */}
            <img src={logo} alt='' className='Footer__logo' />
        </footer>
    );
};

import React from "react";
import smallLogo from "../../../assets/img/footer_logo_small.png";
import bigLogo from "../../../assets/img/footer_logo_big.png";
import insta from "../../../assets/img/insta.png";
import yt from "../../../assets/img/youtube.png";
import { useContactData, useFooterLinks } from "../../hooks/useData";
import CustomLink from "../link/link.component";

import "./footer.style.scss";

type TLink = {
  text: string;
  url: string;
};

const FooterLink: React.FC<TLink> = ({ text, url }) => {
  const className = "Footer__nav-link";

  return (
    <CustomLink key={text} url={url} className={className}>
      <li>{text}</li>
    </CustomLink>
  );
};

const SocialLink: React.FC<TLink> = ({ text, url }) => {
  const className = "Footer__social-link";

  return (
    <CustomLink key={text} url={url} className={className}>
      <img src={text === "instagram" ? insta : yt} />
    </CustomLink>
  );
};

export const Footer: React.FC = () => {
  const links = useFooterLinks();
  const { phone: contactPhone, email: contactEmail } = useContactData();
  return (
    <footer className="Footer">
      <nav className="Footer__nav">
        <ul className="Footer__nav-ul">
          {links.slice(0, 3).map((link) => (
            <FooterLink {...link} />
          ))}
        </ul>
        <ul className="Footer__nav-ul">
          {links.slice(3, 6).map((link) => (
            <FooterLink {...link} />
          ))}
        </ul>
        <div className="Footer__social">
          <ul className="Footer__social-ul">
            {links.slice(6).map((link) => (
              <SocialLink {...link} />
            ))}
          </ul>
        </div>
      </nav>
      {/* CONTACTO */}
      <div className="Footer__contact">
        <form className="Footer__contact-form">
          <label htmlFor="message">Cuéntanos tu idea</label>
          <input type="text" name="message" placeholder="Escribe tu mensaje" />
          <input type="submit" value="Enviar" />
        </form>
        <div className="Footer__contact-data">
          <div className="Footer__contact__phone">
            <i className="" />
            <p>{contactPhone}</p>
          </div>
          <div className="Footer__contact__email">
            <i className="" />
            <p>{contactEmail}</p>
          </div>
        </div>
      </div>
      {/* LOGO */}
      <img
        src={smallLogo}
        alt=""
        className="Footer__logo Footer__logo--small"
      />
      <img src={bigLogo} alt="" className="Footer__logo Footer__logo--big" />
    </footer>
  );
};

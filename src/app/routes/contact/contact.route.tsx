import { FC, useEffect } from "react";
import { SubmitHandler, UseFormRegisterReturn, useForm } from "react-hook-form";
import { Header } from "../../components/header/header.component";
import { Footer } from "../../components/footer/footer.component";
import { Button } from "../../components/button/button.component";

import emailjs from "@emailjs/browser";

import contactBanner from "../../../assets/vid/contact_banner.mp4";
import faqPdf from "../../../assets/pdf/faq.pdf";

import { useNavigate } from "react-router";
import AnimatedTitle from "../../components/animated-title/animated-title.component";
import AppearingComponent from "../../components/appearing-component/appearing.component";

import "./contact.style.scss";

type ContactFormInput = {
  name: string;
  email: string;
  phone: string;
  date: Date;
  location: string;
  details: string;
  submit: ReturnType<typeof Button>;
};

export const EMAIL_SERVICE = "service_cy84y6d";
export const EMAIL_TEMPLATE = "template_726fkoy";
export const EMAIL_PUBLIC_ID = "w1kEM1Mri5d_SVzQZ";

const Input = ({
  type,
  inputProps,
}: {
  inputProps: UseFormRegisterReturn;
  type: string;
}) => {
  return <input type={type} {...inputProps} />;
};

const ContactForm = () => {
  const defaultValues = {
    name: "Tu nombre",
    email: "correo@mail.com",
    phone: "+00 000 000 000",
    date: new Date(),
    location: "Ciudad/Ubicación exacta",
    submit: "Enviar",
  };

  const { register, handleSubmit } = useForm<ContactFormInput>({
    defaultValues,
    mode: "onBlur",
  });

  const sendEmail: SubmitHandler<ContactFormInput> = (data) => {
    emailjs
      .send(EMAIL_SERVICE, EMAIL_TEMPLATE, data, {
        publicKey: EMAIL_PUBLIC_ID,
      })
      .then((data) => console.log({ data }))
      .catch((error) => console.log({ error }));
  };

  return (
    <div className="ContactForm">
      <video src={contactBanner} muted autoPlay loop />
      <div className="ContactForm__content">
        <AnimatedTitle
          className="ContactForm__title"
          text="¡Contacta con nosotros!"
        />
        <AppearingComponent direction="down">
          <form onSubmit={handleSubmit(sendEmail)}>
            <div>
              <label htmlFor="name">Nombre</label>
              <Input
                type="text"
                inputProps={register("name", {
                  required: true,
                })}
              />
            </div>
            <div className="name-input-separator" />
            <div>
              <label htmlFor="email">Correo</label>
              <Input
                type="email"
                inputProps={register("email", {
                  required: true,
                })}
              />
            </div>
            <div>
              <label htmlFor="phone">Teléfono</label>
              <Input
                type="text"
                inputProps={register("phone", {
                  required: true,
                })}
              />
            </div>
            <div>
              <label htmlFor="date">Fecha</label>
              <Input
                type="date"
                inputProps={register("date", {
                  required: true,
                })}
              />
            </div>
            <div>
              <label htmlFor="location">Lugar</label>
              <Input
                type="text"
                inputProps={register("location", {
                  required: true,
                })}
              />
            </div>
            <div>
              <label htmlFor="details">
                Detalles del evento <span>(opcional)</span>
              </label>
              <textarea {...register("details")} rows={4} cols={50} />
            </div>
            <Input type="submit" inputProps={register("submit")} />
          </form>
        </AppearingComponent>
        <AppearingComponent direction="down" rootMargin="0px">
          <a
            className="ContactForm__content__faq-link"
            href={faqPdf}
            target="_blank"
          >
            10 dudas más frecuentes
          </a>
        </AppearingComponent>
      </div>
    </div>
  );
};

const Contact: FC = () => {
  const navigate = useNavigate();

  useEffect(() => navigate("/contact"), []);

  return (
    <div className="Contact">
      <Header />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contact;

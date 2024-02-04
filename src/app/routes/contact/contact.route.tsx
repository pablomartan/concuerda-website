import React, { FC, useEffect } from "react";
import { UseFormRegisterReturn, useForm } from "react-hook-form";
import { Header } from "../../components/header/header.component";
import { Footer } from "../../components/footer/footer.component";
import { Button } from "../../components/button/button.component";

import contactBanner from "../../../assets/vid/contact_banner.mp4";
import faqPdf from "../../../assets/pdf/faq.pdf";

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

  const { register, getValues, setValue, formState, clearErrors } =
    useForm<ContactFormInput>({ defaultValues, mode: "onBlur" });

  return (
    <div className="ContactForm">
      <video src={contactBanner} muted autoPlay loop />
      <div className="ContactForm__content">
        <h2 className="ContactForm__title">¡Contacta con nosotros!</h2>
        <form>
          <label htmlFor="name">Nombre</label>
          <Input
            type="text"
            inputProps={register("name", {
              required: true,
            })}
          />
          <label htmlFor="email">Correo</label>
          <Input
            type="email"
            inputProps={register("email", {
              required: true,
            })}
          />
          <label htmlFor="phone">Teléfono</label>
          <Input
            type="text"
            inputProps={register("phone", {
              required: true,
            })}
          />
          <label htmlFor="date">Fecha</label>
          <Input
            type="date"
            inputProps={register("date", {
              required: true,
            })}
          />
          <label htmlFor="location">Lugar</label>
          <Input
            type="text"
            inputProps={register("location", {
              required: true,
            })}
          />
          <label htmlFor="details">
            Detalles del evento <span>(opcional)</span>
          </label>
          <textarea {...register("details")} rows={4} cols={50} />
          <Input type="submit" inputProps={register("submit")} />
        </form>
        <a className="ContactForm__content__faq-link" href={faqPdf}>
          10 dudas más frecuentes
        </a>
      </div>
    </div>
  );
};

const Contact: FC = () => {
  return (
    <div className="Contact">
      <Header />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contact;

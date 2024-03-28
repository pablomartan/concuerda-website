import { FC, useEffect, useState } from "react";
import { SubmitHandler, UseFormRegisterReturn, useForm } from "react-hook-form";
import { Header } from "../../components/header/header.component";
import { Footer } from "../../components/footer/footer.component";
import { Button } from "../../components/button/button.component";

import emailjs from "@emailjs/browser";

import contactBanner from "../../../assets/vid/contact_banner.mp4";
import faqPdf from "../../../assets/pdf/faq.pdf";

import { useLocation } from "react-router";
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

const sendEmail: SubmitHandler<ContactFormInput> = (data) => {
  emailjs
    .send(EMAIL_SERVICE, EMAIL_TEMPLATE, data, {
      publicKey: EMAIL_PUBLIC_ID,
    })
    .then((data) => console.log({ data }))
    .catch((error) => console.log({ error }));
};

const ContactForm = ({ details }: { details?: string }) => {
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

  return (
    <div className="ContactForm">
      <video src={contactBanner} muted autoPlay loop playsInline={true} />
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
              <textarea
                {...register("details")}
                rows={4}
                cols={50}
                defaultValue={details}
              />
            </div>
            <input
              type="submit"
              className="Button"
              {...register("submit")}
              value="Enviar"
            />
          </form>
        </AppearingComponent>
        <AppearingComponent direction="down">
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
  const { state } = useLocation();
  const [details, setDetails] = useState<string | undefined>();

  useEffect(() => {
    if (state) {
      setDetails(state.details);
    }
  }, []);

  return (
    <div className="Contact">
      <Header />
      <ContactForm details={details} />
      <Footer />
    </div>
  );
};

export default Contact;

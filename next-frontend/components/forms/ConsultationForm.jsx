import Image from "next/image";
import closeIcon from "public/images/x-cerrar.svg";
import { useState } from "react";

const styledLogo = {
  background: "transparent",
  filter:
    "invert(90%) sepia(74%) saturate(3294%) hue-rotate(319deg)brightness(95%) contrast(93%)",
  opacity: 1,
  alignSelf: "flex-end",
  margin: "1em 1em 0.3em 0",
  fontSize: "1.5em",
};
const ConsultationForm = ({ handleCloseForm, input, handleInputChange }) => {
  return (
    <>
      <div className="fixed top-0 bottom-0 right-0 left-0 w-full h-full z-[2000] flex justify-center items-center bg-opacity-20 bg-black py-8 md:py-8 px-5 md:pb-0">
        <div className="bg-white flex flex-col justify-center items-start w-full md:max-h-[600px] lg:w-3/4 lg:h-[600px] rounded-2xl m-4">
          <button
            className="flex justify-start self-end right-0 top-0 relative"
            onClick={handleCloseForm}
          >
            <Image
              src={closeIcon}
              alt="Logo cerrar detalles"
              priority={true}
              style={styledLogo}
              width={40}
              height={40}
            />
          </button>

          <div className="flex flex-col w-full h-auto justify-start items-center ">
            <h3 className="text-darkBlue px-2 text-2xl lg:text-3xl font-semibold text-ellipsis text-center">
              ¿Cómo podemos ayudarte?
            </h3>
            <p className="p-3 font-semibold text-ellipsis text-center text-base">
              Envianos tu consulta y nos pondremos en contacto a la brevedad.
            </p>
          </div>
          <form
            className="flex flex-col justify-start items-center w-full h-3/4 pt-6 px-10 lg:px-20"
            action="post"
          >
            <div className="w-full flex flex-col md:flex-row justify-evenly items-center">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Nombre y Apellido"
                value={input.name}
                onChange={handleInputChange}
                className="flex w-full h-[3.3rem] py-2 px-4 border border-solid border-grey rounded-xl text-lg md:mr-4 md:w-2/4"
                required
                disabled={false}
              />
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="Teléfono"
                className="flex justify-between w-full h-[3.3rem] py-2 px-4 mt-4 border border-solid border-grey rounded-xl text-lg md:w-2/4 md:ml-4 md:mt-0"
                value={input.phone}
                onChange={handleInputChange}
                required
                disabled={false}
              />
            </div>
            <div className="flex flex-col w-full justify-start items-start h-3/4 mb-2">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="my-4 flex w-full py-3 px-4 border border-solid border-grey rounded-xl text-lg"
                required
                disabled={false}
              />
              <input
                type="text"
                name="consultation"
                id="consultation"
                value={input.consultation}
                onChange={handleInputChange}
                placeholder="Escribí tu consulta aqui"
                className="flex w-full h-3/4 py-4 px-4 border border-solid border-grey rounded-xl text-lg placeholder:text-start "
                required
                disabled={false}
              />
            </div>
            <button
              className="bg-yellow rounded-2xl m-4 py-1 px-8 font-semibold uppercase self-center md:self-end"
              onClick={handleCloseForm}
            >
              Enviar consulta
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ConsultationForm;

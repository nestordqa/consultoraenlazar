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
const ConsultationForm = ({ handleCloseForm }) => {
  let [input, setInput] = useState({
    name: "",
    phone: "",
    email: "",
    consultation: "",
  });
  let [error, setError] = useState({
    name: "",
    phone: "",
    email: "",
    consultation: "",
  });

  const handleInputChange = (e) => {
    e.preventDefault();
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <div className="fixed z-[500] inset-0 font-Noah">
        <div className="flex items-center justify-center min-h-screen pt-5 px-4 pb-5 md:pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div className="absolute inset-0 bg-black opacity-40"></div>
          </div>

          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <div className="fixed top-0 bottom-0 right-0 left-0 flex justify-center items-center bg-opacity-20 bg-black py-8 md:py-12 px-5">
            <div className="bg-white flex flex-col justify-center items-center w-full md:w-2/4 rounded-2xl m-2">
              <div className="flex flex-col justify-center items-center w-full">
                <button
                  className="flex justify-start self-end "
                  onClick={handleCloseForm}
                >
                  <Image
                    src={closeIcon}
                    alt="Logo cerrar detalles"
                    priority={true}
                    style={styledLogo}
                    width={30}
                    height={30}
                  />
                </button>
                <h3 className="text-darkBlue px-2 text-2xl lg:text-3xl font-semibold text-ellipsis text-center">
                  ¿Cómo podemos ayudarte?
                </h3>
                <p className="p-3 font-semibold text-ellipsis text-center text-base">
                  Envianos tu consulta y nos pondremos en contacto a la
                  brevedad.
                </p>
              </div>
              <form
                className="flex flex-col justify-start items-center w-full h-fit pb-2 px-10 md:pt-6 lg:px-20"
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
                  />
                </div>
                <div className="flex flex-col w-full justify-start items-start md:mb-2 md:h-2/4">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    className="flex my-4 w-full py-3 px-4 border border-solid border-grey rounded-xl text-lg"
                    required
                  />
                  <textarea
                    name="consultation"
                    id="consultation"
                    value={input.consultation}
                    onChange={handleInputChange}
                    placeholder="Escribí tu consulta aqui"
                    className="flex w-full max-h-min pt-2 px-4 border border-solid border-grey rounded-xl text-lg resize-none mb-3 md:h-3/4"
                    rows={8}
                    required
                  />
                </div>
                <button
                  className="bg-yellow rounded-2xl py-1 px-8 font-semibold uppercase self-center md:self-end"
                  onClick={handleCloseForm}
                >
                  Enviar consulta
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConsultationForm;

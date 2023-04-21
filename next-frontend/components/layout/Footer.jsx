import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTelegramPlane,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";
import Image from "next/image";
import logo from "public/images/isotipo-enlazar-blanco.png";
import { useContext, useState } from "react";
import PrivacyPolicy from "../privacyPolitics/PrivacyPolicy";
import AuthContext from "@/public/AuthContext";

export const Footer = () => {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState("paper");
  const { currentPath, setCurrentPath } = useContext(AuthContext);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const gradient = {
    background: "linear-gradient(180deg, #043959 0%, #34668a 100%) ",
  };

  const icon = {
    fontSize: "28px",
    color: "#ffff",
    marginLeft: "8px",
    marginRigth: "8px",
    filter: "brightness(0) invert(1)",
    transition: "ease-in-out 0.2s",
  };

  return (
    <>
      {open ? (
        <PrivacyPolicy handleClose={handleClose} scroll={scroll} open={open} />
      ) : null}
      <footer
        style={gradient}
        className="flex flex-col items-center justify-center w-full "
      >
        <div className="h-max flex justify-center items-center flex-col w-full px-4 py-14 xsm:max-sm:pb-0 xsm:max-sm:px-0">
          <div className="flex flex-row xsm:max-xl:flex-col justify-center items-center xsm:max-sm:w-full">
            <div className="flex flex-row justify-center items-center ">
              <div className="pt-3 px-0 pb-4 xsm:max-md:hidden ">
                <Link href="/" onClick={() => setCurrentPath("/")}>
                  <Image
                    className="min-w-[60px]"
                    width={60}
                    height={"auto"}
                    src={logo}
                    alt="Logo Consultora Enlazar"
                  />
                </Link>
              </div>
              <div className="flex flex-row justify-center items-center m-0 list-none w-full md:max-sm:pt-12 xsm:max-xl:flex-col">
                <ul className="flex flex-row border-r-0 justify-center items-center self-center no-underline text-white list-none xsm:max-md:flex-col py-2 px-2 xsm:max-md:p-0 ">
                  <li className="md:border-r md:border-solid md:border-r-white px-2 py-0 xsm:max-md:pb-3">
                    <Link
                      href="/team"
                      onClick={() => setCurrentPath("/team")}
                      className="hover:font-bold"
                    >
                      Equipo
                    </Link>
                  </li>
                  <li className="md:border-r md:border-solid md:border-r-white px-2 py-0 xsm:max-md:pb-3">
                    <Link
                      href="/services"
                      onClick={() => setCurrentPath("/services")}
                      className="hover:font-bold"
                    >
                      Servicios
                    </Link>
                  </li>
                  <li className="md:border-r md:border-solid md:border-r-white pl-2 pr-2 xsm:max-md:pb-3">
                    <Link
                      href="/courses"
                      onClick={() => setCurrentPath("/courses")}
                      className="hover:font-bold whitespace-nowrap"
                    >
                      Cursos & Capacitaciones
                    </Link>
                  </li>
                  <li className="md:border-r md:border-solid md:border-r-white px-2 py-0 xsm:max-md:pb-3">
                    <Link
                      href="/community"
                      onClick={() => setCurrentPath("/community")}
                      className="hover:font-bold"
                    >
                      Comunidad
                    </Link>
                  </li>
                  <li className="md:border-r md:border-solid md:border-r-white px-2 py-0 xsm:max-md:pb-3">
                    <Link
                      href="/blog"
                      onClick={() => setCurrentPath("/blog")}
                      className="hover:font-bold"
                    >
                      Blog
                    </Link>
                  </li>
                  <li className="md:border-r md:border-solid md:border-r-white px-2 xsm:max-md:pb-3">
                    <Link
                      href="/#contact"
                      onClick={() => setCurrentPath("/#contact")}
                      className="hover:font-bold"
                    >
                      Contacto
                    </Link>
                  </li>
                  <li className=" px-2 py-0 xsm:max-md:pb-3">
                    <button
                      onClick={handleClickOpen}
                      className="hover:font-bold whitespace-nowrap"
                    >
                      Politica de Privacidad
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center items-center m-0 xsm:max-sm:w-full">
            <div className="flex flex-row justify-center items-center list-none text-white mb-0 ">
              <ul className="flex flex-row justify-center items-center no-underline text-white py-2 pr-0 xsm:max-sm:py-2 xsm:max-sm:px-0 ">
                <li className="hover:scale-y-105 hover:scale-x-105 py-0 px-[0.6rem]">
                  <Link
                    href="https://www.instagram.com/enlazar.ok/"
                    target="_blank"
                  >
                    <AiFillInstagram style={icon} />
                  </Link>
                </li>
                <li className="hover:scale-y-105 hover:scale-x-105 py-0 px-[0.6rem]">
                  <Link
                    href="https://t.me/joinchat/e8dtvJ5XB2k1MGIx"
                    target="_blank"
                  >
                    <FaTelegramPlane style={icon} />
                  </Link>
                </li>
                <li className="hover:scale-y-105 hover:scale-x-105 py-0 px-[0.6rem]">
                  <Link
                    href="https://www.linkedin.com/company/enlazar"
                    target="_blank"
                  >
                    <FaLinkedinIn style={icon} />
                  </Link>
                </li>
                <li className="hover:scale-y-105 hover:scale-x-105 py-0 px-[0.6rem]">
                  <Link
                    href="https://www.facebook.com/enlazar.ok/"
                    target="_blank"
                  >
                    <FaFacebookF style={icon} />
                  </Link>
                </li>
                <li className="hover:scale-y-105 hover:scale-x-105 py-0 px-[0.6rem]">
                  <Link href="https://twitter.com/Enlazar_ok" target="_blank">
                    <FaTwitter style={icon} />
                  </Link>
                </li>
                <li className="hover:scale-y-105 hover:scale-x-105 py-0 px-[0.6rem]">
                  <Link
                    href="https://www.tiktok.com/@enlazar.ok"
                    target="_blank"
                  >
                    <FaTiktok style={icon} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-3 px-0 pb-4 hidden xsm:max-md:block xsm:max-md:pt-4 ">
            <Link href="/" onClick={() => setCurrentPath("/")}>
              <Image
                width={60}
                height={"auto"}
                src={logo}
                alt="Logo Consultora Enlazar"
              />
            </Link>
          </div>
        </div>
        <address className="mb-0 text-center text-white font-light not-italic pb-4 xsm:max-sm:pb-14">
          Buenos Aires, Argentina
        </address>
      </footer>
    </>
  );
};

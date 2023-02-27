import React from 'react';
import Image from "next/image";

export const CompaniesThatTrust = () => {
  return (
    <div className="w-full h-auto ">
      <h3 className="pt-16 px-4 md:px-8 text-2xl md:text-3xl font-bold text-center text-ellipsis opacity-90">
        Empresas que confían en nosotros
      </h3>

      <div className="flex flex-col p-5 md:flex-row flex-wrap justify-evenly items-center mb-8 w-full continuous">
        <Image
          className=" shadow-2xl outline-offset-8 m-2 "
          src="/images/henry.png"
          width={80}
          height={40}
          alt="henry"
        ></Image>
        <Image
          className="shadow-2xl outline-offset-8 m-2"
          src="/images/empujar.png"
          width={80}
          height={40}
          alt="empujar"
        ></Image>
        <Image
          className="shadow-2xl outline-offset-8 m-2 "
          src="/images/coderhouse.jpg"
          width={100}
          height={40}
          alt="coderhouse"
        ></Image>
        <Image
          className="shadow-2xl outline-offset-8 m-2 "
          src="/images/workn.png"
          width={80}
          height={80}
          alt="workn"
        ></Image>

        <Image
          className="shadow-2xl outline-offset-8 m-2 "
          src="/images/logoUBA-beneficio.png"
          width={50}
          height={50}
          alt="UBA"
        ></Image>
        <Image
          className="shadow-2xl outline-offset-8 m-2 "
          src="/images/mudafy.webp"
          width={50}
          height={50}
          alt="mudafy"
        ></Image>
        <Image
          className="shadow-2xl outline-offset-8 m-2 "
          src="/images/payhouslogo-beneficio.jpg"
          width={60}
          height={60}
          alt="payhous"
        ></Image>
        <Image
          className="shadow-2xl outline-offset-8 m-2 "
          src="/images/duhire.png"
          width={50}
          height={50}
          alt="duhire"
        ></Image>
      </div>
    </div>
  );
};

import React from 'react';
import Image from "next/image";
import "tailwindcss/tailwind.css";

export const Feedback = () => {
  return (
    <div className="w-full h-auto  bg-blue  text-white max-w-lg md:max-w-full mx-auto ">
    <h2 className="pt-10 px-6 md:px-8 text-2xl lg:text-3xl font-bold text-center text-ellipsis opacity-90 text-yellow sm:text-sm">
      Te acompañamos siempre 

    </h2>
    <h2 className=" p-4 md:p-8 text-2xl lg:text-3xl font-bold text-center text-ellipsis opacity-90 text-yellow">
      ¡Garantizamos tu aptendizaje!</h2> 
      
    <div className="flex justify-between items-center bg-blue p-12 text  flex-wrap animate-pulse">
    <div className="flex flex-col items-center justify-center text-center  m-4">
    <div className="w-60 h-60 rounded-full border-2 border-yellow flex flex-col items-center justify-center relative">
    <Image alt="uno" src="/images/logos-empresas/registrarse.png" width={50} height={50} quality={100} style={{position: "absolute", top: "-25px"}} />
    <h3 className="text-5xl font-bold m-0 text-yellow">+800</h3>
    <p className="text-lg m-0 text-center">
      Inscriptos a nuestros<br/>cursos
    </p>
    </div>
    </div>
    <div className="flex flex-col items-center justify-center text-center m-4">
    <div className="w-60 h-60 rounded-full border-2 border-yellow flex flex-col items-center justify-center relative">
    <Image alt="uno" src="/images/logos-empresas/cinco.png" width={50} height={50} quality={100} style={{position: "absolute", top: "-25px"}} />
    <h3 className="text-5xl font-bold m-0 text-yellow">+900</h3>
    <p className="text-lg m-0"><br/>Personas que confiaron en nuestros servicios</p>
    </div>
    </div>

    <div className="flex flex-col items-center justify-center text-center m-4">
    <div className="w-60 h-60 rounded-full border-2 border-yellow flex flex-col items-center justify-center relative">
    <Image alt="uno" src="/images/logos-empresas/cero.png" width={50} height={50} quality={100} style={{position: "absolute", top: "-25px"}} />
    <h3 className="text-5xl font-bold m-0 text-yellow">+900</h3>
    <p className="text-lg m-0"><br/>Personas en nuestra comunidad</p>
    </div>
    </div>

    <div className="flex flex-col items-center justify-center text-center m-4">
    <div className="w-60 h-60 rounded-full border-2 border-yellow flex flex-col items-center justify-center relative">
    <Image alt="uno" src="/images/logos-empresas/rud.png" width={50} height={50} quality={100} style={{position: "absolute", top: "-25px"}} />
    <h3 className="text-5xl font-bold m-0 text-yellow" style={{lineHeight: '1.2'}}>+70.000</h3> 
    <p className="text-lg m-0"><br/>Seguidores<br/>en nuestras redes</p>
    </div>
    </div>
      
    </div> 
 
    </div>
    

    
  );
};

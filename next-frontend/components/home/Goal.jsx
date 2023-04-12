import React from "react";
import Image from "next/image";
import Link from "next/link";


export const Goal = () => {
  return (

    <div class="goal-container flex flex-wrap w-full h-auto ">
         <div class="goal-image w-full lg:w-1/2 mb-10 lg:mb-0  "> 
            <Image     
           class='w-full h-full '
           alt= " image"
           src="/images/nuestro-objetivo.webp"
           width={500}
           height={500}
           quality={100}
            />
          </div>
          <div class="goal-content w-full lg:w-1/2 pl-5 flex flex-col justify-center">
          <h2 class="text-2xl lg:text-3xl font-bold text-center text-ellipsis text-gray-800 mb-8">Somos Enlazar</h2>
       <p class="text-gray-800 text-base lg:text-lg mb-8">
            Nuestra misión: Revolucionar el área de RRHH. Creamos y brindamos soluciones de desarrollo para personas, equipos y organizaciones en materia de formación profesional y consultoría, basadas en la experiencia, la innovación y las buenas prácticas, apoyándonos en el valor humano y las nuevas tecnologías.
              </p>
              <div class="goal-button flex justify-center">
              <Link href="/team">
                <button class="rounded-full  bg-yellow p-1 px-6 font-semibold">
                  Conoce nuestro Equipo
                </button>
              </Link>
            </div>
          </div>
        </div>
      
  );
};

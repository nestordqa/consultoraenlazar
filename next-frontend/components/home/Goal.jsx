import React from 'react';
import Image from "next/image";
import Link from "next/link";
import styles from "./Companies.module.css";

export const Goal = () => {
  return (
    <div class="bg-darkBlue w-full p-1">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 p-2 ">
        <div class="mt-6 space-y-12 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0"> 
          <div class="group relative">
          <h2 className="pt-10 pb-10 px-4 sm:px-8 text-1xl lg:text-2xl font-bold text-center text-ellipsis opacity-90 text-white">
        Somos Enlazar  
          </h2>  
       <p class="text-center text-ellipsis text-white sm:w-4/5 md:w-3/4 lg:w-full mx-auto">
            Nuestra misión: Revolucionar el área de RRHH. Creamos y brindamos soluciones de desarrollo para personas, equipos y organizaciones en materia de formación profesional y consultoría, basadas en la experiencia, la innovación y las buenas prácticas, apoyándonos en el valor humano y las nuevas tecnologías.
              </p>
              <div className="flex justify-center mt-6 mr-4 pb-10 ">
              <Link href="/team">
                        <button className="rounded-full  bg-yellow p-1 px-6 font-semibold">Conoce nuestro Equipo</button>
               </Link>        
               </div>
          </div>
          <div class="group relative">
            <div class="relative w-full overflow-hidden rounded-lg group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1 flex justify-center">
            <Image     
           className='rounded-full'
           alt= " image"
           src="/images/nuestro-objetivo.webp"
           width={300}
           height={300}
            />
            </div>
          </div>
        </div>
      </div>
   
  </div>
         
   
  );
};

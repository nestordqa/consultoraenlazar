import React from 'react';
import Image from "next/image";
import Link from "next/link";
import styles from "./Companies.module.css";

export const Goal = () => {
  return (
    <div class="bg-darkBlue w-full ">
    <div class="mr-auto max-w-7xl pr-4 sm:pr-2 lg:pr-2  ">
        <div class=" space-y-12 lg:grid lg:grid-cols-2 lg:gap-x-6 "> 
        <div class="group relative">
            <div class= {styles.image}>
            <Image     
           className='w-full h-full '
           alt= " image"
           src="/images/nuestro-objetivo.webp"
           width={300}
           height={300}
            />
            </div>
          </div>
          <div class="group relative pl-10">
          <h2 className=" pb-10 px-4 sm:px-8 text-1xl lg:text-2xl font-bold text-center text-ellipsis opacity-90 text-white flex justify-end">
        Somos Enlazar  
          </h2>  
       <p class=" text-right  text-ellipsis text-white sm:w-4/5 md:w-3/4 lg:w-full mx-auto flex justify-end">
            Nuestra misión: Revolucionar el área de RRHH. Creamos y brindamos soluciones de desarrollo para personas, equipos y organizaciones en materia de formación profesional y consultoría, basadas en la experiencia, la innovación y las buenas prácticas, apoyándonos en el valor humano y las nuevas tecnologías.
              </p>
              <div className="flex justify-end mt-6    pt-10 ">
              <Link href="/team">
                        <button className="rounded-full  bg-yellow p-1 px-6 font-semibold">Conoce nuestro Equipo</button>
               </Link>        
               </div>
          </div>
          
        </div>
      </div>
   
  </div>
         
   
  );
};

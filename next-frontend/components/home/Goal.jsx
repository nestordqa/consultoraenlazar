import React from 'react';
import Image from "next/image";
import Link from "next/link";
import styles from "./Companies.module.css";

export const Goal = () => {
  return (
    <div class="goal-container  py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center flex-wrap ">
        
        <div class="goal-image w-full lg:w-1/2 mb-10 lg:mb-0">
            <div class= {styles.image}>
            <Image     
           className='w-full h-full '
           alt= " image"
           src="/images/nuestro-objetivo.webp"
           width={200}
           height={200}
            />
            </div>
          </div>
          <div class="goal-content w-full lg:w-1/2 pl-5 lg:pl-24 flex flex-col justify-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-center text-ellipsis text-gray-800 mb-8">Somos Enlazar</h2>
       <p class="text-gray-800 text-base lg:text-lg mb-8">
            Nuestra misión: Revolucionar el área de RRHH. Creamos y brindamos soluciones de desarrollo para personas, equipos y organizaciones en materia de formación profesional y consultoría, basadas en la experiencia, la innovación y las buenas prácticas, apoyándonos en el valor humano y las nuevas tecnologías.
              </p>
              <div className="goal-button flex justify-center">
              <Link href="/team">
                        <button className="rounded-full  bg-yellow p-1 px-6 font-semibold">Conoce nuestro Equipo</button>
               </Link>        
               </div>
          </div>
          
        </div>
      </div>
   
 
         
   
  );
};

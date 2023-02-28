import { Layout } from "@/components/Layout";
import logoIndividuos from 'public/images/card-individuos-grupos.webp'
import logoOrg from 'public/images/card-empresas.webp'
import Image from "next/image";
import { getClient } from "@/lib/sanity.server";
import groq from "groq";
import ServicesCard from "@/components/card/ServicesCard";



const Services = ({ services }) => {
  const organizaciones = services.filter(item => item.categories[0].categoryName.toLowerCase() === "organizaciones")
  const individuos = services.filter(item => item.categories[0].categoryName.toLowerCase() === "individuos")

  return (
    <>
      <Layout
        title={"Servicios"}
        content={"Servicios de Consultora Enlazar para empresas e individuos."}
      >

        <div className="w-full">
          <div className=" bg-[url('../public/images/portada-servicios.webp')]  h-[65vh] flex flex-col justify-center items-center bg-center bg-cover border-4">

            <p className=" text-white font-semibold pb-2 px-4 text-md text-center mb-0 drop-shadow-[(4px 4px 10px rgba(0, 0, 0, 0.25))] sm:text-3xl">
              Nuestros servicios están orientados a todas</p>
            <p className=" text-white font-semibold pb-2 px-4 text-md text-center mb-0 drop-shadow-[(4px 4px 10px rgba(0, 0, 0, 0.25))] sm:text-3xl">las áreas que involucran el capital humano</p>
            <p className=" text-white font-semibold pb-2 px-4 text-md text-center mb-0 drop-shadow-[(4px 4px 10px rgba(0, 0, 0, 0.25))] sm:text-3xl">
              garantizando la mayor profesionalidad.
            </p>

          </div>
          
          <div className=" bg-[#BAC9CE] flex flex-col text-center justify-center gap-10 p-8 h-auto ">
            <div className="flex p-6">
              <h2 className="text-2xl font-semibold">¿Para quiénes los ofrecemos?</h2>
            </div>
            <div className=" flex flex-col justify-center gap-10  md:flex-row">

              <div className=" flex justify-center ">
                <div className="rounded-2xl shadow-lg bg-blue w-72 hover:shadow-lg  duration-300 transform hover:opacity-90 hover:scale-[1.02] h-[360px] ">
                  <a href="#!" className="flex justify-center">
                    <Image className="rounded-t-lg w-52 " src={logoIndividuos} alt="individuos" priority={true} width={200} height={200} />
                  </a>
                  <div className="p-6 ">
                    <p className="text-white  mb-4 text-lg">
                      Para individuos o grupos
                    </p>
                    <button className=" rounded-full  bg-yellow p-2 px-10">
                      <a href="#individuals">QUIERO SABER +</a></button>
                  </div>
                </div>
              </div>
              <div className="flex justify-center ">
                <div className="rounded-2xl shadow-lg bg-blue w-72 hover:shadow-lg  duration-300 transform hover:opacity-90 hover:scale-[1.02] h-[360px]">
                  <a href="#!" className="flex justify-center">
                    <Image className="rounded-t-lg w-52 " src={logoOrg} alt="empresa" priority={true} width={200} height={200} />
                  </a>
                  <div className="p-6 ">
                    <p className="text-white  mb-4 text-lg">
                      Para organizaciones
                    </p>
                    <button className="rounded-full  bg-yellow p-2 px-10"><a href="#organization">QUIERO SABER +</a></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pb-5 text-dark">
            <ServicesCard servicesForIndividuals={individuos} servicesForOrganizations={organizaciones} />

          </div>

          <div className="bg-[url('../public/images/revision-cv-gratis.webp')] h-[65vh] flex flex-col justify-center items-center bg-center bg-cover">

            <h2 className="text-white font-semibold pb-2 px-4 text-3xl text-center mb-0 drop-shadow-[(4px 4px 10px rgba(0, 0, 0, 0.25))]">
            ¡RECURSOS GRATIS!</h2>
            <p className="text-white  pb-5  px-4 text-xl text-center mb-0 drop-shadow-[(4px 4px 10px rgba(0, 0, 0, 0.25))]">Conocé todos los recursos gratuitos que ofrecemos sobre
            <br /> empleabilidad y desarrollo profesional.</p>
            
            <button className="rounded-full font-semibold bg-yellow p-2 px-10">Me Interesa</button>

          </div>

        
        </div>

      </Layout>
      
    </>
  );
  
};

export async function getStaticProps() {
  const services = await getClient()
    .fetch(groq`*[_type == "services"] | order(title desc){
    _id,
    title,
    mainImage,
      description,
      mainImage,
      slug,
      "categories": categories[]->{categoryName},
      "provider": provider->{providerName}
  }`);

  return {
    props: {
      services,
    },
  };
}
export default Services;

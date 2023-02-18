import { Layout } from "@/components/Layout";
import logoIndividuos from 'public/images/card-individuos-grupos.webp'
import Image from "next/image";


const Services = () => {
  return (
    <>
      <Layout
        title={"Servicios"}
        content={"Servicios de Consultora Enlazar para empresas e individuos."}
      >

          <div className="flex text-center justify-center gap-10 p-8 max-h-[450px] ">
            <div className="flex justify-center ">
              <div className="rounded-2xl shadow-lg bg-blue w-72 ">
                <a href="#!" className="flex justify-center">
                  <Image className="rounded-t-lg w-52 " src={logoIndividuos} alt="individuos" width={200} height={200}/>
                </a>
                <div className="p-6 ">
                  <p className="text-white  mb-4 text-lg">
                    Para individuos o grupos
                  </p>
                  <button className="rounded-full  bg-yellow p-2 px-10">QUIERO SABER +</button>
                </div>
              </div>
            </div>
            <div className="flex justify-center ">
              <div className="rounded-2xl shadow-lg bg-blue w-72 ">
                <a href="#!" className="flex justify-center">
                  <Image className="rounded-t-lg w-52 " src={logoIndividuos} alt="individuos" width={200} height={200}/>
                </a>
                <div className="p-6 ">
                  <p className="text-white  mb-4 text-lg">
                  Para organizaciones
                  </p>
                  <button className="rounded-full  bg-yellow p-2 px-10">QUIERO SABER +</button>
                </div>
              </div>
            </div>
          </div>
      </Layout>
    </>
  );
};
export default Services;
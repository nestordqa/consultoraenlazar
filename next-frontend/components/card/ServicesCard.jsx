import { urlFor } from "@/lib/sanity";
import Image from "next/image";
import styles from "./ServicesCard.module.css";


const ServicesCard = ({ servicesForIndividuals, servicesForOrganizations, handleOpenForm }) => {
  
    const shadow = {
        boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.25)"
    }
    return (
        <>
        
            <h2 className="p-16 " id="individuals">Para individuos o grupos:</h2>
            <div className={styles.containerTotal}>

                {servicesForIndividuals &&
                    servicesForIndividuals.map((service) => (
                        <div key={service._id} className={styles.containerCard}>
                            <div  className={styles.containerImage}>
                                <Image className={styles.imagePropias}
                                    alt={service.title + " image"}
                                    src={urlFor(service.mainImage).url()}
                                    width={130}
                                    height={200}
                                     />
                            </div>
                            <div className={styles.containerInfo}>
                                <div >
                                    <h2 className={styles.containerTitles}>{service.title}</h2>
                                    <p className={styles.containerParagraph}>{service.description}</p>

                                </div>

                                <div className={styles.containerButton}>
                
                                    <button className="rounded-full  bg-yellow p-1 px-6 font-semibold" onClick={handleOpenForm}>QUIERO CONTRATAR</button>
                                </div>
                            </div>

                        </div>

                    ))}

            </div>
            <h2 className="p-16 " id="organization">Para organizaciones:</h2>
            <div className={styles.containerTotal}>

                {servicesForOrganizations &&
                    servicesForOrganizations.map((service) => (
                        <div key={service._id} className={styles.containerCard}>
                            <div  className={styles.containerImage}>
                                <Image className={styles.imagePropias}
                                    alt={service.title + " image"}
                                    src={urlFor(service.mainImage).url()}
                                    width={130}
                                    height={200}
                                     />
                            </div>
                            <div className={styles.containerInfo}>
                                <div >
                                    <h2 className={styles.containerTitles}>{service.title}</h2>
                                    <p className={styles.containerParagraph}>{service.description}</p>

                                </div>

                                <div className={styles.containerButton}>
                                    <button className="rounded-full  bg-yellow p-1 px-6 font-semibold" onClick={handleOpenForm}>QUIERO CONTRATAR</button>
                                </div>
                            </div>

                        </div>
                    ))}

            </div>
        </>

    );
};

// border-red-500 border-4
{/* <div className="border-red-500 border-4 flex flex-col items-center w-[250px] h-[380px] shadow-2xl rounded-3xl sm:flex-row sm:w-96 "
                            style={shadow} key={service._id}>
                            <div className=" flex justify-center w-full h-48 rounded-tl-3xl rounded-t-3xl bg-[#BAC9CE] px-6 sm:h-[378px] sm:rounded-bl-3xl sm:rounded-tr-none ">
                                <Image className=""
                                    alt={service.title + " image"}
                                    src={urlFor(service.mainImage).url()}
                                    width={150}
                                    height={150} />
                            </div>
                            <div className=" flex flex-col  h-full">
                                <div className=" p-5 h-44">
                                    <h2 className="pb-3 font-semibold">{service.title}</h2>
                                    <p className="text-sm">{service.description}</p>

                                </div>

                                <div className=" h-full flex items-end justify-center pb-5">
                                    <button className="rounded-full  bg-yellow p-1 px-5 font-semibold text-md">QUIERO CONTRATAR</button>
                                </div>
                            </div>

                        </div> */}

export default ServicesCard;

import { urlFor } from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link";

const ServicesCard = ({ services }) => {
    const { title, description, mainImage, price, slug } = services;
    const shadow = {
        boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.25)"
    }
    return (
        <div className="flex flex-wrap justify-center gap-10 items-center ">
            {services &&
                services.map((service) => (
                    <div className="flex items-center max-w-[500px] h-[280px] shadow-2xl rounded-3xl"
                        style={shadow} key={service._id}>
                        <div className="flex items-center h-full rounded-tl-3xl rounded-bl-3xl bg-[#BAC9CE] w-[30%] px-6">
                            <Image
                                alt={service.title + " image"}
                                src={urlFor(service.mainImage).url()}
                                width={100} height={100} />
                        </div>
                        <div className="flex flex-col w-[70%] h-full">
                            <div className=" p-5 h-44">
                                <h2 className="py-5 font-semibold">{service.title}</h2>
                                <p className="text-sm">{service.description}</p>

                            </div>

                            <div className="flex justify-end mt-6 mr-4">
                                <button className="rounded-full  bg-yellow p-1 px-6 font-semibold">QUIERO CONTRATAR</button>
                            </div>
                        </div>

                    </div>
                ))}
        </div>
    );
};

// border-red-500 border-4

export default ServicesCard;

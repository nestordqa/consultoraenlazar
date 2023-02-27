import Image from "next/image";
import WorkWithUsImage from 'public/images/trabaja-con-nosotros.webp'

const WorkWithUs = () => {
    return (
        <div className="flex">
            <div>
                <h2 className="text-2xl md:text-3xl font-bold text-ellipsis opacity-90">
                ¡Trabajá con nosotros!
                </h2>
                <p>
                    Constantemente estamos ampliando nuestra red de profesionales. Si te sentís identificado/a con nuestra organización, podés dejarnos tu CV y lo tendremos en cuenta para futuras búsquedas.
                </p>
                <button>
                    Cargar mi CV
                </button>
            </div>
            <Image className="w-80" src={WorkWithUsImage}/>
        </div>
    )
}

export default WorkWithUs

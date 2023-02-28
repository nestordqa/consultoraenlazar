import Image from "next/image";
import WorkWithUsImage from 'public/images/trabaja-con-nosotros.webp'

const WorkWithUs = () => {
    return (
        <div className="flex justify-center bg-grey">
            <div className='xsm:flex w-9/12 xsm:justify-center xsm:flex-wrap lg:flex-nowrap py-16 '>
                <div className="pr-24">
                    <h2 className="text-2xl md:text-3xl font-bold text-ellipsis opacity-90 pb-12 text-darkBlue">
                    ¡Trabajá con nosotros!
                    </h2>
                    <p className="text-dark pb-8">
                        Constantemente estamos ampliando nuestra red de profesionales. Si te sentís identificado/a con nuestra organización, podés dejarnos tu CV y lo tendremos en cuenta para futuras búsquedas.
                    </p>
                    <button
                        className="bg-yellow rounded-2xl m-2 py-1 px-8 font-bold uppercase self-center text-dark"
                        onClick={''}
                        >
                        Cargar mi CV
                    </button>
                </div>
                <Image className="w-80" src={WorkWithUsImage} alt='Trabaja con nosotros'/>
            </div>
        </div>
    )
}

export default WorkWithUs

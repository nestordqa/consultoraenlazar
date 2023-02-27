import values from 'public/images/nuestros-valores.gif'
import Image from "next/image";

const Values = () => {
    console.log(values);
    return (
        <div>
            <h2  className="text-2xl md:text-3xl font-bold text-ellipsis opacity-90">
                Nuestros valores
            </h2>
            <div>
                <Image src={values}></Image>
            </div>
        </div>
    )
}

export default Values

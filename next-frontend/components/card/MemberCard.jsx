import { urlFor } from "@/lib/sanity";

const MemberCard = ({ name, image, jobTitle}) => {
    return (
        <div className='box-border py-4 px-2 w-56 text-white'>
            <img 
                src={urlFor(image).url()}
                className="w-56"
                alt='Foto de perfil'
            />
            <strong>{name}</strong>
            <p>{jobTitle}</p>
        </div>
    )
}

export default MemberCard

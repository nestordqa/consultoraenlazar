import { urlFor } from "@/lib/sanity";

const MemberCard = ({ name, image, jobTitle}) => {
    return (
        <div className='box-border py-4 px-2 w-56 '>
            <img 
                src={urlFor(image).url()}
                className="w-56"
                // width={200}
                // height={200}

                >
            </img>
            <strong>{name}</strong>
            <p>{jobTitle}</p>
        </div>
    )
}

export default MemberCard

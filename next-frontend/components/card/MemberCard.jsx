import { urlFor } from "@/lib/sanity";

const MemberCard = ({ name, image, jobTitle}) => {
    return (
        <div class='box-border p-4 w-72'>
            <img 
                src={urlFor(image).url()}
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

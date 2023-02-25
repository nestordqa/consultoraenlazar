import MemberCard from "./MemberCard"

const TeamCards = ({ team }) => {
    return (
        <div className='flex flex-wrap w-9/12 justify-center sm:justify-between'>
            {
                team && team.map((member, index) => (
                    <MemberCard 
                        key={index}
                        image={member.photo}
                        name={member.name}
                        jobTitle={member.jobTitle}
                        >

                    </MemberCard>
                ))
            }
        </div>
    )

}

export default TeamCards

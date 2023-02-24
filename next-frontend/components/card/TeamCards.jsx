import MemberCard from "./MemberCard"

const TeamCards = ({ team }) => {
    return (
        <div class='flex flex-wrap justify-start w-4/5'>
            {
                team && team.map((member, index) => (
                    <MemberCard 
                        id={index}
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

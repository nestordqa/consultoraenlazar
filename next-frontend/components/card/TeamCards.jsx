import MemberCard from "./MemberCards"

const TeamCards = ({ team }) => {
    console.log(team);
    return (
        <div>
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

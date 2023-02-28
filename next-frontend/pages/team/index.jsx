import TeamCards from "@/components/card/TeamCards";
import { Layout } from "@/components/Layout";
import Values from "@/components/values/values";
import WorkWithUs from "@/components/workWithUs/WorkWithUs";
import { loadTeam } from "@/lib/loadTeamMembers";

const Team = ({ team }) => {
  return (
    <>
      <Layout
        title={"Equipo"}
        content={"Equipo de trabajo de Consultora Enlazar"}
      >
      <div className="flex flex-col content-center">
        <section>
          <TeamCards team={team}/>
        </section>
        <section>
          <Values/>
        </section>
        <section >
          <WorkWithUs/>
        </section>
      </div>
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  const team = await loadTeam()
  return {
    props: {
      team
    }
  }
}

export default Team;

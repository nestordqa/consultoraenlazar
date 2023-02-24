import TeamCards from "@/components/card/TeamCards";
import { Layout } from "@/components/Layout";
import { getClient } from "@/lib/sanity.server";

const Team = ({ team }) => {
  return (
    <>
      <Layout 
        title={"Equipo"}
        content={"Equipo de trabajo de Consultora Enlazar."}
      >
        <h1>
          Hola mundo desde Equipo!
        </h1>
        <TeamCards team={team}/>
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  const team = await getClient().fetch(`*[_type == 'team']`)
  return {
    props: {
      team
    }
  }
}

export default Team;

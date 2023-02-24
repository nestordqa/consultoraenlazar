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
      <div className="flex flex-col content-center">
        <div className="flex justify-center items-center w-full h-auto pb-6 md:pb-12 bg-grey">
            <h3 className="pt-16 px-4 md:px-8 text-2xl md:text-3xl font-bold text-center text-ellipsis opacity-90">
              Conoce a nuestro gran equipo...
            </h3>
        </div>
        <div class='flex justify-center py-12'>
          <TeamCards team={team}/>
        </div>
      </div>
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

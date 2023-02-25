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
        <div className="flex justify-center w-full h-40 bg-grey">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-ellipsis opacity-90">
              Conoce a nuestro gran equipo...
            </h3>
        </div>
        <div className='flex justify-around py-12'>
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

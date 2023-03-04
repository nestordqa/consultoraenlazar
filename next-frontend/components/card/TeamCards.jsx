import MemberCard from "./MemberCard";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";

const TeamCards = ({ team }) => {
	return (
		<div className='bg-blue flex justify-center'>
			<div className='flex flex-wrap justify-evenly w-9/12 sm:justify-center'>
				<div className='pb-20'>
					<h3 className=' py-12 text-2xl md:text-3xl text-left font-bold text-ellipsis opacity-90 text-yellow'>
						Conoce a nuestro gran equipo...
					</h3>
					<p className='w-3/5 text-white'>
						Somos un grupo de profesionales que busca educar, acompañar,
						capacitar y orientar para que cada persona logre sus objetivos
						profesionales. Nos une la pasión por el progreso y el desarrollo.
						Valoramos el compañerismo, la lealtad y compromiso de cada
						integrante de nuestro equipo. Buscamos, aprender, debatir, compartir
						y construir colaborativamente para crecer cada día.
					</p>
				</div>
				<div className='grid gap-6 lg:grid-cols-4 md:grid-cols-2 xsm:grid-cols-1 pb-12'>
					{!team
						? Array.from(new Array(6)).map((item, index) => (
								<Box id={index} sx={{ width: 210, marginRight: 0.5, my: 5 }}>
									<Skeleton variant='rectangular' width={210} height={200}/>
									<Box sx={{ pt: 0.5 }}>
										<Skeleton />
										<Skeleton width='60%' />
									</Box>
								</Box>
						  ))
						: team.map((member, index) => (
								<MemberCard
									key={index}
									image={member.photo}
									name={member.name}
									jobTitle={member.jobTitle}
								></MemberCard>
						  ))}
				</div>
			</div>
		</div>
	);
};

export default TeamCards;

import Image from "next/image";
import WorkWithUsImage from "public/images/trabaja-con-nosotros.webp";
import { useState } from "react";
import WorkWithUsForm from "../forms/CVSubmissionForm";

const WorkWithUs = () => {
	const [isOpen, setIsOpen] = useState(false);
	const description = "Adjuntá tu CV y contanos un poco sobre vos.";
	const title = "¡Formá parte del team Enlazar!";

	return (
		<div className='flex justify-center bg-grey lg:h-screen xsm:flex xsm:justify-center xsm:flex-wrap xsm:items-center'>
			<div className='xsm:w-11/12 xsm:py-6 xsm:flex xsm:flex-col xsm:justify-center xsm:items-center lg:flex-row lg:justify-center lg:items-center'>
				<Image
					className='xsm:w-4/5 lg:w-1/4 rounded-full drop-shadow-2xl'
					src={WorkWithUsImage}
					alt='Trabaja con nosotros'
					width='1000'
					height='1000'
				/>
				<div className='lg:w-2/5 xsm:flex xsm:flex-col xsm:justify-center xsm:items-center lg:pl-9 lg:items-start'>
					<h2 className='text-2xl md:text-3xl font-bold text-ellipsis opacity-90 xsm:py-6 lg:text-left text-darkBlue'>
						¡Trabajá con nosotros!
					</h2>
					<p className='text-dark lg:pb-6 xsm:pb-6'>
						Constantemente estamos ampliando nuestra red de profesionales. Si te
						sentís identificado/a con nuestra organización, podés dejarnos tu CV
						y lo tendremos en cuenta para futuras búsquedas.
					</p>
					<button
						className='bg-yellow rounded-2xl m-2 py-1 lg:px-8 font-semibold uppercase xsm:self-center lg:self-start text-dark xsm:px-8'
						onClick={() => setIsOpen(true)}
					>
						Cargar mi CV
					</button>
				</div>
			</div>
			{isOpen && (
				<WorkWithUsForm
					handleClose={setIsOpen}
					title={title}
					description={description}
				/>
			)}
		</div>
	);
};

export default WorkWithUs;

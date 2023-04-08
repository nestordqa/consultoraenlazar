import Image from 'next/image';
import Background from '@/public/images/portada-comunidad.webp';

const Community = () => {
	return (
		<div className=''>
			<div className=''>
				<Image src={Background} alt='Header' priority className='' />
				<p className=''>
					¡Sé parte de nuestra comunidad y<br />
					encontrá todo lo que tenés que saber sobre
					<br />
					el mundo laboral!
				</p>
			</div>
			<h3 className='text-2xl md:text-3xl font-bold text-left text-ellipsis opacity-90 text-black'>
				Encontrarás
			</h3>
			<section className='flex justify-around'>
				<div className='flex flex-col items-center'>
					<Image
						src='/images/icono-tips-consejos.svg'
						width='120'
						height='120'
						alt='Header'
						priority
						className=''
					/>
					<p className='font-medium'>Tips y consejos</p>
				</div>
				<div className='flex flex-col items-center'>
					<Image
						src='/images/icono-ofertas-empleos.svg'
						width='120'
						height='120'
						alt='Header'
						priority
						className=''
					/>
					<p className='font-medium'>Ofertas de empleo</p>
				</div>
				<div className='flex flex-col items-center'>
					<Image
						src='/images/icono-charlas-vivo.svg'
						width='120'
						height='120'
						alt='Header'
						priority
						className=''
					/>
					<p className='font-medium'>Charlas en vivo</p>
				</div>
				<div className='flex flex-col items-center'>
					<Image
						src='/images/icono-espacio-emprender.svg'
						width='120'
						height='120'
						alt='Header'
						priority
						className=''
					/>
					<p className='font-medium'>Espacio para emprendedores</p>
				</div>
				<div className='flex flex-col items-center'>
					<Image
						src='/images/icono-webinars-gratuitos.svg'
						width='120'
						height='120'
						alt='Header'
						priority
						className=''
					/>
					<p className='font-medium'>Webinars gratuitos</p>
				</div>
				<div className='flex flex-col items-center'>
					<Image
						src='/images/icono-descuentos-cursos.svg'
						width='120'
						height='120'
						alt='Header'
						priority
						className=''
					/>
					<p className='font-medium'>
						Descuentos en nuestros <br /> Cursos y Talleres
					</p>
				</div>
			</section>
		</div>
	);
};

export default Community;

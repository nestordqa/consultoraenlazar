import Image from 'next/image';
import Background from '@/public/images/portada-comunidad.webp';
import Airplane from '@/public/images/avioncito.gif';
import Link from 'next/link';

const Community = () => {
	return (
		<div className='relative'>
			<section className='flex flex-col h-[490px] overflow-hidden'>
				<Image src={Background} alt='Header' priority className='' />
				<div className='absolute left-0 right-0 bottom-0 top-0 h-[490px]'>
					<div className='flex w-full h-full justify-center items-center'>
						<p className='text-center text-white text-3xl font-semibold'>
							¡Sé parte de nuestra comunidad y<br />
							encontrá todo lo que tenés que saber sobre
							<br />
							el mundo laboral!
						</p>
					</div>
				</div>
			</section>
			<section id='services' className='flex flex-col pt-12 pb-24 h-[700px]'>
				<div className='flex justify-center pt-5'>
					<Link href='#services'>
						<Image
							src='/images/flecha-doble.svg'
							width='30'
							height='30'
							alt='Flecha doble'
							priority
							className='fill-darkBlue animate-bounce pb-12'
						></Image>
					</Link>
				</div>
				<h3 className='text-2xl md:text-3xl font-semibold text-left text-ellipsis opacity-90 text-black pt-5 pb-14 pl-12'>
					Encontrarás
				</h3>
				<div className='flex flex-wrap justify-evenly pb-24'>
					<div className='flex flex-col items-center'>
						<Image
							src='/images/icono-tips-consejos.svg'
							width='110'
							height='110'
							alt='Header'
							priority
							className=''
						/>
						<p className='font-medium'>Tips y consejos</p>
					</div>
					<div className='flex flex-col items-center'>
						<Image
							src='/images/icono-ofertas-empleos.svg'
							width='110'
							height='110'
							alt='Header'
							priority
							className=''
						/>
						<p className='font-medium'>Ofertas de empleo</p>
					</div>
					<div className='flex flex-col items-center'>
						<Image
							src='/images/icono-charlas-vivo.svg'
							width='110'
							height='110'
							alt='Header'
							priority
							className=''
						/>
						<p className='font-medium'>Charlas en vivo</p>
					</div>
					<div className='flex flex-col items-center'>
						<Image
							src='/images/icono-espacio-emprender.svg'
							width='110'
							height='110'
							alt='Header'
							priority
							className=''
						/>
						<p className='font-medium'>Espacio para emprendedores</p>
					</div>
					<div className='flex flex-col items-center'>
						<Image
							src='/images/icono-webinars-gratuitos.svg'
							width='110'
							height='110'
							alt='Header'
							priority
							className=''
						/>
						<p className='font-medium'>Webinars gratuitos</p>
					</div>
					<div className='flex flex-col items-center'>
						<Image
							src='/images/icono-descuentos-cursos.svg'
							width='110'
							height='110'
							alt='Header'
							priority
							className=''
						/>
						<p className='font-medium text-center'>
							Descuentos en nuestros <br /> Cursos y Talleres
						</p>
					</div>
				</div>
				<div className='flex flex-col items-center'>
					<Link href='https://www.instagram.com/enlazar.ok/' target='_blank'>
						<button className='bg-yellow rounded-2xl py-1 px-8 font-semibold uppercase self-center md:self-end w-48'>
							Ir ahora
						</button>
					</Link>
				</div>
			</section>
			<section id='telegram' className='relative bg-grey'>
				<Image src={Airplane} alt='Avion volando' priority className='' />
				<div className='absolute left-0 right-0 bottom-0 top-32'>
					<h3 className='text-2xl md:text-3xl font-semibold text-left text-ellipsis opacity-90 text-black pl-40'>
						También te esperamos
						<br />
						en Telegram...
					</h3>
					<div className='pl-40 pt-4 pb-16'>
						<ul>
							<li>• Ofertas de empleo</li>
							<li>• Networking</li>
							<li>• Tips para mejorar tu perfil profesional</li>
							<li>• Acompañamiento para la inserción laboral</li>
							<li>• Apoyo profesional</li>
							<li>• Contenido de calidad</li>
							<li>• Información de actualidad</li>
							<li>• Cursos y capacitaciones</li>
						</ul>
					</div>
					<Link
						href='https://t.me/joinchat/e8dtvJ5XB2k1MGIx'
						target='_blank'
						className='pl-40'
					>
						<button className='bg-yellow rounded-2xl py-1 px-8 font-semibold uppercase self-center md:self-end'>
							¡Quiero ser parte!
						</button>
					</Link>
				</div>
			</section>
		</div>
	);
};

export default Community;

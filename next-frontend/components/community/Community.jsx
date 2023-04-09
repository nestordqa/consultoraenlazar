import Image from 'next/image';
import Background from '@/public/images/portada-comunidad.webp';
import Link from 'next/link';

const Community = () => {
	return (
		<div className=''>
			<section className=''>
				<Image src={Background} alt='Header' priority className='' />
				<p className=''>
					¡Sé parte de nuestra comunidad y<br />
					encontrá todo lo que tenés que saber sobre
					<br />
					el mundo laboral!
				</p>
			</section>
			<section>
				<h3 className='text-2xl md:text-3xl font-bold text-left text-ellipsis opacity-90 text-black'>
					Encontrarás
				</h3>
				<div className='flex justify-around'>
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
				</div>
				<Link href='https://www.instagram.com/enlazar.ok/' target='_blank'>
					<button className='bg-yellow rounded-2xl py-1 px-8 font-semibold uppercase self-center md:self-end'>
						Ir ahora
					</button>
				</Link>
			</section>
			<section>
				<h3 className='text-2xl md:text-3xl font-bold text-left text-ellipsis opacity-90 text-black'>
					También te esperamos
					<br />
					en Telegram...
				</h3>
				<div>
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
                <Link href='https://t.me/joinchat/e8dtvJ5XB2k1MGIx' target='_blank'>
					<button className='bg-yellow rounded-2xl py-1 px-8 font-semibold uppercase self-center md:self-end'>
                        ¡Quiero ser parte!
					</button>
				</Link>
			</section>
		</div>
	);
};

export default Community;

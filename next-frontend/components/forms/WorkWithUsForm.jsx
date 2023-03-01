'use client';

import { useState } from 'react';

const WorkWithUsForm = ({ setIsOpen }) => {
	const [data, setData] = useState({
		name: '',
		phone: '',
		email: '',
		comments: '',
	});

	const disabled = 'false';

	const handleOnChange = event => {
		event.preventDefault();
		setData(prev => ({ ...prev, [event.target.name]: event.target.value }));
	};

	const handleSubmit = event => {
		event.preventDefault();
        setIsOpen(false)
	};

	return (
		<div>
			<div>
				<h2 className='text-darkBlue px-2 text-2xl lg:text-3xl font-semibold text-ellipsis text-center'>
					¡Formá parte del team Enlazar!
				</h2>
				<p className='p-3 pb-12 font-semibold text-ellipsis text-center text-base'>
					Adjuntá tu CV y contanos un poco sobre vos.
				</p>
			</div>
			<form onSubmit={handleSubmit}>
				<div className='w-full flex flex-col md:flex-row justify-evenly items-center'>
					<input
						type='text'
						name='name'
						value={data.name}
						placeholder='Nombre y Apellido'
						onChange={handleOnChange}
						className='flex w-full h-[3.3rem] py-2 px-4 border border-solid border-grey rounded-xl text-lg'
					/>
					<input
						type='text'
						name='phone'
						value={data.phone}
						placeholder='Teléfono'
						onChange={handleOnChange}
						className='flex justify-between w-full h-[3.3rem] py-2 px-4 border border-solid border-grey rounded-xl text-lg '
					/>
				</div>
				<div>
					<input
						type='text'
						name='email'
						value={data.email}
						placeholder='Email'
						onChange={handleOnChange}
						className='flex my-2 w-full py-3 px-4 border border-solid border-grey rounded-xl text-lg'
					/>
				</div>
				<div>
					<textarea
						name='comments'
						value={data.comments}
						placeholder='Contanos un poco sobre vos'
                        onChange={handleOnChange}
						className='flex w-full max-h-24 pt-2 px-4 border border-solid border-grey rounded-xl text-lg resize-none mb-3 md:h-3/4'
					/>
				</div>
				<div className='flex pt-3 '>
					<button className='border-2 border-yellow rounded-2xl py-1 px-8 font-semibold uppercase self-center md:self-end'>
						Cargar Archivo
					</button>
					<button
						className={
							disabled
								? 'bg-grey rounded-2xl py-1 px-8 font-semibold uppercase self-center md:self-end'
								: 'bg-yellow rounded-2xl py-1 px-8 font-semibold uppercase self-center md:self-end'
						}
						disabled={disabled}
					>
						Enviar
					</button>
				</div>
			</form>
		</div>
	);
};

export default WorkWithUsForm;

import { useState, useEffect } from 'react';

const ContactUsForm = () => {
	const [input, setData] = useState({
		name: '',
		phone: '',
		email: '',
		comments: '',
		company: '',
	});

	const [errors, setErrors] = useState({
		name: ' ',
		phone: ' ',
		email: ' ',
		comments: ' ',
		company: ' ',
	});

	const validate = (input) => {
		if (input.name === 'email') {
			!/\S+@\S+\.\S+/.test(input.value)
				? setErrors((prev) => ({
						...prev,
						email: 'Ingresa un email válido',
				  }))
				: setErrors((prev) => ({ ...prev, email: '' }));
		} else if (input.name === 'name') {
			!/^[A-Z][a-zA-ZÀ-ÿ\s]{1,40}$/.test(input.value)
				? setErrors((prev) => ({
						...prev,
						name: 'Ingresa un nombre válido',
				  }))
				: setErrors((prev) => ({ ...prev, name: '' }));
		} else if (input.name === 'phone') {
			!/^(\+|00)[1-9][0-9 \-\(\)\.]{11,32}$/.test(input.value) ||
			input.value.length < 8
				? setErrors((prev) => ({
						...prev,
						phone: 'Ingresa un número de teléfono válido',
				  }))
				: setErrors((prev) => ({ ...prev, phone: '' }));
		} else if (input.name === 'comments') {
			input.value.length < 50 || input.value.length > 1000
				? setErrors((prev) => ({
						...prev,
						comments: 'Entre 50 y 1000 caracteres',
				  }))
				: setErrors((prev) => ({ ...prev, comments: '' }));
		} else if (input.name === 'company') {
			!input.value.length
				? setErrors((prev) => ({
						...prev,
						company: 'Ingresa un nombre válido',
				  }))
				: setErrors((prev) => ({ ...prev, company: '' }));
		}
	};

	const handleOnChange = (event) => {
		event.preventDefault();
		setData((prev) => ({ ...prev, [event.target.name]: event.target.value }));
		validate(event.target);
	};

	const handleSubmit = (event) => {
		//en esta funcion se tiene que ejecutar un axios.post al back
	};

	let isDisabled = Object.values(errors).join('').length ? true : false;

	return (
		<>
			<div className='flex items-center justify-center max-h-screen pt-10 px-4 pb-5 text-center sm:block sm:p-0'>
				<div className='inline-block align-bottom rounded-lg text-left shadow-2xl transform transition-all my-2 sm:align-middle sm:max-w-2xl sm:w-full bg-white'>
					<div className='px-12 py-12 rounded-t-lg'>
						<div className='pt-4'>
							<h2 className='text-darkBlue px-2 text-2xl lg:text-3xl font-semibold text-ellipsis text-center'>
								Te orientamos en el mundo laboral ¡Grandes oportunidades te
								esperan!
							</h2>
							<p className='p-3 pb-12 font-semibold text-ellipsis text-center text-base'>
								Envianos tu consulta y nos pondremos en contacto a la brevedad.
							</p>
						</div>
						<form
							onSubmit={handleSubmit}
							action='https://formsubmit.co/talento@enlazar.xyz'
							method='POST'
							encType='multipart/form-data'
						>
							<div className='w-full flex flex-col md:flex-row md:mb-2 justify-evenly items-center'>
								<div className='flex flex-col w-full mb-2 justify-center md:w-2/4 md:mr-2 md:mb-0'>
									<input
										type='text'
										name='name'
										value={input.name}
										placeholder='Nombre y Apellido'
										onChange={handleOnChange}
										className='flex w-full h-[3.3rem] py-2 px-4 border border-solid border-grey rounded-xl text-lg'
										required
									/>
									<small className='h-6 text-red-600'>{errors.name}</small>
								</div>
								<div className='flex flex-col w-full mt-2 justify-center md:w-2/4 md:ml-2 md:mt-0'>
									<input
										type='text'
										name='company'
										value={input.company}
										placeholder='Empresa'
										onChange={handleOnChange}
										className='flex justify-between w-full h-[3.3rem] py-2 px-4 border border-solid border-grey rounded-xl text-lg '
										required
									/>
									<small className='h-6 text-red-600'>{errors.company}</small>
								</div>
							</div>
              <div className='w-full flex flex-col md:flex-row md:mb-2 justify-evenly items-center'>
								<div className='flex flex-col w-full mb-2 justify-center md:w-2/4 md:mr-2 md:mb-0'>
									<input
										type='email'
										name='email'
										value={input.email}
										placeholder='Email'
										onChange={handleOnChange}
										className='flex w-full py-2 px-4 border border-solid border-grey rounded-xl text-lg'
										required
									/>
									<small className='h-6 text-red-600'>{errors.email}</small>
								</div>
                <div className='flex flex-col w-full mt-2 justify-center md:w-2/4 md:ml-2 md:mt-0'>
									<input
										type='tel'
										name='phone'
										value={input.phone}
										placeholder='Teléfono'
										onChange={handleOnChange}
										className='flex justify-between w-full h-[3.3rem] py-2 px-4 border border-solid border-grey rounded-xl text-lg '
										required
									/>
									<small className='h-6 text-red-600'>{errors.phone}</small>
								</div>
							</div>
							<div className='flex flex-col w-full justify-start md:mb-2 md:h-2/4'>
								<textarea
									name='comments'
									value={input.comments}
									placeholder='Contanos un poco sobre vos'
									onChange={handleOnChange}
									rows={8}
									className='flex w-full max-h-24 py-2 px-4 border border-solid border-grey rounded-xl text-lg resize-none mb-3 md:h-3/4'
									required
								/>
								<div className='flex justify-between'>
									<small className='h-6 text-red-600'>{errors.comments}</small>
									<small
										className={
											errors.comments
												? 'h-6 text-red-600'
												: 'h-6 text-green-600'
										}
									>
										{!input.comments.length ? '' : input.comments.length}
									</small>
								</div>
							</div>
							<div className='flex pt-3 justify-end self-center'>
								<div className='pl-5'>
									<button
										className={
											isDisabled
												? 'bg-grey text-gray-500 rounded-2xl py-1 px-8 font-semibold uppercase self-center md:self-end'
												: 'bg-yellow rounded-2xl py-1 px-8 font-semibold uppercase self-center md:self-end'
										}
										type='submit'
										disabled={isDisabled}
									>
										Enviar consulta
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
			{/* </div> */}
		</>
	);
};

export default ContactUsForm;

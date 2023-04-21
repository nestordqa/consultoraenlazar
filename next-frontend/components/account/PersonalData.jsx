import { useState, useEffect } from 'react';
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react';
import { FaSave } from 'react-icons/fa';
import data from '@/public/countries.js'

export default function PersonalData({ session }) {
	const supabase = useSupabaseClient();
	const user = useUser();
	const [loading, setLoading] = useState(true);
	const [username, setUsername] = useState(null);
	const [website, setWebsite] = useState(null);
	const [avatar_url, setAvatarUrl] = useState(null);
	const [input, setInput] = useState({
		firstName: '',
		lastName: '',
		phone: '',
		occupation: '',
		country: '',
		company: '',
		email: '',
	});

	useEffect(() => {
		getProfile();
	}, [session]);

	function handleOnChange(event) {
		setInput((prev) => ({ ...prev, [event.target.name]: event.target.value }));
	}

	async function getProfile() {
		try {
			// setLoading(true);

			let { data, error, status } = await supabase
				.from('profiles')
				.select(
					`firstName, lastName, phone, occupation, country, company, email`
				)
				.eq('id', user.id)
				.single();

			if (error && status !== 406) {
				throw error;
			}

			if (data) {
				setInput({
					firstName: data.firstName,
					lastName: data.lastName,
					phone: data.phone,
					occupation: data.occupation,
					country: data.country,
					company: data.company,
					email: data.email,
				});
			}
		} catch (error) {
			// alert('Error loading user data!');
			// console.log(error);
		} 
	}

	async function updateProfile(e) {
		e.preventDefault()
		try {
			// setLoading(true);

			const updates = {
				id: user.id,
				firstName: input.firstName,
				lastName: input.lastName,
				phone: input.phone,
				occupation: input.occupation,
				country: input.country,
				company: input.company,
				updated_at: new Date().toISOString(),
			};

			let { error } = await supabase.from('profiles').upsert(updates);
			if (error) throw error;
			alert('Datos actualizados');
		} catch (error) {
			console.log(error);
			alert('Error al actualizar los datos');
		} finally {
			// setLoading(false);
		}
	}

	return (
		<div className='flex flex-col w-9/12 content-center'>
			<div className='flex w-full justify-center'>
				<form className='xsm:w-full xl:w-3/4'>
					<div className='pb-2'>
						<label className='font-semibold' htmlFor='email'>
							Email:{' '}
						</label>
						<input
							id='email'
							name='email'
							type='text'
							value={input.email}
							className='flex bg-gray-50 text-gray-500 w-full xsm:h-8 md:h-[3.3rem] xsm:py-1 xsm:px-4 md:py-2 md:px-4 border border-solid border-grey rounded-xl xsm:text-xs md:text-lg bg-transparent'
							disabled
						/>
					</div>
					<div className='md:flex gap-4 xl:w-full'>
						<div className='pb-2 xl:w-full'>
							<label className='font-semibold' htmlFor='firstName'>
								Nombre:{' '}
							</label>
							<input
								id='firstName'
								name='firstName'
								type='text'
								value={input.firstName}
								onChange={handleOnChange}
								className='flex w-full xsm:h-8 md:h-[3.3rem] xsm:py-1 xsm:px-4 md:py-2 md:px-4 border border-solid border-grey rounded-xl xsm:text-xs md:text-lg bg-transparent'
							/>
						</div>
						<div className='pb-2 xl:w-full'>
							<label className='font-semibold' htmlFor='lastName'>
								Apellido:{' '}
							</label>
							<input
								id='lastName'
								name='lastName'
								type='text'
								value={input.lastName}
								onChange={handleOnChange}
								className='flex w-full xsm:h-8 md:h-[3.3rem] xsm:py-1 xsm:px-4 md:py-2 md:px-4 border border-solid border-grey rounded-xl xsm:text-xs md:text-lg bg-transparent'
							/>
						</div>
					</div>
					<div className='md:flex gap-4'>
						<div className='pb-2 xl:w-full'>
							<label className='font-semibold' htmlFor='phone'>
								Teléfono:{' '}
							</label>
							<input
								id='phone'
								name='phone'
								type='tel'
								value={input.phone}
								onChange={handleOnChange}
								className='flex w-full xsm:h-8 md:h-[3.3rem] xsm:py-1 xsm:px-4 md:py-2 md:px-4 border border-solid border-grey rounded-xl xsm:text-xs md:text-lg bg-transparent'
							/>
						</div>
						<div className='pb-2 xl:w-full'>
							<label className='font-semibold' htmlFor='occupation'>
								Ocupación:{' '}
							</label>
							<input
								id='occupation'
								name='occupation'
								type='text'
								value={input.occupation}
								onChange={handleOnChange}
								className='flex w-full xsm:h-8 md:h-[3.3rem] xsm:py-1 xsm:px-4 md:py-2 md:px-4 border border-solid border-grey rounded-xl xsm:text-xs md:text-lg bg-transparent'
							/>
						</div>
					</div>
					<div className='pb-2'>
						<label className='font-semibold' htmlFor='company'>
							Empresa:{' '}
						</label>
						<input
							id='company'
							name='company'
							type='text'
							value={input.company}
							onChange={handleOnChange}
							className='flex w-full xsm:h-8 md:h-[3.3rem] xsm:py-1 xsm:px-4 md:py-2 md:px-4 border border-solid border-grey rounded-xl xsm:text-xs md:text-lg bg-transparent'
						/>
					</div>
					<div className='pb-2'>
						<label for='country' className='font-semibold'>
							País:
						</label>
						<select
							name='country'
							id='country'
							className='flex w-full xsm:h-8 md:h-[3.3rem] xsm:py-1 xsm:px-4 md:py-2 md:px-4 border border-solid border-grey rounded-xl xsm:text-xs md:text-lg bg-transparent'
							onChange={handleOnChange}
							defaultValue={input.country !== '' ? input.country : 'Argentina'}
						>
							{data.countries?.map((country) => (
								<option key={country.id} value={country.name}>
									{country.name}
								</option>
							))}
						</select>
					</div>

					<div className='flex justify-center p-5'>
						<button
							// className='button primary block'
							onClick={(e) => updateProfile(e)}
							// disabled={loading}
							className='bg-yellow rounded-3xl py-3 px-10 font-semibold uppercase self-center md:self-end'
						>
							Guardar
						</button>
					</div>
				</form>
				{/* <div>
				<button
				className='button block'
				onClick={() => supabase.auth.signOut()}
				>
				Sign Out
				</button>
			</div> */}
			</div>
		</div>
	);
}

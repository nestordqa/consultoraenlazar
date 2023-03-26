import { useState, useEffect } from 'react';
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react';

export default function Account({ session }) {
  console.log(session);
	const supabase = useSupabaseClient();
	const user = useUser();
	const [loading, setLoading] = useState(true);
	const [username, setUsername] = useState(null);
	const [website, setWebsite] = useState(null);
	const [avatar_url, setAvatarUrl] = useState(null);
	const [input, setInput] = useState({
		firstName: session.user.user_metadata.firstName || '',
		lastName: session.user.user_metadata.lastName || '',
		phone: session.user.user_metadata.phone || '',
		occupation: session.user.user_metadata.occupation || '',
		country: session.user.user_metadata.country || '',
		company: session.user.user_metadata.company || '',
	});

  // useEffect(() => {
	// 	getProfile();
	// }, [session]);

	function handleOnChange(event) {
		setInput((prev) => ({ ...prev, [event.target.name]: event.target.value }));
	}

	async function getProfile() {
		try {
			setLoading(true);

			const { user } = (await supabase.auth.getSession()).data.session;

			console.log(user);
			// let { data, error, status } = await supabase
			//   .from('profiles')
			//   .select(`username, website, avatar_url`)
			//   .eq('id', user.id)
			//   .single()

			// if (error && status !== 406) {
			//   throw error
			// }

			// if (data) {
			//   setUsername(data.username)
			//   setWebsite(data.website)
			//   setAvatarUrl(data.avatar_url)
			// }
		} catch (error) {
			alert('Error loading user data!');
			console.log(error);
		} finally {
			setLoading(false);
		}
	}

	async function updateProfile(e) {
		try {
			setLoading(true);

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

			// let { error } = await supabase.from('profiles').upsert(updates);
      const { data, error } = await supabase.auth.updateUser({
        data: updates,
      })
      // console.log('update:', data);
			if (error) throw error;
			alert('Profile updated!');
		} catch (error) {
			alert('Error updating the data!');
			console.log(error);
		} finally {
			setLoading(false);
		}
	}

	return (
		<div className='form-widget'>
			<form>
				<div>
					<label htmlFor='email'>Email: </label>
					<input
						id='email'
						name='email'
						type='text'
						value={session.user.email}
						disabled
					/>
				</div>
				<div>
					<label htmlFor='firstName'>Nombre: </label>
					<input
						id='firstName'
            name='firstName'
						type='text'
						value={input.firstName}
						onChange={handleOnChange}
					/>
				</div>
				<div>
					<label htmlFor='lastName'>Apellido: </label>
					<input
						id='lastName'
						name='lastName'
						type='text'
						value={input.lastName}
						onChange={handleOnChange}
					/>
				</div>
				<div>
					<label htmlFor='phone'>Teléfono: </label>
					<input
						id='phone'
            name='phone'
						type='tel'
						value={input.phone}
						onChange={handleOnChange}
					/>
				</div>
				<div>
					<label htmlFor='occupation'>Ocupación: </label>
					<input
						id='occupation'
            name='occupation'
						type='text'
						value={input.occupation}
						onChange={handleOnChange}
					/>
				</div>
				<div>
					<label htmlFor='company'>Empresa: </label>
					<input
						id='company'
            name='company'
						type='text'
						value={input.company}
						onChange={handleOnChange}
					/>
				</div>
				<div>
					<label htmlFor='country'>País: </label>
					<input
						id='country'
            name='country'
						type='text'
						value={input.country}
						onChange={handleOnChange}
					/>
				</div>
			</form>

			<div>
				<button
					className='button primary block'
					onClick={() => updateProfile()}
					// disabled={loading}
				>
					Actualizar
				</button>
			</div>

			<div>
				<button
					className='button block'
					onClick={() => supabase.auth.signOut()}
				>
					Sign Out
				</button>
			</div>
		</div>
	);
}

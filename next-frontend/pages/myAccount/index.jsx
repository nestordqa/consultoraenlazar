import PersonalData from '@/components/account/PersonalData';
import { Layout } from '@/components/Layout';
import { useSession } from '@supabase/auth-helpers-react';
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Historial from '@/components/account/Historial';
import { BsPersonVcard } from "react-icons/bs";
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { Router, useRouter } from "next/router";


function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role='tabpanel'
			hidden={value !== index}
			id={`vertical-tabpanel-${index}`}
			aria-labelledby={`vertical-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					{children}
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

function a11yProps(index) {
	return {
		id: `vertical-tab-${index}`,
		'aria-controls': `vertical-tabpanel-${index}`,
	};
}

const MyAccount = () => {
	const [value, setValue] = React.useState(0);
  const supabase = useSupabaseClient();
  const route = useRouter();

  const handleSignOut = async () => {
		const { error } = await supabase.auth.signOut();
    route.push("/auth");
	};

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const session = useSession();
	console.log(session);
	return (
		<div>
			<Layout title={'Mi cuenta'} content={'Mi cuenta'}>
				<div className='w-full'>
					<div>
						<h2 className='text-2xl p-12 font-semibold'>Bienvenido, {session?.user?.email} 👋</h2>
					</div>
					{/* <Box
						sx={{
							flexGrow: 1,
							bgcolor: 'background.paper',
							display: 'flex',
							height: 'auto',
						}}
					> */}
					<div className='flex'>
						<Tabs
							orientation='vertical'
							variant='scrollable'
							value={value}
							onChange={handleChange}
							aria-label='Vertical tabs example'
							sx={{ borderRight: 1, borderColor: 'divider' }}
						>
							<Tab label='Mis datos' {...a11yProps(0)}/>
							<Tab label='Mi historial' {...a11yProps(1)} />
							<Tab label='Mis otras opciones' {...a11yProps(2)} />
							{/* <Tab label='Item Four' {...a11yProps(3)} />
							<Tab label='Item Five' {...a11yProps(4)} />
							<Tab label='Item Six' {...a11yProps(5)} /> */}
							<Tab label='Salir'  onClick={handleSignOut} {...a11yProps(6)} />
						</Tabs>
						<div className='w-full'>
							<TabPanel value={value} index={0}>
							  <PersonalData />
							</TabPanel>
							<TabPanel value={value} index={1}>
								<Historial />
							</TabPanel>
							<TabPanel value={value} index={2}>
								Otras opciones
							</TabPanel>
							<TabPanel value={value} index={3}>
								Item Four
							</TabPanel>
						</div>
						{/* </Box> */}
					</div>
				</div>
			</Layout>
		</div>
	);
};

export default MyAccount;

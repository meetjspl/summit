import { Charity } from '@/components/charity.tsx';
import { Partners } from '@/components/partners.tsx';
import { Venue } from '@/components/venue.tsx';

import { Hero } from './components/hero.tsx';
import { Tickets } from './components/tickets.tsx';

const partners = [
	{
		name: 'SGH',
		logoUrl: '/src/assets/partners/SGH.png',
		websiteUrl: 'https://www.sgh.waw.pl',
	},
	{
		name: 'AI Devs',
		logoUrl: '/src/assets/partners/ai_devs.png',
		websiteUrl: 'https://aidevs.pl',
	},
	{
		name: 'BRAVE',
		logoUrl: '/src/assets/partners/BRAVE.png',
		websiteUrl: 'https://socket.dev',
	},
	{
		name: 'Socket.dev',
		logoUrl: '/src/assets/partners/socket.png',
		websiteUrl: 'https://socket.dev',
	},
	{
		name: 'Windsurf',
		logoUrl: '/src/assets/partners/windsurf.png',
		websiteUrl: '',
	},
	{
		name: 'Your logo here',
		logoUrl: '/src/assets/partners/logo.png',
		websiteUrl: '',
	},
	{
		name: 'Your logo here',
		logoUrl: '/src/assets/partners/logo.png',
		websiteUrl: '',
	},
	{
		name: 'Your logo here',
		logoUrl: '/src/assets/partners/logo.png',
		websiteUrl: '',
	},
	{
		name: 'Your logo here',
		logoUrl: '/src/assets/partners/logo.png',
		websiteUrl: '',
	},
	{
		name: 'Your logo here',
		logoUrl: '/src/assets/partners/logo.png',
		websiteUrl: '',
	},
	{
		name: 'Your logo here',
		logoUrl: '/src/assets/partners/logo.png',
		websiteUrl: '',
	},
];

export const App = () => {
	return (
		<>
			<Hero />
			<Partners partners={partners} />
			<Venue />
			<Tickets />
			<Charity />
		</>
	);
};

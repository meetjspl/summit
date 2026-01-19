import { Charity } from '@/components/charity.tsx';
import { InfoCards } from '@/components/info-cards.tsx';
import { Partners } from '@/components/partners.tsx';
import { Venue } from '@/components/venue.tsx';

import { Hero } from './components/hero.tsx';
import { Tickets } from './components/tickets.tsx';
import BRAVELogo from '/src/assets/partners/BRAVE.png';
import SGHLogo from '/src/assets/partners/SGH.png';
import AI_DevsLogo from '/src/assets/partners/ai_devs.png';
import yourLogo from '/src/assets/partners/logo.png';
import SocketDevLogo from '/src/assets/partners/socket.png';

const partners = [
	{
		name: 'SGH',
		logoUrl: SGHLogo,
		websiteUrl: 'https://www.sgh.waw.pl',
	},
	{
		name: 'AI_devs',
		logoUrl: AI_DevsLogo,
		websiteUrl: 'https://aidevs.pl',
	},
	{
		name: 'BRAVE',
		logoUrl: BRAVELogo,
		websiteUrl: 'https://brave.courses',
	},
	{
		name: 'Socket.dev',
		logoUrl: SocketDevLogo,
		websiteUrl: 'https://socket.dev',
	},
	{
		name: 'Your logo here',
		logoUrl: yourLogo,
		websiteUrl: '',
	},
	{
		name: 'Your logo here',
		logoUrl: yourLogo,
		websiteUrl: '',
	},
	{
		name: 'Your logo here',
		logoUrl: yourLogo,
		websiteUrl: '',
	},
	{
		name: 'Your logo here',
		logoUrl: yourLogo,
		websiteUrl: '',
	},
];

export const App = () => {
	return (
		<>
			<Hero />
			<InfoCards />
			<Partners partners={partners} />
			<Venue />
			<Tickets />
			<Charity />
		</>
	);
};

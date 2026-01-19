import { CFP } from '@/components/cfp.tsx';
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
		name: 'Plenti',
		logoUrl: 'https://downloads.intercomcdn.com/i/o/304725/0a02f7f949cca8890bbca5d1/4ca595afa599e4a52051dbf5ac3c7194.png',
		websiteUrl: 'https://plenti.app',
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
			<CFP />
			<Partners partners={partners} />
			<Venue />
			<Tickets />
			<Charity />
		</>
	);
};

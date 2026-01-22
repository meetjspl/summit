import PlanbyLogo from '@/assets/partners/planby-pro-logo.svg';
import SlidoLogo from '@/assets/partners/slido.svg';
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
import JetBrainsLogo from '/src/assets/partners/jetbrains-mono-white.svg';
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
		name: 'JetBrains',
		logoUrl: JetBrainsLogo,
		websiteUrl: 'https://www.jetbrains.com',
	},
	{
		name: 'Crossweb',
		logoUrl:
			'https://crossweb.pl/upload/materialy/logo_podstawowe_mono_biale_JPG.jpg',
		websiteUrl: 'https://crossweb.pl',
	},
	{
		name: 'slido',
		logoUrl: SlidoLogo,
		websiteUrl: 'https://www.slido.com/',
	},
	{
		name: 'plabny',
		logoUrl: PlanbyLogo,
		websiteUrl: 'https://planby.app/',
		type: 'hello',
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

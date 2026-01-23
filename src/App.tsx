import SocketDevLogo from '@/assets/partners/gold/socket.png';
import PlanbyLogo from '@/assets/partners/hello/planby-pro.png';
import CyberfolksLogo from '@/assets/partners/hello/cyberfolks.svg';
import SlidoLogo from '@/assets/partners/slido.svg';
import { CFP } from '@/components/cfp.tsx';
import { Charity } from '@/components/charity.tsx';
import { InfoCards } from '@/components/info-cards.tsx';
import { Partners } from '@/components/partners.tsx';
import { PhotosSlider } from '@/components/photos-slider.tsx';
import { Venue } from '@/components/venue.tsx';

import { Hero } from './components/hero.tsx';
import { Tickets } from './components/tickets.tsx';
import BRAVELogo from '/src/assets/partners/BRAVE.png';
import SGHLogo from '/src/assets/partners/SGH.png';
import AI_DevsLogo from '/src/assets/partners/ai_devs.png';
import JetBrainsLogo from '/src/assets/partners/jetbrains-mono-white.svg';
import WindsurfLogo from '/src/assets/partners/windsurf.svg';

import type { Partner } from '@/types/partner.ts';

const partners: Partner[] = [
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
		type: 'gold',
	},
	{
		name: 'Windsurf',
		logoUrl: WindsurfLogo,
		websiteUrl: 'https://windsurf.com',
		type: 'silver',
	},
	{
		name: 'JetBrains',
		logoUrl: JetBrainsLogo,
		websiteUrl: 'https://www.jetbrains.com',
		type: 'silver',
	},
	{
		name: 'Crossweb',
		logoUrl:
			'https://crossweb.pl/upload/materialy/logo_podstawowe_mono_biale_JPG.jpg',
		websiteUrl: 'https://crossweb.pl',
	},
	{
		name: 'Typesense',
		logoUrl: 'https://typesense.org/typesense-logo-dark.svg',
		websiteUrl: 'https://typesense.org',
		type: 'gold',
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
	{
		name: 'cyber_Folks',
		logoUrl: CyberfolksLogo,
		websiteUrl: 'https://cyberfolks.pl/',
		type: 'hello',
  },
  {
		name: 'Instytut Fullstack',
		logoUrl: 'https://instytutfullstack.pl/assets/newLogoVector.svg',
		websiteUrl: 'https://instytutfullstack.pl',
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
			<PhotosSlider />
			<Charity />
			{/*<CoOrganizer />*/}
		</>
	);
};
